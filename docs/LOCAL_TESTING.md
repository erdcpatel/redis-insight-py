# Local Testing & Verification Guide

This guide provides instructions for testing RedisInsight Python locally on macOS before pushing changes or opening Pull Requests. It ensures all API contracts, live Redis interactions, and browser UI/UX features function without regressions.

---

## Architecture of the Test Suite

The repository has three testing layers:

| Layer | Runner | Command | Description |
|---|---|---|---|
| **1. Unit & Component Tests** | `pytest` | `PYTHONPATH=. pytest tests/` | Fast unit tests with mocked Redis clients covering all endpoints, crypto, models, and edge cases. |
| **2. Live Integration Tests** | `pytest` | `PYTHONPATH=. pytest tests/test_live_local.py` | Real end-to-end API tests against running standalone (port 6379) and 6-node Redis cluster (ports 7000–7005). |
| **3. Browser E2E UI Tests** | `Playwright` | `./scripts/run_e2e_tests.sh` | Headless browser testing verifying UI rendering, top vitals capsule ("6 Nodes" vs "1 Node"), Topology modal, diagnostics modals, and live interactions. |

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
1. Page layout and navbar load properly.
2. 6-Node Cluster connection displays **"6 Nodes"** on the top vitals bar.
3. Clicking **"6 Nodes"** opens the Cluster Topology modal and renders all 6 nodes in the table.
4. Standalone connection displays **"1 Node"** on the top vitals bar.
5. Connected Clients and Memory Analysis modals open and close cleanly.

---

## 4. Manual Pre-Push UI/UX Verification Checklist

Before pushing any feature branch or opening a PR, perform this quick 2-minute validation checklist:

1. **Top Navbar Vitals**:
   - [ ] Connect to 6-node cluster (`127.0.0.1:7000`) &rarr; verify the top bar displays `6 Nodes` with purple cluster styling.
   - [ ] Click `6 Nodes` &rarr; verify Cluster Topology modal displays all 6 nodes (3 masters + 3 replicas) and assigned slot ranges.
   - [ ] Switch to standalone (`127.0.0.1:6379`) &rarr; verify top bar displays `1 Node` with DB tag `DB0`.

2. **Keyspace & Search**:
   - [ ] Run `./scripts/manage_local_redis.sh seed` to ensure test keys are present.
   - [ ] Search for `user:*` &rarr; table updates immediately without page reload.
   - [ ] Filter by Type (e.g. `hash`, `string`, `set`) &rarr; table only displays matched types.

3. **Key Inspection Modal**:
   - [ ] Click on a cluster key &rarr; verify key details modal displays:
     - Accurate Type and TTL.
     - Key Slot (e.g. `1024 / 16383`).
     - Server Node attribution (e.g. `127.0.0.1:7000 (Primary)`).

4. **Auto-Refresh**:
   - [ ] Toggle Auto-Refresh ON in the toolbar &rarr; green pulsing dot appears.
   - [ ] Change refresh interval from `5s` to `10s` &rarr; timer updates cleanly.
   - [ ] Toggle Auto-Refresh OFF &rarr; timer stops.

5. **Diagnostic Modals**:
   - [ ] Click **Memory** in top bar &rarr; Memory Analysis & Profiler modal opens.
   - [ ] Click **Clients** in top bar &rarr; Connected Clients modal opens.
   - [ ] Click **Slowlog** &rarr; Slowlog modal opens and lists logged commands.
