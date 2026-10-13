from typing import Optional
from fastapi import HTTPException, Header, Query, Depends, status
from app.redis_manager import redis_manager
from app.config_loader import is_app_readonly


def get_target_conn_id(
    x_connection_id: Optional[str] = Header(None, alias="X-Connection-ID"),
    conn_id: Optional[str] = Query(None)
) -> Optional[str]:
    """
    Extract target Redis connection ID from HTTP header 'X-Connection-ID' or query parameter 'conn_id',
    falling back to redis_manager.selected_id.
    Enables connection-scoped operations so concurrent users in different sessions
    do not collide on active clusters.
    """
    clean_id = (x_connection_id or conn_id or "").strip()
    return clean_id if clean_id else redis_manager.selected_id


def require_write_permission(
    target_conn_id: Optional[str] = Depends(get_target_conn_id)
) -> None:
    """
    Dependency to enforce write permissions across mutating Redis endpoints.
    Raises HTTP 403 Forbidden if:
    1. Global APP_READONLY environment variable is set to true.
    2. The targeted Redis connection has read_only enabled (e.g. PROD auto-lock or configured).
    """
    if is_app_readonly():
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Operation forbidden: Application is running in read-only mode (APP_READONLY=true)."
        )

    if redis_manager.is_conn_read_only(target_conn_id):
        conn_info = redis_manager.get_conn_info(target_conn_id)
        name = conn_info.get("name", "Active Connection") if conn_info else "Active Connection"
        env = (conn_info.get("env", "PROD") if conn_info else "PROD").upper()
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=f"Operation forbidden: Read-only mode is active for connection '{name}' ({env})."
        )
