import pytest
from starlette.testclient import TestClient
from app.main import app

def test_gzip_compression_enabled():
    client = TestClient(app)
    # Request static or API endpoint with Accept-Encoding: gzip
    # /api/connections returns JSON list of connections (usually > 1KB)
    response = client.get("/api/connections", headers={"Accept-Encoding": "gzip"})
    assert response.status_code == 200
    if len(response.content) >= 1000:
        assert response.headers.get("content-encoding") == "gzip"
