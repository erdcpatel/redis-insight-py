import os
from unittest.mock import AsyncMock, patch
import pytest
from fastapi.testclient import TestClient

from app.main import app
from app.db import init_db, create_connection, get_connection, update_connection
from app.redis_manager import redis_manager

client = TestClient(app)


@pytest.fixture(autouse=True)
def setup_test_db():
    init_db()
    # Reset global env var
    old_env = os.environ.get("APP_READONLY")
    if "APP_READONLY" in os.environ:
        del os.environ["APP_READONLY"]

    old_selected = redis_manager._selected_conn_id
    old_conn_infos = dict(redis_manager._conn_infos)
    old_clients = dict(redis_manager._clients)

    yield

    if old_env is not None:
        os.environ["APP_READONLY"] = old_env
    elif "APP_READONLY" in os.environ:
        del os.environ["APP_READONLY"]

    redis_manager._selected_conn_id = old_selected
    redis_manager._conn_infos = old_conn_infos
    redis_manager._clients = old_clients


def test_prod_auto_lock_default():
    """Connections with env='PROD' should automatically default to read_only=True."""
    conn = create_connection({
        "name": "Prod Auto Locked Cluster",
        "env": "PROD",
        "host": "localhost",
        "port": 6379,
    })
    assert conn["read_only"] is True

    # Non-prod defaults to read_only=False
    conn_dev = create_connection({
        "name": "Dev Cluster",
        "env": "DEV",
        "host": "localhost",
        "port": 6379,
    })
    assert conn_dev["read_only"] is False


def test_prod_explicit_override():
    """PROD connections can explicitly override read_only to False."""
    conn = create_connection({
        "name": "Prod Explicit Writable",
        "env": "PROD",
        "host": "localhost",
        "port": 6379,
        "read_only": False,
    })
    assert conn["read_only"] is False


def test_update_connection_read_only():
    """Updating read_only flag on an existing connection persists to DB."""
    conn = create_connection({
        "name": "Staging Redis",
        "env": "UAT",
        "host": "localhost",
        "port": 6379,
        "read_only": False,
    })
    assert conn["read_only"] is False

    updated = update_connection(conn["id"], {"read_only": True})
    assert updated["read_only"] is True

    fetched = get_connection(conn["id"])
    assert fetched["read_only"] is True


def test_global_app_readonly_blocks_mutations():
    """When APP_READONLY=true is set in environment, mutating endpoints return 403 Forbidden."""
    os.environ["APP_READONLY"] = "true"

    mock_client = AsyncMock()
    mock_client.ping = AsyncMock(return_value=True)

    redis_manager._selected_conn_id = "test-1"
    redis_manager._conn_infos["test-1"] = {"id": "test-1", "name": "Local", "env": "LOCAL", "read_only": False}
    redis_manager._clients["test-1"] = mock_client

    with patch.object(redis_manager, "get_client", return_value=mock_client):
        # Delete single key
        res = client.delete("/api/keys/mykey?confirmed=true")
        assert res.status_code == 403
        assert "read-only mode (APP_READONLY=true)" in res.json()["detail"]

        # Bulk delete execute
        res = client.post("/api/keys/bulk-delete", json={
            "pattern": "test*",
            "expected_count": 5,
            "confirmed_count": 5,
        })
        assert res.status_code == 403
        assert "read-only mode (APP_READONLY=true)" in res.json()["detail"]

        # Update TTL
        res = client.put("/api/keys/mykey/ttl", json={"seconds": 3600})
        assert res.status_code == 403
        assert "read-only mode (APP_READONLY=true)" in res.json()["detail"]

        # Hash field set
        res = client.put("/api/keys/myhash/field", json={"field": "f1", "value": "v1"})
        assert res.status_code == 403
        assert "read-only mode (APP_READONLY=true)" in res.json()["detail"]

        # Hash field delete
        res = client.delete("/api/keys/myhash/field/f1")
        assert res.status_code == 403
        assert "read-only mode (APP_READONLY=true)" in res.json()["detail"]

        # Kill client
        res = client.delete("/api/clients/123")
        assert res.status_code == 403
        assert "read-only mode (APP_READONLY=true)" in res.json()["detail"]

        # Reset slowlog
        res = client.post("/api/slowlog/reset")
        assert res.status_code == 403
        assert "read-only mode (APP_READONLY=true)" in res.json()["detail"]


def test_connection_readonly_blocks_mutations():
    """When the active connection has read_only=True, mutating endpoints return 403 Forbidden."""
    mock_client = AsyncMock()
    mock_client.ping = AsyncMock(return_value=True)

    redis_manager._selected_conn_id = "prod-1"
    redis_manager._conn_infos["prod-1"] = {"id": "prod-1", "name": "Production Cluster", "env": "PROD", "read_only": True}
    redis_manager._clients["prod-1"] = mock_client

    with patch.object(redis_manager, "get_client", return_value=mock_client):
        # Delete single key
        res = client.delete("/api/keys/prodkey?confirmed=true")
        assert res.status_code == 403
        assert "Read-only mode is active for connection 'Production Cluster' (PROD)" in res.json()["detail"]

        # Bulk delete execute
        res = client.post("/api/keys/bulk-delete", json={
            "pattern": "*",
            "expected_count": 10,
            "confirmed_count": 10,
            "confirmed_env": "PROD"
        })
        assert res.status_code == 403
        assert "Read-only mode is active for connection 'Production Cluster' (PROD)" in res.json()["detail"]

        # Update TTL
        res = client.put("/api/keys/prodkey/ttl", json={"seconds": 60})
        assert res.status_code == 403

        # Hash field operations
        res = client.put("/api/keys/prodkey/field", json={"field": "user", "value": "alice"})
        assert res.status_code == 403

        res = client.delete("/api/keys/prodkey/field/user")
        assert res.status_code == 403

        # Client kill & slowlog reset
        res = client.delete("/api/clients/99")
        assert res.status_code == 403

        res = client.post("/api/slowlog/reset")
        assert res.status_code == 403


def test_status_endpoint_reports_readonly():
    """GET /api/status accurately reflects read_only state."""
    # Case 1: Writable connection
    redis_manager._selected_conn_id = "c1"
    redis_manager._conn_infos["c1"] = {"id": "c1", "name": "Dev", "host": "127.0.0.1", "port": 6379, "db": 0, "env": "DEV", "read_only": False}
    with patch.object(redis_manager, "get_client") as mock_get_client:
        mock_c = AsyncMock()
        mock_c.ping = AsyncMock(return_value=True)
        mock_c.dbsize = AsyncMock(return_value=42)
        mock_c.info = AsyncMock(return_value={"redis_version": "7.2.4", "used_memory_human": "2.1M", "uptime_in_days": 10})
        mock_get_client.return_value = mock_c

        res = client.get("/api/status")
        assert res.status_code == 200
        data = res.json()
        assert data["read_only"] is False

    # Case 2: Read-only PROD connection
    redis_manager._selected_conn_id = "c2"
    redis_manager._conn_infos["c2"] = {"id": "c2", "name": "Prod", "host": "127.0.0.1", "port": 6379, "db": 0, "env": "PROD", "read_only": True}
    with patch.object(redis_manager, "get_client") as mock_get_client:
        mock_c = AsyncMock()
        mock_c.ping = AsyncMock(return_value=True)
        mock_c.dbsize = AsyncMock(return_value=100)
        mock_c.info = AsyncMock(return_value={"redis_version": "7.2.4", "used_memory_human": "10M", "uptime_in_days": 30})
        mock_get_client.return_value = mock_c

        res = client.get("/api/status")
        assert res.status_code == 200
        data = res.json()
        assert data["read_only"] is True

    # Case 3: Global APP_READONLY flag
    os.environ["APP_READONLY"] = "true"
    redis_manager._selected_conn_id = "c1"
    redis_manager._conn_infos["c1"] = {"id": "c1", "name": "Dev", "host": "127.0.0.1", "port": 6379, "db": 0, "env": "DEV", "read_only": False}
    with patch.object(redis_manager, "get_client") as mock_get_client:
        mock_c = AsyncMock()
        mock_c.ping = AsyncMock(return_value=True)
        mock_c.dbsize = AsyncMock(return_value=42)
        mock_c.info = AsyncMock(return_value={"redis_version": "7.2.4", "used_memory_human": "2.1M", "uptime_in_days": 10})
        mock_get_client.return_value = mock_c

        res = client.get("/api/status")
        assert res.status_code == 200
        data = res.json()
        assert data["read_only"] is True
