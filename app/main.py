import time
from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.base import BaseHTTPMiddleware

from app.logger import setup_logging, logger
from app.db import init_db, get_active_connection
from app.config_loader import sync_connections_from_config
from app.redis_manager import redis_manager
from app.routers import connections, keys

# Initialize global logging configuration
setup_logging()


@asynccontextmanager
async def lifespan(app: FastAPI):
    # 1. Initialize SQLite Database
    init_db()

    # 2. Sync static connections from config file (YAML/JSON)
    try:
        cfg_res = sync_connections_from_config()
        if cfg_res.get("loaded", 0) > 0:
            logger.info(f"Loaded {cfg_res['loaded']} connection(s) from config: {cfg_res.get('file')}")
    except Exception as e:
        logger.warning(f"Config file sync skipped: {e}")

    # 3. Attempt to connect to the active connection on startup
    try:
        active = get_active_connection(include_password=True)
        if active:
            await redis_manager.activate_connection(active["id"])
            logger.info(f"Successfully connected to active Redis: {active['name']} ({active['host']}:{active['port']})")
    except Exception as e:
        logger.warning(f"Initial Redis connection failed: {e}")

    yield

    # Clean up connection pools on shutdown
    await redis_manager.close()
    logger.info("Redis connections closed.")


app = FastAPI(
    title="Redis Insight Py",
    description="High-performance async Redis Management & Data Visualization",
    version="0.1.0",
    lifespan=lifespan
)

# HTTP Request and Error Logging Middleware
class LoggingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        start = time.perf_counter()
        try:
            response = await call_next(request)
            duration_ms = (time.perf_counter() - start) * 1000.0
            if response.status_code >= 400:
                logger.warning(f"{request.method} {request.url.path} -> HTTP {response.status_code} ({duration_ms:.1f}ms)")
            return response
        except Exception as exc:
            duration_ms = (time.perf_counter() - start) * 1000.0
            logger.error(
                f"Unhandled Exception on {request.method} {request.url.path} ({duration_ms:.1f}ms): {exc}",
                exc_info=True
            )
            raise exc

app.add_middleware(LoggingMiddleware)

# Global Exception Handlers
import sqlite3
from fastapi.responses import JSONResponse
from redis.exceptions import RedisError

@app.exception_handler(RedisError)
async def redis_error_handler(request: Request, exc: RedisError):
    logger.error(f"Redis error on {request.method} {request.url.path}: {exc}", exc_info=True)
    return JSONResponse(
        status_code=500,
        content={"detail": f"Redis error: {str(exc)}"}
    )

@app.exception_handler(ConnectionError)
async def connection_error_handler(request: Request, exc: ConnectionError):
    logger.error(f"Connection error on {request.method} {request.url.path}: {exc}", exc_info=True)
    return JSONResponse(
        status_code=503,
        content={"detail": f"Connection error: {str(exc)}"}
    )

@app.exception_handler(sqlite3.Error)
async def sqlite_error_handler(request: Request, exc: sqlite3.Error):
    logger.error(f"Database error on {request.method} {request.url.path}: {exc}", exc_info=True)
    return JSONResponse(
        status_code=500,
        content={"detail": f"Database error: {str(exc)}"}
    )

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["Content-Disposition"],
)

# Static assets
STATIC_DIR = Path(__file__).resolve().parent / "static"
STATIC_DIR.mkdir(parents=True, exist_ok=True)
app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")

# Include API Routers
app.include_router(connections.router)
app.include_router(keys.router)


@app.get("/classic")
async def redirect_classic():
    """Explicitly retired: redirect to the single standard view."""
    from fastapi.responses import RedirectResponse
    return RedirectResponse(url="/", status_code=301)



# Serve Frontend via FastAPI app.frontend()
DIST_DIR = Path(__file__).resolve().parent.parent / "dist"
if DIST_DIR.exists():
    app.frontend("/", directory=str(DIST_DIR), fallback="index.html")

