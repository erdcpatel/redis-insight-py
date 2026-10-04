import pytest
import urllib.parse
from fastapi.testclient import TestClient
from app.main import app
from app.db import create_connection
from app.redis_manager import redis_manager


@pytest.fixture(scope="module")
def client():
    # Setup test connection in SQLite
    conn = create_connection({
        "name": "Phase2 Test Redis",
        "host": "localhost",
        "port": 6379,
        "db": 0,
    })
    with TestClient(app) as c:
        c.post(f"/api/connections/{conn['id']}/activate")
        yield c


def test_key_detail_string(client):
    # Setup test key in redis
    r_client = pytest.importorskip("redis").Redis(host="localhost", port=6379, db=0, decode_responses=True)
    r_client.set("test:phase2:string", '{"message": "hello world"}')
    r_client.expire("test:phase2:string", 3600)

    encoded_key = urllib.parse.quote("test:phase2:string", safe="")
    resp = client.get(f"/api/keys/{encoded_key}/detail")
    assert resp.status_code == 200
    data = resp.json()
    assert data["name"] == "test:phase2:string"
    assert data["type"].lower() == "string"
    assert data["ttl"] > 0
    assert data["is_json"] is True
    assert data["parsed_json"] == {"message": "hello world"}


def test_key_detail_hash(client):
    r_client = pytest.importorskip("redis").Redis(host="localhost", port=6379, db=0, decode_responses=True)
    r_client.delete("test:phase2:hash")
    r_client.hset("test:phase2:hash", "user_id", "42")
    r_client.hset("test:phase2:hash", "role", "admin")

    encoded_key = urllib.parse.quote("test:phase2:hash", safe="")
    resp = client.get(f"/api/keys/{encoded_key}/detail")
    assert resp.status_code == 200
    data = resp.json()
    assert data["name"] == "test:phase2:hash"
    assert data["type"].lower() == "hash"
    assert data["length"] == 2
    fields = {f["field"]: f["value"] for f in data["fields"]}
    assert fields["user_id"] == "42"
    assert fields["role"] == "admin"


def test_hash_field_add_and_delete(client):
    r_client = pytest.importorskip("redis").Redis(host="localhost", port=6379, db=0, decode_responses=True)
    r_client.delete("test:phase2:hash_ops")
    r_client.hset("test:phase2:hash_ops", "initial", "1")

    encoded_key = urllib.parse.quote("test:phase2:hash_ops", safe="")

    # Add field
    add_resp = client.put(f"/api/keys/{encoded_key}/field", json={"field": "new_prop", "value": "test_val"})
    assert add_resp.status_code == 200
    assert add_resp.json()["success"] is True

    # Verify field exists in detail
    detail = client.get(f"/api/keys/{encoded_key}/detail").json()
    fields = {f["field"]: f["value"] for f in detail["fields"]}
    assert fields["new_prop"] == "test_val"

    # Delete field
    del_resp = client.delete(f"/api/keys/{encoded_key}/field/new_prop")
    assert del_resp.status_code == 200
    assert del_resp.json()["deleted"] == 1


def test_ttl_update_and_persist(client):
    r_client = pytest.importorskip("redis").Redis(host="localhost", port=6379, db=0, decode_responses=True)
    r_client.set("test:phase2:ttl_key", "expiring_val")
    encoded_key = urllib.parse.quote("test:phase2:ttl_key", safe="")

    # Set TTL to 1800s
    resp1 = client.put(f"/api/keys/{encoded_key}/ttl", json={"seconds": 1800})
    assert resp1.status_code == 200
    assert r_client.ttl("test:phase2:ttl_key") > 1700

    # Persist key (seconds = -1)
    resp2 = client.put(f"/api/keys/{encoded_key}/ttl", json={"seconds": -1})
    assert resp2.status_code == 200
    assert r_client.ttl("test:phase2:ttl_key") == -1


def test_delete_safeguard_requires_confirmation(client):
    r_client = pytest.importorskip("redis").Redis(host="localhost", port=6379, db=0, decode_responses=True)
    r_client.set("test:phase2:risky_key", "critical_data")
    encoded_key = urllib.parse.quote("test:phase2:risky_key", safe="")

    # 1. Unconfirmed delete MUST fail with HTTP 400
    bad_resp = client.delete(f"/api/keys/{encoded_key}")
    assert bad_resp.status_code == 400
    assert "Confirmation required" in bad_resp.json()["detail"]
    assert r_client.exists("test:phase2:risky_key") == 1

    # 2. Delete with confirmed=true query parameter succeeds
    ok_resp = client.delete(f"/api/keys/{encoded_key}?confirmed=true")
    assert ok_resp.status_code == 200
    assert ok_resp.json()["deleted"] == 1
    assert r_client.exists("test:phase2:risky_key") == 0


def test_delete_safeguard_with_confirmation_word(client):
    r_client = pytest.importorskip("redis").Redis(host="localhost", port=6379, db=0, decode_responses=True)
    r_client.set("test:phase2:typed_confirm", "important")
    encoded_key = urllib.parse.quote("test:phase2:typed_confirm", safe="")

    # Delete with query param ?confirmation=CONFIRM
    ok_resp = client.delete(f"/api/keys/{encoded_key}?confirmation=CONFIRM")
    assert ok_resp.status_code == 200
    assert ok_resp.json()["deleted"] == 1
    assert r_client.exists("test:phase2:typed_confirm") == 0


def test_delete_safeguard_with_json_body(client):
    r_client = pytest.importorskip("redis").Redis(host="localhost", port=6379, db=0, decode_responses=True)
    r_client.set("test:phase2:body_confirm", "important_payload")
    encoded_key = urllib.parse.quote("test:phase2:body_confirm", safe="")

    # Delete with JSON body {"confirmation": "CONFIRM"}
    ok_resp = client.request("DELETE", f"/api/keys/{encoded_key}", json={"confirmation": "CONFIRM"})
    assert ok_resp.status_code == 200
    assert ok_resp.json()["deleted"] == 1
    assert r_client.exists("test:phase2:body_confirm") == 0


def test_connections_env_filter_and_search(client):
    """Test environment tags and search query on connections list."""
    # Test reload config
    reload_resp = client.post("/api/connections/reload-config")
    assert reload_resp.status_code == 200
    reload_data = reload_resp.json()
    assert "loaded" in reload_data

    # Test list all
    all_resp = client.get("/api/connections")
    assert all_resp.status_code == 200
    all_conns = all_resp.json()
    assert len(all_conns) >= 4

    # Test filter by env=DEV
    dev_resp = client.get("/api/connections?env=DEV")
    assert dev_resp.status_code == 200
    dev_conns = dev_resp.json()
    assert len(dev_conns) >= 1
    for c in dev_conns:
        assert c["env"] == "DEV"

    # Test filter by env=PROD
    prod_resp = client.get("/api/connections?env=PROD")
    assert prod_resp.status_code == 200
    prod_conns = prod_resp.json()
    assert len(prod_conns) >= 1
    for c in prod_conns:
        assert c["env"] == "PROD"

    # Test search by query 'cluster'
    cluster_resp = client.get("/api/connections?search=cluster")
    assert cluster_resp.status_code == 200
    cluster_conns = cluster_resp.json()
    assert len(cluster_conns) >= 1
    for c in cluster_conns:
        assert "cluster" in c["name"].lower() or (c["cluster_nodes"] and "cluster" in c["cluster_nodes"].lower()) or c["conn_type"] == "cluster"


def test_cluster_topology_endpoint(client):
    """Test cluster topology and node details endpoint."""
    resp = client.get("/api/topology")
    assert resp.status_code == 200
    data = resp.json()
    assert "is_cluster" in data
    assert "total_nodes" in data
    assert "masters_count" in data
    assert "replicas_count" in data
    assert "slots_assigned" in data
    assert "nodes" in data
    assert len(data["nodes"]) >= 1

    first_node = data["nodes"][0]
    assert "id" in first_node
    assert "addr" in first_node
    assert "ip" in first_node
    assert "port" in first_node
    assert "role" in first_node
    assert "link_state" in first_node
    assert "flags" in first_node



def test_get_connected_clients(client):
    resp = client.get("/api/clients")
    assert resp.status_code == 200
    clients = resp.json()
    assert isinstance(clients, list)
    assert len(clients) > 0
    first = clients[0]
    assert "id" in first
    assert "addr" in first
    assert "ip" in first
    assert "port" in first
    assert "age_human" in first
    assert "idle_human" in first
    assert "cmd" in first
    assert "user" in first

