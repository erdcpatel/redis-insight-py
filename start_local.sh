#!/usr/bin/env bash
# ==============================================================================
# RedisInsight-Py - Local Test & Development Runner
# Starts:
#   1. Standalone Redis (127.0.0.1:6379)
#   2. 6-Node Redis Cluster (127.0.0.1:7000..7005)
#   3. Clean connections database (synced from config/connections.yaml)
#   4. Realistic seed data for namespaces, keys, and vitals
#   5. FastAPI Backend + Web Workspace on http://127.0.0.1:8001
# ==============================================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$SCRIPT_DIR"

# 1. Detect Python virtual environment
USER_VENV="$HOME/workspace/venv/py313/bin/python"
if [ -f "$USER_VENV" ]; then
  PYTHON_BIN="$USER_VENV"
elif [ -n "${VIRTUAL_ENV:-}" ] && [ -f "$VIRTUAL_ENV/bin/python" ]; then
  PYTHON_BIN="$VIRTUAL_ENV/bin/python"
elif command -v python3 >/dev/null 2>&1; then
  PYTHON_BIN="$(command -v python3)"
else
  echo "❌ Error: Python binary not found. Please activate a virtualenv."
  exit 1
fi

echo "=========================================================="
echo " 🚀 RedisInsight-Py Local Test Environment Launcher"
echo "=========================================================="
echo " Python: $PYTHON_BIN"
echo " Root:   $ROOT_DIR"
echo ""

# 2. Start Standalone & Cluster Redis via manage_local_redis.sh
echo "==> Step 1/4: Checking and Starting Redis Instances..."
"$ROOT_DIR/scripts/manage_local_redis.sh" start-standalone
"$ROOT_DIR/scripts/manage_local_redis.sh" start-cluster

# 3. Seed test data
echo ""
echo "==> Step 2/4: Seeding Test Data (Standalone + Cluster)..."
"$ROOT_DIR/scripts/manage_local_redis.sh" seed

# 4. Clean connections.db and sync fresh from config/connections.yaml
echo ""
echo "==> Step 3/4: Cleaning Connections Database..."
$PYTHON_BIN -c "
import sqlite3
from app.db import init_db
from app.config_loader import sync_connections_from_config

conn = sqlite3.connect('connections.db')
conn.execute('DELETE FROM connections')
conn.commit()
conn.close()

init_db()
res = sync_connections_from_config()
print(f'    ✓ {res.get(\"message\", \"Connections synced from config/connections.yaml\")}')
"

# 5. Display Status Summary
echo ""
echo "==> Step 4/4: Status Summary"
"$ROOT_DIR/scripts/manage_local_redis.sh" status

echo ""
echo "=========================================================="
echo " 🌟 RedisInsight-Py is Ready for Testing!"
echo "=========================================================="
echo " Web UI:     http://127.0.0.1:8001"
echo " Standalone: 127.0.0.1:6379 (Local Redis)"
echo " Cluster:    127.0.0.1:7000 (Dev 6-Node Redis Cluster)"
echo ""
echo " Keyboard Shortcuts:"
echo "   Ctrl+1 : Key Browser & Namespace Tree"
echo "   Ctrl+2 : Benchmark & Latency Studio"
echo "   Ctrl+3 : Memory Diagnostics & BigKeys"
echo "   Ctrl+4 : Real-Time Slowlog Profiler"
echo "   Ctrl+5 : Cluster Topology & Nodes"
echo "   Ctrl+6 : Connected Clients"
echo "   Ctrl+B : Toggle Sidebar"
echo "=========================================================="
echo " Starting FastAPI application (Press Ctrl+C to stop)..."
echo ""

cd "$ROOT_DIR"
exec $PYTHON_BIN run.py
