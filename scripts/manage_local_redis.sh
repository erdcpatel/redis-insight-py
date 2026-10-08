#!/usr/bin/env bash
set -euo pipefail

CLUSTER_DIR="${REDIS_CLUSTER_DIR:-${HOME}/workspace/redis-cluster}"
CLUSTER_PORTS=(7000 7001 7002 7003 7004 7005)
STANDALONE_PORT=6379

check_port_running() {
  local port="$1"
  redis-cli -p "$port" ping 2>/dev/null | grep -q "PONG"
}

start_standalone() {
  echo "==> Checking Standalone Redis on port $STANDALONE_PORT..."
  if check_port_running "$STANDALONE_PORT"; then
    echo "    Standalone Redis is already running on port $STANDALONE_PORT."
  else
    echo "    Starting Standalone Redis on port $STANDALONE_PORT..."
    if command -v brew >/dev/null 2>&1 && brew services list 2>/dev/null | grep -q redis; then
      brew services start redis || redis-server --daemonize yes
    else
      redis-server --daemonize yes
    fi
    sleep 1
    if check_port_running "$STANDALONE_PORT"; then
      echo "    ✓ Standalone Redis successfully started on port $STANDALONE_PORT."
    else
      echo "    ✗ Failed to start Standalone Redis on port $STANDALONE_PORT."
      return 1
    fi
  fi
}

stop_standalone() {
  echo "==> Stopping Standalone Redis on port $STANDALONE_PORT..."
  if check_port_running "$STANDALONE_PORT"; then
    redis-cli -p "$STANDALONE_PORT" shutdown nosave 2>/dev/null || true
    sleep 1
    echo "    ✓ Standalone Redis stopped."
  else
    echo "    Standalone Redis is not running."
  fi
}

start_cluster() {
  echo "==> Starting 6-Node Redis Cluster ($CLUSTER_DIR)..."
  if [ ! -d "$CLUSTER_DIR" ]; then
    echo "    ✗ Cluster directory does not exist: $CLUSTER_DIR"
    return 1
  fi

  for port in "${CLUSTER_PORTS[@]}"; do
    if check_port_running "$port"; then
      echo "    Node :$port is already running."
    else
      local conf="$CLUSTER_DIR/$port/redis.conf"
      if [ -f "$conf" ]; then
        echo "    Starting node :$port ($conf)..."
        redis-server "$conf"
      else
        echo "    ✗ Missing redis.conf for port $port at $conf"
      fi
    fi
  done

  echo "    Waiting for cluster nodes to become responsive..."
  sleep 1
  local all_ok=true
  for port in "${CLUSTER_PORTS[@]}"; do
    if check_port_running "$port"; then
      echo "    ✓ Node :$port responsive (PONG)."
    else
      echo "    ✗ Node :$port unresponsive."
      all_ok=false
    fi
  done

  if [ "$all_ok" = true ]; then
    echo "==> Cluster status summary:"
    redis-cli -p 7000 cluster info 2>/dev/null | grep -E "cluster_state|cluster_known_nodes|cluster_size" | sed 's/^/    /'
    echo "    ✓ 6-Node Redis Cluster is ready."
  fi
}

stop_cluster() {
  echo "==> Stopping 6-Node Redis Cluster..."
  for port in "${CLUSTER_PORTS[@]}"; do
    if check_port_running "$port"; then
      echo "    Stopping node :$port..."
      redis-cli -p "$port" shutdown nosave 2>/dev/null || true
    else
      echo "    Node :$port is not running."
    fi
  done
  sleep 1
  echo "    ✓ Cluster nodes shutdown complete."
}

status() {
  echo "=========================================="
  echo " Redis Local Environment Status"
  echo "=========================================="
  
  echo -n " Standalone (127.0.0.1:$STANDALONE_PORT): "
  if check_port_running "$STANDALONE_PORT"; then
    echo "RUNNING (PONG)"
  else
    echo "STOPPED"
  fi

  echo " Cluster Nodes ($CLUSTER_DIR):"
  local running_cluster_count=0
  for port in "${CLUSTER_PORTS[@]}"; do
    echo -n "   - 127.0.0.1:$port: "
    if check_port_running "$port"; then
      echo "RUNNING"
      running_cluster_count=$((running_cluster_count + 1))
    else
      echo "STOPPED"
    fi
  done

  if [ "$running_cluster_count" -gt 0 ]; then
    echo " Cluster Health (via port 7000):"
    if check_port_running 7000; then
      redis-cli -p 7000 cluster info 2>/dev/null | grep -E "cluster_state|cluster_known_nodes|cluster_size" | sed 's/^/     /'
    else
      echo "     Port 7000 is down, querying available cluster node..."
    fi
  fi
  echo "=========================================="
}

seed_test_data() {
  echo "==> Seeding test data into Standalone and Cluster..."

  # Standalone data
  if check_port_running "$STANDALONE_PORT"; then
    echo "    Seeding standalone (port $STANDALONE_PORT)..."
    redis-cli -p "$STANDALONE_PORT" SET "app:config:version" "1.0.0" >/dev/null
    redis-cli -p "$STANDALONE_PORT" SET "session:token:standalone123" "session_payload_data" EX 3600 >/dev/null
    redis-cli -p "$STANDALONE_PORT" HSET "user:profile:1" name "Alice" role "Admin" email "alice@example.com" >/dev/null
    redis-cli -p "$STANDALONE_PORT" LPUSH "tasks:queue" "job_1" "job_2" "job_3" >/dev/null
    redis-cli -p "$STANDALONE_PORT" SADD "features:active" "dark_mode" "auto_refresh" "clusters" >/dev/null
    redis-cli -p "$STANDALONE_PORT" ZADD "leaderboard:points" 100 "Alice" 85 "Bob" 95 "Charlie" >/dev/null
    echo "    ✓ Standalone keys seeded."
  else
    echo "    Standalone Redis not running on port $STANDALONE_PORT, skipping."
  fi

  # Cluster data (using cluster flag -c)
  if check_port_running 7000; then
    echo "    Seeding cluster (via port 7000 with -c)..."
    redis-cli -c -p 7000 SET "cluster:config:env" "production" >/dev/null
    redis-cli -c -p 7000 SET "cache:api:v1:stats" '{"requests":15200,"errors":3}' EX 7200 >/dev/null
    redis-cli -c -p 7000 HSET "user:cluster:1001" id "1001" name "John Doe" status "active" >/dev/null
    redis-cli -c -p 7000 HSET "user:cluster:1002" id "1002" name "Jane Smith" status "pending" >/dev/null
    redis-cli -c -p 7000 LPUSH "events:audit" "login_user_1" "update_key_ttl" "bulk_delete" >/dev/null
    redis-cli -c -p 7000 SADD "cluster:tenants" "tenant_alpha" "tenant_beta" "tenant_gamma" >/dev/null
    redis-cli -c -p 7000 ZADD "cluster:metrics:latency" 1.2 "node_7000" 0.9 "node_7001" 1.5 "node_7002" >/dev/null
    echo "    ✓ Cluster keys seeded."
  else
    echo "    Cluster port 7000 not running, skipping cluster seed."
  fi
}

flush_test_data() {
  echo "==> Cleaning test data..."
  if check_port_running "$STANDALONE_PORT"; then
    redis-cli -p "$STANDALONE_PORT" FLUSHDB >/dev/null
    echo "    ✓ Standalone DB flushed."
  fi
  if check_port_running 7000; then
    for port in "${CLUSTER_PORTS[@]}"; do
      if check_port_running "$port"; then
        redis-cli -p "$port" FLUSHALL 2>/dev/null || true
      fi
    done
    echo "    ✓ Cluster flushed."
  fi
}

case "${1:-status}" in
  start-standalone)
    start_standalone
    ;;
  stop-standalone)
    stop_standalone
    ;;
  start-cluster)
    start_cluster
    ;;
  stop-cluster)
    stop_cluster
    ;;
  start-all)
    start_standalone
    start_cluster
    ;;
  stop-all)
    stop_cluster
    stop_standalone
    ;;
  restart-all)
    stop_cluster
    stop_standalone
    sleep 1
    start_standalone
    start_cluster
    ;;
  seed)
    seed_test_data
    ;;
  flush)
    flush_test_data
    ;;
  status)
    status
    ;;
  *)
    echo "Usage: $0 {status|start-standalone|stop-standalone|start-cluster|stop-cluster|start-all|stop-all|restart-all|seed|flush}"
    exit 1
    ;;
esac
