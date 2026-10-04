import os
import pytest
from app.config_loader import expand_env_vars, load_env_file, sync_connections_from_config


def test_expand_env_vars_exact_match(monkeypatch):
    monkeypatch.setenv("TEST_REDIS_PASS", "super_secret_42")
    res = expand_env_vars("${TEST_REDIS_PASS}")
    assert res == "super_secret_42"


def test_expand_env_vars_with_default(monkeypatch):
    monkeypatch.delenv("UNSET_VAR_KEY", raising=False)
    res = expand_env_vars("${UNSET_VAR_KEY:-fallback_pass}")
    assert res == "fallback_pass"


def test_expand_env_vars_unset_returns_none(monkeypatch):
    monkeypatch.delenv("COMPLETELY_UNSET_VAR", raising=False)
    res = expand_env_vars("${COMPLETELY_UNSET_VAR}")
    assert res is None


def test_expand_env_vars_embedded(monkeypatch):
    monkeypatch.setenv("CLUSTER_PORT", "7005")
    res = expand_env_vars("127.0.0.1:${CLUSTER_PORT}")
    assert res == "127.0.0.1:7005"


def test_expand_env_vars_recursive(monkeypatch):
    monkeypatch.setenv("DB_PASS", "auth_token_99")
    monkeypatch.setenv("NODE_HOST", "node.redis.lan")

    data = {
        "name": "Cluster",
        "password": "${DB_PASS}",
        "nodes": [
            {"host": "${NODE_HOST}", "port": 7000}
        ]
    }
    expanded = expand_env_vars(data)
    assert expanded["password"] == "auth_token_99"
    assert expanded["nodes"][0]["host"] == "node.redis.lan"


def test_check_and_sync_if_modified(tmp_path):
    import time
    from app.config_loader import check_and_sync_if_modified
    from app.db import get_connection, get_db_connection, init_db

    init_db()
    test_yaml = tmp_path / "dynamic_connections.yaml"
    test_yaml.write_text("""
connections:
  - name: "AutoSync Test"
    host: "10.10.10.1"
    port: 6379
""", encoding="utf-8")

    # First check: initial load
    synced = check_and_sync_if_modified(str(test_yaml))
    assert synced is True
    with get_db_connection() as db:
        row = db.execute("SELECT host FROM connections WHERE name = 'AutoSync Test'").fetchone()
        assert row["host"] == "10.10.10.1"

    # Second check without file change: should return False (no re-sync needed)
    assert check_and_sync_if_modified(str(test_yaml)) is False

    # Simulate modifying file on disk
    time.sleep(0.05)
    test_yaml.write_text("""
connections:
  - name: "AutoSync Test"
    host: "10.10.10.99"
    port: 6380
""", encoding="utf-8")

    # Third check: should detect modification and re-sync
    assert check_and_sync_if_modified(str(test_yaml)) is True
    with get_db_connection() as db:
        row = db.execute("SELECT host, port FROM connections WHERE name = 'AutoSync Test'").fetchone()
        assert row["host"] == "10.10.10.99"
        assert row["port"] == 6380

