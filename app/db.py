import sqlite3
import uuid
import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional, Dict, Any, List

from app.crypto import encrypt_secret, decrypt_secret

DB_PATH = Path(__file__).resolve().parent.parent / "connections.db"


def get_db_connection() -> sqlite3.Connection:
    conn = sqlite3.connect(str(DB_PATH))
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    with get_db_connection() as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS connections (
                id TEXT PRIMARY KEY,
                name TEXT NOT NULL,
                host TEXT NOT NULL DEFAULT 'localhost',
                port INTEGER NOT NULL DEFAULT 6379,
                db INTEGER NOT NULL DEFAULT 0,
                username TEXT,
                password_encrypted TEXT,
                use_tls INTEGER NOT NULL DEFAULT 0,
                is_active INTEGER NOT NULL DEFAULT 0,
                env TEXT NOT NULL DEFAULT 'LOCAL',
                conn_type TEXT NOT NULL DEFAULT 'standalone',
                cluster_nodes TEXT DEFAULT '',
                sentinel_master TEXT DEFAULT '',
                source TEXT NOT NULL DEFAULT 'ui',
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL
            )
        """)
        conn.commit()

        # Migrate existing tables if columns are missing
        cur = conn.execute("PRAGMA table_info(connections)")
        columns = [row["name"] for row in cur.fetchall()]
        if "env" not in columns:
            conn.execute("ALTER TABLE connections ADD COLUMN env TEXT NOT NULL DEFAULT 'LOCAL'")
        if "conn_type" not in columns:
            conn.execute("ALTER TABLE connections ADD COLUMN conn_type TEXT NOT NULL DEFAULT 'standalone'")
        if "cluster_nodes" not in columns:
            conn.execute("ALTER TABLE connections ADD COLUMN cluster_nodes TEXT DEFAULT ''")
        if "sentinel_master" not in columns:
            conn.execute("ALTER TABLE connections ADD COLUMN sentinel_master TEXT DEFAULT ''")
        if "source" not in columns:
            conn.execute("ALTER TABLE connections ADD COLUMN source TEXT NOT NULL DEFAULT 'ui'")
        conn.commit()

        # Seed default localhost connection if table is completely empty
        cur = conn.execute("SELECT COUNT(*) FROM connections")
        count = cur.fetchone()[0]
        if count == 0:
            now = datetime.now(timezone.utc).isoformat()
            default_id = str(uuid.uuid4())
            conn.execute("""
                INSERT INTO connections (
                    id, name, host, port, db, username, password_encrypted, use_tls, is_active,
                    env, conn_type, cluster_nodes, sentinel_master, source, created_at, updated_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                default_id,
                "Local Redis",
                "localhost",
                6379,
                0,
                None,
                "",
                0,
                1,  # Active by default
                "LOCAL",
                "standalone",
                "",
                "",
                "ui",
                now,
                now
            ))
            conn.commit()


def list_connections(search: Optional[str] = None, env: Optional[str] = None) -> List[Dict[str, Any]]:
    query = "SELECT * FROM connections WHERE 1=1"
    params = []

    if env and env.upper() != "ALL":
        query += " AND UPPER(env) = ?"
        params.append(env.upper())

    if search and search.strip():
        term = f"%{search.strip().lower()}%"
        query += " AND (LOWER(name) LIKE ? OR LOWER(host) LIKE ? OR LOWER(cluster_nodes) LIKE ? OR CAST(port AS TEXT) LIKE ?)"
        params.extend([term, term, term, term])

    query += " ORDER BY is_active DESC, name ASC"

    with get_db_connection() as conn:
        cur = conn.execute(query, params)
        rows = cur.fetchall()
        result = []
        for r in rows:
            result.append({
                "id": r["id"],
                "name": r["name"],
                "host": r["host"],
                "port": r["port"],
                "db": r["db"],
                "username": r["username"],
                "has_password": bool(r["password_encrypted"]),
                "use_tls": bool(r["use_tls"]),
                "is_active": bool(r["is_active"]),
                "env": r["env"] if "env" in r.keys() else "LOCAL",
                "conn_type": r["conn_type"] if "conn_type" in r.keys() else "standalone",
                "cluster_nodes": r["cluster_nodes"] if "cluster_nodes" in r.keys() else "",
                "sentinel_master": r["sentinel_master"] if "sentinel_master" in r.keys() else "",
                "source": r["source"] if "source" in r.keys() else "ui",
                "created_at": r["created_at"],
                "updated_at": r["updated_at"],
            })
        return result


def get_connection(conn_id: str, include_password: bool = False) -> Optional[Dict[str, Any]]:
    with get_db_connection() as conn:
        cur = conn.execute("SELECT * FROM connections WHERE id = ?", (conn_id,))
        r = cur.fetchone()
        if not r:
            return None
        data = {
            "id": r["id"],
            "name": r["name"],
            "host": r["host"],
            "port": r["port"],
            "db": r["db"],
            "username": r["username"],
            "has_password": bool(r["password_encrypted"]),
            "use_tls": bool(r["use_tls"]),
            "is_active": bool(r["is_active"]),
            "env": r["env"] if "env" in r.keys() else "LOCAL",
            "conn_type": r["conn_type"] if "conn_type" in r.keys() else "standalone",
            "cluster_nodes": r["cluster_nodes"] if "cluster_nodes" in r.keys() else "",
            "sentinel_master": r["sentinel_master"] if "sentinel_master" in r.keys() else "",
            "source": r["source"] if "source" in r.keys() else "ui",
            "created_at": r["created_at"],
            "updated_at": r["updated_at"],
        }
        if include_password:
            data["password"] = decrypt_secret(r["password_encrypted"]) if r["password_encrypted"] else None
        return data


def get_active_connection(include_password: bool = True) -> Optional[Dict[str, Any]]:
    with get_db_connection() as conn:
        cur = conn.execute("SELECT * FROM connections WHERE is_active = 1 LIMIT 1")
        r = cur.fetchone()
        if not r:
            return None
        data = {
            "id": r["id"],
            "name": r["name"],
            "host": r["host"],
            "port": r["port"],
            "db": r["db"],
            "username": r["username"],
            "has_password": bool(r["password_encrypted"]),
            "use_tls": bool(r["use_tls"]),
            "is_active": bool(r["is_active"]),
            "env": r["env"] if "env" in r.keys() else "LOCAL",
            "conn_type": r["conn_type"] if "conn_type" in r.keys() else "standalone",
            "cluster_nodes": r["cluster_nodes"] if "cluster_nodes" in r.keys() else "",
            "sentinel_master": r["sentinel_master"] if "sentinel_master" in r.keys() else "",
            "source": r["source"] if "source" in r.keys() else "ui",
            "created_at": r["created_at"],
            "updated_at": r["updated_at"],
        }
        if include_password:
            data["password"] = decrypt_secret(r["password_encrypted"]) if r["password_encrypted"] else None
        return data


def create_connection(data: Dict[str, Any]) -> Dict[str, Any]:
    conn_id = str(uuid.uuid4())
    now = datetime.now(timezone.utc).isoformat()
    pwd_enc = encrypt_secret(data.get("password") or "") if data.get("password") else ""
    env = (data.get("env") or "LOCAL").upper()
    conn_type = (data.get("conn_type") or "standalone").lower()
    cluster_nodes = data.get("cluster_nodes") or ""
    if isinstance(cluster_nodes, (list, dict)):
        cluster_nodes = json.dumps(cluster_nodes)
    sentinel_master = data.get("sentinel_master") or ""
    source = data.get("source") or "ui"

    with get_db_connection() as conn:
        conn.execute("""
            INSERT INTO connections (
                id, name, host, port, db, username, password_encrypted, use_tls, is_active,
                env, conn_type, cluster_nodes, sentinel_master, source, created_at, updated_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            conn_id,
            data["name"],
            data.get("host", "localhost"),
            data.get("port", 6379),
            data.get("db", 0),
            data.get("username"),
            pwd_enc,
            1 if data.get("use_tls") else 0,
            0,
            env,
            conn_type,
            cluster_nodes,
            sentinel_master,
            source,
            now,
            now
        ))
        conn.commit()

    return get_connection(conn_id, include_password=False)


def update_connection(conn_id: str, data: Dict[str, Any]) -> Optional[Dict[str, Any]]:
    current = get_connection(conn_id, include_password=True)
    if not current:
        return None

    name = data.get("name", current["name"])
    host = data.get("host", current["host"])
    port = data.get("port", current["port"])
    db = data.get("db", current["db"])
    username = data["username"] if "username" in data else current["username"]
    use_tls = data["use_tls"] if "use_tls" in data else current["use_tls"]
    env = (data.get("env") or current["env"]).upper()
    conn_type = (data.get("conn_type") or current["conn_type"]).lower()
    cluster_nodes = data["cluster_nodes"] if "cluster_nodes" in data else current["cluster_nodes"]
    if isinstance(cluster_nodes, (list, dict)):
        cluster_nodes = json.dumps(cluster_nodes)
    sentinel_master = data["sentinel_master"] if "sentinel_master" in data else current["sentinel_master"]

    now = datetime.now(timezone.utc).isoformat()

    with get_db_connection() as conn:
        if "password" in data and data["password"] is not None:
            pwd_enc = encrypt_secret(data["password"]) if data["password"] else ""
            conn.execute("""
                UPDATE connections
                SET name = ?, host = ?, port = ?, db = ?, username = ?, password_encrypted = ?, use_tls = ?,
                    env = ?, conn_type = ?, cluster_nodes = ?, sentinel_master = ?, updated_at = ?
                WHERE id = ?
            """, (name, host, port, db, username, pwd_enc, 1 if use_tls else 0, env, conn_type, cluster_nodes, sentinel_master, now, conn_id))
        else:
            conn.execute("""
                UPDATE connections
                SET name = ?, host = ?, port = ?, db = ?, username = ?, use_tls = ?,
                    env = ?, conn_type = ?, cluster_nodes = ?, sentinel_master = ?, updated_at = ?
                WHERE id = ?
            """, (name, host, port, db, username, 1 if use_tls else 0, env, conn_type, cluster_nodes, sentinel_master, now, conn_id))
        conn.commit()

    return get_connection(conn_id, include_password=False)


def upsert_config_connection(data: Dict[str, Any]) -> Dict[str, Any]:
    """Insert or update a connection defined in configuration file."""
    name = data["name"].strip()
    with get_db_connection() as conn:
        cur = conn.execute("SELECT id FROM connections WHERE name = ?", (name,))
        existing = cur.fetchone()

    data["source"] = "config"
    if existing:
        return update_connection(existing["id"], data)
    else:
        return create_connection(data)


def delete_connection(conn_id: str) -> bool:
    with get_db_connection() as conn:
        cur = conn.execute("DELETE FROM connections WHERE id = ?", (conn_id,))
        conn.commit()
        return cur.rowcount > 0


def set_active_connection(conn_id: str) -> bool:
    with get_db_connection() as conn:
        conn.execute("UPDATE connections SET is_active = 0")
        cur = conn.execute("UPDATE connections SET is_active = 1 WHERE id = ?", (conn_id,))
        conn.commit()
        return cur.rowcount > 0


def set_connection_status(conn_id: str, is_active: bool) -> bool:
    with get_db_connection() as conn:
        cur = conn.execute("UPDATE connections SET is_active = ? WHERE id = ?", (1 if is_active else 0, conn_id))
        conn.commit()
        return cur.rowcount > 0


def set_all_inactive() -> bool:
    with get_db_connection() as conn:
        conn.execute("UPDATE connections SET is_active = 0")
        conn.commit()
        return True

