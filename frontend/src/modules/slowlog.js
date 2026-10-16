import { state, escapeHtml } from "./state.js";
import { setupIcons } from "./icons.js";
import { switchWorkspaceTab } from "./tabs.js";
import { showToast, copyToClipboard } from "./toast.js";
import { saveBlobAsFile, triggerButtonFeedback } from "./inspector.js";

export function formatRelativeTime(epochSec) {
  if (!epochSec) return "";
  const now = Math.floor(Date.now() / 1000);
  const diff = Math.max(0, now - epochSec);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export function resetSlowlogState(conn) {
  state.allSlowlogEntries = [];
  state.slowlogLoadedForConnId = null;
  state.currentSlowlogTimeWindow = "all";

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
  state.currentSlowlogTimeWindow = "all";

  const btnClear = document.getElementById("btnClearSlowlogModal");
  if (btnClear) {
    btnClear.style.display = state.lastStatus?.read_only ? "none" : "";
  }

  // Reset filter buttons
  document.querySelectorAll(".slowlog-filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-min-duration") === "0");
  });
  document.querySelectorAll(".slowlog-time-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-time-window") === "all");
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

  if (state.currentSlowlogTimeWindow && state.currentSlowlogTimeWindow !== "all") {
    const nowSec = Math.floor(Date.now() / 1000);
    let windowSec = 0;
    if (state.currentSlowlogTimeWindow === "5m") windowSec = 5 * 60;
    else if (state.currentSlowlogTimeWindow === "15m") windowSec = 15 * 60;
    else if (state.currentSlowlogTimeWindow === "1h") windowSec = 60 * 60;
    else if (state.currentSlowlogTimeWindow === "24h") windowSec = 24 * 60 * 60;

    const cutoffSec = nowSec - windowSec;
    list = list.filter(e => (e.timestamp || 0) >= cutoffSec);
  }

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

  state.currentlyFilteredSlowlogEntries = list;
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
          <th>Command &amp; Arguments</th>
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
                ${formatRelativeTime(e.timestamp) ? `<span style="font-size: 0.68rem; color: #38bdf8; display: block; margin-top: 2px; font-weight: 500;">${formatRelativeTime(e.timestamp)}</span>` : ''}
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
                  <span class="slowlog-cmd-code slowlog-cmd-zoomable" data-id="${e.id}" title="Click to zoom in and inspect full command &amp; Lua script">${escapeHtml(cmdStr)}</span>
                  <button type="button" class="btn-copy-inline btn-inspect-slowlog-cmd" data-id="${e.id}" title="Zoom In / View Full Command &amp; Lua Script">
                    <i data-lucide="zoom-in" style="width: 12px; height: 12px; color: #38bdf8;"></i>
                  </button>
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

  // Attach zoom / inspect listener
  container.querySelectorAll(".btn-inspect-slowlog-cmd, .slowlog-cmd-zoomable").forEach(el => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = el.getAttribute("data-id");
      if (id) openSlowlogDetailModal(id);
    });
  });

  // Attach copy listeners
  container.querySelectorAll(".btn-copy-slowlog-cmd").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const c = btn.getAttribute("data-cmd");
      if (c) {
        const ok = await copyToClipboard(c);
        if (ok) {
          triggerButtonFeedback(btn, "Copied!");
        }
      }
    });
  });
}

// ==========================================
// Slowlog Command Zoom & Detailed Inspector
// ==========================================
export function openSlowlogDetailModal(entryId) {
  const modal = document.getElementById("slowlogDetailModal");
  const titleEl = document.getElementById("slowlogDetailTitle");
  const durationBadge = document.getElementById("slowlogDetailDurationBadge");
  const subtitleEl = document.getElementById("slowlogDetailSubtitle");
  const bodyEl = document.getElementById("slowlogDetailBody");
  const footerTel = document.getElementById("slowlogDetailFooterTelemetry");
  if (!modal || !bodyEl) return;

  const entry = (state.allSlowlogEntries || []).find(e => String(e.id) === String(entryId));
  if (!entry) return;

  if (titleEl) titleEl.textContent = `Slowlog Command #${entry.id}`;
  if (durationBadge) {
    let badgeClass = "badge-duration-fast";
    if (entry.duration_ms >= 50) badgeClass = "badge-duration-critical";
    else if (entry.duration_ms >= 10) badgeClass = "badge-duration-warning";
    durationBadge.className = `badge-duration ${badgeClass}`;
    durationBadge.textContent = `${entry.duration_ms} ms (${entry.duration_us.toLocaleString()} µs)`;
  }
  if (subtitleEl) {
    subtitleEl.textContent = `Recorded at ${entry.time_str} (${formatRelativeTime(entry.timestamp)}) • Node: ${entry.node || 'Default'}`;
  }
  if (footerTel) {
    footerTel.textContent = `Entry ID: ${entry.id} | Timestamp: ${entry.timestamp} | Client: ${entry.client_ip || 'Unknown'}`;
  }

  const rawCmdStr = (entry.command && entry.command.length > 0) ? entry.command.join(" ") : "(empty)";
  const cmdUpper = (entry.command && entry.command[0]) ? entry.command[0].toUpperCase() : "";
  const hasRedisTruncation = (entry.command || []).some(arg => typeof arg === "string" && (arg.includes("more bytes)") || arg.includes("more arguments)")));

  let luaSectionHtml = "";
  if (cmdUpper === "EVAL" && entry.command.length >= 2) {
    const luaScript = entry.command[1];
    const numkeys = parseInt(entry.command[2] || "0", 10) || 0;
    const keys = entry.command.slice(3, 3 + numkeys);
    const argv = entry.command.slice(3 + numkeys);

    luaSectionHtml = `
      <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: var(--radius-md); padding: 1rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="file-code" style="width: 16px; height: 16px; color: #38bdf8;"></i>
            <strong style="font-size: 0.85rem; color: #38bdf8;">Lua Script Inspector</strong>
            <span style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">(${new Blob([luaScript]).size} bytes, ${luaScript.split('\n').length} lines)</span>
          </div>
          <button type="button" class="btn btn-secondary btn-sm btn-copy-detail-action" data-copy="${escapeHtml(luaScript)}" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
            <i data-lucide="copy" style="width: 12px; height: 12px;"></i>
            Copy Lua Script
          </button>
        </div>
        <pre class="slowlog-lua-box"><code>${escapeHtml(luaScript)}</code></pre>
        ${(keys.length > 0 || argv.length > 0) ? `
          <div style="display: flex; gap: 1rem; margin-top: 0.75rem; flex-wrap: wrap;">
            ${keys.length > 0 ? `
              <div style="flex: 1; min-width: 200px;">
                <span style="font-size: 0.72rem; font-weight: 600; color: #4ade80; display: block; margin-bottom: 0.25rem;">KEYS (${keys.length}):</span>
                <div style="display: flex; gap: 0.3rem; flex-wrap: wrap;">
                  ${keys.map((k, idx) => `<span class="slowlog-vital-chip" style="color: #4ade80; border-color: rgba(74, 222, 128, 0.3);">KEYS[${idx + 1}] = ${escapeHtml(k)}</span>`).join("")}
                </div>
              </div>
            ` : ''}
            ${argv.length > 0 ? `
              <div style="flex: 1; min-width: 200px;">
                <span style="font-size: 0.72rem; font-weight: 600; color: #94a3b8; display: block; margin-bottom: 0.25rem;">ARGV (${argv.length}):</span>
                <div style="display: flex; gap: 0.3rem; flex-wrap: wrap;">
                  ${argv.map((a, idx) => `<span class="slowlog-vital-chip" style="color: #cbd5e1; border-color: rgba(148, 163, 184, 0.3);">ARGV[${idx + 1}] = ${escapeHtml(a)}</span>`).join("")}
                </div>
              </div>
            ` : ''}
          </div>
        ` : ''}
      </div>
    `;
  } else if (cmdUpper === "EVALSHA" && entry.command.length >= 2) {
    const sha = entry.command[1];
    const numkeys = parseInt(entry.command[2] || "0", 10) || 0;
    const keys = entry.command.slice(3, 3 + numkeys);
    const argv = entry.command.slice(3 + numkeys);

    luaSectionHtml = `
      <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(168, 85, 247, 0.25); border-radius: var(--radius-md); padding: 1rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="hash" style="width: 16px; height: 16px; color: #c084fc;"></i>
            <strong style="font-size: 0.85rem; color: #c084fc;">Lua Script SHA1 Reference</strong>
            <code style="font-size: 0.78rem; color: var(--text-primary);">${escapeHtml(sha)}</code>
          </div>
          <button type="button" class="btn btn-secondary btn-sm btn-copy-detail-action" data-copy="${escapeHtml(sha)}" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
            <i data-lucide="copy" style="width: 12px; height: 12px;"></i>
            Copy SHA
          </button>
        </div>
        ${(keys.length > 0 || argv.length > 0) ? `
          <div style="display: flex; gap: 1rem; margin-top: 0.5rem; flex-wrap: wrap;">
            ${keys.length > 0 ? `
              <div>
                <span style="font-size: 0.72rem; font-weight: 600; color: #4ade80; display: block; margin-bottom: 0.25rem;">KEYS (${keys.length}):</span>
                <div style="display: flex; gap: 0.3rem; flex-wrap: wrap;">
                  ${keys.map((k, idx) => `<span class="slowlog-vital-chip" style="color: #4ade80;">KEYS[${idx + 1}] = ${escapeHtml(k)}</span>`).join("")}
                </div>
              </div>
            ` : ''}
            ${argv.length > 0 ? `
              <div>
                <span style="font-size: 0.72rem; font-weight: 600; color: #94a3b8; display: block; margin-bottom: 0.25rem;">ARGV (${argv.length}):</span>
                <div style="display: flex; gap: 0.3rem; flex-wrap: wrap;">
                  ${argv.map((a, idx) => `<span class="slowlog-vital-chip">ARGV[${idx + 1}] = ${escapeHtml(a)}</span>`).join("")}
                </div>
              </div>
            ` : ''}
          </div>
        ` : ''}
      </div>
    `;
  }

  bodyEl.innerHTML = `
    <!-- Vitals Strip -->
    <div class="slowlog-vitals-strip">
      <div class="slowlog-vital-chip">
        <i data-lucide="clock" style="width: 13px; height: 13px; color: #38bdf8;"></i>
        <span>Duration: <strong>${entry.duration_ms} ms</strong> (${entry.duration_us.toLocaleString()} µs)</span>
      </div>
      <div class="slowlog-vital-chip">
        <i data-lucide="server" style="width: 13px; height: 13px; color: #a78bfa;"></i>
        <span>Node: <strong>${escapeHtml(entry.node || "Default")}</strong></span>
      </div>
      <div class="slowlog-vital-chip">
        <i data-lucide="user" style="width: 13px; height: 13px; color: #4ade80;"></i>
        <span>Caller: <strong>${escapeHtml(entry.client_ip || "Unknown")}</strong> ${entry.client_name ? '(' + escapeHtml(entry.client_name) + ')' : ''}</span>
      </div>
      <div class="slowlog-vital-chip">
        <i data-lucide="list" style="width: 13px; height: 13px; color: #f59e0b;"></i>
        <span>Arguments: <strong>${entry.command?.length || 0}</strong></span>
      </div>
    </div>

    <!-- Redis Server Truncation Banner -->
    ${hasRedisTruncation ? `
      <div class="slowlog-truncation-banner">
        <i data-lucide="info" style="color: #fbbf24; width: 18px; height: 18px; flex-shrink: 0; margin-top: 2px;"></i>
        <div>
          <strong style="color: #fbbf24; font-size: 0.82rem;">Redis Server-Side Truncation Notice</strong>
          <p style="margin: 0.2rem 0 0; font-size: 0.76rem; color: var(--text-secondary); line-height: 1.45;">
            One or more arguments were truncated by Redis to 128 bytes in the internal SLOWLOG ring buffer (<code>#define SLOWLOG_ENTRY_MAX_STRING 128</code>).
            Redis enforces this compile-time limit inside its C engine to prevent slowlog entries from exhausting server RAM. Bytes beyond 128 were not stored by Redis at execution time and cannot be recovered from the engine.
          </p>
        </div>
      </div>
    ` : ''}

    ${luaSectionHtml}

    <!-- Raw Full Command -->
    <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
        <span style="font-size: 0.78rem; font-weight: 600; color: var(--text-secondary);">Full Command String</span>
        <button type="button" class="btn btn-secondary btn-sm btn-copy-detail-action" data-copy="${escapeHtml(rawCmdStr)}" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 12px; height: 12px;"></i>
          Copy Full Command
        </button>
      </div>
      <pre style="background: #090d16; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 4px; padding: 0.75rem 1rem; font-family: var(--font-mono); font-size: 0.78rem; line-height: 1.5; color: #f1f5f9; white-space: pre-wrap; word-break: break-all; max-height: 160px; overflow-y: auto; margin: 0;"><code>${escapeHtml(rawCmdStr)}</code></pre>
    </div>

    <!-- Argument Breakdown Table -->
    <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden;">
      <div style="padding: 0.75rem 1rem; background: rgba(0, 0, 0, 0.2); border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.78rem; font-weight: 600; color: var(--text-secondary);">Command Arguments Breakdown (${entry.command?.length || 0})</span>
      </div>
      <div style="max-height: 260px; overflow-y: auto;">
        <table class="slowlog-args-table">
          <thead>
            <tr>
              <th style="width: 45px;">#</th>
              <th style="width: 110px;">Role</th>
              <th style="width: 100px;">Length</th>
              <th>Argument Value</th>
              <th style="width: 50px; text-align: center;">Copy</th>
            </tr>
          </thead>
          <tbody>
            ${(entry.command || []).map((arg, idx) => {
              let roleBadge = `<span class="badge-tag" style="color: var(--text-muted); font-size: 0.7rem;">ARG ${idx}</span>`;
              if (idx === 0) roleBadge = `<span class="badge-tag" style="background: rgba(56,189,248,0.2); color: #38bdf8; font-size: 0.7rem;">COMMAND</span>`;
              else if (cmdUpper === "EVAL" && idx === 1) roleBadge = `<span class="badge-tag" style="background: rgba(168,85,247,0.2); color: #c084fc; font-size: 0.7rem;">LUA SCRIPT</span>`;
              else if (cmdUpper === "EVAL" && idx === 2) roleBadge = `<span class="badge-tag" style="background: rgba(245,158,11,0.2); color: #fbbf24; font-size: 0.7rem;">NUMKEYS</span>`;
              else if (cmdUpper === "EVAL" && idx >= 3 && idx < 3 + (parseInt(entry.command[2] || "0", 10) || 0)) {
                roleBadge = `<span class="badge-tag" style="background: rgba(74,222,128,0.2); color: #4ade80; font-size: 0.7rem;">KEYS[${idx - 2}]</span>`;
              } else if (cmdUpper === "EVAL" && idx >= 3 + (parseInt(entry.command[2] || "0", 10) || 0)) {
                const numk = parseInt(entry.command[2] || "0", 10) || 0;
                roleBadge = `<span class="badge-tag" style="background: rgba(148,163,184,0.2); color: #94a3b8; font-size: 0.7rem;">ARGV[${idx - 2 - numk}]</span>`;
              }

              const byteLen = new Blob([String(arg)]).size;
              return `
                <tr>
                  <td style="font-family: var(--font-mono); color: var(--text-muted);">${idx}</td>
                  <td>${roleBadge}</td>
                  <td style="font-family: var(--font-mono); color: var(--text-muted); font-size: 0.72rem;">${byteLen} B</td>
                  <td style="font-family: var(--font-mono); font-size: 0.78rem; word-break: break-all; white-space: pre-wrap; color: #e2e8f0;">
                    ${escapeHtml(String(arg))}
                  </td>
                  <td style="text-align: center;">
                    <button type="button" class="btn-copy-inline btn-copy-detail-action" data-copy="${escapeHtml(String(arg))}" title="Copy Argument">
                      <i data-lucide="copy" style="width: 12px; height: 12px;"></i>
                    </button>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;

  modal.classList.add("active");
  setupIcons();

  // Attach copy listeners in detail modal
  bodyEl.querySelectorAll(".btn-copy-detail-action").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const txt = btn.getAttribute("data-copy");
      if (txt) {
        const ok = await copyToClipboard(txt);
        if (ok) {
          triggerButtonFeedback(btn, "Copied!");
        }
      }
    });
  });
}

export function closeSlowlogDetailModal() {
  const modal = document.getElementById("slowlogDetailModal");
  if (modal) modal.classList.remove("active");
}

// ==========================================
// Slowlog Export Feature (JSON & CSV)
// ==========================================
export function openSlowlogExportModal() {
  const modal = document.getElementById("exportSlowlogModal");
  if (!modal) return;

  const twEl = document.getElementById("exportSlowlogTimeWindowDisplay");
  const latEl = document.getElementById("exportSlowlogMinLatencyDisplay");
  const fltCnt = document.getElementById("exportSlowlogFilteredCount");
  const totCnt = document.getElementById("exportSlowlogTotalCount");
  const scopeFlt = document.getElementById("exportSlowlogScopeFilteredText");
  const scopeTot = document.getElementById("exportSlowlogScopeAllText");

  const twText = state.currentSlowlogTimeWindow && state.currentSlowlogTimeWindow !== "all" 
    ? `Last ${state.currentSlowlogTimeWindow}` 
    : "All Time";
  const latText = state.currentSlowlogMinDuration > 0 
    ? `> ${state.currentSlowlogMinDuration} ms` 
    : "All (> 0ms)";

  const filtered = state.currentlyFilteredSlowlogEntries || state.allSlowlogEntries || [];
  const total = state.allSlowlogEntries || [];

  if (twEl) twEl.textContent = twText;
  if (latEl) latEl.textContent = latText;
  if (fltCnt) fltCnt.textContent = `${filtered.length} entries`;
  if (totCnt) totCnt.textContent = `${total.length} entries`;
  if (scopeFlt) scopeFlt.textContent = `${filtered.length}`;
  if (scopeTot) scopeTot.textContent = `${total.length}`;

  modal.classList.add("active");
  setupIcons();
}

export function closeSlowlogExportModal() {
  const modal = document.getElementById("exportSlowlogModal");
  if (modal) modal.classList.remove("active");
}

export function executeSlowlogExport() {
  const format = document.querySelector('input[name="exportSlowlogFormatRadio"]:checked')?.value || "json";
  const scope = document.querySelector('input[name="exportSlowlogScopeRadio"]:checked')?.value || "filtered";

  const entries = (scope === "all") 
    ? (state.allSlowlogEntries || []) 
    : (state.currentlyFilteredSlowlogEntries || state.allSlowlogEntries || []);

  if (entries.length === 0) {
    showToast("No slowlog entries to export for selected scope", "warning");
    return;
  }

  const targetConn = state.cachedConnections.find(c => String(c.id) === String(state.selectedConnectionId) || c.is_selected);
  const connName = (targetConn ? targetConn.name : "redis").replace(/[^a-zA-Z0-9_-]/g, "_");
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

  if (format === "json") {
    const payload = entries.map(e => ({
      id: e.id,
      timestamp: e.timestamp,
      time_str: e.time_str,
      relative_time: formatRelativeTime(e.timestamp),
      duration_ms: e.duration_ms,
      duration_us: e.duration_us,
      node: e.node || "Default",
      client_ip: e.client_ip || null,
      client_name: e.client_name || null,
      command_args: e.command || [],
      command_string: (e.command || []).join(" ")
    }));
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    saveBlobAsFile(blob, `slowlog_${connName}_${scope}_${timestamp}.json`);
  } else {
    const escapeCsv = (val) => {
      if (val === null || val === undefined) return '""';
      const str = String(val).replace(/"/g, '""');
      return `"${str}"`;
    };
    const headers = ["ID", "Timestamp", "Time", "Relative_Time", "Duration_MS", "Duration_US", "Target_Node", "Client_IP", "Client_Name", "Command"];
    const rows = entries.map(e => [
      e.id,
      e.timestamp,
      escapeCsv(e.time_str),
      escapeCsv(formatRelativeTime(e.timestamp)),
      e.duration_ms,
      e.duration_us,
      escapeCsv(e.node || "Default"),
      escapeCsv(e.client_ip || ""),
      escapeCsv(e.client_name || ""),
      escapeCsv((e.command || []).join(" "))
    ].join(","));
    const csvContent = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveBlobAsFile(blob, `slowlog_${connName}_${scope}_${timestamp}.csv`);
  }

  closeSlowlogExportModal();
  showToast(`Exported ${entries.length} slowlog entries (${format.toUpperCase()})`, "success");
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

  // Export buttons
  const btnExportSlowlog = document.getElementById("btnExportSlowlogModal");
  if (btnExportSlowlog) btnExportSlowlog.addEventListener("click", openSlowlogExportModal);

  const btnCloseExportSlowlog = document.getElementById("btnCloseExportSlowlogModal");
  if (btnCloseExportSlowlog) btnCloseExportSlowlog.addEventListener("click", closeSlowlogExportModal);

  const btnCancelExportSlowlog = document.getElementById("btnCancelExportSlowlogModal");
  if (btnCancelExportSlowlog) btnCancelExportSlowlog.addEventListener("click", closeSlowlogExportModal);

  const btnExecuteExportSlowlog = document.getElementById("btnExecuteExportSlowlog");
  if (btnExecuteExportSlowlog) btnExecuteExportSlowlog.addEventListener("click", executeSlowlogExport);

  // Detail Modal buttons
  const btnCloseSlowlogDetail = document.getElementById("btnCloseSlowlogDetailModal");
  if (btnCloseSlowlogDetail) btnCloseSlowlogDetail.addEventListener("click", closeSlowlogDetailModal);

  const btnDismissSlowlogDetail = document.getElementById("btnDismissSlowlogDetailModal");
  if (btnDismissSlowlogDetail) btnDismissSlowlogDetail.addEventListener("click", closeSlowlogDetailModal);

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

  document.querySelectorAll(".slowlog-time-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".slowlog-time-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.currentSlowlogTimeWindow = btn.getAttribute("data-time-window") || "all";
      filterAndRenderSlowlog();
    });
  });
}
