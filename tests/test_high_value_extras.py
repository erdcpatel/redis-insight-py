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


# ==========================================
# Hash field pagination, key download, export format validation
# ==========================================

def _mock_large_hash_client(hlen=1_000_000, cursor=4242):
    mock = MagicMock()
    mock.type = AsyncMock(return_value="hash")
    mock.ttl = AsyncMock(return_value=-1)
    mock.object = AsyncMock(return_value="hashtable")
    mock.memory_usage = AsyncMock(return_value=10_000_000)
    mock.hlen = AsyncMock(return_value=hlen)
    mock.hscan = AsyncMock(return_value=(cursor, {f"f{i}": f"v{i}" for i in range(100)}))
    mock.hgetall = AsyncMock(side_effect=AssertionError("HGETALL must not be called on a large hash"))
    return mock


def test_key_detail_large_hash_never_calls_hgetall():
    async def _test():
        mock = _mock_large_hash_client()
        with patch.object(redis_manager, "get_client", AsyncMock(return_value=mock)):
            detail = await redis_manager.get_key_detail("bighash")

        mock.hgetall.assert_not_called()
        mock.hscan.assert_awaited_once()
        assert detail["length"] == 1_000_000
        assert len(detail["fields"]) == 100
        assert detail["has_more_fields"] is True
        assert detail["fields_cursor"] == 4242

    asyncio.run(_test())


def test_key_detail_hash_unknown_length_falls_back_to_hscan():
    async def _test():
        mock = _mock_large_hash_client()
        mock.hlen = AsyncMock(side_effect=Exception("HLEN not permitted"))
        with patch.object(redis_manager, "get_client", AsyncMock(return_value=mock)):
            detail = await redis_manager.get_key_detail("bighash")

        mock.hgetall.assert_not_called()
        assert detail["has_more_fields"] is True
        assert len(detail["fields"]) == 100

    asyncio.run(_test())


def test_key_detail_small_hash_has_no_more_fields():
    async def _test():
        mock = MagicMock()
        mock.type = AsyncMock(return_value="hash")
        mock.ttl = AsyncMock(return_value=-1)
        mock.object = AsyncMock(return_value="listpack")
        mock.memory_usage = AsyncMock(return_value=64)
        mock.hlen = AsyncMock(return_value=2)
        mock.hgetall = AsyncMock(return_value={"a": "1", "b": "2"})
        with patch.object(redis_manager, "get_client", AsyncMock(return_value=mock)):
            detail = await redis_manager.get_key_detail("smallhash")

        assert detail["has_more_fields"] is False
        assert detail["fields_cursor"] == 0
        assert len(detail["fields"]) == 2

    asyncio.run(_test())


def test_hash_fields_endpoint_paginates_via_cursor():
    pages = {
        0: (17, {"f1": "v1", "f2": "v2"}),
        17: (0, {"f3": "v3"}),
    }
    mock = MagicMock()
    mock.hlen = AsyncMock(return_value=3)
    mock.hscan = AsyncMock(side_effect=lambda key, cursor=0, match=None, count=None: pages[cursor])

    with patch.object(redis_manager, "get_client", AsyncMock(return_value=mock)):
        first = client.get("/api/keys/myhash/hash/fields", params={"cursor": 0, "count": 2})
        assert first.status_code == 200
        body = first.json()
        assert body["cursor"] == 17
        assert body["total"] == 3
        assert [f["field"] for f in body["fields"]] == ["f1", "f2"]

        second = client.get("/api/keys/myhash/hash/fields", params={"cursor": 17, "count": 2})
        body2 = second.json()
        assert body2["cursor"] == 0
        assert [f["field"] for f in body2["fields"]] == ["f3"]


def test_hash_fields_endpoint_passes_match_and_validates_count():
    mock = MagicMock()
    mock.hlen = AsyncMock(return_value=10)
    mock.hscan = AsyncMock(return_value=(0, {"user:1": "x"}))

    with patch.object(redis_manager, "get_client", AsyncMock(return_value=mock)):
        resp = client.get("/api/keys/myhash/hash/fields", params={"match": "user:*", "count": 50})
        assert resp.status_code == 200
        assert mock.hscan.call_args.kwargs["match"] == "user:*"

        assert client.get("/api/keys/myhash/hash/fields", params={"count": 501}).status_code == 422
        assert client.get("/api/keys/myhash/hash/fields", params={"count": 0}).status_code == 422


def _download_mock(k_type):
    mock = MagicMock()
    mock.type = AsyncMock(return_value=k_type)
    mock.get = AsyncMock(return_value="hello world")
    mock.hlen = AsyncMock(return_value=2)
    mock.hscan = AsyncMock(return_value=(0, {"f1": "v1", "f2": "v,2"}))
    mock.llen = AsyncMock(return_value=3)
    mock.lrange = AsyncMock(return_value=["a", "b", "c"])
    mock.scard = AsyncMock(return_value=2)
    mock.sscan = AsyncMock(return_value=(0, ["x", "y"]))
    mock.zcard = AsyncMock(return_value=2)
    mock.zrange = AsyncMock(return_value=[("m1", 1.0), ("m2", 2.5)])
    mock.execute_command = AsyncMock(return_value='{"a": [1, 2]}')
    mock.hgetall = AsyncMock(side_effect=AssertionError("download must not use HGETALL"))
    return mock


@pytest.mark.parametrize(
    "k_type,fmt,media,ext,check",
    [
        ("string", None, "text/plain", "txt", lambda t: t == "hello world"),
        ("hash", None, "text/csv", "csv", lambda t: t.splitlines() == ["Field,Value", "f1,v1", 'f2,"v,2"']),
        ("hash", "json", "application/json", "json", lambda t: '"f2": "v,2"' in t),
        ("list", None, "application/json", "json", lambda t: t.replace(" ", "").replace("\n", "") == '["a","b","c"]'),
        ("list", "txt", "text/plain", "txt", lambda t: t == "a\nb\nc\n"),
        ("set", "txt", "text/plain", "txt", lambda t: t.splitlines() == ["x", "y"]),
        ("zset", None, "text/csv", "csv", lambda t: t.splitlines() == ["Member,Score", "m1,1.0", "m2,2.5"]),
        ("ReJSON-RL", None, "application/json", "json", lambda t: t == '{\n  "a": [\n    1,\n    2\n  ]\n}'),
    ],
)
def test_key_download_media_type_and_filename(k_type, fmt, media, ext, check):
    mock = _download_mock(k_type)
    params = {"format": fmt} if fmt else {}
    with patch.object(redis_manager, "get_client", AsyncMock(return_value=mock)):
        resp = client.get("/api/keys/app%3Auser%2F1/download", params=params)

    assert resp.status_code == 200
    assert resp.headers["content-type"].startswith(media)
    assert resp.headers["content-disposition"] == f'attachment; filename="app_user_1.{ext}"'
    assert resp.headers["x-export-format"] == ext
    assert resp.headers["x-export-truncated"] == "false"
    assert check(resp.text)


def test_key_download_rejects_format_not_valid_for_type():
    mock = _download_mock("list")
    with patch.object(redis_manager, "get_client", AsyncMock(return_value=mock)):
        resp = client.get("/api/keys/mylist/download", params={"format": "csv"})
    assert resp.status_code == 400


def test_key_download_missing_key_returns_404():
    mock = _download_mock("none")
    with patch.object(redis_manager, "get_client", AsyncMock(return_value=mock)):
        resp = client.get("/api/keys/nope/download")
    assert resp.status_code == 404


def test_key_download_caps_hash_at_max_items():
    mock = _download_mock("hash")
    mock.hlen = AsyncMock(return_value=1_000_000)
    calls = {"n": 0}

    def hscan_page(key, cursor=0, count=None):
        n = calls["n"]
        calls["n"] += 1
        return (n + 1, {f"f{n}_{i}": "v" for i in range(1000)})

    mock.hscan = AsyncMock(side_effect=hscan_page)
    with patch.object(redis_manager, "get_client", AsyncMock(return_value=mock)):
        resp = client.get("/api/keys/big/download", params={"max_items": 1500})

    assert resp.status_code == 200
    assert resp.headers["x-export-truncated"] == "true"
    assert resp.headers["x-export-total"] == "1000000"
    assert mock.hscan.await_count == 2
    assert len(resp.text.strip().splitlines()) == 1 + 1500


def test_export_keys_rejects_unknown_format():
    resp = client.get("/api/keys/export", params={"format": "bogus"})
    assert resp.status_code == 400
    assert "csv" in resp.json()["detail"]


def test_export_keys_sets_export_format_header():
    mock_standalone = MagicMock()
    mock_standalone.scan = AsyncMock(return_value=(0, ["k1"]))
    pipe_mock = MagicMock()
    pipe_mock.execute = AsyncMock(return_value=["string", -1])
    mock_standalone.pipeline = MagicMock(return_value=pipe_mock)

    with patch.object(redis_manager, "get_client", AsyncMock(return_value=mock_standalone)):
        resp = client.get("/api/keys/export", params={"format": "TXT"})
    assert resp.status_code == 200
    assert resp.headers["x-export-format"] == "txt"
    assert resp.headers["content-disposition"].endswith('.txt"')
