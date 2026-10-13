import pytest
from unittest.mock import AsyncMock, patch
from fastapi.testclient import TestClient
from app.main import app
from app.redis_manager import redis_manager

client = TestClient(app)


@pytest.fixture(autouse=True)
def preserve_redis_manager_state():
    """Save and restore redis_manager state around tests to avoid leaking mock connections."""
    orig_clients = dict(redis_manager._clients)
    orig_infos = dict(redis_manager._conn_infos)
    orig_selected = redis_manager._selected_conn_id
    try:
        yield
    finally:
        redis_manager._clients = orig_clients
        redis_manager._conn_infos = orig_infos
        redis_manager._selected_conn_id = orig_selected


def test_request_scoped_connection_isolation():
    """Verify X-Connection-ID header routes requests to the specified connection without mutating global selected_id."""
    mock_client_a = AsyncMock()
    mock_client_a.ping = AsyncMock(return_value=True)
    mock_client_a.dbsize = AsyncMock(return_value=42)
    mock_client_a.info = AsyncMock(side_effect=lambda section=None: {
        "redis_version": "7.2.0",
        "used_memory_human": "1.2M",
        "connected_clients": 5,
        "uptime_in_days": 1,
    })

    mock_client_b = AsyncMock()
    mock_client_b.ping = AsyncMock(return_value=True)
    mock_client_b.dbsize = AsyncMock(return_value=999)
    mock_client_b.info = AsyncMock(side_effect=lambda section=None: {
        "redis_version": "7.0.0",
        "used_memory_human": "50M",
        "connected_clients": 12,
        "uptime_in_days": 3,
    })

    redis_manager._conn_infos = {
        "conn-user-a": {
            "id": "conn-user-a",
            "name": "Cluster A",
            "host": "127.0.0.1",
            "port": 6379,
            "db": 0,
            "conn_type": "standalone",
            "read_only": False,
            "env": "DEV",
        },
        "conn-user-b": {
            "id": "conn-user-b",
            "name": "Cluster B",
            "host": "127.0.0.1",
            "port": 6380,
            "db": 1,
            "conn_type": "standalone",
            "read_only": False,
            "env": "STAGE",
        },
    }
    redis_manager._selected_conn_id = "conn-user-a"

    async def fake_get_client(conn_id=None):
        target = conn_id or redis_manager.selected_id
        if target == "conn-user-b":
            return mock_client_b
        return mock_client_a

    with patch.object(redis_manager, "get_client", side_effect=fake_get_client):
        # User 1 requests status without header (gets default conn-user-a)
        res_default = client.get("/api/status")
        assert res_default.status_code == 200
        assert res_default.json()["connection_name"] == "Cluster A"
        assert res_default.json()["dbsize"] == 42

        # User 2 requests status with X-Connection-ID: conn-user-b
        res_b = client.get("/api/status", headers={"X-Connection-ID": "conn-user-b"})
        assert res_b.status_code == 200
        assert res_b.json()["connection_name"] == "Cluster B"
        assert res_b.json()["dbsize"] == 999

        # Global selected_id was NOT changed by User 2's request
        assert redis_manager.selected_id == "conn-user-a"

        # User 1 still gets conn-user-a
        res_a = client.get("/api/status", headers={"X-Connection-ID": "conn-user-a"})
        assert res_a.status_code == 200
        assert res_a.json()["connection_name"] == "Cluster A"
        assert res_a.json()["dbsize"] == 42


def test_readonly_permission_scoped_to_target_connection():
    """Verify that read-only enforcement checks the specific connection targeted by X-Connection-ID."""
    mock_client_dev = AsyncMock()
    mock_client_prod = AsyncMock()

    redis_manager._conn_infos = {
        "conn-dev": {
            "id": "conn-dev",
            "name": "Dev Instance",
            "host": "127.0.0.1",
            "port": 6379,
            "db": 0,
            "conn_type": "standalone",
            "read_only": False,
            "env": "DEV",
        },
        "conn-prod-ro": {
            "id": "conn-prod-ro",
            "name": "Prod Instance",
            "host": "10.0.0.1",
            "port": 6379,
            "db": 0,
            "conn_type": "standalone",
            "read_only": True,
            "env": "PROD",
        },
    }
    redis_manager._selected_conn_id = "conn-dev"

    # Mutating action targeting conn-prod-ro via header should be blocked with 403
    res_prod_blocked = client.delete(
        "/api/keys/somekey?confirmed=true",
        headers={"X-Connection-ID": "conn-prod-ro"}
    )
    assert res_prod_blocked.status_code == 403
    assert "read-only" in res_prod_blocked.json()["detail"].lower()
