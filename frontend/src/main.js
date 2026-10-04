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
  ArrowRightLeft
} from "lucide";

// Global State
let allConnectedClients = [];

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
      ArrowRightLeft
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
            <button type="button" class="env-pill-btn" data-env="LOCAL">LOCAL</button>
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
          <div id="topStatsContainer">
            <div class="status-pill">
              <span class="status-indicator connected"></span>
              <span>Connecting to Redis...</span>
            </div>
          </div>

          <div class="top-actions">
            <button type="button" class="btn btn-secondary" id="btnRefreshStats" title="Ping active connection">
              <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i>
              Ping
            </button>
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

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="connHost">Host / Seed Node *</label>
                <input class="form-input" type="text" id="connHost" name="host" placeholder="localhost" required value="localhost">
              </div>
              <div class="form-group">
                <label class="form-label" for="connPort">Port *</label>
                <input class="form-input" type="number" id="connPort" name="port" placeholder="6379" required value="6379">
              </div>
            </div>

            <div class="form-group" id="clusterNodesGroup" style="display: none;">
              <label class="form-label" for="connClusterNodes">Cluster Seed Nodes (optional)</label>
              <input class="form-input" type="text" id="connClusterNodes" name="cluster_nodes" placeholder="e.g. 10.0.0.1:7000, 10.0.0.2:7001, 10.0.0.3:7002">
              <span style="font-size: 0.72rem; color: var(--text-muted); display: block; margin-top: 0.25rem;">Comma-separated cluster nodes. Redis will auto-discover the remaining nodes in topology.</span>
            </div>

            <div class="form-row">
              <div class="form-group">
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
async function refreshStatus() {
  const container = document.getElementById("topStatsContainer");
  try {
    const res = await fetch("/api/status");
    const s = await res.json();

    if (s.connected) {
      const activeConn = cachedConnections.find(c => c.is_selected) || cachedConnections.find(c => c.id === s.connection_id) || cachedConnections.find(c => c.is_connected);
      const isCluster = (activeConn && activeConn.conn_type === "cluster") || (s.cluster_nodes && s.cluster_nodes.length > 0) || s.is_cluster;
      const clusterState = s.cluster_state || "ok";
      const totalNodes = (activeConn && activeConn.cluster_nodes) ? "6" : (s.cluster_nodes_count || 1);

      container.innerHTML = `
        <div class="status-pill-group">
          <div class="status-pill">
            <span class="status-indicator connected"></span>
            <span>
              ${escapeHtml(s.connection_name || "Connected")}
              <span style="color: var(--text-muted); font-size: 0.75rem; margin-left: 4px;">(${s.host}:${s.port} ${isCluster ? '' : `/ DB${s.db}`})</span>
            </span>
          </div>

          <button type="button" class="btn-top-disconnect" id="btnTopDisconnect" title="Disconnect ${escapeHtml(s.connection_name || 'cluster')}">
            <i data-lucide="x" style="width: 12px; height: 12px;"></i>
            Disconnect
          </button>

          <div class="stat-item stat-item-clickable" id="btnOpenTopologyTop" title="Click to view cluster & node topology">
            <span>${isCluster ? "Cluster:" : "Topology:"}</span>
            <span class="stat-value link-highlight" style="color: ${isCluster ? '#a78bfa' : 'var(--accent-primary)'};">
              ${isCluster ? `${clusterState.toUpperCase()} (${totalNodes} Nodes)` : `1 Node (DB${s.db})`}
              <i data-lucide="layers" style="width: 11px; height: 11px; margin-left: 2px;"></i>
            </span>
          </div>

          <div class="stat-item">
            <span>Latency:</span>
            <span class="stat-value" style="color: var(--accent-success);">${s.latency_ms} ms</span>
          </div>

          <div class="stat-item">
            <span>Version:</span>
            <span class="stat-value">v${s.redis_version}</span>
          </div>

          <div class="stat-item">
            <span>Total Keys:</span>
            <span class="stat-value">${s.dbsize}</span>
          </div>

          <div class="stat-item">
            <span>Memory:</span>
            <span class="stat-value">${s.used_memory_human || "N/A"}</span>
          </div>

          <div class="stat-item stat-item-clickable" id="btnOpenClientsModal" title="Click to view all connected clients details">
            <span>Clients:</span>
            <span class="stat-value link-highlight">
              ${s.connected_clients || 1}
              <i data-lucide="external-link" style="width: 11px; height: 11px; margin-left: 2px;"></i>
            </span>
          </div>
        </div>
      `;
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
    } else {
      container.innerHTML = `
        <div class="status-pill-group">
          <div class="status-pill">
            <span class="status-indicator disconnected"></span>
            <span>Disconnected</span>
          </div>
          ${s.error ? `<div class="stat-item" style="color: var(--text-muted);"><span>${s.error}</span></div>` : ''}
        </div>
      `;
      if (totalScanned === 0 && keysTableRows.length === 0) {
        renderEmptyWorkspace();
      }
    }
  } catch (err) {
    container.innerHTML = `
      <div class="status-pill">
        <span class="status-indicator disconnected"></span>
        <span>Network Error</span>
      </div>
    `;
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

  // Connection Type toggle in Add Modal
  const typeSelect = document.getElementById("connTypeSelect");
  const clusterGroup = document.getElementById("clusterNodesGroup");
  if (typeSelect && clusterGroup) {
    typeSelect.addEventListener("change", () => {
      clusterGroup.style.display = typeSelect.value === "cluster" ? "block" : "none";
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
    const host = document.getElementById("connHost").value.trim() || "localhost";
    const port = parseInt(document.getElementById("connPort").value, 10) || 6379;
    const db = parseInt(document.getElementById("connDb").value, 10) || 0;
    const username = document.getElementById("connUsername").value.trim() || null;
    const password = document.getElementById("connPassword").value || null;
    const use_tls = document.getElementById("connTls").checked;

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
        body: JSON.stringify({ host, port, db, username, password, use_tls })
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
      resBox.className = "test-result-box error";
      resBox.innerHTML = `
        <i data-lucide="alert-circle"></i>
        <span>Error: ${err.message}</span>
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
    const host = document.getElementById("connHost").value.trim() || "localhost";
    const port = parseInt(document.getElementById("connPort").value, 10) || 6379;
    const cluster_nodes = document.getElementById("connClusterNodes") ? document.getElementById("connClusterNodes").value.trim() || null : null;
    const db = parseInt(document.getElementById("connDb").value, 10) || 0;
    const username = document.getElementById("connUsername").value.trim() || null;
    const password = document.getElementById("connPassword").value || null;
    const use_tls = document.getElementById("connTls").checked;
    const auto_activate = document.getElementById("connAutoActivate").checked;

    try {
      const res = await fetch(`/api/connections?auto_activate=${auto_activate}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, env, conn_type, host, port, cluster_nodes, db, username, password, use_tls })
      });
      if (!res.ok) throw new Error("Failed to save connection");
      modal.classList.remove("active");
      document.getElementById("connectionForm").reset();
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
