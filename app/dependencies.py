from fastapi import HTTPException, status
from app.redis_manager import redis_manager
from app.config_loader import is_app_readonly


def require_write_permission() -> None:
    """
    Dependency to enforce write permissions across mutating Redis endpoints.
    Raises HTTP 403 Forbidden if:
    1. Global APP_READONLY environment variable is set to true.
    2. Currently active Redis connection has read_only enabled (e.g. PROD auto-lock or configured).
    """
    if is_app_readonly():
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Operation forbidden: Application is running in read-only mode (APP_READONLY=true)."
        )

    if redis_manager.is_read_only:
        active = redis_manager.active_info
        name = active.get("name", "Active Connection") if active else "Active Connection"
        env = (active.get("env", "PROD") if active else "PROD").upper()
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=f"Operation forbidden: Read-only mode is active for connection '{name}' ({env})."
        )
