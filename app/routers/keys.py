from urllib.parse import unquote
from typing import Optional, Dict, Any
from fastapi import APIRouter, HTTPException, Query, Body
from pydantic import BaseModel, Field
from app.models import KeyListResponse, ActiveConnectionStatus, ClusterTopologyResponse
from app.redis_manager import redis_manager

router = APIRouter(prefix="/api", tags=["Keys & Status"])


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
        raise HTTPException(status_code=500, detail=f"Failed to fetch clients: {str(e)}")


@router.delete("/clients/{client_id}")
async def kill_client_endpoint(client_id: str):
    """Disconnect/kill a connected client by its ID."""
    try:
        success = await redis_manager.kill_client(client_id)
        return {"success": success, "client_id": client_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to kill client {client_id}: {str(e)}")


@router.get("/topology", response_model=ClusterTopologyResponse)
async def get_cluster_topology():
    """Retrieve cluster nodes topology or master-replica nodes."""
    try:
        return await redis_manager.get_topology()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch topology: {str(e)}")




@router.get("/keys", response_model=KeyListResponse)
async def list_keys(
    pattern: str = Query("*", description="Glob-style pattern to match"),
    cursor: int = Query(0, description="Cursor for SCAN iteration"),
    count: int = Query(50, ge=1, le=1000, description="Page size estimate for SCAN"),
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
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to scan keys: {str(e)}")


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
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to inspect key '{key}': {str(e)}")


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
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to inspect key '{key_name}': {str(e)}")


@router.put("/keys/{key_name:path}/ttl")
async def update_key_ttl_endpoint(key_name: str, payload: TTLUpdateRequest):
    """Update TTL for a key. Pass seconds=-1 to persist the key."""
    key_name = unquote(key_name)
    try:
        success = await redis_manager.update_key_ttl(key_name, payload.seconds)
        if not success:
            raise HTTPException(status_code=404, detail="Key does not exist or TTL update failed")
        return {"success": True, "key": key_name, "ttl": payload.seconds}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to update TTL: {str(e)}")


@router.put("/keys/{key_name:path}/field")
async def set_hash_field_endpoint(key_name: str, payload: HashFieldSetRequest):
    """Set or update a field inside a Hash key."""
    key_name = unquote(key_name)
    try:
        result = await redis_manager.set_hash_field(key_name, payload.field, payload.value)
        return {"success": True, "field": payload.field, "result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to set field: {str(e)}")


@router.delete("/keys/{key_name:path}/field/{field_name:path}")
async def delete_hash_field_endpoint(key_name: str, field_name: str):
    """Delete a field from a Hash key."""
    key_name = unquote(key_name)
    field_name = unquote(field_name)
    try:
        deleted = await redis_manager.delete_hash_field(key_name, field_name)
        return {"success": True, "deleted": deleted}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to delete field: {str(e)}")


@router.delete("/keys/{key_name:path}")
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
        raise HTTPException(status_code=500, detail=f"Failed to delete key: {str(e)}")

