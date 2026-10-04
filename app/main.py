from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

from app.db import init_db, get_active_connection
from app.config_loader import sync_connections_from_config
from app.redis_manager import redis_manager
from app.routers import connections, keys


@asynccontextmanager
async def lifespan(app: FastAPI):
    # 1. Initialize SQLite Database
    init_db()

    # 2. Sync static connections from config file (YAML/JSON)
    try:
        cfg_res = sync_connections_from_config()
        if cfg_res.get("loaded", 0) > 0:
            print(f"Loaded {cfg_res['loaded']} connection(s) from config: {cfg_res.get('file')}")
    except Exception as e:
        print(f"Notice: Config file sync skipped: {e}")

    # 3. Attempt to connect to the active connection on startup
    try:
        active = get_active_connection(include_password=True)
        if active:
            await redis_manager.activate_connection(active["id"])
            print(f"Successfully connected to Redis: {active['name']} ({active['host']}:{active['port']})")
    except Exception as e:
        print(f"Warning: Initial Redis connection failed: {e}")

    yield

    # Clean up connection pools on shutdown
    await redis_manager.close()
    print("Redis connections closed.")


app = FastAPI(
    title="Redis Insight Py",
    description="High-performance async Redis Management & Data Visualization",
    version="0.1.0",
    lifespan=lifespan
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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

