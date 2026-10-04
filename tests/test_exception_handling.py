import pytest
import sqlite3
from fastapi import HTTPException
from fastapi.testclient import TestClient
from redis.exceptions import (
    AuthenticationError,
    ReadOnlyError,
    ClusterDownError,
    TimeoutError as RedisTimeoutError,
    ConnectionError as RedisConnectionError,
    ResponseError,
    RedisError,
)

from app.main import app
from app.routers.keys import raise_mapped_exception


def test_mapped_exception_authentication():
    with pytest.raises(HTTPException) as exc_info:
        raise_mapped_exception(AuthenticationError("WRONGPASS invalid password"), "Test Auth")
    assert exc_info.value.status_code == 401
    assert "WRONGPASS" in exc_info.value.detail


def test_mapped_exception_readonly():
    with pytest.raises(HTTPException) as exc_info:
        raise_mapped_exception(ReadOnlyError("READONLY You can't write against a read only replica"), "Test Write")
    assert exc_info.value.status_code == 403
    assert "read-only replica" in exc_info.value.detail


def test_mapped_exception_cluster_down():
    with pytest.raises(HTTPException) as exc_info:
        raise_mapped_exception(ClusterDownError("CLUSTERDOWN Hash slot not served"), "Test Cluster")
    assert exc_info.value.status_code == 503
    assert "cluster is down" in exc_info.value.detail


def test_mapped_exception_connection_error():
    with pytest.raises(HTTPException) as exc_info:
        raise_mapped_exception(ConnectionError("Connection refused"), "Test Conn")
    assert exc_info.value.status_code == 503
    assert "connection unavailable" in exc_info.value.detail


def test_mapped_exception_timeout():
    with pytest.raises(HTTPException) as exc_info:
        raise_mapped_exception(RedisTimeoutError("Socket timeout"), "Test Timeout")
    assert exc_info.value.status_code == 504
    assert "timed out" in exc_info.value.detail


def test_mapped_exception_response_error():
    with pytest.raises(HTTPException) as exc_info:
        raise_mapped_exception(ResponseError("syntax error"), "Test Command")
    assert exc_info.value.status_code == 400
    assert "command error" in exc_info.value.detail


def test_mapped_exception_preserves_http_exception():
    orig = HTTPException(status_code=404, detail="Key not found")
    with pytest.raises(HTTPException) as exc_info:
        raise_mapped_exception(orig, "Test 404")
    assert exc_info.value.status_code == 404
    assert exc_info.value.detail == "Key not found"
