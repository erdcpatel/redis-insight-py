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
├── dist/                    # Compiled frontend assets served by FastAPI (gitignored; generated via npm run build)
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
6. **Zero Auto-Command Firing on Cluster Switch**:
   - When switching clusters, **only the landing screen (Keys Browser)** automatically scans keys.
   - Diagnostic tabs (**Memory Studio**, **Benchmark Studio**, **Slowlog Profiler**, **Connected Clients**, **Cluster Topology**) **MUST NEVER** automatically fire background Redis queries or scans.
   - Diagnostic tabs must immediately reset to clean state and display a dedicated **Target Cluster Prompt Card** showing cluster name, endpoint, environment badge, and an explicit action button (e.g. *Load Memory Overview*, *Fetch Slowlog Entries*, *Fetch Connected Clients*, *Load Cluster Topology*).
   - Any out-of-order response arriving from a previous cluster must be discarded (`state.selectedConnectionId !== targetConnId`).
7. **In-Flight Cancellation (`AbortController`)**:
   - Long-running keyspace scans (Memory Studio sampled/deep scans) must accept an `AbortSignal`.
   - The UI must render a visible "Cancel Scan" button.
   - Switching clusters while a scan is in-flight must cancel the running controller immediately without triggering error modals.
8. **Stateless Multi-User Container Routing**:
   - Containerized multi-user deployments isolate concurrent users via the `X-Connection-ID` HTTP header (or `?conn_id=` query param) using FastAPI dependency `get_target_conn_id`.
   - The frontend `window.fetch` interceptor automatically injects `X-Connection-ID` for the active tab's selected cluster.
   - Backend on-demand connection pool manages up to `REDIS_MAX_CONNECTIONS` (default 10) simultaneous client instances.

---

## 3. Frontend Architecture & Modular Conventions

1. **Modular Organization**:
   - Business logic is partitioned into dedicated ES modules under `frontend/src/modules/`.
   - Keep `main.js` focused on DOM initialization, tab registration, and global keyboard shortcuts (`Escape`, `Ctrl+B`).
2. **Workspace Tabs, Slide-Over Drawers & Modals**:
   - Deep diagnostic surfaces (Keys Browser, Benchmark Studio, Memory Studio, Slowlog Profiler, Topology Map, Connected Clients) live in `.ws-tab-pane` containers toggled by `.ws-tab-btn`.
   - Key inspection uses an ergonomic right **Slide-Over Drawer** (`#keyDetailModal`), leaving the keys table visible and interactive.
   - Interactive dialogs (Connection Modal, Bulk Delete, Deep Scan Safety Modal) remain centered dialog modals with backdrop blur.
3. **Global Context Single Source of Truth & Zero Redundancy**:
   - Active cluster metadata (cluster name, host:port, DB, environment badge, topology status) is retained **solely in the Global Top Header Bar** (`#topConnContainer`) and Left Sidebar.
   - Sub-headers, subtitle badge clusters, and inner target capsules are stripped from workspace tab panes to reclaim vertical screen space and prevent state drift.
   - Global vitals capsule in the top-right navbar serves as the single authoritative source for telemetry; navigation tabs and section H1 headers do not duplicate count badges.
4. **Multi-Delimiter Tree Invariants**:
   - The Virtual Folder Tree supports multiple simultaneous delimiters with custom delimiter chips.
   - Always sort delimiters in **descending length order** before tokenizing keys (e.g. `::` must match before `:`).
   - Persist delimiter sets per connection in `localStorage` (`redis_insight_tree_delimiters_<connId>`).
5. **Redis Stream Inspector Standards**:
   - Redis Stream values must never be cast as generic arrays (`[object Object]`).
   - Parse millisecond timestamps from Stream IDs (`<timestamp>-<seq>`), rendering full date/time and relative time tags (`1S AGO`).
   - Provide an instant client-side search/filter (`#streamFilterInput`) matching IDs, field names, and values with live count badges.
   - Provide one-click copy buttons for Entry ID and full Entry JSON with visual checkmark feedback.
6. **Number & Metric Formatting**:
   - Always format large numbers with `.toLocaleString()` (e.g., `1,000`, `25,400`).
   - Format byte memory with standard units (`B`, `KB`, `MB`, `GB`) to 2 decimal places.
7. **Zero Native Browser Popups, Glassmorphic Toast & Dialog System**:
   - **NEVER** use native blocking browser dialogs (`window.alert()`, `window.confirm()`, `window.prompt()`).
   - Use `showToast(message, type, durationMs)` from `frontend/src/modules/toast.js` (`toast-success`, `toast-error`, `toast-warning`, `toast-info`).
   - Use promise-based dialogs from `frontend/src/modules/dialog.js` (`showConfirmDialog`, `showPromptDialog`, `showAddHashFieldDialog`) for user confirmations and inputs.
   - Copy buttons must use `triggerButtonFeedback(btn, "Copied!")` for in-place checkmark feedback and call `copyToClipboard(text)`, which includes a seamless fallback (`document.execCommand('copy')`) for unprivileged HTTP environments.
8. **Large Keyspace Performance (100K - 1M Keys)**:
   - Tables with >100 keys must use **virtual windowing** (`renderKeysFlatTable()`), rendering only ~60 visible rows with dynamic top/bottom spacers calculated at a fixed `44px` row height.
   - Use event delegation on container elements (`#gridViewerContainer`) instead of attaching per-row click handlers.
   - In Virtual Folder Tree View, lazily render sub-hierarchies only upon expansion (`isExpanded`), keeping collapsed DOM footprint minimal.
   - Avoid calling heavy icon scan loops (`setupIcons()`) inside rapid virtual scroll rendering frames; inline lightweight SVGs for action buttons.
9. **Visual Loading Indicators & Progress Shimmer**:
   - Long-running scans must activate the animated glassmorphic shimmer bar (`#keysLoadingShimmer` / `.scan-progress-shimmer`) directly above the table.
   - `#scanStatusText` must display an active spinning badge with live cursor progress (`Scanning cursor: <cursor>`).
   - Initial scans must display a centered `.table-loading-card` with double-ring spinner instead of an empty table.
10. **Dual-Mode Keyspace Search & Zero-Network Local Filtering**:
    - `searchScope: "local"` filters already-loaded keys client-side in `< 1ms` (~0.2ms) with **zero network calls** to Redis.
    - High-performance matcher supports Regex literals (`/pattern/flags`), Glob patterns (`*`, `?`), regex character syntax, and case-insensitive substrings.
    - Shows live match telemetry badge (`#searchMatchCountBadge`) and integrated clear button (`#btnClearSearchQuery`).
    - Smart fallback: When a query yields 0 local matches, pressing `Enter` or clicking the fallback button `[🌐 Scan Redis Cluster for "..."]` automatically triggers a cluster `SCAN`. `Shift+Enter` always triggers remote SCAN.
11. **Browser Memory Safety Ceiling Guards (100K Limit)**:
    - Automatically pauses key accumulation when loaded keys reach the safety ceiling (default `100,000`).
    - Displays amber `#memoryLimitBanner` and locks the Load More button to `Memory Ceiling (100,000)` to preserve 60fps rendering and prevent tab crashes.
12. **FastAPI Gzip Compression & Payload Optimization**:
    - Automatic HTTP compression (`GZipMiddleware`, `minimum_size=1000`) compresses all API payloads >= 1KB (including key scans with repeated prefixes), achieving 85–90% bandwidth reduction.
13. **Web Worker Keyspace Indexing & Namespace / Hygiene Studio**:
    - Intensive regex matching, prefix tokenization, and key hygiene analysis are offloaded to a dedicated Web Worker (`keys-worker.js`), keeping the UI at a locked 60fps.
    - **Keyspace Namespace & Hygiene Studio** (`#namespaceModal`) provides instant prefix share breakdown (with 1-click filtering) and key hygiene linting (whitespace, double/trailing delimiters, long keys > 128 chars) with **zero Redis cluster queries**.
14. **Responsive Keys Actions Bar & Zero Horizontal Clipping**:
    - `.keys-actions-bar` uses compact gaps (`0.35rem`) and padding (`0.3rem 0.5rem`) so all controls (`View Mode`, `Auto Refresh`, `Refresh`, `Batch`, `Load More`, `Namespaces`, `Export`, `Bulk Delete`) fit comfortably on desktop without orphan button line wrapping.
    - Status telemetry is formatted compactly (`Loaded X / Y keys`) to preserve screen real estate.
    - TTL filter dropdown (`.ttl-filter-control-wrap`) sits flush next to the Redis Type filter pills.
15. **Slowlog Time Horizon Profiling, Export & Command Zoom Inspector**:
    - The Slowlog Profiler provides an interactive Time Window selector (`All`, `5m`, `15m`, `1h`, `24h`) with cyan active indicators, enabling operators to inspect slow commands executed within the last $X$ minutes.
    - Renders relative time tags (`15s ago`, `2m ago`, `1h ago`) directly below the ISO timestamp for instant cognitive orientation without extra Redis round-trips.
    - **Export Slowlog (JSON & CSV)**: Export modal (`#exportSlowlogModal`) supporting structured JSON and spreadsheet-compatible CSV across filtered or all loaded buffer entries.
    - **Command Zoom & Detailed Inspector (`#slowlogDetailModal`)**: 1-click command inspection displaying vitals, full raw command, arguments breakdown table, dedicated Lua script zoom box with KEYS/ARGV extraction, and Redis server-side truncation notice (explaining the `SLOWLOG_ENTRY_MAX_STRING = 128` C engine limit).
16. **Surgical Single-Key Deletion & Ghost-Row Elimination**:
    - Single-key deletions from both the keys table and the Slide-Over inspector drawer execute surgical deletions (`removeKeySurgically(keyName)`), directly splicing the deleted key from `state.keysTableRows` and `state.loadedKeysSet`, decrementing counters, and re-rendering without triggering a blocking `resetAndScan()`.
    - Centered confirmation dialogs use `z-index: 1100` to layer reliably above the Slide-Over inspector drawer (`z-index: 1050`).
17. **Sticky Table Headers in Virtual Windowing**:
    - Table column headers (`thead th`) use `position: sticky; top: 0; background: var(--bg-surface); z-index: 20;` with dynamic top/bottom `<tbody id="keysTableBody">` spacers so headers stay pinned and column alignment remains locked during virtual scrolling.
18. **Virtual Tree View Folder Child Pagination (200 Cap)**:
    - Large namespace folders cap rendered child keys to 200 per folder with an incremental `[Show next 200 keys...]` toggle, preventing DOM lockup when expanding large namespaces (>10,000 keys).

---

## 4. Configuration, Environment Variables & Flags

| Flag / Environment Variable | Default | Description |
| :--- | :--- | :--- |
| `APP_READONLY` | `false` | When `true`, enforces strict global read-only mode across all connections. |
| `REDIS_ENCRYPTION_KEY` | *(Auto-generated)* | Fernet AES-128 key for password encryption. Stored locally in `.secret.key`. |
| `REDIS_CONNECTIONS_FILE` | `config/connections.yaml` | Path to declarative YAML connection definitions. Synced to SQLite on startup. |
| `REDIS_MAX_CONNECTIONS` | `10` | Maximum concurrent active Redis client pools maintained in multi-user containers. |
| `PORT` / `APP_PORT` / `UVICORN_PORT` | `8001` | HTTP server listening port. |
| `HOST` / `APP_HOST` / `UVICORN_HOST` | `0.0.0.0` | HTTP server bind host. |
| `environment: "PROD"` | — | Connections marked `PROD` automatically default to `read_only: true` unless explicitly overridden. |

---

## 5. Mandatory Pre-Commit & Pre-Push Verification Checklist

Every AI agent and human engineer **MUST** review and complete this checklist before committing or pushing changes:

```markdown
### Pre-Commit & Pre-Push Checklist
- [ ] 1. Frontend Build: Run `cd frontend && npm run build` (Must complete with 0 errors, bundling into `dist/assets/`; `dist/` is gitignored).
- [ ] 2. Backend Automated Tests: Run `PYTHONPATH=. pytest tests/` (All 106+ tests must pass; AirPlay port 7000 skipped if occupied).
- [ ] 3. Playwright E2E Tests: Run `cd frontend && npx playwright test` (All 19+ tests must pass).
- [ ] 4. Documentation & Skills Synchronization:
      - [ ] `AGENTS.md` updated with new rules, architectural conventions, or flags.
      - [ ] `.agents/skills/redis-insight-dev/SKILL.md` updated with new runbooks, module APIs, or testing recipes.
      - [ ] `docs/UI_UX_GUIDELINES.md` updated with any new UI components, styling classes, or interaction patterns.
      - [ ] `README.md` updated if new configuration variables, endpoints, or features were introduced.
      - [ ] `docs/LOCAL_TESTING.md` updated if local test prerequisites or commands changed.
- [ ] 5. Git Branch Protection:
      - [ ] Verify active branch is NOT `main` (`git branch --show-current`).
      - [ ] Direct pushes to `main` are strictly forbidden.
      - [ ] Push to feature branch (`git push -u origin <branch-name>`) and open PR via `gh pr create`.
```

---

## 6. Git Workflow & PR-Only Invariants (Never Push to `main`)

1. **Direct Pushes to `main` are Strictly Forbidden**:
   - Never run `git push origin main` or commit directly to `main`.
   - GitHub branch protection is enforced on `main` (`enforce_admins: true`, PR review required, deletions and force-pushes blocked).
2. **Feature Branching**:
   - Always create a dedicated branch (e.g. `feature/...`, `fix/...`, `docs/...`).
   - Complete the Mandatory Pre-Commit Checklist before pushing the branch.
3. **Merge Exclusively via Pull Request**:
   - Push the feature branch to GitHub (`git push -u origin <branch-name>`).
   - Create a Pull Request against `main` using `gh pr create` or the GitHub interface.
   - All merges into `main` must go through a PR.

---

## 7. Skills & Specialized Guides

For detailed architectural runbooks, consult the workspace skill:
- **`redis-insight-dev`**: `.agents/skills/redis-insight-dev/SKILL.md` (deep architectural patterns, endpoint contracts, diagnostic profilers, cluster matrix recipes, and UI/UX design rules).


