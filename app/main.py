import time
from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from starlette.middleware.base import BaseHTTPMiddleware

from app.logger import setup_logging, logger
from app.db import init_db, get_active_connection
from app.config_loader import sync_connections_from_config
from app.redis_manager import redis_manager
from app.routers import connections, keys, benchmark, pubsub

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

# Gzip Compression for payloads >= 1KB (85-90% bandwidth reduction for keyspace JSON)
app.add_middleware(GZipMiddleware, minimum_size=1000)

# Static assets
STATIC_DIR = Path(__file__).resolve().parent / "static"
STATIC_DIR.mkdir(parents=True, exist_ok=True)
app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")

# Include API Routers
app.include_router(connections.router)
app.include_router(keys.router)
app.include_router(benchmark.router)
app.include_router(pubsub.router)



# Serve Frontend via FastAPI app.frontend() with fallback to StaticFiles
DIST_DIR = Path(__file__).resolve().parent.parent / "dist"
if DIST_DIR.exists() and (DIST_DIR / "index.html").exists():
    if hasattr(app, "frontend"):
        app.frontend("/", directory=str(DIST_DIR), fallback="index.html")
    else:
        from fastapi.staticfiles import StaticFiles
        from fastapi.responses import FileResponse

        assets_dir = DIST_DIR / "assets"
        if assets_dir.exists():
            app.mount("/assets", StaticFiles(directory=str(assets_dir)), name="assets")

        @app.get("/{full_path:path}")
        async def serve_frontend_fallback(full_path: str):
            if full_path.startswith("api/") or full_path == "api":
                from fastapi import HTTPException
                raise HTTPException(status_code=404, detail="Not Found")
            file_path = DIST_DIR / full_path
            if file_path.is_file():
                return FileResponse(file_path)
            return FileResponse(DIST_DIR / "index.html")
else:
    from fastapi.responses import HTMLResponse

    @app.get("/{full_path:path}")
    async def serve_unbuilt_notice(full_path: str):
        if full_path.startswith("api/") or full_path == "api":
            from fastapi import HTTPException
            raise HTTPException(status_code=404, detail="Not Found")
        return HTMLResponse(
            """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Redis Insight Py - Build Required</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: #0b0f19; color: #f8fafc; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
    .card { background: #131b2e; padding: 2.5rem; border-radius: 14px; border: 1px solid #1e293b; max-width: 540px; box-shadow: 0 20px 45px rgba(0,0,0,0.6); }
    h2 { color: #38bdf8; margin-top: 0; display: flex; align-items: center; gap: 0.5rem; }
    p { color: #94a3b8; line-height: 1.6; }
    code { background: #080c14; padding: 0.2rem 0.5rem; border-radius: 4px; color: #38bdf8; font-size: 0.9em; }
    pre { background: #080c14; border: 1px solid #1e293b; padding: 0.85rem 1rem; border-radius: 8px; overflow-x: auto; color: #38bdf8; font-family: monospace; font-size: 0.9em; }
  </style>
</head>
<body>
  <div class="card">
    <h2>⚡ Redis Insight - Frontend Build Required</h2>
    <p>The compiled production frontend assets were not found in <code>dist/</code>.</p>
    <p>To compile the frontend bundle, run:</p>
    <pre>cd frontend && npm install && npm run build</pre>
    <p>Or run the Vite development server with hot-reload:</p>
    <pre>cd frontend && npm run dev</pre>
  </div>
</body>
</html>""",
            status_code=200
        )



