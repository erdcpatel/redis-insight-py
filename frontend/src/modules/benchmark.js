import { state, escapeHtml } from "./state.js";
import { setupIcons } from "./icons.js";
import { switchWorkspaceTab } from "./tabs.js";

let currentBenchmarkTab = "probe";
let isBenchmarkRunning = false;

export const LUA_PRESETS = {
  counter: {
    script: `local k = KEYS[1] or 'bench_counter'
local count = redis.call('INCR', k)
if count == 1 then
  redis.call('EXPIRE', k, 60)
end
return count`,
    keys: "bench_counter",
    args: "60"
  },
  hash: {
    script: `local k = KEYS[1] or 'bench_user'
redis.call('HSET', k, 'name', 'benchmark_user', 'role', 'tester', 'ver', ARGV[1] or '1')
return redis.call('HGETALL', k)`,
    keys: "bench_user",
    args: "1"
  },
  lock: {
    script: `local k = KEYS[1] or 'bench_lock'
local token = ARGV[1] or 'token_123'
local acquired = redis.call('SET', k, token, 'NX', 'PX', 10000)
return acquired and 'ACQUIRED' or 'BUSY'`,
    keys: "bench_lock",
    args: "token_123"
  },
  custom: {
    script: `-- Custom Lua Script
local key = KEYS[1] or 'my_key'
return redis.call('PING')`,
    keys: "my_key",
    args: ""
  }
};

export function renderDecompBarHtml(breakdown) {
  if (!breakdown) return "";
  const netMs = Number(breakdown.network_overhead_ms || 0).toFixed(3);
  const srvMs = Number(breakdown.server_exec_ms || 0).toFixed(3);
  return `
    <div class="latency-decomp-card">
      <div class="latency-decomp-header">
        <div class="latency-decomp-title">
          <i data-lucide="layers" style="width: 14px; height: 14px; color: #f59e0b;"></i>
          <span>Latency Decomposition (Network Transit vs Redis Server CPU)</span>
        </div>
        <div class="latency-decomp-legend">
          <div class="latency-legend-item">
            <span class="latency-legend-dot" style="background: #38bdf8;"></span>
            <span>Network Overhead: <strong>${breakdown.network_percentage}%</strong> (${netMs} ms)</span>
          </div>
          <div class="latency-legend-item">
            <span class="latency-legend-dot" style="background: #10b981;"></span>
            <span>Redis Server CPU: <strong>${breakdown.server_percentage}%</strong> (${srvMs} ms)</span>
          </div>
        </div>
      </div>
      <div class="latency-decomp-track">
        <div class="latency-decomp-bar-net" style="width: ${breakdown.network_percentage}%;">
          🌐 Network: ${breakdown.network_percentage}% (${netMs}ms)
        </div>
        <div class="latency-decomp-bar-srv" style="width: ${breakdown.server_percentage}%;">
          ⚡ Server: ${breakdown.server_percentage}% (${srvMs}ms)
        </div>
      </div>
    </div>
  `;
}

export function renderPercentilesHtml(p) {
  if (!p) return "";
  return `
    <div class="percentiles-chip-row">
      <span style="font-size: 0.73rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-right: 0.35rem;">Percentiles:</span>
      <div class="percentile-chip"><span class="k">Min:</span> <span class="v">${p.min_ms.toFixed(2)}ms</span></div>
      <div class="percentile-chip"><span class="k">P50:</span> <span class="v">${p.p50_ms.toFixed(2)}ms</span></div>
      <div class="percentile-chip"><span class="k">P90:</span> <span class="v">${p.p90_ms.toFixed(2)}ms</span></div>
      <div class="percentile-chip"><span class="k">P95:</span> <span class="v">${p.p95_ms.toFixed(2)}ms</span></div>
      <div class="percentile-chip"><span class="k">P99:</span> <span class="v" style="color: #f59e0b;">${p.p99_ms.toFixed(2)}ms</span></div>
      <div class="percentile-chip"><span class="k">Max:</span> <span class="v">${p.max_ms.toFixed(2)}ms</span></div>
      <div class="percentile-chip"><span class="k">Jitter:</span> <span class="v">±${p.jitter_ms.toFixed(2)}ms</span></div>
    </div>
  `;
}

export function renderHistogramHtml(histogram) {
  if (!histogram || !histogram.length) return "";
  return `
    <div class="histogram-card">
      <div style="font-size: 0.78rem; font-weight: 600; color: var(--text-main); display: flex; align-items: center; gap: 0.35rem;">
        <i data-lucide="bar-chart-2" style="width: 14px; height: 14px; color: #f59e0b;"></i>
        <span>Latency Bucket Distribution</span>
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.45rem;">
        ${histogram.map(b => `
          <div class="histogram-row">
            <span class="histogram-label">${escapeHtml(b.label)}</span>
            <div class="histogram-track">
              <div class="histogram-fill" style="width: ${b.percentage}%;"></div>
            </div>
            <div class="histogram-stats">
              <strong>${b.count.toLocaleString()}</strong> (${b.percentage}%)
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

export function refreshBenchmarkUI() {
  const subtitle = document.getElementById("benchmarkTargetSubtitle");
  if (subtitle && state.lastStatus) {
    subtitle.textContent = `Active Target: ${state.lastStatus.host}:${state.lastStatus.port} (${state.lastStatus.env || "LOCAL"}) | Engine: AsyncIO Native | Namespace: __ri_bench__`;
  }

  const roBadge = document.getElementById("benchmarkReadOnlyBadge");
  const optWrite = document.getElementById("optCommandPresetWrite");
  const optStruct = document.getElementById("optCommandPresetStruct");

  if (state.lastStatus?.read_only) {
    if (roBadge) roBadge.style.display = "inline-flex";
    if (optWrite) {
      optWrite.disabled = true;
      optWrite.textContent = "Write / Set (Disabled - Read-Only)";
    }
    if (optStruct) {
      optStruct.disabled = true;
      optStruct.textContent = "Data Structures (Disabled - Read-Only)";
    }
    const selPreset = document.getElementById("selCommandPreset");
    if (selPreset && (selPreset.value === "write" || selPreset.value === "structures")) {
      selPreset.value = "read";
    }
  } else {
    if (roBadge) roBadge.style.display = "none";
    if (optWrite) {
      optWrite.disabled = false;
      optWrite.textContent = "Write / Set (100% SET)";
    }
    if (optStruct) {
      optStruct.disabled = false;
      optStruct.textContent = "Data Structures (HSET / HGET)";
    }
  }

  // Prepopulate Lua script if empty
  const txtScript = document.getElementById("txtLuaScript");
  if (txtScript && !txtScript.value.trim()) {
    txtScript.value = LUA_PRESETS.counter.script;
    const txtKeys = document.getElementById("txtLuaKeys");
    const txtArgs = document.getElementById("txtLuaArgs");
    if (txtKeys) txtKeys.value = LUA_PRESETS.counter.keys;
    if (txtArgs) txtArgs.value = LUA_PRESETS.counter.args;
  }

  switchBenchmarkTab(currentBenchmarkTab || "probe");
}

export function openBenchmarkModal() {
  switchWorkspaceTab("benchmark");
  refreshBenchmarkUI();
}

export function closeBenchmarkModal() {
  switchWorkspaceTab("keys");
}

export function switchBenchmarkTab(tabName) {
  currentBenchmarkTab = tabName;
  document.querySelectorAll(".benchmark-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabName);
  });

  const panes = {
    probe: document.getElementById("benchmarkPaneProbe"),
    commands: document.getElementById("benchmarkPaneCommands"),
    lua: document.getElementById("benchmarkPaneLua"),
    cluster: document.getElementById("benchmarkPaneCluster")
  };

  Object.keys(panes).forEach(k => {
    if (panes[k]) {
      panes[k].style.display = k === tabName ? "flex" : "none";
    }
  });

  setupIcons();
}

export async function runLatencyProbe() {
  if (isBenchmarkRunning) return;
  const btn = document.getElementById("btnRunProbe");
  const resultsContainer = document.getElementById("benchmarkProbeResults");
  const countSelect = document.getElementById("selProbeCount");
  const count = parseInt(countSelect?.value || "100", 10);

  isBenchmarkRunning = true;
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Running Probe (${count})...</span>`;
  }
  if (resultsContainer) {
    resultsContainer.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Executing ${count} baseline probes...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring network round-trip time vs Redis event-loop CPU duration</div>
      </div>
    `;
    setupIcons();
  }

  try {
    const res = await fetch("/api/benchmark/probe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ count })
    });
    if (!res.ok) {
      const errData = await res.json().catch(() => ({ detail: "Probe request failed" }));
      throw new Error(errData.detail || "Probe failed");
    }
    const data = await res.json();
    renderProbeResults(data);
  } catch (err) {
    if (resultsContainer) {
      resultsContainer.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Latency Probe Failed</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${escapeHtml(err.message)}</div>
        </div>
      `;
      setupIcons();
    }
  } finally {
    isBenchmarkRunning = false;
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Run Latency Probe</span>`;
      setupIcons();
    }
  }
}

export function renderProbeResults(data) {
  const container = document.getElementById("benchmarkProbeResults");
  if (!container || !data) return;

  const avgRtt = Number(data.avg_rtt_ms || 0).toFixed(3);
  const srvExec = Number(data.breakdown?.server_exec_ms || 0).toFixed(3);
  const netOverhead = Number(data.breakdown?.network_overhead_ms || 0).toFixed(3);
  const opsSec = Number(data.ops_per_sec || 0).toLocaleString();

  container.innerHTML = `
    <div class="benchmark-metrics-grid">
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="activity" style="width: 12px; height: 12px; color: #38bdf8;"></i> Total Round-Trip (RTT)</div>
        <div class="val">${avgRtt} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Average client observed latency</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="cpu" style="width: 12px; height: 12px; color: #10b981;"></i> Redis Server CPU Time</div>
        <div class="val" style="color: #6ee7b7;">${srvExec} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Isolated server execution delay</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="network" style="width: 12px; height: 12px; color: #38bdf8;"></i> Network Overhead</div>
        <div class="val" style="color: #38bdf8;">${netOverhead} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Transit & TCP stack overhead</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #f59e0b;"></i> Probe Throughput</div>
        <div class="val" style="color: #fbbf24;">${opsSec} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ops/s</span></div>
        <div class="sub">${data.count} probes in ${data.duration_ms}ms</div>
      </div>
    </div>

    ${renderDecompBarHtml(data.breakdown)}
    ${renderPercentilesHtml(data.percentiles)}
    ${renderHistogramHtml(data.histogram)}
  `;
  setupIcons();
}

export async function runCommandBenchmark() {
  if (isBenchmarkRunning) return;
  const btn = document.getElementById("btnRunCommandBench");
  const resultsContainer = document.getElementById("benchmarkCommandResults");
  const preset = document.getElementById("selCommandPreset")?.value || "read";
  const requests = parseInt(document.getElementById("selCommandRequests")?.value || "1000", 10);
  const concurrency = parseInt(document.getElementById("selCommandConcurrency")?.value || "5", 10);
  const pipeline = parseInt(document.getElementById("selCommandPipeline")?.value || "1", 10);

  isBenchmarkRunning = true;
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Benchmarking (${requests})...</span>`;
  }
  if (resultsContainer) {
    resultsContainer.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #f59e0b; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Running synthetic workload (${preset})...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">
          Executing ${requests.toLocaleString()} requests across ${concurrency} workers (pipeline: ${pipeline})
        </div>
      </div>
    `;
    setupIcons();
  }

  try {
    const res = await fetch("/api/benchmark/commands", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ preset, requests, concurrency, pipeline })
    });
    if (!res.ok) {
      const errData = await res.json().catch(() => ({ detail: "Benchmark request failed" }));
      throw new Error(errData.detail || "Benchmark failed");
    }
    const data = await res.json();
    renderCommandResults(data);
  } catch (err) {
    if (resultsContainer) {
      resultsContainer.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Benchmark Execution Blocked</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${escapeHtml(err.message)}</div>
        </div>
      `;
      setupIcons();
    }
  } finally {
    isBenchmarkRunning = false;
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Start Benchmark</span>`;
      setupIcons();
    }
  }
}

export function renderCommandResults(data) {
  const container = document.getElementById("benchmarkCommandResults");
  if (!container || !data) return;

  const opsSec = Number(data.ops_per_sec || 0).toLocaleString();
  const avgLat = Number(data.avg_latency_ms || 0).toFixed(3);
  const p99Lat = Number(data.percentiles?.p99_ms || 0).toFixed(3);
  const cleaned = Number(data.cleaned_keys_count || 0).toLocaleString();

  container.innerHTML = `
    <div class="benchmark-metrics-grid">
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #f59e0b;"></i> Throughput</div>
        <div class="val" style="color: #fbbf24;">${opsSec} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ops/s</span></div>
        <div class="sub">${data.total_requests.toLocaleString()} ops in ${data.duration_ms}ms</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="clock" style="width: 12px; height: 12px; color: #38bdf8;"></i> Avg Latency</div>
        <div class="val">${avgLat} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Mean per-operation latency</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="activity" style="width: 12px; height: 12px; color: #ec4899;"></i> P99 Tail Latency</div>
        <div class="val" style="color: #f472b6;">${p99Lat} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">99% of requests below this</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="shield-check" style="width: 12px; height: 12px; color: #10b981;"></i> Cleaned Ephemeral Keys</div>
        <div class="val" style="color: #6ee7b7;">${cleaned}</div>
        <div class="sub">Auto-unlinked via UNLINK</div>
      </div>
    </div>

    ${renderDecompBarHtml(data.breakdown)}
    ${renderPercentilesHtml(data.percentiles)}
    ${renderHistogramHtml(data.histogram)}
  `;
  setupIcons();
}

export async function runLuaBenchmark() {
  if (isBenchmarkRunning) return;
  const btn = document.getElementById("btnRunLuaBench");
  const resultsContainer = document.getElementById("benchmarkLuaResults");
  const script = document.getElementById("txtLuaScript")?.value || "";
  const rawKeys = document.getElementById("txtLuaKeys")?.value || "";
  const rawArgs = document.getElementById("txtLuaArgs")?.value || "";
  const mode = document.getElementById("selLuaMode")?.value || "profile";
  const iterations = parseInt(document.getElementById("selLuaIterations")?.value || "100", 10);

  const keys = rawKeys.split(",").map(k => k.trim()).filter(Boolean);
  const args = rawArgs.split(",").map(a => a.trim()).filter(Boolean);

  if (!script.trim()) {
    alert("Please enter a Lua script to execute and profile.");
    return;
  }

  isBenchmarkRunning = true;
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Executing Script...</span>`;
  }
  if (resultsContainer) {
    resultsContainer.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 2.5rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Pre-loading and running Lua script on Redis server...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring precise microsecond server execution time</div>
      </div>
    `;
    setupIcons();
  }

  try {
    const res = await fetch("/api/benchmark/lua", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ script, keys, args, mode, iterations, concurrency: 5 })
    });
    if (!res.ok) {
      const errData = await res.json().catch(() => ({ detail: "Lua benchmark failed" }));
      throw new Error(errData.detail || "Lua benchmark failed");
    }
    const data = await res.json();
    renderLuaResults(data);
  } catch (err) {
    if (resultsContainer) {
      resultsContainer.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Lua Script Execution Error</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${escapeHtml(err.message)}</div>
        </div>
      `;
      setupIcons();
    }
  } finally {
    isBenchmarkRunning = false;
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<i data-lucide="play" style="width: 14px; height: 14px;"></i><span>Execute & Profile</span>`;
      setupIcons();
    }
  }
}

export function renderLuaResults(data) {
  const container = document.getElementById("benchmarkLuaResults");
  if (!container || !data) return;

  const srvMs = Number(data.server_duration_ms || 0).toFixed(3);
  const totalMs = Number(data.duration_ms || 0).toFixed(3);

  let alertHtml = "";
  if (data.atomicity_warning) {
    alertHtml = `
      <div class="atomicity-alert warning">
        <i data-lucide="alert-triangle" style="width: 20px; height: 20px; color: #ef4444; flex-shrink: 0;"></i>
        <div>
          <strong>High Atomicity Warning:</strong> Script spent <strong>${srvMs} ms</strong> executing on the Redis server (> 5ms).
          In Redis, Lua scripts execute atomically and block all other incoming client connections for the entire duration! Consider optimizing loops or moving logic out of Lua.
        </div>
      </div>
    `;
  } else {
    alertHtml = `
      <div class="atomicity-alert safe">
        <i data-lucide="check-circle-2" style="width: 20px; height: 20px; color: #10b981; flex-shrink: 0;"></i>
        <div>
          <strong>Atomicity Safe:</strong> Server execution took <strong>${srvMs} ms</strong>, well within non-blocking safety thresholds (&lt; 5ms).
        </div>
      </div>
    `;
  }

  let benchSection = "";
  if (data.mode === "benchmark" && data.ops_per_sec) {
    benchSection = `
      <div class="benchmark-metrics-grid">
        <div class="benchmark-metric-card">
          <div class="label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #f59e0b;"></i> Script Throughput</div>
          <div class="val" style="color: #fbbf24;">${Number(data.ops_per_sec).toLocaleString()} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ops/s</span></div>
        </div>
        <div class="benchmark-metric-card">
          <div class="label"><i data-lucide="clock" style="width: 12px; height: 12px; color: #38bdf8;"></i> Total Duration</div>
          <div class="val">${totalMs} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        </div>
      </div>
      ${renderPercentilesHtml(data.percentiles)}
      ${renderHistogramHtml(data.histogram)}
    `;
  }

  container.innerHTML = `
    ${alertHtml}

    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.85rem 1rem;">
      <div style="font-size: 0.72rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.35rem;">
        Script Return Value (Evaluated on Server)
      </div>
      <pre style="margin: 0; background: #090d16; padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); color: #38bdf8; font-family: var(--font-mono); font-size: 0.82rem; overflow-x: auto;">${escapeHtml(String(data.result))}</pre>
    </div>

    ${renderDecompBarHtml(data.breakdown)}
    ${benchSection}
  `;
  setupIcons();
}

export async function runClusterMatrix() {
  if (isBenchmarkRunning) return;
  const btn = document.getElementById("btnRunClusterMatrix");
  const resultsContainer = document.getElementById("benchmarkClusterResults");

  isBenchmarkRunning = true;
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px;"></i><span>Evaluating Matrix...</span>`;
  }
  if (resultsContainer) {
    resultsContainer.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i data-lucide="refresh-cw" class="spin" style="width: 28px; height: 28px; color: #38bdf8; margin-bottom: 0.75rem;"></i>
        <div style="font-weight: 600; color: var(--text-main);">Probing primary cluster nodes...</div>
        <div style="font-size: 0.78rem; margin-top: 0.25rem;">Measuring cross-node latency and throughput matrix</div>
      </div>
    `;
    setupIcons();
  }

  try {
    const res = await fetch("/api/benchmark/cluster-matrix");
    if (!res.ok) {
      const errData = await res.json().catch(() => ({ detail: "Cluster matrix request failed" }));
      throw new Error(errData.detail || "Cluster matrix failed");
    }
    const data = await res.json();
    renderClusterMatrixResults(data);
  } catch (err) {
    if (resultsContainer) {
      resultsContainer.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 600;">Cluster Matrix Evaluation Failed</div>
          <div style="font-size: 0.8rem; margin-top: 0.25rem;">${escapeHtml(err.message)}</div>
        </div>
      `;
      setupIcons();
    }
  } finally {
    isBenchmarkRunning = false;
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i><span>Evaluate Cluster Latency Matrix</span>`;
      setupIcons();
    }
  }
}

export function renderClusterMatrixResults(data) {
  const container = document.getElementById("benchmarkClusterResults");
  if (!container || !data) return;

  const clusterAvg = Number(data.cluster_avg_latency_ms || 0).toFixed(3);
  const nodes = data.nodes || [];

  container.innerHTML = `
    <div class="benchmark-metrics-grid">
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="activity" style="width: 12px; height: 12px; color: #38bdf8;"></i> Cluster Avg Latency</div>
        <div class="val">${clusterAvg} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">ms</span></div>
        <div class="sub">Across ${nodes.length} primary node(s)</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="zap" style="width: 12px; height: 12px; color: #10b981;"></i> Fastest Node</div>
        <div class="val" style="font-size: 1.1rem; color: #6ee7b7;">${escapeHtml(data.fastest_node || "N/A")}</div>
        <div class="sub">Lowest latency probe</div>
      </div>
      <div class="benchmark-metric-card">
        <div class="label"><i data-lucide="alert-triangle" style="width: 12px; height: 12px; color: #f59e0b;"></i> Slowest Node</div>
        <div class="val" style="font-size: 1.1rem; color: #fbbf24;">${escapeHtml(data.slowest_node || "N/A")}</div>
        <div class="sub">Highest latency probe</div>
      </div>
    </div>

    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden;">
      <table class="cluster-matrix-table">
        <thead>
          <tr>
            <th>Primary Node</th>
            <th>Role & Slots</th>
            <th>Avg Latency</th>
            <th>P99 Latency</th>
            <th>Throughput</th>
            <th>Health Status</th>
          </tr>
        </thead>
        <tbody>
          ${nodes.map(n => `
            <tr class="${n.outlier ? "outlier" : ""}">
              <td>
                <div style="font-family: var(--font-mono); font-weight: 700; color: #38bdf8;">${escapeHtml(n.node)}</div>
              </td>
              <td>
                <span class="badge-db" style="text-transform: capitalize;">${escapeHtml(n.role)}</span>
                <span style="font-size: 0.72rem; color: var(--text-muted); margin-left: 0.35rem;">${escapeHtml(n.slots || "N/A")}</span>
              </td>
              <td>
                <div style="display: flex; align-items: center; gap: 0.45rem;">
                  <strong style="font-family: var(--font-mono);">${Number(n.avg_latency_ms).toFixed(3)} ms</strong>
                </div>
              </td>
              <td style="font-family: var(--font-mono);">${Number(n.p99_latency_ms).toFixed(3)} ms</td>
              <td style="font-family: var(--font-mono); color: #fbbf24;">${Number(n.ops_per_sec).toLocaleString()} ops/s</td>
              <td>
                ${n.outlier
                  ? `<span class="badge-duration badge-duration-danger" style="font-size: 0.7rem; font-weight: 600;">⚠️ Latency Outlier (&gt;1.75x)</span>`
                  : `<span class="badge-duration badge-duration-normal" style="font-size: 0.7rem; font-weight: 600; color: #6ee7b7;">Balanced</span>`
                }
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
  setupIcons();
}

export function setupBenchmarkEventListeners() {
  const btnCloseBenchmark = document.getElementById("btnCloseBenchmarkModal");
  if (btnCloseBenchmark) btnCloseBenchmark.addEventListener("click", closeBenchmarkModal);

  const btnOpenBenchmark = document.getElementById("btnOpenBenchmarkModal");
  if (btnOpenBenchmark) btnOpenBenchmark.addEventListener("click", openBenchmarkModal);

  // Sub-tabs navigation buttons
  document.querySelectorAll(".benchmark-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-tab");
      if (tab) switchBenchmarkTab(tab);
    });
  });

  // Action runners
  const btnRunProbe = document.getElementById("btnRunProbe");
  if (btnRunProbe) btnRunProbe.addEventListener("click", runLatencyProbe);

  const btnRunCommandBench = document.getElementById("btnRunCommandBench");
  if (btnRunCommandBench) btnRunCommandBench.addEventListener("click", runCommandBenchmark);

  const selLuaPreset = document.getElementById("selLuaPreset");
  if (selLuaPreset) {
    selLuaPreset.addEventListener("change", () => {
      const presetKey = selLuaPreset.value;
      const preset = LUA_PRESETS[presetKey];
      if (preset) {
        const txtScript = document.getElementById("txtLuaScript");
        const txtKeys = document.getElementById("txtLuaKeys");
        const txtArgs = document.getElementById("txtLuaArgs");
        if (txtScript) txtScript.value = preset.script;
        if (txtKeys) txtKeys.value = preset.keys;
        if (txtArgs) txtArgs.value = preset.args;
      }
    });
  }

  const selLuaMode = document.getElementById("selLuaMode");
  const groupLuaBenchControls = document.getElementById("groupLuaBenchmarkControls");
  if (selLuaMode && groupLuaBenchControls) {
    selLuaMode.addEventListener("change", () => {
      groupLuaBenchControls.style.display = selLuaMode.value === "benchmark" ? "flex" : "none";
    });
  }

  const btnRunLuaBench = document.getElementById("btnRunLuaBench");
  if (btnRunLuaBench) btnRunLuaBench.addEventListener("click", runLuaBenchmark);

  const btnRunClusterMatrix = document.getElementById("btnRunClusterMatrix");
  if (btnRunClusterMatrix) btnRunClusterMatrix.addEventListener("click", runClusterMatrix);
}
