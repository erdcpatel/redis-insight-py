#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

echo "=========================================================="
echo " Starting Local Redis Instances for E2E Testing..."
echo "=========================================================="
"$SCRIPT_DIR/manage_local_redis.sh" start-all
"$SCRIPT_DIR/manage_local_redis.sh" seed

echo ""
echo "=========================================================="
echo " Building Frontend Production Assets..."
echo "=========================================================="
cd "$ROOT_DIR"
npm --prefix frontend run build

echo ""
echo "=========================================================="
echo " Running Playwright End-to-End Browser Tests..."
echo "=========================================================="
cd "$ROOT_DIR/frontend"
npx playwright test
