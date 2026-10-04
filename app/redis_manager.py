import asyncio
import json
import time
from typing import Optional, Dict, Any, List, Tuple
import redis.asyncio as aioredis
from redis.asyncio.client import Pipeline
from redis.asyncio.cluster import RedisCluster, ClusterNode

from app.db import get_active_connection, set_active_connection, get_connection
from app.models import (
    ActiveConnectionStatus,
    ConnectionTestResponse,
    KeyItem,
    KeyListResponse,
    ClusterTopologyResponse,
    ClusterNodeDetail,
)


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
                except Exception:
                    pass
            if not startup_nodes:
                startup_nodes = [ClusterNode(host, port)]

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
        await client.ping()
        return client

    async def _connect_and_store(self, conn_id: str, conn_dict: Dict[str, Any]) -> Dict[str, Any]:
        """Internal helper to create, store client, and select it."""
        current_loop = asyncio.get_running_loop()
        self._client_loop = current_loop

        # If already connected, simply select it
        if conn_id in self._clients:
            self._selected_conn_id = conn_id
            return self._conn_infos[conn_id]

        # Check limit
        if len(self._clients) >= self._max_connected_limit:
            raise ValueError(
                f"Connection limit reached: Maximum {self._max_connected_limit} cluster(s) can be connected at a time. "
                "Please disconnect an existing cluster first."
            )

        client = await self._create_client(conn_dict)
        self._clients[conn_id] = client
        self._conn_infos[conn_id] = conn_dict
        self._selected_conn_id = conn_id
        set_active_connection(conn_id)
        return conn_dict

    async def activate_connection(self, conn_id: str) -> Dict[str, Any]:
        """Connect or select a connection by ID."""
        conn_dict = get_connection(conn_id, include_password=True)
        if not conn_dict:
            raise ValueError(f"Connection {conn_id} not found.")

        async with self._get_lock():
            return await self._connect_and_store(conn_id, conn_dict)

    async def disconnect_connection(self, conn_id: str) -> bool:
        """Disconnect and close a connected cluster by ID."""
        from app.db import set_connection_status

        async with self._get_lock():
            client = self._clients.pop(conn_id, None)
            self._conn_infos.pop(conn_id, None)
            if client:
                try:
                    await client.aclose()
                except Exception:
                    pass

            set_connection_status(conn_id, is_active=False)

            if self._selected_conn_id == conn_id:
                if self._clients:
                    self._selected_conn_id = next(iter(self._clients.keys()))
                    set_active_connection(self._selected_conn_id)
                else:
                    self._selected_conn_id = None

            return True

    def select_connection(self, conn_id: str) -> Dict[str, Any]:
        """Switch active focus to an already connected connection."""
        if conn_id not in self._clients:
            raise ValueError(f"Connection {conn_id} is not connected. Connect it first.")
        self._selected_conn_id = conn_id
        set_active_connection(conn_id)
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

            return ConnectionTestResponse(
                success=True,
                latency_ms=round(latency, 2),
                redis_version=redis_ver,
                os=os_info,
                is_cluster=is_cluster,
                cluster_nodes_count=cluster_nodes_count,
            )
        except Exception as e:
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
                used_memory_human=info_memory.get("used_memory_human"),
                uptime_days=info_server.get("uptime_in_days"),
                connected_clients=info_clients.get("connected_clients"),
                is_cluster=is_cluster,
                cluster_state=cluster_state,
                cluster_nodes_count=cluster_nodes_count,
            )
        except Exception as e:
            return ActiveConnectionStatus(
                connected=False,
                connection_id=active_conn.get("id") if active_conn else None,
                connection_name=active_conn.get("name") if active_conn else None,
                host=active_conn.get("host") if active_conn else None,
                port=active_conn.get("port") if active_conn else None,
                error=str(e),
            )

    async def scan_keys_batch(
        self,
        pattern: str = "*",
        cursor: Any = 0,
        count: int = 50,
        type_filter: Optional[str] = None
    ) -> KeyListResponse:
        """Scan keys using Redis SCAN, and pipeline TYPE & TTL queries for fast display."""
        try:
            client = await self.get_client()
            dbsize = await client.dbsize()
        except ConnectionError:
            return KeyListResponse(keys=[], cursor=0, total_in_db=0, matched_count=0)

        clean_pattern = pattern.strip() if pattern and pattern.strip() else "*"

        # Pass appropriate cursor type
        scan_cursor = cursor
        if isinstance(cursor, str) and cursor.isdigit():
            scan_cursor = int(cursor)

        new_cursor, raw_keys = await client.scan(cursor=scan_cursor, match=clean_pattern, count=count)

        if isinstance(new_cursor, dict):
            cursor_out = 0 if all(v == 0 for v in new_cursor.values()) else new_cursor
        else:
            try:
                cursor_out = int(new_cursor)
            except Exception:
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
            raise RuntimeError(f"Error checking key type: {str(e)}")

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
                hlen = await client.hlen(key_name)
            except Exception:
                hlen = 0
            detail["length"] = hlen

            raw_hash = {}
            try:
                if hlen <= 100:
                    raw_hash = await client.hgetall(key_name)
                else:
                    _, raw_hash = await client.hscan(key_name, cursor=0, count=100)
            except Exception:
                try:
                    raw_hash = await client.hgetall(key_name)
                except Exception:
                    raw_hash = {}

            fields_list = [{"field": str(f), "value": str(v)} for f, v in raw_hash.items()]
            detail["fields"] = fields_list

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
