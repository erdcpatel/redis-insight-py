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
