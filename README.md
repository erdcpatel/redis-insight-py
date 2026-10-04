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
- **Direct Actions**:
  - **Connect**: Connect to the cluster after reviewing configuration.
  - **Test Connection**: Run an isolated latency and version check without saving or connecting.
  - **Disconnect**: Safely disconnect and release connection pools.
  - **Switch & View Keys**: Switch focus between connected clusters.
  - **Topology & Nodes**: View live slot distribution, node states, and cluster health.

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
- **Comprehensive Key Inspector**:
  - Type-aware viewers for `string`, `hash`, `list`, `set`, `zset`, and `stream`.
  - JSON formatting, search filtering within hash/list elements, and raw payload views.
  - Live TTL inspection and TTL modification.
  - Key deletion with confirmation.

---

### 5. Security & Static Configuration Sync
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
git clone <your-repo-url>
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
    use_tls: false
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

# 5. Add remote and push (replace with your repository URL)
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

---

## License

MIT License. Free for personal and commercial use.
