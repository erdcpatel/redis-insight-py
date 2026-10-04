import pytest
from fastapi.testclient import TestClient
from app.main import app


@pytest.fixture(scope="module")
def client():
    with TestClient(app) as c:
        yield c


def test_discover_cluster_endpoint_standalone(client):
    """
    Testing discover-cluster against localhost:6379 (standalone).
    Should gracefully report cluster_enabled: 0 without crashing.
    """
    resp = client.post("/api/connections/discover-cluster", json={
        "host": "localhost",
        "port": 6379,
    })
    assert resp.status_code == 200
    data = resp.json()
    # If redis 6379 is running standalone, it returns success: false with informative error.
    # If redis is down, it returns success: false with connection error.
    assert "success" in data
    assert "error" in data or data["success"] is True


def test_test_connection_endpoint_cluster_params(client):
    """
    Verify /api/connections/test handles conn_type='cluster' and cluster_nodes without error.
    """
    resp = client.post("/api/connections/test", json={
        "host": "localhost",
        "port": 7000,
        "conn_type": "cluster",
        "cluster_nodes": '[{"host": "localhost", "port": 7000}]'
    })
    assert resp.status_code == 200
    data = resp.json()
    assert "success" in data
    assert "is_cluster" in data
