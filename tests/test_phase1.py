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


def test_db_init_and_default_connection():
    init_db()
    connections = list_connections()
    assert len(connections) >= 1
    # Check default localhost
    local_conns = [c for c in connections if c["name"] == "Local Redis"]
    assert len(local_conns) >= 1
    default_conn = local_conns[0]
    assert default_conn["host"] == "localhost"
    assert default_conn["port"] == 6379


def test_api_list_connections():
    response = client.get("/api/connections")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    assert len(data) >= 1
    assert "has_password" in data[0]


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


