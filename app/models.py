from typing import Optional, Any, Dict, List
from pydantic import BaseModel, Field


class ConnectionBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=100, description="Display name for connection")
    host: str = Field(default="localhost", description="Redis host")
    port: int = Field(default=6379, ge=1, le=65535, description="Redis port")
    db: int = Field(default=0, ge=0, le=15, description="Database index (0-15)")
    username: Optional[str] = Field(default=None, description="Optional Redis ACL username")
    use_tls: bool = Field(default=False, description="Enable TLS/SSL")
    env: str = Field(default="LOCAL", description="Environment: LOCAL, DEV, UAT, PROD")
    conn_type: str = Field(default="standalone", description="standalone | cluster | sentinel")
    cluster_nodes: Optional[str] = Field(default=None, description="Comma-separated or JSON list of cluster nodes")
    sentinel_master: Optional[str] = Field(default=None, description="Sentinel master group name")
    source: str = Field(default="ui", description="ui or config")


class ConnectionCreate(ConnectionBase):
    password: Optional[str] = Field(default=None, description="Plaintext password to store encrypted")


class ConnectionUpdate(BaseModel):
    name: Optional[str] = None
    host: Optional[str] = None
    port: Optional[int] = None
    db: Optional[int] = None
    username: Optional[str] = None
    password: Optional[str] = None
    use_tls: Optional[bool] = None
    env: Optional[str] = None
    conn_type: Optional[str] = None
    cluster_nodes: Optional[str] = None
    sentinel_master: Optional[str] = None


class ConnectionOut(ConnectionBase):
    id: str
    has_password: bool = False
    is_active: bool = False
    is_connected: bool = False
    is_selected: bool = False
    created_at: str
    updated_at: str


class ConnectionLimitModel(BaseModel):
    limit: int = Field(default=2, ge=1, le=20, description="Maximum number of simultaneous connected clusters")
    connected_count: int = 0
    connected_ids: List[str] = []
    selected_id: Optional[str] = None


class ConnectionTestRequest(BaseModel):
    host: str = "localhost"
    port: int = 6379
    db: int = 0
    username: Optional[str] = None
    password: Optional[str] = None
    use_tls: bool = False
    conn_type: str = "standalone"
    cluster_nodes: Optional[str] = None
    sentinel_master: Optional[str] = None


class SavedConnectionTestRequest(BaseModel):
    host: Optional[str] = None
    port: Optional[int] = None
    db: Optional[int] = None
    username: Optional[str] = None
    password: Optional[str] = None
    use_tls: Optional[bool] = None
    conn_type: Optional[str] = None
    cluster_nodes: Optional[str] = None
    sentinel_master: Optional[str] = None



class ConnectionTestResponse(BaseModel):
    success: bool
    latency_ms: Optional[float] = None
    redis_version: Optional[str] = None
    os: Optional[str] = None
    error: Optional[str] = None
    is_cluster: bool = False
    cluster_nodes_count: Optional[int] = None


class ClusterDiscoveryRequest(BaseModel):
    host: str = "127.0.0.1"
    port: int = 7000
    username: Optional[str] = None
    password: Optional[str] = None
    use_tls: bool = False


class DiscoveredClusterNode(BaseModel):
    id: str
    host: str
    port: int
    role: str
    is_myself: bool = False
    master_id: Optional[str] = None
    link_state: str = "connected"
    slots: Optional[str] = None
    slot_count: int = 0


class ClusterDiscoveryResponse(BaseModel):
    success: bool
    cluster_state: Optional[str] = "unknown"
    total_nodes: Optional[int] = 0
    masters_count: Optional[int] = 0
    replicas_count: Optional[int] = 0
    slots_assigned: Optional[int] = 0
    nodes: Optional[List[DiscoveredClusterNode]] = []
    error: Optional[str] = None


class ActiveConnectionStatus(BaseModel):
    connected: bool
    connection_id: Optional[str] = None
    connection_name: Optional[str] = None
    host: Optional[str] = None
    port: Optional[int] = None
    db: Optional[int] = None
    env: Optional[str] = "LOCAL"
    conn_type: Optional[str] = "standalone"
    redis_version: Optional[str] = None
    latency_ms: Optional[float] = None
    dbsize: Optional[int] = None
    used_memory_human: Optional[str] = None
    uptime_days: Optional[int] = None
    connected_clients: Optional[int] = None
    is_cluster: bool = False
    cluster_state: Optional[str] = None
    cluster_nodes_count: Optional[int] = None
    error: Optional[str] = None


class KeyItem(BaseModel):
    name: str
    type: str
    ttl: int
    memory_bytes: Optional[int] = None


class KeyListResponse(BaseModel):
    keys: list[KeyItem]
    cursor: Any = 0
    total_in_db: int
    matched_count: int



class ClusterNodeDetail(BaseModel):
    id: str
    addr: str
    ip: str
    port: int
    role: str  # master or replica
    master_id: Optional[str] = None
    flags: List[str] = []
    link_state: str = "connected"
    slots: Optional[str] = None
    slot_count: int = 0
    ping_sent: int = 0
    pong_recv: int = 0


class ClusterTopologyResponse(BaseModel):
    is_cluster: bool
    cluster_state: Optional[str] = None
    total_nodes: int = 1
    masters_count: int = 1
    replicas_count: int = 0
    slots_assigned: int = 0
    nodes: List[ClusterNodeDetail] = []
    replication: Optional[Dict[str, Any]] = None


# --- Phase 3: Slowlog & Latency Profiler Models ---
class SlowlogEntry(BaseModel):
    id: int
    timestamp: int
    time_str: str
    duration_us: int
    duration_ms: float
    command: List[str]
    client_ip: Optional[str] = None
    client_name: Optional[str] = None
    node: Optional[str] = None


class SlowlogResponse(BaseModel):
    entries: List[SlowlogEntry]
    total_len: int
    slower_than_us: Optional[int] = None
    max_len: Optional[int] = None


# --- Phase 3: Memory Analysis & BigKeys Models ---
class BigKeyItem(BaseModel):
    key: str
    type: str
    memory_bytes: int
    memory_human: str
    length: int
    ttl: int


class MemoryTypeBreakdown(BaseModel):
    type: str
    count: int
    total_bytes: int
    total_human: str
    percentage: float


class MemoryOverviewResponse(BaseModel):
    used_memory_bytes: int
    used_memory_human: str
    used_memory_peak_bytes: int
    used_memory_peak_human: str
    used_memory_rss_bytes: int
    used_memory_rss_human: str
    fragmentation_ratio: float
    fragmentation_status: str  # healthy, warning, critical
    maxmemory_bytes: int
    maxmemory_human: str
    maxmemory_policy: str
    keyspace_hits: int
    keyspace_misses: int
    hit_ratio_percent: float
    dbsize: int


class MemoryAnalysisRequest(BaseModel):
    sample_size: int = Field(default=500, ge=50, le=5000, description="Max keys to sample")
    pattern: str = Field(default="*", description="Key pattern to sample")


class MemoryAnalysisResponse(BaseModel):
    sampled_count: int
    total_dbsize: int
    sampled_memory_bytes: int
    sampled_memory_human: str
    types_breakdown: List[MemoryTypeBreakdown]
    top_bigkeys: List[BigKeyItem]
    recommendations: List[str]
    scan_duration_ms: float


