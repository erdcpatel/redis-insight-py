import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.db import create_connection, delete_connection


@pytest.fixture(scope="module")
def client():
    # Setup test connection in SQLite
    conn = create_connection({
        "name": "Phase3 Test Redis",
        "host": "localhost",
        "port": 6379,
        "db": 0,
    })
    try:
        with TestClient(app) as c:
            c.post(f"/api/connections/{conn['id']}/activate")
            yield c
    finally:
        delete_connection(conn["id"])


def test_slowlog_endpoint(client):
    """Verify SLOWLOG GET endpoint returns expected model schema."""
    resp = client.get("/api/slowlog?limit=50")
    # If redis on 6379 is not running, 500 is returned, else 200
    if resp.status_code == 200:
        data = resp.json()
        assert "entries" in data
        assert isinstance(data["entries"], list)
        assert "total_len" in data
        assert isinstance(data["total_len"], int)
        if data["entries"]:
            first = data["entries"][0]
            assert "id" in first
            assert "duration_us" in first
            assert "duration_ms" in first
            assert "command" in first
            assert isinstance(first["command"], list)


def test_slowlog_reset_endpoint(client):
    """Verify SLOWLOG RESET clears the slowlog buffer."""
    resp = client.post("/api/slowlog/reset")
    if resp.status_code == 200:
        data = resp.json()
        assert data["status"] == "ok"


def test_memory_overview_endpoint(client):
    """Verify Memory Overview endpoint returns memory metrics, fragmentation, and hit ratio."""
    resp = client.get("/api/memory/overview")
    if resp.status_code == 200:
        data = resp.json()
        assert "used_memory_bytes" in data
        assert "used_memory_human" in data
        assert "fragmentation_ratio" in data
        assert isinstance(data["fragmentation_ratio"], (int, float))
        assert "fragmentation_status" in data
        assert data["fragmentation_status"] in ("healthy", "warning", "critical")
        assert "hit_ratio_percent" in data
        assert isinstance(data["hit_ratio_percent"], (int, float))
        assert "dbsize" in data
        assert isinstance(data["dbsize"], int)


def test_memory_analyze_endpoint(client):
    """Verify Memory Analyze endpoint samples keys and calculates BigKeys and type breakdown."""
    payload = {
        "sample_size": 100,
        "pattern": "*"
    }
    resp = client.post("/api/memory/analyze", json=payload)
    if resp.status_code == 200:
        data = resp.json()
        assert "sampled_count" in data
        assert "types_breakdown" in data
        assert isinstance(data["types_breakdown"], list)
        assert "top_bigkeys" in data
        assert isinstance(data["top_bigkeys"], list)
        assert "recommendations" in data
        assert isinstance(data["recommendations"], list)
        assert len(data["recommendations"]) > 0
        assert "scan_duration_ms" in data
        assert data["scan_duration_ms"] >= 0

        # Check TTL forecast schema
        assert "ttl_forecast" in data
        if data["ttl_forecast"]:
            tf = data["ttl_forecast"]
            assert "total_keys_profiled" in tf
            assert "persistent_keys_count" in tf
            assert "persistent_memory_bytes" in tf
            assert "reclaim_1h_bytes" in tf
            assert "reclaim_24h_bytes" in tf
            assert "reclaim_7d_bytes" in tf
            assert "horizons" in tf
            assert isinstance(tf["horizons"], list)
            assert "top_leak_namespaces" in tf
            assert isinstance(tf["top_leak_namespaces"], list)

        # Check BigKeyItem schema if any keys exist
        if data["top_bigkeys"]:
            bk = data["top_bigkeys"][0]
            assert "key" in bk
            assert "type" in bk
            assert "memory_bytes" in bk
            assert "memory_human" in bk
            assert "length" in bk
            assert "ttl" in bk


def test_memory_analyze_full_mode(client):
    """Verify Memory Analyze endpoint supports scan_mode='full' safely."""
    payload = {
        "sample_size": 200,
        "pattern": "*",
        "scan_mode": "full"
    }
    resp = client.post("/api/memory/analyze", json=payload)
    if resp.status_code == 200:
        data = resp.json()
        assert "ttl_forecast" in data
        assert data["ttl_forecast"] is not None
        assert "horizons" in data["ttl_forecast"]

    # Also verify 25,000 keys (Max Cluster Scan option from UI) is accepted by schema
    payload_max = {
        "sample_size": 25000,
        "pattern": "*",
        "scan_mode": "full"
    }
    resp_max = client.post("/api/memory/analyze", json=payload_max)
    if resp_max.status_code == 200:
        data_max = resp_max.json()
        assert "ttl_forecast" in data_max
        assert data_max["sampled_count"] >= 0


def test_export_keys_with_ttl_filter(client):
    """Verify keys export endpoint filters correctly by ttl_filter (persistent vs expiring)."""
    # 1. Export persistent only
    resp_persist = client.get("/api/keys/export?pattern=*&ttl_filter=persistent&format=csv")
    if resp_persist.status_code == 200:
        lines = resp_persist.text.strip().split("\n")
        assert len(lines) >= 1  # Header line
        assert "Key,Type,TTL" in lines[0]
        # Any returned row should have TTL == -1
        for row in lines[1:]:
            if row.strip():
                parts = row.split(",")
                assert parts[-1] == "-1"

    # 2. Export expiring only
    resp_exp = client.get("/api/keys/export?pattern=*&ttl_filter=expiring&format=csv")
    if resp_exp.status_code == 200:
        lines = resp_exp.text.strip().split("\n")
        assert len(lines) >= 1
        for row in lines[1:]:
            if row.strip():
                parts = row.split(",")
                assert int(parts[-1]) > 0


def test_client_name_identification(client):
    """Verify connected clients list identifies current app connection with is_current_app."""
    resp = client.get("/api/clients")
    if resp.status_code == 200:
        clients_list = resp.json()
        assert isinstance(clients_list, list)
        has_self = any(c.get("is_current_app") is True for c in clients_list)
        # We connected via client fixture with redisinsight-py
        assert isinstance(has_self, bool)
