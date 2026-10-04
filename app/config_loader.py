import os
import json
import logging
from pathlib import Path
from typing import Optional, List, Dict, Any
import yaml

from app.db import upsert_config_connection, list_connections

logger = logging.getLogger(__name__)

CONFIG_SEARCH_PATHS = [
    Path(__file__).resolve().parent.parent / "config" / "connections.yaml",
    Path(__file__).resolve().parent.parent / "config" / "connections.yml",
    Path(__file__).resolve().parent.parent / "connections.yaml",
    Path(__file__).resolve().parent.parent / "connections.yml",
    Path(__file__).resolve().parent.parent / "config" / "connections.json",
    Path(__file__).resolve().parent.parent / "connections.json",
]


def find_config_file(custom_path: Optional[str] = None) -> Optional[Path]:
    if custom_path:
        p = Path(custom_path)
        if p.exists() and p.is_file():
            return p
    for p in CONFIG_SEARCH_PATHS:
        if p.exists() and p.is_file():
            return p
    return None


def sync_connections_from_config(custom_path: Optional[str] = None) -> Dict[str, Any]:
    """
    Load connections from YAML or JSON configuration file and sync them into the SQLite database.
    """
    config_file = find_config_file(custom_path)
    if not config_file:
        return {"loaded": 0, "file": None, "message": "No configuration file found"}

    try:
        content = config_file.read_text(encoding="utf-8")
        if config_file.suffix in [".yaml", ".yml"]:
            data = yaml.safe_load(content)
        else:
            data = json.loads(content)

        if not data or not isinstance(data, dict):
            return {"loaded": 0, "file": str(config_file), "message": "Invalid configuration structure"}

        raw_list = data.get("connections", [])
        if not isinstance(raw_list, list):
            return {"loaded": 0, "file": str(config_file), "message": "No connections list in file"}

        synced_count = 0
        for item in raw_list:
            if not isinstance(item, dict) or not item.get("name"):
                continue

            name = str(item["name"]).strip()
            env = str(item.get("environment") or item.get("env") or "LOCAL").upper()
            conn_type = str(item.get("type") or item.get("conn_type") or "standalone").lower()
            db_num = int(item.get("db", 0))
            username = item.get("username")
            password = item.get("password")
            use_tls = bool(item.get("use_tls", False))

            # Nodes handling for Cluster or Sentinel
            nodes = item.get("nodes")
            cluster_nodes_str = ""
            if nodes and isinstance(nodes, list):
                cluster_nodes_str = json.dumps(nodes)
                # Use first node as default host & port
                first_node = nodes[0]
                host = first_node.get("host", "localhost")
                port = int(first_node.get("port", 6379))
            else:
                host = str(item.get("host", "localhost"))
                port = int(item.get("port", 6379))

            sentinel_master = item.get("sentinel_master") or item.get("master_name") or ""

            upsert_config_connection({
                "name": name,
                "host": host,
                "port": port,
                "db": db_num,
                "username": username,
                "password": password,
                "use_tls": use_tls,
                "env": env,
                "conn_type": conn_type,
                "cluster_nodes": cluster_nodes_str,
                "sentinel_master": sentinel_master,
                "source": "config"
            })
            synced_count += 1

        return {
            "loaded": synced_count,
            "file": str(config_file),
            "message": f"Successfully loaded {synced_count} connections from {config_file.name}"
        }
    except Exception as e:
        logger.error(f"Error reading connection config file: {e}")
        return {"loaded": 0, "file": str(config_file), "error": str(e)}
