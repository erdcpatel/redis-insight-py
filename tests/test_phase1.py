import pytest
import asyncio
from fastapi.testclient import TestClient
from app.main import app
from app.db import init_db, list_connections, get_connection
from app.crypto import encrypt_secret, decrypt_secret

client = TestClient(app)


def test_crypto():
    secret = "SuperSecretRedisPassword123!"
    encrypted = encrypt_secret(secret)
    assert encrypted != secret
    decrypted = decrypt_secret(encrypted)
    assert decrypted == secret


def test_db_init():
    init_db()
    connections = list_connections()
    assert isinstance(connections, list)


def test_api_list_connections():
    response = client.get("/api/connections")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)


def test_api_test_connection_endpoint():
    # Test valid connection to local redis
    response = client.post("/api/connections/test", json={
        "host": "localhost",
        "port": 6379,
        "db": 0
    })
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert data["latency_ms"] is not None
    assert data["redis_version"] is not None


def test_api_test_connection_invalid():
    # Test connection to nonexistent port
    response = client.post("/api/connections/test", json={
        "host": "localhost",
        "port": 59999,
        "db": 0
    })
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is False
    assert data["error"] is not None


def test_api_create_and_delete_connection():
    # Create test connection
    create_payload = {
        "name": "Test QA Redis",
        "host": "127.0.0.1",
        "port": 6379,
        "db": 1,
        "password": "samplepassword"
    }
    response = client.post("/api/connections", json=create_payload)
    assert response.status_code == 201
    created = response.json()
    conn_id = created["id"]
    assert created["name"] == "Test QA Redis"
    assert created["has_password"] is True

    # Verify password was encrypted in DB
    raw = get_connection(conn_id, include_password=True)
    assert raw["password"] == "samplepassword"

    # Delete test connection
    del_resp = client.delete(f"/api/connections/{conn_id}")
    assert del_resp.status_code == 200
    assert del_resp.json()["success"] is True


def test_api_status_and_keys():
    # Ensure Local Redis is active for status inspection
    local_conns = [c for c in list_connections() if c["name"] == "Local Redis"]
    if local_conns:
        client.post(f"/api/connections/{local_conns[0]['id']}/activate")

    # Test active status
    status_resp = client.get("/api/status")
    assert status_resp.status_code == 200
    status_data = status_resp.json()
    assert status_data["connected"] is True
    assert status_data["dbsize"] >= 0

    # Test keys scan
    keys_resp = client.get("/api/keys?pattern=*&count=10")
    assert keys_resp.status_code == 200
    keys_data = keys_resp.json()
    assert "keys" in keys_data
    assert "total_in_db" in keys_data


def test_ui_index_page():
    response = client.get("/")
    assert response.status_code == 200
    assert "Redis Insight" in response.text

    # Classic endpoint redirects to single standard view
    classic_resp = client.get("/classic", follow_redirects=False)
    assert classic_resp.status_code == 301
    assert classic_resp.headers["location"] == "/"



def test_pattern_and_type_filtering():
    # Test pattern filtering
    resp_bikes = client.get("/api/keys?pattern=bikes:*&count=20")
    assert resp_bikes.status_code == 200
    data_bikes = resp_bikes.json()
    for item in data_bikes["keys"]:
        assert item["name"].startswith("bikes:")

    # Test type filtering
    resp_hashes = client.get("/api/keys?pattern=*&type=hash&count=20")
    assert resp_hashes.status_code == 200
    data_hashes = resp_hashes.json()
    for item in data_hashes["keys"]:
        assert item["type"].lower() == "hash"


def test_spa_frontend_serving():
    """Verify single standard SPA frontend is served at /."""
    resp = client.get("/")
    assert resp.status_code == 200
    assert "Redis Insight" in resp.text




def test_keys_cursor_param_accepts_string_and_paginates():
    """Standalone SCAN cursor round-trips as a string query param and returns an int."""
    local_conns = [c for c in list_connections() if c["name"] == "Local Redis"]
    if local_conns:
        client.post(f"/api/connections/{local_conns[0]['id']}/activate")

    cursor = "0"
    pages = 0
    while True:
        resp = client.get("/api/keys", params={"pattern": "*", "cursor": cursor, "count": 10})
        assert resp.status_code == 200
        data = resp.json()
        assert isinstance(data["cursor"], int)
        pages += 1
        if data["cursor"] == 0 or pages > 10000:
            break
        cursor = str(data["cursor"])
    assert data["cursor"] == 0


def test_keys_invalid_cursor_returns_400():
    resp = client.get("/api/keys", params={"cursor": "[object Object]"})
    assert resp.status_code == 400


class _FakeClusterNode:
    def __init__(self, name):
        self.name = name


def _make_fake_cluster(node_keys, page_size=2):
    """Build a RedisCluster stand-in whose per-node SCAN pages through node_keys."""
    from unittest.mock import MagicMock, AsyncMock
    from redis.asyncio.cluster import RedisCluster

    nodes = {name: _FakeClusterNode(name) for name in node_keys}
    fake = MagicMock(spec=RedisCluster)
    fake.dbsize = AsyncMock(return_value=sum(len(v) for v in node_keys.values()))
    fake.get_primaries.return_value = list(nodes.values())
    fake.get_node.side_effect = lambda node_name=None, **_: nodes.get(node_name)
    scan_calls = []

    async def scan(cursor=0, match=None, count=None, target_nodes=None, **_):
        assert target_nodes is not None, "cluster SCAN must target an individual node"
        scan_calls.append((target_nodes.name, cursor))
        keys = node_keys[target_nodes.name]
        batch = keys[cursor:cursor + page_size]
        nxt = cursor + page_size
        return {target_nodes.name: nxt if nxt < len(keys) else 0}, batch

    fake.scan = AsyncMock(side_effect=scan)

    class _Pipe:
        def __init__(self):
            self.ops = []

        def type(self, k):
            self.ops.append("string")

        def ttl(self, k):
            self.ops.append(-1)

        async def execute(self):
            return self.ops

    fake.pipeline.side_effect = lambda transaction=False: _Pipe()
    return fake, scan_calls


def test_cluster_scan_resumes_per_node_cursors():
    import json
    from unittest.mock import patch, AsyncMock
    from app.redis_manager import redis_manager

    node_keys = {
        "10.0.0.1:7000": ["a1", "a2", "a3", "a4", "a5"],
        "10.0.0.2:7001": ["b1"],
        "10.0.0.3:7002": ["c1", "c2", "c3"],
    }
    fake, scan_calls = _make_fake_cluster(node_keys)

    with patch.object(redis_manager, "get_client", AsyncMock(return_value=fake)):
        seen = []
        cursor = "0"
        pages = 0
        while True:
            resp = client.get("/api/keys", params={"cursor": cursor, "count": 2})
            assert resp.status_code == 200
            data = resp.json()
            seen.extend(k["name"] for k in data["keys"])
            pages += 1
            if data["cursor"] in (0, "0"):
                break
            assert isinstance(data["cursor"], str)
            parsed = json.loads(data["cursor"])
            assert set(parsed) == set(node_keys)
            cursor = data["cursor"]
            assert pages < 10

    assert sorted(seen) == sorted(k for keys in node_keys.values() for k in keys)
    assert len(seen) == len(set(seen))
    assert pages == 3
    # Finished nodes are not rescanned from 0 on later pages
    assert scan_calls.count(("10.0.0.2:7001", 0)) == 1


def test_cluster_scan_rejects_plain_nonzero_cursor():
    from unittest.mock import patch, AsyncMock
    from app.redis_manager import redis_manager

    fake, _ = _make_fake_cluster({"10.0.0.1:7000": ["a1"]})
    with patch.object(redis_manager, "get_client", AsyncMock(return_value=fake)):
        resp = client.get("/api/keys", params={"cursor": "17"})
    assert resp.status_code == 400


def test_cluster_total_in_db_sums_primaries():
    from unittest.mock import patch, AsyncMock
    from redis.asyncio.cluster import RedisCluster
    from app.redis_manager import redis_manager

    fake, _ = _make_fake_cluster({"10.0.0.1:7000": ["a1"], "10.0.0.2:7001": ["b1"]})
    with patch.object(redis_manager, "get_client", AsyncMock(return_value=fake)):
        resp = client.get("/api/keys", params={"cursor": "0"})
    assert resp.status_code == 200
    assert resp.json()["total_in_db"] == 2
    fake.dbsize.assert_awaited_with(target_nodes=RedisCluster.PRIMARIES)


def test_cluster_memory_analysis_samples_past_first_batch():
    import asyncio
    from unittest.mock import patch, AsyncMock
    from app.redis_manager import redis_manager

    node_keys = {f"10.0.0.{i}:700{i}": [f"n{i}:k{j}" for j in range(30)] for i in range(3)}
    fake, scan_calls = _make_fake_cluster(node_keys, page_size=5)
    with patch.object(redis_manager, "get_client", AsyncMock(return_value=fake)):
        result = asyncio.run(redis_manager.analyze_memory(sample_size=60))
    assert result.sampled_count == 60
    assert {name for name, _ in scan_calls} == set(node_keys)


def test_cluster_node_stats_maps_replicas_to_masters():
    import asyncio
    from types import SimpleNamespace
    from unittest.mock import MagicMock, AsyncMock
    from redis.asyncio.cluster import RedisCluster
    from app.redis_manager import redis_manager

    m1 = SimpleNamespace(name="10.0.0.1:7000", server_type="primary")
    r1 = SimpleNamespace(name="10.0.0.4:7003", server_type="replica")
    m2 = SimpleNamespace(name="10.0.0.2:7001", server_type="primary")
    keys = {m1.name: 10, r1.name: 9, m2.name: 5}

    fake = MagicMock(spec=RedisCluster)
    fake.get_nodes.return_value = [r1, m2, m1]
    fake.nodes_manager = SimpleNamespace(slots_cache={0: [m1, r1], 9000: [m2]})
    fake.dbsize = AsyncMock(side_effect=lambda target_nodes=None: keys[target_nodes.name])

    async def info(section, target_nodes=None):
        if section == "memory":
            return {"used_memory": 1024, "used_memory_human": "1.00K"}
        return {"connected_clients": 2}

    fake.info = AsyncMock(side_effect=info)
    stats = asyncio.run(redis_manager._cluster_node_stats(fake))

    assert [(s.node, s.role, s.master, s.keys) for s in stats] == [
        ("10.0.0.1:7000", "master", None, 10),
        ("10.0.0.4:7003", "replica", "10.0.0.1:7000", 9),
        ("10.0.0.2:7001", "master", None, 5),
    ]
    assert all(s.connected_clients == 2 and s.used_memory == 1024 for s in stats)


def test_hash_fields_endpoint_paginates_real_redis():
    """HSCAN pagination through /hash/fields visits every field of a large hash exactly once."""
    local_conns = [c for c in list_connections() if c["name"] == "Local Redis"]
    if local_conns:
        client.post(f"/api/connections/{local_conns[0]['id']}/activate")

    import redis as sync_redis
    r = sync_redis.Redis(host="localhost", port=6379, decode_responses=True)
    key = "test:pagination:hash"
    r.delete(key)
    r.hset(key, mapping={f"field:{i}": str(i) for i in range(1200)})
    try:
        detail = client.get("/api/keys/detail", params={"key": key}).json()
        assert detail["length"] == 1200
        assert detail["has_more_fields"] is True
        assert detail["fields_cursor"] != 0

        seen = set()
        cursor, pages = 0, 0
        while True:
            resp = client.get(f"/api/keys/{key}/hash/fields", params={"cursor": cursor, "count": 300})
            assert resp.status_code == 200
            page = resp.json()
            assert page["total"] == 1200
            seen.update(f["field"] for f in page["fields"])
            cursor, pages = page["cursor"], pages + 1
            if cursor == 0 or pages > 100:
                break
        assert cursor == 0
        assert len(seen) == 1200

        matched = client.get(f"/api/keys/{key}/hash/fields", params={"match": "field:11??", "count": 500}).json()
        names = {f["field"] for f in matched["fields"]}
        assert names and all(n.startswith("field:11") and len(n) == 10 for n in names)

        dl = client.get(f"/api/keys/{key}/download")
        assert dl.status_code == 200
        assert dl.headers["x-export-format"] == "csv"
        assert len(dl.text.strip().splitlines()) == 1201
    finally:
        r.delete(key)
