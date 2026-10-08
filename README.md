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
- **Responsive Glassmorphic Data Grid**: Blazing fast rendering and virtual scrolling for thousands of keys with custom type badges, live TTL tags, and direct row-level key inspection and deletion.
- **Pattern Search & Cursor Scanning**: Non-blocking `SCAN` execution with pattern filtering (`*`), smart "Load More" pagination, and strict unique key deduplication.
- **Configurable SCAN Batch Size**: Toggle requested keys per SCAN chunk (50, 100, 200, 500, or 1,000) directly from the toolbar to match network latency.
- **Real-Time Auto-Refresh Pattern Watcher**:
  - Watch for keys matching your active pattern (e.g., `orders:*`) and data type filter automatically.
  - Configurable refresh interval: **5s (Safe Minimum)**, **10s (Default)**, **15s**, **30s**, or **60s**.
  - Animated pulsing indicator with live countdown badge (e.g., `Auto: 8s`).
  - **Smart Pause**: Automatically suspends countdown while a modal is open or when the browser tab is hidden to avoid disrupting key inspection.
- **Cluster Key Slot & Owning Node Mapping**:
  - Displays the CRC16 hash slot (`#Slot`) and owning master node (`host:port (Primary)`) directly on Key Detail metadata for hot-shard and slot debugging.
  - Automatically handles Redis hash tags `{...}` (e.g. `{user:100}:profile`).
- **Comprehensive Key Inspector**:
  - Type-aware viewers for `string`, `hash`, `list`, `set`, `zset`, and `stream`.
  - **Large Hash Pagination**: Hashes with thousands or millions of fields paginate smoothly (200 fields/page) with server-side field-level search.
  - **Raw Value Download**: Download key values directly as raw JSON/files with 1 click.
  - JSON formatting, search filtering within hash/list elements, and raw payload views.
  - Live TTL inspection and TTL modification.
  - Key deletion with confirmation.

---

### 5. Export Matched Key Names (CSV / TXT)
- **One-Click Export**: Export keys matching your active search pattern and type filter.
- **Flexible Scope**:
  - **Currently Loaded Keys**: Instant client-side download via browser `Blob` (zero network hops, zero load on Redis).
  - **All Matched Keys in Database**: Backend scan streaming keys across all cluster shards.
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
- **Visual Latency Threshold Badges**:
  - `< 10ms`: Subtle green/cyan badge.
  - `10ms - 50ms`: Amber warning badge.
  - `> 50ms`: Bold red critical latency badge.
- **1-Click Copy Command**: Copy full slow command strings and arguments directly to clipboard with visual checkmark feedback.
- **Search & Filter**: Filter slow commands by search query, min latency threshold (>1ms, >5ms, >10ms, >50ms), or specific cluster node.
- **Reset Buffer**: Safely reset the Redis Slowlog buffer with confirmation.

---

### 8. Memory Analysis & "BigKeys" Profiler
- **What is BigKeys?**:
  - In Redis, **BigKeys** are keys consuming disproportionate RAM (measured in bytes via `MEMORY USAGE`) or containing excessive collection cardinality (`HLEN`, `LLEN`, `SCARD`, `ZCARD`, `STRLEN`).
  - Because Redis is single-threaded, operating on or evicting BigKeys causes latency spikes, blocks other client requests, and creates hot shards in clusters.
- **Live Memory Overview & Health**:
  - Live memory usage, RSS, and peak memory.
  - **Memory Fragmentation Ratio**: Real-time status badge with intelligent classification (`Optimal 1.0-1.5`, `Warning`, or `Critical >2.0`).
  - **Cache Hit Ratio**: Real-time keyspace hits vs misses percentage calculation.
  - Maxmemory limits and eviction policy (`noeviction`, `volatile-lru`, `allkeys-lru`, etc.).
- **Safe Non-Blocking Key Sampling**:
  - **Performance Safeguard**: Does not run automatically. Warns the user upfront with a clear Performance Notice to protect production CPU.
  - Configurable sample limits (100, 250, 500 [Default], 1,000, 2,500 keys) and pattern filtering using non-blocking `SCAN` and `MEMORY USAGE` with a concurrency semaphore (`Semaphore(25)`).
- **Data Type Allocation Bar**: Multi-colored stacked proportional bar showing exact memory % used by Hashes vs Strings vs Sets vs Lists vs ZSets.
- **Top 50 BigKeys Leaderboard**:
  - Ranks keys by memory consumption with gold, silver, and bronze rank badges.
  - 1-click **Copy Key** button with instant clipboard feedback.
  - Interactive Key Inspector links and direct row `UNLINK` deletion.
- **Smart Bottleneck Recommendations**:
  - Automatically identifies large keys (>500KB), oversized collections (>5,000 items), high ratios of non-expiring keys, and memory fragmentation.

---

### 9. Connected Clients Inspector
- **Real-Time Client Tracking**: Inspect all active connections via `CLIENT LIST` across standalone instances or cluster primary nodes.
- **Detailed Caller Metadata**: Displays client IP, port, local target port, authenticated user, connection flags, and currently active command.
- **Instant Search**: Filter clients by IP, port, client name, user, or executed command.
- **Client Termination**: 1-click **Kill Client** (`CLIENT KILL`) to terminate rogue or stalled connections with confirmation.

---

### 10. Workspace Ergonomics & Modal UX
- **Global Escape Key Dismiss**: Press `Escape` at any time to immediately close any open modal popup.
- **Backdrop Click Dismiss**: Clicking outside any dialog content on the backdrop smoothly dismisses the modal.
- **Smooth Animations & Blur**: Modern entrance scaling animations (`modalScaleIn`) with `backdrop-filter: blur(8px)`.
- **One-Click Sidebar Toggle**: Expand or collapse the cluster sidebar instantly via the collapse arrow, top-bar expand button, or `Ctrl+B` / `Cmd+B` keyboard shortcut.
- **Persistent Layout State**: Remembers sidebar visibility and auto-refresh intervals in browser local storage.
- **Streamlined 3-Zone Header**: Clean navbar featuring an active connection pill, unified vitals capsule (Memory, Ops/sec, Connected Clients), and segmented tools launcher.

---

### 11. Security & Static Configuration Sync
- **Encrypted Password Storage**: Passwords stored in local SQLite are encrypted with **Fernet (AES-128-CBC + HMAC-SHA256)**. The encryption key is generated locally in `.secret.key` and never committed to source control.
- **Static Configuration (`config/connections.yaml`)**: Predefine cluster endpoints and environments in YAML. Changes are automatically synced on startup.

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

# 2. Run all unit and live integration tests (85+ tests)
PYTHONPATH=. pytest tests/

# 3. Run Playwright End-to-End Browser UI tests
./scripts/run_e2e_tests.sh
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

## Pushing to GitHub

When you are ready to push to your GitHub repository:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Stage all files (verifying .gitignore excludes .secret.key and connections.db)
git add .

# 3. Commit
git commit -m "Initial commit: Redis Insight Py with cluster topology discovery"

# 4. Set branch to main
git branch -M main

# 5. Add remote and push
git remote add origin https://github.com/erdcpatel/redis-insight-py.git
git push -u origin main
```

---

## License

MIT License. Free for personal and commercial use.
