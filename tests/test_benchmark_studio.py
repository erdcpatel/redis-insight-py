import pytest
from unittest.mock import AsyncMock, patch, MagicMock
from fastapi.testclient import TestClient
from app.main import app
from app.redis_manager import redis_manager

client = TestClient(app)


@pytest.fixture(autouse=True)
def setup_mock_redis():
    """Ensure mock connection is active for benchmark tests."""
    mock_redis = AsyncMock()
    mock_redis.ping = AsyncMock(return_value=True)
    mock_redis.info = AsyncMock(return_value={"cmdstat_ping": {"calls": 100, "usec": 2500}})
    mock_redis.get = AsyncMock(return_value="bench_val")
    mock_redis.set = AsyncMock(return_value=True)
    mock_redis.unlink = AsyncMock(return_value=1)
    mock_redis.script_load = AsyncMock(return_value="mocksha12345")
    mock_redis.evalsha = AsyncMock(return_value=["mock_return_val", 450])  # result, 450 us

    with patch.object(redis_manager, "get_client", return_value=mock_redis), \
         patch.object(redis_manager, "_selected_conn_id", "test-conn-1"):
        redis_manager._conn_infos["test-conn-1"] = {
            "id": "test-conn-1",
            "name": "Test Instance",
            "host": "127.0.0.1",
            "port": 6379,
            "conn_type": "standalone",
            "read_only": False,
        }
        yield mock_redis


def test_latency_probe_endpoint():
    """Test Level 1: Network RTT vs Server baseline probe."""
    res = client.post("/api/benchmark/probe", json={"count": 15})
    assert res.status_code == 200
    data = res.json()
    assert data["success"] is True
    assert data["count"] == 15
    assert "breakdown" in data
    assert "percentiles" in data
    assert "histogram" in data
    assert data["breakdown"]["total_rtt_ms"] >= 0.0
    assert data["breakdown"]["network_percentage"] + data["breakdown"]["server_percentage"] == 100.0
    assert len(data["histogram"]) > 0


def test_command_benchmark_read_preset():
    """Test Level 2: Core Command benchmark with read preset."""
    res = client.post(
        "/api/benchmark/commands",
        json={"preset": "read", "requests": 50, "concurrency": 2, "pipeline": 1},
    )
    assert res.status_code == 200
    data = res.json()
    assert data["success"] is True
    assert data["preset"] == "read"
    assert data["total_requests"] == 50
    assert data["ops_per_sec"] > 0
    assert data["cleaned_keys_count"] >= 0


def test_command_benchmark_readonly_lock():
    """Test Level 2: Write benchmarks are rejected with 403 on read-only instances."""
    redis_manager._conn_infos["test-conn-1"]["read_only"] = True
    try:
        res = client.post(
            "/api/benchmark/commands",
            json={"preset": "write", "requests": 50, "concurrency": 2, "pipeline": 1},
        )
        assert res.status_code == 403
        assert "Read-Only Mode / PROD lock" in res.json()["detail"]
    finally:
        redis_manager._conn_infos["test-conn-1"]["read_only"] = False


def test_lua_benchmark_profile_mode():
    """Test Level 3: Lua script single-run profiler."""
    lua_code = "return redis.call('GET', 'some_key') or 'fallback'"
    res = client.post(
        "/api/benchmark/lua",
        json={"script": lua_code, "keys": [], "args": [], "mode": "profile"},
    )
    assert res.status_code == 200
    data = res.json()
    assert data["success"] is True
    assert data["mode"] == "profile"
    assert data["server_duration_ms"] > 0
    assert data["atomicity_warning"] is False


def test_lua_benchmark_benchmark_mode():
    """Test Level 3: Lua script multi-iteration benchmark."""
    lua_code = "return 1 + 1"
    res = client.post(
        "/api/benchmark/lua",
        json={
            "script": lua_code,
            "keys": [],
            "args": [],
            "mode": "benchmark",
            "iterations": 20,
            "concurrency": 2,
        },
    )
    assert res.status_code == 200
    data = res.json()
    assert data["success"] is True
    assert data["mode"] == "benchmark"
    assert data["ops_per_sec"] > 0
    assert "percentiles" in data
    assert "histogram" in data


def test_lua_atomicity_warning_flag(setup_mock_redis):
    """Test Level 3: Script with server duration > 5ms triggers atomicity alert."""
    setup_mock_redis.evalsha = AsyncMock(return_value=["heavy_result", 6200])  # 6.2 ms server time
    res = client.post(
        "/api/benchmark/lua",
        json={"script": "return 'heavy'", "keys": [], "args": [], "mode": "profile"},
    )
    assert res.status_code == 200
    data = res.json()
    assert data["atomicity_warning"] is True
    assert "High Atomicity Alert" in (data["warning_message"] or "")


def test_cluster_matrix_standalone():
    """Test Level 4: Cluster matrix endpoint on standalone instance."""
    res = client.get("/api/benchmark/cluster-matrix")
    assert res.status_code == 200
    data = res.json()
    assert data["success"] is True
    assert data["is_cluster"] is False
    assert len(data["nodes"]) == 1
    assert data["nodes"][0]["role"] == "master (standalone)"
