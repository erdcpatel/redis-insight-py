# RedisInsight Python - AI Agent Guidelines

Welcome to the **RedisInsight Python** codebase. This document outlines core architectural patterns, safety invariants, and development rules to ensure seamless collaboration across AI agents and human engineers.

---

## 1. Project Overview & Architecture

RedisInsight Python is a lightweight, responsive Redis management and observability suite built with:
- **Backend**: Python 3.10+ with **FastAPI**, **AsyncIO**, and `redis-py` (supporting standalone `aioredis.Redis` and `redis.asyncio.cluster.RedisCluster`).
- **Data Persistence**: Local SQLite database (`connections.db`) with Fernet (AES-128-CBC) password encryption, alongside declarative YAML configuration (`config/connections.yaml`).
- **Frontend**: Modular Vanilla JavaScript (ES modules) bundled via **Vite** into `dist/` with a high-density, glassmorphic dark theme and zero heavy frameworks.

### Directory Map
```
.
├── app/
│   ├── main.py              # FastAPI app setup, static mount, router registration
│   ├── redis_manager.py     # Centralized async Redis & Cluster connection pool manager
│   ├── db.py                # SQLite repository with Fernet encryption
│   ├── config_loader.py     # YAML loader & synchronization engine
│   ├── models.py            # Pydantic v2 data models & request/response schemas
│   └── routers/
│       ├── connections.py   # Connection lifecycle, health check, topology endpoints
│       └── keys.py          # Key browser, search, export, bulk-delete, inspection
├── frontend/
│   ├── src/
│   │   ├── main.js          # App lifecycle, DOM bootstrap, tab routing, modals
│   │   ├── style.css        # Glassmorphic dark styling & responsive grid
│   │   └── modules/         # Feature modules
│   │       ├── state.js     # Shared reactive state & connection switching
│   │       ├── keys.js      # Key browsing, multi-delimiter tree, TTL filtering
│   │       ├── memory.js    # BigKeys profiler, TTL expiry horizon, leak audit
│   │       ├── benchmark.js # Latency probe, core synthetic suite, Lua sandbox
│   │       ├── clients.js   # Client list inspector & [THIS APP] identification
│   │       ├── slowlog.js   # Cluster slowlog aggregation & profiling
│   │       ├── topology.js  # Cluster node map & keyspace distribution
│   │       └── actions.js   # Bulk delete, key export, key deletion
│   └── e2e/                 # Playwright browser end-to-end test suite
├── dist/                    # Compiled frontend assets served by FastAPI
├── scripts/                 # Local Redis orchestration & test automation scripts
└── tests/                   # Backend pytest test suite (100+ tests)
```

---

## 2. Non-Negotiable Redis Safety Invariants

Redis is single-threaded. Blocking commands degrade cluster throughput and trigger failovers in production. **Never violate these safety rules**:

1. **Zero Blocking Commands**:
   - **NEVER** use `KEYS *`. Always use cursor-based `SCAN` with pattern matching and chunks (`COUNT 50-1000`).
   - **NEVER** use blocking `DEL` for multi-key or bulk operations. Always use `UNLINK` to reclaim memory in background threads.
   - For collection inspections (`HSCAN`, `SSCAN`, `ZSCAN`), always paginate with cursors. Do not use unbound `HGETALL` or `SMEMBERS`.
2. **Cluster Cross-Slot Safety**:
   - Redis Clusters reject multi-key commands if keys belong to different hash slots (`CROSSSLOT Keys in request don't hash to the same slot`).
   - In `bulk_unlink_keys` or cluster queries, partition keys by primary master node (`target_nodes=node`) before executing.
3. **Concurrency Limiting**:
   - Keyspace scanning and memory profiling must throttle concurrent requests using `asyncio.Semaphore(25)` and yield to the event loop (`asyncio.sleep(0)`) during large scans.
4. **Client Self-Identification**:
   - All Redis connections initiated by this tool must configure `client_name="redisinsight-py"`.
5. **Hybrid Read-Only Mode & PROD Protection**:
   - All mutating endpoints (`DELETE /api/keys/*`, `PUT /api/keys/*`, `DELETE /api/clients/*`, `POST /api/keys/bulk-delete`) **MUST** use the FastAPI dependency `require_write_permission`.
   - Connections with `environment: "PROD"` default to read-only mode to prevent accidental operational mishaps.

---

## 3. Frontend Architecture & Modular Conventions

1. **Modular Organization**:
   - Business logic is partitioned into dedicated ES modules under `frontend/src/modules/`.
   - Keep `main.js` focused on DOM initialization, tab registration, and global keyboard shortcuts (`Escape`, `Ctrl+B`).
2. **Workspace Tabs vs Dialog Modals**:
   - Deep diagnostic surfaces (Keys Browser, Benchmark Studio, Memory Studio, Slowlog Profiler, Topology Map, Connected Clients) live in `.ws-tab-pane` containers toggled by `.ws-tab-btn`.
   - Interactive dialogs (Connection Modal, Key Detail Modal, Bulk Delete, Deep Scan Safety Modal) remain centered dialog modals with backdrop blur.
3. **Multi-Delimiter Tree Invariants**:
   - The Virtual Folder Tree supports multiple simultaneous delimiters with custom delimiter chips.
   - Always sort delimiters in **descending length order** before tokenizing keys (e.g. `::` must match before `:`).
   - Persist delimiter sets per connection in `localStorage` (`redis_insight_tree_delimiters_<connId>`).
4. **Number & Metric Formatting**:
   - Always format large numbers with `.toLocaleString()` (e.g., `1,000`, `25,400`).
   - Format byte memory with standard units (`B`, `KB`, `MB`, `GB`) to 2 decimal places.

---

## 4. Verification & Testing Workflow

Before submitting any code changes or completing a task, always run the full verification pipeline:

### 1. Build Frontend
```bash
cd frontend && npm run build
```
Ensure the build succeeds with 0 errors and generates files in `dist/assets/`.

### 2. Backend Automated Tests
```bash
PYTHONPATH=. /Users/dhavalpatel/workspace/venv/py313/bin/pytest tests/
```
Verify that all tests pass (100+ passed, 1 skipped). Note: macOS AirPlay Receiver listens on port 7000 (`afs3-fileserver`), so cluster port 7000 tests gracefully skip when port 7000 is occupied.

### 3. Playwright Browser E2E Tests
```bash
cd frontend && npx playwright test
```
Verify all 9 tests pass.

---

## 5. Skills & Specialized Guides

For detailed architectural runbooks, consult the workspace skill:
- **`redis-insight-dev`**: `.agents/skills/redis-insight-dev/SKILL.md` (deep architectural patterns, endpoint contracts, diagnostic profilers, cluster matrix recipes).
