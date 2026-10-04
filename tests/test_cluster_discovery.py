import pytest
from fastapi.testclient import TestClient
from app.main import app


@pytest.fixture(scope="module")
def client():
    with TestClient(app) as c:
        yield c


def test_discover_cluster_endpoint_standalone(client):
    """
    Testing discover-cluster against localhost:6379 (standalone).
    Should gracefully report cluster_enabled: 0 without crashing.
    """
    resp = client.post("/api/connections/discover-cluster", json={
        "host": "localhost",
        "port": 6379,
    })
    assert resp.status_code == 200
    data = resp.json()
    # If redis 6379 is running standalone, it returns success: false with informative error.
    # If redis is down, it returns success: false with connection error.
    assert "success" in data
    assert "error" in data or data["success"] is True


def test_test_connection_endpoint_cluster_params(client):
    """
    Verify /api/connections/test handles conn_type='cluster' and cluster_nodes without error.
    """
    resp = client.post("/api/connections/test", json={
        "host": "localhost",
        "port": 7000,
        "conn_type": "cluster",
        "cluster_nodes": '[{"host": "localhost", "port": 7000}]'
    })
    assert resp.status_code == 200
    data = resp.json()
    assert "success" in data
    assert "is_cluster" in data


def test_discover_cluster_nodes_handles_dict_response(monkeypatch):
    """
    Verify discover_cluster_nodes parses dict output from redis-py without AttributeError: 'dict' object has no attribute 'strip'.
    """
    import asyncio
    from unittest.mock import AsyncMock, MagicMock
    from app.redis_manager import redis_manager

    async def _runner():
        # Mock Redis client
        mock_redis = MagicMock()
        mock_redis.ping = AsyncMock(return_value=True)
        mock_redis.info = AsyncMock(return_value={"cluster_enabled": 1})
        mock_redis.aclose = AsyncMock()

        # redis-py returns dict for CLUSTER NODES in many configurations
        mock_dict_nodes = {
            "node_1": {
                "id": "node_1",
                "name": "127.0.0.1:7000@17000",
                "flags": ["myself", "master"],
                "master": "-",
                "link_state": "connected",
                "slots": [["0", "5460"]],
            },
            "node_2": {
                "id": "node_2",
                "name": "127.0.0.1:7001@17001",
                "flags": ["master"],
                "master": "-",
                "link_state": "connected",
                "slots": [["5461", "10922"]],
            },
            "node_3": {
                "id": "node_3",
                "name": "127.0.0.1:7002@17002",
                "flags": ["replica"],
                "master": "node_1",
                "link_state": "connected",
                "slots": [],
            }
        }

        async def mock_execute_command(cmd, *args, **kwargs):
            if cmd == "CLUSTER NODES":
                return mock_dict_nodes
            elif cmd == "CLUSTER INFO":
                return {"cluster_state": "ok", "cluster_slots_assigned": 16384}
            return None

        mock_redis.execute_command = AsyncMock(side_effect=mock_execute_command)

        # Patch aioredis.Redis
        import redis.asyncio as aioredis
        monkeypatch.setattr(aioredis, "Redis", MagicMock(return_value=mock_redis))

        res = await redis_manager.discover_cluster_nodes(host="127.0.0.1", port=7000)
        assert res.success is True
        assert res.total_nodes == 3
        assert res.masters_count == 2
        assert res.replicas_count == 1
        assert res.cluster_state == "ok"
        assert len(res.nodes) == 3
        myself_node = next(n for n in res.nodes if n.is_myself)
        assert myself_node.port == 7000
        assert myself_node.role == "master"

    asyncio.run(_runner())
