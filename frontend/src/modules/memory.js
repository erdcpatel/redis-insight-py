import { state, escapeHtml } from "./state.js";
import { setupIcons } from "./icons.js";
import { switchWorkspaceTab } from "./tabs.js";

// Callbacks set during registration
let onInspectKey = null;
let onDeleteKey = null;
let onRefreshStatus = null;

export function registerMemoryKeyHandlers(inspectFn, deleteFn, refreshStatusFn) {
  onInspectKey = inspectFn;
  onDeleteKey = deleteFn;
  onRefreshStatus = refreshStatusFn;
}

export async function openMemoryModal() {
  switchWorkspaceTab("memory");
  await loadMemoryOverview();

  if (!state.currentMemoryAnalysis) {
    renderMemoryProfilingSafeguardUI();
  } else {
    renderMemoryAnalysisUI(state.currentMemoryAnalysis);
  }
}

export function closeMemoryModal() {
  switchWorkspaceTab("keys");
}

export async function loadMemoryOverview() {
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
    state.currentMemoryOverview = await res.json();
    renderMemoryOverviewUI(state.currentMemoryOverview);
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

export function renderMemoryProfilingSafeguardUI() {
  const container = document.getElementById("memoryProfilingContainer");
  if (!container) return;

  container.innerHTML = `
    <!-- Educational Explainer -->
    <div class="mem-info-banner">
      <i data-lucide="info" style="width: 20px; height: 20px; color: #38bdf8; flex-shrink: 0; margin-top: 2px;"></i>
      <div>
        <strong style="color: var(--text-primary); font-size: 0.85rem; display: block; margin-bottom: 3px;">What is BigKeys and how does it work?</strong>
        <p style="margin: 0; font-size: 0.78rem; line-height: 1.5; color: var(--text-secondary);">
          In Redis, <strong>BigKeys</strong> are keys that consume excessive RAM (measured in bytes via <code>MEMORY USAGE</code>) or contain very high element counts (e.g., a hash with 50,000 fields, list with 100,000 items).
          Because Redis is single-threaded, operating on or evicting BigKeys causes latency spikes, blocks other client requests, and creates hot shards in clusters.
          This profiler safely samples your keyspace to identify memory hogs so you can partition or add TTLs to them.
        </p>
      </div>
    </div>

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

export async function triggerMemoryAnalysis(sampleSize = 500, pattern = "*") {
  const container = document.getElementById("memoryProfilingContainer");
  if (!container) return;

  state.isMemoryProfilingRunning = true;
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
    state.currentMemoryAnalysis = await res.json();
    state.isMemoryProfilingRunning = false;
    renderMemoryAnalysisUI(state.currentMemoryAnalysis);
  } catch (err) {
    state.isMemoryProfilingRunning = false;
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

export function renderMemoryAnalysisUI(data) {
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
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const k = btn.getAttribute("data-key");
      if (k) {
        navigator.clipboard.writeText(k).then(() => {
          btn.classList.add("copied");
          btn.innerHTML = `<i data-lucide="check" style="width: 11px; height: 11px;"></i>`;
          setupIcons();
          setTimeout(() => {
            btn.classList.remove("copied");
            btn.innerHTML = `<i data-lucide="copy" style="width: 11px; height: 11px;"></i>`;
            setupIcons();
          }, 1500);
        });
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
}

export function setupMemoryEventListeners() {
  const btnCloseMemory = document.getElementById("btnCloseMemoryModal");
  if (btnCloseMemory) btnCloseMemory.addEventListener("click", closeMemoryModal);

  const btnOpenMemory = document.getElementById("btnOpenMemoryModal");
  if (btnOpenMemory) btnOpenMemory.addEventListener("click", openMemoryModal);

  const btnRefreshMemory = document.getElementById("btnRefreshMemoryModal");
  if (btnRefreshMemory) btnRefreshMemory.addEventListener("click", loadMemoryOverview);
}
