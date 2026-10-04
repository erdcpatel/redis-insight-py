import {
  createIcons,
  Layers,
  Plus,
  RefreshCw,
  Search,
  Cpu,
  Trash2,
  Zap,
  CheckCircle2,
  AlertCircle,
  Database,
  ShieldCheck,
  Lock,
  ArrowDownCircle,
  X,
  Play,
  Copy,
  Clock,
  Edit,
  ExternalLink,
  Code,
  Users,
  Server,
  Network,
  GitBranch,
  ArrowRightLeft,
  Activity,
  PieChart,
  AlertTriangle,
  TrendingUp,
  BarChart2,
  Power,
  ChevronLeft,
  ChevronRight,
  PanelLeft
} from "lucide";

// Global State
let allConnectedClients = [];
let allSlowlogEntries = [];
let currentSlowlogMinDuration = 0;
let currentSlowlogSearch = "";
let currentSlowlogNode = "all";

let currentMemoryOverview = null;
let currentMemoryAnalysis = null;
let isMemoryProfilingRunning = false;
let bigkeysSearchQuery = "";

let currentCursor = 0;
let currentPattern = "*";
let currentType = "all";
let isScanning = false;
let totalScanned = 0;
let dbTotalKeys = 0;
let keysTableRows = [];
let loadedKeysSet = new Set();

// Phase 2 state
let activeDetailKey = null;
let activeDetailData = null;
let pendingDeleteKey = null;
let pendingDeleteCallback = null;

// Connections & Cluster Topology State
let cachedConnections = [];
let currentEnvFilter = "ALL";
let currentConnSearch = "";
let currentTopologyData = null;
let currentTopologyRole = "all";
let currentTopologySearch = "";
let currentLimit = 2;
let activeConfigConn = null;
let currentScanEpoch = 0;

function setupIcons() {
  createIcons({
    icons: {
      Layers,
      Plus,
      RefreshCw,
      Search,
      Cpu,
      Trash2,
      Zap,
      CheckCircle2,
      AlertCircle,
      Database,
      ShieldCheck,
      Lock,
      ArrowDownCircle,
      X,
      Play,
      Copy,
      Clock,
      Edit,
      ExternalLink,
      Code,
      Users,
      Server,
      Network,
      GitBranch,
      ArrowRightLeft,
      Activity,
      PieChart,
      AlertTriangle,
      TrendingUp,
      BarChart2,
      Power,
      ChevronLeft,
      ChevronRight,
      PanelLeft
    }
  });
}

function renderAppShell() {
  const app = document.getElementById("app");
  if (!app) return;
  app.innerHTML = `
    <div class="app-container">
      <!-- Left Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-header">
          <div class="brand">
            <div class="brand-icon">
              <i data-lucide="layers" style="width: 20px; height: 20px;"></i>
            </div>
            <div class="brand-title">
              Redis Insight
              <span class="brand-badge">py</span>
            </div>
          </div>
          <button type="button" class="sidebar-toggle-btn" id="btnToggleSidebar" title="Hide connections sidebar (Full Screen - Ctrl+B)">
            <i data-lucide="chevron-left" style="width: 16px; height: 16px;"></i>
          </button>
        </div>

        <div class="sidebar-action-bar">
          <span class="sidebar-heading">
            Connections <span class="badge-conn-count" id="totalConnCountBadge">0</span>
          </span>
          <div style="display: flex; gap: 0.35rem;">
            <button type="button" class="btn btn-secondary" id="btnReloadConfig" title="Reload from config/connections.yaml" style="padding: 0.35rem 0.5rem; font-size: 0.75rem;">
              <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
            </button>
            <button type="button" class="btn btn-secondary" id="btnAddConn" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
              <i data-lucide="plus" style="width: 14px; height: 14px;"></i>
              Add
            </button>
          </div>
        </div>

        <div class="sidebar-filter-section">
          <div class="sidebar-search-box">
            <i data-lucide="search" style="width: 13px; height: 13px; color: var(--text-muted); flex-shrink: 0;"></i>
            <input type="text" id="connSearchInput" class="sidebar-search-input" placeholder="Search connections (name, host)...">
            <button type="button" class="btn-clear-search" id="btnClearConnSearch" style="display: none;" title="Clear search">
              <i data-lucide="x" style="width: 11px; height: 11px;"></i>
            </button>
          </div>
          <div class="env-filter-pills" id="envFilterPills">
            <button type="button" class="env-pill-btn active" data-env="ALL">ALL</button>
            <button type="button" class="env-pill-btn" data-env="DEV">DEV</button>
            <button type="button" class="env-pill-btn" data-env="UAT">UAT</button>
            <button type="button" class="env-pill-btn" data-env="PROD">PROD</button>
          </div>
        </div>

        <!-- Connection Limit Status Bar -->
        <div class="sidebar-limit-bar" id="sidebarLimitBar">
          <div class="limit-status-left">
            <i data-lucide="shield-check" class="limit-shield-icon"></i>
            <div class="limit-meta">
              <span class="limit-title">Active Clusters</span>
              <div class="limit-progress-dots" id="limitProgressDots"></div>
            </div>
          </div>
          <div class="limit-controls">
            <span class="limit-count-pill" id="limitCountPill">
              <strong id="connectedCountDisplay" style="color: var(--accent-success);">0</strong>/<span id="connLimitDisplay">2</span>
            </span>
            <div class="limit-select-wrapper" title="Simultaneous connected clusters limit">
              <span>Max:</span>
              <select id="connLimitSelect" class="limit-select">
                <option value="1">1</option>
                <option value="2" selected>2</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>

        <div class="connections-list-wrapper" id="connectionsList">
          <div style="padding: 1rem; color: var(--text-muted); font-size: 0.8rem;">Loading connections...</div>
        </div>

        <div class="sidebar-footer">
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            <i data-lucide="cpu" style="width: 14px; height: 14px; color: var(--accent-primary);"></i>
            <span>FastAPI + Redis AsyncIO</span>
          </div>
          <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">v0.1.0</span>
        </div>
      </aside>

      <!-- Main Section -->
      <main class="main-wrapper">
        <!-- Top Status Bar -->
        <header class="top-navbar">
          <div class="top-navbar-left">
            <button type="button" class="sidebar-expand-btn" id="btnShowSidebar" title="Show connections sidebar (Ctrl+B)" style="display: none;">
              <i data-lucide="panel-left" style="width: 14px; height: 14px; color: var(--accent-primary);"></i>
              <i data-lucide="chevron-right" style="width: 12px; height: 12px; margin-left: -2px; color: var(--text-muted);"></i>
            </button>
            <div id="topConnContainer">
              <div class="top-conn-badge">
                <span class="status-indicator connected"></span>
                <span class="top-conn-name">Connecting to Redis...</span>
              </div>
            </div>
          </div>

          <div class="top-navbar-center" id="topVitalsContainer">
            <!-- Streamlined vitals capsule populated dynamically -->
          </div>

          <div class="top-navbar-right" id="topActionsContainer">
            <div class="top-tools-group">
              <button type="button" class="tool-pill-btn" id="btnOpenSlowlog" title="Real-Time Slowlog & Latency Profiler">
                <i data-lucide="activity" style="width: 13px; height: 13px; color: #38bdf8;"></i>
                <span>Slowlog</span>
              </button>
              <button type="button" class="tool-pill-btn" id="btnOpenMemoryModal" title="Memory Analysis & BigKeys Profiler">
                <i data-lucide="pie-chart" style="width: 13px; height: 13px; color: #a78bfa;"></i>
                <span>BigKeys</span>
              </button>
              <button type="button" class="tool-icon-btn" id="btnRefreshStats" title="Ping active instance & refresh vitals">
                <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
              </button>
            </div>
          </div>
        </header>

        <!-- Main Workspace -->
        <div class="workspace-content">
          <!-- Filter Controls -->
          <div class="controls-card">
            <div class="search-group">
              <i data-lucide="search" class="search-icon" style="width: 16px; height: 16px;"></i>
              <input type="text" id="keySearchInput" class="search-input" placeholder="Search keys by pattern (e.g. *, bikes:*, sample_*) - Press Enter" value="*">
            </div>

            <div class="type-filter-group" id="typeFilterGroup">
              <button type="button" class="type-tab active" data-type="all">All</button>
              <button type="button" class="type-tab" data-type="string">Strings</button>
              <button type="button" class="type-tab" data-type="hash">Hashes</button>
              <button type="button" class="type-tab" data-type="list">Lists</button>
              <button type="button" class="type-tab" data-type="set">Sets</button>
              <button type="button" class="type-tab" data-type="zset">ZSets</button>
              <button type="button" class="type-tab" data-type="json">JSON</button>
            </div>
          </div>

          <!-- Safe Chunk Bar -->
          <div class="chunk-status-bar">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span class="safety-badge">
                <i data-lucide="shield-check" style="width: 14px; height: 14px;"></i>
                Safe SCAN (Chunk 50)
              </span>
              <span id="scanStatusText">Scanning keys...</span>
            </div>

            <div style="display: flex; align-items: center; gap: 0.5rem;" id="scanActionsGroup">
              <button type="button" class="btn btn-secondary" id="btnScanNext" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;">
                <i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i>
                Load More
              </button>
              <button type="button" class="btn btn-secondary" id="btnResetScan" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;">
                <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
                Refresh
              </button>
            </div>
          </div>

          <!-- Key Browser Data Grid Card -->
          <div class="grid-card" id="gridCard">
            <div id="emptyWorkspaceState" class="empty-workspace-state" style="display: none;">
              <div class="empty-state-icon">
                <i data-lucide="database" style="width: 36px; height: 36px; color: var(--accent-primary);"></i>
              </div>
              <h3>No Redis Cluster Connected</h3>
              <p>Select a cluster from the left panel to review its configuration and connect.</p>
              <div style="margin-top: 1rem;">
                <button type="button" class="btn btn-secondary" id="btnConnectFirstAvailable" style="font-size: 0.8rem;">
                  <i data-lucide="server" style="width: 14px; height: 14px;"></i>
                  View Available Clusters
                </button>
              </div>
            </div>
            <div id="gridViewerContainer" style="width: 100%; height: 100%;"></div>
          </div>
        </div>
      </main>
    </div>

    <!-- Cluster Configuration & Connect Modal -->
    <div class="modal-backdrop" id="clusterConfigModal">
      <div class="config-modal-card">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.6rem; min-width: 0;">
            <i data-lucide="server" style="color: var(--accent-primary); width: 20px; height: 20px; flex-shrink: 0;"></i>
            <div>
              <h3 class="modal-title" id="cfgModalTitle">Cluster Configuration</h3>
              <div style="font-size: 0.72rem; color: var(--text-muted);" id="cfgModalSubtitle">Review configuration before connecting</div>
            </div>
          </div>
          <button type="button" class="btn-icon" id="btnCloseConfigModal">
            <i data-lucide="x"></i>
          </button>
        </div>

        <div class="modal-body" id="cfgModalBody">
          <!-- Populated dynamically -->
        </div>

        <div class="modal-footer" id="cfgModalFooter">
          <!-- Populated dynamically -->
        </div>
      </div>
    </div>

    <!-- Connection Modal -->
    <div class="modal-backdrop" id="connectionModal">
      <div class="modal-card">
        <div class="modal-header">
          <h3 class="modal-title">
            <i data-lucide="database" style="color: var(--accent-primary);"></i>
            Add Redis Connection
          </h3>
          <button type="button" class="btn-icon" id="btnCloseModal">
            <i data-lucide="x"></i>
          </button>
        </div>

        <form id="connectionForm">
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label" for="connName">Connection Name *</label>
              <input class="form-input" type="text" id="connName" name="name" placeholder="e.g. Staging Cluster, Local Redis" required value="New Connection">
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="connEnv">Environment *</label>
                <select class="form-input" id="connEnv" name="env">
                  <option value="LOCAL">LOCAL</option>
                  <option value="DEV" selected>DEV</option>
                  <option value="UAT">UAT</option>
                  <option value="PROD">PROD</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="connTypeSelect">Connection Type</label>
                <select class="form-input" id="connTypeSelect" name="conn_type">
                  <option value="standalone" selected>Standalone Redis</option>
                  <option value="cluster">Redis Cluster (Multi-Node)</option>
                  <option value="sentinel">Redis Sentinel (HA)</option>
                </select>
              </div>
            </div>

            <div class="form-row" id="connHostPortRow">
              <div class="form-group">
                <label class="form-label" for="connHost" id="connHostLabel">Host *</label>
                <input class="form-input" type="text" id="connHost" name="host" placeholder="localhost" required value="localhost">
              </div>
              <div class="form-group">
                <label class="form-label" for="connPort" id="connPortLabel">Port *</label>
                <input class="form-input" type="number" id="connPort" name="port" placeholder="6379" required value="6379">
              </div>
            </div>

            <!-- Cluster Multi-Node Builder & Auto-Discovery Panel -->
            <div class="form-group" id="clusterNodesGroup" style="display: none;">
              <div class="cluster-nodes-panel">
                <div class="cluster-discover-header">
                  <div style="display: flex; align-items: center; gap: 0.4rem;">
                    <i data-lucide="network" style="width: 15px; height: 15px; color: #a855f7;"></i>
                    <strong style="font-size: 0.8rem; color: var(--text-primary);">Cluster Nodes & Discovery</strong>
                    <span id="clusterNodeCountBadge" class="cluster-node-count-badge">0 configured</span>
                  </div>
                  <button type="button" class="cluster-discover-btn" id="btnAutoDiscoverCluster" title="Connect to the seed node above to automatically discover all cluster nodes">
                    <i data-lucide="sparkles" style="width: 13px; height: 13px;"></i>
                    <span>Auto-Discover Nodes</span>
                  </button>
                </div>

                <div id="clusterDiscoveryStatus" class="cluster-discovery-status" style="display: none;"></div>

                <div style="font-size: 0.72rem; color: var(--text-muted); margin-bottom: 0.35rem;">
                  Configured seed nodes for high-availability cluster discovery:
                </div>

                <div id="clusterNodesList" class="cluster-nodes-list"></div>

                <div class="cluster-add-node-bar">
                  <input class="form-input" type="text" id="inputCustomClusterNode" placeholder="Add node e.g. 127.0.0.1:7001" style="font-size: 0.78rem; padding: 0.35rem 0.6rem;">
                  <button type="button" class="btn btn-secondary" id="btnAddCustomClusterNode" style="padding: 0.35rem 0.75rem; font-size: 0.78rem; white-space: nowrap;">
                    <i data-lucide="plus" style="width: 13px; height: 13px;"></i> Add Node
                  </button>
                </div>
              </div>
            </div>

            <div class="form-row" id="connDbRow">
              <div class="form-group" id="connDbGroup">
                <label class="form-label" for="connDb">Database Index</label>
                <input class="form-input" type="number" id="connDb" name="db" min="0" max="15" value="0">
              </div>
              <div class="form-group">
                <label class="form-label" for="connUsername">Username</label>
                <input class="form-input" type="text" id="connUsername" name="username" placeholder="Optional (Redis ACL)">
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="connPassword">Password</label>
              <input class="form-input" type="password" id="connPassword" name="password" placeholder="Leave empty if none">
            </div>

            <div style="display: flex; gap: 1.5rem; margin-top: 0.25rem;">
              <label class="form-checkbox-group">
                <input type="checkbox" id="connTls" name="use_tls">
                <span>Use TLS/SSL</span>
              </label>
              <label class="form-checkbox-group">
                <input type="checkbox" id="connAutoActivate" name="auto_activate" checked>
                <span>Activate on save</span>
              </label>
            </div>

            <div id="testResultBox" class="test-result-box"></div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" id="btnTestConnModal">
              <i data-lucide="zap"></i>
              Test Connection
            </button>
            <div style="display: flex; gap: 0.5rem;">
              <button type="button" class="btn btn-secondary" id="btnCancelModal">Cancel</button>
              <button type="submit" class="btn btn-primary" id="btnSaveConn">Save Connection</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Cluster Topology & Node Details Modal -->
    <div class="modal-backdrop" id="clusterTopologyModal">
      <div class="topology-modal-card">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <i data-lucide="layers" style="width: 20px; height: 20px; color: var(--accent-primary);"></i>
            <h3 class="modal-title">Cluster Topology & Nodes</h3>
            <span class="badge-env badge-env-dev" id="topologyEnvBadge">DEV</span>
            <span class="badge-db" id="topologyNodesCountBadge">0 Nodes</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button type="button" class="btn btn-secondary" id="btnRefreshTopologyModal" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
              <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
              Refresh
            </button>
            <button type="button" class="btn-icon" id="btnCloseTopologyModal">
              <i data-lucide="x"></i>
            </button>
          </div>
        </div>

        <div class="topology-stats-grid" id="topologyStatsGrid">
          <!-- Rendered dynamically: State, Masters, Replicas, Slots, Epoch -->
        </div>

        <div style="padding: 0.75rem 1.5rem; background: rgba(0,0,0,0.15); border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
          <div class="search-group" style="flex: 1; min-width: 260px; max-width: 450px;">
            <i data-lucide="search" class="search-icon" style="width: 14px; height: 14px;"></i>
            <input type="text" id="topologySearchInput" class="search-input" placeholder="Filter nodes by IP, port, node ID, or slot..." style="padding: 0.45rem 0.75rem 0.45rem 2rem; font-size: 0.8rem;">
          </div>
          <div class="type-filter-group" id="topologyRoleFilter">
            <button type="button" class="type-tab active" data-role="all">All Nodes</button>
            <button type="button" class="type-tab" data-role="master">Masters</button>
            <button type="button" class="type-tab" data-role="replica">Replicas</button>
          </div>
        </div>

        <div style="flex: 1; overflow-y: auto; padding: 0.75rem 1.25rem;" id="topologyTableContainer">
          <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">Fetching cluster nodes...</div>
        </div>
      </div>
    </div>

    <!-- Phase 2: Key Inspector Detail Modal -->
    <div class="modal-backdrop" id="keyDetailModal">
      <div class="detail-modal-card">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.6rem; min-width: 0;">
            <i data-lucide="database" style="color: var(--accent-primary); flex-shrink: 0;"></i>
            <span class="modal-title" id="detailKeyTitle" style="font-family: var(--font-mono); font-size: 0.95rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Key Details</span>
            <button type="button" class="btn-icon" id="btnCopyKeyName" title="Copy key name">
              <i data-lucide="copy" style="width: 14px; height: 14px;"></i>
            </button>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button type="button" class="btn btn-danger" id="btnDeleteKeyFromDetail" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
              <i data-lucide="trash-2" style="width: 13px; height: 13px;"></i>
              Delete Key
            </button>
            <button type="button" class="btn-icon" id="btnCloseDetailModal">
              <i data-lucide="x"></i>
            </button>
          </div>
        </div>

        <div class="detail-header-meta" id="detailHeaderMeta">
          <!-- Populated dynamically -->
        </div>

        <div class="detail-body-content" id="detailBodyContent">
          <!-- Populated dynamically -->
        </div>
      </div>
    </div>

    <!-- Safe Delete Confirmation Modal (Requires typing CONFIRM) -->
    <div class="modal-backdrop" id="deleteKeyConfirmModal">
      <div class="danger-confirm-card">
        <div class="danger-header">
          <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700;">
            <i data-lucide="alert-circle" style="width: 20px; height: 20px;"></i>
            <span>Confirm Key Deletion</span>
          </div>
          <button type="button" class="btn-icon" id="btnCloseDeleteConfirmModal" style="color: #fca5a5;">
            <i data-lucide="x"></i>
          </button>
        </div>

        <div style="padding: 1.5rem; display: flex; flex-direction: column; gap: 0.85rem;">
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
            This operation is <strong style="color: #f87171;">irreversible</strong>. The key and all its associated data will be immediately removed from Redis:
          </p>

          <div class="key-delete-target-badge" id="deleteKeyTargetName">key:name</div>

          <div style="margin-top: 0.25rem;">
            <label style="font-size: 0.75rem; text-transform: uppercase; font-weight: 600; color: var(--text-muted); letter-spacing: 0.05em;">
              Type <span style="color: var(--accent-danger); font-family: var(--font-mono);">CONFIRM</span> to enable deletion:
            </label>
            <input type="text" id="inputConfirmDelete" class="confirm-input-field" placeholder="Type CONFIRM here" autocomplete="off">
          </div>
        </div>

        <div style="padding: 1rem 1.5rem; background: rgba(0,0,0,0.3); border-top: 1px solid rgba(239, 68, 68, 0.25); display: flex; justify-content: flex-end; gap: 0.6rem;">
          <button type="button" class="btn btn-secondary" id="btnCancelDeleteConfirm">Cancel</button>
          <button type="button" class="btn-danger-confirm" id="btnSubmitDeleteKey" disabled>
            Delete Permanently
          </button>
        </div>
      </div>
    </div>

    <!-- Connected Clients Modal -->
    <div class="modal-backdrop" id="clientsListModal">
      <div class="clients-modal-card">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <i data-lucide="users" style="width: 20px; height: 20px; color: var(--accent-primary);"></i>
            <h3 class="modal-title">Connected Clients</h3>
            <span class="badge-db" id="clientsCountBadge" style="margin-left: 4px;">0</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button type="button" class="btn btn-secondary" id="btnRefreshClientsModal" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
              <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
              Refresh
            </button>
            <button type="button" class="btn-icon" id="btnCloseClientsModal">
              <i data-lucide="x"></i>
            </button>
          </div>
        </div>

        <div style="padding: 0.85rem 1.5rem; background: rgba(0,0,0,0.2); border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; gap: 1rem;">
          <div class="search-group" style="flex: 1; max-width: 450px;">
            <i data-lucide="search" class="search-icon" style="width: 14px; height: 14px;"></i>
            <input type="text" id="clientsSearchInput" class="search-input" placeholder="Search by IP, port, client name, user, or cmd..." style="padding: 0.45rem 0.75rem 0.45rem 2rem; font-size: 0.8rem;">
          </div>
          <div id="clientsQuickStats" style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">
            Loading...
          </div>
        </div>

        <div style="flex: 1; overflow-y: auto; padding: 0.75rem 1.25rem;" id="clientsTableContainer">
          <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">Fetching connected clients...</div>
        </div>
      </div>
    </div>

    <!-- Real-Time Slowlog & Latency Profiler Modal -->
    <div class="modal-backdrop" id="slowlogModal">
      <div class="slowlog-modal-card">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.65rem;">
            <i data-lucide="activity" style="width: 20px; height: 20px; color: #38bdf8;"></i>
            <h3 class="modal-title">Real-Time Slowlog & Latency Profiler</h3>
            <span class="badge-db" id="slowlogCountBadge">0</span>
            <span class="badge-duration badge-duration-warning" id="slowlogThresholdBadge" style="font-size: 0.7rem; font-weight: 500;">
              Threshold: &gt; 10ms
            </span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button type="button" class="btn btn-secondary" id="btnRefreshSlowlogModal" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
              <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
              Refresh
            </button>
            <button type="button" class="btn btn-danger" id="btnClearSlowlogModal" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
              <i data-lucide="trash-2" style="width: 13px; height: 13px;"></i>
              Reset Slowlog
            </button>
            <button type="button" class="btn-icon" id="btnCloseSlowlogModal">
              <i data-lucide="x"></i>
            </button>
          </div>
        </div>

        <div style="padding: 0.75rem 1.5rem; background: rgba(0,0,0,0.2); border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
          <div class="search-group" style="flex: 1; min-width: 260px; max-width: 420px;">
            <i data-lucide="search" class="search-icon" style="width: 14px; height: 14px;"></i>
            <input type="text" id="slowlogSearchInput" class="search-input" placeholder="Search by command, arguments, or client IP..." style="padding: 0.45rem 0.75rem 0.45rem 2rem; font-size: 0.8rem;">
          </div>
          <div style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
            <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">Min Latency:</span>
            <button type="button" class="env-pill-btn slowlog-filter-btn active" data-min-duration="0">All</button>
            <button type="button" class="env-pill-btn slowlog-filter-btn" data-min-duration="1">&gt; 1ms</button>
            <button type="button" class="env-pill-btn slowlog-filter-btn" data-min-duration="5">&gt; 5ms</button>
            <button type="button" class="env-pill-btn slowlog-filter-btn" data-min-duration="10">&gt; 10ms</button>
            <button type="button" class="env-pill-btn slowlog-filter-btn" data-min-duration="50">&gt; 50ms</button>
            <div id="slowlogNodeFilterContainer" style="display: inline-flex; align-items: center; margin-left: 0.5rem;"></div>
          </div>
        </div>

        <div style="flex: 1; overflow-y: auto; padding: 0.75rem 1.25rem;" id="slowlogTableContainer">
          <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">Loading slowlog records...</div>
        </div>

        <div style="padding: 0.6rem 1.25rem; background: rgba(15,23,42,0.6); border-top: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; font-size: 0.72rem; color: var(--text-muted);">
          <span><i data-lucide="alert-circle" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Slowlog only measures command execution time on Redis CPU, excluding network I/O latency.</span>
          <span id="slowlogFooterStats">Buffer size: 128</span>
        </div>
      </div>
    </div>

    <!-- Memory Analysis & BigKeys Profiler Modal -->
    <div class="modal-backdrop" id="memoryModal">
      <div class="memory-modal-card">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.65rem;">
            <i data-lucide="pie-chart" style="width: 20px; height: 20px; color: #a78bfa;"></i>
            <div>
              <h3 class="modal-title" style="margin: 0; line-height: 1.2;">Memory Analysis & BigKeys Profiler</h3>
              <p style="margin: 2px 0 0 0; font-size: 0.72rem; color: var(--text-secondary);">Real-time memory diagnostics, data type allocation, and safe key profiling.</p>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button type="button" class="btn btn-secondary" id="btnRefreshMemoryModal" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
              <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
              Refresh Overview
            </button>
            <button type="button" class="btn-icon" id="btnCloseMemoryModal">
              <i data-lucide="x"></i>
            </button>
          </div>
        </div>

        <div style="flex: 1; overflow-y: auto; padding: 1.25rem;" id="memoryModalBody">
          <!-- Live High-Level Overview Grid -->
          <div id="memoryOverviewContainer">
            <div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">Fetching memory metrics...</div>
          </div>

          <!-- Profiling Section (Safeguarded / On-Demand) -->
          <div id="memoryProfilingContainer" style="margin-top: 1rem;">
            <!-- Dynamically populated: either safeguard notice, loading state, or results -->
          </div>
        </div>
      </div>
    </div>
  `;
}

// Safe Scan: Reset and Scan from cursor 0
async function resetAndScan() {
  isScanning = false;
  currentScanEpoch++;
  const epoch = currentScanEpoch;

  currentCursor = 0;
  totalScanned = 0;
  keysTableRows = [];
  loadedKeysSet.clear();

  const emptyEl = document.getElementById("emptyWorkspaceState");
  const gridContainer = document.getElementById("gridViewerContainer");
  if (emptyEl) emptyEl.style.display = "none";
  if (gridContainer) gridContainer.style.display = "block";

  renderKeysTable();
  await scanNextBatch(epoch);
}

// Fetch next batch of keys without blocking Redis
async function scanNextBatch(expectedEpoch = null) {
  if (isScanning) return;
  // If scan already completed (cursor back to 0), do not re-scan
  if (currentCursor === 0 && totalScanned > 0) return;

  const targetEpoch = expectedEpoch !== null ? expectedEpoch : currentScanEpoch;
  isScanning = true;
  updateScanUI();

  try {
    const url = `/api/keys?pattern=${encodeURIComponent(currentPattern)}&cursor=${currentCursor}&count=50${currentType !== "all" ? `&type=${encodeURIComponent(currentType)}` : ""}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to scan keys");
    const data = await res.json();

    // If connection was switched or reset triggered while fetch was pending, drop stale result
    if (targetEpoch !== currentScanEpoch) {
      return;
    }

    currentCursor = data.cursor;
    dbTotalKeys = data.total_in_db;

    // Deduplicate keys against loadedKeysSet
    const newKeys = (data.keys || []).filter(k => {
      if (loadedKeysSet.has(k.name)) return false;
      loadedKeysSet.add(k.name);
      return true;
    });

    const rows = newKeys.map(k => ({
      key: k.name,
      type: k.type,
      ttl_seconds: k.ttl,
      status: k.ttl === -1 ? "Persistent" : k.ttl === -2 ? "Expired" : `Expires in ${k.ttl}s`
    }));

    if (rows.length > 0) {
      keysTableRows.push(...rows);
    }
    renderKeysTable();
    totalScanned = loadedKeysSet.size;
  } catch (err) {
    console.error("Scan error:", err);
  } finally {
    if (targetEpoch === currentScanEpoch) {
      isScanning = false;
      updateScanUI();
    }
  }
}

function renderKeysTable() {
  const container = document.getElementById("gridViewerContainer");
  if (!container) return;
  if (keysTableRows.length === 0) {
    container.innerHTML = `
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No keys found matching pattern "<code>${escapeHtml(currentPattern)}</code>".
      </div>
    `;
    return;
  }
  container.innerHTML = `
    <div style="overflow-y: auto; height: 100%; width: 100%; padding: 0.5rem;">
      <table class="data-table" style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: left;">KEY (CLICK TO VIEW)</th>
            <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: left;">TYPE</th>
            <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: left;">TTL (SEC)</th>
            <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: left;">STATUS</th>
            <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: right;">ACTION</th>
          </tr>
        </thead>
        <tbody>
          ${keysTableRows.map(r => `
            <tr class="key-row" data-key="${encodeURIComponent(r.key)}" style="border-bottom: 1px solid rgba(255,255,255,0.04); cursor: pointer;">
              <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500;">
                <span class="btn-inspect-key" data-key="${encodeURIComponent(r.key)}">${escapeHtml(r.key)}</span>
              </td>
              <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase;">
                <span class="badge-db">${r.type}</span>
              </td>
              <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-secondary);">${r.ttl_seconds}</td>
              <td style="padding: 0.65rem 1rem; font-size: 0.8rem; color: ${r.ttl_seconds === -1 ? 'var(--text-muted)' : 'var(--accent-warning)'};">${r.status}</td>
              <td style="padding: 0.65rem 1rem; text-align: right;" onclick="event.stopPropagation()">
                <button type="button" class="btn-icon danger btn-delete-key-table" data-key="${encodeURIComponent(r.key)}" title="Delete key">
                  <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                </button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;

  setupIcons();

  // Attach click handler on row to open key inspector
  container.querySelectorAll(".key-row").forEach(row => {
    row.addEventListener("click", () => {
      const k = decodeURIComponent(row.getAttribute("data-key"));
      openKeyDetail(k);
    });
  });

  // Attach delete button click handler
  container.querySelectorAll(".btn-delete-key-table").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const k = decodeURIComponent(btn.getAttribute("data-key"));
      triggerDeleteConfirmation(k, () => {
        resetAndScan();
      });
    });
  });
}

function updateScanUI() {
  const statusText = document.getElementById("scanStatusText");
  const btnScanNext = document.getElementById("btnScanNext");

  const isComplete = (currentCursor === 0 && totalScanned > 0) || (totalScanned >= dbTotalKeys && dbTotalKeys > 0);

  if (statusText) {
    statusText.innerHTML = `
      Loaded <strong>${totalScanned}</strong> keys
      ${isComplete ? '<span style="color: var(--accent-success); margin-left: 6px;">(All Keys Loaded)</span>' : `(Next Cursor: ${currentCursor})`}
      | DB Total: <strong>${dbTotalKeys}</strong>
    `;
  }

  if (btnScanNext) {
    btnScanNext.disabled = isScanning || isComplete;
    btnScanNext.innerHTML = isScanning
      ? `<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Loading...`
      : isComplete
      ? `<i data-lucide="check-circle-2" style="width: 13px; height: 13px;"></i> All Keys Loaded`
      : `<i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i> Load More`;
    setupIcons();
  }
}

// ==========================================
// Phase 2: Key Inspector & Detail View
// ==========================================

async function openKeyDetail(keyName) {
  activeDetailKey = keyName;
  const modal = document.getElementById("keyDetailModal");
  const titleEl = document.getElementById("detailKeyTitle");
  const metaEl = document.getElementById("detailHeaderMeta");
  const bodyEl = document.getElementById("detailBodyContent");

  titleEl.textContent = keyName;
  titleEl.title = keyName;
  metaEl.innerHTML = `<span style="color: var(--text-muted);">Loading key details...</span>`;
  bodyEl.innerHTML = `<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Fetching value from Redis...</div>`;
  modal.classList.add("active");

  try {
    let res = await fetch(`/api/keys/detail?key=${encodeURIComponent(keyName)}`);
    if (!res.ok) {
      res = await fetch(`/api/keys/${encodeURIComponent(keyName)}/detail`);
    }

    if (!res.ok) {
      let errMsg = "Key not found or could not be read";
      try {
        const errJson = await res.json();
        if (errJson && errJson.detail) errMsg = errJson.detail;
      } catch (e) {}
      throw new Error(errMsg);
    }
    const data = await res.json();
    activeDetailData = data;

    renderKeyDetailMeta(data);
    renderKeyDetailValue(data);
  } catch (err) {
    metaEl.innerHTML = `<span style="color: var(--accent-danger);">Error</span>`;
    bodyEl.innerHTML = `
      <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
        <h4>Failed to inspect key</h4>
        <p style="font-size: 0.85rem; margin-top: 0.5rem;">${escapeHtml(err.message)}</p>
      </div>
    `;
    setupIcons();
  }
}

function renderKeyDetailMeta(data) {
  const metaEl = document.getElementById("detailHeaderMeta");
  const memFormatted = data.memory_bytes ? (data.memory_bytes > 1024 ? `${(data.memory_bytes / 1024).toFixed(1)} KB` : `${data.memory_bytes} B`) : "N/A";
  const ttlText = data.ttl === -1 ? "No expiration" : data.ttl === -2 ? "Expired" : `${data.ttl}s`;

  metaEl.innerHTML = `
    <div style="display: flex; align-items: center; gap: 0.4rem;">
      <span style="color: var(--text-muted);">Type:</span>
      <span class="badge-db" style="color: var(--accent-primary); font-weight: 600;">${data.type.toUpperCase()}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 0.4rem;">
      <span style="color: var(--text-muted);">Size:</span>
      <span style="font-family: var(--font-mono);">${data.length} items / ${memFormatted}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 0.4rem;">
      <span style="color: var(--text-muted);">Encoding:</span>
      <span style="font-family: var(--font-mono);">${data.encoding}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 0.4rem; margin-left: auto;">
      <i data-lucide="clock" style="width: 13px; height: 13px; color: ${data.ttl === -1 ? 'var(--text-muted)' : 'var(--accent-warning)'};"></i>
      <span style="font-family: var(--font-mono); color: ${data.ttl === -1 ? 'var(--text-muted)' : 'var(--accent-warning)'}; font-weight: 600;">${ttlText}</span>
      <button type="button" class="btn btn-secondary" id="btnEditTtl" style="padding: 0.2rem 0.5rem; font-size: 0.72rem; margin-left: 0.25rem;">
        Edit TTL
      </button>
    </div>
  `;
  setupIcons();

  document.getElementById("btnEditTtl").addEventListener("click", () => {
    promptUpdateTTL(data.name, data.ttl);
  });
}

async function promptUpdateTTL(keyName, currentTtl) {
  const input = prompt(`Enter new TTL in seconds for '${keyName}':\n(-1 to persist with no expiration, or number of seconds)`, currentTtl > 0 ? currentTtl : "3600");
  if (input === null) return;
  const seconds = parseInt(input.trim(), 10);
  if (isNaN(seconds)) {
    alert("Please enter a valid integer.");
    return;
  }

  try {
    const res = await fetch(`/api/keys/${encodeURIComponent(keyName)}/ttl`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ seconds })
    });
    if (!res.ok) throw new Error("Failed to update TTL");
    openKeyDetail(keyName);
  } catch (err) {
    alert("Error updating TTL: " + err.message);
  }
}

function renderKeyDetailValue(data) {
  const bodyEl = document.getElementById("detailBodyContent");
  const lowerType = data.type.toLowerCase();

  // 1. HASH VIEW
  if (lowerType === "hash") {
    const fields = data.fields || [];
    bodyEl.innerHTML = `
      <div class="fields-toolbar">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <input type="text" id="hashFieldSearchInput" class="field-search-input" placeholder="Search ${fields.length} fields...">
          <span style="font-size: 0.75rem; color: var(--text-muted);" id="hashFieldCountText">${fields.length} fields</span>
        </div>
        <button type="button" class="btn btn-secondary" id="btnAddHashField" style="font-size: 0.75rem; padding: 0.35rem 0.65rem;">
          <i data-lucide="plus" style="width: 13px; height: 13px;"></i>
          Add Field
        </button>
      </div>

      <div class="fields-table-container">
        <table class="data-table" style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 35%;">Field</th>
              <th style="width: 53%;">Value</th>
              <th style="width: 12%; text-align: right;">Action</th>
            </tr>
          </thead>
          <tbody id="hashFieldsTableBody">
            ${renderHashFieldRows(fields)}
          </tbody>
        </table>
      </div>
    `;
    setupIcons();
    setupHashEventListeners(data.name, fields);
    return;
  }

  // 2. JSON or ReJSON-RL VIEW
  if (data.is_json || lowerType.includes("json")) {
    const jsonStr = data.parsed_json ? JSON.stringify(data.parsed_json, null, 2) : (data.value || "");
    bodyEl.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">JSON Document</span>
        <button type="button" class="btn btn-secondary" id="btnCopyJsonValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy JSON
        </button>
      </div>
      <div class="json-view-box" id="jsonViewBox">${escapeHtml(jsonStr)}</div>
    `;
    setupIcons();
    document.getElementById("btnCopyJsonValue").addEventListener("click", () => {
      navigator.clipboard.writeText(jsonStr);
      alert("JSON copied to clipboard!");
    });
    return;
  }

  // 3. STRING VIEW
  if (lowerType === "string") {
    bodyEl.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">String Value (${data.length} bytes)</span>
        <button type="button" class="btn btn-secondary" id="btnCopyStringValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy Value
        </button>
      </div>
      <div class="json-view-box" style="color: #f8fafc;">${escapeHtml(data.value || "")}</div>
    `;
    setupIcons();
    document.getElementById("btnCopyStringValue").addEventListener("click", () => {
      navigator.clipboard.writeText(data.value || "");
      alert("Value copied to clipboard!");
    });
    return;
  }

  // 4. LIST / SET / ZSET
  if (Array.isArray(data.value)) {
    const isZset = lowerType === "zset";
    bodyEl.innerHTML = `
      <div class="fields-table-container">
        <table class="data-table" style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 15%;">${isZset ? 'Score' : 'Index'}</th>
              <th style="width: 85%;">Element / Member</th>
            </tr>
          </thead>
          <tbody>
            ${data.value.map((item, idx) => `
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); color: var(--text-muted); font-size: 0.8rem;">
                  ${isZset ? item.score : `[${idx}]`}
                </td>
                <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem;">
                  ${escapeHtml(isZset ? item.member : String(item))}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
    return;
  }

  // Fallback raw display
  bodyEl.innerHTML = `<div class="json-view-box">${escapeHtml(String(data.value))}</div>`;
}

function renderHashFieldRows(fields) {
  if (fields.length === 0) {
    return `<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No fields found in hash</td></tr>`;
  }
  return fields.map(f => `
    <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500;">
        ${escapeHtml(f.field)}
      </td>
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; word-break: break-all;">
        ${escapeHtml(f.value)}
      </td>
      <td style="padding: 0.6rem 1rem; text-align: right;">
        <button type="button" class="btn-icon danger btn-delete-hash-field" data-field="${encodeURIComponent(f.field)}" title="Delete field">
          <i data-lucide="trash-2" style="width: 13px; height: 13px;"></i>
        </button>
      </td>
    </tr>
  `).join("");
}

function setupHashEventListeners(keyName, allFields) {
  const searchInput = document.getElementById("hashFieldSearchInput");
  const countText = document.getElementById("hashFieldCountText");
  const tbody = document.getElementById("hashFieldsTableBody");

  // Instant field filtering
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.trim().toLowerCase();
      const filtered = q ? allFields.filter(f => f.field.toLowerCase().includes(q) || f.value.toLowerCase().includes(q)) : allFields;
      tbody.innerHTML = renderHashFieldRows(filtered);
      countText.textContent = `${filtered.length} of ${allFields.length} fields`;
      setupIcons();
      attachHashDeleteHandlers(keyName);
    });
  }

  // Add field button
  const btnAdd = document.getElementById("btnAddHashField");
  if (btnAdd) {
    btnAdd.addEventListener("click", async () => {
      const field = prompt(`Enter field name for hash '${keyName}':`);
      if (!field) return;
      const val = prompt(`Enter value for field '${field}':`);
      if (val === null) return;

      try {
        const res = await fetch(`/api/keys/${encodeURIComponent(keyName)}/field`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ field, value: val })
        });
        if (!res.ok) throw new Error("Failed to set field");
        openKeyDetail(keyName);
      } catch (err) {
        alert("Error setting field: " + err.message);
      }
    });
  }

  attachHashDeleteHandlers(keyName);
}

function attachHashDeleteHandlers(keyName) {
  document.querySelectorAll(".btn-delete-hash-field").forEach(btn => {
    btn.addEventListener("click", async () => {
      const field = decodeURIComponent(btn.getAttribute("data-field"));
      if (confirm(`Delete field '${field}' from hash '${keyName}'?`)) {
        try {
          const res = await fetch(`/api/keys/${encodeURIComponent(keyName)}/field/${encodeURIComponent(field)}`, {
            method: "DELETE"
          });
          if (!res.ok) throw new Error("Failed to delete field");
          openKeyDetail(keyName);
        } catch (err) {
          alert("Error: " + err.message);
        }
      }
    });
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==========================================
// Safe Delete Confirmation Modal (Type CONFIRM)
// ==========================================

function triggerDeleteConfirmation(keyName, onSuccess) {
  pendingDeleteKey = keyName;
  pendingDeleteCallback = onSuccess;

  const modal = document.getElementById("deleteKeyConfirmModal");
  const targetBadge = document.getElementById("deleteKeyTargetName");
  const inputConfirm = document.getElementById("inputConfirmDelete");
  const btnSubmit = document.getElementById("btnSubmitDeleteKey");

  targetBadge.textContent = keyName;
  inputConfirm.value = "";
  btnSubmit.disabled = true;
  modal.classList.add("active");
  inputConfirm.focus();

  // Validate typing "CONFIRM"
  inputConfirm.oninput = () => {
    const val = inputConfirm.value.trim().toUpperCase();
    btnSubmit.disabled = (val !== "CONFIRM" && inputConfirm.value.trim() !== keyName);
  };

  btnSubmit.onclick = async () => {
    btnSubmit.disabled = true;
    btnSubmit.textContent = "Deleting...";

    try {
      const res = await fetch(`/api/keys/${encodeURIComponent(keyName)}?confirmed=true`, {
        method: "DELETE"
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Failed to delete key");

      modal.classList.remove("active");
      if (pendingDeleteCallback) {
        pendingDeleteCallback();
      }
    } catch (err) {
      alert("Error deleting key: " + err.message);
    } finally {
      btnSubmit.disabled = false;
      btnSubmit.textContent = "Delete Permanently";
    }
  };
}

// ==========================================
// Connected Clients Management
// ==========================================

async function openClientsModal() {
  const modal = document.getElementById("clientsListModal");
  modal.classList.add("active");
  await loadConnectedClients();
}

function closeClientsModal() {
  const modal = document.getElementById("clientsListModal");
  modal.classList.remove("active");
}

async function loadConnectedClients() {
  const container = document.getElementById("clientsTableContainer");
  const countBadge = document.getElementById("clientsCountBadge");
  const quickStats = document.getElementById("clientsQuickStats");
  const searchInput = document.getElementById("clientsSearchInput");

  container.innerHTML = `<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);"><i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i><br>Fetching connected clients...</div>`;
  setupIcons();

  try {
    const res = await fetch("/api/clients");
    if (!res.ok) throw new Error("Failed to load connected clients");
    allConnectedClients = await res.json();

    if (countBadge) countBadge.textContent = allConnectedClients.length;
    if (quickStats) quickStats.textContent = `${allConnectedClients.length} total connections`;

    if (searchInput) searchInput.value = "";
    renderClientsTable(allConnectedClients);
  } catch (err) {
    container.innerHTML = `
      <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
        <h4>Error loading clients</h4>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">${err.message}</p>
      </div>
    `;
    setupIcons();
  }
}

function renderClientsTable(clients) {
  const container = document.getElementById("clientsTableContainer");
  if (!clients || clients.length === 0) {
    container.innerHTML = `
      <div style="padding: 3rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="users" style="width: 32px; height: 32px; margin-bottom: 0.5rem; opacity: 0.4;"></i>
        <p>No matching connected clients found.</p>
      </div>
    `;
    setupIcons();
    return;
  }

  container.innerHTML = `
    <table class="data-table" style="width: 100%;">
      <thead>
        <tr>
          <th style="width: 7%;">ID</th>
          <th style="width: 25%;">Client Name / Host</th>
          <th style="width: 22%;">Remote Address (IP:Port)</th>
          <th style="width: 8%;">DB</th>
          <th style="width: 12%;">Last CMD</th>
          <th style="width: 10%;">Age</th>
          <th style="width: 10%;">Idle</th>
          <th style="width: 6%; text-align: right;">Action</th>
        </tr>
      </thead>
      <tbody>
        ${clients.map(c => `
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); color: var(--text-muted); font-size: 0.8rem;">
              #${c.id}
            </td>
            <td style="padding: 0.65rem 0.85rem;">
              <div style="font-weight: 600; font-size: 0.85rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.4rem;">
                <span>${escapeHtml(c.name)}</span>
                ${c.flags && c.flags.includes("O") ? '<span class="badge-db" style="background: rgba(234, 179, 8, 0.15); color: #fde047; font-size: 0.65rem;">MONITOR</span>' : ''}
              </div>
              <div class="client-sub-text">User: ${escapeHtml(c.user)} | Flags: ${escapeHtml(c.flags || 'none')}</div>
            </td>
            <td style="padding: 0.65rem 0.85rem;">
              <div class="client-ip-cell">${escapeHtml(c.addr)}</div>
              <div class="client-sub-text">Target: ${escapeHtml(c.laddr || "localhost")}</div>
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.82rem;">
              DB${c.db}
            </td>
            <td style="padding: 0.65rem 0.85rem;">
              <span class="client-cmd-badge">${escapeHtml(c.cmd || "idle")}</span>
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary);">
              ${c.age_human}
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; color: ${c.idle > 300 ? 'var(--accent-warning)' : 'var(--accent-success)'};">
              ${c.idle_human}
            </td>
            <td style="padding: 0.65rem 0.85rem; text-align: right;">
              <button type="button" class="btn-icon danger btn-kill-client" data-id="${c.id}" data-addr="${escapeHtml(c.addr)}" title="Disconnect client">
                <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
              </button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;

  setupIcons();

  container.querySelectorAll(".btn-kill-client").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const addr = btn.getAttribute("data-addr");
      killConnectedClient(id, addr);
    });
  });
}

async function killConnectedClient(clientId, clientAddr) {
  if (!confirm(`Are you sure you want to disconnect client #${clientId} (${clientAddr})?`)) {
    return;
  }
  try {
    const res = await fetch(`/api/clients/${clientId}`, { method: "DELETE" });
    const data = await res.json();
    if (!res.ok) throw new Error(data.detail || "Failed to disconnect client");
    await loadConnectedClients();
    await refreshStatus();
  } catch (err) {
    alert("Error disconnecting client: " + err.message);
  }
}

// ==========================================
// Phase 3: Real-Time Slowlog & Latency Profiler
// ==========================================

async function openSlowlogModal() {
  const modal = document.getElementById("slowlogModal");
  if (!modal) return;
  modal.classList.add("active");
  currentSlowlogMinDuration = 0;
  currentSlowlogSearch = "";
  currentSlowlogNode = "all";

  // Reset filter buttons
  document.querySelectorAll(".slowlog-filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-min-duration") === "0");
  });
  const searchInput = document.getElementById("slowlogSearchInput");
  if (searchInput) searchInput.value = "";

  await loadSlowlog();
}

function closeSlowlogModal() {
  const modal = document.getElementById("slowlogModal");
  if (modal) modal.classList.remove("active");
}

async function loadSlowlog() {
  const container = document.getElementById("slowlogTableContainer");
  const countBadge = document.getElementById("slowlogCountBadge");
  const thresholdBadge = document.getElementById("slowlogThresholdBadge");
  const footerStats = document.getElementById("slowlogFooterStats");

  if (container) {
    container.innerHTML = `
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem; color: #38bdf8;"></i><br>
        Fetching slowlog entries across Redis nodes...
      </div>
    `;
    setupIcons();
  }

  try {
    const res = await fetch("/api/slowlog?limit=250");
    if (!res.ok) throw new Error("Failed to fetch slowlog");
    const data = await res.json();
    allSlowlogEntries = data.entries || [];

    if (countBadge) countBadge.textContent = allSlowlogEntries.length;
    if (thresholdBadge && data.slower_than_us !== null && data.slower_than_us !== undefined) {
      const msThreshold = (data.slower_than_us / 1000).toFixed(1);
      thresholdBadge.textContent = `Threshold: > ${msThreshold}ms (${data.slower_than_us} µs)`;
    }
    if (footerStats) {
      footerStats.textContent = `Total buffer: ${data.total_len || allSlowlogEntries.length} entries | Max buffer: ${data.max_len || 'N/A'}`;
    }

    buildSlowlogNodeFilter(allSlowlogEntries);
    filterAndRenderSlowlog();
  } catch (err) {
    if (container) {
      container.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error Loading Slowlog</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${escapeHtml(err.message)}</p>
        </div>
      `;
      setupIcons();
    }
  }
}

function buildSlowlogNodeFilter(entries) {
  const container = document.getElementById("slowlogNodeFilterContainer");
  if (!container) return;

  const nodes = Array.from(new Set(entries.map(e => e.node).filter(Boolean)));
  if (nodes.length <= 1) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = `
    <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; margin-left: 0.5rem;">Node:</span>
    <select id="slowlogNodeSelect" class="form-select" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; width: auto; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
      <option value="all">All Nodes (${nodes.length})</option>
      ${nodes.map(n => `<option value="${escapeHtml(n)}" ${currentSlowlogNode === n ? 'selected' : ''}>${escapeHtml(n)}</option>`).join("")}
    </select>
  `;

  const sel = document.getElementById("slowlogNodeSelect");
  if (sel) {
    sel.addEventListener("change", () => {
      currentSlowlogNode = sel.value;
      filterAndRenderSlowlog();
    });
  }
}

function filterAndRenderSlowlog() {
  let list = allSlowlogEntries;

  if (currentSlowlogMinDuration > 0) {
    list = list.filter(e => e.duration_ms >= currentSlowlogMinDuration);
  }

  if (currentSlowlogNode && currentSlowlogNode !== "all") {
    list = list.filter(e => e.node === currentSlowlogNode);
  }

  if (currentSlowlogSearch) {
    const q = currentSlowlogSearch.toLowerCase();
    list = list.filter(e => {
      const cmdStr = (e.command || []).join(" ").toLowerCase();
      const clientStr = (e.client_ip || "").toLowerCase();
      const nodeStr = (e.node || "").toLowerCase();
      return cmdStr.includes(q) || clientStr.includes(q) || nodeStr.includes(q) || String(e.id).includes(q);
    });
  }

  renderSlowlogTable(list);
}

function renderSlowlogTable(entries) {
  const container = document.getElementById("slowlogTableContainer");
  if (!container) return;

  if (!entries || entries.length === 0) {
    container.innerHTML = `
      <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-muted);">
        <div style="width: 54px; height: 54px; border-radius: 50%; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.25); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          <i data-lucide="check-circle-2" style="width: 28px; height: 28px; color: #4ade80;"></i>
        </div>
        <h4 style="color: var(--text-primary); margin-bottom: 0.35rem;">No Slow Queries Recorded</h4>
        <p style="font-size: 0.85rem; max-width: 440px; margin: 0 auto; line-height: 1.5;">
          ${allSlowlogEntries.length === 0 ? "Redis latency is healthy! All commands executed within the threshold." : "No slowlog entries matched the active filters."}
        </p>
      </div>
    `;
    setupIcons();
    return;
  }

  container.innerHTML = `
    <table class="keys-table" style="width: 100%;">
      <thead>
        <tr>
          <th style="width: 60px;"># ID</th>
          <th style="width: 155px;">Timestamp</th>
          <th style="width: 110px;">Execution Time</th>
          <th>Command & Arguments</th>
          <th style="width: 150px;">Target Node</th>
          <th style="width: 170px;">Client Caller</th>
        </tr>
      </thead>
      <tbody>
        ${entries.map(e => {
          let badgeClass = "badge-duration-fast";
          if (e.duration_ms >= 50) {
            badgeClass = "badge-duration-critical";
          } else if (e.duration_ms >= 10) {
            badgeClass = "badge-duration-warning";
          }

          const cmdStr = (e.command && e.command.length > 0) ? e.command.join(" ") : "(empty)";

          return `
            <tr>
              <td style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">#${e.id}</td>
              <td style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary); white-space: nowrap;">
                ${escapeHtml(e.time_str || "N/A")}
              </td>
              <td>
                <span class="badge-duration ${badgeClass}">
                  <i data-lucide="clock" style="width: 11px; height: 11px;"></i>
                  ${e.duration_ms} ms
                </span>
                <span style="font-size: 0.68rem; color: var(--text-muted); display: block; margin-top: 2px; font-family: var(--font-mono);">
                  ${e.duration_us.toLocaleString()} µs
                </span>
              </td>
              <td>
                <span class="slowlog-cmd-code" title="${escapeHtml(cmdStr)}">${escapeHtml(cmdStr)}</span>
              </td>
              <td>
                ${e.node ? `<span class="slowlog-node-pill">${escapeHtml(e.node)}</span>` : '<span style="color: var(--text-muted); font-size: 0.75rem;">Default</span>'}
              </td>
              <td style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">
                ${escapeHtml(e.client_ip || "Unknown")}
                ${e.client_name ? `<span style="color: var(--text-muted); display: block; font-size: 0.7rem;">(${escapeHtml(e.client_name)})</span>` : ''}
              </td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
  `;

  setupIcons();
}

async function clearSlowlog() {
  if (!confirm("Are you sure you want to reset the Redis Slowlog buffer?\n\nThis will clear recorded slow commands across all connected Redis instances.")) {
    return;
  }

  try {
    const res = await fetch("/api/slowlog/reset", { method: "POST" });
    if (!res.ok) throw new Error("Failed to reset slowlog");
    await loadSlowlog();
  } catch (err) {
    alert("Error resetting slowlog: " + err.message);
  }
}

// ==========================================
// Phase 3: Memory Analysis & BigKeys Profiler
// ==========================================

async function openMemoryModal() {
  const modal = document.getElementById("memoryModal");
  if (!modal) return;
  modal.classList.add("active");

  await loadMemoryOverview();

  if (!currentMemoryAnalysis) {
    renderMemoryProfilingSafeguardUI();
  } else {
    renderMemoryAnalysisUI(currentMemoryAnalysis);
  }
}

function closeMemoryModal() {
  const modal = document.getElementById("memoryModal");
  if (modal) modal.classList.remove("active");
}

async function loadMemoryOverview() {
  const container = document.getElementById("memoryOverviewContainer");
  if (!container) return;

  container.innerHTML = `
    <div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">
      <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem; color: #a78bfa;"></i><br>
      Refreshing live memory metrics...
    </div>
  `;
  setupIcons();

  try {
    const res = await fetch("/api/memory/overview");
    if (!res.ok) throw new Error("Failed to fetch memory overview");
    currentMemoryOverview = await res.json();
    renderMemoryOverviewUI(currentMemoryOverview);
  } catch (err) {
    container.innerHTML = `
      <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i>
        <p style="font-size: 0.85rem;">Error loading memory overview: ${escapeHtml(err.message)}</p>
      </div>
    `;
    setupIcons();
  }
}

function renderMemoryOverviewUI(data) {
  const container = document.getElementById("memoryOverviewContainer");
  if (!container || !data) return;

  let fragStatusClass = "mem-status-healthy";
  let fragStatusLabel = "Optimal (1.0 - 1.5)";
  if (data.fragmentation_status === "critical") {
    fragStatusClass = "mem-status-critical";
    fragStatusLabel = "Critical (> 2.0)";
  } else if (data.fragmentation_status === "warning") {
    fragStatusClass = "mem-status-warning";
    fragStatusLabel = data.fragmentation_ratio < 0.9 ? "Swapping (< 0.9)" : "Warning (> 1.5)";
  }

  container.innerHTML = `
    <div class="mem-grid">
      <!-- Used Memory -->
      <div class="mem-stat-card" style="--card-border-glow: rgba(56, 189, 248, 0.6);">
        <div class="mem-stat-label">
          <span>Used Memory</span>
          <i data-lucide="database" style="width: 14px; height: 14px; color: #38bdf8;"></i>
        </div>
        <div class="mem-stat-value" style="color: #38bdf8;">${data.used_memory_human}</div>
        <div class="mem-stat-sub">
          Peak: <span style="font-family: var(--font-mono); color: var(--text-primary); font-weight: 600;">${data.used_memory_peak_human}</span>
        </div>
      </div>

      <!-- Fragmentation Ratio -->
      <div class="mem-stat-card" style="--card-border-glow: rgba(245, 158, 11, 0.6);">
        <div class="mem-stat-label">
          <span>Fragmentation</span>
          <span class="mem-status-badge ${fragStatusClass}">${data.fragmentation_status}</span>
        </div>
        <div class="mem-stat-value" style="color: ${data.fragmentation_status === 'healthy' ? '#4ade80' : '#fbbf24'};">
          ${data.fragmentation_ratio}
        </div>
        <div class="mem-stat-sub">
          RSS: <span style="font-family: var(--font-mono); color: var(--text-primary); font-weight: 600;">${data.used_memory_rss_human}</span> (${fragStatusLabel})
        </div>
      </div>

      <!-- Cache Hit Ratio -->
      <div class="mem-stat-card" style="--card-border-glow: rgba(34, 197, 94, 0.6);">
        <div class="mem-stat-label">
          <span>Cache Hit Ratio</span>
          <i data-lucide="trending-up" style="width: 14px; height: 14px; color: #4ade80;"></i>
        </div>
        <div class="mem-stat-value" style="color: #4ade80;">${data.hit_ratio_percent}%</div>
        <div class="mem-stat-sub">
          <span style="font-family: var(--font-mono); color: var(--text-primary);">${data.keyspace_hits.toLocaleString()}</span> hits / 
          <span style="font-family: var(--font-mono); color: var(--text-muted);">${data.keyspace_misses.toLocaleString()}</span> misses
        </div>
      </div>

      <!-- Total Keys & Max Memory -->
      <div class="mem-stat-card" style="--card-border-glow: rgba(168, 85, 247, 0.6);">
        <div class="mem-stat-label">
          <span>Keys & Eviction</span>
          <i data-lucide="server" style="width: 14px; height: 14px; color: #c084fc;"></i>
        </div>
        <div class="mem-stat-value" style="color: #c084fc;">${data.dbsize.toLocaleString()}</div>
        <div class="mem-stat-sub">
          Max: <span style="font-family: var(--font-mono); color: var(--text-primary);">${data.maxmemory_human}</span> | Policy: ${escapeHtml(data.maxmemory_policy)}
        </div>
      </div>
    </div>
  `;

  setupIcons();
}

function renderMemoryProfilingSafeguardUI() {
  const container = document.getElementById("memoryProfilingContainer");
  if (!container) return;

  container.innerHTML = `
    <div class="mem-safeguard-box">
      <div class="mem-safeguard-header">
        <i data-lucide="alert-triangle" style="width: 22px; height: 22px;"></i>
        <span>Performance Notice: Safe Non-Blocking Key Sampling</span>
      </div>
      <div class="mem-safeguard-body">
        Profiling analyzes data structure allocation and identifies the <strong>Top 50 BigKeys</strong> by running non-blocking <code>SCAN</code> and computing memory footprints with <code>MEMORY USAGE</code>.
        To ensure zero downtime and prevent CPU spikes on high-throughput environments, profiling is only run on-demand with controlled sampling limits.
      </div>
      <div class="mem-safeguard-controls">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-primary);">Sample Limit:</span>
          <select id="memSampleSizeSelect" class="form-select" style="padding: 0.35rem 0.65rem; font-size: 0.8rem; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
            <option value="100">100 keys (Fastest)</option>
            <option value="250">250 keys (Balanced)</option>
            <option value="500" selected>500 keys (Recommended)</option>
            <option value="1000">1,000 keys (Deep Scan)</option>
            <option value="2500">2,500 keys (Thorough)</option>
          </select>
        </div>

        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-primary);">Pattern:</span>
          <input type="text" id="memSamplePatternInput" class="form-input" value="*" placeholder="e.g. *, user:*" style="padding: 0.35rem 0.65rem; font-size: 0.8rem; width: 140px; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
        </div>

        <button type="button" class="btn btn-primary" id="btnStartProfilingAction" style="margin-left: auto; padding: 0.45rem 1rem;">
          <i data-lucide="zap" style="width: 14px; height: 14px;"></i>
          Start Memory & BigKeys Profiling
        </button>
      </div>
    </div>
  `;

  setupIcons();

  const btnStart = document.getElementById("btnStartProfilingAction");
  if (btnStart) {
    btnStart.addEventListener("click", () => {
      const sampleSize = parseInt(document.getElementById("memSampleSizeSelect").value, 10) || 500;
      const pattern = document.getElementById("memSamplePatternInput").value || "*";
      triggerMemoryAnalysis(sampleSize, pattern);
    });
  }
}

async function triggerMemoryAnalysis(sampleSize = 500, pattern = "*") {
  const container = document.getElementById("memoryProfilingContainer");
  if (!container) return;

  isMemoryProfilingRunning = true;
  container.innerHTML = `
    <div style="padding: 3.5rem 1.5rem; text-align: center;">
      <i data-lucide="refresh-cw" class="spin" style="width: 36px; height: 36px; color: #a78bfa; margin-bottom: 1rem;"></i>
      <h3 style="color: var(--text-primary); font-size: 1.1rem; margin-bottom: 0.4rem;">Analyzing Redis Keyspace...</h3>
      <p style="color: var(--text-secondary); font-size: 0.85rem; max-width: 480px; margin: 0 auto; line-height: 1.5;">
        Scanning sample of up to <strong>${sampleSize.toLocaleString()}</strong> keys (pattern <code>${escapeHtml(pattern)}</code>) and measuring memory allocations...
      </p>
    </div>
  `;
  setupIcons();

  try {
    const res = await fetch("/api/memory/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sample_size: sampleSize, pattern: pattern })
    });
    if (!res.ok) throw new Error("Failed to complete memory profiling");
    currentMemoryAnalysis = await res.json();
    isMemoryProfilingRunning = false;
    renderMemoryAnalysisUI(currentMemoryAnalysis);
  } catch (err) {
    isMemoryProfilingRunning = false;
    container.innerHTML = `
      <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
        <h4>Memory Profiling Failed</h4>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">${escapeHtml(err.message)}</p>
        <button type="button" class="btn btn-secondary" id="btnRetryProfiling" style="margin-top: 1rem;">Try Again</button>
      </div>
    `;
    setupIcons();
    const btnRetry = document.getElementById("btnRetryProfiling");
    if (btnRetry) btnRetry.addEventListener("click", renderMemoryProfilingSafeguardUI);
  }
}

function renderMemoryAnalysisUI(data) {
  const container = document.getElementById("memoryProfilingContainer");
  if (!container || !data) return;

  const typeColorMap = {
    string: "#38bdf8",
    hash: "#ec4899",
    list: "#a855f7",
    set: "#eab308",
    zset: "#22c55e",
    stream: "#06b6d4",
    json: "#f97316",
    other: "#94a3b8"
  };

  container.innerHTML = `
    <!-- Summary Header Bar -->
    <div style="background: rgba(15,23,42,0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 0.85rem 1.25rem; display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.75rem;">
      <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; font-size: 0.825rem;">
        <div>
          <span style="color: var(--text-muted);">Sampled Keys:</span>
          <strong style="color: var(--text-primary); font-family: var(--font-mono); margin-left: 4px;">${data.sampled_count.toLocaleString()}</strong>
        </div>
        <div style="color: var(--border-subtle);">|</div>
        <div>
          <span style="color: var(--text-muted);">Scan Duration:</span>
          <strong style="color: #4ade80; font-family: var(--font-mono); margin-left: 4px;">${data.scan_duration_ms} ms</strong>
        </div>
        <div style="color: var(--border-subtle);">|</div>
        <div>
          <span style="color: var(--text-muted);">Sampled Memory:</span>
          <strong style="color: #38bdf8; font-family: var(--font-mono); margin-left: 4px;">${data.sampled_memory_human}</strong>
        </div>
      </div>
      <button type="button" class="btn btn-secondary" id="btnReRunProfiling" style="padding: 0.35rem 0.75rem; font-size: 0.75rem;">
        <i data-lucide="refresh-cw" style="width: 12px; height: 12px;"></i>
        Re-Run Profiling
      </button>
    </div>

    <!-- Visual Memory Breakdown by Type -->
    <div class="mem-bar-wrapper">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="pie-chart" style="width: 15px; height: 15px; color: #a78bfa;"></i>
          Memory Allocation by Data Type
        </span>
        <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">
          ${data.types_breakdown.length} active types
        </span>
      </div>

      <!-- Stacked Proportion Bar -->
      <div class="mem-stacked-bar">
        ${data.types_breakdown.map(t => {
          const color = typeColorMap[t.type.toLowerCase()] || "#94a3b8";
          return `
            <div class="mem-stacked-segment" style="width: ${t.percentage}%; background: ${color};" title="${t.type.toUpperCase()}: ${t.percentage}% (${t.total_human})"></div>
          `;
        }).join("")}
      </div>

      <!-- Type Cards Grid -->
      <div class="mem-type-cards-grid">
        ${data.types_breakdown.map(t => {
          const color = typeColorMap[t.type.toLowerCase()] || "#94a3b8";
          return `
            <div class="mem-type-card" style="border-left: 3px solid ${color};">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="type-badge ${t.type.toLowerCase()}" style="font-size: 0.68rem; padding: 0.1rem 0.4rem;">${t.type.toUpperCase()}</span>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--text-primary);">${t.percentage}%</span>
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: ${color}; margin-top: 2px;">
                ${t.total_human}
              </div>
              <div style="font-size: 0.7rem; color: var(--text-muted);">
                ${t.count.toLocaleString()} keys
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </div>

    <!-- Bottleneck Recommendations -->
    ${data.recommendations && data.recommendations.length > 0 ? `
      <div class="mem-recommendations-wrapper">
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="zap" style="width: 15px; height: 15px; color: #fbbf24;"></i>
          Bottleneck Insights & Recommendations
        </div>
        ${data.recommendations.map(r => `
          <div class="recommendation-item">
            <span>${escapeHtml(r)}</span>
          </div>
        `).join("")}
      </div>
    ` : ''}

    <!-- Top 50 BigKeys Leaderboard -->
    <div style="background: rgba(15,23,42,0.45); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 1.25rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.75rem;">
        <div>
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="bar-chart-2" style="width: 16px; height: 16px; color: #38bdf8;"></i>
            Top 50 BigKeys Leaderboard
          </h4>
          <span style="font-size: 0.72rem; color: var(--text-secondary);">Highest memory consumers discovered in key sample</span>
        </div>
        <div class="search-group" style="max-width: 320px;">
          <i data-lucide="search" class="search-icon" style="width: 13px; height: 13px;"></i>
          <input type="text" id="bigkeysSearchInput" class="search-input" placeholder="Filter big keys..." style="padding: 0.35rem 0.65rem 0.35rem 1.85rem; font-size: 0.78rem;">
        </div>
      </div>

      <div id="bigkeysTableContainer">
        ${renderBigKeysTableHtml(data.top_bigkeys)}
      </div>
    </div>
  `;

  setupIcons();

  const btnReRun = document.getElementById("btnReRunProfiling");
  if (btnReRun) {
    btnReRun.addEventListener("click", renderMemoryProfilingSafeguardUI);
  }

  const searchInput = document.getElementById("bigkeysSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.trim().toLowerCase();
      const filtered = q ? data.top_bigkeys.filter(k => k.key.toLowerCase().includes(q) || k.type.toLowerCase().includes(q)) : data.top_bigkeys;
      const tableContainer = document.getElementById("bigkeysTableContainer");
      if (tableContainer) {
        tableContainer.innerHTML = renderBigKeysTableHtml(filtered);
        setupIcons();
        attachBigKeyRowHandlers();
      }
    });
  }

  attachBigKeyRowHandlers();
}

function renderBigKeysTableHtml(keys) {
  if (!keys || keys.length === 0) {
    return `<div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No keys found</div>`;
  }

  const maxMem = keys[0] ? keys[0].memory_bytes : 1;

  return `
    <table class="keys-table" style="width: 100%;">
      <thead>
        <tr>
          <th style="width: 50px;">Rank</th>
          <th>Key Name</th>
          <th style="width: 90px;">Type</th>
          <th style="width: 180px;">Memory Usage</th>
          <th style="width: 110px;">Items / Length</th>
          <th style="width: 110px;">TTL</th>
          <th style="width: 130px; text-align: right;">Actions</th>
        </tr>
      </thead>
      <tbody>
        ${keys.map((item, idx) => {
          let rankClass = "rank-normal";
          if (idx === 0) rankClass = "rank-gold";
          else if (idx === 1) rankClass = "rank-silver";
          else if (idx === 2) rankClass = "rank-bronze";

          const memPct = maxMem > 0 ? Math.max(5, Math.round((item.memory_bytes / maxMem) * 100)) : 10;

          let ttlStr = "No TTL (Persistent)";
          let ttlColor = "var(--text-muted)";
          if (item.ttl > 0) {
            ttlStr = `${item.ttl.toLocaleString()}s`;
            ttlColor = "var(--accent-warning)";
          }

          return `
            <tr>
              <td>
                <span class="rank-badge ${rankClass}">#${idx + 1}</span>
              </td>
              <td>
                <a href="javascript:void(0)" class="key-name-link bigkey-inspect-btn" data-key="${escapeHtml(item.key)}" style="font-family: var(--font-mono); font-size: 0.82rem; font-weight: 600; color: #38bdf8; text-decoration: none;" title="Inspect key: ${escapeHtml(item.key)}">
                  ${escapeHtml(item.key)}
                </a>
              </td>
              <td>
                <span class="type-badge ${item.type.toLowerCase()}" style="font-size: 0.68rem; padding: 0.15rem 0.45rem;">
                  ${item.type.toUpperCase()}
                </span>
              </td>
              <td>
                <div style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; color: var(--text-primary);">
                  ${item.memory_human}
                </div>
                <div style="width: 100%; height: 5px; background: rgba(255,255,255,0.06); border-radius: 9999px; overflow: hidden; margin-top: 3px;">
                  <div style="width: ${memPct}%; height: 100%; background: #38bdf8; border-radius: 9999px;"></div>
                </div>
              </td>
              <td style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary);">
                ${item.length.toLocaleString()}
              </td>
              <td style="font-family: var(--font-mono); font-size: 0.75rem; color: ${ttlColor};">
                ${ttlStr}
              </td>
              <td style="text-align: right;">
                <div style="display: inline-flex; align-items: center; gap: 0.35rem;">
                  <button type="button" class="btn btn-secondary bigkey-inspect-btn" data-key="${escapeHtml(item.key)}" style="padding: 0.25rem 0.5rem; font-size: 0.72rem;" title="Inspect key detail">
                    <i data-lucide="external-link" style="width: 11px; height: 11px;"></i>
                    Inspect
                  </button>
                  <button type="button" class="btn btn-danger bigkey-delete-btn" data-key="${escapeHtml(item.key)}" style="padding: 0.25rem 0.5rem; font-size: 0.72rem;" title="Delete oversized key">
                    <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
                  </button>
                </div>
              </td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
  `;
}

function attachBigKeyRowHandlers() {
  document.querySelectorAll(".bigkey-inspect-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const keyName = btn.getAttribute("data-key");
      if (keyName) {
        closeMemoryModal();
        openKeyDetail(keyName);
      }
    });
  });

  document.querySelectorAll(".bigkey-delete-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const keyName = btn.getAttribute("data-key");
      if (keyName) {
        triggerDeleteConfirmation(keyName, async () => {
          if (currentMemoryAnalysis) {
            currentMemoryAnalysis.top_bigkeys = currentMemoryAnalysis.top_bigkeys.filter(k => k.key !== keyName);
            renderMemoryAnalysisUI(currentMemoryAnalysis);
          }
          await refreshStatus();
        });
      }
    });
  });
}

// Load Connections List from SQLite & connection limit
async function loadConnections() {
  const listEl = document.getElementById("connectionsList");
  try {
    const [connRes, limitRes] = await Promise.all([
      fetch("/api/connections"),
      fetch("/api/connections/limit")
    ]);
    const connections = await connRes.json();
    cachedConnections = connections || [];

    if (limitRes.ok) {
      const limitData = await limitRes.json();
      currentLimit = limitData.limit || 2;
    }

    renderConnectionsList();
  } catch (err) {
    if (listEl) {
      listEl.innerHTML = `<div style="padding: 1rem; color: var(--accent-danger);">Failed to load connections</div>`;
    }
  }
}

function updateLimitUI(connectedCount, limit) {
  const countEl = document.getElementById("connectedCountDisplay");
  const limitEl = document.getElementById("connLimitDisplay");
  const selectEl = document.getElementById("connLimitSelect");
  const dotsEl = document.getElementById("limitProgressDots");
  const pillEl = document.getElementById("limitCountPill");

  if (countEl) countEl.textContent = connectedCount;
  if (limitEl) limitEl.textContent = limit;
  if (selectEl && String(selectEl.value) !== String(limit)) {
    selectEl.value = String(limit);
  }

  if (pillEl) {
    if (connectedCount >= limit && limit > 0) {
      pillEl.classList.add("at-limit");
      pillEl.title = "Connection limit reached";
    } else {
      pillEl.classList.remove("at-limit");
      pillEl.title = `${connectedCount} of ${limit} connections in use`;
    }
  }

  if (dotsEl) {
    let dotsHtml = "";
    for (let i = 0; i < limit; i++) {
      const isFilled = i < connectedCount;
      dotsHtml += `<span class="limit-slot-dot ${isFilled ? 'filled' : 'empty'}" title="Slot ${i + 1}: ${isFilled ? 'Connected' : 'Available'}"></span>`;
    }
    dotsEl.innerHTML = dotsHtml;
  }
}

function renderConnectionsList() {
  const listEl = document.getElementById("connectionsList");
  if (!listEl) return;

  // Update total badge in sidebar heading
  const totalBadge = document.getElementById("totalConnCountBadge");
  if (totalBadge) totalBadge.textContent = cachedConnections.length;

  // Update environment pill counts
  const envPills = document.querySelectorAll("#envFilterPills .env-pill-btn");
  envPills.forEach(pill => {
    const env = pill.getAttribute("data-env");
    let count = 0;
    if (env === "ALL") {
      count = cachedConnections.length;
    } else {
      count = cachedConnections.filter(c => (c.env || "LOCAL").toUpperCase() === env).length;
    }
    pill.textContent = `${env} (${count})`;
  });

  const q = (currentConnSearch || "").trim().toLowerCase();
  const env = currentEnvFilter;

  // Filter by search and env
  const filtered = cachedConnections.filter(c => {
    if (env !== "ALL" && (c.env || "LOCAL").toUpperCase() !== env) {
      return false;
    }
    if (q) {
      const matchName = (c.name || "").toLowerCase().includes(q);
      const matchHost = (c.host || "").toLowerCase().includes(q);
      const matchEnv = (c.env || "").toLowerCase().includes(q);
      const matchType = (c.conn_type || "").toLowerCase().includes(q);
      if (!matchName && !matchHost && !matchEnv && !matchType) return false;
    }
    return true;
  });

  // Sort connected clusters ALWAYS on top, then active selected, then alphabetical by name
  filtered.sort((a, b) => {
    const aConn = a.is_connected ? 1 : 0;
    const bConn = b.is_connected ? 1 : 0;
    if (bConn !== aConn) return bConn - aConn;

    const aSel = a.is_selected ? 1 : 0;
    const bSel = b.is_selected ? 1 : 0;
    if (bSel !== aSel) return bSel - aSel;

    return (a.name || "").localeCompare(b.name || "");
  });

  const connectedTotal = cachedConnections.filter(c => c.is_connected).length;
  updateLimitUI(connectedTotal, currentLimit);

  if (filtered.length === 0) {
    listEl.innerHTML = `
      <div class="empty-filter-state">
        <i data-lucide="search" style="width: 26px; height: 26px; color: var(--text-muted); margin-bottom: 0.5rem; opacity: 0.7;"></i>
        <div style="font-weight: 500; color: var(--text-secondary);">No matching connections</div>
        <span style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.25rem;">
          ${q ? `No results found for "${escapeHtml(q)}"` : `No connections configured in ${escapeHtml(env)}`}
        </span>
      </div>
    `;
    setupIcons();
    return;
  }

  listEl.innerHTML = filtered.map(c => {
    const envUpper = (c.env || "LOCAL").toUpperCase();
    const envClass = `badge-env-${envUpper.toLowerCase()}`;
    const isCluster = c.conn_type === "cluster";
    const isSentinel = c.conn_type === "sentinel";
    const isConfig = c.source === "config";
    const isConnected = !!c.is_connected;
    const isSelected = !!c.is_selected;

    return `
      <div class="conn-card ${isConnected ? 'is-connected' : ''} ${isSelected ? 'selected active' : ''}" data-id="${c.id}" title="Click to review config & connection options">
        
        <!-- Header: Lead Indicator + Name + Status Pill -->
        <div class="conn-card-header">
          <div class="conn-lead-indicator">
            ${isSelected ? `
              <span class="conn-status-indicator active" title="Active Cluster (Browsing Keys)">
                <i data-lucide="check-circle-2" style="width: 15px; height: 15px;"></i>
              </span>
            ` : isConnected ? `
              <span class="conn-status-indicator connected" title="Connected Cluster">
                <i data-lucide="check-circle-2" style="width: 15px; height: 15px;"></i>
              </span>
            ` : `
              <span class="conn-status-dot idle" title="Disconnected"></span>
            `}
          </div>

          <div class="conn-title-wrap">
            <span class="conn-name" title="${escapeHtml(c.name)}">${escapeHtml(c.name)}</span>
          </div>

          <div class="conn-status-badge-wrap">
            ${isSelected ? `
              <span class="badge-selected-cluster"><span class="beacon-dot"></span>ACTIVE</span>
            ` : isConnected ? `
              <span class="badge-connected-cluster">CONNECTED</span>
            ` : ''}
          </div>
        </div>

        <!-- Sub-row: Endpoint on left, Badges on right -->
        <div class="conn-sub-row">
          <div class="conn-endpoint" title="${escapeHtml(c.host)}:${c.port}">
            <i data-lucide="${isCluster ? 'network' : isSentinel ? 'git-branch' : 'server'}" style="width: 12px; height: 12px; opacity: 0.65; flex-shrink: 0;"></i>
            <span class="endpoint-text">${escapeHtml(c.host)}:${c.port}</span>
          </div>

          <div class="conn-tags">
            <span class="badge-env ${envClass}">${envUpper}</span>
            ${isCluster ? '<span class="badge-conn-type badge-type-cluster">CLUSTER</span>' : ''}
            ${isSentinel ? '<span class="badge-conn-type badge-type-sentinel">SENTINEL</span>' : ''}
            ${!isCluster && !isSentinel ? `<span class="badge-db">DB${c.db}</span>` : ''}
            ${c.use_tls ? '<i data-lucide="shield-check" class="conn-security-icon tls" title="TLS / SSL Encrypted"></i>' : ''}
            ${c.has_password ? '<i data-lucide="lock" class="conn-security-icon auth" title="Password Protected"></i>' : ''}
            ${isConfig ? '<span class="badge-source-cfg" title="Managed in config/connections.yaml">CFG</span>' : ''}
          </div>
        </div>

        <!-- Floating Quick Action Toolbar on Hover -->
        <div class="conn-hover-toolbar" onclick="event.stopPropagation()">
          ${isConnected ? `
            ${!isSelected ? `
              <button type="button" class="btn-hover-action btn-card-select" data-id="${c.id}" title="Switch to this cluster">
                <i data-lucide="arrow-right-left" style="width: 11px; height: 11px;"></i>
                <span>Switch</span>
              </button>
            ` : ''}
            <button type="button" class="btn-hover-action btn-hover-danger btn-card-disconnect" data-id="${c.id}" title="Disconnect cluster">
              <i data-lucide="x" style="width: 12px; height: 12px;"></i>
              <span>Disconnect</span>
            </button>
            ${(isCluster || isConnected) ? `
              <button type="button" class="btn-hover-action btn-view-topology-card" data-id="${c.id}" title="View topology & nodes">
                <i data-lucide="layers" style="width: 11px; height: 11px;"></i>
              </button>
            ` : ''}
          ` : `
            <button type="button" class="btn-hover-action btn-hover-connect btn-card-open-config" data-id="${c.id}" title="Review config & Connect">
              <i data-lucide="play" style="width: 11px; height: 11px;"></i>
              <span>Connect</span>
            </button>
            ${!isConfig ? `
              <button type="button" class="btn-hover-action btn-hover-danger btn-delete-conn" data-id="${c.id}" data-name="${escapeHtml(c.name)}" title="Delete connection">
                <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
              </button>
            ` : ''}
          `}
        </div>

      </div>
    `;
  }).join("");

  setupIcons();

  // Requirement 1: Clicking anywhere on card opens the Cluster Config Modal
  listEl.querySelectorAll(".conn-card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (
        e.target.closest(".btn-delete-conn") ||
        e.target.closest(".btn-view-topology-card") ||
        e.target.closest(".btn-card-disconnect") ||
        e.target.closest(".btn-card-select") ||
        e.target.closest(".btn-card-open-config")
      ) {
        return;
      }
      const connId = card.getAttribute("data-id");
      const targetConn = cachedConnections.find(c => c.id === connId);
      if (targetConn) {
        openClusterConfigModal(targetConn);
      }
    });
  });

  // Direct card disconnect button
  listEl.querySelectorAll(".btn-card-disconnect").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const connId = btn.getAttribute("data-id");
      await disconnectCluster(connId);
    });
  });

  // Direct card select / switch button
  listEl.querySelectorAll(".btn-card-select").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const connId = btn.getAttribute("data-id");
      await selectCluster(connId);
    });
  });

  // Direct card connect / open config button
  listEl.querySelectorAll(".btn-card-open-config").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const connId = btn.getAttribute("data-id");
      const targetConn = cachedConnections.find(c => c.id === connId);
      if (targetConn) {
        openClusterConfigModal(targetConn);
      }
    });
  });

  // Topology view handlers on cards
  listEl.querySelectorAll(".btn-view-topology-card").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      await openTopologyModal(id);
    });
  });

  // Delete handlers
  listEl.querySelectorAll(".btn-delete-conn").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      const name = btn.getAttribute("data-name");
      if (confirm(`Are you sure you want to delete '${name}'?`)) {
        await deleteConnection(id);
      }
    });
  });
}

// Parse seed nodes from various formats (JSON list of objects, list of strings, or comma-separated)
function parseSeedNodes(raw) {
  if (!raw) return [];
  if (Array.isArray(raw)) {
    return raw.map(n => {
      if (typeof n === "object" && n !== null) {
        return `${n.host || "127.0.0.1"}:${n.port || 6379}`;
      }
      return String(n);
    });
  }
  if (typeof raw === "string") {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed.map(n => {
          if (typeof n === "object" && n !== null) {
            return `${n.host || "127.0.0.1"}:${n.port || 6379}`;
          }
          return String(n);
        });
      }
    } catch (e) {
      return raw.split(",").map(s => s.trim()).filter(Boolean);
    }
  }
  return [];
}

// Cluster Config Modal (Requirement 1: show config and ask for connect)
function openClusterConfigModal(conn) {
  activeConfigConn = conn;
  const modal = document.getElementById("clusterConfigModal");
  const titleEl = document.getElementById("cfgModalTitle");
  const subtitleEl = document.getElementById("cfgModalSubtitle");
  const bodyEl = document.getElementById("cfgModalBody");
  const footerEl = document.getElementById("cfgModalFooter");

  titleEl.textContent = conn.name || "Cluster Configuration";
  subtitleEl.textContent = `Review configuration before connecting`;

  const isConnected = !!conn.is_connected;
  const isSelected = !!conn.is_selected;
  const isCluster = conn.conn_type === "cluster";
  const seedNodesList = parseSeedNodes(conn.cluster_nodes);
  const connectedCount = cachedConnections.filter(c => c.is_connected).length;
  const isAtLimit = !isConnected && connectedCount >= currentLimit;

  bodyEl.innerHTML = `
    <div class="config-status-banner ${isConnected ? 'connected' : 'disconnected'}">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="${isConnected ? 'check-circle-2' : 'alert-circle'}" style="width: 18px; height: 18px;"></i>
        <span>${isConnected ? 'Connected & Live' : 'Not Connected'}</span>
      </div>
      <div>
        ${isSelected ? '<span class="badge-selected-cluster">ACTIVE / VIEWING KEYS</span>' : isConnected ? '<span class="badge-connected-cluster">CONNECTED</span>' : '<span style="font-size: 0.75rem; color: var(--text-muted);">Ready to connect</span>'}
      </div>
    </div>

    <div class="config-grid">
      <div class="config-grid-row">
        <span class="config-label">Cluster / Instance Name</span>
        <span class="config-value">${escapeHtml(conn.name)}</span>
      </div>
      <div class="config-grid-row">
        <span class="config-label">Environment</span>
        <span class="config-value">
          <span class="badge-env badge-env-${(conn.env || 'LOCAL').toLowerCase()}">${(conn.env || 'LOCAL').toUpperCase()}</span>
        </span>
      </div>
      <div class="config-grid-row">
        <span class="config-label">Connection Type</span>
        <span class="config-value" style="text-transform: capitalize;">${escapeHtml(conn.conn_type || 'standalone')}</span>
      </div>
      <div class="config-grid-row">
        <span class="config-label">Host / Seed Node</span>
        <span class="config-value" style="color: var(--accent-primary);">${escapeHtml(conn.host)}:${conn.port}</span>
      </div>
      ${isCluster && (seedNodesList.length > 0 || conn.cluster_nodes) ? `
        <div class="config-grid-row config-grid-seeds-row">
          <span class="config-label" style="padding-top: 2px;">
            Seed Endpoints ${seedNodesList.length > 0 ? `(${seedNodesList.length})` : ''}
          </span>
          <div class="config-seeds-container">
            ${seedNodesList.length > 0
              ? seedNodesList.map(node => `
                  <span class="seed-node-pill" title="${escapeHtml(node)}">
                    <i data-lucide="server" style="width: 10px; height: 10px; opacity: 0.7;"></i>
                    ${escapeHtml(node)}
                  </span>
                `).join('')
              : `<span class="seed-node-pill">${escapeHtml(conn.cluster_nodes)}</span>`
            }
          </div>
        </div>
      ` : ''}
      ${!isCluster ? `
        <div class="config-grid-row">
          <span class="config-label">Database Index</span>
          <span class="config-value">DB ${conn.db || 0}</span>
        </div>
      ` : ''}
      <div class="config-grid-row">
        <span class="config-label">Authentication</span>
        <span class="config-value">
          ${conn.username ? escapeHtml(conn.username) : 'default'} / ${conn.has_password ? '•••••••• (Encrypted)' : 'None'}
        </span>
      </div>
      <div class="config-grid-row">
        <span class="config-label">TLS / SSL Encryption</span>
        <span class="config-value">
          ${conn.use_tls ? '<span style="color: var(--accent-success);">Enabled</span>' : '<span style="color: var(--text-muted);">Disabled</span>'}
        </span>
      </div>
      <div class="config-grid-row">
        <span class="config-label">Configuration Source</span>
        <span class="config-value" style="font-size: 0.72rem; color: var(--text-muted);">
          ${conn.source === 'config' ? 'config/connections.yaml' : 'Local SQLite DB'}
        </span>
      </div>
    </div>

    <div class="config-limit-info">
      <i data-lucide="shield-check" style="width: 14px; height: 14px; color: var(--accent-primary); flex-shrink: 0;"></i>
      <span>Connected Limit: <strong>${connectedCount} of ${currentLimit}</strong> clusters currently connected simultaneously.</span>
    </div>

    ${isAtLimit ? `
      <div class="config-warning-box">
        <i data-lucide="alert-circle" style="width: 16px; height: 16px; flex-shrink: 0;"></i>
        <span>Connection limit reached (${currentLimit} maximum). Please disconnect a connected cluster first or increase the limit.</span>
      </div>
    ` : ''}

    <div id="cfgTestResultBox" class="test-result-box" style="margin-top: 0.65rem;"></div>
  `;

  // Footer Buttons
  if (!isConnected) {
    footerEl.innerHTML = `
      <div style="display: flex; gap: 0.5rem;">
        <button type="button" class="btn btn-secondary" id="btnTestFromConfig">
          <i data-lucide="zap" style="width: 13px; height: 13px;"></i>
          Test Connection
        </button>
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <button type="button" class="btn btn-secondary" id="btnCloseConfigModal">Cancel</button>
        <button type="button" class="btn btn-primary" id="btnConnectFromConfig" ${isAtLimit ? 'disabled' : ''}>
          <i data-lucide="play" style="width: 13px; height: 13px;"></i>
          Connect
        </button>
      </div>
    `;
  } else {
    footerEl.innerHTML = `
      <div style="display: flex; gap: 0.5rem;">
        <button type="button" class="btn btn-secondary" id="btnTopologyFromConfig">
          <i data-lucide="layers" style="width: 13px; height: 13px;"></i>
          Topology & Nodes
        </button>
        <button type="button" class="btn btn-danger" id="btnDisconnectFromConfig">
          <i data-lucide="x" style="width: 13px; height: 13px;"></i>
          Disconnect Cluster
        </button>
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <button type="button" class="btn btn-secondary" id="btnCloseConfigModal">Close</button>
        ${!isSelected ? `
          <button type="button" class="btn btn-primary" id="btnSelectFromConfig">
            <i data-lucide="database" style="width: 13px; height: 13px;"></i>
            Switch & View Keys
          </button>
        ` : `
          <button type="button" class="btn btn-secondary" id="btnSelectFromConfig">
            <i data-lucide="refresh-cw" style="width: 13px; height: 13px;"></i>
            Refresh Keys
          </button>
        `}
      </div>
    `;
  }

  setupIcons();
  modal.classList.add("active");

  // Attach button events
  const btnClose = document.getElementById("btnCloseConfigModal");
  if (btnClose) btnClose.onclick = () => modal.classList.remove("active");

  const btnConnect = document.getElementById("btnConnectFromConfig");
  if (btnConnect) {
    btnConnect.onclick = async () => {
      await connectCluster(conn.id);
      modal.classList.remove("active");
    };
  }

  const btnDisconnect = document.getElementById("btnDisconnectFromConfig");
  if (btnDisconnect) {
    btnDisconnect.onclick = async () => {
      await disconnectCluster(conn.id);
      modal.classList.remove("active");
    };
  }

  const btnSelect = document.getElementById("btnSelectFromConfig");
  if (btnSelect) {
    btnSelect.onclick = async () => {
      await selectCluster(conn.id);
      modal.classList.remove("active");
    };
  }

  const btnTopology = document.getElementById("btnTopologyFromConfig");
  if (btnTopology) {
    btnTopology.onclick = async () => {
      modal.classList.remove("active");
      await openTopologyModal(conn.id);
    };
  }

  const btnTest = document.getElementById("btnTestFromConfig");
  if (btnTest) {
    btnTest.onclick = async () => {
      await testConfigParams(conn);
    };
  }
}

// Test connection params from config modal
async function testConfigParams(conn) {
  const resBox = document.getElementById("cfgTestResultBox");
  const btnTest = document.getElementById("btnTestFromConfig");
  if (btnTest) {
    btnTest.disabled = true;
    btnTest.innerHTML = "Testing...";
  }
  if (resBox) {
    resBox.className = "test-result-box";
    resBox.innerHTML = "";
  }

  try {
    const res = await fetch("/api/connections/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: conn.host,
        port: conn.port,
        db: conn.db || 0,
        username: conn.username || null,
        password: null,
        use_tls: conn.use_tls || false,
        conn_type: conn.conn_type || "standalone",
        cluster_nodes: conn.cluster_nodes || null
      })
    });
    const data = await res.json();
    if (data.success) {
      resBox.className = "test-result-box success";
      resBox.innerHTML = `
        <i data-lucide="check-circle-2"></i>
        <span>Connected! Latency: <strong>${data.latency_ms} ms</strong> (Redis v${data.redis_version})</span>
      `;
    } else {
      resBox.className = "test-result-box error";
      resBox.innerHTML = `
        <i data-lucide="alert-circle"></i>
        <span>Failed: ${data.error || "Connection refused"}</span>
      `;
    }
  } catch (err) {
    if (resBox) {
      resBox.className = "test-result-box error";
      resBox.innerHTML = `<i data-lucide="alert-circle"></i><span>Error: ${err.message}</span>`;
    }
  } finally {
    if (btnTest) {
      btnTest.disabled = false;
      btnTest.innerHTML = `<i data-lucide="zap" style="width: 13px; height: 13px;"></i> Test Connection`;
    }
    setupIcons();
  }
}

// Connect to a cluster (enforcing simultaneous limit)
async function connectCluster(connId) {
  // Check limit client-side first for instantaneous feedback
  const target = cachedConnections.find(c => c.id === connId);
  const connectedTotal = cachedConnections.filter(c => c.is_connected && c.id !== connId).length;

  if (connectedTotal >= currentLimit) {
    alert(`Connection limit reached: Maximum ${currentLimit} connected cluster(s) allowed at a time.\nPlease disconnect an existing cluster first or increase the limit in the sidebar.`);
    return;
  }

  try {
    const res = await fetch(`/api/connections/${connId}/connect`, { method: "POST" });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.detail || "Failed to connect to cluster");
    }
    await loadConnections();
    await refreshStatus();
    await resetAndScan();
  } catch (err) {
    alert("Connection error: " + err.message);
  }
}

// Disconnect a cluster
async function disconnectCluster(connId) {
  try {
    const res = await fetch(`/api/connections/${connId}/disconnect`, { method: "POST" });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.detail || "Failed to disconnect cluster");
    }
    await loadConnections();
    await refreshStatus();

    const stillConnected = cachedConnections.some(c => c.is_connected && c.id !== connId);
    if (!stillConnected) {
      // Clear key browsing table and show empty state
      keysTableRows = [];
      loadedKeysSet.clear();
      totalScanned = 0;
      currentCursor = 0;
      dbTotalKeys = 0;
      renderEmptyWorkspace();
    } else {
      await resetAndScan();
    }
  } catch (err) {
    alert("Disconnect error: " + err.message);
  }
}

// Select / switch between connected clusters (Requirement 4: proper switching)
async function selectCluster(connId) {
  try {
    const res = await fetch(`/api/connections/${connId}/select`, { method: "POST" });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.detail || "Failed to switch cluster");
    }

    // Close any open detail view
    const detailModal = document.getElementById("keyDetailModal");
    if (detailModal) detailModal.classList.remove("active");
    activeDetailKey = null;
    activeDetailData = null;

    await loadConnections();
    await refreshStatus();
    await resetAndScan();
  } catch (err) {
    alert("Switch error: " + err.message);
  }
}

// Render empty workspace state when no cluster is connected
function renderEmptyWorkspace() {
  const scanStatus = document.getElementById("scanStatusText");
  if (scanStatus) {
    scanStatus.textContent = "No cluster connected";
  }
  const emptyEl = document.getElementById("emptyWorkspaceState");
  const gridContainer = document.getElementById("gridViewerContainer");
  if (emptyEl) {
    emptyEl.style.display = "flex";
  }
  if (gridContainer) {
    gridContainer.style.display = "none";
  }
  const btnFirst = document.getElementById("btnConnectFirstAvailable");
  if (btnFirst) {
    btnFirst.innerHTML = `<i data-lucide="server" style="width: 14px; height: 14px;"></i> View Available Clusters (${cachedConnections.length})`;
    if (cachedConnections.length > 0) {
      btnFirst.onclick = () => openClusterConfigModal(cachedConnections[0]);
    }
  }
  setupIcons();
}

// Delete a connection
async function deleteConnection(connId) {
  try {
    const res = await fetch(`/api/connections/${connId}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete");
    await loadConnections();
    await refreshStatus();
    await resetAndScan();
  } catch (err) {
    alert("Delete error: " + err.message);
  }
}

// ==========================================
// Cluster Topology & Node Details Modal
// ==========================================

async function openTopologyModal(connId = null) {
  const modal = document.getElementById("clusterTopologyModal");
  if (!modal) return;
  modal.classList.add("active");

  if (connId) {
    const activeCard = document.querySelector(`.conn-card[data-id="${connId}"]`);
    if (activeCard && !activeCard.classList.contains("active")) {
      await connectCluster(connId);
    }
  }

  await loadTopologyData();
}

function closeTopologyModal() {
  const modal = document.getElementById("clusterTopologyModal");
  if (modal) modal.classList.remove("active");
}

async function loadTopologyData() {
  const statsGrid = document.getElementById("topologyStatsGrid");
  const tableContainer = document.getElementById("topologyTableContainer");
  const nodesCountBadge = document.getElementById("topologyNodesCountBadge");
  const envBadge = document.getElementById("topologyEnvBadge");

  const activeConn = cachedConnections.find(c => c.is_active);
  if (activeConn && envBadge) {
    const env = (activeConn.env || "LOCAL").toUpperCase();
    envBadge.textContent = env;
    envBadge.className = `badge-env badge-env-${env.toLowerCase()}`;
  }

  if (tableContainer) {
    tableContainer.innerHTML = `
      <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="refresh-cw" class="spin" style="width: 20px; height: 20px; margin-bottom: 0.5rem;"></i>
        <br>Fetching cluster nodes & slot mappings...
      </div>
    `;
    setupIcons();
  }

  try {
    const res = await fetch("/api/topology");
    if (!res.ok) throw new Error("Failed to load cluster topology");
    const data = await res.json();
    currentTopologyData = data;

    if (nodesCountBadge) {
      nodesCountBadge.textContent = `${data.total_nodes} Node${data.total_nodes !== 1 ? 's' : ''}`;
    }

    renderTopologyStats(data);
    renderTopologyNodes();
  } catch (err) {
    if (tableContainer) {
      tableContainer.innerHTML = `
        <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Unable to retrieve topology</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-secondary);">${err.message}</p>
        </div>
      `;
      setupIcons();
    }
  }
}

function renderTopologyStats(data) {
  const statsGrid = document.getElementById("topologyStatsGrid");
  if (!statsGrid) return;

  const isCluster = data.is_cluster;
  const isOk = (data.cluster_state || "").toLowerCase() === "ok" || !isCluster;

  statsGrid.innerHTML = `
    <div class="topology-stat-card">
      <span class="topology-stat-label">Cluster State</span>
      <span class="topology-stat-value" style="color: ${isOk ? 'var(--accent-success)' : 'var(--accent-danger)'}; display: flex; align-items: center; gap: 0.4rem;">
        <span class="link-dot ${isOk ? 'connected' : 'disconnected'}"></span>
        ${(data.cluster_state || (isCluster ? "OK" : "Standalone")).toUpperCase()}
      </span>
    </div>

    <div class="topology-stat-card">
      <span class="topology-stat-label">Total Nodes</span>
      <span class="topology-stat-value" style="color: var(--accent-primary);">
        ${data.total_nodes}
      </span>
    </div>

    <div class="topology-stat-card">
      <span class="topology-stat-label">Masters / Replicas</span>
      <span class="topology-stat-value">
        <span style="color: #38bdf8;">${data.masters_count}M</span>
        <span style="color: var(--text-muted); font-size: 0.9rem; margin: 0 4px;">/</span>
        <span style="color: #fbbf24;">${data.replicas_count}R</span>
      </span>
    </div>

    <div class="topology-stat-card">
      <span class="topology-stat-label">Assigned Slots</span>
      <span class="topology-stat-value" style="color: ${data.slots_assigned >= 16384 ? 'var(--accent-success)' : 'var(--accent-warning)'};">
        ${data.slots_assigned} / 16384
      </span>
    </div>
  `;
}

function renderTopologyNodes() {
  const container = document.getElementById("topologyTableContainer");
  if (!container || !currentTopologyData) return;

  const nodes = currentTopologyData.nodes || [];
  const q = (currentTopologySearch || "").trim().toLowerCase();
  const roleFilter = currentTopologyRole;

  const filtered = nodes.filter(n => {
    if (roleFilter !== "all" && n.role.toLowerCase() !== roleFilter) {
      return false;
    }
    if (q) {
      const matchAddr = (n.addr || "").toLowerCase().includes(q);
      const matchId = (n.id || "").toLowerCase().includes(q);
      const matchIp = (n.ip || "").toLowerCase().includes(q);
      const matchSlots = (n.slots || "").toLowerCase().includes(q);
      if (!matchAddr && !matchId && !matchIp && !matchSlots) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">No nodes match current filter.</div>`;
    return;
  }

  container.innerHTML = `
    <table class="data-table" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: left;">NODE ID</th>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: left;">ROLE</th>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: left;">ENDPOINT (IP:PORT)</th>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: left;">LINK STATE</th>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: left;">ASSIGNED SLOTS</th>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: left;">MASTER / REPLICA OF</th>
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: right;">FLAGS</th>
        </tr>
      </thead>
      <tbody>
        ${filtered.map(n => {
          const isMaster = n.role === "master";
          const isConnected = (n.link_state || "connected").toLowerCase() === "connected";
          const shortId = n.id ? (n.id.length > 12 ? `${n.id.substring(0, 10)}...` : n.id) : "N/A";
          const slotsDisplay = n.slots ? `${n.slots} <span style="color: var(--text-muted); font-size: 0.72rem;">(${n.slot_count || 0} slots)</span>` : (isMaster ? "None" : "<span style='color: var(--text-muted);'>Replication slave</span>");

          return `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">
                <span title="${escapeHtml(n.id || '')}">${escapeHtml(shortId)}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem;">
                <span class="${isMaster ? 'role-badge-master' : 'role-badge-replica'}">${n.role.toUpperCase()}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-weight: 600; font-size: 0.82rem; color: var(--text-primary);">
                ${escapeHtml(n.addr || `${n.ip}:${n.port}`)}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-size: 0.8rem;">
                <span class="link-dot ${isConnected ? 'connected' : 'disconnected'}"></span>
                <span style="color: ${isConnected ? 'var(--accent-success)' : 'var(--accent-danger)'};">${n.link_state || 'connected'}</span>
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.78rem;">
                ${slotsDisplay}
              </td>
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
                ${n.master_id ? `<span title="${escapeHtml(n.master_id)}">↳ ${escapeHtml(n.master_id.substring(0, 8))}...</span>` : '—'}
              </td>
              <td style="padding: 0.65rem 0.85rem; text-align: right; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">
                ${(n.flags || []).join(", ") || "none"}
              </td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
  `;

  setupIcons();
}

// Refresh status
// Refresh status
async function refreshStatus() {
  const connContainer = document.getElementById("topConnContainer");
  const vitalsContainer = document.getElementById("topVitalsContainer");

  try {
    const res = await fetch("/api/status");
    const s = await res.json();

    if (s.connected) {
      const activeConn = cachedConnections.find(c => c.is_selected) || cachedConnections.find(c => c.id === s.connection_id) || cachedConnections.find(c => c.is_connected);
      const isCluster = (activeConn && activeConn.conn_type === "cluster") || (s.cluster_nodes && s.cluster_nodes.length > 0) || s.is_cluster;
      const totalNodes = (activeConn && activeConn.cluster_nodes) ? "6" : (s.cluster_nodes_count || 1);

      if (connContainer) {
        connContainer.innerHTML = `
          <div class="top-conn-badge">
            <span class="status-indicator connected"></span>
            <span class="top-conn-name" title="${escapeHtml(s.connection_name || 'Connected')}">${escapeHtml(s.connection_name || "Connected")}</span>
            <span class="top-conn-endpoint">${s.host}:${s.port}</span>
            <span class="top-conn-tag">${isCluster ? 'CLUSTER' : `DB${s.db}`}</span>
            <button type="button" class="top-conn-disconnect" id="btnTopDisconnect" title="Disconnect ${escapeHtml(s.connection_name || 'instance')}">
              <i data-lucide="power" style="width: 12px; height: 12px;"></i>
            </button>
          </div>
        `;
      }

      if (vitalsContainer) {
        vitalsContainer.innerHTML = `
          <div class="top-vitals-capsule">
            <div class="vital-item clickable" id="btnOpenTopologyTop" title="View Cluster Topology & Node Health">
              <i data-lucide="layers" style="width: 12px; height: 12px; color: ${isCluster ? '#a78bfa' : 'var(--accent-primary)'};"></i>
              <span class="vital-val" style="color: ${isCluster ? '#c084fc' : 'var(--accent-primary)'};">
                ${isCluster ? `${totalNodes} Nodes` : `1 Node`}
              </span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item" title="PING round-trip latency">
              <i data-lucide="zap" style="width: 11px; height: 11px; color: var(--accent-success);"></i>
              <span class="vital-val" style="color: var(--accent-success);">${s.latency_ms} ms</span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item" title="Total keys in active keyspace">
              <span class="vital-label">Keys:</span>
              <span class="vital-val">${(s.dbsize || 0).toLocaleString()}</span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item clickable" id="btnOpenMemoryTop" title="Memory usage. Click to open Memory Analysis & BigKeys Profiler">
              <i data-lucide="pie-chart" style="width: 12px; height: 12px; color: #a78bfa;"></i>
              <span class="vital-val" style="color: #c084fc;">${s.used_memory_human || "N/A"}</span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item clickable" id="btnOpenClientsModal" title="Connected clients. Click to view clients list">
              <i data-lucide="users" style="width: 12px; height: 12px; color: #38bdf8;"></i>
              <span class="vital-val" style="color: #38bdf8;">${s.connected_clients || 1}</span>
            </div>

            <span class="vital-divider"></span>

            <div class="vital-item" title="Redis server version">
              <span class="vital-label">v${s.redis_version}</span>
            </div>
          </div>
        `;
      }

      setupIcons();

      const btnDisconnectTop = document.getElementById("btnTopDisconnect");
      if (btnDisconnectTop) {
        btnDisconnectTop.addEventListener("click", () => {
          if (s.connection_id) {
            disconnectCluster(s.connection_id);
          }
        });
      }
      const btnClients = document.getElementById("btnOpenClientsModal");
      if (btnClients) {
        btnClients.addEventListener("click", openClientsModal);
      }
      const btnTopTopology = document.getElementById("btnOpenTopologyTop");
      if (btnTopTopology) {
        btnTopTopology.addEventListener("click", () => openTopologyModal());
      }
      const btnMemoryTop = document.getElementById("btnOpenMemoryTop");
      if (btnMemoryTop) {
        btnMemoryTop.addEventListener("click", openMemoryModal);
      }
    } else {
      if (connContainer) {
        connContainer.innerHTML = `
          <div class="top-conn-badge disconnected">
            <span class="status-indicator disconnected"></span>
            <span class="top-conn-name">Disconnected</span>
            ${s.error ? `<span class="top-conn-error" title="${escapeHtml(s.error)}">${escapeHtml(s.error)}</span>` : ''}
          </div>
        `;
      }
      if (vitalsContainer) {
        vitalsContainer.innerHTML = `
          <div class="top-vitals-idle">
            <span>Select or connect an instance to browse keys & diagnostics</span>
          </div>
        `;
      }
      setupIcons();
      if (totalScanned === 0 && keysTableRows.length === 0) {
        renderEmptyWorkspace();
      }
    }
  } catch (err) {
    if (connContainer) {
      connContainer.innerHTML = `
        <div class="top-conn-badge disconnected">
          <span class="status-indicator disconnected"></span>
          <span class="top-conn-name">Network Error</span>
        </div>
      `;
    }
    if (vitalsContainer) {
      vitalsContainer.innerHTML = "";
    }
    setupIcons();
  }
}

// Event Listeners Setup
function setupEventListeners() {
  // Connection Limit Dropdown change listener
  const limitSelect = document.getElementById("connLimitSelect");
  if (limitSelect) {
    limitSelect.addEventListener("change", async () => {
      const newLimit = parseInt(limitSelect.value, 10) || 2;
      try {
        const res = await fetch("/api/connections/limit", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ limit: newLimit })
        });
        if (res.ok) {
          const data = await res.json();
          currentLimit = data.limit;
          updateLimitUI(data.connected_count, data.limit);
        }
      } catch (e) {
        console.error("Failed to update limit:", e);
      }
    });
  }

  // Cluster Config Modal backdrop click
  const cfgModal = document.getElementById("clusterConfigModal");
  if (cfgModal) {
    cfgModal.addEventListener("click", (e) => {
      if (e.target === cfgModal) cfgModal.classList.remove("active");
    });
  }

  // Sidebar Search & Filter
  const connSearchInput = document.getElementById("connSearchInput");
  const btnClearSearch = document.getElementById("btnClearConnSearch");
  if (connSearchInput) {
    connSearchInput.addEventListener("input", () => {
      currentConnSearch = connSearchInput.value;
      if (btnClearSearch) {
        btnClearSearch.style.display = currentConnSearch ? "flex" : "none";
      }
      renderConnectionsList();
    });
  }
  if (btnClearSearch) {
    btnClearSearch.addEventListener("click", () => {
      if (connSearchInput) {
        connSearchInput.value = "";
        connSearchInput.focus();
      }
      currentConnSearch = "";
      btnClearSearch.style.display = "none";
      renderConnectionsList();
    });
  }

  const envPills = document.querySelectorAll("#envFilterPills .env-pill-btn");
  envPills.forEach(pill => {
    pill.addEventListener("click", () => {
      envPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentEnvFilter = pill.getAttribute("data-env") || "ALL";
      renderConnectionsList();
    });
  });

  // Reload config connections button
  const btnReloadConfig = document.getElementById("btnReloadConfig");
  if (btnReloadConfig) {
    btnReloadConfig.addEventListener("click", async () => {
      btnReloadConfig.disabled = true;
      try {
        const res = await fetch("/api/connections/reload-config", { method: "POST" });
        const data = await res.json();
        alert(`Config reloaded successfully! Found ${data.total_in_file || 0} connection(s) in config.`);
        await loadConnections();
      } catch (err) {
        alert("Failed to reload config: " + err.message);
      } finally {
        btnReloadConfig.disabled = false;
      }
    });
  }

  // Cluster Multi-Node Builder State
  let configuredClusterNodes = [];

  function renderConfiguredClusterNodes() {
    const listEl = document.getElementById("clusterNodesList");
    const countBadge = document.getElementById("clusterNodeCountBadge");
    if (!listEl) return;

    if (countBadge) {
      countBadge.textContent = `${configuredClusterNodes.length} configured`;
    }

    if (configuredClusterNodes.length === 0) {
      listEl.innerHTML = `
        <div style="font-size: 0.73rem; color: var(--text-muted); font-style: italic; padding: 0.25rem 0;">
          No nodes configured yet. Enter a seed node above and click Auto-Discover, or add nodes manually below.
        </div>
      `;
      return;
    }

    listEl.innerHTML = configuredClusterNodes.map((n, idx) => {
      const isMaster = n.role === "master";
      const isReplica = n.role === "replica";
      const isSeed = n.role === "seed";
      const chipClass = isMaster ? "master" : isReplica ? "replica" : "";
      const roleBadgeClass = isMaster ? "master" : isReplica ? "replica" : isSeed ? "seed" : "manual";
      const roleText = isMaster ? "Master" : isReplica ? "Replica" : isSeed ? "Seed" : "Node";

      return `
        <span class="cluster-node-chip ${chipClass}">
          <i data-lucide="server" style="width: 11px; height: 11px; opacity: 0.75;"></i>
          <span>${escapeHtml(n.host)}:${n.port}</span>
          <span class="cluster-node-role-badge ${roleBadgeClass}">${roleText}</span>
          <button type="button" class="cluster-node-chip-remove" data-idx="${idx}" title="Remove node">
            <i data-lucide="x" style="width: 11px; height: 11px;"></i>
          </button>
        </span>
      `;
    }).join("");

    listEl.querySelectorAll(".cluster-node-chip-remove").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.getAttribute("data-idx"), 10);
        if (!isNaN(idx) && idx >= 0 && idx < configuredClusterNodes.length) {
          configuredClusterNodes.splice(idx, 1);
          renderConfiguredClusterNodes();
        }
      });
    });

    setupIcons();
  }

  // Connection Type toggle in Add Modal
  const typeSelect = document.getElementById("connTypeSelect");
  const clusterGroup = document.getElementById("clusterNodesGroup");
  const hostLabel = document.getElementById("connHostLabel");
  const portLabel = document.getElementById("connPortLabel");
  const hostInput = document.getElementById("connHost");
  const portInput = document.getElementById("connPort");
  const dbGroup = document.getElementById("connDbGroup");

  if (typeSelect && clusterGroup) {
    typeSelect.addEventListener("change", () => {
      const isCluster = typeSelect.value === "cluster";
      clusterGroup.style.display = isCluster ? "block" : "none";
      if (dbGroup) dbGroup.style.display = isCluster ? "none" : "block";

      if (isCluster) {
        if (hostLabel) hostLabel.textContent = "Primary Seed Host *";
        if (portLabel) portLabel.textContent = "Seed Port *";
        if (hostInput && (hostInput.value === "localhost" || !hostInput.value)) {
          hostInput.value = "127.0.0.1";
        }
        if (portInput && (portInput.value === "6379" || !portInput.value)) {
          portInput.value = "7000";
        }
        if (configuredClusterNodes.length === 0 && hostInput && hostInput.value && portInput && portInput.value) {
          configuredClusterNodes.push({
            host: hostInput.value.trim(),
            port: parseInt(portInput.value, 10) || 7000,
            role: "seed"
          });
        }
        renderConfiguredClusterNodes();
      } else {
        if (hostLabel) hostLabel.textContent = "Host *";
        if (portLabel) portLabel.textContent = "Port *";
        if (portInput && portInput.value === "7000") {
          portInput.value = "6379";
        }
      }
    });
  }

  // Auto-Discover Cluster Nodes Button
  const btnAutoDiscover = document.getElementById("btnAutoDiscoverCluster");
  const discoveryStatusEl = document.getElementById("clusterDiscoveryStatus");

  if (btnAutoDiscover) {
    btnAutoDiscover.addEventListener("click", async () => {
      const host = hostInput ? hostInput.value.trim() : "127.0.0.1";
      const port = portInput ? parseInt(portInput.value, 10) || 7000 : 7000;
      const username = document.getElementById("connUsername").value.trim() || null;
      const password = document.getElementById("connPassword").value || null;
      const use_tls = document.getElementById("connTls").checked;

      if (!host) {
        if (discoveryStatusEl) {
          discoveryStatusEl.className = "cluster-discovery-status error";
          discoveryStatusEl.style.display = "flex";
          discoveryStatusEl.innerHTML = `<i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i><span>Please enter a Seed Host.</span>`;
          setupIcons();
        }
        return;
      }

      btnAutoDiscover.disabled = true;
      btnAutoDiscover.innerHTML = `<i class="lucide-spin" data-lucide="loader-2" style="width: 13px; height: 13px;"></i> Discovering...`;
      setupIcons();

      if (discoveryStatusEl) {
        discoveryStatusEl.className = "cluster-discovery-status";
        discoveryStatusEl.style.display = "none";
      }

      try {
        const res = await fetch("/api/connections/discover-cluster", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ host, port, username, password, use_tls })
        });
        const data = await res.json();

        if (data.success && data.nodes && data.nodes.length > 0) {
          // Replace configured nodes with discovered nodes
          configuredClusterNodes = data.nodes.map(n => ({
            host: n.host,
            port: n.port,
            role: n.role,
            is_myself: n.is_myself,
            slots: n.slots
          }));

          renderConfiguredClusterNodes();

          if (discoveryStatusEl) {
            discoveryStatusEl.className = "cluster-discovery-status success";
            discoveryStatusEl.style.display = "flex";
            discoveryStatusEl.innerHTML = `
              <i data-lucide="check-circle-2" style="width: 14px; height: 14px;"></i>
              <span>Discovered <strong>${data.total_nodes} nodes</strong> (${data.masters_count} masters, ${data.replicas_count} replicas) • Cluster state: <strong>${data.cluster_state.toUpperCase()}</strong></span>
            `;
          }
        } else {
          if (discoveryStatusEl) {
            discoveryStatusEl.className = "cluster-discovery-status error";
            discoveryStatusEl.style.display = "flex";
            discoveryStatusEl.innerHTML = `
              <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
              <span>${escapeHtml(data.error || "Cluster discovery failed. Ensure seed node is part of a cluster.")}</span>
            `;
          }
        }
      } catch (err) {
        if (discoveryStatusEl) {
          discoveryStatusEl.className = "cluster-discovery-status error";
          discoveryStatusEl.style.display = "flex";
          discoveryStatusEl.innerHTML = `
            <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
            <span>Network error: ${escapeHtml(err.message)}</span>
          `;
        }
      } finally {
        btnAutoDiscover.disabled = false;
        btnAutoDiscover.innerHTML = `<i data-lucide="sparkles" style="width: 13px; height: 13px;"></i> Auto-Discover Nodes`;
        setupIcons();
      }
    });
  }

  // Manual Add Node to Cluster Builder
  const inputCustomNode = document.getElementById("inputCustomClusterNode");
  const btnAddCustomNode = document.getElementById("btnAddCustomClusterNode");

  function handleAddCustomNode() {
    if (!inputCustomNode) return;
    const val = inputCustomNode.value.trim();
    if (!val) return;

    let h = "127.0.0.1";
    let p = 7000;
    if (val.includes(":")) {
      const parts = val.split(":");
      h = parts[0].trim() || "127.0.0.1";
      p = parseInt(parts[1].trim(), 10) || 7000;
    } else if (!isNaN(parseInt(val, 10))) {
      p = parseInt(val, 10);
      h = hostInput ? hostInput.value.trim() : "127.0.0.1";
    } else {
      h = val;
    }

    const exists = configuredClusterNodes.some(n => n.host === h && n.port === p);
    if (!exists) {
      configuredClusterNodes.push({ host: h, port: p, role: "manual" });
      renderConfiguredClusterNodes();
    }
    inputCustomNode.value = "";
  }

  if (btnAddCustomNode) {
    btnAddCustomNode.addEventListener("click", handleAddCustomNode);
  }
  if (inputCustomNode) {
    inputCustomNode.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleAddCustomNode();
      }
    });
  }

  // Cluster Topology Modal controls
  const topologyModal = document.getElementById("clusterTopologyModal");
  const btnCloseTopology = document.getElementById("btnCloseTopologyModal");
  if (btnCloseTopology) btnCloseTopology.addEventListener("click", closeTopologyModal);
  const btnRefreshTopology = document.getElementById("btnRefreshTopologyModal");
  if (btnRefreshTopology) btnRefreshTopology.addEventListener("click", loadTopologyData);
  if (topologyModal) {
    topologyModal.addEventListener("click", (e) => {
      if (e.target === topologyModal) closeTopologyModal();
    });
  }

  // Topology search & role filtering
  const topologySearch = document.getElementById("topologySearchInput");
  if (topologySearch) {
    topologySearch.addEventListener("input", () => {
      currentTopologySearch = topologySearch.value;
      renderTopologyNodes();
    });
  }

  document.querySelectorAll("#topologyRoleFilter .type-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll("#topologyRoleFilter .type-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentTopologyRole = tab.getAttribute("data-role") || "all";
      renderTopologyNodes();
    });
  });

  // Clients Modal controls
  const clientsModal = document.getElementById("clientsListModal");
  document.getElementById("btnCloseClientsModal").addEventListener("click", closeClientsModal);
  document.getElementById("btnRefreshClientsModal").addEventListener("click", loadConnectedClients);
  clientsModal.addEventListener("click", (e) => {
    if (e.target === clientsModal) closeClientsModal();
  });

  const clientsSearch = document.getElementById("clientsSearchInput");
  if (clientsSearch) {
    clientsSearch.addEventListener("input", () => {
      const q = clientsSearch.value.trim().toLowerCase();
      const filtered = q
        ? allConnectedClients.filter(c =>
            (c.addr && c.addr.toLowerCase().includes(q)) ||
            (c.ip && c.ip.toLowerCase().includes(q)) ||
            (c.name && c.name.toLowerCase().includes(q)) ||
            (c.cmd && c.cmd.toLowerCase().includes(q)) ||
            (c.user && c.user.toLowerCase().includes(q)) ||
            (c.id && String(c.id).includes(q))
          )
        : allConnectedClients;
      renderClientsTable(filtered);
    });
  }

  // Top Action Buttons for Slowlog & Memory
  const btnOpenSlowlog = document.getElementById("btnOpenSlowlog");
  if (btnOpenSlowlog) {
    btnOpenSlowlog.addEventListener("click", openSlowlogModal);
  }
  const btnOpenMemoryModal = document.getElementById("btnOpenMemoryModal");
  if (btnOpenMemoryModal) {
    btnOpenMemoryModal.addEventListener("click", openMemoryModal);
  }

  // Slowlog Modal Controls
  const slowlogModal = document.getElementById("slowlogModal");
  const btnCloseSlowlog = document.getElementById("btnCloseSlowlogModal");
  if (btnCloseSlowlog) btnCloseSlowlog.addEventListener("click", closeSlowlogModal);
  const btnRefreshSlowlog = document.getElementById("btnRefreshSlowlogModal");
  if (btnRefreshSlowlog) btnRefreshSlowlog.addEventListener("click", loadSlowlog);
  const btnClearSlowlog = document.getElementById("btnClearSlowlogModal");
  if (btnClearSlowlog) btnClearSlowlog.addEventListener("click", clearSlowlog);
  if (slowlogModal) {
    slowlogModal.addEventListener("click", (e) => {
      if (e.target === slowlogModal) closeSlowlogModal();
    });
  }

  const slowlogSearchInput = document.getElementById("slowlogSearchInput");
  if (slowlogSearchInput) {
    slowlogSearchInput.addEventListener("input", () => {
      currentSlowlogSearch = slowlogSearchInput.value.trim();
      filterAndRenderSlowlog();
    });
  }

  document.querySelectorAll(".slowlog-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".slowlog-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentSlowlogMinDuration = parseFloat(btn.getAttribute("data-min-duration") || "0");
      filterAndRenderSlowlog();
    });
  });

  // Memory & BigKeys Modal Controls
  const memoryModal = document.getElementById("memoryModal");
  const btnCloseMemory = document.getElementById("btnCloseMemoryModal");
  if (btnCloseMemory) btnCloseMemory.addEventListener("click", closeMemoryModal);
  const btnRefreshMemory = document.getElementById("btnRefreshMemoryModal");
  if (btnRefreshMemory) btnRefreshMemory.addEventListener("click", loadMemoryOverview);
  if (memoryModal) {
    memoryModal.addEventListener("click", (e) => {
      if (e.target === memoryModal) closeMemoryModal();
    });
  }

  // Modal controls for Add Connection
  const modal = document.getElementById("connectionModal");
  document.getElementById("btnAddConn").addEventListener("click", () => {
    modal.classList.add("active");
  });
  document.getElementById("btnCloseModal").addEventListener("click", () => {
    modal.classList.remove("active");
  });
  document.getElementById("btnCancelModal").addEventListener("click", () => {
    modal.classList.remove("active");
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });

  // Key Detail Modal Close
  const detailModal = document.getElementById("keyDetailModal");
  document.getElementById("btnCloseDetailModal").addEventListener("click", () => {
    detailModal.classList.remove("active");
  });
  detailModal.addEventListener("click", (e) => {
    if (e.target === detailModal) detailModal.classList.remove("active");
  });

  // Copy key name in detail modal
  document.getElementById("btnCopyKeyName").addEventListener("click", () => {
    if (activeDetailKey) {
      navigator.clipboard.writeText(activeDetailKey);
      alert(`Copied '${activeDetailKey}' to clipboard!`);
    }
  });

  // Delete key from detail modal
  document.getElementById("btnDeleteKeyFromDetail").addEventListener("click", () => {
    if (activeDetailKey) {
      triggerDeleteConfirmation(activeDetailKey, () => {
        detailModal.classList.remove("active");
        resetAndScan();
      });
    }
  });

  // Close Delete Confirm Modal
  const deleteConfirmModal = document.getElementById("deleteKeyConfirmModal");
  document.getElementById("btnCloseDeleteConfirmModal").addEventListener("click", () => {
    deleteConfirmModal.classList.remove("active");
  });
  document.getElementById("btnCancelDeleteConfirm").addEventListener("click", () => {
    deleteConfirmModal.classList.remove("active");
  });

  // Modal test connection
  document.getElementById("btnTestConnModal").addEventListener("click", async () => {
    const conn_type = document.getElementById("connTypeSelect").value;
    const host = document.getElementById("connHost").value.trim() || "localhost";
    const port = parseInt(document.getElementById("connPort").value, 10) || 6379;
    const db = parseInt(document.getElementById("connDb").value, 10) || 0;
    const username = document.getElementById("connUsername").value.trim() || null;
    const password = document.getElementById("connPassword").value || null;
    const use_tls = document.getElementById("connTls").checked;

    let cluster_nodes = null;
    if (conn_type === "cluster" && configuredClusterNodes.length > 0) {
      cluster_nodes = JSON.stringify(configuredClusterNodes.map(n => ({ host: n.host, port: n.port })));
    }

    const resBox = document.getElementById("testResultBox");
    const btnTest = document.getElementById("btnTestConnModal");
    btnTest.disabled = true;
    btnTest.innerHTML = "Testing...";

    resBox.className = "test-result-box";
    resBox.innerHTML = "";

    try {
      const res = await fetch("/api/connections/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ host, port, db, username, password, use_tls, conn_type, cluster_nodes })
      });
      const data = await res.json();
      if (data.success) {
        resBox.className = "test-result-box success";
        const clusterInfo = data.is_cluster
          ? ` • Cluster Mode (${data.cluster_nodes_count || configuredClusterNodes.length} nodes reachable)`
          : "";
        resBox.innerHTML = `
          <i data-lucide="check-circle-2"></i>
          <span>Connected! Latency: <strong>${data.latency_ms} ms</strong>${clusterInfo} (Redis v${data.redis_version})</span>
        `;
      } else {
        resBox.className = "test-result-box error";
        resBox.innerHTML = `
          <i data-lucide="alert-circle"></i>
          <span>Failed: ${escapeHtml(data.error || "Connection refused")}</span>
        `;
      }
    } catch (err) {
      resBox.className = "test-result-box error";
      resBox.innerHTML = `
        <i data-lucide="alert-circle"></i>
        <span>Error: ${escapeHtml(err.message)}</span>
      `;
    } finally {
      btnTest.disabled = false;
      btnTest.innerHTML = `<i data-lucide="zap"></i> Test Connection`;
      setupIcons();
    }
  });

  // Save Connection Form
  document.getElementById("connectionForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("connName").value.trim();
    const env = document.getElementById("connEnv").value;
    const conn_type = document.getElementById("connTypeSelect").value;
    let host = document.getElementById("connHost").value.trim() || "localhost";
    let port = parseInt(document.getElementById("connPort").value, 10) || 6379;
    const db = parseInt(document.getElementById("connDb").value, 10) || 0;
    const username = document.getElementById("connUsername").value.trim() || null;
    const password = document.getElementById("connPassword").value || null;
    const use_tls = document.getElementById("connTls").checked;
    const auto_activate = document.getElementById("connAutoActivate").checked;

    let cluster_nodes = null;
    if (conn_type === "cluster") {
      if (configuredClusterNodes.length > 0) {
        cluster_nodes = JSON.stringify(configuredClusterNodes.map(n => ({ host: n.host, port: n.port })));
        host = configuredClusterNodes[0].host;
        port = configuredClusterNodes[0].port;
      } else {
        cluster_nodes = JSON.stringify([{ host, port }]);
      }
    }

    try {
      const res = await fetch(`/api/connections?auto_activate=${auto_activate}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, env, conn_type, host, port, cluster_nodes, db, username, password, use_tls })
      });
      if (!res.ok) throw new Error("Failed to save connection");
      modal.classList.remove("active");
      document.getElementById("connectionForm").reset();
      configuredClusterNodes = [];
      renderConfiguredClusterNodes();
      await loadConnections();
      await refreshStatus();
      await resetAndScan();
    } catch (err) {
      alert("Error saving: " + err.message);
    }
  });

  // Top Ping button
  document.getElementById("btnRefreshStats").addEventListener("click", refreshStatus);

  // Search input
  const searchInput = document.getElementById("keySearchInput");
  let searchDebounce = null;
  searchInput.addEventListener("input", () => {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => {
      currentPattern = searchInput.value.trim() || "*";
      resetAndScan();
    }, 400);
  });
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      clearTimeout(searchDebounce);
      currentPattern = searchInput.value.trim() || "*";
      resetAndScan();
    }
  });

  // Type filter buttons
  document.querySelectorAll(".type-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".type-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentType = tab.getAttribute("data-type");
      resetAndScan();
    });
  });

  // Scan controls
  const btnScanNext = document.getElementById("btnScanNext");
  if (btnScanNext) {
    btnScanNext.addEventListener("click", () => scanNextBatch());
  }
  const btnResetScan = document.getElementById("btnResetScan");
  if (btnResetScan) {
    btnResetScan.addEventListener("click", resetAndScan);
  }

  // Sidebar Collapse & Expand Controls
  function setSidebarCollapsed(collapsed) {
    const sidebar = document.querySelector(".sidebar");
    const btnShow = document.getElementById("btnShowSidebar");
    if (!sidebar) return;
    if (collapsed) {
      sidebar.classList.add("collapsed");
      if (btnShow) btnShow.style.display = "inline-flex";
      localStorage.setItem("redis_insight_sidebar_collapsed", "true");
    } else {
      sidebar.classList.remove("collapsed");
      if (btnShow) btnShow.style.display = "none";
      localStorage.setItem("redis_insight_sidebar_collapsed", "false");
    }
    setupIcons();
  }

  const btnToggleSidebar = document.getElementById("btnToggleSidebar");
  if (btnToggleSidebar) {
    btnToggleSidebar.addEventListener("click", () => setSidebarCollapsed(true));
  }

  const btnShowSidebar = document.getElementById("btnShowSidebar");
  if (btnShowSidebar) {
    btnShowSidebar.addEventListener("click", () => setSidebarCollapsed(false));
  }

  // Restore saved collapse preference
  if (localStorage.getItem("redis_insight_sidebar_collapsed") === "true") {
    setSidebarCollapsed(true);
  }

  // Keyboard shortcut Ctrl+B or Cmd+B to toggle sidebar
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
      const sidebar = document.querySelector(".sidebar");
      const isCurrentlyCollapsed = sidebar && sidebar.classList.contains("collapsed");
      setSidebarCollapsed(!isCurrentlyCollapsed);
      e.preventDefault();
    }
  });

  // Periodic heartbeat
  setInterval(refreshStatus, 15000);
}

// Launch application immediately without waiting for passed events
async function startApp() {
  renderAppShell();
  setupIcons();
  setupEventListeners();

  try {
    await loadConnections();
    await refreshStatus();
  } catch (err) {
    console.error("Failed to load initial status:", err);
  }

  const active = cachedConnections.find(c => c.is_connected && c.is_selected) || cachedConnections.find(c => c.is_connected);
  if (active) {
    await resetAndScan();
  } else {
    renderEmptyWorkspace();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startApp);
} else {
  startApp();
}
