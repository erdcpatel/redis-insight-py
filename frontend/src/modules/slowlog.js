import { state, escapeHtml } from "./state.js";
import { setupIcons } from "./icons.js";
import { switchWorkspaceTab } from "./tabs.js";
import { showToast, copyToClipboard } from "./toast.js";

export function resetSlowlogState(conn) {
  state.allSlowlogEntries = [];
  state.slowlogLoadedForConnId = null;

  const countBadge = document.getElementById("slowlogCountBadge");
  const thresholdBadge = document.getElementById("slowlogThresholdBadge");
  const footerStats = document.getElementById("slowlogFooterStats");
  const nodeFilter = document.getElementById("slowlogNodeFilterContainer");

  if (countBadge) countBadge.textContent = "0";
  if (thresholdBadge) thresholdBadge.textContent = "-";
  if (footerStats) footerStats.textContent = "";
  if (nodeFilter) nodeFilter.innerHTML = "";

  renderSlowlogClusterPrompt(conn);
}

export function renderSlowlogClusterPrompt(conn) {
  const container = document.getElementById("slowlogTableContainer");
  if (!container) return;

  const targetConn = conn || state.cachedConnections.find(c => String(c.id) === String(state.selectedConnectionId) || c.is_selected) || null;
  const connName = targetConn ? targetConn.name : (state.lastStatus?.connection_name || "Active Cluster");
  const connHost = targetConn ? targetConn.host : (state.lastStatus?.host || "127.0.0.1");
  const connPort = targetConn ? targetConn.port : (state.lastStatus?.port || 6379);
  const env = targetConn ? (targetConn.env || "LOCAL").toUpperCase() : (state.lastStatus?.env || "LOCAL").toUpperCase();

  container.innerHTML = `
    <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-secondary);">
      <div style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); margin-bottom: 1rem;">
        <i data-lucide="clock" style="width: 24px; height: 24px; color: #38bdf8;"></i>
      </div>
      <div style="font-weight: 600; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.35rem;">
        Slowlog for ${escapeHtml(connName)} (${escapeHtml(connHost)}:${connPort})
        <span class="badge-env badge-env-${env.toLowerCase()}" style="margin-left: 0.4rem; vertical-align: middle;">${env}</span>
      </div>
      <p style="font-size: 0.82rem; color: var(--text-muted); max-width: 440px; margin: 0 auto 1.25rem; line-height: 1.5;">
        Cluster switched. Diagnostics cache cleared. Click below to inspect query latency logs across this Redis instance/cluster.
      </p>
      <button type="button" class="btn btn-primary" id="btnFetchSlowlogExplicit" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">
        <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i>
        Fetch Slowlog Entries
      </button>
    </div>
  `;
  setupIcons();

  const btnFetch = document.getElementById("btnFetchSlowlogExplicit");
  if (btnFetch) {
    btnFetch.onclick = () => loadSlowlog();
  }
}

export async function openSlowlogModal() {
  switchWorkspaceTab("slowlog");
  state.currentSlowlogMinDuration = 0;
  state.currentSlowlogSearch = "";
  state.currentSlowlogNode = "all";

  const btnClear = document.getElementById("btnClearSlowlogModal");
  if (btnClear) {
    btnClear.style.display = state.lastStatus?.read_only ? "none" : "";
  }

  // Reset filter buttons
  document.querySelectorAll(".slowlog-filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-min-duration") === "0");
  });
  const searchInput = document.getElementById("slowlogSearchInput");
  if (searchInput) searchInput.value = "";

  if (state.slowlogLoadedForConnId !== state.selectedConnectionId) {
    renderSlowlogClusterPrompt();
  } else {
    filterAndRenderSlowlog();
  }
}

export function closeSlowlogModal() {
  switchWorkspaceTab("keys");
}

export async function loadSlowlog() {
  const container = document.getElementById("slowlogTableContainer");
  const countBadge = document.getElementById("slowlogCountBadge");
  const thresholdBadge = document.getElementById("slowlogThresholdBadge");
  const footerStats = document.getElementById("slowlogFooterStats");

  const targetConnId = state.selectedConnectionId;

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

    if (state.selectedConnectionId !== targetConnId) return;

    state.allSlowlogEntries = data.entries || [];
    state.slowlogLoadedForConnId = targetConnId;

    if (countBadge) countBadge.textContent = state.allSlowlogEntries.length;
    if (thresholdBadge && data.slower_than_us !== null && data.slower_than_us !== undefined) {
      const msThreshold = (data.slower_than_us / 1000).toFixed(1);
      thresholdBadge.textContent = `Threshold: > ${msThreshold}ms (${data.slower_than_us} µs)`;
    }
    if (footerStats) {
      footerStats.textContent = `Total buffer: ${data.total_len || state.allSlowlogEntries.length} entries | Max buffer: ${data.max_len || 'N/A'}`;
    }

    buildSlowlogNodeFilter(state.allSlowlogEntries);
    filterAndRenderSlowlog();
  } catch (err) {
    if (state.selectedConnectionId !== targetConnId) return;
    if (container) {
      container.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error Loading Slowlog</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${escapeHtml(err.message)}</p>
          <button type="button" class="btn btn-secondary btn-sm" id="btnRetrySlowlog" style="margin-top: 0.75rem;">Retry</button>
        </div>
      `;
      setupIcons();
      const btnRetry = document.getElementById("btnRetrySlowlog");
      if (btnRetry) btnRetry.onclick = () => loadSlowlog();
    }
  }
}

export function buildSlowlogNodeFilter(entries) {
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
      ${nodes.map(n => `<option value="${escapeHtml(n)}" ${state.currentSlowlogNode === n ? 'selected' : ''}>${escapeHtml(n)}</option>`).join("")}
    </select>
  `;

  const sel = document.getElementById("slowlogNodeSelect");
  if (sel) {
    sel.addEventListener("change", () => {
      state.currentSlowlogNode = sel.value;
      filterAndRenderSlowlog();
    });
  }
}

export function filterAndRenderSlowlog() {
  let list = state.allSlowlogEntries;

  if (state.currentSlowlogMinDuration > 0) {
    list = list.filter(e => e.duration_ms >= state.currentSlowlogMinDuration);
  }

  if (state.currentSlowlogNode && state.currentSlowlogNode !== "all") {
    list = list.filter(e => e.node === state.currentSlowlogNode);
  }

  if (state.currentSlowlogSearch) {
    const q = state.currentSlowlogSearch.toLowerCase();
    list = list.filter(e => {
      const cmdStr = (e.command || []).join(" ").toLowerCase();
      const clientStr = (e.client_ip || "").toLowerCase();
      const nodeStr = (e.node || "").toLowerCase();
      return cmdStr.includes(q) || clientStr.includes(q) || nodeStr.includes(q) || String(e.id).includes(q);
    });
  }

  renderSlowlogTable(list);
}

export function renderSlowlogTable(entries) {
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
          ${state.allSlowlogEntries.length === 0 ? "Redis latency is healthy! All commands executed within the threshold." : "No slowlog entries matched the active filters."}
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
                <div style="display: flex; align-items: center; gap: 0.35rem;">
                  <span class="slowlog-cmd-code" title="${escapeHtml(cmdStr)}">${escapeHtml(cmdStr)}</span>
                  <button type="button" class="btn-copy-inline btn-copy-slowlog-cmd" data-cmd="${escapeHtml(cmdStr)}" title="Copy full command">
                    <i data-lucide="copy" style="width: 12px; height: 12px;"></i>
                  </button>
                </div>
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

  document.querySelectorAll(".btn-copy-slowlog-cmd").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const c = btn.getAttribute("data-cmd");
      if (c) {
        const ok = await copyToClipboard(c);
        if (ok) {
          btn.classList.add("copied");
          btn.innerHTML = `<i data-lucide="check" style="width: 12px; height: 12px;"></i>`;
          setupIcons();
          setTimeout(() => {
            btn.classList.remove("copied");
            btn.innerHTML = `<i data-lucide="copy" style="width: 12px; height: 12px;"></i>`;
            setupIcons();
          }, 1500);
        }
      }
    });
  });
}

export async function clearSlowlog() {
  if (state.lastStatus?.read_only) {
    showToast("Slowlog reset is disabled in Read-Only mode.", "warning");
    return;
  }
  if (!confirm("Are you sure you want to reset the Redis Slowlog buffer?\n\nThis will clear recorded slow commands across all connected Redis instances.")) {
    return;
  }

  try {
    const res = await fetch("/api/slowlog/reset", { method: "POST" });
    if (!res.ok) throw new Error("Failed to reset slowlog");
    showToast("Slowlog buffer reset successfully", "success");
    await loadSlowlog();
  } catch (err) {
    showToast("Error resetting slowlog: " + err.message, "error");
  }
}

export function setupSlowlogEventListeners() {
  const btnCloseSlowlog = document.getElementById("btnCloseSlowlogModal");
  if (btnCloseSlowlog) btnCloseSlowlog.addEventListener("click", closeSlowlogModal);

  const btnOpenSlowlog = document.getElementById("btnOpenSlowlog");
  if (btnOpenSlowlog) btnOpenSlowlog.addEventListener("click", openSlowlogModal);

  const btnRefreshSlowlog = document.getElementById("btnRefreshSlowlogModal");
  if (btnRefreshSlowlog) btnRefreshSlowlog.addEventListener("click", loadSlowlog);

  const btnClearSlowlog = document.getElementById("btnClearSlowlogModal");
  if (btnClearSlowlog) btnClearSlowlog.addEventListener("click", clearSlowlog);

  const searchInput = document.getElementById("slowlogSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      state.currentSlowlogSearch = searchInput.value.trim();
      filterAndRenderSlowlog();
    });
  }

  document.querySelectorAll(".slowlog-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".slowlog-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.currentSlowlogMinDuration = parseInt(btn.getAttribute("data-min-duration") || "0", 10);
      filterAndRenderSlowlog();
    });
  });
}
