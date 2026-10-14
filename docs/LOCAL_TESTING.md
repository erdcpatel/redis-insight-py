# Local Testing & Verification Guide

This guide provides instructions for testing RedisInsight Python locally on macOS before pushing changes or opening Pull Requests. It ensures all API contracts, live Redis interactions, and browser UI/UX features function without regressions.

---

## Architecture of the Test Suite

The repository has three testing layers:

| Layer | Runner | Command | Description |
|---|---|---|---|
| **1. Unit & Component Tests** | `pytest` | `PYTHONPATH=. pytest tests/` | Fast unit tests with mocked Redis clients covering all endpoints, crypto, models, stream inspection, and cluster lifecycle (105+ tests). |
| **2. Live Integration Tests** | `pytest` | `PYTHONPATH=. pytest tests/test_live_local.py` | Real end-to-end API tests against running standalone (port 6379) and 6-node Redis cluster (ports 7000–7005). |
| **3. Browser E2E UI Tests** | `Playwright` | `cd frontend && npx playwright test` | Headless browser testing verifying UI rendering, cluster switching lifecycle, in-pane context subtitles, stream inspector, topology modal, diagnostic studios, and live interactions (13+ tests). |

---

## 1. Managing Local Redis Instances

A helper script is provided at `scripts/manage_local_redis.sh` to control both the standalone node and the 6-node cluster:

### Cluster Location
The 6-node cluster configuration lives in `${REDIS_CLUSTER_DIR:-$HOME/workspace/redis-cluster}` with ports `7000` through `7005` (3 primaries, 3 replicas).

### Commands

```bash
# Check status of Standalone and Cluster nodes
./scripts/manage_local_redis.sh status

# Start Standalone Redis (port 6379)
./scripts/manage_local_redis.sh start-standalone

# Start 6-Node Redis Cluster (ports 7000–7005)
./scripts/manage_local_redis.sh start-cluster

# Start both Standalone and Cluster
./scripts/manage_local_redis.sh start-all

# Stop both Standalone and Cluster
./scripts/manage_local_redis.sh stop-all

# Seed predictable test keys across both instances
./scripts/manage_local_redis.sh seed

# Flush test keys
./scripts/manage_local_redis.sh flush
```

---

## 2. Running the Application Locally

Start the RedisInsight server using your virtual environment:

```bash
python run.py
```

The application will start on **`http://localhost:8001`** (or port configured via `PORT` environment variable).

For frontend development with Vite hot module replacement (HMR):
```bash
npm --prefix frontend run dev
```

To build production frontend assets:
```bash
npm --prefix frontend run build
```

---

## 3. Running Automated Tests

### A. Run All Pytest Tests (Unit & Live Integration)

```bash
PYTHONPATH=. pytest -v tests/
```

### B. Run Live Integration Tests Only

Make sure both standalone and cluster are running (`./scripts/manage_local_redis.sh start-all`), then execute:

```bash
PYTHONPATH=. pytest -v tests/test_live_local.py
```

These tests verify:
- Standalone connection returns `is_cluster: false` and `cluster_nodes_count: null`.
- 6-node cluster test and status endpoints return `is_cluster: true` and `cluster_nodes_count: 6`.
- Cluster topology returns all 6 nodes with valid roles and slot allocations.
- Keyspace scan returns keys across all cluster masters.
- Key detail queries accurately calculate slot numbers (0–16383) and server node attribution.

### C. Run Playwright End-to-End Browser Tests

Run the all-in-one test script:

```bash
./scripts/run_e2e_tests.sh
```

Or run Playwright directly inside `frontend/`:

```bash
npm --prefix frontend run test:e2e
```

The E2E tests automatically spin up the server if not already running, launch Chromium, and assert:
1. Page layout, sidebar connections, and top vitals bar load properly.
2. 6-Node Cluster connection displays **"6 Nodes"** on the top vitals bar.
3. Clicking **"6 Nodes"** opens the Cluster Topology modal and renders all 6 nodes in the table.
4. Standalone connection displays **"1 Node"** on the top vitals bar.
5. Cluster switching updates `#keysTargetCapsule` and all workspace pane subtitles (`#memoryTargetSubtitle`, `#slowlogTargetSubtitle`, etc.) immediately.
6. Diagnostic tabs (Memory, Benchmark, Slowlog, Clients, Topology) enforce the **Zero Auto-Command Firing** invariant, rendering an explicit prompt card rather than firing background Redis queries.
7. Stream Key Inspector displays parsed timestamps, relative duration badges (`1S AGO`), real-time search filtering, and one-click copy buttons.
8. Connected Clients and Memory Analysis modals open, prompt, and profile cleanly.
9. Batch size selection supports up to 10,000 keys and Auto-refresh offers 5m interval.
10. Read-Only Mode displays `[🔒 READ ONLY]` badge and disables/locks bulk delete and mutating controls.

---

## 4. Testing Read-Only Mode Locally

You can validate the Hybrid Read-Only Mode locally in two ways:

### Method A: Environment Variable (`APP_READONLY=true`)
Run the server with the global read-only environment variable:
```bash
APP_READONLY=true python run.py
```
- Open `http://localhost:8001`.
- Any connected cluster or standalone instance will show the **`[🔒 READ ONLY]`** badge in the navbar.
- The **Bulk Delete** button will be disabled with a lock tooltip.
- Attempting any deletion or TTL mutation via API will return **HTTP 403 Forbidden**.

### Method B: Connection-Level Read-Only & PROD Auto-Lock
- Create or connect to an instance with environment set to **`PROD`** (or toggle **Read-Only Mode 🔒** in the connection modal).
- Only that connection will be locked in read-only mode, leaving non-PROD connections writable.

---

## 5. Manual Pre-Push UI/UX Verification Checklist

Before pushing any feature branch or opening a PR, perform this quick 2-minute validation checklist:

1. **Top Navbar Vitals**:
   - [ ] Connect to 6-node cluster (`127.0.0.1:7000`) &rarr; verify the top bar displays `6 Nodes` with purple cluster styling.
   - [ ] Click `6 Nodes` &rarr; verify Cluster Topology modal displays all 6 nodes (3 masters + 3 replicas) and assigned slot ranges.
   - [ ] Switch to standalone (`127.0.0.1:6379`) &rarr; verify top bar displays `1 Node` with DB tag `DB0`.

2. **Read-Only Mode & Safety**:
   - [ ] Connect to a connection with `env: "PROD"` &rarr; verify `[🔒 READ ONLY]` badge appears next to the environment badge.
   - [ ] Verify Bulk Delete button is disabled with lock tooltip `🔒 Bulk Delete is disabled in Read-Only mode`.
   - [ ] Open Key Detail modal &rarr; verify "Delete Key" button is hidden and TTL edit displays a locked badge.
   - [ ] Open Slowlog modal &rarr; verify "Reset Slowlog" button is hidden.
   - [ ] Open Clients modal &rarr; verify disconnect button shows lock icon.

3. **Keyspace & Search**:
   - [ ] Run `./scripts/manage_local_redis.sh seed` to ensure test keys are present.
   - [ ] Search for `user:*` &rarr; table updates immediately without page reload.
   - [ ] Filter by Type (e.g. `hash`, `string`, `set`) &rarr; table only displays matched types.

4. **Virtual Folder Tree View & Delimiters**:
   - [ ] Click **Tree** view tab in the action bar &rarr; keyspace switches smoothly from table to collapsible namespace folders.
   - [ ] Test Delimiter Chips &rarr; click chip pills (`:`, `/`, `.`, `-`) to toggle active delimiters on and off in real time.
   - [ ] Test Custom Delimiter &rarr; click `+ Add`, enter custom delimiter (e.g. `::` or `#`), click Add &rarr; tree regroups immediately.
   - [ ] Click on a folder &rarr; toggles expand/collapse state.
   - [ ] Click **Collapse All** / **Expand All** &rarr; collapses or expands all namespace levels.
   - [ ] Type into the in-tree filter input &rarr; tree filters matching folders and leaf keys in real time.
   - [ ] Click **Filter** badge on any folder &rarr; sets global pattern search to `namespace:*` and scans immediately.
   - [ ] Click on any leaf key in tree view &rarr; Key Inspector modal opens.
   - [ ] Click **Table** view tab &rarr; switches back to the flat data table.

5. **TTL Filter & Key Inspection**:
   - [ ] Toggle TTL filter dropdown &rarr; select **⏳ Expiring Only** &rarr; verify only keys with TTL are shown.
   - [ ] Select **∞ No TTL (Persistent)** &rarr; verify only persistent keys with `∞ No TTL` badge are shown.
   - [ ] Click **Export** &rarr; verify CSV/TXT export respects the selected TTL filter.
   - [ ] Click on a cluster key &rarr; verify key details modal displays:
     - Accurate Type and TTL.
     - Key Slot (e.g. `1024 / 16383`).
     - Server Node attribution (e.g. `127.0.0.1:7000 (Primary)`).

6. **Auto-Refresh & Batch Limit**:
   - [ ] Select `10,000` in the Keys/Batch dropdown &rarr; verify label updates to `10,000 keys per chunk`.
   - [ ] Toggle Auto-Refresh ON with `5m` interval &rarr; countdown begins with 5m.
   - [ ] Toggle Auto-Refresh OFF &rarr; timer stops.

7. **Diagnostic Studios (Workspace Tabs)**:
   - [ ] Click **Memory** in top bar &rarr; Memory Analysis workspace tab opens.
     - Verify **TTL Expiry Horizon** card renders 4 KPI metrics (`1h`, `24h`, `7d`, `Unexpiring %`) and stacked horizon bar.
     - Verify **Persistent Keys Leak Audit** lists unexpiring namespaces.
     - Click **Filter in Keys** on an offending namespace &rarr; switches to Keys Browser with pattern and `Persistent` TTL filter active.
     - Switch scan mode to **Full Keyspace Scan** &rarr; verify `#deepScanSafetyModal` displays before deep scan starts.
   - [ ] Click **Clients** in top bar &rarr; Connected Clients workspace tab opens.
     - Verify current connection displays cyan **`[THIS APP]`** badge.
   - [ ] Click **Slowlog** in top bar &rarr; Slowlog workspace tab opens and lists logged commands.
   - [ ] Click **Topology** in top bar &rarr; Cluster Topology map opens and displays node links/slots.

8. **Redis Benchmark & Latency Studio**:
   - [ ] Click **Benchmark** in the top navigation bar &rarr; Benchmark & Latency Studio opens.
   - [ ] **Level 1 (Probe)**: Click **Run Latency Probe** &rarr; verifies RTT, Server CPU time, Network Overhead, Decomposition bar, percentiles, and histogram render.
   - [ ] **Level 2 (Commands)**: Switch to **Core Command Suite** tab &rarr; click **Start Benchmark** &rarr; verifies throughput ops/s, avg latency, P99, and auto-cleaned ephemeral keys count.
   - [ ] **Level 3 (Lua Profiler)**: Switch to **Lua Script Profiler** tab &rarr; test preloaded sample script &rarr; click **Execute & Profile** &rarr; verifies return value and non-blocking / atomicity warning banner.
   - [ ] **Level 4 (Cluster Matrix)**: Switch to **Cluster Matrix** tab &rarr; click **Evaluate Cluster Latency Matrix** &rarr; verifies side-by-side node latency, P99, and health status across all cluster primaries.

9. **Cluster Switch Lifecycle & Zero Auto-Command Firing**:
   - [ ] Switch from Standalone to 6-Node Cluster in sidebar &rarr; verify `#keysTargetCapsule` immediately updates to display `6 Nodes`.
   - [ ] Switch to Memory Studio &rarr; verify previous metrics are cleared and a zero-fetch prompt card (`Start Profiling`) is displayed with cluster name and endpoint.
   - [ ] Click `Start Profiling` &rarr; verify memory scan begins and can be cancelled without errors.
   - [ ] Switch to Slowlog & Clients tabs &rarr; verify prompt cards appear without auto-firing commands until explicitly clicked.

10. **Redis Stream Key Inspector**:
   - [ ] Inspect a stream key (e.g. `test:stream:events`) &rarr; verify stream entries display:
     - Parsed local ISO timestamp and high-contrast relative duration badge (`1S AGO`).
     - Distinct pill chips for field-value pairs (`.stream-entry-pill`).
     - Live search filter input (`#streamFilterInput`) filters entries by ID or field content in real time with counter.
     - 1-click `Copy ID` and `Copy JSON` buttons animate with checkmark feedback.

