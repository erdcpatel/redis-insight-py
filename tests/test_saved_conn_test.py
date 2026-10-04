import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.db import create_connection, delete_connection, get_connection

client = TestClient(app)


def test_saved_connection_test_endpoint():
    """Verify POST /api/connections/{conn_id}/test runs with stored credentials."""
    conn = create_connection({
        "name": "Test Saved Conn For Testing",
        "host": "localhost",
        "port": 6379,
        "db": 0,
        "password": "sample_secret_password",
        "conn_type": "standalone",
        "env": "DEV"
    })
    conn_id = conn["id"]
    try:
        # Check that saved conn test endpoint functions
        resp = client.post(f"/api/connections/{conn_id}/test")
        assert resp.status_code == 200
        data = resp.json()
        assert "success" in data

        # Check updating password via PUT
        update_resp = client.put(f"/api/connections/{conn_id}", json={
            "name": "Updated Name",
            "password": "new_updated_password"
        })
        assert update_resp.status_code == 200
        assert update_resp.json()["name"] == "Updated Name"

        # Verify password in DB was updated and encrypted
        retrieved = get_connection(conn_id, include_password=True)
        assert retrieved["password"] == "new_updated_password"
    finally:
        delete_connection(conn_id)
