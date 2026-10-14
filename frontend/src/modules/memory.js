import { state, escapeHtml } from "./state.js";
import { setupIcons } from "./icons.js";
import { switchWorkspaceTab } from "./tabs.js";
import { resetAndScan } from "./keys.js";
import { copyToClipboard } from "./toast.js";

// Callbacks set during registration
let onInspectKey = null;
let onDeleteKey = null;
let onRefreshStatus = null;

// AbortController for in-flight memory profiling requests
let activeMemoryAnalysisAbortController = null;

export function registerMemoryKeyHandlers(inspectFn, deleteFn, refreshStatusFn) {
  onInspectKey = inspectFn;
  onDeleteKey = deleteFn;
  onRefreshStatus = refreshStatusFn;
}

export function resetMemoryState(conn) {
  if (activeMemoryAnalysisAbortController) {
    try {
      activeMemoryAnalysisAbortController.abort();
    } catch (_) {}
    activeMemoryAnalysisAbortController = null;
  }
  state.isMemoryProfilingRunning = false;
  state.currentMemoryOverview = null;
  state.currentMemoryAnalysis = null;
  state.memoryLoadedForConnId = null;

  renderMemoryOverviewClusterPrompt(conn);
  renderMemoryProfilingSafeguardUI({
    notice: "Cluster switched. Diagnostic caches cleared. Click below to profile the active cluster."
  });
}

export function renderMemoryOverviewClusterPrompt(conn) {
  const container = document.getElementById("memoryOverviewContainer");
  if (!container) return;

  const targetConn = conn || state.cachedConnections.find(c => String(c.id) === String(state.selectedConnectionId) || c.is_selected) || null;
  const connName = targetConn ? targetConn.name : (state.lastStatus?.connection_name || "Active Cluster");
  const connHost = targetConn ? targetConn.host : (state.lastStatus?.host || "127.0.0.1");
  const connPort = targetConn ? targetConn.port : (state.lastStatus?.port || 6379);
  const env = targetConn ? (targetConn.env || "LOCAL").toUpperCase() : (state.lastStatus?.env || "LOCAL").toUpperCase();

  container.innerHTML = `
    <div class="mem-cluster-prompt-card" style="padding: 1.5rem; text-align: center; background: rgba(15,23,42,0.6); border: 1px dashed var(--border-subtle); border-radius: 8px;">
      <div style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem; flex-wrap: wrap; justify-content: center;">
        <i data-lucide="server" style="width: 16px; height: 16px; color: #a78bfa;"></i>
        <strong style="color: var(--text-primary); font-size: 0.95rem;">${escapeHtml(connName)}</strong>
        <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">(${escapeHtml(connHost)}:${connPort})</span>
        <span class="badge-env badge-env-${env.toLowerCase()}">${env}</span>
      </div>
      <p style="margin: 0.25rem 0 1rem; font-size: 0.8rem; color: var(--text-muted); max-width: 460px; margin-left: auto; margin-right: auto;">
        Cluster metrics ready. Click below to query live used memory, fragmentation ratio, and cache hit metrics.
      </p>
      <button type="button" class="btn btn-primary" id="btnLoadMemoryOverviewExplicit" style="padding: 0.45rem 1.15rem; font-size: 0.82rem;">
        <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i>
        <span>Load Memory Overview</span>
      </button>
    </div>
  `;
  setupIcons();

  const btnLoad = document.getElementById("btnLoadMemoryOverviewExplicit");
  if (btnLoad) {
    btnLoad.addEventListener("click", () => {
      loadMemoryOverview();
    });
  }
}

export async function openMemoryModal() {
  switchWorkspaceTab("memory");

  if (state.memoryLoadedForConnId !== state.selectedConnectionId) {
    renderMemoryOverviewClusterPrompt();
  } else if (state.currentMemoryOverview) {
    renderMemoryOverviewUI(state.currentMemoryOverview);
  } else {
    renderMemoryOverviewClusterPrompt();
  }

  if (state.currentMemoryAnalysis && state.currentMemoryAnalysis._target_conn_id === state.selectedConnectionId) {
    renderMemoryAnalysisUI(state.currentMemoryAnalysis);
  } else {
    renderMemoryProfilingSafeguardUI();
  }
}

export function closeMemoryModal() {
  switchWorkspaceTab("keys");
}

export async function loadMemoryOverview() {
  const container = document.getElementById("memoryOverviewContainer");
  if (!container) return;

  const targetConnId = state.selectedConnectionId;
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
    const data = await res.json();
    
    // Ignore out-of-order response if cluster switched in the meantime
    if (state.selectedConnectionId !== targetConnId) {
      return;
    }

    state.currentMemoryOverview = data;
    state.memoryLoadedForConnId = targetConnId;
    renderMemoryOverviewUI(state.currentMemoryOverview);
  } catch (err) {
    if (state.selectedConnectionId !== targetConnId) return;
    container.innerHTML = `
      <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
        <i data-lucide="alert-circle" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i>
        <p style="font-size: 0.85rem;">Error loading memory overview: ${escapeHtml(err.message)}</p>
        <button type="button" class="btn btn-secondary btn-sm" id="btnRetryMemOverview" style="margin-top: 0.5rem;">Retry</button>
      </div>
    `;
    setupIcons();
    const btnRetry = document.getElementById("btnRetryMemOverview");
    if (btnRetry) btnRetry.onclick = () => loadMemoryOverview();
  }
}

export function renderMemoryOverviewUI(data) {
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

export function renderMemoryProfilingSafeguardUI(options = {}) {
  const container = document.getElementById("memoryProfilingContainer");
  if (!container) return;

  const targetConn = state.cachedConnections.find(c => String(c.id) === String(state.selectedConnectionId) || c.is_selected) || null;
  const connName = targetConn ? targetConn.name : (state.lastStatus?.connection_name || "Active Cluster");
  const connHost = targetConn ? targetConn.host : (state.lastStatus?.host || "127.0.0.1");
  const connPort = targetConn ? targetConn.port : (state.lastStatus?.port || 6379);
  const env = targetConn ? (targetConn.env || "LOCAL").toUpperCase() : (state.lastStatus?.env || "LOCAL").toUpperCase();
  const notice = options?.notice;

  container.innerHTML = `
    ${notice ? `
      <div style="background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: var(--radius-md); padding: 0.65rem 1rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: #38bdf8;">
        <i data-lucide="info" style="width: 15px; height: 15px; flex-shrink: 0;"></i>
        <span>${escapeHtml(notice)}</span>
      </div>
    ` : ''}

    <!-- Educational Explainer -->
    <div class="mem-info-banner">
      <i data-lucide="info" style="width: 20px; height: 20px; color: #38bdf8; flex-shrink: 0; margin-top: 2px;"></i>
      <div>
        <strong style="color: var(--text-primary); font-size: 0.85rem; display: block; margin-bottom: 3px;">What is Memory & BigKeys Profiling?</strong>
        <p style="margin: 0; font-size: 0.78rem; line-height: 1.5; color: var(--text-secondary);">
          In Redis, <strong>BigKeys</strong> consume excessive RAM or contain very high element counts. In addition, keys missing TTLs lead to silent persistent memory leaks.
          This profiler runs non-blocking <code>SCAN</code> across your instance or cluster to identify top memory hogs, project <strong>TTL Space Reclaims</strong>, and audit persistent key leaks.
        </p>
      </div>
    </div>

    <div class="mem-safeguard-box">
      <div class="mem-safeguard-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="shield-check" style="width: 22px; height: 22px; color: #38bdf8;"></i>
          <span>Non-Blocking Keyspace Profiling & TTL Forecast</span>
        </div>
        <div style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.75rem; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); padding: 0.2rem 0.6rem; border-radius: 4px;">
          <span style="color: var(--text-muted);">Target:</span>
          <strong style="color: var(--accent-primary);">${escapeHtml(connName)}</strong>
          <span style="color: var(--text-muted); font-family: var(--font-mono);">(${escapeHtml(connHost)}:${connPort})</span>
          <span class="badge-env badge-env-${env.toLowerCase()}">${env}</span>
        </div>
      </div>
      <div class="mem-safeguard-body">
        Profiling samples keys using cursor-based <code>SCAN</code>, reads byte footprints with <code>MEMORY USAGE</code>, and projects when RAM will be freed based on expiration horizons.
        Redis is never blocked — all commands execute with bounded concurrency.
      </div>
      <div class="mem-safeguard-controls">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-primary);">Scan Mode:</span>
          <select id="memScanModeSelect" class="form-select" style="padding: 0.35rem 0.65rem; font-size: 0.8rem; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
            <option value="sample" selected>Standard Sample (Fast)</option>
            <option value="full">Deep Cluster Scan (Full Keyspace)</option>
          </select>
        </div>

        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-primary);">Sample Limit:</span>
          <select id="memSampleSizeSelect" class="form-select" style="padding: 0.35rem 0.65rem; font-size: 0.8rem; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;">
            <option value="100">100 keys (Fastest)</option>
            <option value="250">250 keys (Balanced)</option>
            <option value="500" selected>500 keys (Recommended)</option>
            <option value="1000">1,000 keys (Thorough)</option>
            <option value="5000">5,000 keys (Deep Scan)</option>
            <option value="25000">25,000 keys (Max Cluster Scan)</option>
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
      const scanMode = document.getElementById("memScanModeSelect")?.value || "sample";
      const sampleSize = parseInt(document.getElementById("memSampleSizeSelect").value, 10) || 500;
      const pattern = document.getElementById("memSamplePatternInput").value || "*";

      if (scanMode === "full") {
        const modal = document.getElementById("deepScanSafetyModal");
        if (modal) {
          modal.classList.add("active");
          setupIcons();

          const closeModal = () => modal.classList.remove("active");
          const btnCancel = document.getElementById("btnCancelDeepScan");
          const btnClose = document.getElementById("btnCloseDeepScanModal");
          const btnConfirm = document.getElementById("btnConfirmDeepScan");

          if (btnCancel) btnCancel.onclick = closeModal;
          if (btnClose) btnClose.onclick = closeModal;
          if (btnConfirm) {
            btnConfirm.onclick = () => {
              closeModal();
              triggerMemoryAnalysis(sampleSize, pattern, "full");
            };
          }
          return;
        }
      }
      triggerMemoryAnalysis(sampleSize, pattern, scanMode);
    });
  }
}

export async function triggerMemoryAnalysis(sampleSize = 500, pattern = "*", scanMode = "sample") {
  const container = document.getElementById("memoryProfilingContainer");
  if (!container) return;

  if (activeMemoryAnalysisAbortController) {
    try {
      activeMemoryAnalysisAbortController.abort();
    } catch (_) {}
  }
  activeMemoryAnalysisAbortController = new AbortController();
  const currentSignal = activeMemoryAnalysisAbortController.signal;
  const targetConnId = state.selectedConnectionId;

  state.isMemoryProfilingRunning = true;
  const isDeep = scanMode === "full";
  container.innerHTML = `
    <div style="padding: 3.5rem 1.5rem; text-align: center;">
      <i data-lucide="refresh-cw" class="spin" style="width: 36px; height: 36px; color: ${isDeep ? '#f59e0b' : '#a78bfa'}; margin-bottom: 1rem;"></i>
      <h3 style="color: var(--text-primary); font-size: 1.1rem; margin-bottom: 0.4rem;">
        ${isDeep ? 'Running Deep Non-Blocking Cluster Scan...' : 'Analyzing Redis Keyspace...'}
      </h3>
      <p style="color: var(--text-secondary); font-size: 0.85rem; max-width: 520px; margin: 0 auto 1.25rem; line-height: 1.5;">
        ${isDeep ? 'Scanning across cluster primary nodes using non-blocking cursors with bounded concurrency pool and calculating TTL space reclaim forecast...' : `Scanning sample of up to <strong>${sampleSize.toLocaleString()}</strong> keys (pattern <code>${escapeHtml(pattern)}</code>) and measuring memory allocations...`}
      </p>
      <button type="button" class="btn btn-secondary" id="btnCancelMemoryProfiling" style="padding: 0.4rem 1rem; font-size: 0.8rem; border-color: rgba(239, 68, 68, 0.4); color: #f87171;">
        <i data-lucide="x-circle" style="width: 14px; height: 14px;"></i>
        Cancel Scan
      </button>
    </div>
  `;
  setupIcons();

  const btnCancel = document.getElementById("btnCancelMemoryProfiling");
  if (btnCancel) {
    btnCancel.onclick = () => {
      if (activeMemoryAnalysisAbortController) {
        try {
          activeMemoryAnalysisAbortController.abort();
        } catch (_) {}
      }
    };
  }

  try {
    const res = await fetch("/api/memory/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sample_size: sampleSize, pattern: pattern, scan_mode: scanMode }),
      signal: currentSignal
    });
    if (!res.ok) throw new Error("Failed to complete memory profiling");
    const data = await res.json();

    // Discard response if connection was changed during profiling
    if (state.selectedConnectionId !== targetConnId) {
      console.warn("Discarding memory profiling response for switched cluster:", targetConnId);
      return;
    }

    data._target_conn_id = targetConnId;
    data._analyzed_at = new Date().toISOString();
    state.currentMemoryAnalysis = data;
    state.isMemoryProfilingRunning = false;
    renderMemoryAnalysisUI(state.currentMemoryAnalysis);
  } catch (err) {
    state.isMemoryProfilingRunning = false;
    if (err.name === "AbortError") {
      renderMemoryProfilingSafeguardUI({ notice: "Memory scan was cancelled." });
      return;
    }
    if (state.selectedConnectionId === targetConnId) {
      container.innerHTML = `
        <div style="padding: 2.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
          <h4>Memory Profiling Failed</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${escapeHtml(err.message)}</p>
          <button type="button" class="btn btn-secondary" id="btnRetryProfiling" style="margin-top: 1rem;">Back to Profiling Safeguards</button>
        </div>
      `;
      setupIcons();
      const btnRetry = document.getElementById("btnRetryProfiling");
      if (btnRetry) btnRetry.onclick = () => renderMemoryProfilingSafeguardUI();
    }
  } finally {
    if (activeMemoryAnalysisAbortController && activeMemoryAnalysisAbortController.signal === currentSignal) {
      activeMemoryAnalysisAbortController = null;
    }
  }
}

export function renderMemoryAnalysisUI(data) {
  const container = document.getElementById("memoryProfilingContainer");
  if (!container || !data) return;

  const targetConn = state.cachedConnections.find(c => String(c.id) === String(data._target_conn_id || state.selectedConnectionId) || c.is_selected) || null;
  const connName = targetConn ? targetConn.name : (state.lastStatus?.connection_name || "Active Cluster");
  const connHost = targetConn ? targetConn.host : (state.lastStatus?.host || "127.0.0.1");
  const connPort = targetConn ? targetConn.port : (state.lastStatus?.port || 6379);
  const env = targetConn ? (targetConn.env || "LOCAL").toUpperCase() : (state.lastStatus?.env || "LOCAL").toUpperCase();
  const timeStr = data._analyzed_at ? new Date(data._analyzed_at).toLocaleTimeString() : new Date().toLocaleTimeString();

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
    <!-- Cluster Target Banner -->
    <div class="mem-target-cluster-banner" style="display: flex; align-items: center; justify-content: space-between; background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: var(--radius-md); padding: 0.6rem 1rem; margin-bottom: 0.85rem; font-size: 0.8rem; flex-wrap: wrap; gap: 0.5rem;">
      <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
        <span style="display: inline-flex; align-items: center; gap: 0.35rem; color: #38bdf8; font-weight: 600;">
          <i data-lucide="server" style="width: 14px; height: 14px;"></i>
          ${escapeHtml(connName)}
        </span>
        <span style="color: var(--text-muted); font-family: var(--font-mono); font-size: 0.75rem;">(${escapeHtml(connHost)}:${connPort})</span>
        <span class="badge-env badge-env-${env.toLowerCase()}">${env}</span>
        <span style="color: var(--border-subtle);">|</span>
        <span style="color: var(--text-secondary); font-size: 0.75rem;">Analyzed at ${escapeHtml(timeStr)}</span>
      </div>
      <span class="badge-db" style="font-size: 0.7rem; color: #4ade80; border-color: rgba(74, 222, 128, 0.3);">
        <i data-lucide="shield-check" style="width: 11px; height: 11px; margin-right: 3px;"></i> Verified
      </span>
    </div>
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

    <!-- TTL Space Reclaim Forecast Card -->
    ${data.ttl_forecast ? `
      <div class="mem-ttl-forecast-card">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.75rem;">
          <div>
            <span style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
              <i data-lucide="clock" style="width: 16px; height: 16px; color: #38bdf8;"></i>
              TTL Expiry & Cluster Space Reclaim Forecast
            </span>
            <span style="font-size: 0.73rem; color: var(--text-muted); margin-top: 2px; display: block;">
              Non-blocking projection of automatic memory recovery based on key expiration horizons (${data.ttl_forecast.total_keys_profiled.toLocaleString()} profiled keys, ${data.ttl_forecast.total_memory_profiled_human}).
            </span>
          </div>
          <span class="badge-db" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3);">
            Live Projection
          </span>
        </div>

        <!-- 4 KPI Metrics -->
        <div class="mem-ttl-kpi-grid">
          <!-- Immediate 1h -->
          <div class="mem-ttl-kpi-item" style="border-top: 2px solid #10b981;">
            <div class="kpi-label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #10b981;"></i> &lt; 1 Hour Relief</div>
            <div class="kpi-val" style="color: #10b981;">${data.ttl_forecast.reclaim_1h_human}</div>
            <div class="kpi-sub">${data.ttl_forecast.reclaim_1h_percent}% of memory reclaimed</div>
          </div>
          <!-- 24h -->
          <div class="mem-ttl-kpi-item" style="border-top: 2px solid #06b6d4;">
            <div class="kpi-label"><i data-lucide="calendar" style="width: 12px; height: 12px; color: #06b6d4;"></i> 24-Hour Recovery</div>
            <div class="kpi-val" style="color: #06b6d4;">${data.ttl_forecast.reclaim_24h_human}</div>
            <div class="kpi-sub">${data.ttl_forecast.reclaim_24h_percent}% of memory reclaimed</div>
          </div>
          <!-- 7d -->
          <div class="mem-ttl-kpi-item" style="border-top: 2px solid #3b82f6;">
            <div class="kpi-label"><i data-lucide="trending-down" style="width: 12px; height: 12px; color: #3b82f6;"></i> 7-Day Recovery</div>
            <div class="kpi-val" style="color: #3b82f6;">${data.ttl_forecast.reclaim_7d_human}</div>
            <div class="kpi-sub">${data.ttl_forecast.reclaim_7d_percent}% of memory reclaimed</div>
          </div>
          <!-- Persistent -->
          <div class="mem-ttl-kpi-item" style="border-top: 2px solid ${data.ttl_forecast.persistent_memory_percent > 30 ? '#f43f5e' : '#fbbf24'};">
            <div class="kpi-label"><i data-lucide="alert-octagon" style="width: 12px; height: 12px; color: #f43f5e;"></i> No TTL (Persistent)</div>
            <div class="kpi-val" style="color: ${data.ttl_forecast.persistent_memory_percent > 30 ? '#f43f5e' : '#fbbf24'};">${data.ttl_forecast.persistent_memory_human}</div>
            <div class="kpi-sub">${data.ttl_forecast.persistent_keys_percent}% of keys (${data.ttl_forecast.persistent_keys_count.toLocaleString()})</div>
          </div>
        </div>

        <!-- Stacked Horizon Progress Bar -->
        <div style="margin-top: 1.1rem;">
          <div style="display: flex; justify-content: space-between; font-size: 0.74rem; color: var(--text-muted); margin-bottom: 0.35rem;">
            <span>Expiration Horizon Distribution (by RAM Footprint)</span>
            <span>Total Profiled: ${data.ttl_forecast.total_memory_profiled_human}</span>
          </div>
          <div class="mem-stacked-bar" style="height: 14px; border-radius: 6px;">
            ${(data.ttl_forecast.horizons || []).map(h => {
              const colors = {
                "< 1 Hour": "#10b981",
                "1 - 24 Hours": "#06b6d4",
                "1 - 7 Days": "#3b82f6",
                "> 7 Days": "#8b5cf6",
                "No Expiration (Persistent)": "#f43f5e"
              };
              const col = colors[h.label] || "#94a3b8";
              return `
                <div class="mem-stacked-segment" style="width: ${h.memory_percentage}%; background: ${col};" title="${escapeHtml(h.label)}: ${h.memory_percentage}% (${h.total_memory_human}, ${h.key_count.toLocaleString()} keys)"></div>
              `;
            }).join("")}
          </div>

          <!-- Horizon Pills Legend -->
          <div class="mem-horizon-pills-row">
            ${(data.ttl_forecast.horizons || []).map(h => {
              const colors = {
                "< 1 Hour": "#10b981",
                "1 - 24 Hours": "#06b6d4",
                "1 - 7 Days": "#3b82f6",
                "> 7 Days": "#8b5cf6",
                "No Expiration (Persistent)": "#f43f5e"
              };
              const col = colors[h.label] || "#94a3b8";
              return `
                <div class="mem-horizon-pill" style="border-left: 3px solid ${col};">
                  <div class="pill-title">${escapeHtml(h.label)}</div>
                  <div class="pill-val" style="color: ${col};">${h.total_memory_human}</div>
                  <div class="pill-meta">${h.key_count.toLocaleString()} keys (${h.memory_percentage}%)</div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      </div>
    ` : ''}

    <!-- Persistent Keys (No TTL) Leak Audit Card -->
    ${data.ttl_forecast && data.ttl_forecast.top_leak_namespaces && data.ttl_forecast.top_leak_namespaces.length > 0 ? `
      <div class="mem-leak-audit-card">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <span style="font-size: 0.95rem; font-weight: 700; color: #fca5a5; display: flex; align-items: center; gap: 0.5rem;">
              <i data-lucide="alert-triangle" style="width: 16px; height: 16px; color: #f43f5e;"></i>
              Persistent Keys Leak Audit (Missing Expiration TTL)
            </span>
            <span style="font-size: 0.73rem; color: var(--text-secondary); margin-top: 2px; display: block;">
              Keys in these namespaces have no TTL and accumulate in RAM indefinitely. Filter directly in Keys Browser to inspect or add TTL policies.
            </span>
          </div>
          <span style="font-size: 0.73rem; color: var(--text-muted); font-family: var(--font-mono);">
            ${data.ttl_forecast.top_leak_namespaces.length} leak sources detected
          </span>
        </div>

        <div style="overflow-x: auto;">
          <table class="keys-table" style="width: 100%; font-size: 0.8rem;">
            <thead>
              <tr>
                <th>Offending Namespace / Pattern</th>
                <th style="width: 130px;">Key Count</th>
                <th style="width: 160px;">Unreclaimed RAM</th>
                <th style="width: 120px;">% of Leaks</th>
                <th style="width: 140px; text-align: right;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${data.ttl_forecast.top_leak_namespaces.map(leak => `
                <tr>
                  <td>
                    <code style="font-family: var(--font-mono); font-weight: 600; color: #38bdf8; background: rgba(56,189,248,0.1); padding: 0.15rem 0.4rem; border-radius: 4px;">
                      ${escapeHtml(leak.namespace)}
                    </code>
                  </td>
                  <td style="font-family: var(--font-mono); color: var(--text-primary); font-weight: 600;">
                    ${leak.key_count.toLocaleString()}
                  </td>
                  <td style="font-family: var(--font-mono); color: #f87171; font-weight: 700;">
                    ${leak.total_memory_human}
                  </td>
                  <td>
                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                      <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">${leak.percentage_of_leaks}%</span>
                      <div style="width: 45px; height: 4px; background: rgba(255,255,255,0.06); border-radius: 9999px; overflow: hidden;">
                        <div style="width: ${Math.min(100, leak.percentage_of_leaks)}%; height: 100%; background: #f43f5e; border-radius: 9999px;"></div>
                      </div>
                    </div>
                  </td>
                  <td style="text-align: right;">
                    <button type="button" class="btn btn-secondary btn-inspect-leak" data-namespace="${escapeHtml(leak.namespace)}" title="Filter keys in Keys Browser matching ${escapeHtml(leak.namespace)} with No TTL" style="padding: 0.25rem 0.55rem; font-size: 0.72rem;">
                      <i data-lucide="filter" style="width: 11px; height: 11px; margin-right: 3px;"></i>
                      Filter in Keys
                    </button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    ` : ''}

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


export function renderBigKeysTableHtml(keys) {
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
                <div style="display: flex; align-items: center; gap: 0.35rem;">
                  <a href="javascript:void(0)" class="key-name-link bigkey-inspect-btn" data-key="${escapeHtml(item.key)}" style="font-family: var(--font-mono); font-size: 0.82rem; font-weight: 600; color: #38bdf8; text-decoration: none;" title="Inspect key: ${escapeHtml(item.key)}">
                    ${escapeHtml(item.key)}
                  </a>
                  <button type="button" class="btn-copy-inline btn-copy-bigkey" data-key="${escapeHtml(item.key)}" title="Copy key name">
                    <i data-lucide="copy" style="width: 11px; height: 11px;"></i>
                  </button>
                </div>
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
                  ${state.lastStatus?.read_only ? '' : `
                    <button type="button" class="btn btn-danger bigkey-delete-btn" data-key="${escapeHtml(item.key)}" style="padding: 0.25rem 0.5rem; font-size: 0.72rem;" title="Delete oversized key">
                      <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
                    </button>
                  `}
                </div>
              </td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
  `;
}

export function attachBigKeyRowHandlers() {
  document.querySelectorAll(".bigkey-inspect-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const keyName = btn.getAttribute("data-key");
      if (keyName && onInspectKey) {
        onInspectKey(keyName);
      }
    });
  });

  document.querySelectorAll(".btn-copy-bigkey").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const k = btn.getAttribute("data-key");
      if (k) {
        const ok = await copyToClipboard(k);
        if (ok) {
          btn.classList.add("copied");
          btn.innerHTML = `<i data-lucide="check" style="width: 11px; height: 11px;"></i>`;
          setupIcons();
          setTimeout(() => {
            btn.classList.remove("copied");
            btn.innerHTML = `<i data-lucide="copy" style="width: 11px; height: 11px;"></i>`;
            setupIcons();
          }, 1500);
        }
      }
    });
  });

  document.querySelectorAll(".bigkey-delete-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const keyName = btn.getAttribute("data-key");
      if (keyName && onDeleteKey) {
        onDeleteKey(keyName, async () => {
          if (state.currentMemoryAnalysis) {
            state.currentMemoryAnalysis.top_bigkeys = state.currentMemoryAnalysis.top_bigkeys.filter(k => k.key !== keyName);
            renderMemoryAnalysisUI(state.currentMemoryAnalysis);
          }
          if (onRefreshStatus) await onRefreshStatus();
        });
      }
    });
  });

  document.querySelectorAll(".btn-inspect-leak").forEach(btn => {
    btn.addEventListener("click", () => {
      const ns = btn.getAttribute("data-namespace");
      if (ns) {
        state.currentPattern = ns;
        state.currentTtlFilter = "persistent";
        const keyInput = document.getElementById("keySearchInput");
        if (keyInput) keyInput.value = ns;
        const ttlSelect = document.getElementById("ttlFilterSelect");
        if (ttlSelect) ttlSelect.value = "persistent";
        switchWorkspaceTab("keys");
        resetAndScan();
      }
    });
  });
}

export function setupMemoryEventListeners() {
  const btnCloseMemory = document.getElementById("btnCloseMemoryModal");
  if (btnCloseMemory) btnCloseMemory.addEventListener("click", closeMemoryModal);

  const btnOpenMemory = document.getElementById("btnOpenMemoryModal");
  if (btnOpenMemory) btnOpenMemory.addEventListener("click", openMemoryModal);

  const btnRefreshMemory = document.getElementById("btnRefreshMemoryModal");
  if (btnRefreshMemory) btnRefreshMemory.addEventListener("click", loadMemoryOverview);
}
