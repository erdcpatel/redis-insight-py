import { state, escapeHtml } from "./state.js";
import { setupIcons } from "./icons.js";
import { openTopologyModal } from "./topology.js";
import { showToast } from "./toast.js";
import { showConfirmDialog } from "./dialog.js";

let editingConnectionId = null;
let configuredClusterNodes = [];

let onRefreshStatus = null;
let onResetAndScan = null;
let onClusterSwitchedCallbacks = [];

export function registerConnectionsCallbacks(refreshStatusFn, resetAndScanFn) {
  onRefreshStatus = refreshStatusFn;
  onResetAndScan = resetAndScanFn;
}

export function registerClusterSwitchedCallback(cb) {
  if (typeof cb === "function") {
    onClusterSwitchedCallbacks.push(cb);
  }
}

export function updateAllPaneClusterContexts(conn) {
  const targetConn = conn || state.cachedConnections.find(c => c.id === state.selectedConnectionId || c.is_selected) || null;
  const connName = targetConn ? targetConn.name : (state.lastStatus?.connection_name || "Active Target");
  const connHost = targetConn ? targetConn.host : (state.lastStatus?.host || "127.0.0.1");
  const connPort = targetConn ? targetConn.port : (state.lastStatus?.port || 6379);
  const env = (targetConn ? (targetConn.env || "LOCAL") : (state.lastStatus?.env || "LOCAL")).toUpperCase();
  const connType = targetConn ? (targetConn.conn_type || "standalone") : (state.lastStatus?.is_cluster ? "cluster" : "standalone");
  const isCluster = connType === "cluster" || state.lastStatus?.is_cluster;
  const isReadOnly = state.lastStatus?.read_only;

  const html = `
    <span>Target:</span>
    <strong class="context-conn-name" style="color: var(--text-primary); font-weight: 600;">${escapeHtml(connName)}</strong>
    <span class="context-conn-endpoint" style="font-family: var(--font-mono); color: var(--text-muted); font-size: 0.72rem;">(${escapeHtml(connHost)}:${connPort})</span>
    <span class="badge-env badge-env-${env.toLowerCase()}" style="font-size: 0.65rem; padding: 0.1rem 0.35rem;">${env}</span>
    <span class="top-conn-tag" style="font-size: 0.65rem; padding: 0.1rem 0.35rem;">${isCluster ? 'CLUSTER' : 'STANDALONE'}</span>
    ${isReadOnly ? `<span class="badge-readonly" style="font-size: 0.65rem; padding: 0.1rem 0.35rem;"><i data-lucide="lock" style="width: 10px; height: 10px; vertical-align: middle;"></i> READ ONLY</span>` : ''}
  `;

  // 1. Benchmark Studio
  const benchSubtitle = document.getElementById("benchmarkTargetSubtitle");
  if (benchSubtitle) {
    benchSubtitle.innerHTML = html + ` <span style="color: var(--text-muted); font-size: 0.7rem;">| Namespace: __ri_bench__</span>`;
  }

  // 2. Memory Studio
  const memSubtitle = document.getElementById("memoryTargetSubtitle");
  if (memSubtitle) {
    memSubtitle.innerHTML = html;
  }

  // 3. Slowlog Profiler
  const slowSubtitle = document.getElementById("slowlogTargetSubtitle");
  if (slowSubtitle) {
    slowSubtitle.innerHTML = html;
  }

  // 4. Cluster Topology
  const topoSubtitle = document.getElementById("topologyTargetSubtitle");
  if (topoSubtitle) {
    topoSubtitle.innerHTML = html;
  }

  // 5. Connected Clients
  const clientsSubtitle = document.getElementById("clientsTargetSubtitle");
  if (clientsSubtitle) {
    clientsSubtitle.innerHTML = html;
  }

  // 6. Keys Action Bar Capsule
  const keysCapsuleText = document.getElementById("keysTargetText");
  if (keysCapsuleText) {
    keysCapsuleText.innerHTML = `
      <span class="target-conn-name">${escapeHtml(connName)}</span>
      <span class="target-endpoint">(${escapeHtml(connHost)}:${connPort})</span>
    `;
  }

  setupIcons();
}

export function notifyClusterSwitched(connId) {
  const targetConn = state.cachedConnections.find(c => c.id === connId) || null;
  updateAllPaneClusterContexts(targetConn);
  for (const cb of onClusterSwitchedCallbacks) {
    try {
      cb(targetConn);
    } catch (e) {
      console.warn("Error running cluster-switched callback:", e);
    }
  }
}

export async function loadConnections() {
  const listEl = document.getElementById("connectionsList");
  try {
    const [connRes, limitRes] = await Promise.all([
      fetch("/api/connections"),
      fetch("/api/connections/limit")
    ]);
    const connections = await connRes.json();
    state.cachedConnections = connections || [];

    if (state.selectedConnectionId) {
      const match = state.cachedConnections.find(c => c.id === state.selectedConnectionId);
      if (match && match.is_connected) {
        state.cachedConnections.forEach(c => {
          c.is_selected = (c.id === state.selectedConnectionId);
        });
      } else {
        const activeConn = state.cachedConnections.find(c => c.is_selected && c.is_connected) || state.cachedConnections.find(c => c.is_connected);
        if (activeConn) {
          state.selectedConnectionId = activeConn.id;
          localStorage.setItem("redis_insight_selected_conn_id", activeConn.id);
          state.cachedConnections.forEach(c => {
            c.is_selected = (c.id === activeConn.id);
          });
        }
      }
    } else {
      const activeConn = state.cachedConnections.find(c => c.is_selected && c.is_connected) || state.cachedConnections.find(c => c.is_connected);
      if (activeConn) {
        state.selectedConnectionId = activeConn.id;
        localStorage.setItem("redis_insight_selected_conn_id", activeConn.id);
      }
    }

    if (limitRes.ok) {
      const limitData = await limitRes.json();
      state.currentLimit = limitData.limit || 2;
    }

    renderConnectionsList();
  } catch (err) {
    if (listEl) {
      listEl.innerHTML = `<div style="padding: 1rem; color: var(--accent-danger);">Failed to load connections</div>`;
    }
  }
}

export function updateLimitUI(connectedCount, limit) {
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

export function renderConnectionsList() {
  const listEl = document.getElementById("connectionsList");
  if (!listEl) return;

  const totalBadge = document.getElementById("totalConnCountBadge");
  if (totalBadge) totalBadge.textContent = state.cachedConnections.length;

  const envPills = document.querySelectorAll("#envFilterPills .env-pill-btn");
  envPills.forEach(pill => {
    const env = pill.getAttribute("data-env");
    let count = 0;
    if (env === "ALL") {
      count = state.cachedConnections.length;
    } else {
      count = state.cachedConnections.filter(c => (c.env || "LOCAL").toUpperCase() === env).length;
    }
    pill.textContent = `${env} (${count})`;
  });

  const q = (state.currentConnSearch || "").trim().toLowerCase();
  const env = state.currentEnvFilter;

  const filtered = state.cachedConnections.filter(c => {
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

  filtered.sort((a, b) => {
    const aConn = a.is_connected ? 1 : 0;
    const bConn = b.is_connected ? 1 : 0;
    if (bConn !== aConn) return bConn - aConn;

    const aSel = a.is_selected ? 1 : 0;
    const bSel = b.is_selected ? 1 : 0;
    if (bSel !== aSel) return bSel - aSel;

    return (a.name || "").localeCompare(b.name || "");
  });

  const connectedTotal = state.cachedConnections.filter(c => c.is_connected).length;
  updateLimitUI(connectedTotal, state.currentLimit);

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

          <div class="conn-title-wrap" style="display: flex; align-items: center; gap: 0.35rem; min-width: 0; flex: 1;">
            <span class="conn-name" title="${escapeHtml(c.name)}">${escapeHtml(c.name)}</span>
            <span class="badge-env ${envClass}" style="font-size: 0.62rem; padding: 0.05rem 0.35rem; flex-shrink: 0;">${envUpper}</span>
          </div>

          <div class="conn-status-badge-wrap">
            ${isSelected ? `
              <span class="badge-selected-cluster"><span class="beacon-dot"></span>ACTIVE</span>
            ` : isConnected ? `
              <span class="badge-connected-cluster">CONNECTED</span>
            ` : ''}
          </div>
        </div>

        <div class="conn-sub-row">
          <div class="conn-endpoint" title="${escapeHtml(c.host)}:${c.port}">
            <i data-lucide="${isCluster ? 'network' : isSentinel ? 'git-branch' : 'server'}" style="width: 12px; height: 12px; opacity: 0.65; flex-shrink: 0;"></i>
            <span class="endpoint-text">${escapeHtml(c.host)}:${c.port}</span>
          </div>

          <div class="conn-tags">
            ${c.read_only ? '<span class="badge-readonly" title="Read-Only Mode: Mutating operations locked">🔒 RO</span>' : ''}
            ${isCluster ? '<span class="badge-conn-type badge-type-cluster">CLUSTER</span>' : ''}
            ${isSentinel ? '<span class="badge-conn-type badge-type-sentinel">SENTINEL</span>' : ''}
            ${!isCluster && !isSentinel ? `<span class="badge-db">DB${c.db}</span>` : ''}
            ${c.use_tls ? '<i data-lucide="shield-check" class="conn-security-icon tls" title="TLS / SSL Encrypted"></i>' : ''}
            ${c.has_password ? '<i data-lucide="lock" class="conn-security-icon auth" title="Password Protected"></i>' : ''}
            ${isConfig ? '<span class="badge-source-cfg" title="Managed in config/connections.yaml">CFG</span>' : ''}
          </div>
        </div>

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
      const targetConn = state.cachedConnections.find(c => c.id === connId);
      if (targetConn) {
        openClusterConfigModal(targetConn);
      }
    });
  });

  listEl.querySelectorAll(".btn-card-disconnect").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const connId = btn.getAttribute("data-id");
      await disconnectCluster(connId);
    });
  });

  listEl.querySelectorAll(".btn-card-select").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const connId = btn.getAttribute("data-id");
      await selectCluster(connId);
    });
  });

  listEl.querySelectorAll(".btn-card-open-config").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const connId = btn.getAttribute("data-id");
      const targetConn = state.cachedConnections.find(c => c.id === connId);
      if (targetConn) {
        openClusterConfigModal(targetConn);
      }
    });
  });

  listEl.querySelectorAll(".btn-view-topology-card").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      await openTopologyModal(id);
    });
  });

  listEl.querySelectorAll(".btn-delete-conn").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      const name = btn.getAttribute("data-name");
      const confirmed = await showConfirmDialog({
        title: "Delete Connection",
        message: `Are you sure you want to delete '${name}'? This will remove the saved connection configuration.`,
        confirmText: "Delete",
        danger: true
      });
      if (confirmed) {
        await deleteConnection(id);
      }
    });
  });
}

export function parseSeedNodes(raw) {
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

export function openClusterConfigModal(conn) {
  state.activeConfigConn = conn;
  const modal = document.getElementById("clusterConfigModal");
  const titleEl = document.getElementById("cfgModalTitle");
  const subtitleEl = document.getElementById("cfgModalSubtitle");
  const bodyEl = document.getElementById("cfgModalBody");
  const footerEl = document.getElementById("cfgModalFooter");

  if (!modal || !bodyEl || !footerEl) return;

  if (titleEl) titleEl.textContent = conn.name || "Cluster Configuration";
  if (subtitleEl) subtitleEl.textContent = `Review configuration before connecting`;

  const isConnected = !!conn.is_connected;
  const isSelected = !!conn.is_selected;
  const isCluster = conn.conn_type === "cluster";
  const seedNodesList = parseSeedNodes(conn.cluster_nodes);
  const connectedCount = state.cachedConnections.filter(c => c.is_connected).length;
  const isAtLimit = !isConnected && connectedCount >= state.currentLimit;

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
      <span>Connected Limit: <strong>${connectedCount} of ${state.currentLimit}</strong> clusters currently connected simultaneously.</span>
    </div>

    ${isAtLimit ? `
      <div class="config-warning-box">
        <i data-lucide="alert-circle" style="width: 16px; height: 16px; flex-shrink: 0;"></i>
        <span>Connection limit reached (${state.currentLimit} maximum). Please disconnect a connected cluster first or increase the limit.</span>
      </div>
    ` : ''}

    <div id="cfgTestResultBox" class="test-result-box" style="margin-top: 0.65rem;"></div>
  `;

  if (!isConnected) {
    footerEl.innerHTML = `
      <div style="display: flex; gap: 0.5rem;">
        <button type="button" class="btn btn-secondary" id="btnTestFromConfig">
          <i data-lucide="zap" style="width: 13px; height: 13px;"></i>
          Test Connection
        </button>
        <button type="button" class="btn btn-secondary" id="btnEditFromConfig">
          <i data-lucide="edit" style="width: 13px; height: 13px;"></i>
          Edit
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
        <button type="button" class="btn btn-secondary" id="btnEditFromConfig">
          <i data-lucide="edit" style="width: 13px; height: 13px;"></i>
          Edit
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

  const btnClose = document.getElementById("btnCloseConfigModal");
  if (btnClose) btnClose.onclick = () => modal.classList.remove("active");

  const btnEdit = document.getElementById("btnEditFromConfig");
  if (btnEdit) {
    btnEdit.onclick = () => {
      modal.classList.remove("active");
      openEditConnectionModal(conn);
    };
  }

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

export async function testConfigParams(conn) {
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
    const res = await fetch(`/api/connections/${conn.id}/test`, {
      method: "POST",
      headers: { "Content-Type": "application/json" }
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
        <span>Failed: ${escapeHtml(data.error || "Connection refused")}</span>
      `;
    }
  } catch (err) {
    if (resBox) {
      resBox.className = "test-result-box error";
      resBox.innerHTML = `<i data-lucide="alert-circle"></i><span>Error: ${escapeHtml(err.message)}</span>`;
    }
  } finally {
    if (btnTest) {
      btnTest.disabled = false;
      btnTest.innerHTML = `<i data-lucide="zap" style="width: 13px; height: 13px;"></i> Test Connection`;
    }
    setupIcons();
  }
}

export async function connectCluster(connId) {
  const connectedTotal = state.cachedConnections.filter(c => c.is_connected && c.id !== connId).length;
  if (connectedTotal >= state.currentLimit) {
    showToast(`Connection limit reached: Maximum ${state.currentLimit} connected cluster(s) allowed. Please disconnect an existing cluster first.`, "warning", 4500);
    return;
  }

  try {
    const res = await fetch(`/api/connections/${connId}/connect`, { method: "POST" });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.detail || "Failed to connect to cluster");
    }
    state.selectedConnectionId = connId;
    localStorage.setItem("redis_insight_selected_conn_id", connId);
    await loadConnections();
    notifyClusterSwitched(connId);
    showToast(`Connected to cluster successfully`, "success");
    if (onRefreshStatus) await onRefreshStatus();
    if (onResetAndScan) await onResetAndScan();
  } catch (err) {
    showToast("Connection error: " + err.message, "error");
  }
}

export async function disconnectCluster(connId) {
  try {
    const res = await fetch(`/api/connections/${connId}/disconnect`, { method: "POST" });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.detail || "Failed to disconnect cluster");
    }

    if (state.selectedConnectionId === connId) {
      const nextConn = state.cachedConnections.find(c => c.is_connected && c.id !== connId);
      if (nextConn) {
        state.selectedConnectionId = nextConn.id;
        localStorage.setItem("redis_insight_selected_conn_id", nextConn.id);
      } else {
        state.selectedConnectionId = null;
        localStorage.removeItem("redis_insight_selected_conn_id");
      }
    }

    await loadConnections();
    notifyClusterSwitched(state.selectedConnectionId);
    if (onRefreshStatus) await onRefreshStatus();

    const stillConnected = state.cachedConnections.some(c => c.is_connected && c.id !== connId);
    if (!stillConnected) {
      state.keysTableRows = [];
      state.loadedKeysSet.clear();
      state.totalScanned = 0;
      state.currentCursor = 0;
      state.scanComplete = false;
      state.dbTotalKeys = 0;
      renderEmptyWorkspace();
    } else {
      if (onResetAndScan) await onResetAndScan();
    }
  } catch (err) {
    showToast("Disconnect error: " + err.message, "error");
  }
}

export async function selectCluster(connId) {
  try {
    state.selectedConnectionId = connId;
    localStorage.setItem("redis_insight_selected_conn_id", connId);

    const res = await fetch(`/api/connections/${connId}/select`, { method: "POST" });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.detail || "Failed to switch cluster");
    }

    const detailModal = document.getElementById("keyDetailModal");
    if (detailModal) detailModal.classList.remove("active");
    state.activeDetailKey = null;
    state.activeDetailData = null;

    await loadConnections();
    notifyClusterSwitched(connId);
    if (onRefreshStatus) await onRefreshStatus();
    if (onResetAndScan) await onResetAndScan();
  } catch (err) {
    showToast("Switch error: " + err.message, "error");
  }
}

export function renderEmptyWorkspace() {
  const scanStatus = document.getElementById("scanStatusText");
  if (scanStatus) {
    scanStatus.textContent = "No cluster connected";
  }
  const emptyEl = document.getElementById("emptyWorkspaceState");
  const gridContainer = document.getElementById("gridViewerContainer");
  if (emptyEl) emptyEl.style.display = "flex";
  if (gridContainer) gridContainer.style.display = "none";

  const btnFirst = document.getElementById("btnConnectFirstAvailable");
  if (btnFirst) {
    btnFirst.innerHTML = `<i data-lucide="server" style="width: 14px; height: 14px;"></i> View Available Clusters (${state.cachedConnections.length})`;
    if (state.cachedConnections.length > 0) {
      btnFirst.onclick = () => openClusterConfigModal(state.cachedConnections[0]);
    }
  }
  setupIcons();
}

export async function deleteConnection(connId) {
  try {
    const res = await fetch(`/api/connections/${connId}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete");
    showToast("Connection deleted", "success");
    await loadConnections();
    if (onRefreshStatus) await onRefreshStatus();
    if (onResetAndScan) await onResetAndScan();
  } catch (err) {
    showToast("Delete error: " + err.message, "error");
  }
}

export function renderConfiguredClusterNodes() {
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

export function openEditConnectionModal(conn) {
  editingConnectionId = conn.id;
  const modal = document.getElementById("connectionModal");
  const modalTitle = document.getElementById("connectionModalTitle");
  const btnSave = document.getElementById("btnSaveConn");
  const pwdInput = document.getElementById("connPassword");

  if (modalTitle) {
    modalTitle.innerHTML = `<i data-lucide="edit" style="color: var(--accent-primary);"></i> Edit Redis Connection`;
  }
  if (btnSave) {
    btnSave.textContent = "Update Connection";
  }

  document.getElementById("connName").value = conn.name || "";
  document.getElementById("connEnv").value = (conn.env || "DEV").toUpperCase();
  const typeSelect = document.getElementById("connTypeSelect");
  typeSelect.value = conn.conn_type || "standalone";

  document.getElementById("connHost").value = conn.host || "localhost";
  document.getElementById("connPort").value = conn.port || 6379;
  document.getElementById("connDb").value = conn.db || 0;
  document.getElementById("connUsername").value = conn.username || "";
  document.getElementById("connTls").checked = !!conn.use_tls;
  document.getElementById("connReadOnly").checked = !!conn.read_only;
  if (pwdInput) {
    pwdInput.value = "";
    if (conn.has_password) {
      pwdInput.placeholder = "•••••••• (Leave blank to keep saved password)";
    } else {
      pwdInput.placeholder = "Enter password (or leave empty)";
    }
  }

  const clusterNodesGroup = document.getElementById("clusterNodesGroup");
  const connHostLabel = document.getElementById("connHostLabel");
  const connDbRow = document.getElementById("connDbRow");
  configuredClusterNodes = [];

  if (conn.conn_type === "cluster") {
    if (clusterNodesGroup) clusterNodesGroup.style.display = "block";
    if (connHostLabel) connHostLabel.textContent = "Seed Node Host *";
    if (connDbRow) connDbRow.style.display = "none";
    if (conn.cluster_nodes) {
      try {
        const parsed = typeof conn.cluster_nodes === "string" ? JSON.parse(conn.cluster_nodes) : conn.cluster_nodes;
        if (Array.isArray(parsed)) {
          configuredClusterNodes = parsed.map(n => {
            if (typeof n === "string" && n.includes(":")) {
              const parts = n.split(":");
              return { host: parts[0].trim(), port: parseInt(parts[1], 10) || 6379 };
            }
            return { host: n.host || "127.0.0.1", port: parseInt(n.port, 10) || 6379 };
          });
        }
      } catch (e) {}
    }
  } else {
    if (clusterNodesGroup) clusterNodesGroup.style.display = "none";
    if (connHostLabel) connHostLabel.textContent = "Host *";
    if (connDbRow) connDbRow.style.display = "flex";
  }
  renderConfiguredClusterNodes();

  const resBox = document.getElementById("testResultBox");
  if (resBox) {
    resBox.className = "test-result-box";
    resBox.innerHTML = "";
  }
  setupIcons();
  if (modal) modal.classList.add("active");
}

export function setupConnectionsEventListeners() {
  window.openEditConnectionModal = openEditConnectionModal;

  // Limit Select dropdown change
  const selectLimit = document.getElementById("connLimitSelect");
  if (selectLimit) {
    selectLimit.addEventListener("change", async () => {
      const newLimit = parseInt(selectLimit.value, 10);
      try {
        const res = await fetch("/api/connections/limit", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ limit: newLimit })
        });
        if (res.ok) {
          const data = await res.json();
          state.currentLimit = data.limit;
          updateLimitUI(data.connected_count, data.limit);
        }
      } catch (e) {
        console.warn("Failed to update limit:", e);
      }
    });
  }

  // Connection search input
  const connSearchInput = document.getElementById("connSearchInput");
  if (connSearchInput) {
    connSearchInput.addEventListener("input", () => {
      state.currentConnSearch = connSearchInput.value.trim();
      renderConnectionsList();
    });
  }

  // Env filter pills
  const envFilterPills = document.getElementById("envFilterPills");
  if (envFilterPills) {
    envFilterPills.addEventListener("click", (e) => {
      const btn = e.target.closest(".env-pill-btn");
      if (btn && btn.dataset.env) {
        envFilterPills.querySelectorAll(".env-pill-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.currentEnvFilter = btn.dataset.env;
        renderConnectionsList();
      }
    });
  }

  // Reload config static button
  const btnReloadCfg = document.getElementById("btnReloadConfigStatic");
  if (btnReloadCfg) {
    btnReloadCfg.addEventListener("click", async () => {
      btnReloadCfg.disabled = true;
      try {
        await fetch("/api/connections/reload-config", { method: "POST" });
        await loadConnections();
      } catch (e) {
        console.warn("Reload config failed:", e);
      } finally {
        btnReloadCfg.disabled = false;
      }
    });
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
      btnAutoDiscover.innerHTML = `Discovering...`;

      try {
        const res = await fetch("/api/connections/discover-cluster", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ host, port, username, password, use_tls })
        });
        const data = await res.json();

        if (data.success && data.nodes && data.nodes.length > 0) {
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
              <span>Discovered <strong>${data.total_nodes} nodes</strong> (${data.masters_count} masters, ${data.replicas_count} replicas)</span>
            `;
            setupIcons();
          }
        } else {
          if (discoveryStatusEl) {
            discoveryStatusEl.className = "cluster-discovery-status error";
            discoveryStatusEl.style.display = "flex";
            discoveryStatusEl.innerHTML = `
              <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i>
              <span>${escapeHtml(data.error || "Cluster discovery failed.")}</span>
            `;
            setupIcons();
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
          setupIcons();
        }
      } finally {
        btnAutoDiscover.disabled = false;
        btnAutoDiscover.innerHTML = `<i data-lucide="sparkles" style="width: 13px; height: 13px;"></i> Auto-Discover Nodes`;
        setupIcons();
      }
    });
  }

  // Custom node add
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

  if (btnAddCustomNode) btnAddCustomNode.addEventListener("click", handleAddCustomNode);
  if (inputCustomNode) {
    inputCustomNode.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleAddCustomNode();
      }
    });
  }

  // Add Connection button
  const modalConn = document.getElementById("connectionModal");
  const btnAddConn = document.getElementById("btnAddConn");
  if (btnAddConn && modalConn) {
    btnAddConn.addEventListener("click", () => {
      editingConnectionId = null;
      document.getElementById("connectionForm").reset();
      const modalTitle = document.getElementById("connectionModalTitle");
      const btnSave = document.getElementById("btnSaveConn");
      const pwdInput = document.getElementById("connPassword");

      if (modalTitle) modalTitle.innerHTML = `<i data-lucide="database" style="color: var(--accent-primary);"></i> Add Redis Connection`;
      if (btnSave) btnSave.textContent = "Save Connection";
      if (pwdInput) pwdInput.placeholder = "Leave empty if none";

      const defaultEnv = document.getElementById("connEnv").value;
      document.getElementById("connReadOnly").checked = (defaultEnv === "PROD");

      document.getElementById("clusterNodesGroup").style.display = "none";
      document.getElementById("connHostLabel").textContent = "Host *";
      document.getElementById("connDbRow").style.display = "flex";
      configuredClusterNodes = [];
      renderConfiguredClusterNodes();

      const resBox = document.getElementById("testResultBox");
      if (resBox) {
        resBox.className = "test-result-box";
        resBox.innerHTML = "";
      }
      setupIcons();
      modalConn.classList.add("active");
    });
  }

  const btnCloseModal = document.getElementById("btnCloseModal");
  if (btnCloseModal && modalConn) btnCloseModal.addEventListener("click", () => modalConn.classList.remove("active"));

  const btnCancelModal = document.getElementById("btnCancelModal");
  if (btnCancelModal && modalConn) btnCancelModal.addEventListener("click", () => modalConn.classList.remove("active"));

  // Auto-lock PROD to read-only
  const connEnvSelect = document.getElementById("connEnv");
  if (connEnvSelect) {
    connEnvSelect.addEventListener("change", (e) => {
      if (e.target.value === "PROD") {
        const roCheckbox = document.getElementById("connReadOnly");
        if (roCheckbox) roCheckbox.checked = true;
      }
    });
  }

  // Test Connection in Add/Edit modal
  const btnTestModal = document.getElementById("btnTestConnModal");
  if (btnTestModal) {
    btnTestModal.addEventListener("click", async () => {
      const conn_type = document.getElementById("connTypeSelect").value;
      const host = document.getElementById("connHost").value.trim() || "localhost";
      const port = parseInt(document.getElementById("connPort").value, 10) || 6379;
      const db = parseInt(document.getElementById("connDb").value, 10) || 0;
      const username = document.getElementById("connUsername").value.trim() || null;
      const pwdVal = document.getElementById("connPassword").value;
      const use_tls = document.getElementById("connTls").checked;

      let cluster_nodes = null;
      if (conn_type === "cluster" && configuredClusterNodes.length > 0) {
        cluster_nodes = JSON.stringify(configuredClusterNodes.map(n => ({ host: n.host, port: n.port })));
      }

      const resBox = document.getElementById("testResultBox");
      btnTestModal.disabled = true;
      btnTestModal.innerHTML = "Testing...";

      if (resBox) {
        resBox.className = "test-result-box";
        resBox.innerHTML = "";
      }

      try {
        let res;
        if (editingConnectionId && !pwdVal) {
          res = await fetch(`/api/connections/${editingConnectionId}/test`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ host, port, db, username, use_tls, conn_type, cluster_nodes })
          });
        } else {
          res = await fetch("/api/connections/test", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ host, port, db, username, password: pwdVal || null, use_tls, conn_type, cluster_nodes })
          });
        }
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
        if (resBox) {
          resBox.className = "test-result-box error";
          resBox.innerHTML = `<i data-lucide="alert-circle"></i><span>Error: ${escapeHtml(err.message)}</span>`;
        }
      } finally {
        btnTestModal.disabled = false;
        btnTestModal.innerHTML = `<i data-lucide="zap"></i> Test Connection`;
        setupIcons();
      }
    });
  }

  // Submit Save/Update connection form
  const connForm = document.getElementById("connectionForm");
  if (connForm) {
    connForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("connName").value.trim();
      const env = document.getElementById("connEnv").value;
      const conn_type = document.getElementById("connTypeSelect").value;
      let host = document.getElementById("connHost").value.trim() || "localhost";
      let port = parseInt(document.getElementById("connPort").value, 10) || 6379;
      const db = parseInt(document.getElementById("connDb").value, 10) || 0;
      const username = document.getElementById("connUsername").value.trim() || null;
      const pwdVal = document.getElementById("connPassword").value;
      const use_tls = document.getElementById("connTls").checked;
      const auto_activate = document.getElementById("connAutoActivate").checked;
      const read_only = document.getElementById("connReadOnly")?.checked || false;

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
        if (editingConnectionId) {
          const updatePayload = { name, env, conn_type, host, port, cluster_nodes, db, username, use_tls, read_only };
          if (pwdVal) updatePayload.password = pwdVal;
          const res = await fetch(`/api/connections/${editingConnectionId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatePayload)
          });
          if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            throw new Error(errData.detail || "Failed to update connection");
          }
        } else {
          const createPayload = { name, env, conn_type, host, port, cluster_nodes, db, username, password: pwdVal || null, use_tls, read_only };
          const res = await fetch(`/api/connections?auto_activate=${auto_activate}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(createPayload)
          });
          if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            throw new Error(errData.detail || "Failed to save connection");
          }
        }

        modalConn.classList.remove("active");
        editingConnectionId = null;
        connForm.reset();
        configuredClusterNodes = [];
        renderConfiguredClusterNodes();
        await loadConnections();
        showToast("Connection saved successfully", "success");
        if (onRefreshStatus) await onRefreshStatus();
        if (onResetAndScan) await onResetAndScan();
      } catch (err) {
        showToast("Error saving: " + err.message, "error");
      }
    });
  }
}
