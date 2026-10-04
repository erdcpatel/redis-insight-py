import os
import pytest
from app.db import (
    create_connection,
    update_connection,
    get_connection,
    upsert_config_connection,
    get_db_connection,
    init_db
)
from app.crypto import encrypt_secret, decrypt_secret
from app.config_loader import expand_env_vars, sync_connections_from_config
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_encryption_roundtrip():
    secret = "SuperSecretP@ssword123!"
    encrypted = encrypt_secret(secret)
    assert encrypted != secret
    assert len(encrypted) > 20
    decrypted = decrypt_secret(encrypted)
    assert decrypted == secret


def test_ui_connection_password_lifecycle():
    init_db()
    # 1. Create connection with password via UI data
    conn_data = {
        "name": "Test Lifecycle Redis",
        "host": "127.0.0.1",
        "port": 6379,
        "password": "InitialPassword456",
        "env": "DEV",
        "conn_type": "standalone",
    }
    created = create_connection(conn_data)
    conn_id = created["id"]
    assert created["has_password"] is True

    # Check raw database: plain password must NEVER be in SQLite
    with get_db_connection() as db:
        row = db.execute("SELECT password_encrypted FROM connections WHERE id = ?", (conn_id,)).fetchone()
        raw_val = row["password_encrypted"]
        assert raw_val != "InitialPassword456"
        assert len(raw_val) > 20

    # Retrieve without password (UI view)
    view = get_connection(conn_id, include_password=False)
    assert "password" not in view
    assert view["has_password"] is True

    # Retrieve with password (internal worker view)
    internal = get_connection(conn_id, include_password=True)
    assert internal["password"] == "InitialPassword456"

    # 2. Update without changing password (password is None or omitted)
    update_data = {
        "name": "Renamed Lifecycle Redis",
        "host": "127.0.0.1",
        "port": 6380,
    }
    updated = update_connection(conn_id, update_data)
    assert updated["name"] == "Renamed Lifecycle Redis"
    assert updated["has_password"] is True

    # Verify password was preserved
    internal_after_rename = get_connection(conn_id, include_password=True)
    assert internal_after_rename["password"] == "InitialPassword456"

    # 3. Update with a new password
    update_data_pwd = {
        "password": "UpdatedPassword789",
    }
    updated_pwd = update_connection(conn_id, update_data_pwd)
    assert updated_pwd["has_password"] is True
    internal_after_pwd_update = get_connection(conn_id, include_password=True)
    assert internal_after_pwd_update["password"] == "UpdatedPassword789"


def test_config_connection_env_var_and_ui_password_preservation(tmp_path):
    init_db()
    os.environ["TEST_ENV_REDIS_PASS"] = "EnvSecretValueXYZ"

    # 1. Config file defines a connection with environment variable
    config_file = tmp_path / "test_connections.yaml"
    config_file.write_text("""
connections:
  - name: "Env Config Redis"
    host: "10.0.0.5"
    port: 6379
    password: "${TEST_ENV_REDIS_PASS}"
    environment: "PROD"
""", encoding="utf-8")

    result = sync_connections_from_config(str(config_file))
    assert result["loaded"] == 1

    # Verify it was encrypted in DB
    with get_db_connection() as db:
        row = db.execute("SELECT id, password_encrypted FROM connections WHERE name = 'Env Config Redis'").fetchone()
        assert row is not None
        conn_id = row["id"]
        assert row["password_encrypted"] != "EnvSecretValueXYZ"

    # Verify decrypted internally
    internal = get_connection(conn_id, include_password=True)
    assert internal["password"] == "EnvSecretValueXYZ"

    # 2. Config file defines connection WITHOUT password
    config_no_pwd = tmp_path / "test_no_pwd.yaml"
    config_no_pwd.write_text("""
connections:
  - name: "No Pwd Config Redis"
    host: "10.0.0.6"
    port: 6379
    environment: "UAT"
""", encoding="utf-8")

    sync_connections_from_config(str(config_no_pwd))
    with get_db_connection() as db:
        row = db.execute("SELECT id FROM connections WHERE name = 'No Pwd Config Redis'").fetchone()
        no_pwd_id = row["id"]

    # User adds password via UI/API
    update_connection(no_pwd_id, {"password": "AddedFromUISecret"})
    assert get_connection(no_pwd_id, include_password=True)["password"] == "AddedFromUISecret"

    # Re-sync config without password: UI-added password must NOT be wiped out
    sync_connections_from_config(str(config_no_pwd))
    assert get_connection(no_pwd_id, include_password=True)["password"] == "AddedFromUISecret"
