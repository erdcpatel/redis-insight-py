import asyncio
import pytest
from unittest.mock import MagicMock, AsyncMock, PropertyMock, patch
from redis.asyncio.cluster import RedisCluster
from app.redis_manager import RedisManager
from app.models import NodeStat


def test_get_status_cluster_nodes_count_from_cluster_info():
    async def _test():
        manager = RedisManager()
        mock_cluster = MagicMock(spec=RedisCluster)
        mock_cluster.ping = AsyncMock(return_value=True)
        mock_cluster.info = AsyncMock(side_effect=lambda section=None, **kwargs: {
            "cluster": {"cluster_enabled": 1},
            "server": {"redis_version": "7.2.4", "uptime_in_days": 5},
            "memory": {"used_memory": 1048576, "used_memory_human": "1.00M"},
            "clients": {"connected_clients": 12},
        }.get(section, {}))
        mock_cluster.execute_command = AsyncMock(return_value={
            "cluster_state": "ok",
            "cluster_known_nodes": "6",
            "cluster_size": "3",
        })

        node_stats = [
            NodeStat(node=f"node-{i}", role="master" if i < 3 else "replica", keys=10, used_memory=1024, error=None)
            for i in range(6)
        ]

        with patch.object(manager, "get_client", AsyncMock(return_value=mock_cluster)), \
             patch.object(manager, "_cluster_node_stats", AsyncMock(return_value=node_stats)), \
             patch.object(RedisManager, "active_info", new_callable=PropertyMock, return_value={
                 "id": "c-1", "name": "Cluster-6", "host": "127.0.0.1", "port": 7000,
                 "db": 0, "env": "LOCAL", "conn_type": "cluster"
             }):
            status = await manager.get_status()

        assert status.connected is True
        assert status.is_cluster is True
        assert status.cluster_nodes_count == 6
        assert status.cluster_state == "ok"
        assert len(status.node_stats) == 6

    asyncio.run(_test())


def test_test_connection_params_cluster_nodes_count():
    async def _test():
        manager = RedisManager()
        mock_cluster = MagicMock(spec=RedisCluster)
        mock_cluster.ping = AsyncMock(return_value=True)
        mock_cluster.info = AsyncMock(side_effect=lambda section=None, **kwargs: {
            "cluster": {"cluster_enabled": 1},
            "server": {"redis_version": "7.2.4", "os": "Darwin"},
        }.get(section, {}))
        mock_cluster.execute_command = AsyncMock(return_value="cluster_state:ok\r\ncluster_known_nodes:6\r\ncluster_size:3")
        mock_cluster.aclose = AsyncMock()

        with patch("app.redis_manager.RedisCluster", return_value=mock_cluster):
            res = await manager.test_connection_params("127.0.0.1", 7000, conn_type="cluster")

        assert res.success is True
        assert res.is_cluster is True
        assert res.cluster_nodes_count == 6

    asyncio.run(_test())
