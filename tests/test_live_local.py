"""
Live integration tests against local Redis instances:
- Standalone Redis (127.0.0.1:6379)
- 6-Node Redis Cluster (127.0.0.1:7000..7005)

These tests run automatically if the instances are running, or skip gracefully if offline.
"""
import asyncio
import pytest
import redis
from fastapi.testclient import TestClient
from app.main import app
from app.redis_manager import redis_manager

client = TestClient(app)


@pytest.fixture(autouse=True)
def clean_redis_manager_state():
    yield
    try:
        asyncio.run(redis_manager.close())
    except Exception:
        pass


def is_port_open(port: int) -> bool:
    try:
        r = redis.Redis(host="127.0.0.1", port=port, socket_timeout=1.0)
        return r.ping()
    except Exception:
        return False


def is_cluster_running() -> bool:
    try:
        r = redis.Redis(host="127.0.0.1", port=7000, socket_timeout=1.0)
        info = r.execute_command("CLUSTER INFO")
        if isinstance(info, dict):
            return info.get("cluster_state") == "ok"
        if isinstance(info, bytes):
            info = info.decode("utf-8")
        return "cluster_state:ok" in str(info).replace(" ", "")
    except Exception:
        return False


@pytest.mark.skipif(not is_port_open(6379), reason="Standalone Redis (127.0.0.1:6379) is not running")
def test_live_standalone_api_flow():
    # 1. Test connection endpoint
    test_res = client.post("/api/connections/test", json={
        "host": "127.0.0.1",
        "port": 6379,
        "conn_type": "standalone",
    })
    assert test_res.status_code == 200
    data = test_res.json()
    assert data["success"] is True
    assert data["is_cluster"] is False
    assert data["cluster_nodes_count"] is None

    # 2. Add or find standalone connection
    conns_res = client.get("/api/connections")
    assert conns_res.status_code == 200
    existing = [
        c for c in conns_res.json()
        if c["host"] in ("127.0.0.1", "localhost") and c["port"] == 6379 and c["conn_type"] == "standalone"
    ]
    if existing:
        conn_id = existing[0]["id"]
    else:
        create_res = client.post("/api/connections", json={
            "name": "Live Local Standalone Test",
            "host": "127.0.0.1",
            "port": 6379,
            "conn_type": "standalone",
            "env": "LOCAL",
        })
        assert create_res.status_code == 200
        conn_id = create_res.json()["id"]

    # 3. Activate connection
    act_res = client.post(f"/api/connections/{conn_id}/activate")
    assert act_res.status_code == 200

    # 4. Check status endpoint
    status_res = client.get("/api/status")
    assert status_res.status_code == 200
    status = status_res.json()
    assert status["connected"] is True
    assert status["is_cluster"] is False
    assert status["cluster_nodes_count"] is None
    assert status["port"] == 6379

    # 5. Scan keys
    keys_res = client.get("/api/keys?pattern=*&limit=50")
    assert keys_res.status_code == 200
    keys_data = keys_res.json()
    assert "keys" in keys_data

    # 6. Overview & diagnostics
    mem_res = client.get("/api/memory/overview")
    assert mem_res.status_code == 200

    clients_res = client.get("/api/clients")
    assert clients_res.status_code == 200

    slowlog_res = client.get("/api/slowlog")
    assert slowlog_res.status_code == 200


@pytest.mark.skipif(not is_cluster_running(), reason="6-node Redis cluster (127.0.0.1:7000) is not running")
def test_live_cluster_api_node_count_and_topology():
    # 1. Connection test endpoint must report cluster_nodes_count == 6
    test_res = client.post("/api/connections/test", json={
        "host": "127.0.0.1",
        "port": 7000,
        "conn_type": "cluster",
    })
    assert test_res.status_code == 200
    data = test_res.json()
    assert data["success"] is True
    assert data["is_cluster"] is True
    assert data["cluster_nodes_count"] == 6, f"Expected 6 cluster nodes, got {data.get('cluster_nodes_count')}"

    # 2. Add or find cluster connection
    conns_res = client.get("/api/connections")
    assert conns_res.status_code == 200
    existing = [
        c for c in conns_res.json()
        if c["host"] in ("127.0.0.1", "localhost") and c["port"] == 7000 and c["conn_type"] == "cluster"
    ]
    if existing:
        conn_id = existing[0]["id"]
    else:
        create_res = client.post("/api/connections", json={
            "name": "Live Local 6-Node Cluster Test",
            "host": "127.0.0.1",
            "port": 7000,
            "conn_type": "cluster",
            "cluster_nodes": "127.0.0.1:7000,127.0.0.1:7001,127.0.0.1:7002,127.0.0.1:7003,127.0.0.1:7004,127.0.0.1:7005",
            "env": "LOCAL",
        })
        assert create_res.status_code == 200
        conn_id = create_res.json()["id"]

    # 3. Activate cluster connection
    act_res = client.post(f"/api/connections/{conn_id}/activate")
    assert act_res.status_code == 200

    # 4. Check status endpoint - must report cluster_nodes_count == 6 (fixing the 1-node top bar bug)
    status_res = client.get("/api/status")
    assert status_res.status_code == 200
    status = status_res.json()
    assert status["connected"] is True
    assert status["is_cluster"] is True
    assert status["cluster_nodes_count"] == 6, f"Expected cluster_nodes_count=6 in status, got {status.get('cluster_nodes_count')}"
    assert len(status["node_stats"]) == 6, f"Expected 6 node_stats, got {len(status.get('node_stats', []))}"

    # 5. Check topology endpoint
    topo_res = client.get("/api/topology")
    assert topo_res.status_code == 200
    topo = topo_res.json()
    assert topo["cluster_state"] == "ok"
    assert topo["total_nodes"] == 6
    assert len(topo["nodes"]) == 6

    # 6. Keys scan and key detail with slot & node mapping
    keys_res = client.get("/api/keys?pattern=*&limit=50")
    assert keys_res.status_code == 200
    keys_list = keys_res.json().get("keys", [])

    if keys_list:
        sample_key = keys_list[0]["name"]
        detail_res = client.get(f"/api/keys/detail?key={sample_key}")
        assert detail_res.status_code == 200
        detail = detail_res.json()
        assert "slot" in detail
        assert isinstance(detail["slot"], int)
        assert 0 <= detail["slot"] < 16384
        assert detail.get("node") is not None

    # 7. Slowlog & client list on cluster
    assert client.get("/api/slowlog").status_code == 200
    assert client.get("/api/clients").status_code == 200
    assert client.get("/api/memory/overview").status_code == 200
