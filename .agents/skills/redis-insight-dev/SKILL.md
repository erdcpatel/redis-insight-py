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
  - Mounts compiled frontend static files from `dist/` (built via `npm run build`; gitignored) and serves fallback.
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
  - **`slowlog.js`**: Slowlog fetching across cluster shards, latency badges, time horizon filtering (`All`, `5m`, `15m`, `1h`, `24h`), relative time tags, slowlog export (JSON & CSV), command zoom detail modal with Lua script inspector, and slowlog reset.
  - **`topology.js`**: Cluster node discovery table, master/replica hierarchy, slot allocation, and keyspace node distribution.
  - **`actions.js`**: Export modal logic (CSV/TXT with TTL filtering), bulk delete two-stage safety gate, and key deletions.
  - **`toast.js`**: Glassmorphic non-blocking toast notifications (`showToast`), resilient `copyToClipboard` with fallback, and in-place feedback helpers.
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

### D. Cluster Switching Lifecycle & Zero Auto-Command Firing
- When a user switches to another cluster:
  - **ONLY** the landing screen (Keys Browser) automatically refreshes keys.
  - All diagnostic tabs (**Memory Studio**, **Benchmark Studio**, **Slowlog Profiler**, **Connected Clients**, **Cluster Topology**) **MUST NEVER** automatically fire background Redis queries or scans.
  - Every diagnostic module must export a `reset<Feature>State(conn)` and a `render<Feature>ClusterPrompt(conn)` function registered with `registerClusterSwitchedCallback`.
  - When invoked, reset any active in-flight requests, clear cached tables/metrics, and render an explicit prompt card displaying the newly active cluster's identity.
  - To prevent Frankenstein views caused by network race conditions, every async response handler must verify:
    ```javascript
    if (state.selectedConnectionId !== targetConnId) {
      console.warn("Discarding response for switched cluster:", targetConnId);
      return;
    }
    ```

### E. In-Flight Scan Cancellation via AbortController
- Keyspace analysis and memory profiling operations can take several seconds across large clusters.
- Always initialize an `AbortController` before triggering network requests:
  ```javascript
  if (activeMemoryAnalysisAbortController) {
    try { activeMemoryAnalysisAbortController.abort(); } catch (_) {}
  }
  activeMemoryAnalysisAbortController = new AbortController();
  const currentSignal = activeMemoryAnalysisAbortController.signal;
  ```
- Pass `signal: currentSignal` in `fetch(url, { signal })`.
- Catch `AbortError` explicitly and restore safe state without displaying error modals:
  ```javascript
  if (err.name === "AbortError") {
    renderMemoryProfilingSafeguardUI({ notice: "Memory scan was cancelled." });
    return;
  }
  ```

### F. Stateless Multi-User Connection Scoping
- In multi-user container environments, Redis connections are routed statelessly:
  - Backend uses FastAPI dependency `get_target_conn_id`:
    1. Inspects `X-Connection-ID` header.
    2. Inspects `conn_id` query parameter.
    3. Falls back to SQLite active connection.
  - The frontend `window.fetch` interceptor automatically attaches `X-Connection-ID: <activeId>` on all outgoing calls.
  - Client instance pools are cached up to `REDIS_MAX_CONNECTIONS` (default 10) in `redis_manager.py`.

---

## 3. Delimiter & Key Tokenization Rules

When grouping keys in the Virtual Folder tree:
1. Support multiple active delimiters simultaneously (`:`, `/`, `.`, `-`, `_`, `::`, `#`, `|`).
2. Always sort delimiters by length descending (`delim.length` descending) before tokenization so multi-character sequences (e.g. `::`) are not prematurely broken up by single-character delimiters (e.g. `:`).
3. Store chosen delimiters per connection in `localStorage` with key `redis_insight_tree_delimiters_<connId>`.

---

## 4. UI/UX Architecture & In-Pane Identity

1. **Global Context Single Source of Truth & Zero Redundancy**:
   - Active cluster metadata (cluster name, host:port, DB, environment badge, topology status) is retained **solely in the Global Top Header Bar** (`#topConnContainer`) and Left Sidebar.
   - Sub-headers, subtitle badge clusters, and inner target capsules are stripped from workspace tab panes to reclaim vertical screen space and prevent state drift.
   - Global vitals capsule in the top-right navbar serves as the single authoritative source for telemetry; navigation tabs and section H1 headers do not duplicate count badges.
   - Key inspection uses an ergonomic right **Slide-Over Drawer** (`#keyDetailModal`), leaving the keys table visible and interactive.
2. **Redis Stream Inspector Standards**:
   - Parse millisecond timestamps from Stream IDs (`<timestamp>-<seq>`), rendering full date/time and relative time tags (`1S AGO`).
   - Provide an instant client-side search/filter (`#streamFilterInput`) matching IDs, field names, and values with live count badges.
   - Provide one-click copy buttons for Entry ID and full Entry JSON with visual checkmark feedback.
3. **Number & Memory Formatting**:
   - Format numbers using `.toLocaleString()` (e.g., `1,000`, `25,400`).
   - Format byte memory with standard binary units (`B`, `KB`, `MB`, `GB`) to 2 decimal places.

---

## 5. Configuration, Flags & Environment Variables

| Variable / Flag | Default | Description |
| :--- | :--- | :--- |
| `APP_READONLY` | `false` | Global read-only enforcement across all connections. |
| `REDIS_ENCRYPTION_KEY` | *(Auto-generated)* | Fernet AES-128 key for password encryption. Stored locally in `.secret.key`. |
| `REDIS_CONNECTIONS_FILE` | `config/connections.yaml` | Path to declarative YAML connections file. Synced to SQLite on startup. |
| `REDIS_MAX_CONNECTIONS` | `10` | Maximum concurrent active Redis client pools maintained in multi-user containers. |
| `PORT` / `APP_PORT` / `UVICORN_PORT` | `8001` | HTTP server listening port. |
| `HOST` / `APP_HOST` / `UVICORN_HOST` | `0.0.0.0` | HTTP server bind host. |
| `environment: "PROD"` | — | Connections marked `PROD` automatically default to `read_only: true` unless explicitly overridden. |

---

## 6. Local Testing & Verification Runbook

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
Expected: 105+ tests pass (1 skipped for macOS AirPlay port 7000).

### Run Playwright Browser E2E Tests
```bash
cd /Users/dhavalpatel/workspace/redis-insight-py/frontend
npx playwright test
```
Expected: 15+ tests pass (1 skipped for macOS AirPlay port 7000).

---

## 7. Adding New Analytical Workspace Tabs

To add a new analytical diagnostic surface:
1. In `frontend/src/main.js`, add a tab navigation button in `#workspaceTabsBar` with class `.ws-tab-btn` and `data-tab="<tabName>"`.
2. Add a corresponding tab pane element with class `.ws-tab-pane ws-dashboard-pane modal-backdrop` and ID `#<feature>Modal` inside `.workspace-container`.
3. In `frontend/src/modules/<feature>.js`, export:
   - `open<Feature>Modal()`: activates the tab and checks if data needs to be loaded.
   - `reset<Feature>State(conn)`: resets state on cluster switch and displays prompt card.
   - `render<Feature>ClusterPrompt(conn)`: displays zero-fetch prompt card with target cluster name, host:port, and explicit query button.
4. Wire `reset<Feature>State` into `registerClusterSwitchedCallback` in `main.js`.
5. Ensure `updateAllPaneClusterContexts` sets `#<feature>TargetSubtitle` with active cluster badges.
6. In `frontend/e2e/`, add Playwright E2E assertions for tab switching, prompt display, and explicit query execution.

---

## 8. UI/UX, Performance & Toast Standards

1. **Zero Native Alerts**: Never use `window.alert()`, `window.confirm()`, or `window.prompt()`. Always use `showToast(msg, type)` from `frontend/src/modules/toast.js`.
2. **In-Place Copy Feedback**: Use `triggerButtonFeedback(btn, "Copied!")` and `copyToClipboard(text)` which provides automatic fallback (`document.execCommand('copy')`) for unprivileged/HTTP environments.
3. **Large Keyspace Performance (100K - 1M Keys)**:
   - Tables with >100 keys use virtual windowing (`renderKeysFlatTable()`), rendering only ~60 visible rows with dynamic top/bottom spacers calculated at a fixed `44px` row height.
   - Use event delegation on container elements (`#gridViewerContainer`) instead of attaching per-row click handlers.
   - In Virtual Folder Tree View, lazily render sub-hierarchies only upon expansion (`isExpanded`), keeping collapsed DOM footprint minimal.
4. **Dual-Mode Keyspace Search & In-Memory Instant Filter**:
   - `searchScope: "local"` executes regex/glob/substring filtering against in-memory key rows in `< 1ms` (~0.2ms) without making network calls to Redis.
   - Matcher supports Regex literals (`/pattern/flags`), Glob patterns (`*`, `?`), and case-insensitive substrings.
   - Smart fallback automatically falls back to remote Redis cluster `SCAN` if 0 local keys match and user presses Enter, or if `Shift+Enter` is pressed.
5. **Browser Memory Safety Ceiling Guard (100,000 Keys Limit)**:
   - Guards against browser memory exhaustion by pausing key accumulation when loaded keys reach the safety ceiling (default 100,000).
   - Renders `#memoryLimitBanner` and transforms Load More into a disabled `Memory Ceiling (100,000)` button with an explicit `Raise Ceiling` (+100,000) option.
7. **FastAPI Response Gzip Compression**:
   - `GZipMiddleware(minimum_size=1000)` automatically compresses all API payloads >= 1KB, providing 85–90% network transfer reduction for keyspace queries.
8. **Web Worker Keyspace Indexing & Namespace Studio**:
   - Multi-threaded Web Worker (`keys-worker.js`) performs background regex evaluation, prefix tokenization, and key hygiene analysis without freezing the browser's UI thread.
9. **Responsive Keys Actions Bar & Zero Horizontal Clipping**:
   - `.keys-actions-bar` uses `flex-wrap: wrap; gap: 0.45rem;` to ensure buttons (`Batch`, `Load More`, `Namespaces`, `Export`, `Bulk Delete`) never clip or require horizontal scrolling.
   - Status telemetry is formatted compactly (`Loaded X / Y keys`) to preserve screen real estate.

---

## 9. Mandatory Pre-Commit & Pre-Push Checklist

Before committing or pushing any code, verify and complete this checklist:

```markdown
- [ ] 1. Frontend Build: `cd frontend && npm run build` (0 errors, dist generated; `dist/` is gitignored).
- [ ] 2. Backend Pytest: `PYTHONPATH=. pytest tests/` (106+ tests passed).
- [ ] 3. Playwright E2E: `cd frontend && npx playwright test` (19+ tests passed).
- [ ] 4. Documentation & Skills Synchronization:
      - `AGENTS.md` updated with any new architecture rules, flags, or modules.
      - `.agents/skills/redis-insight-dev/SKILL.md` updated with new runbooks or APIs.
      - `docs/UI_UX_GUIDELINES.md` updated with new UI components, styles, or patterns.
      - `README.md` updated with new features, flags, or configs.
      - `docs/LOCAL_TESTING.md` updated with any test changes.
- [ ] 5. Git Branch Protection:
      - Active branch is NOT `main` (`git branch --show-current`).
      - Push to feature branch and open PR via `gh pr create`.
```

---

## 10. Git Workflow & PR-Only Invariants

1. **Zero Direct Pushes to `main`**:
   - `main` is protected on GitHub (`enforce_admins: true`, PR required, deletions and force pushes disabled).
   - Direct `git push origin main` will fail.
2. **Branching & PR Process**:
   - Create a feature branch: `git checkout -b <branch-name>`.
   - Complete the Mandatory Pre-Commit Checklist.
   - Push feature branch: `git push -u origin <branch-name>`.
   - Open a Pull Request: `gh pr create --title "..." --body "..."`.


