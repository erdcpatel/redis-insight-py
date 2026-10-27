import json
import os
from unittest.mock import AsyncMock, patch
import pytest
from fastapi.testclient import TestClient

from app.main import app
from app.db import init_db, create_connection, list_connections
from app.redis_manager import redis_manager

client = TestClient(app)


@pytest.fixture(autouse=True)
def setup_test_db():
    init_db()
    old_env = os.environ.get("APP_READONLY")
    if "APP_READONLY" in os.environ:
        del os.environ["APP_READONLY"]

    old_selected = redis_manager._selected_conn_id
    old_conn_infos = dict(redis_manager._conn_infos)
    old_clients = dict(redis_manager._clients)

    # Ensure Local Redis is active
    local_conns = [c for c in list_connections() if c["name"] == "Local Redis"]
    if local_conns:
        client.post(f"/api/connections/{local_conns[0]['id']}/activate")
    else:
        conn = create_connection({
            "name": "Local Redis",
            "host": "localhost",
            "port": 6379,
            "env": "LOCAL",
        })
        client.post(f"/api/connections/{conn['id']}/activate")

    yield

    if old_env is not None:
        os.environ["APP_READONLY"] = old_env
    elif "APP_READONLY" in os.environ:
        del os.environ["APP_READONLY"]

    redis_manager._selected_conn_id = old_selected
    redis_manager._conn_infos = old_conn_infos
    redis_manager._clients = old_clients


def test_publish_message_success():
    """POST /api/pubsub/publish publishes message and returns receiver count."""
    resp = client.post("/api/pubsub/publish", json={
        "channel": "notifications",
        "message": "Hello Redis World"
    })
    assert resp.status_code == 200
    data = resp.json()
    assert data["channel"] == "notifications"
    assert isinstance(data["receivers"], int)


def test_publish_empty_channel_fails():
    """POST /api/pubsub/publish with empty channel should return 400 or 422."""
    resp = client.post("/api/pubsub/publish", json={
        "channel": "   ",
        "message": "Payload"
    })
    assert resp.status_code in (400, 422)


def test_publish_readonly_mode_forbidden():
    """POST /api/pubsub/publish should return 403 Forbidden when read-only mode is active."""
    # Test global read-only
    os.environ["APP_READONLY"] = "true"
    resp = client.post("/api/pubsub/publish", json={
        "channel": "notifications",
        "message": "Will be rejected"
    })
    assert resp.status_code == 403
    assert "read-only mode" in resp.json()["detail"].lower()

    # Test connection-level read-only (PROD default)
    del os.environ["APP_READONLY"]
    prod_conn = create_connection({
        "name": "PubSub Prod Cluster",
        "env": "PROD",
        "host": "localhost",
        "port": 6379,
    })
    resp_prod = client.post(
        f"/api/pubsub/publish?conn_id={prod_conn['id']}",
        json={"channel": "alerts", "message": "Prod alert"}
    )
    assert resp_prod.status_code == 403
    assert "read-only mode is active" in resp_prod.json()["detail"].lower()


def test_websocket_lifecycle_and_ping():
    """WebSocket /api/ws/pubsub connects, greets, and handles ping/pong."""
    with client.websocket_connect("/api/ws/pubsub") as ws:
        greeting = ws.receive_json()
        assert greeting["type"] == "connected"

        # Send ping
        ws.send_json({"action": "ping"})
        pong = ws.receive_json()
        assert pong["type"] == "pong"
        assert "timestamp" in pong


def test_websocket_subscribe_and_publish_stream():
    """WebSocket receives live messages published to subscribed channels."""
    test_channel = "test-live-channel"
    test_msg = "Live message from automated test"

    with client.websocket_connect("/api/ws/pubsub") as ws:
        greeting = ws.receive_json()
        assert greeting["type"] == "connected"

        # Subscribe to channel
        ws.send_json({"action": "subscribe", "channel": test_channel})
        sub_ack = ws.receive_json()
        assert sub_ack["type"] == "subscribe"
        assert sub_ack["channel"] == test_channel

        # Publish a message via HTTP endpoint
        pub_resp = client.post("/api/pubsub/publish", json={
            "channel": test_channel,
            "message": test_msg
        })
        assert pub_resp.status_code == 200
        assert pub_resp.json()["receivers"] >= 1

        # Receive published message via WebSocket
        msg = ws.receive_json()
        assert msg["type"] == "message"
        assert msg["channel"] == test_channel
        assert msg["data"] == test_msg
        assert msg["size"] == len(test_msg)

        # Unsubscribe
        ws.send_json({"action": "unsubscribe", "channel": test_channel})
        unsub_ack = ws.receive_json()
        assert unsub_ack["type"] == "unsubscribe"
        assert unsub_ack["channel"] == test_channel


def test_websocket_pattern_subscribe_and_stream():
    """WebSocket receives live messages for glob pattern subscriptions (psubscribe)."""
    pattern = "orders:*"
    channel = "orders:us-east:123"
    payload = json.dumps({"order_id": 123, "amount": 99.99})

    with client.websocket_connect("/api/ws/pubsub") as ws:
        greeting = ws.receive_json()
        assert greeting["type"] == "connected"

        # Subscribe with pattern
        ws.send_json({"action": "psubscribe", "pattern": pattern})
        psub_ack = ws.receive_json()
        assert psub_ack["type"] == "psubscribe"
        assert psub_ack["channel"] == pattern

        # Publish matching message
        pub_resp = client.post("/api/pubsub/publish", json={
            "channel": channel,
            "message": payload
        })
        assert pub_resp.status_code == 200
        assert pub_resp.json()["receivers"] >= 1

        # Receive pmessage
        pmsg = ws.receive_json()
        assert pmsg["type"] == "pmessage"
        assert pmsg["pattern"] == pattern
        assert pmsg["channel"] == channel
        assert pmsg["data"] == payload

        # Cleanly unsubscribe pattern
        ws.send_json({"action": "punsubscribe", "pattern": pattern})
        punsub_ack = ws.receive_json()
        assert punsub_ack["type"] == "punsubscribe"


def test_websocket_unknown_action():
    """WebSocket receives error message on unsupported action."""
    with client.websocket_connect("/api/ws/pubsub") as ws:
        ws.receive_json()  # greeting
        ws.send_json({"action": "foobar"})
        err = ws.receive_json()
        assert err["type"] == "error"
        assert "foobar" in err["message"]
