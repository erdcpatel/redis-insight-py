import asyncio
import pytest
from unittest.mock import MagicMock, AsyncMock, patch
from redis.asyncio.cluster import RedisCluster
from fastapi.testclient import TestClient
from app.main import app
from app.redis_manager import redis_manager

client = TestClient(app)


# ==========================================
# Feature 1 Tests: Key -> Slot & Node
# ==========================================

def test_key_detail_cluster_slot_and_node():
    async def _test():
        mock_cluster = MagicMock(spec=RedisCluster)
        mock_cluster.type = AsyncMock(return_value="string")
        mock_cluster.ttl = AsyncMock(return_value=3600)
        mock_cluster.object = AsyncMock(return_value="raw")
        mock_cluster.memory_usage = AsyncMock(return_value=128)
        mock_cluster.get = AsyncMock(return_value="hello-world")
        mock_cluster.strlen = AsyncMock(return_value=11)

        # Mock slot and node mapping
        mock_node = MagicMock()
        mock_node.name = "10.0.0.3:7002"
        mock_node.server_type = "primary"
        mock_cluster.nodes_manager = MagicMock()
        mock_cluster.nodes_manager.get_node_from_slot = MagicMock(return_value=mock_node)

        with patch.object(redis_manager, "get_client", AsyncMock(return_value=mock_cluster)):
            detail = await redis_manager.get_key_detail("user:1001")

        assert detail is not None
        assert detail["name"] == "user:1001"
        assert detail["type"] == "string"
        assert isinstance(detail["slot"], int)
        assert detail["slot"] >= 0 and detail["slot"] < 16384
        assert "10.0.0.3:7002 (Primary)" in detail["node"]

    asyncio.run(_test())


def test_key_detail_standalone_no_slot():
    async def _test():
        mock_standalone = MagicMock()
        mock_standalone.type = AsyncMock(return_value="hash")
        mock_standalone.ttl = AsyncMock(return_value=-1)
        mock_standalone.object = AsyncMock(return_value="ziplist")
        mock_standalone.memory_usage = AsyncMock(return_value=256)
        mock_standalone.hlen = AsyncMock(return_value=2)
        mock_standalone.hgetall = AsyncMock(return_value={"f1": "v1", "f2": "v2"})

        with patch.object(redis_manager, "get_client", AsyncMock(return_value=mock_standalone)):
            detail = await redis_manager.get_key_detail("myhash")

        assert detail is not None
        assert detail["slot"] is None
        assert detail["node"] is None

    asyncio.run(_test())


# ==========================================
# Feature 2 Tests: Export Matched Keys
# ==========================================

def test_export_keys_csv_endpoint():
    mock_standalone = MagicMock()
    mock_standalone.scan = AsyncMock(return_value=(0, ["k1", "k2", "k3"]))

    pipe_mock = MagicMock()
    pipe_mock.execute = AsyncMock(return_value=["string", 100, "hash", -1, "set", 500])
    mock_standalone.pipeline = MagicMock(return_value=pipe_mock)

    with patch.object(redis_manager, "get_client", AsyncMock(return_value=mock_standalone)):
        resp = client.get("/api/keys/export?pattern=k*&format=csv")
        assert resp.status_code == 200
        assert "text/csv" in resp.headers["content-type"]
        assert "attachment" in resp.headers["content-disposition"]
        lines = resp.text.strip().split("\n")
        assert lines[0] == "Key,Type,TTL"
        assert "k1,string,100" in lines
        assert "k2,hash,-1" in lines
        assert "k3,set,500" in lines


def test_export_keys_txt_endpoint():
    mock_standalone = MagicMock()
    mock_standalone.scan = AsyncMock(return_value=(0, ["user:1", "user:2"]))

    pipe_mock = MagicMock()
    pipe_mock.execute = AsyncMock(return_value=["string", -1, "string", 60])
    mock_standalone.pipeline = MagicMock(return_value=pipe_mock)

    with patch.object(redis_manager, "get_client", AsyncMock(return_value=mock_standalone)):
        resp = client.get("/api/keys/export?pattern=user:*&format=txt")
        assert resp.status_code == 200
        assert "text/plain" in resp.headers["content-type"]
        lines = resp.text.strip().split("\n")
        assert lines == ["user:1", "user:2"]


# ==========================================
# Feature 3 Tests: Bulk Delete (Dry-Run & UNLINK)
# ==========================================

def test_bulk_delete_dry_run_cluster():
    mock_cluster = MagicMock(spec=RedisCluster)
    node1 = MagicMock(name="node1")
    node1.name = "10.0.0.1:7000"
    node2 = MagicMock(name="node2")
    node2.name = "10.0.0.2:7001"
    mock_cluster.get_primaries.return_value = [node1, node2]

    # scan responses per node
    async def mock_scan(cursor=0, match=None, count=None, target_nodes=None, **_):
        if target_nodes == node1:
            return 0, ["temp:1", "temp:2", "temp:3"]
        else:
            return 0, ["temp:4", "temp:5"]

    mock_cluster.scan = AsyncMock(side_effect=mock_scan)

    with patch.object(redis_manager, "get_client", AsyncMock(return_value=mock_cluster)), \
         patch.object(redis_manager, "_conn_infos", {"test-id": {"name": "Test Cluster", "env": "DEV"}}), \
         patch.object(redis_manager, "_selected_conn_id", "test-id"):

        resp = client.post("/api/keys/bulk-delete/dry-run", json={"pattern": "temp:*"})
        assert resp.status_code == 200
        data = resp.json()
        assert data["matched_count"] == 5
        assert data["is_prod"] is False
        assert data["per_node_counts"]["10.0.0.1:7000"] == 3
        assert data["per_node_counts"]["10.0.0.2:7001"] == 2
        assert len(data["sample_keys"]) == 5


def test_bulk_delete_execute_count_mismatch_rejected():
    mock_standalone = MagicMock()
    with patch.object(redis_manager, "get_client", AsyncMock(return_value=mock_standalone)):
        resp = client.post("/api/keys/bulk-delete", json={
            "pattern": "temp:*",
            "expected_count": 50,
            "confirmed_count": 49  # Mismatch!
        })
        assert resp.status_code == 400
        assert "mismatch" in resp.json()["detail"].lower()


def test_bulk_delete_execute_prod_confirmation_required():
    mock_standalone = MagicMock()
    with patch.object(redis_manager, "get_client", AsyncMock(return_value=mock_standalone)), \
         patch.object(redis_manager, "_conn_infos", {"test-id": {"name": "Prod Cluster", "env": "PROD"}}), \
         patch.object(redis_manager, "_selected_conn_id", "test-id"):

        # Attempt delete on PROD without typing PROD
        resp = client.post("/api/keys/bulk-delete", json={
            "pattern": "temp:*",
            "expected_count": 10,
            "confirmed_count": 10,
            "confirmed_env": "DEV"  # Wrong env confirmation!
        })
        assert resp.status_code == 400
        assert "requires typing 'prod'" in resp.json()["detail"].lower()


def test_bulk_delete_execute_cluster_unlinks_per_node():
    mock_cluster = MagicMock(spec=RedisCluster)
    node1 = MagicMock(name="node1")
    node1.name = "10.0.0.1:7000"
    mock_cluster.get_primaries.return_value = [node1]

    async def mock_scan(cursor=0, match=None, count=None, target_nodes=None, **_):
        return 0, ["cache:a", "cache:b"]

    mock_cluster.scan = AsyncMock(side_effect=mock_scan)
    mock_cluster.execute_command = AsyncMock(return_value=2)

    with patch.object(redis_manager, "get_client", AsyncMock(return_value=mock_cluster)), \
         patch.object(redis_manager, "_conn_infos", {"test-id": {"name": "Test Cluster", "env": "PROD"}}), \
         patch.object(redis_manager, "_selected_conn_id", "test-id"):

        resp = client.post("/api/keys/bulk-delete", json={
            "pattern": "cache:*",
            "expected_count": 2,
            "confirmed_count": 2,
            "confirmed_env": "PROD"
        })
        assert resp.status_code == 200
        data = resp.json()
        assert data["success"] is True
        assert data["deleted_count"] == 2
        assert data["per_node_deleted"]["10.0.0.1:7000"] == 2

        # Verify execute_command UNLINK was called with target_nodes=node1
        mock_cluster.execute_command.assert_awaited_with(
            "UNLINK", "cache:a", "cache:b", target_nodes=node1
        )
