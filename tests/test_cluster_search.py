import asyncio
import fnmatch
import json
from unittest.mock import AsyncMock, MagicMock, patch

import pytest
from fastapi.testclient import TestClient
from redis.asyncio.cluster import RedisCluster
from redis.exceptions import ResponseError

from app.main import app
from app.redis_manager import RedisManager, redis_manager

client = TestClient(app)


class _Node:
    def __init__(self, name):
        self.name = name


def _make_cluster(node_keys, key_types=None, support_scan_type=True):
    """RedisCluster stand-in whose per-node SCAN honours cursor, COUNT, MATCH and TYPE."""
    key_types = key_types or {}
    nodes = {name: _Node(name) for name in node_keys}
    fake = MagicMock(spec=RedisCluster)
    fake.dbsize = AsyncMock(return_value=sum(len(v) for v in node_keys.values()))
    fake.get_primaries.return_value = list(nodes.values())
    fake.get_node.side_effect = lambda node_name=None, **_: nodes.get(node_name)
    calls = []

    async def scan(cursor=0, match=None, count=10, target_nodes=None, _type=None, **_):
        assert target_nodes is not None
        if _type is not None and not support_scan_type:
            raise ResponseError("syntax error")
        calls.append({"node": target_nodes.name, "cursor": cursor, "count": count, "match": match, "type": _type})
        keys = node_keys[target_nodes.name]
        window = keys[cursor:cursor + count]
        nxt = cursor + count
        found = [k for k in window if fnmatch.fnmatchcase(k, match or "*")]
        if _type:
            found = [k for k in found if key_types.get(k, "string") == _type]
        return {target_nodes.name: nxt if nxt < len(keys) else 0}, found

    fake.scan = AsyncMock(side_effect=scan)

    class _Pipe:
        def __init__(self):
            self.ops = []

        def type(self, k):
            self.ops.append(key_types.get(k, "string"))

        def ttl(self, k):
            self.ops.append(-1)

        async def execute(self):
            return self.ops

    fake.pipeline.side_effect = lambda transaction=False: _Pipe()
    return fake, calls


def _sparse_cluster():
    node_keys = {f"10.0.0.{i}:700{i}": [f"user:{i}:{j}" for j in range(2000)] for i in range(3)}
    node_keys["10.0.0.2:7002"][1500] = "rare:needle"
    return node_keys


def test_sparse_pattern_found_in_single_request():
    fake, calls = _make_cluster(_sparse_cluster())
    with patch.object(redis_manager, "get_client", AsyncMock(return_value=fake)):
        data = client.get("/api/keys", params={"pattern": "rare:*", "cursor": "0", "count": 50}).json()
    assert [k["name"] for k in data["keys"]] == ["rare:needle"]
    assert data["keys"][0]["node"] == "10.0.0.2:7002"
    # COUNT grows between steps, so the whole 6,000-key space is covered in a handful of steps
    assert max(c["count"] for c in calls) > 50
    assert len(calls) <= 15
    assert data["nodes_total"] == 3


def test_unfiltered_page_size_unchanged():
    fake, calls = _make_cluster(_sparse_cluster())
    with patch.object(redis_manager, "get_client", AsyncMock(return_value=fake)):
        data = client.get("/api/keys", params={"cursor": "0", "count": 50}).json()
    assert len(data["keys"]) == 150
    assert len(calls) == 3
    assert data["nodes_done"] == 0 and data["nodes_total"] == 3
    assert set(json.loads(data["cursor"])) == set(_sparse_cluster())


def test_full_scan_with_pattern_returns_every_match_once():
    node_keys = _sparse_cluster()
    fake, _ = _make_cluster(node_keys)
    seen, cursor = [], "0"
    with patch.object(redis_manager, "get_client", AsyncMock(return_value=fake)):
        for _ in range(50):
            data = client.get("/api/keys", params={"pattern": "user:1:*", "cursor": cursor, "count": 200}).json()
            seen.extend(k["name"] for k in data["keys"])
            cursor = data["cursor"]
            if cursor in (0, "0"):
                break
    assert sorted(seen) == sorted(node_keys["10.0.0.1:7001"])
    assert data["nodes_done"] == 3


def test_regex_mode_filters_in_app_with_prefix_prefilter():
    fake, calls = _make_cluster(_sparse_cluster())
    with patch.object(redis_manager, "get_client", AsyncMock(return_value=fake)):
        data = client.get(
            "/api/keys",
            params={"pattern": r"^user:\d:19\d\d$", "regex": "true", "cursor": "0", "count": 500},
        ).json()
    names = [k["name"] for k in data["keys"]]
    assert names and all(n.startswith("user:") and n.split(":")[2].startswith("19") for n in names)
    assert data["regex_prefilter"] == "user:*"
    assert {c["match"] for c in calls} == {"user:*"}


def test_invalid_regex_returns_400():
    fake, _ = _make_cluster({"10.0.0.1:7000": ["a"]})
    with patch.object(redis_manager, "get_client", AsyncMock(return_value=fake)):
        resp = client.get("/api/keys", params={"pattern": "user:(", "regex": "true"})
    assert resp.status_code == 400
    assert "Invalid regex" in resp.json()["detail"]


def test_type_filter_uses_native_scan_type_and_json_alias():
    node_keys = {"10.0.0.1:7000": ["h1", "s1", "j1", "h2"]}
    types = {"h1": "hash", "h2": "hash", "j1": "ReJSON-RL"}
    fake, calls = _make_cluster(node_keys, types)
    with patch.object(redis_manager, "get_client", AsyncMock(return_value=fake)):
        hashes = client.get("/api/keys", params={"type": "hash"}).json()
        json_keys = client.get("/api/keys", params={"type": "json"}).json()
    assert sorted(k["name"] for k in hashes["keys"]) == ["h1", "h2"]
    assert [k["name"] for k in json_keys["keys"]] == ["j1"]
    assert {c["type"] for c in calls} == {"hash", "ReJSON-RL"}


def test_type_filter_falls_back_when_scan_type_unsupported():
    node_keys = {"10.0.0.1:7000": ["h1", "s1", "h2"]}
    fake, _ = _make_cluster(node_keys, {"h1": "hash", "h2": "hash"}, support_scan_type=False)
    with patch.object(redis_manager, "get_client", AsyncMock(return_value=fake)):
        data = client.get("/api/keys", params={"type": "hash"}).json()
    assert sorted(k["name"] for k in data["keys"]) == ["h1", "h2"]


@pytest.mark.parametrize("regex,glob", [
    (r"^user:\d+:profile$", "user:*"),
    (r"^order:", "order:*"),
    (r"user", "*"),
    (r"^a|b", "*"),
    (r"^ab*c", "a*"),
    (r"^ab+c", "ab*"),
    (r"^bikes\:x", "bikes:x*"),
    (r"^\d", "*"),
    (r"^key\*star", "key\\*star*"),
])
def test_regex_glob_prefilter(regex, glob):
    assert RedisManager._regex_glob_prefilter(regex) == glob


def test_standalone_regex_and_glob_search():
    import redis
    from app.db import list_connections
    local = [c for c in list_connections() if c["name"] == "Local Redis"]
    if local:
        client.post(f"/api/connections/{local[0]['id']}/activate")
    if not client.get("/api/status").json().get("connected"):
        pytest.skip("Local Redis connection not available")
    r = redis.Redis(host="localhost", port=6379, decode_responses=True)
    keys = ["p2t:user:1", "p2t:user:22", "p2t:order:3"]
    for k in keys:
        r.set(k, "v")
    try:
        glob = client.get("/api/keys", params={"pattern": "p2t:user:*"}).json()
        rx = client.get("/api/keys", params={"pattern": r"^p2t:user:\d\d$", "regex": "true"}).json()
        assert sorted(k["name"] for k in glob["keys"]) == ["p2t:user:1", "p2t:user:22"]
        assert [k["name"] for k in rx["keys"]] == ["p2t:user:22"]
        assert rx["nodes_total"] is None
    finally:
        r.delete(*keys)
