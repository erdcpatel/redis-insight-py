import asyncio
import json
import time
from typing import Optional, Dict, Any, List, Tuple
import redis.asyncio as aioredis
from redis.asyncio.client import Pipeline
from redis.asyncio.cluster import RedisCluster, ClusterNode

from app.logger import logger
from app.db import get_active_connection, set_active_connection, get_connection
import datetime
from app.models import (
    ActiveConnectionStatus,
    ConnectionTestResponse,
    KeyItem,
    KeyListResponse,
    ClusterTopologyResponse,
    ClusterNodeDetail,
    SlowlogEntry,
    SlowlogResponse,
    BigKeyItem,
    MemoryTypeBreakdown,
    MemoryOverviewResponse,
    MemoryAnalysisResponse,
    ClusterDiscoveryResponse,
    DiscoveredClusterNode,
    NodeStat,
    BulkDeleteDryRunResponse,
    BulkDeleteExecuteResponse,
)


HASH_DETAIL_PAGE_SIZE = 100
HASH_SCAN_MAX_STEPS = 10
DOWNLOAD_MAX_ITEMS = 200_000
DOWNLOAD_CHUNK_SIZE = 1000


def format_bytes(bytes_val: Optional[int]) -> str:
    """Format bytes integer into human readable string."""
    if bytes_val is None or bytes_val <= 0:
        return "0 B"
    b = float(bytes_val)
    if b < 1024:
        return f"{int(b)} B"
    elif b < 1024 * 1024:
        return f"{b / 1024:.2f} KB"
    elif b < 1024 * 1024 * 1024:
        return f"{b / (1024 * 1024):.2f} MB"
    else:
        return f"{b / (1024 * 1024 * 1024):.2f} GB"


class RedisManager:
    """Manages active Redis connection pools, connection limit, and key browsing operations."""

    def __init__(self):
        self._clients: Dict[str, Any] = {}
        self._conn_infos: Dict[str, Dict[str, Any]] = {}
        self._selected_conn_id: Optional[str] = None
        self._max_connected_limit: int = 2
        self._client_loop: Optional[asyncio.AbstractEventLoop] = None
        self._lock: Optional[asyncio.Lock] = None
        self._lock_loop: Optional[asyncio.AbstractEventLoop] = None

    def _get_lock(self) -> asyncio.Lock:
        current_loop = asyncio.get_running_loop()
        if self._lock is None or self._lock_loop != current_loop:
            self._lock = asyncio.Lock()
            self._lock_loop = current_loop
        return self._lock

    @property
    def is_connected(self) -> bool:
        return self._selected_conn_id is not None and self._selected_conn_id in self._clients

    @property
    def max_limit(self) -> int:
        return self._max_connected_limit

    def set_max_limit(self, limit: int) -> int:
        self._max_connected_limit = max(1, min(20, limit))
        return self._max_connected_limit

    @property
    def connected_ids(self) -> List[str]:
        return list(self._clients.keys())

    @property
    def selected_id(self) -> Optional[str]:
        return self._selected_conn_id

    def is_conn_connected(self, conn_id: str) -> bool:
        return conn_id in self._clients

    @property
    def active_info(self) -> Optional[Dict[str, Any]]:
        if self._selected_conn_id and self._selected_conn_id in self._conn_infos:
            return self._conn_infos[self._selected_conn_id]
        return None

    async def get_client(self, conn_id: Optional[str] = None) -> Any:
        target_id = conn_id or self._selected_conn_id
        current_loop = asyncio.get_running_loop()
        lock = self._get_lock()

        async with lock:
            if target_id and target_id in self._clients:
                # Verify loop validity
                if self._client_loop != current_loop or (self._client_loop and self._client_loop.is_closed()):
                    # Reconnect all existing connections in new loop
                    self._client_loop = current_loop
                    reconnected = {}
                    for cid, cinfo in self._conn_infos.items():
                        reconnected[cid] = await self._create_client(cinfo)
                    self._clients = reconnected
                return self._clients[target_id]

            # If no target or not connected, try to connect from active connection in DB
            if not target_id:
                active = get_active_connection(include_password=True)
                if active:
                    await self._connect_and_store(active["id"], active)
                    return self._clients[self._selected_conn_id]
                else:
                    raise ConnectionError("No active Redis connection configured or selected.")

            raise ConnectionError(f"Connection '{target_id}' is not connected.")

    async def _create_client(self, conn_dict: Dict[str, Any]) -> Any:
        """Internal helper to create a new client and test ping."""
        host = conn_dict.get("host", "localhost")
        port = int(conn_dict.get("port", 6379))
        db = int(conn_dict.get("db", 0))
        username = conn_dict.get("username") or None
        password = conn_dict.get("password") or None
        use_tls = bool(conn_dict.get("use_tls", False))
        conn_type = (conn_dict.get("conn_type") or "standalone").lower()

        logger.info(f"Connecting to Redis {conn_type}: {host}:{port} (db={db}, tls={use_tls})...")

        if conn_type == "cluster":
            nodes_data = conn_dict.get("cluster_nodes")
            startup_nodes = []
            if nodes_data:
                try:
                    parsed = json.loads(nodes_data) if isinstance(nodes_data, str) else nodes_data
                    if isinstance(parsed, list):
                        for n in parsed:
                            if isinstance(n, dict) and "host" in n:
                                startup_nodes.append(ClusterNode(n["host"], int(n.get("port", 6379))))
                            elif isinstance(n, str) and ":" in n:
                                h, p = n.split(":")
                                startup_nodes.append(ClusterNode(h.strip(), int(p.strip())))
                except Exception as e:
                    logger.warning(f"Could not parse cluster nodes configuration: {e}")
            if not startup_nodes:
                startup_nodes = [ClusterNode(host, port)]

            logger.info(f"Initializing RedisCluster client with {len(startup_nodes)} startup node(s): {[f'{n.host}:{n.port}' for n in startup_nodes]}")
            client = RedisCluster(
                startup_nodes=startup_nodes,
                username=username,
                password=password,
                ssl=use_tls,
                decode_responses=True,
                encoding="utf-8",
                encoding_errors="replace",
                socket_connect_timeout=4.0,
                socket_timeout=5.0,
            )
        else:
            client = aioredis.Redis(
                host=host,
                port=port,
                db=db,
                username=username,
                password=password,
                ssl=use_tls,
                decode_responses=True,
                encoding="utf-8",
                encoding_errors="replace",
                socket_connect_timeout=3.0,
                socket_timeout=5.0,
            )

        # Test with PING
        try:
            await client.ping()
            logger.info(f"Successfully connected and verified PING with Redis at {host}:{port}")
        except Exception as e:
            logger.error(f"Redis PING verification failed for {host}:{port}: {e}", exc_info=True)
            raise
        return client

    async def _connect_and_store(self, conn_id: str, conn_dict: Dict[str, Any]) -> Dict[str, Any]:
        """Internal helper to create, store client, and select it."""
        current_loop = asyncio.get_running_loop()
        self._client_loop = current_loop

        # If already connected, simply select it
        if conn_id in self._clients:
            self._selected_conn_id = conn_id
            logger.info(f"Connection ID '{conn_id}' was already open; focused as selected connection.")
            return self._conn_infos[conn_id]

        # Check limit
        if len(self._clients) >= self._max_connected_limit:
            msg = (
                f"Connection limit reached: Maximum {self._max_connected_limit} cluster(s) can be connected at a time. "
                "Please disconnect an existing cluster first."
            )
            logger.warning(msg)
            raise ValueError(msg)

        logger.info(f"Connecting connection ID '{conn_id}' ('{conn_dict.get('name')}', {conn_dict.get('conn_type', 'standalone')})")
        client = await self._create_client(conn_dict)
        self._clients[conn_id] = client
        self._conn_infos[conn_id] = conn_dict
        self._selected_conn_id = conn_id
        set_active_connection(conn_id)
        logger.info(f"Connection ID '{conn_id}' activated (connected: {len(self._clients)}/{self._max_connected_limit})")
        return conn_dict

    async def activate_connection(self, conn_id: str) -> Dict[str, Any]:
        """Connect or select a connection by ID."""
        conn_dict = get_connection(conn_id, include_password=True)
        if not conn_dict:
            logger.warning(f"Connection activation failed: ID '{conn_id}' not found in database.")
            raise ValueError(f"Connection {conn_id} not found.")

        async with self._get_lock():
            return await self._connect_and_store(conn_id, conn_dict)

    async def disconnect_connection(self, conn_id: str) -> bool:
        """Disconnect and close a connected cluster by ID."""
        from app.db import set_connection_status

        logger.info(f"Disconnecting connection ID '{conn_id}'...")
        async with self._get_lock():
            client = self._clients.pop(conn_id, None)
            self._conn_infos.pop(conn_id, None)
            if client:
                try:
                    await client.aclose()
                    logger.info(f"Closed client pool for connection ID '{conn_id}'")
                except Exception as e:
                    logger.warning(f"Error while closing client for '{conn_id}': {e}")

            set_connection_status(conn_id, is_active=False)

            if self._selected_conn_id == conn_id:
                if self._clients:
                    self._selected_conn_id = next(iter(self._clients.keys()))
                    set_active_connection(self._selected_conn_id)
                    logger.info(f"Switched active selected connection to '{self._selected_conn_id}'")
                else:
                    self._selected_conn_id = None
                    logger.info("No active connected connections remaining.")

            return True

    def select_connection(self, conn_id: str) -> Dict[str, Any]:
        """Switch active focus to an already connected connection."""
        if conn_id not in self._clients:
            logger.warning(f"Cannot select connection '{conn_id}': not currently connected.")
            raise ValueError(f"Connection {conn_id} is not connected. Connect it first.")
        self._selected_conn_id = conn_id
        set_active_connection(conn_id)
        logger.info(f"Selected active connection switched to '{conn_id}'")
        return self._conn_infos[conn_id]

    async def test_connection_params(
        self,
        host: str,
        port: int,
        db: int = 0,
        username: Optional[str] = None,
        password: Optional[str] = None,
        use_tls: bool = False,
        conn_type: str = "standalone",
        cluster_nodes: Optional[str] = None
    ) -> ConnectionTestResponse:
        """Test a candidate connection without saving or making it active."""
        start = time.perf_counter()
        temp_client = None
        logger.info(f"Testing connection: {conn_type} at {host}:{port} (db={db}, tls={use_tls})")
        try:
            if conn_type.lower() == "cluster":
                startup_nodes = []
                if cluster_nodes:
                    try:
                        parsed = json.loads(cluster_nodes) if isinstance(cluster_nodes, str) else cluster_nodes
                        if isinstance(parsed, list):
                            for n in parsed:
                                if isinstance(n, dict) and "host" in n:
                                    startup_nodes.append(ClusterNode(n["host"], int(n.get("port", 6379))))
                                elif isinstance(n, str) and ":" in n:
                                    h, p = n.split(":")
                                    startup_nodes.append(ClusterNode(h.strip(), int(p.strip())))
                    except Exception:
                        pass
                if not startup_nodes:
                    startup_nodes = [ClusterNode(host, port)]

                temp_client = RedisCluster(
                    startup_nodes=startup_nodes,
                    username=username or None,
                    password=password or None,
                    ssl=use_tls,
                    decode_responses=True,
                    socket_connect_timeout=3.0,
                    socket_timeout=4.0,
                )
            else:
                temp_client = aioredis.Redis(
                    host=host,
                    port=port,
                    db=db,
                    username=username or None,
                    password=password or None,
                    ssl=use_tls,
                    decode_responses=True,
                    encoding_errors="replace",
                    socket_connect_timeout=3.0,
                    socket_timeout=4.0,
                )

            await temp_client.ping()
            latency = (time.perf_counter() - start) * 1000.0

            # Inspect version and cluster state
            is_cluster = False
            cluster_nodes_count = None
            try:
                c_info = await temp_client.info("cluster")
                if c_info.get("cluster_enabled") == 1 or isinstance(temp_client, RedisCluster):
                    is_cluster = True
                    try:
                        raw_c = await temp_client.execute_command("CLUSTER INFO")
                        if isinstance(raw_c, bytes):
                            raw_c = raw_c.decode("utf-8")
                        if isinstance(raw_c, str):
                            p_info = {}
                            for line in raw_c.splitlines():
                                if ":" in line:
                                    k, v = line.split(":", 1)
                                    p_info[k.strip()] = v.strip()
                            raw_c = p_info
                        if isinstance(raw_c, dict) and "cluster_known_nodes" in raw_c:
                            cluster_nodes_count = int(raw_c["cluster_known_nodes"])
                    except Exception:
                        pass
                    if not cluster_nodes_count and hasattr(temp_client, "get_nodes"):
                        try:
                            cluster_nodes_count = len(temp_client.get_nodes())
                        except Exception:
                            pass
                    if not cluster_nodes_count:
                        cluster_nodes_count = int(c_info.get("cluster_known_nodes", 1))
            except Exception:
                pass

            try:
                info = await temp_client.info("server")
                redis_ver = info.get("redis_version")
                os_info = info.get("os")
            except Exception:
                redis_ver = "unknown"
                os_info = "unknown"

            logger.info(f"Connection test passed for {conn_type} at {host}:{port} (latency: {latency:.1f}ms, redis_version: {redis_ver})")
            return ConnectionTestResponse(
                success=True,
                latency_ms=round(latency, 2),
                redis_version=redis_ver,
                os=os_info,
                is_cluster=is_cluster,
                cluster_nodes_count=cluster_nodes_count,
            )
        except Exception as e:
            logger.warning(f"Connection test failed for {conn_type} at {host}:{port}: {e}")
            return ConnectionTestResponse(
                success=False,
                error=str(e),
            )
        finally:
            if temp_client:
                try:
                    await temp_client.aclose()
                except Exception:
                    pass

    async def discover_cluster_nodes(
        self,
        host: str,
        port: int,
        username: Optional[str] = None,
        password: Optional[str] = None,
        use_tls: bool = False,
    ) -> ClusterDiscoveryResponse:
        """
        Connect to a single candidate seed node and discover all cluster nodes via CLUSTER NODES / CLUSTER INFO.
        Safely derives IPs, ports, roles, and cluster state, taking 'myself' flag, NAT, and hostname mappings into account.
        """
        temp_c = None
        logger.info(f"Discovering cluster nodes via candidate seed node {host}:{port} (tls={use_tls})...")
        try:
            temp_c = aioredis.Redis(
                host=host,
                port=port,
                username=username or None,
                password=password or None,
                ssl=use_tls,
                decode_responses=True,
                encoding_errors="replace",
                socket_connect_timeout=3.0,
                socket_timeout=4.0,
            )
            # 1. Verify connection and cluster mode
            await temp_c.ping()

            c_info = {}
            try:
                c_info = await temp_c.info("cluster")
            except Exception:
                pass

            if c_info.get("cluster_enabled") != 1:
                logger.warning(f"Cluster discovery stopped: instance at {host}:{port} has cluster_enabled: 0")
                return ClusterDiscoveryResponse(
                    success=False,
                    error=f"The Redis instance at {host}:{port} is standalone (cluster_enabled: 0). Switch connection type to Standalone Redis."
                )

            # 2. Query CLUSTER NODES
            raw_nodes = await temp_c.execute_command("CLUSTER NODES")

            # 3. Query CLUSTER INFO for cluster state and slot count
            cluster_state = "ok"
            slots_assigned = 16384
            try:
                raw_info = await temp_c.execute_command("CLUSTER INFO")
                if isinstance(raw_info, bytes):
                    raw_info = raw_info.decode("utf-8", errors="replace")
                if isinstance(raw_info, dict):
                    cluster_state = str(raw_info.get("cluster_state") or "ok")
                    try:
                        slots_assigned = int(raw_info.get("cluster_slots_assigned") or 16384)
                    except Exception:
                        pass
                elif isinstance(raw_info, str):
                    for line in raw_info.splitlines():
                        if ":" in line:
                            k, v = line.split(":", 1)
                            if k.strip() == "cluster_state":
                                cluster_state = v.strip()
                            elif k.strip() == "cluster_slots_assigned":
                                try:
                                    slots_assigned = int(v.strip())
                                except Exception:
                                    pass
            except Exception:
                pass

            # 4. Parse nodes safely (handling dict, str, or bytes)
            discovered: List[DiscoveredClusterNode] = []
            masters_count = 0
            replicas_count = 0

            if isinstance(raw_nodes, bytes):
                raw_nodes = raw_nodes.decode("utf-8", errors="replace")

            # Case A: raw_nodes is a dict (parsed automatically by redis-py response callback)
            if isinstance(raw_nodes, dict):
                for k, v in raw_nodes.items():
                    if isinstance(v, (str, bytes)):
                        line_str = v.decode("utf-8", errors="replace") if isinstance(v, bytes) else v
                        parts = line_str.split()
                        if len(parts) >= 8:
                            raw_flags = parts[2].split(",")
                            raw_addr = parts[1]
                            n_id = parts[0]
                            m_id = parts[3] if parts[3] != "-" else None
                            l_state = parts[7]
                            slots = " ".join(parts[8:]) if len(parts) > 8 else None
                            is_myself = "myself" in raw_flags
                            is_master = "master" in raw_flags
                            role = "master" if is_master else "replica"

                            addr_main = raw_addr.split(",")[0] if "," in raw_addr else raw_addr
                            clean_addr = addr_main.split("@")[0] if "@" in addr_main else addr_main
                            node_host = host
                            node_port = port
                            if ":" in clean_addr:
                                hc, pc = clean_addr.rsplit(":", 1)
                                if hc and hc not in ("", "0.0.0.0"):
                                    node_host = hc
                                try:
                                    pv = int(pc)
                                    if pv > 0:
                                        node_port = pv
                                except Exception:
                                    pass
                            elif clean_addr:
                                node_host = clean_addr

                            if is_myself and (not clean_addr or clean_addr.startswith(":") or clean_addr.startswith("0.0.0.0")):
                                node_host = host
                                node_port = port

                            slot_count = 0
                            if slots:
                                for s_range in slots.split():
                                    if s_range.startswith("["):
                                        continue
                                    if "-" in s_range:
                                        try:
                                            s1, s2 = s_range.split("-")
                                            slot_count += int(s2) - int(s1) + 1
                                        except Exception:
                                            pass
                                    elif s_range.isdigit():
                                        slot_count += 1

                            if is_master:
                                masters_count += 1
                            else:
                                replicas_count += 1

                            discovered.append(DiscoveredClusterNode(
                                id=str(n_id),
                                host=node_host,
                                port=node_port,
                                role=role,
                                is_myself=is_myself,
                                master_id=str(m_id) if m_id else None,
                                link_state=l_state,
                                slots=slots,
                                slot_count=slot_count,
                            ))
                        continue

                    if not isinstance(v, dict):
                        continue

                    n_id = v.get("id") or v.get("node_id") or str(k)
                    raw_addr = str(v.get("addr") or v.get("name") or v.get("endpoint") or k)
                    addr_main = raw_addr.split(",")[0] if "," in raw_addr else raw_addr
                    clean_addr = addr_main.split("@")[0] if "@" in addr_main else addr_main

                    raw_flags = v.get("flags", [])
                    if isinstance(raw_flags, str):
                        flags_list = [f.strip() for f in raw_flags.split(",") if f.strip()]
                    elif isinstance(raw_flags, (list, set, tuple)):
                        flags_list = [str(f) for f in raw_flags]
                    else:
                        flags_list = []

                    is_myself = "myself" in flags_list
                    is_master = "master" in flags_list or v.get("server_type") == "primary" or v.get("role") == "master"
                    role = "master" if is_master else "replica"
                    m_id = v.get("master_id") or v.get("master")
                    if m_id == "-":
                        m_id = None
                    l_state = str(v.get("link_state") or v.get("state") or "connected")

                    node_host = v.get("ip") or host
                    try:
                        node_port = int(v.get("port") or port)
                    except Exception:
                        node_port = port

                    if ":" in clean_addr:
                        hc, pc = clean_addr.rsplit(":", 1)
                        if hc and hc not in ("", "0.0.0.0"):
                            node_host = hc
                        try:
                            pv = int(pc)
                            if pv > 0:
                                node_port = pv
                        except Exception:
                            pass
                    elif clean_addr and clean_addr != "":
                        node_host = clean_addr

                    if is_myself:
                        if not clean_addr or clean_addr.startswith(":") or clean_addr.startswith("0.0.0.0"):
                            node_host = host
                            node_port = port

                    raw_slots = v.get("slots")
                    slots_str = None
                    slot_count = 0
                    if isinstance(raw_slots, list):
                        sp = []
                        for item in raw_slots:
                            if isinstance(item, (list, tuple)) and len(item) == 2:
                                sp.append(f"{item[0]}-{item[1]}")
                                try:
                                    slot_count += int(item[1]) - int(item[0]) + 1
                                except Exception:
                                    pass
                            elif isinstance(item, str):
                                sp.append(item)
                                if "-" in item:
                                    try:
                                        s1, s2 = item.split("-")
                                        slot_count += int(s2) - int(s1) + 1
                                    except Exception:
                                        pass
                                elif item.isdigit():
                                    slot_count += 1
                            elif isinstance(item, int):
                                sp.append(str(item))
                                slot_count += 1
                        slots_str = " ".join(sp) if sp else None
                    elif isinstance(raw_slots, str):
                        slots_str = raw_slots
                        for sr in raw_slots.split():
                            if sr.startswith("["):
                                continue
                            if "-" in sr:
                                try:
                                    s1, s2 = sr.split("-")
                                    slot_count += int(s2) - int(s1) + 1
                                except Exception:
                                    pass
                            elif sr.isdigit():
                                slot_count += 1

                    if is_master:
                        masters_count += 1
                    else:
                        replicas_count += 1

                    discovered.append(DiscoveredClusterNode(
                        id=str(n_id),
                        host=node_host,
                        port=node_port,
                        role=role,
                        is_myself=is_myself,
                        master_id=str(m_id) if m_id else None,
                        link_state=l_state,
                        slots=slots_str,
                        slot_count=slot_count,
                    ))

            # Case B: raw_nodes is a str (raw multiline text)
            elif isinstance(raw_nodes, str):
                for line in raw_nodes.strip().splitlines():
                    parts = line.split()
                    if len(parts) < 8:
                        continue
                    node_id = parts[0]
                    addr_part = parts[1]
                    flags = parts[2].split(",")
                    master_id = parts[3] if parts[3] != "-" else None
                    link_state = parts[7]
                    slots = " ".join(parts[8:]) if len(parts) > 8 else None

                    is_myself = "myself" in flags
                    is_master = "master" in flags
                    role = "master" if is_master else "replica"

                    addr_main = addr_part.split(",")[0] if "," in addr_part else addr_part
                    clean_addr = addr_main.split("@")[0] if "@" in addr_main else addr_main

                    node_host = host
                    node_port = port

                    if ":" in clean_addr:
                        h_cand, p_cand = clean_addr.rsplit(":", 1)
                        if h_cand and h_cand != "" and h_cand != "0.0.0.0":
                            node_host = h_cand
                        else:
                            node_host = host
                        try:
                            p_val = int(p_cand)
                            if p_val > 0:
                                node_port = p_val
                            elif is_myself:
                                node_port = port
                        except Exception:
                            if is_myself:
                                node_port = port
                    elif clean_addr and clean_addr != "":
                        node_host = clean_addr
                        node_port = port

                    if is_myself:
                        if not clean_addr or clean_addr.startswith(":") or clean_addr.startswith("0.0.0.0"):
                            node_host = host
                            node_port = port

                    slot_count = 0
                    if slots:
                        for s_range in slots.split():
                            if s_range.startswith("["):
                                continue
                            if "-" in s_range:
                                try:
                                    s1, s2 = s_range.split("-")
                                    slot_count += int(s2) - int(s1) + 1
                                except Exception:
                                    pass
                            elif s_range.isdigit():
                                slot_count += 1

                    if is_master:
                        masters_count += 1
                    else:
                        replicas_count += 1

                    discovered.append(DiscoveredClusterNode(
                        id=node_id,
                        host=node_host,
                        port=node_port,
                        role=role,
                        is_myself=is_myself,
                        master_id=master_id,
                        link_state=link_state,
                        slots=slots,
                        slot_count=slot_count,
                    ))

            # Sort discovered nodes: masters first by port, then replicas
            discovered.sort(key=lambda n: (0 if n.role == "master" else 1, n.port, n.host))

            logger.info(
                f"Discovered {len(discovered)} cluster node(s) ({masters_count} masters, {replicas_count} replicas) via seed {host}:{port}; cluster_state='{cluster_state}'"
            )
            return ClusterDiscoveryResponse(
                success=True,
                cluster_state=cluster_state,
                total_nodes=len(discovered),
                masters_count=masters_count,
                replicas_count=replicas_count,
                slots_assigned=slots_assigned,
                nodes=discovered,
            )
        except Exception as e:
            logger.error(f"Failed to discover cluster nodes via seed {host}:{port}: {e}", exc_info=True)
            return ClusterDiscoveryResponse(
                success=False,
                error=f"Failed to discover cluster nodes: {str(e)}"
            )
        finally:
            if temp_c:
                try:
                    await temp_c.aclose()
                except Exception:
                    pass


    async def get_status(self) -> ActiveConnectionStatus:
        """Get health check and quick stats for the currently selected active connection."""
        active_conn = self.active_info
        if not active_conn:
            active = get_active_connection(include_password=True)
            if active:
                try:
                    active_conn = await self.activate_connection(active["id"])
                except Exception as e:
                    return ActiveConnectionStatus(
                        connected=False,
                        connection_id=active["id"],
                        connection_name=active["name"],
                        host=active["host"],
                        port=active["port"],
                        db=active["db"],
                        error=str(e),
                    )
            else:
                return ActiveConnectionStatus(connected=False, error="No cluster connected or selected")

        try:
            client = await self.get_client()
            start = time.perf_counter()
            await client.ping()
            latency = (time.perf_counter() - start) * 1000.0

            # Gather stats in parallel
            node_stats = None
            if isinstance(client, RedisCluster):
                node_stats = await self._cluster_node_stats(client)
                primaries = [n for n in node_stats if n.role == "master"]
                if any(n.keys is None for n in primaries):
                    dbsize = await self._total_dbsize(client)
                else:
                    dbsize = sum(n.keys for n in primaries)
            else:
                dbsize = await client.dbsize()
            info_server = await client.info("server")
            info_memory = await client.info("memory")
            info_clients = await client.info("clients")

            # Check cluster info
            is_cluster = False
            cluster_state = None
            cluster_nodes_count = None
            try:
                c_info = await client.info("cluster")
                if c_info.get("cluster_enabled") == 1 or isinstance(client, RedisCluster):
                    is_cluster = True
                    cluster_state = c_info.get("cluster_state", "ok")
                    try:
                        raw_c = await client.execute_command("CLUSTER INFO")
                        if isinstance(raw_c, bytes):
                            raw_c = raw_c.decode("utf-8")
                        if isinstance(raw_c, str):
                            p_info = {}
                            for line in raw_c.splitlines():
                                if ":" in line:
                                    k, v = line.split(":", 1)
                                    p_info[k.strip()] = v.strip()
                            raw_c = p_info
                        if isinstance(raw_c, dict):
                            cluster_state = raw_c.get("cluster_state", cluster_state or "ok")
                            if "cluster_known_nodes" in raw_c:
                                cluster_nodes_count = int(raw_c["cluster_known_nodes"])
                    except Exception:
                        pass

                    if node_stats:
                        cluster_nodes_count = max(cluster_nodes_count or 0, len(node_stats))
                    elif hasattr(client, "get_nodes"):
                        try:
                            nodes = client.get_nodes()
                            if nodes:
                                cluster_nodes_count = max(cluster_nodes_count or 0, len(nodes))
                        except Exception:
                            pass

                    if not cluster_nodes_count:
                        cluster_nodes_count = int(c_info.get("cluster_known_nodes", 1))
            except Exception:
                pass

            return ActiveConnectionStatus(
                connected=True,
                connection_id=active_conn["id"],
                connection_name=active_conn["name"],
                host=active_conn["host"],
                port=active_conn["port"],
                db=active_conn["db"],
                env=active_conn.get("env", "LOCAL"),
                conn_type=active_conn.get("conn_type", "standalone"),
                redis_version=info_server.get("redis_version"),
                latency_ms=round(latency, 2),
                dbsize=dbsize,
                used_memory_human=(
                    format_bytes(sum(n.used_memory or 0 for n in node_stats if n.role == "master"))
                    if node_stats else info_memory.get("used_memory_human")
                ),
                uptime_days=info_server.get("uptime_in_days"),
                connected_clients=info_clients.get("connected_clients"),
                is_cluster=is_cluster,
                cluster_state=cluster_state,
                cluster_nodes_count=cluster_nodes_count,
                node_stats=node_stats,
            )
        except Exception as e:
            logger.warning(f"Failed to fetch active Redis status: {e}")
            return ActiveConnectionStatus(
                connected=False,
                connection_id=active_conn.get("id") if active_conn else None,
                connection_name=active_conn.get("name") if active_conn else None,
                host=active_conn.get("host") if active_conn else None,
                port=active_conn.get("port") if active_conn else None,
                error=str(e),
            )

    @staticmethod
    async def _total_dbsize(client: Any) -> int:
        """Key count for the whole keyspace; on a cluster this sums DBSIZE over all primaries."""
        if isinstance(client, RedisCluster):
            return int(await client.dbsize(target_nodes=RedisCluster.PRIMARIES) or 0)
        return int(await client.dbsize() or 0)

    @staticmethod
    def _replica_masters(client: RedisCluster) -> Dict[str, str]:
        """Map each replica node name to its primary's node name using the slot cache."""
        mapping: Dict[str, str] = {}
        try:
            for slot_nodes in client.nodes_manager.slots_cache.values():
                for replica in slot_nodes[1:]:
                    mapping[replica.name] = slot_nodes[0].name
        except Exception:
            pass
        return mapping

    async def _cluster_node_stats(self, client: RedisCluster) -> List[NodeStat]:
        """Per-node keys, memory and clients for every cluster node (primaries and replicas)."""
        masters = self._replica_masters(client)

        async def node_stat(node: Any) -> NodeStat:
            is_primary = getattr(node, "server_type", "primary") == "primary"
            stat = NodeStat(
                node=node.name,
                role="master" if is_primary else "replica",
                master=None if is_primary else masters.get(node.name),
            )
            try:
                keys, mem, clients = await asyncio.gather(
                    client.dbsize(target_nodes=node),
                    client.info("memory", target_nodes=node),
                    client.info("clients", target_nodes=node),
                )
                stat.keys = int(keys or 0)
                stat.used_memory = int(mem.get("used_memory", 0))
                stat.used_memory_human = mem.get("used_memory_human") or format_bytes(stat.used_memory)
                stat.connected_clients = int(clients.get("connected_clients", 0))
            except Exception as e:
                stat.error = str(e)
            return stat

        stats = await asyncio.gather(*(node_stat(n) for n in client.get_nodes()))
        return sorted(stats, key=lambda s: (s.master or s.node, s.role != "master", s.node))

    @staticmethod
    def _parse_scan_cursor(cursor: Any) -> Any:
        """Normalize an incoming SCAN cursor into an int or a per-node dict."""
        if isinstance(cursor, dict):
            return {str(k): int(v) for k, v in cursor.items()}
        if isinstance(cursor, int):
            return cursor
        text = str(cursor).strip() if cursor is not None else ""
        if not text:
            return 0
        if text.lstrip("-").isdigit():
            return int(text)
        try:
            parsed = json.loads(text)
        except (ValueError, TypeError):
            raise ValueError(f"Invalid SCAN cursor: {cursor!r}")
        if isinstance(parsed, dict):
            return {str(k): int(v) for k, v in parsed.items()}
        if isinstance(parsed, int):
            return parsed
        raise ValueError(f"Invalid SCAN cursor: {cursor!r}")

    async def _scan_cluster_batch(
        self,
        client: RedisCluster,
        cursor: Any,
        pattern: str,
        count: int
    ) -> Tuple[Any, List[Any]]:
        """Run one SCAN step on every primary node, resuming each node from its own cursor."""
        if isinstance(cursor, dict):
            pending = {name: cur for name, cur in cursor.items() if cur != 0}
            next_cursors: Dict[str, int] = {name: 0 for name in cursor}
        else:
            if cursor != 0:
                raise ValueError("Cluster connections require a JSON per-node cursor or 0")
            pending = {node.name: 0 for node in client.get_primaries()}
            next_cursors = dict(pending)

        async def scan_node(name: str, node_cursor: int) -> Tuple[str, int, List[Any]]:
            node = client.get_node(node_name=name)
            if node is None:
                logger.warning(f"Cluster node '{name}' no longer present; skipping its SCAN cursor")
                return name, 0, []
            cur, keys = await client.scan(
                cursor=node_cursor, match=pattern, count=count, target_nodes=node
            )
            return name, int(cur.get(name, 0) if isinstance(cur, dict) else cur), keys

        results = await asyncio.gather(*(scan_node(n, c) for n, c in pending.items()))

        raw_keys: List[Any] = []
        for name, cur, keys in results:
            next_cursors[name] = cur
            raw_keys.extend(keys)

        if all(v == 0 for v in next_cursors.values()):
            return 0, raw_keys
        return json.dumps(next_cursors, sort_keys=True), raw_keys

    async def scan_keys_batch(
        self,
        pattern: str = "*",
        cursor: Any = "0",
        count: int = 50,
        type_filter: Optional[str] = None
    ) -> KeyListResponse:
        """Scan keys using Redis SCAN, and pipeline TYPE & TTL queries for fast display.

        Standalone clients use a plain integer cursor. Cluster clients use a JSON-encoded
        mapping of primary node name to that node's SCAN cursor; 0 means the scan is complete.
        """
        try:
            client = await self.get_client()
            dbsize = await self._total_dbsize(client)
        except ConnectionError:
            return KeyListResponse(keys=[], cursor=0, total_in_db=0, matched_count=0)

        clean_pattern = pattern.strip() if pattern and pattern.strip() else "*"
        scan_cursor = self._parse_scan_cursor(cursor)

        if isinstance(client, RedisCluster):
            cursor_out, raw_keys = await self._scan_cluster_batch(
                client, scan_cursor, clean_pattern, count
            )
        else:
            if isinstance(scan_cursor, dict):
                raise ValueError("Per-node cluster cursor is not valid for a standalone connection")
            new_cursor, raw_keys = await client.scan(cursor=scan_cursor, match=clean_pattern, count=count)
            try:
                cursor_out = int(new_cursor)
            except (TypeError, ValueError):
                cursor_out = 0

        if not raw_keys:
            return KeyListResponse(
                keys=[],
                cursor=cursor_out,
                total_in_db=dbsize,
                matched_count=0
            )

        # Pipeline queries for types and TTLs
        pipe: Pipeline = client.pipeline(transaction=False)
        for k in raw_keys:
            pipe.type(k)
            pipe.ttl(k)
        results = await pipe.execute()

        key_items: List[KeyItem] = []
        for i, k in enumerate(raw_keys):
            k_type = results[i * 2]
            k_ttl = results[i * 2 + 1]

            if type_filter and type_filter.lower() != "all" and k_type.lower() != type_filter.lower():
                continue

            key_items.append(KeyItem(
                name=k,
                type=k_type,
                ttl=k_ttl,
                memory_bytes=None
            ))

        return KeyListResponse(
            keys=key_items,
            cursor=cursor_out,
            total_in_db=dbsize,
            matched_count=len(key_items)
        )

    async def get_key_detail(self, key_name: str) -> Optional[Dict[str, Any]]:
        """Retrieve rich metadata and value contents for a single Redis key."""
        client = await self.get_client()

        # Check key existence and type
        try:
            k_type = await client.type(key_name)
        except Exception as e:
            logger.error(f"Error checking key type for '{key_name}': {e}", exc_info=True)
            raise

        if not k_type or str(k_type).lower() == "none":
            return None

        str_type = str(k_type).lower()

        # Safely retrieve TTL without brittle pipelines
        try:
            k_ttl = await client.ttl(key_name)
            k_ttl = int(k_ttl)
        except Exception:
            k_ttl = -1

        # Safely retrieve encoding (may not be supported on cluster nodes or restricted)
        k_encoding = "raw"
        try:
            enc = await client.object("encoding", key_name)
            if enc:
                k_encoding = enc if isinstance(enc, str) else enc.decode("utf-8", errors="replace")
        except Exception:
            k_encoding = "raw"

        # Safely retrieve memory usage (may not be supported or allowed)
        k_memory = None
        try:
            mem = await client.memory_usage(key_name)
            if mem is not None:
                k_memory = int(mem)
        except Exception:
            k_memory = None

        # Cluster keyslot and owning node
        slot = None
        node_name = None
        if isinstance(client, RedisCluster):
            try:
                from redis.cluster import key_slot
                slot = key_slot(key_name.encode("utf-8"))
            except Exception:
                try:
                    slot = int(await client.execute_command("CLUSTER", "KEYSLOT", key_name))
                except Exception:
                    slot = None

            if slot is not None:
                try:
                    target_node = client.nodes_manager.get_node_from_slot(slot)
                    if target_node:
                        server_type = getattr(target_node, "server_type", "primary")
                        node_name = f"{target_node.name} ({server_type.capitalize()})"
                except Exception as e:
                    logger.debug(f"Could not map slot {slot} to node: {e}")

        detail: Dict[str, Any] = {
            "name": key_name,
            "type": str_type,
            "ttl": k_ttl,
            "encoding": str(k_encoding) if k_encoding else "raw",
            "memory_bytes": k_memory,
            "length": 0,
            "value": None,
            "fields": None,
            "is_json": False,
            "slot": slot,
            "node": node_name,
        }

        # Value inspection based on type
        if str_type == "string":
            try:
                raw_val = await client.get(key_name)
            except Exception as e:
                raw_val = f"<Error reading string: {e}>"

            try:
                detail["length"] = await client.strlen(key_name)
            except Exception:
                detail["length"] = len(raw_val) if raw_val is not None else 0

            detail["value"] = raw_val
            if raw_val and isinstance(raw_val, str):
                try:
                    import json
                    parsed = json.loads(raw_val)
                    detail["is_json"] = True
                    detail["parsed_json"] = parsed
                except Exception:
                    detail["is_json"] = False

        elif str_type == "hash":
            try:
                hlen: Optional[int] = int(await client.hlen(key_name))
            except Exception:
                hlen = None
            detail["length"] = hlen or 0

            # Never HGETALL unless HLEN proved the hash is small; otherwise a single capped HSCAN.
            raw_hash: Dict[Any, Any] = {}
            fields_cursor = 0
            try:
                if hlen is not None and hlen <= HASH_DETAIL_PAGE_SIZE:
                    raw_hash = await client.hgetall(key_name)
                else:
                    fields_cursor, raw_hash = await client.hscan(key_name, cursor=0, count=HASH_DETAIL_PAGE_SIZE)
            except Exception:
                try:
                    fields_cursor, raw_hash = await client.hscan(key_name, cursor=0, count=HASH_DETAIL_PAGE_SIZE)
                except Exception:
                    fields_cursor, raw_hash = 0, {}

            try:
                fields_cursor = int(fields_cursor)
            except Exception:
                fields_cursor = 0
            fields_list = [{"field": str(f), "value": str(v)} for f, v in (raw_hash or {}).items()]
            detail["fields"] = fields_list
            detail["fields_cursor"] = fields_cursor
            detail["has_more_fields"] = fields_cursor != 0

        elif str_type == "list":
            try:
                llen = await client.llen(key_name)
            except Exception:
                llen = 0
            detail["length"] = llen
            try:
                items = await client.lrange(key_name, 0, 99)
            except Exception:
                items = []
            detail["value"] = [str(x) if not isinstance(x, (int, float, bool)) else x for x in items]

        elif str_type == "set":
            try:
                scard = await client.scard(key_name)
            except Exception:
                scard = 0
            detail["length"] = scard
            members = []
            try:
                if scard <= 100:
                    members = await client.smembers(key_name)
                else:
                    _, members = await client.sscan(key_name, cursor=0, count=100)
            except Exception:
                try:
                    members = await client.smembers(key_name)
                except Exception:
                    members = []
            detail["value"] = [str(m) for m in members]

        elif str_type == "zset":
            try:
                zcard = await client.zcard(key_name)
            except Exception:
                zcard = 0
            detail["length"] = zcard
            try:
                items_scores = await client.zrange(key_name, 0, 99, withscores=True)
            except Exception:
                items_scores = []
            detail["value"] = [{"member": str(m), "score": s} for m, s in items_scores]

        elif str_type == "stream":
            try:
                xlen = await client.xlen(key_name)
            except Exception:
                xlen = 0
            detail["length"] = xlen
            try:
                entries = await client.xrevrange(key_name, count=50)
                formatted_entries = []
                for entry_id, field_dict in entries:
                    formatted_entries.append({
                        "id": str(entry_id),
                        "fields": {str(k): str(v) for k, v in field_dict.items()} if isinstance(field_dict, dict) else field_dict
                    })
                detail["value"] = formatted_entries
            except Exception:
                detail["value"] = []

        elif "json" in str_type:
            try:
                raw_json = await client.execute_command("JSON.GET", key_name)
                detail["value"] = raw_json
                if raw_json:
                    import json
                    detail["parsed_json"] = json.loads(raw_json) if isinstance(raw_json, str) else raw_json
                    detail["is_json"] = True
            except Exception as e:
                detail["value"] = f"Error reading JSON: {e}"

        else:
            try:
                raw = await client.get(key_name)
                detail["value"] = raw
            except Exception:
                detail["value"] = f"Unsupported Redis type: {k_type}"

        return detail

    async def scan_hash_fields(
        self,
        key_name: str,
        cursor: int = 0,
        count: int = 100,
        match: Optional[str] = None,
    ) -> Dict[str, Any]:
        """
        Page through a hash with HSCAN. With a MATCH filter a single HSCAN step can return
        nothing, so take a few bounded steps until roughly `count` fields are collected.
        """
        client = await self.get_client()
        try:
            total = int(await client.hlen(key_name))
        except Exception:
            total = 0

        clean_match = match if match and match.strip() else None
        collected: Dict[Any, Any] = {}
        next_cursor = int(cursor)
        for _ in range(HASH_SCAN_MAX_STEPS):
            next_cursor, batch = await client.hscan(key_name, cursor=next_cursor, match=clean_match, count=count)
            next_cursor = int(next_cursor)
            if batch:
                collected.update(batch)
            if next_cursor == 0 or len(collected) >= count:
                break

        return {
            "cursor": next_cursor,
            "fields": [{"field": str(f), "value": str(v)} for f, v in collected.items()],
            "total": total,
        }

    async def get_key_full_value(self, key_name: str, max_items: int = DOWNLOAD_MAX_ITEMS) -> Optional[Dict[str, Any]]:
        """
        Read a key's full value for download using incremental HSCAN/LRANGE/SSCAN/ZRANGE/XRANGE
        loops, capped at `max_items` entries. Returns None if the key does not exist.
        """
        client = await self.get_client()
        k_type = await client.type(key_name)
        str_type = str(k_type).lower() if k_type else "none"
        if str_type == "none":
            return None

        chunk = DOWNLOAD_CHUNK_SIZE
        truncated = False
        total = 0
        value: Any = None

        if str_type == "string":
            value = await client.get(key_name)
            total = 1
        elif str_type == "hash":
            total = int(await client.hlen(key_name))
            fields: Dict[Any, Any] = {}
            cursor = 0
            while True:
                cursor, batch = await client.hscan(key_name, cursor=cursor, count=chunk)
                cursor = int(cursor)
                if batch:
                    fields.update(batch)
                if len(fields) >= max_items:
                    truncated = cursor != 0 or len(fields) > max_items
                    break
                if cursor == 0:
                    break
            value = [(str(f), str(v)) for f, v in list(fields.items())[:max_items]]
        elif str_type == "list":
            total = int(await client.llen(key_name))
            limit = min(total, max_items)
            items: List[Any] = []
            start = 0
            while start < limit:
                end = min(start + chunk, limit) - 1
                batch = await client.lrange(key_name, start, end)
                if not batch:
                    break
                items.extend(batch)
                start += len(batch)
            value = [str(x) for x in items[:limit]]
            truncated = total > max_items
        elif str_type == "set":
            total = int(await client.scard(key_name))
            members: Dict[Any, None] = {}
            cursor = 0
            while True:
                cursor, batch = await client.sscan(key_name, cursor=cursor, count=chunk)
                cursor = int(cursor)
                for m in batch or []:
                    members[m] = None
                if len(members) >= max_items:
                    truncated = cursor != 0 or len(members) > max_items
                    break
                if cursor == 0:
                    break
            value = [str(m) for m in list(members)[:max_items]]
        elif str_type == "zset":
            # Rank-ordered ZRANGE chunks: sorted output and no duplicates (unlike ZSCAN).
            total = int(await client.zcard(key_name))
            limit = min(total, max_items)
            pairs: List[Any] = []
            start = 0
            while start < limit:
                end = min(start + chunk, limit) - 1
                batch = await client.zrange(key_name, start, end, withscores=True)
                if not batch:
                    break
                pairs.extend(batch)
                start += len(batch)
            value = [(str(m), s) for m, s in pairs[:limit]]
            truncated = total > max_items
        elif str_type == "stream":
            total = int(await client.xlen(key_name))
            entries: List[Dict[str, Any]] = []
            start_id = "-"
            while len(entries) < max_items:
                batch = await client.xrange(key_name, min=start_id, max="+", count=min(chunk, max_items - len(entries)))
                if not batch:
                    break
                for entry_id, field_dict in batch:
                    entries.append({
                        "id": str(entry_id),
                        "fields": {str(k): str(v) for k, v in field_dict.items()} if isinstance(field_dict, dict) else field_dict,
                    })
                if len(batch) < chunk:
                    break
                start_id = f"({batch[-1][0]}"
            value = entries[:max_items]
            truncated = total > max_items
        elif "json" in str_type:
            raw_json = await client.execute_command("JSON.GET", key_name)
            value = json.loads(raw_json) if isinstance(raw_json, str) else raw_json
            total = 1
        else:
            raise ValueError(f"Download is not supported for Redis type '{k_type}'")

        return {"name": key_name, "type": str_type, "value": value, "total": total, "truncated": truncated}

    async def update_key_ttl(self, key_name: str, seconds: int) -> bool:
        """Update or remove TTL on a key."""
        client = await self.get_client()
        if seconds < 0:
            return bool(await client.persist(key_name))
        else:
            return bool(await client.expire(key_name, seconds))

    async def set_hash_field(self, key_name: str, field: str, value: str) -> int:
        """Set a field on a hash key."""
        client = await self.get_client()
        return await client.hset(key_name, field, value)

    async def delete_hash_field(self, key_name: str, field: str) -> int:
        """Delete a field from a hash key."""
        client = await self.get_client()
        return await client.hdel(key_name, field)

    async def get_clients(self) -> List[Dict[str, Any]]:
        """Retrieve list of connected clients from active Redis instance."""
        client = await self.get_client()
        raw_clients = await client.client_list()

        def format_duration(seconds: int) -> str:
            if seconds < 60:
                return f"{seconds}s"
            elif seconds < 3600:
                m, s = divmod(seconds, 60)
                return f"{m}m {s}s"
            else:
                h, rem = divmod(seconds, 3600)
                m, _ = divmod(rem, 60)
                return f"{h}h {m}m"

        parsed_clients = []
        for c in raw_clients:
            addr = c.get("addr", "")
            ip = addr.split(":")[0] if ":" in addr else addr
            port = addr.split(":")[1] if ":" in addr else ""
            age_sec = int(c.get("age", 0))
            idle_sec = int(c.get("idle", 0))

            parsed_clients.append({
                "id": str(c.get("id", "")),
                "addr": addr,
                "ip": ip,
                "port": port,
                "laddr": c.get("laddr", ""),
                "fd": c.get("fd"),
                "name": c.get("name") or "(unnamed)",
                "age": age_sec,
                "age_human": format_duration(age_sec),
                "idle": idle_sec,
                "idle_human": format_duration(idle_sec),
                "flags": c.get("flags", ""),
                "db": c.get("db", 0),
                "cmd": c.get("cmd", ""),
                "user": c.get("user") or "default",
                "tot_mem": c.get("tot-mem"),
                "resp": c.get("resp", "2"),
                "events": c.get("events", ""),
            })
        return parsed_clients

    async def kill_client(self, client_id: str) -> bool:
        """Kill a connected client by its ID."""
        client = await self.get_client()
        res = await client.execute_command("CLIENT", "KILL", "ID", str(client_id))
        return bool(res)

    @staticmethod
    async def _annotate_node_keys(client: RedisCluster, node_details: List[ClusterNodeDetail]) -> None:
        """Fill ClusterNodeDetail.keys with each node's DBSIZE where the node is reachable."""
        by_name = {n.name: n for n in client.get_nodes()}

        async def fill(detail: ClusterNodeDetail) -> None:
            node = by_name.get(detail.addr) or by_name.get(f"{detail.ip}:{detail.port}")
            if node is None:
                return
            try:
                detail.keys = int(await client.dbsize(target_nodes=node))
            except Exception:
                detail.keys = None

        await asyncio.gather(*(fill(d) for d in node_details))

    async def get_topology(self) -> ClusterTopologyResponse:
        """Retrieve cluster topology or master-replica node details."""
        client = await self.get_client()
        conn_info = self.active_info or {}

        # Check if cluster enabled
        is_cluster = False
        try:
            c_info = await client.info("cluster")
            is_cluster = (c_info.get("cluster_enabled") == 1)
        except Exception:
            pass
        if not is_cluster:
            is_cluster = isinstance(client, RedisCluster) or ((conn_info.get("conn_type") or "").lower() == "cluster")

        def parse_nodes_text(text: str) -> List[ClusterNodeDetail]:
            parsed = []
            for line in text.strip().splitlines():
                parts = line.split()
                if len(parts) < 8:
                    continue
                node_id = parts[0]
                addr_part = parts[1]
                clean_addr = addr_part.split("@")[0] if "@" in addr_part else addr_part
                ip = clean_addr.split(":")[0] if ":" in clean_addr else clean_addr
                try:
                    port = int(clean_addr.split(":")[1]) if ":" in clean_addr else 6379
                except ValueError:
                    port = 6379
                flags = parts[2].split(",")
                master_id = parts[3] if parts[3] != "-" else None
                ping_sent = int(parts[4]) if parts[4].isdigit() else 0
                pong_recv = int(parts[5]) if parts[5].isdigit() else 0
                link_state = parts[7]
                slots = " ".join(parts[8:]) if len(parts) > 8 else None

                is_master = "master" in flags
                role = "master" if is_master else "replica"

                slot_count = 0
                if slots:
                    for s_range in slots.split():
                        if s_range.startswith("["):
                            continue
                        if "-" in s_range:
                            try:
                                s_start, s_end = s_range.split("-")
                                slot_count += int(s_end) - int(s_start) + 1
                            except (ValueError, TypeError):
                                pass
                        elif s_range.isdigit():
                            slot_count += 1

                parsed.append(ClusterNodeDetail(
                    id=node_id,
                    addr=clean_addr,
                    ip=ip,
                    port=port,
                    role=role,
                    master_id=master_id,
                    flags=flags,
                    link_state=link_state,
                    slots=slots,
                    slot_count=slot_count,
                    ping_sent=ping_sent,
                    pong_recv=pong_recv,
                ))
            return parsed

        def parse_nodes_dict(d: dict) -> List[ClusterNodeDetail]:
            # If values are raw string / bytes
            for v in d.values():
                if isinstance(v, (str, bytes)):
                    txt = v.decode("utf-8", errors="replace") if isinstance(v, bytes) else v
                    res = parse_nodes_text(txt)
                    if res:
                        return res

            parsed = []
            for k, v in d.items():
                if not isinstance(v, dict):
                    continue
                n_id = v.get("id") or v.get("node_id") or str(k)
                raw_addr = v.get("addr") or v.get("name") or str(k)
                clean_addr = raw_addr.split("@")[0] if "@" in str(raw_addr) else str(raw_addr)
                ip = v.get("ip") or (clean_addr.split(":")[0] if ":" in clean_addr else "127.0.0.1")
                try:
                    port = int(v.get("port") or (clean_addr.split(":")[1] if ":" in clean_addr else 6379))
                except (ValueError, TypeError):
                    port = 6379

                raw_flags = v.get("flags", [])
                if isinstance(raw_flags, str):
                    flags_list = [f.strip() for f in raw_flags.split(",") if f.strip()]
                elif isinstance(raw_flags, list):
                    flags_list = [str(f) for f in raw_flags]
                else:
                    flags_list = []

                is_m = "master" in flags_list or v.get("server_type") == "primary" or v.get("role") == "master"
                role = "master" if is_m else "replica"
                m_id = v.get("master_id") or v.get("master")
                if m_id == "-":
                    m_id = None
                l_state = str(v.get("link_state") or v.get("state") or "connected")

                raw_slots = v.get("slots")
                slots_str = None
                s_count = 0
                if isinstance(raw_slots, list):
                    str_parts = []
                    for item in raw_slots:
                        if isinstance(item, (list, tuple)) and len(item) == 2:
                            str_parts.append(f"{item[0]}-{item[1]}")
                            try:
                                s_count += int(item[1]) - int(item[0]) + 1
                            except (ValueError, TypeError):
                                pass
                        elif isinstance(item, str):
                            str_parts.append(item)
                            if "-" in item:
                                try:
                                    s1, s2 = item.split("-")
                                    s_count += int(s2) - int(s1) + 1
                                except (ValueError, TypeError):
                                    pass
                            elif item.isdigit():
                                s_count += 1
                        elif isinstance(item, int):
                            str_parts.append(str(item))
                            s_count += 1
                    slots_str = " ".join(str_parts) if str_parts else None
                elif isinstance(raw_slots, str):
                    slots_str = raw_slots
                    for s_range in raw_slots.split():
                        if "-" in s_range:
                            try:
                                s_start, s_end = s_range.split("-")
                                s_count += int(s_end) - int(s_start) + 1
                            except (ValueError, TypeError):
                                pass
                        elif s_range.isdigit():
                            s_count += 1

                parsed.append(ClusterNodeDetail(
                    id=str(n_id),
                    addr=clean_addr,
                    ip=ip,
                    port=port,
                    role=role,
                    master_id=str(m_id) if m_id else None,
                    flags=flags_list,
                    link_state=l_state,
                    slots=slots_str,
                    slot_count=s_count,
                    ping_sent=int(v.get("ping_sent") or 0),
                    pong_recv=int(v.get("pong_recv") or 0),
                ))
            return parsed

        def parse_cluster_info(raw_info) -> Tuple[str, int]:
            c_st = "ok"
            s_assigned = 16384
            if isinstance(raw_info, dict):
                first_val = next(iter(raw_info.values()), None)
                if isinstance(first_val, dict):
                    raw_info = first_val
                elif isinstance(first_val, (str, bytes)):
                    raw_info = first_val.decode("utf-8", errors="replace") if isinstance(first_val, bytes) else first_val

            if isinstance(raw_info, bytes):
                raw_info = raw_info.decode("utf-8", errors="replace")

            if isinstance(raw_info, dict):
                c_st = str(raw_info.get("cluster_state") or raw_info.get(b"cluster_state") or "ok")
                try:
                    s_assigned = int(raw_info.get("cluster_slots_assigned") or raw_info.get(b"cluster_slots_assigned") or 16384)
                except (ValueError, TypeError):
                    s_assigned = 16384
            elif isinstance(raw_info, str):
                for line in raw_info.splitlines():
                    if line.startswith("cluster_state:"):
                        c_st = line.split(":")[1].strip()
                    elif line.startswith("cluster_slots_assigned:"):
                        try:
                            s_assigned = int(line.split(":")[1].strip())
                        except ValueError:
                            pass
            return c_st, s_assigned

        if is_cluster:
            node_details: List[ClusterNodeDetail] = []
            c_state = "ok"
            slots_assigned = 16384

            # Attempt 1: Execute CLUSTER NODES on active client
            try:
                raw_nodes = None
                if isinstance(client, RedisCluster):
                    try:
                        raw_nodes = await client.execute_command("CLUSTER NODES", target_nodes="default")
                    except Exception:
                        try:
                            raw_nodes = await client.execute_command("CLUSTER NODES")
                        except Exception:
                            pass
                else:
                    raw_nodes = await client.execute_command("CLUSTER NODES")

                if isinstance(raw_nodes, bytes):
                    raw_nodes = raw_nodes.decode("utf-8", errors="replace")
                if isinstance(raw_nodes, str):
                    node_details = parse_nodes_text(raw_nodes)
                elif isinstance(raw_nodes, dict):
                    node_details = parse_nodes_dict(raw_nodes)
            except Exception:
                pass

            # Fetch cluster info
            try:
                cluster_info_raw = await client.execute_command("CLUSTER INFO")
                c_state, slots_assigned = parse_cluster_info(cluster_info_raw)
            except Exception:
                pass

            # Attempt 2: If node_details is empty and RedisCluster, try per-node target
            if not node_details and isinstance(client, RedisCluster):
                try:
                    for n in client.get_nodes():
                        try:
                            res = await client.execute_command("CLUSTER NODES", target_nodes=n)
                            if isinstance(res, bytes):
                                res = res.decode("utf-8", errors="replace")
                            if isinstance(res, str):
                                node_details = parse_nodes_text(res)
                            elif isinstance(res, dict):
                                node_details = parse_nodes_dict(res)
                            if node_details:
                                break
                        except Exception:
                            continue
                except Exception:
                    pass

            # Attempt 3: Direct standalone connection to seed nodes to query Redis directly
            if not node_details:
                seed_host = conn_info.get("host", "127.0.0.1")
                seed_port = int(conn_info.get("port", 6379))
                candidate_endpoints = [(seed_host, seed_port)]
                raw_cluster_nodes = conn_info.get("cluster_nodes")
                if raw_cluster_nodes:
                    try:
                        parsed_cn = json.loads(raw_cluster_nodes) if isinstance(raw_cluster_nodes, str) else raw_cluster_nodes
                        if isinstance(parsed_cn, list):
                            for cn in parsed_cn:
                                if isinstance(cn, dict) and "host" in cn:
                                    candidate_endpoints.append((cn["host"], int(cn.get("port", 6379))))
                                elif isinstance(cn, str) and ":" in cn:
                                    h, p = cn.split(":")
                                    candidate_endpoints.append((h.strip(), int(p.strip())))
                    except Exception:
                        pass

                for ep_host, ep_port in candidate_endpoints:
                    temp_c = None
                    try:
                        temp_c = aioredis.Redis(
                            host=ep_host,
                            port=ep_port,
                            username=conn_info.get("username") or None,
                            password=conn_info.get("password") or None,
                            ssl=bool(conn_info.get("use_tls", False)),
                            decode_responses=True,
                            socket_connect_timeout=2.0,
                            socket_timeout=3.0,
                        )
                        direct_raw_nodes = await temp_c.execute_command("CLUSTER NODES")
                        if isinstance(direct_raw_nodes, bytes):
                            direct_raw_nodes = direct_raw_nodes.decode("utf-8", errors="replace")
                        if isinstance(direct_raw_nodes, str):
                            node_details = parse_nodes_text(direct_raw_nodes)

                        if node_details:
                            try:
                                direct_info = await temp_c.execute_command("CLUSTER INFO")
                                c_state, slots_assigned = parse_cluster_info(direct_info)
                            except Exception:
                                pass
                            break
                    except Exception:
                        pass
                    finally:
                        if temp_c:
                            try:
                                await temp_c.aclose()
                            except Exception:
                                pass

            # Attempt 4: Fallback to RedisCluster.get_nodes()
            if not node_details and isinstance(client, RedisCluster):
                try:
                    for n in client.get_nodes():
                        n_host = getattr(n, "host", "127.0.0.1")
                        n_port = int(getattr(n, "port", 6379))
                        n_name = getattr(n, "name", f"{n_host}:{n_port}")
                        n_type = getattr(n, "server_type", "primary")
                        is_m = n_type == "primary"
                        node_details.append(ClusterNodeDetail(
                            id=n_name,
                            addr=f"{n_host}:{n_port}",
                            ip=n_host,
                            port=n_port,
                            role="master" if is_m else "replica",
                            master_id=None,
                            flags=["myself", "master"] if is_m else ["slave"],
                            link_state="connected",
                            slots=None,
                            slot_count=0,
                        ))
                except Exception:
                    pass

            if node_details and isinstance(client, RedisCluster):
                await self._annotate_node_keys(client, node_details)

            if node_details:
                masters_count = sum(1 for n in node_details if n.role == "master")
                replicas_count = sum(1 for n in node_details if n.role == "replica")
                return ClusterTopologyResponse(
                    is_cluster=True,
                    cluster_state=c_state,
                    total_nodes=len(node_details),
                    masters_count=masters_count,
                    replicas_count=replicas_count,
                    slots_assigned=slots_assigned,
                    nodes=node_details
                )

        # Standalone / Replication Topology
        rep_info = await client.info("replication")
        role = rep_info.get("role", "master")
        slaves_count = int(rep_info.get("connected_slaves", 0))

        host = conn_info.get("host", "localhost")
        port = int(conn_info.get("port", 6379))
        nodes_list: List[ClusterNodeDetail] = [
            ClusterNodeDetail(
                id=rep_info.get("master_replid", "node-master"),
                addr=f"{host}:{port}",
                ip=host,
                port=port,
                role=role,
                master_id=None if role == "master" else f"{rep_info.get('master_host')}:{rep_info.get('master_port')}",
                flags=["myself", role],
                link_state="connected",
                slots="0-16383 (All keys)" if role == "master" else None,
                slot_count=16384 if role == "master" else 0
            )
        ]

        try:
            nodes_list[0].keys = int(await client.dbsize())
        except Exception:
            pass

        for i in range(slaves_count):
            slave_str = rep_info.get(f"slave{i}")
            if slave_str:
                slave_dict = dict(item.split("=") for item in slave_str.split(",") if "=" in item)
                s_ip = slave_dict.get("ip", "unknown")
                s_port = int(slave_dict.get("port", 6379))
                nodes_list.append(ClusterNodeDetail(
                    id=f"replica-{i}",
                    addr=f"{s_ip}:{s_port}",
                    ip=s_ip,
                    port=s_port,
                    role="replica",
                    master_id=nodes_list[0].id,
                    flags=["replica"],
                    link_state=slave_dict.get("state", "online"),
                    slots=None,
                    slot_count=0
                ))

        return ClusterTopologyResponse(
            is_cluster=False,
            cluster_state="standalone",
            total_nodes=len(nodes_list),
            masters_count=1 if role == "master" else 0,
            replicas_count=slaves_count,
            slots_assigned=16384,
            nodes=nodes_list,
            replication=rep_info
        )

    def _parse_slowlog_entry(self, item: Any, node_label: Optional[str] = None) -> SlowlogEntry:
        if isinstance(item, dict):
            entry_id = item.get("id", 0)
            timestamp = item.get("start_time", 0)
            duration_us = item.get("duration", 0)
            cmd_raw = item.get("command", [])
            client_addr = item.get("client_address")
            client_name = item.get("client_name")
        elif isinstance(item, (list, tuple)):
            entry_id = item[0] if len(item) > 0 else 0
            timestamp = item[1] if len(item) > 1 else 0
            duration_us = item[2] if len(item) > 2 else 0
            cmd_raw = item[3] if len(item) > 3 else []
            client_addr = item[4] if len(item) > 4 else None
            client_name = item[5] if len(item) > 5 else None
        else:
            entry_id, timestamp, duration_us, cmd_raw, client_addr, client_name = 0, 0, 0, [], None, None

        command = []
        if isinstance(cmd_raw, (list, tuple)):
            for arg in cmd_raw:
                if isinstance(arg, bytes):
                    command.append(arg.decode("utf-8", errors="replace"))
                else:
                    command.append(str(arg))
        elif isinstance(cmd_raw, bytes):
            command.append(cmd_raw.decode("utf-8", errors="replace"))
        elif cmd_raw:
            command.append(str(cmd_raw))

        if isinstance(client_addr, bytes):
            client_addr = client_addr.decode("utf-8", errors="replace")
        if isinstance(client_name, bytes):
            client_name = client_name.decode("utf-8", errors="replace")

        time_str = "Unknown"
        if timestamp:
            try:
                time_str = datetime.datetime.fromtimestamp(int(timestamp)).strftime("%Y-%m-%d %H:%M:%S")
            except Exception:
                time_str = str(timestamp)

        duration_ms = round(int(duration_us) / 1000.0, 3)

        return SlowlogEntry(
            id=int(entry_id),
            timestamp=int(timestamp),
            time_str=time_str,
            duration_us=int(duration_us),
            duration_ms=duration_ms,
            command=command,
            client_ip=str(client_addr) if client_addr else None,
            client_name=str(client_name) if client_name else None,
            node=node_label,
        )

    async def get_slowlog(self, limit: int = 100) -> SlowlogResponse:
        """Query SLOWLOG GET from standalone Redis or cluster nodes."""
        client = await self.get_client()
        limit = max(1, min(1000, limit))
        entries: List[SlowlogEntry] = []
        total_len = 0
        slower_than_us = None
        max_len = None

        if isinstance(client, RedisCluster):
            nodes = client.get_primaries() or client.get_nodes()
            for node in nodes:
                node_label = f"{node.host}:{node.port}"
                try:
                    raw_entries = await client.execute_command("SLOWLOG", "GET", limit, target_nodes=node)
                    if isinstance(raw_entries, list):
                        for item in raw_entries:
                            entries.append(self._parse_slowlog_entry(item, node_label=node_label))
                    node_len = await client.execute_command("SLOWLOG", "LEN", target_nodes=node)
                    if isinstance(node_len, int):
                        total_len += node_len
                except Exception:
                    continue

            try:
                cfg = await client.execute_command("CONFIG", "GET", "slowlog-log-slower-than", target_nodes="default")
                if isinstance(cfg, dict):
                    slower_than_us = int(cfg.get("slowlog-log-slower-than", 10000))
                elif isinstance(cfg, (list, tuple)) and len(cfg) >= 2:
                    slower_than_us = int(cfg[1])
            except Exception:
                pass

            try:
                cfg_max = await client.execute_command("CONFIG", "GET", "slowlog-max-len", target_nodes="default")
                if isinstance(cfg_max, dict):
                    max_len = int(cfg_max.get("slowlog-max-len", 128))
                elif isinstance(cfg_max, (list, tuple)) and len(cfg_max) >= 2:
                    max_len = int(cfg_max[1])
            except Exception:
                pass

            entries.sort(key=lambda x: (x.timestamp, x.id), reverse=True)
            entries = entries[:limit]
        else:
            conn_info = self.active_info or {}
            host = conn_info.get("host", "127.0.0.1")
            port = conn_info.get("port", 6379)
            node_label = f"{host}:{port}"
            try:
                raw_entries = await client.slowlog_get(limit)
                for item in raw_entries:
                    entries.append(self._parse_slowlog_entry(item, node_label=node_label))
            except Exception:
                try:
                    raw_entries = await client.execute_command("SLOWLOG", "GET", limit)
                    if isinstance(raw_entries, list):
                        for item in raw_entries:
                            entries.append(self._parse_slowlog_entry(item, node_label=node_label))
                except Exception:
                    pass

            try:
                total_len = await client.slowlog_len()
            except Exception:
                total_len = len(entries)

            try:
                cfg = await client.config_get("slowlog-log-slower-than")
                if isinstance(cfg, dict):
                    slower_than_us = int(cfg.get("slowlog-log-slower-than", 10000))
            except Exception:
                pass

            try:
                cfg_max = await client.config_get("slowlog-max-len")
                if isinstance(cfg_max, dict):
                    max_len = int(cfg_max.get("slowlog-max-len", 128))
            except Exception:
                pass

            entries.sort(key=lambda x: (x.timestamp, x.id), reverse=True)

        return SlowlogResponse(
            entries=entries,
            total_len=total_len or len(entries),
            slower_than_us=slower_than_us,
            max_len=max_len,
        )

    async def reset_slowlog(self) -> bool:
        """Clear SLOWLOG buffer on standalone instance or across all cluster nodes."""
        client = await self.get_client()
        if isinstance(client, RedisCluster):
            nodes = client.get_primaries() or client.get_nodes()
            for node in nodes:
                try:
                    await client.execute_command("SLOWLOG", "RESET", target_nodes=node)
                except Exception:
                    pass
        else:
            try:
                await client.slowlog_reset()
            except Exception:
                await client.execute_command("SLOWLOG", "RESET")
        return True

    async def get_memory_overview(self) -> MemoryOverviewResponse:
        """Fetch memory stats, peak, fragmentation ratio, hit ratio, and keyspace count."""
        client = await self.get_client()

        used_mem = 0
        used_mem_peak = 0
        used_mem_rss = 0
        maxmemory = 0
        maxmemory_policy = "noeviction"
        hits = 0
        misses = 0

        if isinstance(client, RedisCluster):
            nodes = client.get_primaries() or client.get_nodes()
            for node in nodes:
                try:
                    mem_info = await client.execute_command("INFO", "memory", target_nodes=node)
                    if isinstance(mem_info, bytes):
                        mem_info = mem_info.decode("utf-8", errors="replace")
                    mem_dict = {}
                    if isinstance(mem_info, str):
                        for line in mem_info.splitlines():
                            if ":" in line and not line.startswith("#"):
                                k, v = line.split(":", 1)
                                mem_dict[k.strip()] = v.strip()
                    elif isinstance(mem_info, dict):
                        mem_dict = mem_info

                    used_mem += int(mem_dict.get("used_memory", 0))
                    used_mem_peak = max(used_mem_peak, int(mem_dict.get("used_memory_peak", 0)))
                    used_mem_rss += int(mem_dict.get("used_memory_rss", 0))
                    maxmemory += int(mem_dict.get("maxmemory", 0))
                    if "maxmemory_policy" in mem_dict:
                        maxmemory_policy = mem_dict["maxmemory_policy"]
                except Exception:
                    pass

                try:
                    stats_info = await client.execute_command("INFO", "stats", target_nodes=node)
                    if isinstance(stats_info, bytes):
                        stats_info = stats_info.decode("utf-8", errors="replace")
                    stats_dict = {}
                    if isinstance(stats_info, str):
                        for line in stats_info.splitlines():
                            if ":" in line and not line.startswith("#"):
                                k, v = line.split(":", 1)
                                stats_dict[k.strip()] = v.strip()
                    elif isinstance(stats_info, dict):
                        stats_dict = stats_info

                    hits += int(stats_dict.get("keyspace_hits", 0))
                    misses += int(stats_dict.get("keyspace_misses", 0))
                except Exception:
                    pass
        else:
            mem_info = await client.info("memory")
            stats_info = await client.info("stats")
            used_mem = int(mem_info.get("used_memory", 0))
            used_mem_peak = int(mem_info.get("used_memory_peak", 0))
            used_mem_rss = int(mem_info.get("used_memory_rss", 0))
            maxmemory = int(mem_info.get("maxmemory", 0))
            maxmemory_policy = mem_info.get("maxmemory_policy", "noeviction")
            hits = int(stats_info.get("keyspace_hits", 0))
            misses = int(stats_info.get("keyspace_misses", 0))

        try:
            dbsize = await self._total_dbsize(client)
        except Exception:
            dbsize = 0

        # Fragmentation ratio calculation
        if used_mem > 0 and used_mem_rss > 0:
            frag_ratio = round(used_mem_rss / used_mem, 2)
        else:
            frag_ratio = 1.0

        if frag_ratio < 0.9:
            frag_status = "warning"
        elif frag_ratio <= 1.5:
            frag_status = "healthy"
        elif frag_ratio <= 2.0:
            frag_status = "warning"
        else:
            frag_status = "critical"

        total_lookups = hits + misses
        hit_ratio = round((hits / total_lookups) * 100.0, 2) if total_lookups > 0 else 100.0

        return MemoryOverviewResponse(
            used_memory_bytes=used_mem,
            used_memory_human=format_bytes(used_mem),
            used_memory_peak_bytes=used_mem_peak,
            used_memory_peak_human=format_bytes(used_mem_peak),
            used_memory_rss_bytes=used_mem_rss,
            used_memory_rss_human=format_bytes(used_mem_rss),
            fragmentation_ratio=frag_ratio,
            fragmentation_status=frag_status,
            maxmemory_bytes=maxmemory,
            maxmemory_human=format_bytes(maxmemory) if maxmemory > 0 else "Unlimited",
            maxmemory_policy=maxmemory_policy,
            keyspace_hits=hits,
            keyspace_misses=misses,
            hit_ratio_percent=hit_ratio,
            dbsize=dbsize,
        )

    async def analyze_memory(self, sample_size: int = 500, pattern: str = "*") -> MemoryAnalysisResponse:
        """Sample keys non-blockingly using SCAN and profile memory usage, data types, and bottlenecks."""
        client = await self.get_client()
        sample_size = max(50, min(5000, sample_size))
        clean_pattern = pattern.strip() if pattern and pattern.strip() else "*"

        start_time = time.perf_counter()

        # Step 1: Safe non-blocking key sampling
        sampled_keys = []
        seen = set()
        cursor: Any = 0
        is_cluster = isinstance(client, RedisCluster)
        scan_batch = min(200, sample_size)
        max_iterations = 60

        for _ in range(max_iterations):
            if len(sampled_keys) >= sample_size:
                break
            try:
                if is_cluster:
                    new_cursor, keys = await self._scan_cluster_batch(
                        client, cursor, clean_pattern, scan_batch
                    )
                    new_cursor = self._parse_scan_cursor(new_cursor)
                else:
                    new_cursor, keys = await client.scan(cursor=cursor, match=clean_pattern, count=scan_batch)
                if keys:
                    for k in keys:
                        if isinstance(k, bytes):
                            k = k.decode("utf-8", errors="replace")
                        if k not in seen:
                            seen.add(k)
                            sampled_keys.append(k)
                            if len(sampled_keys) >= sample_size:
                                break
                if isinstance(new_cursor, dict):
                    if all(v == 0 for v in new_cursor.values()):
                        break
                    cursor = new_cursor
                else:
                    try:
                        if int(new_cursor) == 0:
                            break
                        cursor = int(new_cursor)
                    except Exception:
                        break
            except Exception as e:
                logger.warning(f"Memory analysis SCAN stopped early: {e}")
                break

        # Step 2: Concurrently query memory and metadata using Semaphore
        sem = asyncio.Semaphore(25)

        async def inspect_single_key(key: str) -> BigKeyItem:
            async with sem:
                try:
                    k_type = await client.type(key)
                    str_type = str(k_type).lower() if k_type else "string"
                except Exception:
                    str_type = "string"

                mem_bytes = 0
                try:
                    m = await client.memory_usage(key)
                    if m is not None:
                        mem_bytes = int(m)
                except Exception:
                    pass

                ttl = -1
                try:
                    t = await client.ttl(key)
                    if t is not None:
                        ttl = int(t)
                except Exception:
                    pass

                length = 1
                try:
                    if str_type == "string":
                        length = await client.strlen(key) or 0
                    elif str_type == "hash":
                        length = await client.hlen(key) or 0
                    elif str_type == "list":
                        length = await client.llen(key) or 0
                    elif str_type == "set":
                        length = await client.scard(key) or 0
                    elif str_type == "zset":
                        length = await client.zcard(key) or 0
                    elif str_type == "stream":
                        length = await client.xlen(key) or 0
                except Exception:
                    length = 1

                return BigKeyItem(
                    key=key,
                    type=str_type,
                    memory_bytes=mem_bytes,
                    memory_human=format_bytes(mem_bytes),
                    length=length,
                    ttl=ttl,
                )

        if sampled_keys:
            key_items: List[BigKeyItem] = await asyncio.gather(
                *[inspect_single_key(k) for k in sampled_keys],
                return_exceptions=False
            )
        else:
            key_items = []

        duration_ms = round((time.perf_counter() - start_time) * 1000.0, 2)
        try:
            total_dbsize = await self._total_dbsize(client)
        except Exception:
            total_dbsize = len(key_items)

        # Step 3: Aggregations & breakdowns
        total_sampled_bytes = sum(item.memory_bytes for item in key_items)
        type_groups: Dict[str, Dict[str, Any]] = {}

        for item in key_items:
            t = item.type
            if t not in type_groups:
                type_groups[t] = {"count": 0, "total_bytes": 0}
            type_groups[t]["count"] += 1
            type_groups[t]["total_bytes"] += item.memory_bytes

        types_breakdown: List[MemoryTypeBreakdown] = []
        for t, data in type_groups.items():
            pct = round((data["total_bytes"] / total_sampled_bytes) * 100.0, 2) if total_sampled_bytes > 0 else 0.0
            types_breakdown.append(MemoryTypeBreakdown(
                type=t,
                count=data["count"],
                total_bytes=data["total_bytes"],
                total_human=format_bytes(data["total_bytes"]),
                percentage=pct,
            ))
        types_breakdown.sort(key=lambda x: x.total_bytes, reverse=True)

        # Top 50 BigKeys
        top_bigkeys = sorted(key_items, key=lambda x: x.memory_bytes, reverse=True)[:50]

        # Step 4: Intelligent bottleneck recommendations
        recommendations: List[str] = []

        # Check for individual huge keys (> 500 KB)
        huge_keys = [k for k in top_bigkeys if k.memory_bytes > 500 * 1024]
        if huge_keys:
            top_huge = huge_keys[0]
            recommendations.append(
                f"🚨 Large Key Bottleneck: '{top_huge.key}' consumes {top_huge.memory_human}. "
                f"Keys larger than 500 KB block Redis during serialization and increase network latency. Consider JSON compression or data sharding."
            )

        # Check for massive collections (> 5000 items)
        giant_collections = [k for k in top_bigkeys if k.type in ("hash", "list", "set", "zset") and k.length > 5000]
        if giant_collections:
            top_coll = giant_collections[0]
            recommendations.append(
                f"⚠️ Oversized Collection: {top_coll.type.upper()} key '{top_coll.key}' contains {top_coll.length:,} elements. "
                f"Running commands like HGETALL or SMEMBERS on this key blocks the event loop. Use HSCAN / SSCAN instead."
            )

        # Check non-expiring keys
        if len(key_items) > 0:
            no_ttl_count = sum(1 for k in key_items if k.ttl == -1)
            no_ttl_pct = round((no_ttl_count / len(key_items)) * 100.0, 1)
            if no_ttl_pct > 60:
                recommendations.append(
                    f"💡 Memory Leak Risk: {no_ttl_pct}% of sampled keys ({no_ttl_count}/{len(key_items)}) have no expiration TTL configured. "
                    f"Without TTLs, keys accumulate indefinitely unless an eviction policy like volatile-lru/allkeys-lru is configured."
                )

        if not recommendations:
            recommendations.append(
                "✅ Memory profile is healthy! No oversized keys (>500KB) or bloated collections (>5,000 items) were detected in this sample."
            )

        return MemoryAnalysisResponse(
            sampled_count=len(key_items),
            total_dbsize=total_dbsize,
            sampled_memory_bytes=total_sampled_bytes,
            sampled_memory_human=format_bytes(total_sampled_bytes),
            types_breakdown=types_breakdown,
            top_bigkeys=top_bigkeys,
            recommendations=recommendations,
            scan_duration_ms=duration_ms,
        )

    async def export_keys(
        self,
        pattern: str = "*",
        type_filter: Optional[str] = None,
        max_keys: int = 50000
    ) -> List[Dict[str, Any]]:
        """
        Scan and retrieve matched keys with type and TTL for export.
        """
        client = await self.get_client()
        clean_pattern = pattern.strip() if pattern and pattern.strip() else "*"
        matched_keys: List[str] = []

        if isinstance(client, RedisCluster):
            primaries = client.get_primaries()
            for node in primaries:
                cursor = 0
                while True:
                    next_cursor, batch = await client.scan(
                        cursor=cursor, match=clean_pattern, count=1000, target_nodes=node
                    )
                    if isinstance(next_cursor, dict):
                        next_cursor = next_cursor.get(node.name, 0)
                    try:
                        cursor = int(next_cursor)
                    except Exception:
                        cursor = 0

                    if batch:
                        matched_keys.extend(batch)
                    if cursor == 0 or len(matched_keys) >= max_keys:
                        break
                if len(matched_keys) >= max_keys:
                    break
        else:
            cursor = 0
            while True:
                cursor, batch = await client.scan(cursor=cursor, match=clean_pattern, count=1000)
                if batch:
                    matched_keys.extend(batch)
                if cursor == 0 or len(matched_keys) >= max_keys:
                    break

        matched_keys = matched_keys[:max_keys]
        if not matched_keys:
            return []

        results: List[Dict[str, Any]] = []
        for i in range(0, len(matched_keys), 500):
            chunk = matched_keys[i:i + 500]
            pipe = client.pipeline(transaction=False)
            for k in chunk:
                pipe.type(k)
                pipe.ttl(k)
            pipe_res = await pipe.execute()
            for idx, k in enumerate(chunk):
                k_type = str(pipe_res[idx * 2])
                k_ttl = int(pipe_res[idx * 2 + 1])
                if type_filter and type_filter.lower() != "all" and k_type.lower() != type_filter.lower():
                    continue
                results.append({
                    "name": k,
                    "type": k_type,
                    "ttl": k_ttl
                })

        return results

    async def bulk_delete_dry_run(
        self,
        pattern: str = "*",
        type_filter: Optional[str] = None
    ) -> BulkDeleteDryRunResponse:
        """
        Simulate/count matched keys to be deleted without modifying data.
        Returns matched count, sample keys, and per-node breakdown for cluster.
        """
        client = await self.get_client()
        active_conn = self.active_info or get_active_connection(include_password=False) or {}
        env = (active_conn.get("env") or "LOCAL").upper()
        is_prod = env == "PROD"
        clean_pattern = pattern.strip() if pattern and pattern.strip() else "*"

        per_node_counts: Dict[str, int] = {}
        sample_keys: List[str] = []

        if isinstance(client, RedisCluster):
            primaries = client.get_primaries()
            for node in primaries:
                node_keys_count = 0
                cursor = 0
                while True:
                    next_cursor, batch = await client.scan(
                        cursor=cursor, match=clean_pattern, count=1000, target_nodes=node
                    )
                    if isinstance(next_cursor, dict):
                        next_cursor = next_cursor.get(node.name, 0)
                    try:
                        cursor = int(next_cursor)
                    except Exception:
                        cursor = 0

                    if type_filter and type_filter.lower() != "all" and batch:
                        pipe = client.pipeline(transaction=False)
                        for k in batch:
                            pipe.type(k)
                        types = await pipe.execute()
                        matching_batch = [k for k, t in zip(batch, types) if str(t).lower() == type_filter.lower()]
                        node_keys_count += len(matching_batch)
                        if len(sample_keys) < 10:
                            sample_keys.extend(matching_batch[:10 - len(sample_keys)])
                    else:
                        node_keys_count += len(batch)
                        if len(sample_keys) < 10:
                            sample_keys.extend(batch[:10 - len(sample_keys)])

                    if cursor == 0:
                        break
                per_node_counts[node.name] = node_keys_count
        else:
            node_name = f"{active_conn.get('host', 'localhost')}:{active_conn.get('port', 6379)}"
            cursor = 0
            total_count = 0
            while True:
                cursor, batch = await client.scan(cursor=cursor, match=clean_pattern, count=1000)
                if type_filter and type_filter.lower() != "all" and batch:
                    pipe = client.pipeline(transaction=False)
                    for k in batch:
                        pipe.type(k)
                    types = await pipe.execute()
                    matching_batch = [k for k, t in zip(batch, types) if str(t).lower() == type_filter.lower()]
                    total_count += len(matching_batch)
                    if len(sample_keys) < 10:
                        sample_keys.extend(matching_batch[:10 - len(sample_keys)])
                else:
                    total_count += len(batch)
                    if len(sample_keys) < 10:
                        sample_keys.extend(batch[:10 - len(sample_keys)])
                if cursor == 0:
                    break
            per_node_counts[node_name] = total_count

        total_matched = sum(per_node_counts.values())
        return BulkDeleteDryRunResponse(
            pattern=clean_pattern,
            type_filter=type_filter,
            matched_count=total_matched,
            per_node_counts=per_node_counts,
            is_prod=is_prod,
            env=env,
            sample_keys=sample_keys
        )

    async def bulk_delete_execute(
        self,
        pattern: str,
        type_filter: Optional[str],
        expected_count: int,
        confirmed_count: int,
        confirmed_env: Optional[str]
    ) -> BulkDeleteExecuteResponse:
        """
        Execute non-blocking bulk deletion with UNLINK in batches per node.
        Requires exact confirmed count, and typing 'PROD' for PROD connections.
        """
        client = await self.get_client()
        active_conn = self.active_info or get_active_connection(include_password=False) or {}
        env = (active_conn.get("env") or "LOCAL").upper()
        clean_pattern = pattern.strip() if pattern and pattern.strip() else "*"

        if confirmed_count != expected_count:
            raise ValueError(
                f"Confirmation count mismatch. Expected: {expected_count}, Confirmed: {confirmed_count}."
            )

        if env == "PROD":
            if not confirmed_env or confirmed_env.strip().upper() != "PROD":
                raise ValueError("Destructive operation on PROD requires typing 'PROD' to confirm.")

        start_time = time.perf_counter()
        per_node_deleted: Dict[str, int] = {}
        BATCH_SIZE = 200

        if isinstance(client, RedisCluster):
            primaries = client.get_primaries()
            for node in primaries:
                node_deleted = 0
                cursor = 0
                while True:
                    next_cursor, batch = await client.scan(
                        cursor=cursor, match=clean_pattern, count=BATCH_SIZE, target_nodes=node
                    )
                    if isinstance(next_cursor, dict):
                        next_cursor = next_cursor.get(node.name, 0)
                    try:
                        cursor = int(next_cursor)
                    except Exception:
                        cursor = 0

                    keys_to_unlink = batch
                    if type_filter and type_filter.lower() != "all" and batch:
                        pipe = client.pipeline(transaction=False)
                        for k in batch:
                            pipe.type(k)
                        types = await pipe.execute()
                        keys_to_unlink = [k for k, t in zip(batch, types) if str(t).lower() == type_filter.lower()]

                    if keys_to_unlink:
                        for chunk_start in range(0, len(keys_to_unlink), 100):
                            sub_chunk = keys_to_unlink[chunk_start:chunk_start + 100]
                            await client.execute_command("UNLINK", *sub_chunk, target_nodes=node)
                        node_deleted += len(keys_to_unlink)

                    if cursor == 0:
                        break
                per_node_deleted[node.name] = node_deleted
        else:
            node_name = f"{active_conn.get('host', 'localhost')}:{active_conn.get('port', 6379)}"
            total_deleted = 0
            cursor = 0
            while True:
                cursor, batch = await client.scan(cursor=cursor, match=clean_pattern, count=BATCH_SIZE)
                keys_to_unlink = batch
                if type_filter and type_filter.lower() != "all" and batch:
                    pipe = client.pipeline(transaction=False)
                    for k in batch:
                        pipe.type(k)
                    types = await pipe.execute()
                    keys_to_unlink = [k for k, t in zip(batch, types) if str(t).lower() == type_filter.lower()]

                if keys_to_unlink:
                    for chunk_start in range(0, len(keys_to_unlink), 100):
                        sub_chunk = keys_to_unlink[chunk_start:chunk_start + 100]
                        await client.unlink(*sub_chunk)
                    total_deleted += len(keys_to_unlink)

                if cursor == 0:
                    break
            per_node_deleted[node_name] = total_deleted

        duration_ms = round((time.perf_counter() - start_time) * 1000.0, 2)
        total_deleted_count = sum(per_node_deleted.values())
        logger.warning(
            f"BULK DELETE executed on connection '{active_conn.get('name')}' ({env}): "
            f"{total_deleted_count} keys unlinked for pattern '{clean_pattern}' in {duration_ms}ms"
        )

        return BulkDeleteExecuteResponse(
            success=True,
            pattern=clean_pattern,
            deleted_count=total_deleted_count,
            per_node_deleted=per_node_deleted,
            duration_ms=duration_ms,
            message=f"Successfully unlinked {total_deleted_count} keys across {len(per_node_deleted)} node(s)."
        )

    async def close(self):
        """Cleanly close all active connection pools."""
        async with self._get_lock():
            for cid, client in list(self._clients.items()):
                try:
                    await client.aclose()
                except Exception:
                    pass
            self._clients.clear()
            self._conn_infos.clear()
            self._selected_conn_id = None


# Global instance
redis_manager = RedisManager()
