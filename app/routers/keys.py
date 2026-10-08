import csv
import datetime
import io
import json
import re
from urllib.parse import unquote
from typing import Optional, Dict, Any, List
from fastapi import APIRouter, HTTPException, Query, Body, Response, Depends
from pydantic import BaseModel, Field
from redis.exceptions import (
    RedisError,
    AuthenticationError,
    ConnectionError as RedisConnectionError,
    TimeoutError as RedisTimeoutError,
    ReadOnlyError,
    ClusterDownError,
    ResponseError,
)
from app.logger import logger
from app.dependencies import require_write_permission
from app.models import (
    KeyListResponse,
    ActiveConnectionStatus,
    ClusterTopologyResponse,
    SlowlogResponse,
    MemoryOverviewResponse,
    MemoryAnalysisRequest,
    MemoryAnalysisResponse,
    BulkDeleteDryRunRequest,
    BulkDeleteDryRunResponse,
    BulkDeleteExecuteRequest,
    BulkDeleteExecuteResponse,
)
from app.redis_manager import redis_manager, DOWNLOAD_MAX_ITEMS

router = APIRouter(prefix="/api", tags=["Keys & Status"])


def raise_mapped_exception(e: Exception, context_msg: str):
    """
    Map Redis and system exceptions to meaningful HTTP status codes with diagnostic logging.
    """
    if isinstance(e, HTTPException):
        raise e

    logger.error(f"{context_msg}: {e}", exc_info=True)

    if isinstance(e, AuthenticationError):
        raise HTTPException(status_code=401, detail=f"Redis authentication failed: {str(e)}")
    elif isinstance(e, ReadOnlyError):
        raise HTTPException(status_code=403, detail="Write rejected: connected Redis node is a read-only replica.")
    elif isinstance(e, ClusterDownError):
        raise HTTPException(status_code=503, detail=f"Redis cluster is down or partitioned: {str(e)}")
    elif isinstance(e, (ConnectionError, RedisConnectionError)):
        raise HTTPException(status_code=503, detail=f"Redis connection unavailable: {str(e)}")
    elif isinstance(e, (TimeoutError, RedisTimeoutError)):
        raise HTTPException(status_code=504, detail=f"Redis command timed out: {str(e)}")
    elif isinstance(e, ResponseError):
        raise HTTPException(status_code=400, detail=f"Redis command error: {str(e)}")
    else:
        raise HTTPException(status_code=500, detail=f"{context_msg}: {str(e)}")


class TTLUpdateRequest(BaseModel):
    seconds: int = Field(..., description="Seconds until expiration. Use -1 to persist key.")


class HashFieldSetRequest(BaseModel):
    field: str
    value: str


class KeyDeleteRequest(BaseModel):
    confirmation: Optional[str] = None


@router.get("/status", response_model=ActiveConnectionStatus)
async def get_active_status():
    """Health check (PING) and status information for active Redis connection."""
    return await redis_manager.get_status()


@router.get("/clients")
async def get_connected_clients():
    """Retrieve list of connected clients with IP, port, age, idle, command, etc."""
    try:
        return await redis_manager.get_clients()
    except Exception as e:
        raise_mapped_exception(e, "Failed to fetch clients")


@router.delete("/clients/{client_id}", dependencies=[Depends(require_write_permission)])
async def kill_client_endpoint(client_id: str):
    """Disconnect/kill a connected client by its ID."""
    try:
        success = await redis_manager.kill_client(client_id)
        return {"success": success, "client_id": client_id}
    except Exception as e:
        raise_mapped_exception(e, f"Failed to kill client {client_id}")


@router.get("/topology", response_model=ClusterTopologyResponse)
async def get_cluster_topology():
    """Retrieve cluster nodes topology or master-replica nodes."""
    try:
        return await redis_manager.get_topology()
    except Exception as e:
        raise_mapped_exception(e, "Failed to fetch topology")




@router.get("/keys", response_model=KeyListResponse)
async def list_keys(
    pattern: str = Query("*", description="Glob-style pattern to match"),
    cursor: str = Query("0", description="SCAN cursor: an integer for standalone, or a JSON object of per-node cursors for cluster"),
    count: int = Query(50, ge=1, le=10000, description="Page size estimate for SCAN"),
    type: Optional[str] = Query(None, description="Filter by Redis type (string, hash, list, set, zset, ReJSON-RL)")
):
    """Scan and list keys with type and TTL for the active Redis connection."""
    try:
        return await redis_manager.scan_keys_batch(
            pattern=pattern,
            cursor=cursor,
            count=count,
            type_filter=type
        )
    except ValueError as ve:
        raise HTTPException(status_code=400, detail=str(ve))
    except Exception as e:
        raise_mapped_exception(e, "Failed to scan keys")


@router.get("/keys/detail")
async def get_key_detail_query(key: str = Query(..., description="Key name to inspect")):
    """Retrieve detailed metadata and value content for a single Redis key via query parameter."""
    try:
        detail = await redis_manager.get_key_detail(key)
        if not detail:
            # Try unquoted version in case frontend double encoded it
            unquoted = unquote(key)
            if unquoted != key:
                detail = await redis_manager.get_key_detail(unquoted)
        if not detail:
            raise HTTPException(status_code=404, detail=f"Key '{key}' does not exist or has expired.")
        return detail
    except Exception as e:
        raise_mapped_exception(e, f"Failed to inspect key '{key}'")


@router.get("/keys/{key_name:path}/detail")
async def get_single_key_detail(key_name: str):
    """Retrieve detailed metadata and value content for a single Redis key."""
    try:
        detail = await redis_manager.get_key_detail(key_name)
        if not detail:
            unquoted = unquote(key_name)
            if unquoted != key_name:
                detail = await redis_manager.get_key_detail(unquoted)
        if not detail:
            raise HTTPException(status_code=404, detail=f"Key '{key_name}' does not exist or has expired.")
        return detail
    except Exception as e:
        raise_mapped_exception(e, f"Failed to inspect key '{key_name}'")


@router.get("/keys/{key_name:path}/hash/fields")
async def get_hash_fields(
    key_name: str,
    cursor: int = Query(0, ge=0, description="HSCAN cursor (0 to start)"),
    count: int = Query(100, ge=1, le=500, description="Approximate number of fields per page"),
    match: Optional[str] = Query(None, description="Glob-style MATCH filter on field names"),
):
    """Page through a hash's fields with HSCAN; `cursor` 0 in the response means done."""
    try:
        page = await redis_manager.scan_hash_fields(key_name, cursor=cursor, count=count, match=match)
        unquoted = unquote(key_name)
        if page["total"] == 0 and unquoted != key_name:
            page = await redis_manager.scan_hash_fields(unquoted, cursor=cursor, count=count, match=match)
        return page
    except Exception as e:
        raise_mapped_exception(e, f"Failed to scan hash fields for key '{key_name}'")


# Allowed download formats per Redis type; the first entry is the default.
DOWNLOAD_FORMATS: Dict[str, List[str]] = {
    "string": ["txt"],
    "hash": ["csv", "json"],
    "list": ["json", "txt"],
    "set": ["json", "txt"],
    "zset": ["csv", "json"],
    "stream": ["json"],
    "json": ["json"],
}

DOWNLOAD_MEDIA_TYPES = {"csv": "text/csv", "json": "application/json", "txt": "text/plain"}


def sanitize_filename(name: str, max_len: int = 120) -> str:
    cleaned = re.sub(r"[^A-Za-z0-9._-]+", "_", name).strip("._")
    return cleaned[:max_len] or "redis_key"


def _render_csv(header: List[str], rows: List[Any]) -> str:
    output = io.StringIO()
    writer = csv.writer(output, lineterminator="\n")
    writer.writerow(header)
    writer.writerows(rows)
    return output.getvalue()


def render_key_download(full: Dict[str, Any], fmt: str) -> str:
    k_type = full["type"]
    value = full["value"]
    if k_type == "string":
        return "" if value is None else str(value)
    if k_type == "hash":
        if fmt == "csv":
            return _render_csv(["Field", "Value"], value)
        return json.dumps(dict(value), indent=2, ensure_ascii=False)
    if k_type in ("list", "set"):
        if fmt == "txt":
            return "\n".join(value) + ("\n" if value else "")
        return json.dumps(value, indent=2, ensure_ascii=False)
    if k_type == "zset":
        if fmt == "csv":
            return _render_csv(["Member", "Score"], value)
        return json.dumps([{"member": m, "score": s} for m, s in value], indent=2, ensure_ascii=False)
    return json.dumps(value, indent=2, ensure_ascii=False)


@router.get("/keys/{key_name:path}/download")
async def download_key_value(
    key_name: str,
    format: Optional[str] = Query(None, description="Output format (type-dependent): txt, csv, or json"),
    max_items: int = Query(DOWNLOAD_MAX_ITEMS, ge=1, le=1_000_000, description="Max entries to read for collection types"),
):
    """Download a key's full value as an attachment whose extension always matches its content."""
    try:
        full = await redis_manager.get_key_full_value(key_name, max_items=max_items)
        unquoted = unquote(key_name)
        if full is None and unquoted != key_name:
            full = await redis_manager.get_key_full_value(unquoted, max_items=max_items)
        if full is None:
            raise HTTPException(status_code=404, detail=f"Key '{key_name}' does not exist or has expired.")

        format_key = "json" if "json" in full["type"] else full["type"]
        allowed = DOWNLOAD_FORMATS.get(format_key, [])
        fmt = (format or allowed[0]).lower()
        if fmt not in allowed:
            raise HTTPException(
                status_code=400,
                detail=f"Unsupported format '{format}' for type '{full['type']}'. Allowed: {', '.join(allowed)}",
            )

        content = render_key_download({**full, "type": format_key}, fmt)
        filename = f"{sanitize_filename(full['name'])}.{fmt}"
        return Response(
            content=content,
            media_type=DOWNLOAD_MEDIA_TYPES[fmt],
            headers={
                "Content-Disposition": f'attachment; filename="{filename}"',
                "X-Export-Format": fmt,
                "X-Export-Total": str(full["total"]),
                "X-Export-Truncated": "true" if full["truncated"] else "false",
            },
        )
    except ValueError as ve:
        raise HTTPException(status_code=400, detail=str(ve))
    except Exception as e:
        raise_mapped_exception(e, f"Failed to download key '{key_name}'")


@router.put("/keys/{key_name:path}/ttl", dependencies=[Depends(require_write_permission)])
async def update_key_ttl_endpoint(key_name: str, payload: TTLUpdateRequest):
    """Update TTL for a key. Pass seconds=-1 to persist the key."""
    key_name = unquote(key_name)
    try:
        success = await redis_manager.update_key_ttl(key_name, payload.seconds)
        if not success:
            raise HTTPException(status_code=404, detail="Key does not exist or TTL update failed")
        return {"success": True, "key": key_name, "ttl": payload.seconds}
    except Exception as e:
        raise_mapped_exception(e, f"Failed to update TTL for key '{key_name}'")


@router.put("/keys/{key_name:path}/field", dependencies=[Depends(require_write_permission)])
async def set_hash_field_endpoint(key_name: str, payload: HashFieldSetRequest):
    """Set or update a field inside a Hash key."""
    key_name = unquote(key_name)
    try:
        result = await redis_manager.set_hash_field(key_name, payload.field, payload.value)
        return {"success": True, "field": payload.field, "result": result}
    except Exception as e:
        raise_mapped_exception(e, f"Failed to set hash field for key '{key_name}'")


@router.delete("/keys/{key_name:path}/field/{field_name:path}", dependencies=[Depends(require_write_permission)])
async def delete_hash_field_endpoint(key_name: str, field_name: str):
    """Delete a field from a Hash key."""
    key_name = unquote(key_name)
    field_name = unquote(field_name)
    try:
        deleted = await redis_manager.delete_hash_field(key_name, field_name)
        return {"success": True, "deleted": deleted}
    except Exception as e:
        raise_mapped_exception(e, f"Failed to delete hash field '{field_name}' from key '{key_name}'")


@router.delete("/keys/{key_name:path}", dependencies=[Depends(require_write_permission)])
async def delete_key(
    key_name: str,
    confirmed: bool = Query(False, description="Explicit confirmation flag"),
    confirmation: Optional[str] = Query(None, description="Explicit confirmation word e.g. CONFIRM"),
    body: Optional[KeyDeleteRequest] = None
):
    """
    Safely delete a key from active Redis instance.
    Requires confirmed=true or confirmation='CONFIRM' to prevent accidental destructive operations.
    """
    key_name = unquote(key_name)
    is_confirmed = (
        confirmed
        or (confirmation and confirmation.strip().upper() == "CONFIRM")
        or (body and body.confirmation and body.confirmation.strip().upper() == "CONFIRM")
    )
    if not is_confirmed:
        raise HTTPException(
            status_code=400,
            detail="Confirmation required. Deleting a key is permanent and risky. Pass confirmed=true or confirmation=CONFIRM."
        )

    try:
        client = await redis_manager.get_client()
        deleted = await client.delete(key_name)
        if deleted == 0:
            return {"success": False, "deleted": 0, "message": "Key did not exist"}
        return {"success": True, "deleted": deleted, "key": key_name}
    except Exception as e:
        raise_mapped_exception(e, f"Failed to delete key '{key_name}'")


# --- Phase 3 Endpoints: Slowlog & Memory Analysis ---

@router.get("/slowlog", response_model=SlowlogResponse)
async def get_slowlog_endpoint(limit: int = Query(100, ge=1, le=1000, description="Max entries to return")):
    """Retrieve slowlog queries across standalone instance or all cluster primary nodes."""
    try:
        return await redis_manager.get_slowlog(limit=limit)
    except Exception as e:
        raise_mapped_exception(e, "Failed to fetch slowlog")


@router.post("/slowlog/reset", dependencies=[Depends(require_write_permission)])
async def reset_slowlog_endpoint():
    """Clear the Redis SLOWLOG buffer."""
    try:
        await redis_manager.reset_slowlog()
        return {"status": "ok", "message": "Slowlog buffer cleared successfully"}
    except Exception as e:
        raise_mapped_exception(e, "Failed to reset slowlog")


@router.get("/memory/overview", response_model=MemoryOverviewResponse)
async def get_memory_overview_endpoint():
    """Retrieve memory usage summary, peak, fragmentation ratio, and cache hit ratio."""
    try:
        return await redis_manager.get_memory_overview()
    except Exception as e:
        raise_mapped_exception(e, "Failed to fetch memory overview")


@router.post("/memory/analyze", response_model=MemoryAnalysisResponse)
async def analyze_memory_endpoint(request: MemoryAnalysisRequest = Body(...)):
    """Sample keys non-blockingly using SCAN and profile memory hogs, data type breakdown, and bottlenecks."""
    try:
        return await redis_manager.analyze_memory(
            sample_size=request.sample_size,
            pattern=request.pattern
        )
    except Exception as e:
        raise_mapped_exception(e, "Failed to analyze memory")


@router.get("/keys/export")
async def export_keys_endpoint(
    pattern: str = Query("*", description="Glob pattern of keys to export"),
    type: Optional[str] = Query(None, description="Optional Redis type filter"),
    format: str = Query("csv", description="Export format: csv or txt")
):
    """Export matched key names with type and TTL as CSV or TXT."""
    fmt = (format or "").strip().lower()
    if fmt not in ("csv", "txt"):
        raise HTTPException(status_code=400, detail=f"Unsupported export format '{format}'. Allowed: csv, txt")
    try:
        keys_data = await redis_manager.export_keys(pattern=pattern, type_filter=type)
        if fmt == "csv":
            output = io.StringIO()
            writer = csv.writer(output, lineterminator="\n")
            writer.writerow(["Key", "Type", "TTL"])
            for row in keys_data:
                writer.writerow([row["name"], row["type"], row["ttl"]])
            content = output.getvalue()
            media_type = "text/csv"
            filename = f"redis_keys_{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}.csv"
        else:
            content = "\n".join(row["name"] for row in keys_data) + "\n"
            media_type = "text/plain"
            filename = f"redis_keys_{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}.txt"

        return Response(
            content=content,
            media_type=media_type,
            headers={"Content-Disposition": f'attachment; filename="{filename}"', "X-Export-Format": fmt}
        )
    except Exception as e:
        raise_mapped_exception(e, "Failed to export keys")


@router.post("/keys/bulk-delete/dry-run", response_model=BulkDeleteDryRunResponse)
async def bulk_delete_dry_run_endpoint(request: BulkDeleteDryRunRequest = Body(...)):
    """Dry-run simulate bulk deletion: count matched keys without deleting."""
    try:
        return await redis_manager.bulk_delete_dry_run(
            pattern=request.pattern,
            type_filter=request.type_filter
        )
    except Exception as e:
        raise_mapped_exception(e, "Failed to run bulk delete dry-run")


@router.post("/keys/bulk-delete", response_model=BulkDeleteExecuteResponse, dependencies=[Depends(require_write_permission)])
async def bulk_delete_execute_endpoint(request: BulkDeleteExecuteRequest = Body(...)):
    """Execute bulk key deletion using UNLINK in batches per node with confirmation validation."""
    try:
        return await redis_manager.bulk_delete_execute(
            pattern=request.pattern,
            type_filter=request.type_filter,
            expected_count=request.expected_count,
            confirmed_count=request.confirmed_count,
            confirmed_env=request.confirmed_env
        )
    except ValueError as ve:
        raise HTTPException(status_code=400, detail=str(ve))
    except Exception as e:
        raise_mapped_exception(e, "Failed to execute bulk delete")



