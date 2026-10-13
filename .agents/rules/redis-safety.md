---
trigger: always_on
description: Mandatory Redis safety invariants and testing rules for the RedisInsight Python project.
---

# Redis Safety & Verification Rules

1. **Zero Blocking Commands**:
   - Never issue `KEYS *` or unbounded retrieval commands. Always use cursor-based `SCAN`, `HSCAN`, `SSCAN`, `ZSCAN`.
   - Never use blocking `DEL` for multi-key deletions or benchmark cleanup. Always use `UNLINK`.
   - Bound memory and inspection queries using `asyncio.Semaphore(25)` with periodic event loop yields (`await asyncio.sleep(0)`).

2. **Cluster Cross-Slot Isolation**:
   - In Redis Cluster operations, group keys by their target master node and execute per node (`target_nodes=node`) to prevent `CROSSSLOT` exceptions.

3. **Read-Only Mode & Production Guards**:
   - Any API endpoint that creates, modifies, deletes, or resets state must declare `_perm: bool = Depends(require_write_permission)`.
   - Destructive actions (Bulk Delete, Full Keyspace Deep Scan) must require explicit two-stage user confirmation in the UI.

4. **Self-Identification**:
   - Configure `client_name="redisinsight-py"` on all Redis client instances.

5. **Build & Test Invariants**:
   - Whenever modifying frontend files under `frontend/src/`, always run `npm run build` in `frontend/` to update `dist/`.
   - Run backend tests with `PYTHONPATH=. /Users/dhavalpatel/workspace/venv/py313/bin/pytest tests/`.
   - Run Playwright tests with `npx playwright test` in `frontend/`.
