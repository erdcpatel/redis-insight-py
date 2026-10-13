---
name: redis-insight-dev
description: >-
  Comprehensive development and architecture guide for RedisInsight Python.
  Use when developing, debugging, extending, or maintaining the RedisInsight Python
  codebase, including async Redis connection pooling, multi-node Redis clusters,
  non-blocking scan and unlink operations, FastAPI REST APIs, and modular Vite frontend modules.
---

# RedisInsight Python Development & Architecture Skill

This skill provides comprehensive instructions, code patterns, architectural references, and testing runbooks for developers and AI agents working on **RedisInsight Python**.

---

## 1. System Architecture & Component Roles

### Backend (`app/`)
- **`app/main.py`**:
  - FastAPI application entrypoint.
  - Registers REST routers (`/api/connections`, `/api/keys`, `/api/cluster`, etc.).
  - Mounts static files from `dist/` and renders `app/templates/index.html`.
  - Configures CORS and application lifecycle events (`startup` / `shutdown`).
- **`app/redis_manager.py`**:
  - Central manager for all Redis connections.
  - Implements connection pool caching keyed by `connection_id`.
  - Distinguishes between standalone connections (`aioredis.Redis`) and cluster connections (`redis.asyncio.cluster.RedisCluster`).
  - Sets `client_name="redisinsight-py"` on every connection.
  - Enforces non-blocking operations: cursor-based `SCAN` with `asyncio.Semaphore(25)`, batch `UNLINK`, and `MEMORY USAGE` analysis.
- **`app/models.py`**:
  - Pydantic v2 schemas for connection configs, key inspection, bulk delete requests, slowlog records, benchmark results, and memory analysis (including `TtlHorizonBucket`, `TtlLeakNamespace`, `TtlForecastAnalysis`).
- **`app/db.py`**:
  - SQLite database abstraction (`connections.db`).
  - Automatic encryption and decryption of Redis passwords using Fernet (AES-128-CBC) with key stored in `.secret.key`.
- **`app/config_loader.py`**:
  - Parses `config/connections.yaml` and synchronizes static connection definitions into SQLite on application startup.
- **`app/routers/`**:
  - `connections.py`: CRUD for connections, health checks, cluster topology, keyspace overview, connected clients, and slowlog.
  - `keys.py`: Key pattern search, cursor scanning, single/bulk key deletion, TTL updates, hash/list pagination, and CSV/TXT key exports.

### Frontend (`frontend/src/`)
- **`frontend/src/main.js`**:
  - Application initialization and bootstrap.
  - DOM event listeners for top navigation tabs (`.ws-tab-btn`), sidebar interactions, and modals.
  - Coordinates between specialized modules.
- **`frontend/src/modules/`**:
  - **`state.js`**: Central shared state (`activeConnection`, `readOnlyMode`, `connectedClusters`, `activeTab`).
  - **`keys.js`**: Flat Table & Virtual Folder Tree rendering, multi-delimiter tokenization, delimiter chip bar, custom delimiter popover, TTL filter selector, and row-level key inspection.
  - **`memory.js`**: Memory overview, BigKeys leaderboard, TTL Expiry Horizon cards & stacked progress bar, Persistent Keys Leak Audit table, and Deep Scan Safety Modal gate.
  - **`benchmark.js`**: 4-level diagnostic benchmark engine (Level 1 Probe, Level 2 Commands, Level 3 Lua Sandbox, Level 4 Cluster Matrix).
  - **`clients.js`**: Connected clients table, search filter, `[THIS APP]` badge highlighting, and client kill action.
  - **`slowlog.js`**: Slowlog fetching across cluster shards, latency badges, argument copy, and slowlog reset.
  - **`topology.js`**: Cluster node discovery table, master/replica hierarchy, slot allocation, and keyspace node distribution.
  - **`actions.js`**: Export modal logic (CSV/TXT with TTL filtering), bulk delete two-stage safety gate, and key deletions.
- **`frontend/src/style.css`**:
  - Modern dark glassmorphic styling, responsive grid, tab pane layouts, animations, and typography.

---

## 2. Redis Operations: Strict Safety Runbook

When implementing features that interact with Redis:

### A. Scanning Keys
```python
# ALWAYS use async cursor SCAN with a Semaphore
sem = asyncio.Semaphore(25)

async def scan_worker(node, cursor, pattern, count):
    async with sem:
        return await node.scan(cursor=cursor, match=pattern, count=count)
```
- Never call `KEYS *`.
- In cluster mode, iterate over `client.get_primaries()` to scan each shard independently.
- Yield to the event loop using `await asyncio.sleep(0)` every few batches during extensive keyspace traversal to prevent starvation of other async handlers.

### B. Deleting Keys
- Always use `UNLINK` instead of `DEL`.
- On Redis Clusters, never issue multi-key commands across keys that may map to different hash slots.
- Group keys by their primary master node and issue `UNLINK` per node (`target_nodes=node`).

### C. Enforcing Read-Only Mode
- Mutating FastAPI router functions must declare the `require_write_permission` dependency:
```python
@router.delete("/keys/{key}")
async def delete_key(
    key: str,
    conn_id: str,
    _perm: bool = Depends(require_write_permission)
):
    ...
```

---

## 3. Delimiter & Key Tokenization Rules

When grouping keys in the Virtual Folder tree:
1. Support multiple active delimiters simultaneously (`:`, `/`, `.`, `-`, `_`, `::`, `#`, `|`).
2. Always sort delimiters by length descending (`delim.length` descending) before tokenization so multi-character sequences (e.g. `::`) are not prematurely broken up by single-character delimiters (e.g. `:`).
3. Store chosen delimiters per connection in `localStorage` with key `redis_insight_tree_delimiters_<connId>`.

---

## 4. Local Testing & Verification Runbook

### Environment Setup
- Python 3.13 venv path: `/Users/dhavalpatel/workspace/venv/py313/bin/python`
- Standalone Redis: `127.0.0.1:6379`
- 6-Node Redis Cluster: Ports `7000-7005` (managed via `./scripts/manage_local_redis.sh`)
  - *Note on macOS*: macOS AirPlay Receiver listens on port 7000 (`afs3-fileserver`). Cluster tests verify port availability and gracefully skip port 7000 if occupied by macOS services.

### Build Frontend
```bash
cd /Users/dhavalpatel/workspace/redis-insight-py/frontend
npm run build
```

### Run Backend Pytest Suite
```bash
cd /Users/dhavalpatel/workspace/redis-insight-py
PYTHONPATH=. /Users/dhavalpatel/workspace/venv/py313/bin/pytest tests/
```
Expected: 100+ tests pass.

### Run Playwright Browser E2E Tests
```bash
cd /Users/dhavalpatel/workspace/redis-insight-py/frontend
npx playwright test
```
Expected: 9 tests pass.

---

## 5. Adding New Analytical Workspace Tabs

To add a new analytical diagnostic surface:
1. In `frontend/src/main.js`, add a tab navigation button in `#wsTabBar` with class `.ws-tab-btn` and `data-tab="<tabName>"`.
2. Add a corresponding tab pane element with class `.ws-tab-pane` and ID `#paneWorkspace<TabName>` inside `#wsTabPanesContainer`.
3. In `frontend/src/modules/<feature>.js`, export an activation function called when the tab is switched to.
4. Ensure switching between tabs pauses background timers for other tabs and resumes when switched back.
5. In `frontend/e2e/`, add Playwright test asserting tab switching and rendering.
