---
trigger: always_on
description: Mandatory Redis safety invariants, cluster lifecycle rules, and verification runbooks for RedisInsight Python.
---

# Redis Safety & Verification Rules

1. **Zero Blocking Commands**:
   - Never issue `KEYS *` or unbounded retrieval commands. Always use cursor-based `SCAN`, `HSCAN`, `SSCAN`, `ZSCAN`.
   - Never use blocking `DEL` for multi-key deletions or benchmark cleanup. Always use `UNLINK`.
   - Bound memory and inspection queries using `asyncio.Semaphore(25)` with periodic event loop yields (`await asyncio.sleep(0)`).

2. **Cluster Cross-Slot Isolation**:
   - In Redis Cluster operations, group keys by their target master node and execute per node (`target_nodes=node`) to prevent `CROSSSLOT Keys in request don't hash to the same slot` exceptions.

3. **Zero Auto-Command Firing on Cluster Switch**:
   - Only the landing screen (Keys Browser) may automatically trigger a keyspace scan upon cluster switch.
   - All analytical and diagnostic modules (**Memory Studio**, **Benchmark Studio**, **Slowlog Profiler**, **Connected Clients**, **Cluster Topology**) **MUST NEVER** automatically execute background Redis queries or scans when switching clusters.
   - Each diagnostic tab must render an explicit, zero-fetch prompt card displaying the newly active cluster's identity and await explicit user interaction before firing commands.

4. **In-Flight Cancellation via AbortController**:
   - Keyspace scans and memory profiling operations must be cancelable.
   - Always initialize an `AbortController` and pass its `signal` to fetch calls. On cluster switch or tab exit, abort any in-flight background requests immediately to prevent race conditions or stale data overwrites.

5. **Read-Only Mode & Production Guards**:
   - Any API endpoint that creates, modifies, deletes, or resets state must declare `_perm: bool = Depends(require_write_permission)`.
   - Connections with `environment: "PROD"` default to read-only mode to prevent operational mishaps.
   - Destructive actions (Bulk Delete, Full Keyspace Deep Scan) must require explicit two-stage user confirmation in the UI.

6. **Self-Identification**:
   - Configure `client_name="redisinsight-py"` on all Redis client instances (`aioredis.Redis` and `RedisCluster`).

7. **In-Pane Context Identification**:
   - Every workspace pane must display the active target cluster context (name, endpoint, environment badge, topology badge) in its header subtitle (`.modal-subtitle` or `#keysTargetCapsule`) to eliminate visual ambiguity during cluster switching.

8. **Build & Test Invariants**:
   - Whenever modifying frontend files under `frontend/src/`, always run `npm run build` in `frontend/` to update `dist/`.
   - Run backend tests with `PYTHONPATH=. /Users/dhavalpatel/workspace/venv/py313/bin/pytest tests/`.
   - Run Playwright tests with `npx playwright test` in `frontend/`.
