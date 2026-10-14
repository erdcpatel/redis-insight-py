import { state, escapeHtml } from "./state.js";
import { setupIcons } from "./icons.js";
import { switchWorkspaceTab } from "./tabs.js";

let onConnectCluster = null;

export function registerTopologyClusterConnect(connectFn) {
  onConnectCluster = connectFn;
}

export async function openKeyspaceModal() {
  const modal = document.getElementById("keyspaceNodesModal");
  if (!modal) return;
  modal.classList.add("active");
  renderKeyspaceNodes(state.lastStatus);
  await loadKeyspaceNodes();
}

export function closeKeyspaceModal() {
  const modal = document.getElementById("keyspaceNodesModal");
  if (modal) modal.classList.remove("active");
}

export async function loadKeyspaceNodes() {
  try {
    const res = await fetch("/api/status");
    if (!res.ok) throw new Error("Failed to load node stats");
    state.lastStatus = await res.json();
    renderKeyspaceNodes(state.lastStatus);
  } catch (err) {
    const container = document.getElementById("keyspaceNodesContainer");
    if (container) {
      container.innerHTML = `<div style="padding: 2rem; text-align: center; color: var(--accent-danger);">${escapeHtml(err.message)}</div>`;
    }
  }
}

export function renderKeyspaceNodes(status) {
  const container = document.getElementById("keyspaceNodesContainer");
  const totalBadge = document.getElementById("keyspaceTotalBadge");
  if (!container || !status) return;

  const stats = status.node_stats || [];
  const masters = stats.filter(n => n.role === "master");
  const total = masters.reduce((sum, n) => sum + (n.keys || 0), 0);
  if (totalBadge) totalBadge.textContent = `${total.toLocaleString()} keys`;

  if (masters.length === 0) {
    container.innerHTML = `<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">Per-node breakdown is only available for cluster connections.</div>`;
    return;
  }

  const fmt = v => (v === null || v === undefined) ? "—" : Number(v).toLocaleString();
  const th = (label, align = "left") => `<th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: ${align};">${label}</th>`;
  const td = (content, extra = "") => `<td style="padding: 0.6rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; ${extra}">${content}</td>`;

  const rows = masters.map(m => {
    const share = total > 0 && m.keys !== null ? ((m.keys / total) * 100).toFixed(1) : "0.0";
    const replicas = stats.filter(n => n.role === "replica" && n.master === m.node);
    const masterRow = `
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
        ${td(`<span class="role-badge-master">MASTER</span> <span style="color: var(--text-primary); font-weight: 600; margin-left: 6px;">${escapeHtml(m.node)}</span>`)}
        ${td(m.error ? `<span style="color: var(--accent-danger);" title="${escapeHtml(m.error)}">unreachable</span>` : fmt(m.keys), "text-align: right; color: var(--text-primary); font-weight: 600;")}
        ${td(`${share}%`, "text-align: right; color: var(--text-secondary);")}
        ${td(escapeHtml(m.used_memory_human || "—"), "text-align: right; color: #c084fc;")}
        ${td(fmt(m.connected_clients), "text-align: right; color: #38bdf8;")}
      </tr>`;
    const replicaRows = replicas.map(r => {
      const drift = (r.keys !== null && m.keys !== null) ? r.keys - m.keys : null;
      const driftHtml = drift === null
        ? ""
        : drift === 0
        ? `<span style="color: var(--accent-success); margin-left: 6px;">in sync</span>`
        : `<span style="color: var(--accent-warning); margin-left: 6px;" title="Replica key count differs from its master (replication lag or expiring keys)">${drift > 0 ? "+" : ""}${drift.toLocaleString()}</span>`;
      return `
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04); background: rgba(0,0,0,0.12);">
        ${td(`<span style="color: var(--text-muted); margin-left: 0.75rem;">↳</span> <span class="role-badge-replica">REPLICA</span> <span style="color: var(--text-secondary); margin-left: 6px;">${escapeHtml(r.node)}</span>`)}
        ${td(r.error ? `<span style="color: var(--accent-danger);" title="${escapeHtml(r.error)}">unreachable</span>` : `${fmt(r.keys)}${driftHtml}`, "text-align: right; color: var(--text-secondary);")}
        ${td("", "")}
        ${td(escapeHtml(r.used_memory_human || "—"), "text-align: right; color: var(--text-muted);")}
        ${td(fmt(r.connected_clients), "text-align: right; color: var(--text-muted);")}
      </tr>`;
    }).join("");
    return masterRow + replicaRows;
  }).join("");

  container.innerHTML = `
    <table class="data-table" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>${th("NODE")}${th("KEYS", "right")}${th("SHARE", "right")}${th("MEMORY", "right")}${th("CLIENTS", "right")}</tr>
      </thead>
      <tbody>${rows}</tbody>
      <tfoot>
        <tr>
          ${td("Cluster total (masters)", "color: var(--text-muted); font-family: inherit;")}
          ${td(total.toLocaleString(), "text-align: right; color: var(--accent-primary); font-weight: 700;")}
          ${td("100%", "text-align: right; color: var(--text-muted);")}
          ${td(escapeHtml(status.used_memory_human || "—"), "text-align: right; color: #c084fc;")}
          ${td("", "")}
        </tr>
      </tfoot>
    </table>
  `;
  setupIcons();
}

export function resetTopologyState(conn) {
  state.currentTopologyData = null;
  state.topologyLoadedForConnId = null;

  const statsGrid = document.getElementById("topologyStatsGrid");
  const nodesCountBadge = document.getElementById("topologyNodesCountBadge");
  const tabBadgeTopology = document.getElementById("tabBadgeTopology");

  if (statsGrid) statsGrid.innerHTML = "";
  if (nodesCountBadge) nodesCountBadge.textContent = "-";
  if (tabBadgeTopology) tabBadgeTopology.textContent = "-";

  renderTopologyClusterPrompt(conn);
}

export function renderTopologyClusterPrompt(conn) {
  const tableContainer = document.getElementById("topologyTableContainer");
  const envBadge = document.getElementById("topologyEnvBadge");
  if (!tableContainer) return;

  const targetConn = conn || state.cachedConnections.find(c => String(c.id) === String(state.selectedConnectionId) || c.is_selected) || null;
  const connName = targetConn ? targetConn.name : (state.lastStatus?.connection_name || "Active Cluster");
  const connHost = targetConn ? targetConn.host : (state.lastStatus?.host || "127.0.0.1");
  const connPort = targetConn ? targetConn.port : (state.lastStatus?.port || 6379);
  const env = targetConn ? (targetConn.env || "LOCAL").toUpperCase() : (state.lastStatus?.env || "LOCAL").toUpperCase();

  if (envBadge) {
    envBadge.textContent = env;
    envBadge.className = `badge-env badge-env-${env.toLowerCase()}`;
  }

  tableContainer.innerHTML = `
    <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-secondary);">
      <div style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.25); margin-bottom: 1rem;">
        <i data-lucide="network" style="width: 24px; height: 24px; color: #c084fc;"></i>
      </div>
      <div style="font-weight: 600; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.35rem;">
        Topology Map for ${escapeHtml(connName)} (${escapeHtml(connHost)}:${connPort})
        <span class="badge-env badge-env-${env.toLowerCase()}" style="margin-left: 0.4rem; vertical-align: middle;">${env}</span>
      </div>
      <p style="font-size: 0.82rem; color: var(--text-muted); max-width: 440px; margin: 0 auto 1.25rem; line-height: 1.5;">
        Cluster switched. Diagnostics cache cleared. Click below to inspect cluster nodes, primary/replica roles, and hash slot distribution.
      </p>
      <button type="button" class="btn btn-primary" id="btnFetchTopologyExplicit" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">
        <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i>
        Load Cluster Topology
      </button>
    </div>
  `;
  setupIcons();

  const btnFetch = document.getElementById("btnFetchTopologyExplicit");
  if (btnFetch) {
    btnFetch.onclick = () => loadTopologyData();
  }
}

export async function openTopologyModal(connId = null) {
  switchWorkspaceTab("topology");

  if (connId && onConnectCluster) {
    const activeCard = document.querySelector(`.conn-card[data-id="${connId}"]`);
    if (activeCard && !activeCard.classList.contains("active")) {
      await onConnectCluster(connId);
    }
  }

  if (state.topologyLoadedForConnId !== state.selectedConnectionId) {
    renderTopologyClusterPrompt();
  } else if (state.currentTopologyData) {
    renderTopologyStats(state.currentTopologyData);
    renderTopologyNodes();
  } else {
    renderTopologyClusterPrompt();
  }
}

export function closeTopologyModal() {
  switchWorkspaceTab("keys");
}

export async function loadTopologyData() {
  const statsGrid = document.getElementById("topologyStatsGrid");
  const tableContainer = document.getElementById("topologyTableContainer");
  const nodesCountBadge = document.getElementById("topologyNodesCountBadge");
  const tabBadgeTopology = document.getElementById("tabBadgeTopology");
  const envBadge = document.getElementById("topologyEnvBadge");

  const targetConnId = state.selectedConnectionId;
  const activeConn = state.cachedConnections.find(c => c.id === targetConnId || c.is_selected);
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

    if (state.selectedConnectionId !== targetConnId) return;

    state.currentTopologyData = data;
    state.topologyLoadedForConnId = targetConnId;

    const label = `${data.total_nodes} Node${data.total_nodes !== 1 ? 's' : ''}`;
    if (nodesCountBadge) {
      nodesCountBadge.textContent = label;
    }
    if (tabBadgeTopology) {
      tabBadgeTopology.textContent = label;
    }

    renderTopologyStats(data);
    renderTopologyNodes();
  } catch (err) {
    if (state.selectedConnectionId !== targetConnId) return;
    if (tableContainer) {
      tableContainer.innerHTML = `
        <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Unable to retrieve topology</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-secondary);">${escapeHtml(err.message)}</p>
          <button type="button" class="btn btn-secondary btn-sm" id="btnRetryTopology" style="margin-top: 0.75rem;">Retry</button>
        </div>
      `;
      setupIcons();
      const btnRetry = document.getElementById("btnRetryTopology");
      if (btnRetry) btnRetry.onclick = () => loadTopologyData();
    }
  }
}

export function renderTopologyStats(data) {
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

export function renderTopologyNodes() {
  const container = document.getElementById("topologyTableContainer");
  if (!container || !state.currentTopologyData) return;

  const nodes = state.currentTopologyData.nodes || [];
  const q = (state.currentTopologySearch || "").trim().toLowerCase();
  const roleFilter = state.currentTopologyRole;

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
          <th style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.72rem; text-align: right;">KEYS</th>
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
              <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.82rem; text-align: right; color: ${isMaster ? 'var(--text-primary)' : 'var(--text-secondary)'};">
                ${n.keys === null || n.keys === undefined ? '—' : Number(n.keys).toLocaleString()}
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

export function updateBulkDeleteToolbarVisibility() {
  const btn = document.getElementById("btnOpenBulkDeleteModal");
  if (!btn) return;
  if (state.lastStatus?.read_only) {
    btn.disabled = true;
    btn.style.opacity = "0.4";
    btn.style.cursor = "not-allowed";
    btn.title = "🔒 Bulk Delete is disabled in Read-Only mode";
  } else {
    btn.disabled = false;
    btn.style.opacity = "1";
    btn.style.cursor = "pointer";
    btn.title = "Bulk delete matched keys (Dry-run & confirmation required)";
  }
}

export function setupTopologyEventListeners() {
  const btnCloseTopology = document.getElementById("btnCloseTopologyModal");
  if (btnCloseTopology) btnCloseTopology.addEventListener("click", closeTopologyModal);

  const btnOpenTopologyTop = document.getElementById("btnOpenTopologyTop");
  if (btnOpenTopologyTop) btnOpenTopologyTop.addEventListener("click", () => openTopologyModal());

  const btnRefreshTopology = document.getElementById("btnRefreshTopologyModal");
  if (btnRefreshTopology) btnRefreshTopology.addEventListener("click", loadTopologyData);

  const searchInput = document.getElementById("topologySearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      state.currentTopologySearch = searchInput.value.trim();
      renderTopologyNodes();
    });
  }

  const roleFilter = document.getElementById("topologyRoleFilter");
  if (roleFilter) {
    roleFilter.addEventListener("click", (e) => {
      const btn = e.target.closest(".type-tab");
      if (btn && btn.dataset.role) {
        roleFilter.querySelectorAll(".type-tab").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.currentTopologyRole = btn.dataset.role;
        renderTopologyNodes();
      }
    });
  }

  // Keyspace modal listeners
  const btnCloseKeyspace = document.getElementById("btnCloseKeyspaceModal");
  if (btnCloseKeyspace) btnCloseKeyspace.addEventListener("click", closeKeyspaceModal);

  const btnRefreshKeyspace = document.getElementById("btnRefreshKeyspaceModal");
  if (btnRefreshKeyspace) btnRefreshKeyspace.addEventListener("click", loadKeyspaceNodes);

  const btnKeyspaceOpenTopology = document.getElementById("btnKeyspaceOpenTopology");
  if (btnKeyspaceOpenTopology) {
    btnKeyspaceOpenTopology.addEventListener("click", () => {
      closeKeyspaceModal();
      openTopologyModal();
    });
  }
}
