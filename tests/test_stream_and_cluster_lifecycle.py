import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.db import create_connection, delete_connection
import redis


@pytest.fixture(scope="module")
def local_redis():
    """Verify local redis is up and seed stream test key."""
    try:
        r = redis.Redis(host="localhost", port=6379, db=0, decode_responses=True)
        r.ping()
        # Seed a test stream key
        r.delete("test:stream:events")
        r.xadd("test:stream:events", {"user_id": "u100", "action": "login", "ip": "127.0.0.1"})
        r.xadd("test:stream:events", {"user_id": "u101", "action": "purchase", "amount": "49.99"})
        yield r
        r.delete("test:stream:events")
    except Exception:
        pytest.skip("Local redis standalone on 6379 is not running.")


def test_stream_key_detail_inspection(local_redis):
    """Verify inspecting a Redis Stream key returns properly structured entries."""
    conn = create_connection({
        "name": "Stream Test Redis",
        "host": "localhost",
        "port": 6379,
        "db": 0,
    })
    try:
        with TestClient(app) as client:
            client.post(f"/api/connections/{conn['id']}/activate")
            resp = client.get("/api/keys/test%3Astream%3Aevents/detail")
            assert resp.status_code == 200, resp.text
            data = resp.json()

            assert data["name"] == "test:stream:events"
            assert data["type"] == "stream"
            assert data["length"] == 2
            assert isinstance(data["value"], list)
            assert len(data["value"]) == 2

            entry1 = data["value"][0]
            assert "id" in entry1
            assert "fields" in entry1
            assert isinstance(entry1["fields"], dict)
            # Latest entry is purchase
            assert entry1["fields"]["action"] == "purchase"
            assert entry1["fields"]["amount"] == "49.99"
    finally:
        delete_connection(conn["id"])


def test_cluster_switch_connection_isolation(local_redis):
    """Verify switching connections activates target connection and maintains isolation."""
    conn1 = create_connection({
        "name": "Cluster A",
        "host": "localhost",
        "port": 6379,
        "db": 0,
        "env": "DEV"
    })
    conn2 = create_connection({
        "name": "Cluster B",
        "host": "localhost",
        "port": 6379,
        "db": 0,
        "env": "UAT"
    })
    try:
        with TestClient(app) as client:
            # Activate conn1
            r1 = client.post(f"/api/connections/{conn1['id']}/activate")
            assert r1.status_code == 200
            s1 = client.get("/api/status").json()
            assert s1["connection_id"] == conn1["id"]

            # Connect conn2
            r_conn2 = client.post(f"/api/connections/{conn2['id']}/connect")
            assert r_conn2.status_code == 200

            # Switch to conn2
            r2 = client.post(f"/api/connections/{conn2['id']}/select")
            assert r2.status_code == 200
            s2 = client.get("/api/status").json()
            assert s2["connection_id"] == conn2["id"]

            # Switch back to conn1
            r_sel1 = client.post(f"/api/connections/{conn1['id']}/select")
            assert r_sel1.status_code == 200
            s1_back = client.get("/api/status").json()
            assert s1_back["connection_id"] == conn1["id"]

            # Explicit X-Connection-ID header targeting conn1
            r_header = client.get("/api/status", headers={"X-Connection-ID": conn1["id"]})
            assert r_header.status_code == 200
            assert r_header.json()["connection_id"] == conn1["id"]
    finally:
        delete_connection(conn1["id"])
        delete_connection(conn2["id"])
