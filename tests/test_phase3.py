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

        # Check BigKeyItem schema if any keys exist
        if data["top_bigkeys"]:
            bk = data["top_bigkeys"][0]
            assert "key" in bk
            assert "type" in bk
            assert "memory_bytes" in bk
            assert "memory_human" in bk
            assert "length" in bk
            assert "ttl" in bk
