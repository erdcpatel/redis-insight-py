import pytest
from app.db import init_db, list_connections, get_db_connection
from app.config_loader import sync_connections_from_config


def test_same_name_cluster_across_different_environments(tmp_path):
    init_db()

    config_yaml = tmp_path / "multi_env_connections.yaml"
    config_yaml.write_text("""
connections:
  - name: "Cache Cluster"
    host: "dev-redis.internal"
    port: 6379
    environment: "DEV"
    type: "cluster"
  - name: "Cache Cluster"
    host: "prod-redis.internal"
    port: 6380
    environment: "PROD"
    type: "cluster"
  - name: "Cache Cluster"
    host: "uat-redis.internal"
    port: 6381
    environment: "UAT"
    type: "cluster"
""", encoding="utf-8")

    result = sync_connections_from_config(str(config_yaml))
    assert result["loaded"] == 3

    # Verify all 3 exist in SQLite with identical name but different env
    all_conns = list_connections(env="ALL")
    matching = [c for c in all_conns if c["name"] == "Cache Cluster"]
    assert len(matching) == 3

    envs = {c["env"] for c in matching}
    assert envs == {"DEV", "PROD", "UAT"}

    dev_conn = next(c for c in matching if c["env"] == "DEV")
    assert dev_conn["host"] == "dev-redis.internal"
    assert dev_conn["port"] == 6379

    prod_conn = next(c for c in matching if c["env"] == "PROD")
    assert prod_conn["host"] == "prod-redis.internal"
    assert prod_conn["port"] == 6380

    uat_conn = next(c for c in matching if c["env"] == "UAT")
    assert uat_conn["host"] == "uat-redis.internal"
    assert uat_conn["port"] == 6381

    # Filter checks
    dev_only = list_connections(env="DEV")
    assert any(c["name"] == "Cache Cluster" and c["host"] == "dev-redis.internal" for c in dev_only)
    assert not any(c["name"] == "Cache Cluster" and c["host"] == "prod-redis.internal" for c in dev_only)

    prod_only = list_connections(env="PROD")
    assert any(c["name"] == "Cache Cluster" and c["host"] == "prod-redis.internal" for c in prod_only)
    assert not any(c["name"] == "Cache Cluster" and c["host"] == "dev-redis.internal" for c in prod_only)
