from typing import List, Optional
from fastapi import APIRouter, HTTPException, Query, status
from app.logger import logger
from app.db import (
    list_connections,
    get_connection,
    create_connection,
    update_connection,
    delete_connection,
    get_active_connection
)
from app.models import (
    ConnectionCreate,
    ConnectionUpdate,
    ConnectionOut,
    ConnectionLimitModel,
    ConnectionTestRequest,
    ConnectionTestResponse,
    ActiveConnectionStatus,
    ClusterDiscoveryRequest,
    ClusterDiscoveryResponse,
)
from app.redis_manager import redis_manager

router = APIRouter(prefix="/api/connections", tags=["Connections"])


@router.get("/limit", response_model=ConnectionLimitModel)
async def get_connection_limit():
    """Retrieve current maximum connected clusters limit and active connected count."""
    return ConnectionLimitModel(
        limit=redis_manager.max_limit,
        connected_count=len(redis_manager.connected_ids),
        connected_ids=redis_manager.connected_ids,
        selected_id=redis_manager.selected_id
    )


@router.put("/limit", response_model=ConnectionLimitModel)
async def update_connection_limit(payload: ConnectionLimitModel):
    """Update maximum connected clusters limit."""
    new_limit = redis_manager.set_max_limit(payload.limit)
    return ConnectionLimitModel(
        limit=new_limit,
        connected_count=len(redis_manager.connected_ids),
        connected_ids=redis_manager.connected_ids,
        selected_id=redis_manager.selected_id
    )


@router.get("", response_model=List[ConnectionOut])
async def get_all_connections(
    search: Optional[str] = Query(None, description="Search by name, host, or nodes"),
    env: Optional[str] = Query(None, description="Filter by environment: LOCAL, DEV, UAT, PROD, ALL")
):
    """
    List all saved Redis connections.
    Connected clusters appear on top in the list with is_connected=True and is_selected=True.
    """
    raw_conns = list_connections(search=search, env=env)
    enriched = []
    connected_ids = set(redis_manager.connected_ids)
    selected_id = redis_manager.selected_id

    for c in raw_conns:
        is_conn = c["id"] in connected_ids
        is_sel = c["id"] == selected_id
        c["is_connected"] = is_conn
        c["is_selected"] = is_sel
        c["is_active"] = is_conn
        enriched.append(c)

    # Sort connected clusters to the top, then selected cluster on top, then alphabetical by name
    enriched.sort(key=lambda item: (
        not item["is_connected"],
        not item["is_selected"],
        item["name"].lower()
    ))
    return enriched


@router.post("/reload-config")
async def reload_config_connections():
    """Reload static connections from YAML/JSON configuration files."""
    from app.config_loader import sync_connections_from_config
    try:
        return sync_connections_from_config()
    except Exception as e:
        logger.error(f"Error reloading config connections: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Failed to reload config: {str(e)}")


@router.post("", response_model=ConnectionOut, status_code=status.HTTP_201_CREATED)
async def add_connection(payload: ConnectionCreate, auto_activate: bool = False):
    """Save a new Redis connection configuration."""
    data = payload.model_dump()
    created = create_connection(data)
    if auto_activate and created:
        try:
            await redis_manager.activate_connection(created["id"])
            created["is_active"] = True
        except Exception as e:
            logger.warning(f"Auto-activation for new connection '{created['id']}' failed: {e}")
    return created



@router.get("/{conn_id}", response_model=ConnectionOut)
async def get_connection_by_id(conn_id: str):
    """Retrieve details for a single connection (password masked)."""
    conn = get_connection(conn_id, include_password=False)
    if not conn:
        raise HTTPException(status_code=404, detail="Connection not found")
    return conn


@router.put("/{conn_id}", response_model=ConnectionOut)
async def update_connection_by_id(conn_id: str, payload: ConnectionUpdate):
    """Update connection details."""
    data = payload.model_dump(exclude_unset=True)
    updated = update_connection(conn_id, data)
    if not updated:
        raise HTTPException(status_code=404, detail="Connection not found")

    # If this was the active connection, reconnect with updated params
    if updated.get("is_active"):
        try:
            await redis_manager.activate_connection(conn_id)
        except Exception as e:
            logger.warning(f"Re-activating connection '{conn_id}' after update failed: {e}")

    return updated


@router.delete("/{conn_id}")
async def delete_connection_by_id(conn_id: str):
    """Delete a saved connection."""
    target = get_connection(conn_id)
    if not target:
        raise HTTPException(status_code=404, detail="Connection not found")

    is_active = target.get("is_active", False)
    success = delete_connection(conn_id)
    if not success:
        raise HTTPException(status_code=500, detail="Failed to delete connection")

    if is_active:
        # If deleted active connection, try activating another existing connection
        remaining = list_connections()
        if remaining:
            try:
                await redis_manager.activate_connection(remaining[0]["id"])
            except Exception as e:
                logger.warning(f"Activating fallback connection '{remaining[0]['id']}' failed: {e}")
        else:
            await redis_manager.close()

    return {"success": True, "message": "Connection deleted"}


@router.post("/{conn_id}/connect")
@router.post("/{conn_id}/activate")
async def connect_connection_endpoint(conn_id: str):
    """
    Connect to a cluster/connection by ID.
    Enforces maximum simultaneous connected cluster limit.
    """
    try:
        active_info = await redis_manager.activate_connection(conn_id)
        status_info = await redis_manager.get_status()
        return {
            "success": True,
            "connection": active_info,
            "status": status_info,
            "connected_count": len(redis_manager.connected_ids),
            "limit": redis_manager.max_limit
        }
    except ValueError as ve:
        logger.warning(f"Connection {conn_id} activation rejected: {ve}")
        raise HTTPException(status_code=400, detail=str(ve))
    except Exception as e:
        logger.error(f"Failed to activate connection {conn_id}: {e}", exc_info=True)
        raise HTTPException(status_code=400, detail=f"Failed to connect: {str(e)}")


@router.post("/{conn_id}/disconnect")
async def disconnect_connection_endpoint(conn_id: str):
    """Disconnect and close a connected cluster by ID."""
    try:
        await redis_manager.disconnect_connection(conn_id)
        status_info = await redis_manager.get_status()
        return {
            "success": True,
            "disconnected_id": conn_id,
            "selected_id": redis_manager.selected_id,
            "connected_count": len(redis_manager.connected_ids),
            "status": status_info
        }
    except Exception as e:
        logger.error(f"Failed to disconnect connection {conn_id}: {e}", exc_info=True)
        raise HTTPException(status_code=400, detail=f"Failed to disconnect: {str(e)}")


@router.post("/disconnect")
async def disconnect_active_connection_endpoint():
    """Disconnect currently selected cluster."""
    sel_id = redis_manager.selected_id
    if not sel_id:
        return {"success": True, "message": "No active cluster to disconnect"}
    try:
        await redis_manager.disconnect_connection(sel_id)
        status_info = await redis_manager.get_status()
        return {
            "success": True,
            "disconnected_id": sel_id,
            "selected_id": redis_manager.selected_id,
            "connected_count": len(redis_manager.connected_ids),
            "status": status_info
        }
    except Exception as e:
        logger.error(f"Failed to disconnect active cluster {sel_id}: {e}", exc_info=True)
        raise HTTPException(status_code=400, detail=f"Failed to disconnect: {str(e)}")


@router.post("/{conn_id}/select")
async def select_connection_endpoint(conn_id: str):
    """
    Switch active focus to an already connected connection.
    Ensures that browsing keys, stats, and topology operate on this selected cluster.
    """
    try:
        selected_info = redis_manager.select_connection(conn_id)
        status_info = await redis_manager.get_status()
        return {
            "success": True,
            "connection": selected_info,
            "status": status_info
        }
    except ValueError as ve:
        logger.warning(f"Select connection {conn_id} failed: {ve}")
        raise HTTPException(status_code=400, detail=str(ve))
    except Exception as e:
        logger.error(f"Failed to select connection {conn_id}: {e}", exc_info=True)
        raise HTTPException(status_code=400, detail=f"Failed to select: {str(e)}")


@router.post("/{conn_id}/test", response_model=ConnectionTestResponse)
async def test_saved_connection_endpoint(conn_id: str, payload: Optional[ConnectionTestRequest] = None):
    """
    Test an existing saved connection using its stored encrypted credentials (or optional overrides).
    """
    conn = get_connection(conn_id, include_password=True)
    if not conn:
        raise HTTPException(status_code=404, detail="Connection not found")

    host = conn["host"]
    port = conn["port"]
    db = conn["db"]
    username = conn["username"]
    password = conn.get("password")
    use_tls = conn["use_tls"]
    conn_type = conn["conn_type"]
    cluster_nodes = conn.get("cluster_nodes")

    if payload:
        if payload.host and payload.host != "localhost":
            host = payload.host
        if payload.port and payload.port != 6379:
            port = payload.port
        if payload.db != 0:
            db = payload.db
        if payload.username is not None:
            username = payload.username
        if payload.password is not None:
            password = payload.password
        if payload.use_tls:
            use_tls = payload.use_tls
        if payload.conn_type and payload.conn_type != "standalone":
            conn_type = payload.conn_type
        if payload.cluster_nodes is not None:
            cluster_nodes = payload.cluster_nodes

    return await redis_manager.test_connection_params(
        host=host,
        port=port,
        db=db,
        username=username,
        password=password,
        use_tls=use_tls,
        conn_type=conn_type,
        cluster_nodes=cluster_nodes
    )


@router.post("/test", response_model=ConnectionTestResponse)
async def test_connection_endpoint(payload: ConnectionTestRequest):
    """Test connection parameters without saving or activating."""
    return await redis_manager.test_connection_params(
        host=payload.host,
        port=payload.port,
        db=payload.db,
        username=payload.username,
        password=payload.password,
        use_tls=payload.use_tls,
        conn_type=payload.conn_type,
        cluster_nodes=payload.cluster_nodes
    )


@router.post("/discover-cluster", response_model=ClusterDiscoveryResponse)
async def discover_cluster_endpoint(payload: ClusterDiscoveryRequest):
    """
    Connect to a candidate seed node and query CLUSTER NODES / CLUSTER INFO
    to discover all active cluster nodes and their assigned roles and slots.
    """
    return await redis_manager.discover_cluster_nodes(
        host=payload.host,
        port=payload.port,
        username=payload.username,
        password=payload.password,
        use_tls=payload.use_tls
    )
