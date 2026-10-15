# Redis Insight Py

High-performance, async Redis management & data visualization platform built with **Python 3 / FastAPI**, **Redis AsyncIO**, and a **Responsive Glassmorphic Data Grid**.

Designed as a modern, lightweight, and responsive alternative to RedisInsight, supporting Standalone Redis instances, Sentinel high-availability setups, and multi-node Redis Clusters with live topology discovery and real-time key inspection.

---

## Highlights & Key Features

### 1. Controlled Connection & Configuration Review
- **No Unintended Auto-Connections**: Selecting a cluster or Redis instance in the sidebar opens the **Cluster Configuration Modal** to review parameters before connecting.
- **Config & Health Inspector**:
  - Connection Name & Environment (`LOCAL`, `DEV`, `UAT`, `PROD`).
  - Connection Topology (`Standalone`, `Redis Cluster`, `Sentinel`).
  - Host & Seed Nodes with interactive badges for multi-node clusters.
  - Database Index, Authentication, and TLS / SSL status.
  - Configuration source (`config/connections.yaml` or Local SQLite DB).
- **Same-Name Clusters across Environments**: Supports compound `(name, env)` uniqueness, allowing identical cluster names (e.g. `"Billing-Cluster"`) across `LOCAL`, `DEV`, `UAT`, and `PROD` without naming conflicts.
- **Direct Actions**:
  - **Connect**: Connect to the cluster after reviewing configuration.
  - **Test Connection**: Run an isolated latency, version, and cluster reachability check without saving or connecting.
  - **Disconnect**: Safely disconnect and release connection pools.
  - **Switch & View Keys**: Switch focus between connected clusters.
  - **Topology & Nodes**: View live slot distribution, node states, and cluster health.
  - **Keyspace Distribution**: Aggregated keyspace counts across all master nodes with replica key counts and replication drift tracking.
- **Smart Multi-Node Cluster Builder & ⚡ Auto-Discovery**:
  - Prevents single-point-of-failure startup risks by saving redundant seed nodes for the cluster client.
  - Enter a single seed node and click **Auto-Discover Nodes**: connects to the seed node, queries `CLUSTER NODES` & `CLUSTER INFO`, and automatically discovers all masters and replicas across the cluster.
  - Robust handling of Redis 7 hostname syntax, `myself` node resolution, NAT/Docker IP mappings, and slot assignments.
  - Interactive chip manager to inspect, add, or remove custom seed endpoints before saving.
  - Cluster-aware **Test Connection** verifying live node reachability and cluster health.

---

### 2. Multi-Cluster Connection Limits & Priority Sidebar
- **Simultaneous Connection Cap**: Configure the maximum number of clusters that can remain connected simultaneously (1, 2, 3, or 5) to conserve resources.
- **Visual Status & Priority Sorting**:
  - Active and connected clusters display a green checkmark status badge.
  - Connected clusters automatically sort to the top of the sidebar list, with the actively selected cluster ranked first.
- **Graceful Disconnection**: Disconnect easily from the sidebar card, top navigation bar, or configuration modal. When all clusters are disconnected, the workspace enters a clean standby state.

---

### 3. Cluster Topology Discovery & Slot Mapping
- **Multi-Node Cluster Topology**: Discovers all master and replica nodes across Redis 5, 6, 7+, and Redis Cluster specifications.
- **Robust Multi-Tier Discovery**:
  1. Active cluster client execution (`CLUSTER NODES` / `CLUSTER INFO`).
  2. Targeted node execution.
  3. Standalone seed-node fallback via direct lightweight connection.
- **Interactive Node Modal**:
  - Cluster state (`OK` / `FAIL`), total node count, and masters vs replicas count.
  - Slot ranges (e.g. `0-5460`, `5461-10922`, `10923-16383`) with total assigned slot tally.
  - Node ID, IP:Port, link states, ping/pong latencies, and master-replica association.
  - Instant text filter and role filter (All, Masters, Replicas).

---

### 4. High-Performance Key Browsing & Inspector
- **Responsive Glassmorphic Data Grid with Virtual Scrolling**: Blazing fast rendering and virtual windowing for massive keyspaces (100K to 1M+ keys). Only ~60 active rows are mounted to the DOM at any time with fixed 44px row heights and event delegation, eliminating UI freezing and memory pressure.
- **Dual-Mode Keyspace Search (⚡ In-Memory Filter vs 🌐 Cluster SCAN)**:
  - **Instant In-Memory Filter (`searchScope = "local"`)**: Filters already-loaded keys client-side in `< 1ms` (~0.2ms) using Regex literals (e.g. `/^user:[0-9]+$/i`), Glob patterns (`orders:*`, `*cache*`), or substrings without issuing network queries to Redis.
  - **Live Execution Telemetry Badge**: Displays instant match count and execution duration (`X / Y (0.2ms)`).
  - **Smart Fallback to Remote SCAN**: If a local query yields 0 matches among loaded keys, pressing `Enter` or clicking the fallback button `[🌐 Scan Redis Cluster for "..."]` automatically falls back to querying the Redis cluster.
  - **Inline Clear Button**: `[x]` clear button inside the search input quickly resets the search pattern back to `*` with zero delay.
- **Browser Memory Safety Ceiling Guard (100,000 Keys Limit)**:
  - Automatically pauses progressive key accumulation when loaded keys reach the safety ceiling (default `100,000`) to prevent browser tab crashes and memory leaks.
  - Displays a glassmorphic amber banner with an explicit `Raise Ceiling (+100,000)` option for workstations with sufficient RAM.
- **Visual Scan Progress Shimmer & Active Cursor Spinner**: Top animated shimmer progress bar (`.scan-progress-shimmer`) and dynamic spinning badge in `#scanStatusText` provide real-time cursor feedback during background SCAN sweeps.
- **Glassmorphic Toast Notifications & In-Place Copy Feedback**: Completely eliminated native blocking `alert()` popups. Copying keys, string values, JSON structures, Stream entries, and Slowlog commands displays immediate green checkmark feedback (`Copied!`) and non-blocking auto-dismissing toast pills with resilient Clipboard API fallback.
- **Dual-Mode Keyspace Search & Instant In-Memory Filter**: Seamlessly toggle between client-side in-memory regex/glob/substring filtering (`< 1ms`, ~0.2ms, zero Redis network calls) and remote cluster `SCAN`. Features smart fallback and keyboard shortcuts (`Enter` / `Shift+Enter`).
- **Browser Memory Safety Ceiling Guard (100,000 Keys Limit)**: Automatically pauses key accumulation when loaded keys reach the safety ceiling to preserve 60fps rendering and prevent browser tab crashes, with an explicit `Raise Ceiling (+100,000)` option.
- **FastAPI Gzip Compression (85–90% Transfer Reduction)**: Automatic gzip compression on all API responses >= 1KB (`GZipMiddleware`), dramatically speeding up large keyspace transfers over HTTP.
- **Web Worker Keyspace Indexing & Zero-UI-Jank Filtering**: Background Web Worker (`keys-worker.js`) handles heavy regex evaluation, prefix tokenization, and key hygiene checks without blocking the main browser thread.
- **Keyspace Namespace & Key Hygiene Studio**: Interactive analytical studio (`#namespaceModal`) analyzing loaded keys with zero Redis cluster calls:
  - **Namespace Distribution**: Visualizes prefix shares with gradient progress bars and 1-click `[🔍 Filter]` actions.
  - **Key Hygiene & Linting**: Flags naming anti-patterns (whitespace, double/trailing delimiters, keys > 128 chars) with direct inspection in the Slide-Over drawer.

- **Real-Time Auto-Refresh Pattern Watcher**:
  - Watch for keys matching your active pattern (e.g., `orders:*`) and data type filter automatically.
  - Configurable refresh interval: **5s (Safe Minimum)**, **10s (Default)**, **15s**, **30s**, or **60s**.
  - Animated pulsing indicator with live countdown badge (e.g., `Auto: 8s`).
  - **Smart Pause**: Automatically suspends countdown while a modal is open or when the browser tab is hidden to avoid disrupting key inspection.
- **View Mode Toggle (Flat Table vs Virtual Tree)**:
  - Toggle between **Table View** (flat data grid) and **Tree View** (hierarchical namespace folders) with 1 click from the action bar.
  - Remembers selected view mode and delimiter choice across page reloads in `localStorage`.
- **Multi-Delimiter & Custom Delimiter Grouping**:
  - Automatically parses and groups Redis keys into virtual namespace trees using multiple simultaneous delimiters (e.g. `:`, `/`, `.`, `-`, `_`, `::`, `#`, `|`).
  - **Dynamic Delimiter Chips**: Click active delimiter pills to toggle specific delimiters on/off in real-time.
  - **Custom Delimiter Popover (`+ Add`)**: Input custom single- or multi-character delimiters (e.g. `::`, `#`, `|`, `__`) to match any cluster's key-naming taxonomy.
  - **Longest-Delimiter Precedence**: Matches multi-character delimiters first (e.g. `cache::user:1` splits on `::` before `:`).
  - **Per-Connection Memory**: Delimiter selections are persisted individually per cluster connection (`redis_insight_tree_delimiters_<connId>`).
  - Un-namespaced keys are neatly organized under a designated "Root Keys" section.
- **Collapsible Namespace Folders & Key Counts**:
  - Folders display total nested key counts (e.g., `users:` ➔ `1001:` ➔ `15 keys`).
  - Expand and collapse folders individually, or use **Expand All** and **Collapse All** toolbar controls.
  - **In-Tree Live Filter**: Instant client-side search across loaded namespaces and leaf key names without re-querying Redis.
  - **1-Click Namespace Filter**: Click the "Filter" badge on any folder to immediately set the search pattern (e.g. `users:1001:*`) and scan that namespace.
- **TTL Filter in Keys Browser**:
  - Direct dropdown filter on toolbar: **All TTLs**, **⏳ Expiring Only**, and **∞ No TTL (Persistent)**.
  - Instant client-side filtering on loaded keys and tree nodes; persistent keys display a distinct `∞ No TTL` badge.
- **Cluster Key Slot & Owning Node Mapping**:
  - Displays the CRC16 hash slot (`#Slot`) and owning master node (`host:port (Primary)`) directly on Key Detail metadata for hot-shard and slot debugging.
  - Automatically handles Redis hash tags `{...}` (e.g. `{user:100}:profile`).
- **Comprehensive Key Inspector**:
  - Type-aware viewers for `string`, `hash`, `list`, `set`, `zset`, and `stream`.
  - **Enhanced Redis Stream Inspector**:
    - **Timestamp Parsing & Relative Duration**: Automatically extracts Unix millisecond timestamps from Stream IDs (`<timestamp_ms>-<seq>`), rendering formatted local ISO timestamps and high-contrast relative duration badges (e.g., `1S AGO`, `5M AGO`, `2D AGO`).
    - **Interactive Live Search Filter**: Real-time client-side filter (`#streamFilterInput`) matching Stream IDs, field keys, and field values with instant count feedback (`Showing X of Y entries`).
    - **High-Contrast Field Chips**: Fields and values are formatted into clean pill chips (`.stream-entry-pill`) for high density and readability.
    - **1-Click Copy Controls**: Copy individual Entry IDs or full Entry JSON objects with animated checkmark confirmation (`Copied!`).
  - **Large Hash Pagination**: Hashes with thousands or millions of fields paginate smoothly (200 fields/page) with server-side field-level search.
  - **Raw Value Download**: Download key values directly as raw JSON/files with 1 click.
  - JSON formatting, search filtering within hash/list elements, and raw payload views.
  - Live TTL inspection and TTL modification.
  - Key deletion with confirmation.

---

### 5. Export Matched Key Names (CSV / TXT)
- **One-Click Export**: Export keys matching your active search pattern, type filter, and TTL filter.
- **Flexible Scope**:
  - **Currently Loaded Keys**: Instant client-side download via browser `Blob` (zero network hops, zero load on Redis).
  - **All Matched Keys in Database**: Backend scan streaming keys across all cluster shards.
- **TTL Filtering Integration**: Filter exports to **All**, **Expiring Only**, or **Persistent Keys Only** (`ttl_filter=persistent|expiring`) to easily audit unexpiring keys in external tools.
- **Standard Formats**:
  - **CSV**: Structured columns `Key,Type,TTL_Seconds` formatted to POSIX/RFC standards for Excel, sheets, and analytics scripts.
  - **TXT**: Plain newline-delimited key names for piping into shell scripts, CLI tools, or `xargs`.
- **Visual Feedback**: Real-time loading spinner and guaranteed `.csv` / `.txt` file extensions.

---

### 6. Safeguarded Bulk Delete with `UNLINK`
- **Non-Blocking Deletion**: Uses `UNLINK` instead of blocking `DEL` to reclaim memory asynchronously in background threads.
- **Cluster Cross-Slot Safe**: On Redis Clusters, keys are partitioned and unlinked **per primary node** (`target_nodes=node`), completely eliminating `CROSSSLOT Keys in request don't hash to the same slot` errors!
- **Strict Multi-Stage Safety Gates**:
  1. **Dry-Run Simulation**: Scans matching keys without deleting, returning the exact matched count, sample keys, and per-node breakdown.
  2. **Count Confirmation Barrier**: Requires typing the exact matched count (e.g. `1250`) to enable the confirmation button.
  3. **Production Gate**: On `PROD` environments, a bright red alert banner appears and requires typing `PROD` to unlock deletion.
- **Audit Logging**: Logs operation duration, target pattern, and key count for traceability.

---

### 7. Real-Time Slowlog & Latency Profiler
- **Cluster-Wide Slowlog Aggregation**: Executes `SLOWLOG GET` across standalone instances or aggregates slow command entries from all primary cluster nodes.
- **Microsecond Precision**: Displays execution duration in milliseconds and microseconds, timestamp, caller IP/client name, command arguments, and target node.
- **Time Horizon Filter & Relative Time Tags**:
  - Interactive Time Window selector (`All`, `5m`, `15m`, `1h`, `24h`) with cyan active indicator to inspect slow commands executed within the last $X$ minutes.
  - High-contrast relative time tags (`15s ago`, `2m ago`, `1h ago`) rendered directly below the ISO timestamp for instant cognitive orientation.
- **Visual Latency Threshold Badges**:
  - `< 10ms`: Subtle green/cyan badge.
  - `10ms - 50ms`: Amber warning badge.
  - `> 50ms`: Bold red critical latency badge.
- **1-Click Copy Command**: Copy full slow command strings and arguments directly to clipboard with visual checkmark feedback.
- **Search & Filter**: Filter slow commands by search query, min latency threshold (>1ms, >5ms, >10ms, >50ms), or specific cluster node.
- **Reset Buffer**: Safely reset the Redis Slowlog buffer with confirmation.

---

### 8. Memory Analysis & "BigKeys" Profiler (with TTL Expiry Horizon & Leak Audit)
- **What is BigKeys?**:
  - In Redis, **BigKeys** are keys consuming disproportionate RAM (measured in bytes via `MEMORY USAGE`) or containing excessive collection cardinality (`HLEN`, `LLEN`, `SCARD`, `ZCARD`, `STRLEN`).
  - Because Redis is single-threaded, operating on or evicting BigKeys causes latency spikes, blocks other client requests, and creates hot shards in clusters.
- **Live Memory Overview & Health**:
  - Live memory usage, RSS, and peak memory.
  - **Memory Fragmentation Ratio**: Real-time status badge with intelligent classification (`Optimal 1.0-1.5`, `Warning`, or `Critical >2.0`).
  - **Cache Hit Ratio**: Real-time keyspace hits vs misses percentage calculation.
  - Maxmemory limits and eviction policy (`noeviction`, `volatile-lru`, `allkeys-lru`, etc.).
- **TTL Expiry Horizon & Space Reclaim Forecast**:
  - **Forecast Horizon Buckets**: Groups sampled/scanned keys into 5 actionable expiry windows: `< 1h`, `1-24h`, `1-7d`, `> 7d`, and `Persistent (No TTL)`.
  - **Cumulative Reclamation KPIs**: Displays projected memory freed in the next **1 Hour**, **24 Hours**, and **7 Days**, with a multi-segment visual horizon progress bar.
  - **Persistent Keys Leak Audit**: Identifies the percentage of memory occupied by unexpiring keys and lists the top offending namespaces (e.g. `session:*`, `cache:*`). Includes a 1-click **Filter in Keys** action that jumps directly to the Keys Browser with the namespace pattern and `Persistent` TTL filter pre-applied.
- **Scan Modes & Performance Safeguards**:
  - **Sampled Scan (Default)**: Non-blocking sampling (100, 250, 500, 1,000, 2,500 keys) using cursor `SCAN` with `asyncio.Semaphore(25)` throttling to protect production CPU.
  - **Full Keyspace Deep Scan**: Traverses the entire keyspace for exhaustive memory accounting. Guarded by an interactive **Deep Scan Safety Modal** requiring explicit user confirmation to prevent unintended cluster strain.
- **Data Type Allocation Bar**: Multi-colored stacked proportional bar showing exact memory % used by Hashes vs Strings vs Sets vs Lists vs ZSets.
- **Top 50 BigKeys Leaderboard**:
  - Ranks keys by memory consumption with gold, silver, and bronze rank badges.
  - 1-click **Copy Key** button with instant clipboard feedback.
  - Interactive Key Inspector links and direct row `UNLINK` deletion.
- **Smart Bottleneck Recommendations**:
  - Automatically identifies large keys (>500KB), oversized collections (>5,000 items), high ratios of non-expiring keys, and memory fragmentation.

---

### 9. Connected Clients Inspector (with `[THIS APP]` Self-Identification)
- **Real-Time Client Tracking**: Inspect all active connections via `CLIENT LIST` across standalone instances or cluster primary nodes.
- **App Self-Identification**:
  - Establishes connections using `client_name="redisinsight-py"` on both `aioredis.Redis` and `RedisCluster`.
  - Dynamically highlights the current application's connection in the client table with a distinctive cyan **`[THIS APP]`** badge so you never mistake your own monitoring connection for external application traffic.
- **Detailed Caller Metadata**: Displays client IP, port, local target port, authenticated user, connection flags, and currently active command.
- **Instant Search**: Filter clients by IP, port, client name, user, or executed command.
- **Client Termination**: 1-click **Kill Client** (`CLIENT KILL`) to terminate rogue or stalled connections with confirmation.

---

### 10. Workspace Ergonomics & Tabbed Architecture
- **Tabbed Workspace Navigation**: Analytical tools (Keys Browser, Benchmark Studio, Memory Studio, Slowlog Profiler, Topology Map, Connected Clients) are structured as dedicated workspace tabs for instant switching without modal stacking or loss of inspection state.
- **Global Escape Key Dismiss**: Press `Escape` at any time to immediately close any open modal popup.
- **Backdrop Click Dismiss**: Clicking outside any dialog content on the backdrop smoothly dismisses the modal.
- **Smooth Animations & Blur**: Modern entrance scaling animations (`modalScaleIn`) with `backdrop-filter: blur(8px)`.
- **One-Click Sidebar Toggle**: Expand or collapse the cluster sidebar instantly via the collapse arrow, top-bar expand button, or `Ctrl+B` / `Cmd+B` keyboard shortcut.
- **Persistent Layout State**: Remembers sidebar visibility and auto-refresh intervals in browser local storage.
- **Streamlined 3-Zone Header**: Clean navbar featuring an active connection pill, unified vitals capsule (Memory, Ops/sec, Connected Clients), and segmented tools launcher.

---

### 11. Hybrid Read-Only Mode & PROD Auto-Lock
- **Hybrid Configuration**:
  - **Global Environment Flag**: Set `APP_READONLY=true` in `.env` or system environment to enforce strict global read-only mode across all connections.
  - **Per-Connection Flag**: Configure `read_only: true` on individual connections in `config/connections.yaml` or toggle via the connection modal checkbox.
- **PROD Auto-Lock by Default**:
  - Connections with `environment: "PROD"` automatically default to `read_only: true` to prevent accidental deletions or mutations in production environments.
  - Can be explicitly overridden (`read_only: false`) when writes are deliberately needed.
- **Backend Write Permission Guard (`require_write_permission`)**:
  - Rejects all mutating operations with **HTTP 403 Forbidden**:
    - Single key deletion (`DELETE /api/keys/{key}`)
    - Bulk deletion (`POST /api/keys/bulk-delete`)
    - TTL modifications (`PUT /api/keys/{key}/ttl`)
    - Hash field additions & deletions (`PUT/DELETE /api/keys/{key}/field`)
    - Client termination (`DELETE /api/clients/{id}`)
    - Slowlog reset (`POST /api/slowlog/reset`)
- **Frontend UI/UX Protection**:
  - Top navigation bar renders a prominent **`[🔒 READ ONLY]`** security badge.
  - Bulk Delete toolbar button is automatically disabled with a lock icon and explanatory tooltip.
  - Key table rows and bigkeys leaderboard display lock icons instead of delete buttons.
  - Key Inspector hides or locks Delete Key and Edit TTL controls; Hash Inspector hides Add Field and locks field deletion.
  - Clients Inspector locks disconnect buttons; Slowlog Inspector hides the reset button.
  - Write benchmarks (SET, HSET) are automatically locked in Benchmark Studio.

---

### 12. Redis Benchmark & Latency Studio (with Lua Profiler & Cluster Matrix)
- **Built-in Native Engine**: Zero external dependencies—runs directly inside the FastAPI backend and browser without requiring `redis-benchmark` or `memtier_benchmark` to be installed on host.
- **Network Latency vs. Server Execution Isolation**:
  - Isolates client-server round-trip time (RTT) from server-side CPU processing.
  - Visual **Latency Decomposition Bar** shows exact percentage and milliseconds spent in **Network Transit** vs **Redis Server CPU**.
- **4 Progressive Diagnostic Levels**:
  - **Level 1: Network & RTT Probe**: Fast PING bursts (50 to 500 probes) calculating Min, P50 (median), P90, P95, P99, Max, Jitter, and bucket distribution histogram.
  - **Level 2: Core Command Synthetic Suite**:
    - Presets: Read-Heavy (100% GET), Write (100% SET), Balanced (80% GET, 20% SET), Data Structures (HSET / HGET).
    - Configurable total requests (500 to 10,000), concurrency workers (1 to 20), and pipeline batching (1 to 10).
    - **Safe & Ephemeral**: Keys generated in `__ri_bench__:*` namespace with guaranteed auto-cleanup via `UNLINK`.
  - **Level 3: Lua Script Profiler & Sandbox**:
    - Preloaded script templates (Atomic Counter + TTL, Hash loop lookup, Distributed Lock simulation, or custom scripts).
    - Preloads scripts via `SCRIPT LOAD` and executes using `EVALSHA` to eliminate script body re-transmission overhead.
    - Measures exact server-side microsecond execution time using internal Redis `TIME` delta.
    - **Atomicity Alert Banner**: Displays high-priority warning if server execution exceeds 5ms, alerting you before deploying scripts that could block other clients.
    - Inspects return values directly in the UI.
  - **Level 4: Cluster Cross-Node Matrix**:
    - Probes each cluster primary master node individually.
    - Compares Avg Latency, P99 Tail Latency, and Throughput side-by-side in a matrix table.
    - Automatically highlights **Latency Outliers (>1.75x cluster avg)** to detect hot shards or CPU throttling.
- **Read-Only / PROD Guardrails**: Write benchmarks are locked when connected to Read-Only or PROD instances.

---

### 13. Security & Static Configuration Sync
- **Encrypted Password Storage**: Passwords stored in local SQLite are encrypted with **Fernet (AES-128-CBC + HMAC-SHA256)**. The encryption key is generated locally in `.secret.key` and never committed to source control.
- **Static Configuration (`config/connections.yaml`)**: Predefine cluster endpoints and environments in YAML. Changes are automatically synced on startup.

---

### 14. Cluster Switch Lifecycle & Zero Auto-Command Firing
- **Zero Auto-Command Invariant**:
  - When switching clusters, **only the main landing screen (Keys Browser)** automatically triggers a keyspace scan.
  - Diagnostic studios (**Memory Studio**, **Benchmark Studio**, **Slowlog Profiler**, **Connected Clients**, **Cluster Topology**) **never** execute background Redis commands or scans automatically upon cluster switch.
  - Previous diagnostic metrics and cached tables are immediately cleared, and an explicit, informative prompt card is rendered showing the active cluster's name, host:port, node count, and an explicit action button (e.g. `Start Profiling`, `Load Slowlog`, `Inspect Clients`).
- **In-Flight Cancellation via `AbortController`**:
  - Any long-running keyspace or memory scan is tied to an `AbortController`.
  - Switching clusters or exiting tabs instantly aborts the in-flight network request, eliminating race conditions or stale data overwriting the new cluster's view.
- **In-Pane Context Identification Bars**:
  - Every workspace view displays the active target cluster context (name, endpoint, environment badge, topology badge):
    - **Keys Action Bar**: Displays `#keysTargetCapsule` right alongside View Mode and Safe SCAN controls.
    - **Diagnostic Modals**: Display `.modal-subtitle` (e.g. `#memoryTargetSubtitle`, `#slowlogTargetSubtitle`, `#topologyTargetSubtitle`, `#clientsTargetSubtitle`) directly beneath the modal title.
  - Guarantees operators always know which Redis cluster or standalone instance they are observing without checking the sidebar.

---

### 15. Configuration Flags & Environment Variables

| Variable / Flag | Default | Scope | Description |
| :--- | :--- | :--- | :--- |
| `APP_READONLY` | `false` | Global | Enforces strict read-only mode across all connections. Disables bulk delete, key deletions, and TTL edits. |
| `REDIS_ENCRYPTION_KEY` | *(Auto-generated)* | Backend | Fernet AES-128 encryption key for SQLite password storage. Stored locally in `.secret.key`. |
| `REDIS_CONNECTIONS_FILE` | `config/connections.yaml` | Backend | Declarative YAML file defining connection endpoints, environments, and seed nodes. Synced on startup. |
| `REDIS_MAX_CONNECTIONS` | `10` | Pool | Maximum concurrent active Redis client pools cached in multi-user container environments. |
| `PORT` / `APP_PORT` / `UVICORN_PORT` | `8001` | Server | HTTP server listening port. |
| `HOST` / `APP_HOST` / `UVICORN_HOST` | `0.0.0.0` | Server | HTTP server bind address. |
| `environment: "PROD"` | — | Connection | Connections marked with `PROD` automatically default to `read_only: true` unless explicitly overridden. |

---

## Architecture Overview

```
+------------------------------------------------------------------+
|                     Browser (SPA / Vite)                         |
|  +--------------------+  +------------------+  +---------------+ |
|  | Connection Sidebar |  |  HTML Data Grid  |  | Key Inspector | |
|  +--------------------+  +------------------+  +---------------+ |
+---------------------------------|--------------------------------+
                                  | HTTP / JSON REST
+---------------------------------v--------------------------------+
|                 FastAPI Backend (run.py)                         |
|  +-------------------------------------------------------------+ |
|  | Routers: /api/connections | /api/keys | /api/cluster        | |
|  +-------------------------------------------------------------+ |
|  | Redis Manager (aioredis, RedisCluster, Connection Pooling)   | |
|  +-------------------------------------------------------------+ |
|  | SQLite Storage (Encrypted via Fernet) | YAML Config Loader  | |
+---------------------------------|--------------------------------+
                                  | TCP / TLS
+---------------------------------v--------------------------------+
|                  Redis Standalone / Cluster                      |
+------------------------------------------------------------------+
```

---

## Getting Started

### Prerequisites
- **Python**: Version 3.10, 3.11, 3.12, or 3.13
- **Node.js**: Version 18+ (only required if building frontend from source)
- **Redis**: Standalone or Cluster instance

### 1. Installation

Clone this repository and create a virtual environment:
```bash
git clone https://github.com/erdcpatel/redis-insight-py.git
cd redis-insight-py

# Create and activate virtual environment
python3 -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install Python dependencies
pip install -r requirements.txt
```

### 2. Configuration (Optional)

You can define initial connections in `config/connections.yaml`:
```yaml
connections:
  - name: "Local Redis"
    environment: "LOCAL"
    type: "standalone"
    host: "localhost"
    port: 6379
    db: 0

  - name: "Dev 6-Node Redis Cluster"
    environment: "DEV"
    type: "cluster"
    nodes:
      - host: "127.0.0.1"
        port: 7000
      - host: "127.0.0.1"
        port: 7001
      - host: "127.0.0.1"
        port: 7002
      - host: "127.0.0.1"
        port: 7003
      - host: "127.0.0.1"
        port: 7004
      - host: "127.0.0.1"
        port: 7005
    password: "${DEV_REDIS_PASSWORD:-}"
    use_tls: false
```

#### Secrets & Environment Variables (.env)
You can inject sensitive passwords dynamically using `${VAR_NAME}` or `${VAR_NAME:-default_value}`:
```bash
# Copy the template to .env (automatically loaded & gitignored)
cp .env.example .env
```
Inside `.env`:
```bash
DEV_REDIS_PASSWORD=my_secure_dev_password
PROD_REDIS_PASSWORD=my_secure_prod_password
```

### 3. Run the Application

Start the backend server (the frontend bundle in `dist/` is served automatically):
```bash
python3 run.py
```

To run on a custom port:
```bash
PORT=8080 python3 run.py
```

Open your browser at:
```
http://localhost:8001
```

---

## Frontend Development & Building

The frontend source is located in `frontend/src/` and uses Vite.

To build the production assets:
```bash
cd frontend
npm install
npm run build
```

This compiles the assets directly into `dist/` (~115 KB total bundle size).

To run the Vite dev server with hot reloading:
```bash
cd frontend
npm run dev
```

---

## Local Testing & Verification

A comprehensive testing suite is provided to validate backend APIs, live cluster connections, and browser UI/UX before pushing changes:

```bash
# 1. Manage local Redis standalone (port 6379) and 6-node cluster (ports 7000-7005)
./scripts/manage_local_redis.sh status
./scripts/manage_local_redis.sh start-all
./scripts/manage_local_redis.sh seed

# 2. Run all unit and live integration tests (105+ tests)
PYTHONPATH=. pytest tests/

# 3. Run Playwright End-to-End Browser UI tests (13+ tests)
cd frontend && npx playwright test
```

For complete instructions, pre-push verification checklists, and design rules, see [docs/LOCAL_TESTING.md](docs/LOCAL_TESTING.md) and [docs/UI_UX_GUIDELINES.md](docs/UI_UX_GUIDELINES.md).

---

## Git & Repository Structure

```
.
├── .gitignore               # Ignored secrets, db, node_modules, and cache files
├── README.md                # Comprehensive documentation
├── requirements.txt         # Python dependencies
├── run.py                   # Application entrypoint
├── app/
│   ├── main.py              # FastAPI app & static files routing
│   ├── redis_manager.py     # Async Redis & Cluster connection pool manager
│   ├── db.py                # SQLite repository with Fernet encryption
│   ├── config_loader.py     # connections.yaml parser and syncer
│   ├── models.py            # Pydantic schemas
│   └── routers/
│       ├── connections.py   # Connection endpoints & limits
│       └── keys.py          # Key browsing, inspection, and deletion
├── config/
│   └── connections.yaml     # Declarative connection definitions
├── dist/                    # Production frontend distribution (pre-built)
├── frontend/
│   ├── package.json         # Frontend package configuration (Lucide, Vite)
│   ├── vite.config.js       # Vite configuration
│   └── src/
│       ├── main.js          # Main client application logic
│       └── style.css        # Glassmorphic dark theme styles
└── tests/                   # Automated tests
```

---

## Contributing & Pushing to GitHub

The `main` branch is protected by GitHub branch rules (`enforce_admins: true`). Direct pushes to `main` are blocked to maintain codebase integrity. All changes must be contributed via feature branches and Pull Requests.

### Mandatory Pre-Commit Checklist
Before committing or submitting a PR, verify:
- [ ] **Frontend Build**: `cd frontend && npm run build` (0 errors).
- [ ] **Backend Tests**: `PYTHONPATH=. pytest tests/` (105+ tests passed).
- [ ] **Playwright E2E**: `cd frontend && npx playwright test` (15+ tests passed).
- [ ] **Docs & Skills Sync**: All new features, UX conventions, and flags are documented in `AGENTS.md`, `SKILL.md`, `UI_UX_GUIDELINES.md`, and `README.md`.
- [ ] **Branch Safety**: Never commit directly to `main`.

```bash
# 1. Create and switch to a feature branch
git checkout -b feature/my-new-feature

# 2. Complete verification pipeline
cd frontend && npm run build
PYTHONPATH=. pytest tests/
cd frontend && npx playwright test

# 3. Stage and commit your changes
git add .
git commit -m "feat: describe the feature or enhancement"

# 4. Push your feature branch to GitHub
git push -u origin feature/my-new-feature

# 5. Open a Pull Request against main
gh pr create --title "feat: describe the feature" --body "Summary of changes..."
```


---

## License

MIT License. Free for personal and commercial use.
