// Namespace Distribution and Key Hygiene Studio (Phase 3)
// Analyzes in-memory loaded keys with zero network hits to Redis.

import { state, escapeHtml } from "./state.js";
import { openKeyDetail } from "./inspector.js";

let activeAnalysis = null;
let activeHygieneFilter = "all";

/**
 * Fallback synchronous analyzer when Web Worker is not available.
 */
export function analyzeNamespacesAndHygieneSync(keys, delimiters = [":", "/", "."]) {
  const sortedDelims = [...delimiters].sort((a, b) => b.length - a.length);
  const namespaceMap = new Map();
  const anomalies = [];
  let totalKeyLength = 0;

  for (let i = 0; i < keys.length; i++) {
    const item = keys[i];
    const key = item.key || "";
    totalKeyLength += key.length;

    // 1. Namespace extraction
    let matchedPrefix = null;
    for (const d of sortedDelims) {
      const idx = key.indexOf(d);
      if (idx !== -1) {
        matchedPrefix = key.slice(0, idx + d.length);
        break;
      }
    }
    const ns = matchedPrefix || "(root)";
    if (!namespaceMap.has(ns)) {
      namespaceMap.set(ns, {
        prefix: ns,
        count: 0,
        types: new Set(),
        sampleKeys: [],
        memoryEstimate: 0
      });
    }
    const nsObj = namespaceMap.get(ns);
    nsObj.count++;
    if (item.type) nsObj.types.add(item.type);
    if (nsObj.sampleKeys.length < 3) nsObj.sampleKeys.push(key);
    if (item.memory) nsObj.memoryEstimate += item.memory;

    // 2. Hygiene & Linting checks
    if (/\s/.test(key)) {
      anomalies.push({
        key,
        type: item.type,
        issue: "Whitespace in Key",
        severity: "warning",
        desc: "Key contains space or whitespace characters that complicate shell scripting"
      });
    }
    for (const d of sortedDelims) {
      if (key.endsWith(d)) {
        anomalies.push({
          key,
          type: item.type,
          issue: "Trailing Delimiter",
          severity: "warning",
          desc: `Key ends with delimiter '${d}' leaving an empty child token`
        });
        break;
      }
    }
    if (key.includes("::") || key.includes("//")) {
      anomalies.push({
        key,
        type: item.type,
        issue: "Double Delimiter",
        severity: "info",
        desc: "Key has repeated delimiters ('::' or '//') which may cause empty tree nodes"
      });
    }
    if (/[^\x20-\x7E]/.test(key)) {
      anomalies.push({
        key,
        type: item.type,
        issue: "Non-ASCII Characters",
        severity: "warning",
        desc: "Key contains non-printable or binary bytes"
      });
    }
    if (key.length > 128) {
      anomalies.push({
        key,
        type: item.type,
        issue: "Long Key (>128 chars)",
        severity: "info",
        desc: `Key length is ${key.length} characters; long keys consume extra Redis dictionary RAM`
      });
    }
    if (!matchedPrefix && keys.length > 20) {
      anomalies.push({
        key,
        type: item.type,
        issue: "Missing Namespace",
        severity: "info",
        desc: "Key has no delimiter prefix and sits directly in the root namespace"
      });
    }
  }

  const namespaces = Array.from(namespaceMap.values()).map(n => ({
    prefix: n.prefix,
    count: n.count,
    percentage: keys.length > 0 ? ((n.count / keys.length) * 100).toFixed(1) : 0,
    types: Array.from(n.types),
    sampleKeys: n.sampleKeys,
    memoryEstimate: n.memoryEstimate
  })).sort((a, b) => b.count - a.count);

  return {
    totalAnalyzed: keys.length,
    avgKeyLength: keys.length > 0 ? (totalKeyLength / keys.length).toFixed(1) : 0,
    distinctNamespacesCount: namespaces.length,
    topNamespace: namespaces[0] || null,
    namespaces,
    anomalies: anomalies.slice(0, 100),
    totalAnomaliesCount: anomalies.length,
    durationMs: 0.5
  };
}

/**
 * Initialize event listeners for the Namespace & Hygiene Studio modal.
 */
export function initNamespaceHygieneModal(keysWorkerInstance) {
  const modal = document.getElementById("namespaceModal");
  if (!modal) return;

  const btnClose = document.getElementById("btnCloseNamespaceModal");
  if (btnClose) {
    btnClose.addEventListener("click", closeNamespaceModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeNamespaceModal();
  });

  // Tab switching inside modal
  const tabBtnDist = document.getElementById("tabBtnNsDistribution");
  const tabBtnHyg = document.getElementById("tabBtnNsHygiene");
  const paneDist = document.getElementById("paneNsDistribution");
  const paneHyg = document.getElementById("paneNsHygiene");

  if (tabBtnDist && tabBtnHyg && paneDist && paneHyg) {
    tabBtnDist.addEventListener("click", () => {
      tabBtnDist.classList.add("active");
      tabBtnHyg.classList.remove("active");
      paneDist.style.display = "block";
      paneHyg.style.display = "none";
    });

    tabBtnHyg.addEventListener("click", () => {
      tabBtnHyg.classList.add("active");
      tabBtnDist.classList.remove("active");
      paneHyg.style.display = "block";
      paneDist.style.display = "none";
    });
  }

  // Action button clicks inside modal (Filter in Table & Inspect Key)
  modal.addEventListener("click", (e) => {
    // 1. Filter In Table button
    const filterBtn = e.target.closest(".btn-ns-filter");
    if (filterBtn) {
      const prefix = filterBtn.getAttribute("data-prefix");
      if (prefix) {
        closeNamespaceModal();
        applyNamespaceFilter(prefix);
      }
      return;
    }

    // 2. Inspect key button
    const inspectBtn = e.target.closest(".btn-inspect-hygiene-key");
    if (inspectBtn) {
      const key = inspectBtn.getAttribute("data-key");
      if (key) {
        closeNamespaceModal();
        openKeyDetail(key);
      }
      return;
    }

    // 3. Hygiene category filter pill
    const catPill = e.target.closest(".hygiene-cat-pill");
    if (catPill) {
      const cat = catPill.getAttribute("data-cat");
      activeHygieneFilter = cat || "all";
      document.querySelectorAll(".hygiene-cat-pill").forEach(p => p.classList.remove("active"));
      catPill.classList.add("active");
      renderHygieneTable();
    }
  });
}

export function closeNamespaceModal() {
  const modal = document.getElementById("namespaceModal");
  if (modal) modal.style.display = "none";
}

/**
 * Open and run the Namespace & Hygiene Studio.
 */
export async function openNamespaceHygieneStudio(workerInstance) {
  const modal = document.getElementById("namespaceModal");
  if (!modal) return;

  modal.style.display = "flex";

  const emptyState = document.getElementById("nsEmptyState");
  const contentWrap = document.getElementById("nsContentWrapper");

  if (!state.keysTableRows || state.keysTableRows.length === 0) {
    if (emptyState) emptyState.style.display = "block";
    if (contentWrap) contentWrap.style.display = "none";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (contentWrap) contentWrap.style.display = "flex";

  // Run analysis via worker if available, else fallback
  const start = performance.now();
  let analysis = null;

  if (workerInstance) {
    try {
      analysis = await new Promise((resolve, reject) => {
        const id = "ns_" + Date.now();
        const handler = (e) => {
          if (e.data && e.data.id === id) {
            workerInstance.removeEventListener("message", handler);
            if (e.data.success) {
              resolve(e.data.data);
            } else {
              reject(new Error(e.data.error));
            }
          }
        };
        workerInstance.addEventListener("message", handler);
        workerInstance.postMessage({
          id,
          type: "ANALYZE_NAMESPACES_AND_HYGIENE",
          payload: {
            keys: state.keysTableRows,
            delimiters: state.activeTreeDelimiters || [":", "/", "."]
          }
        });
        // Timeout fallback
        setTimeout(() => {
          workerInstance.removeEventListener("message", handler);
          resolve(analyzeNamespacesAndHygieneSync(state.keysTableRows, state.activeTreeDelimiters));
        }, 1500);
      });
    } catch (_) {
      analysis = analyzeNamespacesAndHygieneSync(state.keysTableRows, state.activeTreeDelimiters);
    }
  } else {
    analysis = analyzeNamespacesAndHygieneSync(state.keysTableRows, state.activeTreeDelimiters);
  }

  if (!analysis.durationMs) {
    analysis.durationMs = performance.now() - start;
  }

  activeAnalysis = analysis;
  renderStudioOverview(analysis);
  renderNamespaceDistributionTable(analysis);
  renderHygieneTable();
}

function renderStudioOverview(analysis) {
  const durationText = analysis.durationMs < 1 ? "< 1ms" : `${analysis.durationMs.toFixed(1)}ms`;
  const sub = document.getElementById("nsStudioSubtitle");
  if (sub) {
    sub.textContent = `Analyzed ${analysis.totalAnalyzed.toLocaleString()} loaded keys • 0 Redis operations (${durationText})`;
  }

  const kpiKeys = document.getElementById("kpiNsTotalKeys");
  if (kpiKeys) kpiKeys.textContent = analysis.totalAnalyzed.toLocaleString();

  const kpiNs = document.getElementById("kpiNsCount");
  if (kpiNs) kpiNs.textContent = analysis.distinctNamespacesCount.toLocaleString();

  const kpiTop = document.getElementById("kpiNsTop");
  if (kpiTop) {
    if (analysis.topNamespace) {
      kpiTop.innerHTML = `<span style="color: var(--accent-primary); font-family: var(--font-mono);">${escapeHtml(analysis.topNamespace.prefix)}</span> <span style="font-size: 0.72rem; color: var(--text-muted);">(${analysis.topNamespace.percentage}%)</span>`;
    } else {
      kpiTop.textContent = "—";
    }
  }

  const kpiHyg = document.getElementById("kpiNsHygiene");
  if (kpiHyg) {
    if (analysis.totalAnomaliesCount === 0) {
      kpiHyg.innerHTML = `<span style="color: #10b981;">0 Issues (Clean)</span>`;
    } else {
      kpiHyg.innerHTML = `<span style="color: var(--accent-warning);">${analysis.totalAnomaliesCount.toLocaleString()} Flags</span>`;
    }
  }

  // Badges on tabs
  const badgeDist = document.getElementById("badgeNsDistCount");
  if (badgeDist) badgeDist.textContent = analysis.distinctNamespacesCount;

  const badgeHyg = document.getElementById("badgeNsHygCount");
  if (badgeHyg) {
    badgeHyg.textContent = analysis.totalAnomaliesCount;
    badgeHyg.style.background = analysis.totalAnomaliesCount > 0 ? "rgba(245, 158, 11, 0.2)" : "rgba(16, 185, 129, 0.2)";
    badgeHyg.style.color = analysis.totalAnomaliesCount > 0 ? "var(--accent-warning)" : "#10b981";
  }
}

function renderNamespaceDistributionTable(analysis) {
  const tbody = document.getElementById("tbodyNsDistribution");
  if (!tbody) return;

  if (!analysis.namespaces || analysis.namespaces.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 2rem;">No namespaces found</td></tr>`;
    return;
  }

  const maxCount = analysis.namespaces[0]?.count || 1;

  tbody.innerHTML = analysis.namespaces.map(ns => {
    const barWidth = Math.max(4, Math.round((ns.count / maxCount) * 100));
    const typesBadges = (ns.types || []).map(t => `<span class="type-badge ${t}">${escapeHtml(t)}</span>`).join(" ");

    return `
      <tr>
        <td style="font-family: var(--font-mono); font-weight: 600; color: #38bdf8;">
          ${escapeHtml(ns.prefix)}
        </td>
        <td style="font-weight: 700;">${ns.count.toLocaleString()}</td>
        <td style="width: 28%;">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <div style="flex: 1; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden;">
              <div style="width: ${barWidth}%; height: 100%; background: linear-gradient(90deg, #38bdf8, #818cf8); border-radius: 3px;"></div>
            </div>
            <span style="font-size: 0.75rem; font-weight: 600; min-width: 42px; text-align: right;">${ns.percentage}%</span>
          </div>
        </td>
        <td>${typesBadges || '<span style="color: var(--text-muted);">—</span>'}</td>
        <td style="text-align: right;">
          <button type="button" class="btn btn-secondary btn-ns-filter" data-prefix="${escapeHtml(ns.prefix)}" title="Filter table by this namespace" style="padding: 0.25rem 0.6rem; font-size: 0.72rem;">
            🔍 Filter
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

function renderHygieneTable() {
  const tbody = document.getElementById("tbodyNsHygiene");
  if (!tbody || !activeAnalysis) return;

  let anomalies = activeAnalysis.anomalies || [];
  if (activeHygieneFilter !== "all") {
    anomalies = anomalies.filter(a => a.issue.toLowerCase().includes(activeHygieneFilter.toLowerCase()));
  }

  if (anomalies.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; color: #10b981; padding: 2.5rem 1rem;">
          <div style="font-weight: 600; font-size: 0.9rem;">✨ Clean Keyspace! No hygiene anomalies detected.</div>
          <div style="color: var(--text-muted); font-size: 0.75rem; margin-top: 0.25rem;">
            All loaded keys follow standard naming conventions without illegal spaces, trailing separators, or excessive length.
          </div>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = anomalies.map(a => {
    const isWarning = a.severity === "warning";
    const badgeColor = isWarning ? "background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.3);" : "background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.3);";

    return `
      <tr>
        <td style="font-family: var(--font-mono); font-size: 0.76rem; max-width: 260px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${escapeHtml(a.key)}">
          ${escapeHtml(a.key)}
        </td>
        <td>
          <span style="font-size: 0.7rem; font-weight: 600; padding: 0.15rem 0.45rem; border-radius: 4px; ${badgeColor}">
            ${escapeHtml(a.issue)}
          </span>
        </td>
        <td style="font-size: 0.74rem; color: var(--text-muted);">${escapeHtml(a.desc)}</td>
        <td style="text-align: right;">
          <button type="button" class="btn btn-secondary btn-inspect-hygiene-key" data-key="${escapeHtml(a.key)}" title="Inspect this key in Slide-Over drawer" style="padding: 0.25rem 0.55rem; font-size: 0.72rem;">
            Inspect
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

function applyNamespaceFilter(prefix) {
  const searchInput = document.getElementById("keySearchInput");
  if (!searchInput) return;

  const cleanPrefix = prefix === "(root)" ? "" : prefix;
  searchInput.value = cleanPrefix ? `${cleanPrefix}*` : "*";

  // Trigger input event to invoke in-memory search
  searchInput.dispatchEvent(new Event("input", { bubbles: true }));
}
