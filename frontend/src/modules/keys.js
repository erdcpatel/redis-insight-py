import { state, escapeHtml } from "./state.js";
import { setupIcons } from "./icons.js";
import { openKeyDetail } from "./inspector.js";
import { triggerDeleteConfirmation } from "./actions.js";

export async function resetAndScan() {
  state.isScanning = false;
  state.currentScanEpoch++;
  const epoch = state.currentScanEpoch;

  state.currentCursor = 0;
  state.scanComplete = false;
  state.totalScanned = 0;
  state.keysTableRows = [];
  state.loadedKeysSet.clear();
  state.treeInitialized = false;
  state.treeExpandedPaths.clear();

  const emptyEl = document.getElementById("emptyWorkspaceState");
  const gridContainer = document.getElementById("gridViewerContainer");
  if (emptyEl) emptyEl.style.display = "none";
  if (gridContainer) gridContainer.style.display = "block";

  renderKeysTable();
  await scanNextBatch(epoch);
}

// Auto-Refresh Watcher for Keys Browser
export function updateAutoRefreshUI() {
  const btn = document.getElementById("btnToggleAutoRefresh");
  const text = document.getElementById("autoRefreshStatusText");
  const select = document.getElementById("autoRefreshIntervalSelect");
  if (!btn || !text) return;

  if (state.isAutoRefreshActive) {
    btn.classList.add("active");
    const timeFormatted = state.autoRefreshRemainingSec >= 60
      ? `${Math.floor(state.autoRefreshRemainingSec / 60)}m ${state.autoRefreshRemainingSec % 60}s`
      : `${state.autoRefreshRemainingSec}s`;
    btn.title = `Auto-refresh active (Pattern: "${state.currentPattern || "*"}"). Refreshing in ${timeFormatted}. Click to pause.`;
    text.textContent = `Auto: ${timeFormatted}`;
    if (select) select.value = String(state.autoRefreshIntervalSec);
  } else {
    btn.classList.remove("active");
    const intervalFormatted = state.autoRefreshIntervalSec >= 60
      ? `${Math.floor(state.autoRefreshIntervalSec / 60)}m`
      : `${state.autoRefreshIntervalSec}s`;
    btn.title = `Click to watch keys matching pattern "${state.currentPattern || "*"}" every ${intervalFormatted}`;
    text.textContent = "Auto: Off";
    if (select) select.value = String(state.autoRefreshIntervalSec);
  }
}

export function resetAutoRefreshTimer() {
  state.autoRefreshRemainingSec = state.autoRefreshIntervalSec;
  updateAutoRefreshUI();
}

export function startAutoRefresh() {
  state.isAutoRefreshActive = true;
  state.autoRefreshRemainingSec = state.autoRefreshIntervalSec;
  updateAutoRefreshUI();

  if (state.autoRefreshTimer) clearInterval(state.autoRefreshTimer);
  state.autoRefreshTimer = setInterval(async () => {
    if (!state.isAutoRefreshActive) return;

    const hasOpenModal = document.querySelector(".modal-backdrop.active");
    if (document.hidden || hasOpenModal) {
      return;
    }

    state.autoRefreshRemainingSec--;
    if (state.autoRefreshRemainingSec <= 0) {
      state.autoRefreshRemainingSec = state.autoRefreshIntervalSec;
      updateAutoRefreshUI();

      const hasConnected = state.cachedConnections.some(c => c.is_connected);
      if (hasConnected && !state.isScanning) {
        await resetAndScan();
      }
    } else {
      updateAutoRefreshUI();
    }
  }, 1000);
}

export function stopAutoRefresh() {
  state.isAutoRefreshActive = false;
  if (state.autoRefreshTimer) {
    clearInterval(state.autoRefreshTimer);
    state.autoRefreshTimer = null;
  }
  state.autoRefreshRemainingSec = state.autoRefreshIntervalSec;
  updateAutoRefreshUI();
}

export function toggleAutoRefresh() {
  if (state.isAutoRefreshActive) {
    stopAutoRefresh();
  } else {
    startAutoRefresh();
  }
}

export function isScanCursorComplete(cursor) {
  if (cursor === null || cursor === undefined) return true;
  const text = String(cursor).trim();
  if (text === "" || text === "0") return true;
  if (text.startsWith("{")) {
    try {
      return Object.values(JSON.parse(text)).every(v => Number(v) === 0);
    } catch {
      return false;
    }
  }
  return false;
}

export function describeScanProgress(cursor) {
  const text = String(cursor ?? "").trim();
  if (text.startsWith("{")) {
    try {
      const values = Object.values(JSON.parse(text));
      const pending = values.filter(v => Number(v) !== 0).length;
      return `${pending} of ${values.length} nodes still scanning`;
    } catch {
      return "more keys available";
    }
  }
  return "more keys available";
}

export function isClusterView() {
  return Boolean(state.lastStatus && state.lastStatus.is_cluster) || String(state.currentCursor ?? "").trim().startsWith("{");
}

export async function scanNextBatch(expectedEpoch = null) {
  if (state.isScanning) return;
  if (state.scanComplete) return;

  const targetEpoch = expectedEpoch !== null ? expectedEpoch : state.currentScanEpoch;
  state.isScanning = true;
  updateScanUI();

  try {
    const url = `/api/keys?pattern=${encodeURIComponent(state.currentPattern)}&cursor=${encodeURIComponent(String(state.currentCursor ?? "0"))}&count=${state.scanBatchSize}${state.currentType !== "all" ? `&type=${encodeURIComponent(state.currentType)}` : ""}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to scan keys");
    const data = await res.json();

    if (targetEpoch !== state.currentScanEpoch) {
      return;
    }

    state.currentCursor = data.cursor;
    state.scanComplete = isScanCursorComplete(state.currentCursor);
    state.dbTotalKeys = data.total_in_db;

    const newKeys = (data.keys || []).filter(k => {
      if (state.loadedKeysSet.has(k.name)) return false;
      state.loadedKeysSet.add(k.name);
      return true;
    });

    const rows = newKeys.map(k => ({
      key: k.name,
      type: k.type,
      ttl_seconds: k.ttl,
      status: k.ttl === -1 ? "Persistent" : k.ttl === -2 ? "Expired" : `Expires in ${k.ttl}s`
    }));

    if (rows.length > 0) {
      state.keysTableRows.push(...rows);
    }
    renderKeysTable();
    state.totalScanned = state.loadedKeysSet.size;

    // Update keys tab badge in workspace bar
    const tabBadgeKeys = document.getElementById("tabBadgeKeys");
    if (tabBadgeKeys) {
      tabBadgeKeys.textContent = state.totalScanned.toLocaleString();
    }
  } catch (err) {
    console.error("Scan error:", err);
  } finally {
    if (targetEpoch === state.currentScanEpoch) {
      state.isScanning = false;
      updateScanUI();
    }
  }
}

export const STANDARD_CHIP_DELIMITERS = [":", "/", ".", "-", "_"];
export const PRESET_DELIMITERS_MAP = {
  auto: [":", "/", "."],
  ":": [":"],
  "/": ["/"],
  ".": ["."],
  "-": ["-"],
  "_": ["_"]
};

export function getActiveConnectionId() {
  if (state.lastStatus?.connection_id) return state.lastStatus.connection_id;
  const sel = state.cachedConnections?.find(c => c.is_selected);
  if (sel) return sel.id;
  const conn = state.cachedConnections?.find(c => c.is_connected);
  return conn ? conn.id : null;
}

export function derivePresetFromDelimiters(delims) {
  if (!Array.isArray(delims) || delims.length === 0) return "custom";
  const s = new Set(delims);
  if (s.size === 3 && s.has(":") && s.has("/") && s.has(".")) return "auto";
  if (s.size === 1) {
    if (s.has(":")) return ":";
    if (s.has("/")) return "/";
    if (s.has(".")) return ".";
    if (s.has("-")) return "-";
    if (s.has("_")) return "_";
  }
  return "custom";
}

export function saveDelimitersForActiveConnection(connId = null) {
  const cid = connId || getActiveConnectionId();
  if (cid) {
    localStorage.setItem(`redis_insight_tree_delimiters_${cid}`, JSON.stringify(state.activeTreeDelimiters));
  }
  localStorage.setItem("redis_insight_tree_delimiters_global", JSON.stringify(state.activeTreeDelimiters));
  localStorage.setItem("redis_insight_tree_delimiter_preset", state.treeDelimiterPreset);
  localStorage.setItem("redis_insight_custom_delimiters", JSON.stringify(state.customTreeDelimiters));
}

export function loadDelimitersForActiveConnection(connId = null) {
  const cid = connId || getActiveConnectionId();
  let savedDelims = null;
  if (cid) {
    const raw = localStorage.getItem(`redis_insight_tree_delimiters_${cid}`);
    if (raw) {
      try {
        const p = JSON.parse(raw);
        if (Array.isArray(p) && p.length > 0) savedDelims = p;
      } catch (_) {}
    }
  }
  if (!savedDelims) {
    const rawGlobal = localStorage.getItem("redis_insight_tree_delimiters_global");
    if (rawGlobal) {
      try {
        const p = JSON.parse(rawGlobal);
        if (Array.isArray(p) && p.length > 0) savedDelims = p;
      } catch (_) {}
    }
  }

  if (Array.isArray(savedDelims) && savedDelims.length > 0) {
    state.activeTreeDelimiters = savedDelims;
  } else {
    state.activeTreeDelimiters = [":", "/", "."];
  }

  const rawCustom = localStorage.getItem("redis_insight_custom_delimiters");
  if (rawCustom) {
    try {
      const p = JSON.parse(rawCustom);
      if (Array.isArray(p)) state.customTreeDelimiters = p;
    } catch (_) {}
  }

  state.treeDelimiterPreset = derivePresetFromDelimiters(state.activeTreeDelimiters);
}

export function tokenizeKeyWithDelimiters(key, activeDelimiters = state.activeTreeDelimiters) {
  if (!key || !activeDelimiters || activeDelimiters.length === 0) {
    return { segments: [], leafName: key || "" };
  }

  const sortedDelims = [...activeDelimiters]
    .filter(d => typeof d === "string" && d.length > 0)
    .sort((a, b) => b.length - a.length);

  if (sortedDelims.length === 0) {
    return { segments: [], leafName: key };
  }

  const segments = [];
  let currentIndex = 0;

  while (currentIndex < key.length) {
    let earliestPos = -1;
    let matchedDelim = null;

    for (const delim of sortedDelims) {
      const pos = key.indexOf(delim, currentIndex);
      if (pos !== -1) {
        if (earliestPos === -1 || pos < earliestPos) {
          earliestPos = pos;
          matchedDelim = delim;
        } else if (pos === earliestPos && delim.length > (matchedDelim ? matchedDelim.length : 0)) {
          matchedDelim = delim;
        }
      }
    }

    if (earliestPos === -1) {
      break;
    }

    const segName = key.slice(currentIndex, earliestPos);
    if (segName !== "" || segments.length > 0) {
      segments.push({
        name: segName,
        delim: matchedDelim
      });
    }
    currentIndex = earliestPos + matchedDelim.length;
  }

  const leafName = key.slice(currentIndex);

  if (segments.length === 0) {
    return { segments: [], leafName: key };
  }

  return { segments, leafName: leafName || "(empty)" };
}

export function getDelimiterForKey(key, delimiterPreference = "auto") {
  if (!key) return null;
  const delims = (Array.isArray(delimiterPreference) && delimiterPreference.length > 0)
    ? delimiterPreference
    : (delimiterPreference && delimiterPreference !== "auto"
      ? [delimiterPreference]
      : (state.activeTreeDelimiters || [":", "/", "."]));
  const { segments } = tokenizeKeyWithDelimiters(key, delims);
  return segments.length > 0 ? segments[0].delim : null;
}

export function buildNamespaceTree(rows, delimiters = state.activeTreeDelimiters) {
  const root = {
    id: "__root__",
    name: "Root",
    fullPrefix: "",
    delimiter: "",
    depth: -1,
    folders: new Map(),
    keys: [],
    totalKeyCount: 0
  };

  const activeDelims = Array.isArray(delimiters)
    ? delimiters
    : (typeof delimiters === "string" && delimiters !== "auto"
      ? [delimiters]
      : (state.activeTreeDelimiters || [":", "/", "."]));

  for (const row of rows) {
    const key = row.key || "";
    const { segments, leafName } = tokenizeKeyWithDelimiters(key, activeDelims);

    if (segments.length === 0) {
      root.keys.push({ ...row, leafName: key });
      continue;
    }

    let currentNode = root;
    let currentPrefix = "";

    for (let i = 0; i < segments.length; i++) {
      const { name: seg, delim } = segments[i];
      currentPrefix += seg + delim;
      const fullFolderPrefix = currentPrefix;

      if (!currentNode.folders.has(seg)) {
        currentNode.folders.set(seg, {
          id: fullFolderPrefix,
          name: seg,
          fullPrefix: fullFolderPrefix,
          delimiter: delim,
          depth: i,
          folders: new Map(),
          keys: [],
          totalKeyCount: 0
        });
      }
      currentNode = currentNode.folders.get(seg);
    }

    currentNode.keys.push({ ...row, leafName: leafName || "(empty)" });
  }

  function finalizeNode(node) {
    let count = node.keys.length;
    node.keys.sort((a, b) => (a.leafName || a.key).localeCompare(b.leafName || b.key));

    const sortedFolders = new Map([...node.folders.entries()].sort((a, b) => a[0].localeCompare(b[0])));
    node.folders = sortedFolders;

    for (const child of node.folders.values()) {
      finalizeNode(child);
      count += child.totalKeyCount;
    }
    node.totalKeyCount = count;
  }

  finalizeNode(root);
  return root;
}

export function folderMatchesQuery(folder, q) {
  if (folder.name.toLowerCase().includes(q) || folder.fullPrefix.toLowerCase().includes(q)) {
    return true;
  }
  for (const k of folder.keys) {
    if (k.key.toLowerCase().includes(q) || (k.leafName && k.leafName.toLowerCase().includes(q))) {
      return true;
    }
  }
  for (const child of folder.folders.values()) {
    if (folderMatchesQuery(child, q)) {
      return true;
    }
  }
  return false;
}

export function getFilteredKeysRows() {
  const filter = (state.currentTtlFilter || "all").toLowerCase();
  if (filter === "expiring") {
    return state.keysTableRows.filter(r => r.ttl_seconds > 0);
  }
  if (filter === "persistent" || filter === "no-ttl") {
    return state.keysTableRows.filter(r => r.ttl_seconds === -1);
  }
  return state.keysTableRows;
}

const VIRTUAL_ROW_HEIGHT = 44;
const VIRTUAL_BUFFER = 20;

function renderTableRowHtml(r) {
  const encodedKey = encodeURIComponent(r.key);
  const isReadOnly = Boolean(state.lastStatus?.read_only);

  const actionHtml = isReadOnly
    ? `<span title="Read-Only Mode: Deletion locked" style="color: var(--text-muted); opacity: 0.45; display: inline-flex; align-items: center; padding: 4px;">
         <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
       </span>`
    : `<button type="button" class="btn-icon danger btn-delete-key-table" data-key="${encodedKey}" title="Delete key">
         <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
       </button>`;

  const ttlHtml = r.ttl_seconds === -1
    ? `<span class="badge-persistent" style="background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3); padding: 0.15rem 0.45rem; border-radius: 4px; font-size: 0.72rem; font-weight: 600;">∞ No TTL</span>`
    : `<span class="badge-expiring" style="color: var(--accent-warning); font-size: 0.78rem;">⏳ ${escapeHtml(r.status)}</span>`;

  return `
    <tr class="key-row" data-key="${encodedKey}" style="border-bottom: 1px solid rgba(255,255,255,0.04); cursor: pointer; height: ${VIRTUAL_ROW_HEIGHT}px;">
      <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 380px;">
        <span class="btn-inspect-key" data-key="${encodedKey}" title="${escapeHtml(r.key)}">${escapeHtml(r.key)}</span>
      </td>
      <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase;">
        <span class="badge-db">${escapeHtml(r.type)}</span>
      </td>
      <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-secondary);">
        ${r.ttl_seconds === -1 ? '<span style="color: var(--text-muted);">None</span>' : `${r.ttl_seconds}s`}
      </td>
      <td style="padding: 0.65rem 1rem; font-size: 0.8rem;">
        ${ttlHtml}
      </td>
      <td style="padding: 0.65rem 1rem; text-align: right;" onclick="event.stopPropagation()">
        ${actionHtml}
      </td>
    </tr>
  `;
}

export function renderKeysFlatTable() {
  const container = document.getElementById("gridViewerContainer");
  if (!container) return;

  const rowsToDisplay = getFilteredKeysRows();

  if (rowsToDisplay.length === 0) {
    if (state.isScanning && state.keysTableRows.length === 0) {
      container.innerHTML = `
        <div class="table-loading-card">
          <div class="spinner-ring"></div>
          <div style="font-weight: 600; color: var(--text-primary); font-size: 0.95rem;">Scanning Keyspace...</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">Fetching keys matching "<code>${escapeHtml(state.currentPattern)}</code>" from Redis</div>
        </div>
      `;
      return;
    }

    if (state.keysTableRows.length > 0) {
      container.innerHTML = `
        <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No keys match TTL filter "<strong>${escapeHtml(state.currentTtlFilter)}</strong>".<br>
          <span style="font-size: 0.78rem; opacity: 0.75; margin-top: 0.35rem; display: inline-block;">(${state.keysTableRows.length.toLocaleString()} total keys scanned so far)</span>
        </div>
      `;
      return;
    }
    const notStarted = !state.scanComplete && isScanCursorComplete(state.currentCursor);
    container.innerHTML = state.scanComplete
      ? `
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No keys found matching pattern "<code>${escapeHtml(state.currentPattern)}</code>".
      </div>
    `
      : notStarted
      ? `
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        Scanning keys matching "<code>${escapeHtml(state.currentPattern)}</code>"...
      </div>
    `
      : `
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No matches yet for "<code>${escapeHtml(state.currentPattern)}</code>" in the part of the keyspace scanned so far.<br>
        The scan is not finished — click <strong>Load More</strong> to keep scanning.
      </div>
    `;
    return;
  }

  const totalRows = rowsToDisplay.length;
  const isVirtual = totalRows > 100;

  if (!isVirtual) {
    container.innerHTML = `
      <div style="overflow-y: auto; height: 100%; width: 100%; padding: 0.5rem;" id="keysTableViewport">
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
          <tbody id="keysTableBody">
            ${rowsToDisplay.map(renderTableRowHtml).join("")}
          </tbody>
        </table>
      </div>
    `;
    return;
  }

  const totalHeight = totalRows * VIRTUAL_ROW_HEIGHT;
  const initialEnd = Math.min(totalRows, 60);

  container.innerHTML = `
    <div class="virtual-scroll-viewport" id="keysTableViewport" style="overflow-y: auto; height: 100%; width: 100%; padding: 0.5rem; position: relative;">
      <div class="virtual-scroll-spacer" style="height: ${totalHeight}px; width: 100%; position: relative;">
        <div class="virtual-scroll-content" id="virtualScrollContent" style="position: absolute; top: 0px; left: 0; right: 0;">
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
            <tbody id="keysTableBody">
              ${rowsToDisplay.slice(0, initialEnd).map(renderTableRowHtml).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  const viewport = document.getElementById("keysTableViewport");
  const content = document.getElementById("virtualScrollContent");
  const tbody = document.getElementById("keysTableBody");

  let lastStart = 0;
  let lastEnd = initialEnd;

  if (viewport && content && tbody) {
    viewport.addEventListener("scroll", () => {
      const scrollTop = viewport.scrollTop;
      const viewportHeight = viewport.clientHeight || 600;
      const startIndex = Math.max(0, Math.floor(scrollTop / VIRTUAL_ROW_HEIGHT) - VIRTUAL_BUFFER);
      const visibleCount = Math.ceil(viewportHeight / VIRTUAL_ROW_HEIGHT);
      const endIndex = Math.min(totalRows, startIndex + visibleCount + VIRTUAL_BUFFER * 2);

      if (startIndex !== lastStart || endIndex !== lastEnd) {
        lastStart = startIndex;
        lastEnd = endIndex;
        const offsetY = startIndex * VIRTUAL_ROW_HEIGHT;
        content.style.top = `${offsetY}px`;
        tbody.innerHTML = rowsToDisplay.slice(startIndex, endIndex).map(renderTableRowHtml).join("");
      }
    }, { passive: true });
  }
}

export function renderKeysTreeView() {
  const container = document.getElementById("gridViewerContainer");
  if (!container) return;

  const rowsToDisplay = getFilteredKeysRows();

  if (rowsToDisplay.length === 0) {
    if (state.keysTableRows.length > 0) {
      container.innerHTML = `
        <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No keys match TTL filter "<strong>${escapeHtml(state.currentTtlFilter)}</strong>".<br>
          <span style="font-size: 0.78rem; opacity: 0.75; margin-top: 0.35rem; display: inline-block;">(${state.keysTableRows.length.toLocaleString()} total keys scanned so far)</span>
        </div>
      `;
      return;
    }
    const notStarted = !state.scanComplete && isScanCursorComplete(state.currentCursor);
    container.innerHTML = state.scanComplete
      ? `
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No keys found matching pattern "<code>${escapeHtml(state.currentPattern)}</code>".
      </div>
    `
      : notStarted
      ? `
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        Scanning keys matching "<code>${escapeHtml(state.currentPattern)}</code>"...
      </div>
    `
      : `
      <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        No matches yet for "<code>${escapeHtml(state.currentPattern)}</code>" in the part of the keyspace scanned so far.<br>
        The scan is not finished — click <strong>Load More</strong> to keep scanning.
      </div>
    `;
    return;
  }

  const treeRoot = buildNamespaceTree(rowsToDisplay, state.activeTreeDelimiters);

  if (!state.treeInitialized && state.treeExpandedPaths.size === 0) {
    for (const f of treeRoot.folders.values()) {
      state.treeExpandedPaths.add(f.id);
    }
    state.treeInitialized = true;
  }

  function countAllFolders(node) {
    let c = node.folders.size;
    for (const child of node.folders.values()) {
      c += countAllFolders(child);
    }
    return c;
  }
  const totalFolders = countAllFolders(treeRoot);

  const isFiltered = Boolean(state.currentTreeFilterQuery.trim());
  const q = state.currentTreeFilterQuery.trim().toLowerCase();

  function renderTreeKeyRow(r, depth) {
    const encodedKey = encodeURIComponent(r.key);
    return `
      <div class="tree-node tree-leaf key-row" data-key="${encodedKey}" style="padding-left: ${depth * 20 + 26}px;">
        <div class="tree-node-content">
          <div class="tree-key-icon">
            <i data-lucide="key" style="width: 13px; height: 13px;"></i>
          </div>
          <span class="tree-key-name btn-inspect-key" data-key="${encodedKey}" title="${escapeHtml(r.key)}">
            ${escapeHtml(r.leafName || r.key)}
          </span>
          <span class="badge-db" style="margin-left: 0.35rem; font-size: 0.68rem; text-transform: uppercase;">${escapeHtml(r.type)}</span>
          ${r.ttl_seconds === -1
            ? `<span class="badge-persistent" style="margin-left: 0.35rem; font-size: 0.65rem; padding: 0.08rem 0.35rem; border-radius: 4px; background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3); font-weight: 600;">∞ No TTL</span>`
            : `<span class="tree-key-ttl" title="Expires in ${r.ttl_seconds}s">⏳ ${r.ttl_seconds}s</span>`
          }
          <span class="tree-key-status" style="color: ${r.ttl_seconds === -1 ? 'var(--text-muted)' : 'var(--accent-warning)'};">${escapeHtml(r.status)}</span>
          <div class="tree-key-actions" onclick="event.stopPropagation()">
            ${state.lastStatus?.read_only ? `
              <span title="Read-Only Mode: Deletion locked" style="color: var(--text-muted); opacity: 0.45; display: inline-flex; align-items: center; padding: 4px;">
                <i data-lucide="lock" style="width: 13px; height: 13px;"></i>
              </span>
            ` : `
              <button type="button" class="btn-icon danger btn-delete-key-table" data-key="${encodedKey}" title="Delete key">
                <i data-lucide="trash-2" style="width: 13px; height: 13px;"></i>
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }


  function renderFolderNode(folder, depth) {
    if (isFiltered && !folderMatchesQuery(folder, q)) {
      return "";
    }

    const isExpanded = isFiltered ? true : state.treeExpandedPaths.has(folder.id);
    const encodedId = encodeURIComponent(folder.id);

    let innerChildren = "";
    if (isExpanded) {
      for (const sub of folder.folders.values()) {
        innerChildren += renderFolderNode(sub, depth + 1);
      }
      for (const k of folder.keys) {
        if (isFiltered) {
          if (!k.key.toLowerCase().includes(q) && !(k.leafName && k.leafName.toLowerCase().includes(q))) {
            continue;
          }
        }
        innerChildren += renderTreeKeyRow(k, depth + 1);
      }
    }

    return `
      <div class="tree-folder-group" data-folder-id="${encodedId}">
        <div class="tree-node tree-folder" data-folder-id="${encodedId}" style="padding-left: ${depth * 20 + 8}px;">
          <div class="tree-node-content">
            <button type="button" class="tree-toggle-btn" title="${isExpanded ? 'Collapse' : 'Expand'}">
              <i data-lucide="${isExpanded ? 'chevron-down' : 'chevron-right'}" style="width: 14px; height: 14px;"></i>
            </button>
            <div class="tree-folder-icon">
              <i data-lucide="${isExpanded ? 'folder-open' : 'folder'}" style="width: 15px; height: 15px;"></i>
            </div>
            <span class="tree-folder-name" title="${escapeHtml(folder.fullPrefix)}">
              ${escapeHtml(folder.name)}<span class="tree-folder-delim">${escapeHtml(folder.delimiter)}</span>
            </span>
            <span class="tree-count-badge" title="${folder.totalKeyCount} keys in this namespace">
              ${folder.totalKeyCount.toLocaleString()} ${folder.totalKeyCount === 1 ? 'key' : 'keys'}
            </span>
            <button type="button" class="tree-filter-prefix-btn" data-prefix="${escapeHtml(folder.fullPrefix)}" title="Filter keys matching '${escapeHtml(folder.fullPrefix)}*'">
              <i data-lucide="filter" style="width: 11px; height: 11px;"></i>
              <span>Filter</span>
            </button>
          </div>
        </div>
        <div class="tree-children" style="display: ${isExpanded ? 'block' : 'none'};">
          ${innerChildren}
        </div>
      </div>
    `;
  }

  let rootKeysHtml = "";
  if (treeRoot.keys.length > 0) {
    const filteredRootKeys = isFiltered
      ? treeRoot.keys.filter(k => k.key.toLowerCase().includes(q) || (k.leafName && k.leafName.toLowerCase().includes(q)))
      : treeRoot.keys;
    if (filteredRootKeys.length > 0) {
      rootKeysHtml = `
        <div class="tree-root-keys-section">
          <div class="tree-root-keys-header" style="padding-left: 10px;">
            <span class="tree-root-keys-title">ROOT KEYS (NO DELIMITER)</span>
            <span class="tree-count-badge">${filteredRootKeys.length.toLocaleString()} ${filteredRootKeys.length === 1 ? 'key' : 'keys'}</span>
          </div>
          <div class="tree-root-keys-list">
            ${filteredRootKeys.map(k => renderTreeKeyRow(k, 0)).join("")}
          </div>
        </div>
      `;
    }
  }

  const allDelimChips = [
    ...STANDARD_CHIP_DELIMITERS,
    ...(state.customTreeDelimiters || []).filter(d => !STANDARD_CHIP_DELIMITERS.includes(d))
  ];

  const delimChipsHtml = allDelimChips.map(d => {
    const isActive = (state.activeTreeDelimiters || []).includes(d);
    const isCustom = !STANDARD_CHIP_DELIMITERS.includes(d);
    return `
      <span class="tree-delim-chip ${isActive ? 'active' : ''} ${isCustom ? 'custom' : ''}" data-delim="${escapeHtml(d)}" title="${isActive ? 'Click to disable' : 'Click to enable'} delimiter '${escapeHtml(d)}'">
        <span class="delim-char">${escapeHtml(d)}</span>
        ${isCustom ? `<button type="button" class="tree-delim-chip-remove" data-remove-delim="${escapeHtml(d)}" title="Remove custom delimiter">&times;</button>` : ''}
      </span>
    `;
  }).join("");

  container.innerHTML = `
    <div class="tree-view-wrapper">
      <div class="tree-toolbar">
        <div class="tree-toolbar-left">
          <div class="tree-delimiter-control">
            <label for="treeDelimiterSelect" class="tree-control-label">Delimiters:</label>
            <select id="treeDelimiterSelect" class="tree-select" title="Grouping delimiter convention">
              <option value="auto"${state.treeDelimiterPreset === "auto" ? " selected" : ""}>Auto (:, /, .)</option>
              <option value=":"${state.treeDelimiterPreset === ":" ? " selected" : ""}>: (Colon)</option>
              <option value="/"${state.treeDelimiterPreset === "/" ? " selected" : ""}>/ (Slash)</option>
              <option value="."${state.treeDelimiterPreset === "." ? " selected" : ""}>. (Dot)</option>
              <option value="-"${state.treeDelimiterPreset === "-" ? " selected" : ""}>- (Dash)</option>
              <option value="_"${state.treeDelimiterPreset === "_" ? " selected" : ""}>_ (Underscore)</option>
              <option value="custom"${state.treeDelimiterPreset === "custom" ? " selected" : ""}>Custom (${(state.activeTreeDelimiters || []).length} active)</option>
            </select>
            <div class="tree-delim-chips" id="treeDelimChips">
              ${delimChipsHtml}
            </div>
            <div class="tree-add-delim-wrapper">
              <button type="button" class="btn-add-delim-chip" id="btnAddDelimToggle" title="Add custom delimiter">
                <i data-lucide="plus" style="width: 10px; height: 10px;"></i>
                <span>Add</span>
              </button>
              <div class="tree-custom-delim-popover" id="treeCustomDelimPopover" style="display: none;">
                <input type="text" id="customDelimInput" class="custom-delim-input" placeholder="e.g. #, ::, |" maxlength="12" />
                <button type="button" class="btn-confirm-add-delim" id="btnConfirmAddDelim">Add</button>
                <button type="button" class="btn-cancel-add-delim" id="btnCancelAddDelim" title="Cancel">&times;</button>
              </div>
            </div>
          </div>
          <div class="tree-summary-pill" id="treeSummaryPill" title="${totalFolders.toLocaleString()} total namespaces parsed">
            ${totalFolders.toLocaleString()} ${totalFolders === 1 ? 'Namespace' : 'Namespaces'}
          </div>
        </div>
        <div class="tree-toolbar-right">
          <div class="tree-filter-box">
            <i data-lucide="search" style="width: 12px; height: 12px; color: var(--text-muted); flex-shrink: 0;"></i>
            <input type="text" id="treeFilterInput" class="tree-filter-input" placeholder="Filter loaded tree..." value="${escapeHtml(state.currentTreeFilterQuery)}">
            ${state.currentTreeFilterQuery ? `
              <button type="button" class="btn-clear-tree-filter" id="btnClearTreeFilter" title="Clear filter">
                <i data-lucide="x" style="width: 11px; height: 11px;"></i>
              </button>
            ` : ''}
          </div>
          <div class="tree-btn-group">
            <button type="button" class="btn btn-secondary tree-btn" id="btnExpandAllTree" title="Expand all namespace folders">
              <i data-lucide="folder-open" style="width: 12px; height: 12px;"></i>
              <span>Expand All</span>
            </button>
            <button type="button" class="btn btn-secondary tree-btn" id="btnCollapseAllTree" title="Collapse all namespace folders">
              <i data-lucide="folder" style="width: 12px; height: 12px;"></i>
              <span>Collapse All</span>
            </button>
          </div>
        </div>
      </div>
      <div class="tree-view-body" id="treeViewBody">
        ${[...treeRoot.folders.values()].map(f => renderFolderNode(f, 0)).join("")}
        ${rootKeysHtml}
      </div>
    </div>
  `;

  setupIcons();

  container.querySelectorAll(".tree-folder").forEach(folderEl => {
    folderEl.addEventListener("click", (e) => {
      if (e.target.closest(".tree-filter-prefix-btn")) return;
      const folderId = decodeURIComponent(folderEl.getAttribute("data-folder-id"));
      if (state.treeExpandedPaths.has(folderId)) {
        state.treeExpandedPaths.delete(folderId);
      } else {
        state.treeExpandedPaths.add(folderId);
      }
      renderKeysTreeView();
    });
  });

  container.querySelectorAll(".tree-filter-prefix-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const prefix = btn.getAttribute("data-prefix");
      const searchInput = document.getElementById("keySearchInput");
      if (searchInput && prefix) {
        searchInput.value = prefix + "*";
        state.currentPattern = prefix + "*";
        resetAndScan();
      }
    });
  });

  const delimSelect = document.getElementById("treeDelimiterSelect");
  if (delimSelect) {
    delimSelect.addEventListener("change", (e) => {
      const val = e.target.value;
      if (val === "custom") {
        state.treeDelimiterPreset = "custom";
      } else if (PRESET_DELIMITERS_MAP[val]) {
        state.activeTreeDelimiters = [...PRESET_DELIMITERS_MAP[val]];
        state.treeDelimiterPreset = val;
      }
      saveDelimitersForActiveConnection();
      state.treeExpandedPaths.clear();
      state.treeInitialized = false;
      renderKeysTreeView();
    });
  }

  container.querySelectorAll(".tree-delim-chip").forEach(chip => {
    chip.addEventListener("click", (e) => {
      if (e.target.closest(".tree-delim-chip-remove")) return;
      const d = chip.getAttribute("data-delim");
      if (!d) return;
      if (state.activeTreeDelimiters.includes(d)) {
        state.activeTreeDelimiters = state.activeTreeDelimiters.filter(x => x !== d);
      } else {
        state.activeTreeDelimiters.push(d);
      }
      state.treeDelimiterPreset = derivePresetFromDelimiters(state.activeTreeDelimiters);
      saveDelimitersForActiveConnection();
      state.treeExpandedPaths.clear();
      state.treeInitialized = false;
      renderKeysTreeView();
    });
  });

  container.querySelectorAll(".tree-delim-chip-remove").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const d = btn.getAttribute("data-remove-delim");
      if (!d) return;
      state.customTreeDelimiters = (state.customTreeDelimiters || []).filter(x => x !== d);
      state.activeTreeDelimiters = (state.activeTreeDelimiters || []).filter(x => x !== d);
      state.treeDelimiterPreset = derivePresetFromDelimiters(state.activeTreeDelimiters);
      saveDelimitersForActiveConnection();
      state.treeExpandedPaths.clear();
      state.treeInitialized = false;
      renderKeysTreeView();
    });
  });

  const btnAddToggle = document.getElementById("btnAddDelimToggle");
  const popover = document.getElementById("treeCustomDelimPopover");
  const customInput = document.getElementById("customDelimInput");
  const btnConfirmAdd = document.getElementById("btnConfirmAddDelim");
  const btnCancelAdd = document.getElementById("btnCancelAddDelim");

  if (btnAddToggle && popover) {
    btnAddToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isVisible = popover.style.display !== "none";
      popover.style.display = isVisible ? "none" : "flex";
      if (!isVisible && customInput) {
        customInput.value = "";
        customInput.focus();
      }
    });
  }

  function handleAddCustomDelimiter() {
    if (!customInput) return;
    const val = customInput.value.trim();
    if (!val) return;

    if (!state.customTreeDelimiters.includes(val) && !STANDARD_CHIP_DELIMITERS.includes(val)) {
      state.customTreeDelimiters.push(val);
    }
    if (!state.activeTreeDelimiters.includes(val)) {
      state.activeTreeDelimiters.push(val);
    }
    state.treeDelimiterPreset = derivePresetFromDelimiters(state.activeTreeDelimiters);
    saveDelimitersForActiveConnection();
    state.treeExpandedPaths.clear();
    state.treeInitialized = false;
    renderKeysTreeView();
  }

  if (btnConfirmAdd) {
    btnConfirmAdd.addEventListener("click", (e) => {
      e.stopPropagation();
      handleAddCustomDelimiter();
    });
  }

  if (customInput) {
    customInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleAddCustomDelimiter();
      } else if (e.key === "Escape") {
        if (popover) popover.style.display = "none";
      }
    });
  }

  if (btnCancelAdd) {
    btnCancelAdd.addEventListener("click", (e) => {
      e.stopPropagation();
      if (popover) popover.style.display = "none";
    });
  }

  const btnExpandAll = document.getElementById("btnExpandAllTree");
  if (btnExpandAll) {
    btnExpandAll.addEventListener("click", () => {
      function collectAll(node) {
        for (const f of node.folders.values()) {
          state.treeExpandedPaths.add(f.id);
          collectAll(f);
        }
      }
      collectAll(treeRoot);
      renderKeysTreeView();
    });
  }

  const btnCollapseAll = document.getElementById("btnCollapseAllTree");
  if (btnCollapseAll) {
    btnCollapseAll.addEventListener("click", () => {
      state.treeExpandedPaths.clear();
      renderKeysTreeView();
    });
  }

  const filterInput = document.getElementById("treeFilterInput");
  if (filterInput) {
    filterInput.addEventListener("input", (e) => {
      state.currentTreeFilterQuery = e.target.value;
      renderKeysTreeView();
      const inp = document.getElementById("treeFilterInput");
      if (inp) {
        inp.focus();
        inp.setSelectionRange(inp.value.length, inp.value.length);
      }
    });
  }

  const btnClearFilter = document.getElementById("btnClearTreeFilter");
  if (btnClearFilter) {
    btnClearFilter.addEventListener("click", () => {
      state.currentTreeFilterQuery = "";
      renderKeysTreeView();
    });
  }
}

export function renderKeysView() {
  if (state.currentViewMode === "tree") {
    renderKeysTreeView();
  } else {
    renderKeysFlatTable();
  }
}

export function renderKeysTable() {
  renderKeysView();
}

export function updateScanChunkLabel() {
  const label = document.getElementById("scanChunkLabel");
  if (label) label.textContent = `Safe SCAN (Chunk ${state.scanBatchSize.toLocaleString()})`;
}

export function updateScanUI() {
  const statusText = document.getElementById("scanStatusText");
  const btnScanNext = document.getElementById("btnScanNext");
  const shimmer = document.getElementById("keysLoadingShimmer");

  const isScanning = Boolean(state.isScanning);
  const isComplete = state.scanComplete;

  if (shimmer) {
    shimmer.classList.toggle("active", isScanning);
  }

  if (statusText) {
    statusText.innerHTML = `
      ${isScanning ? '<span style="color: var(--accent-primary); display: inline-flex; align-items: center; gap: 5px; margin-right: 6px;"><span class="spin" style="display: inline-block;">↻</span> Scanning chunk...</span>' : ''}
      Loaded <strong>${state.totalScanned.toLocaleString()}</strong> keys
      ${isComplete ? '<span style="color: var(--accent-success); margin-left: 6px;">(All Keys Loaded)</span>' : `<span style="color: var(--text-muted);">(${escapeHtml(describeScanProgress(state.currentCursor))})</span>`}
      | ${isClusterView() ? "Cluster Total" : "DB Total"}: <strong>${Number(state.dbTotalKeys || 0).toLocaleString()}</strong>
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

export function setupKeysEventListeners() {
  const container = document.getElementById("gridViewerContainer");
  if (container) {
    container.addEventListener("click", (e) => {
      const delBtn = e.target.closest(".btn-delete-key-table");
      if (delBtn) {
        e.stopPropagation();
        const k = decodeURIComponent(delBtn.getAttribute("data-key"));
        triggerDeleteConfirmation(k, () => {
          resetAndScan();
        });
        return;
      }
      const inspectKey = e.target.closest(".btn-inspect-key");
      if (inspectKey) {
        e.stopPropagation();
        const k = decodeURIComponent(inspectKey.getAttribute("data-key"));
        openKeyDetail(k);
        return;
      }
      const row = e.target.closest(".key-row");
      if (row) {
        const k = decodeURIComponent(row.getAttribute("data-key"));
        openKeyDetail(k);
        return;
      }
    });
  }
  const searchInput = document.getElementById("keySearchInput");
  let searchDebounce = null;
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      clearTimeout(searchDebounce);
      searchDebounce = setTimeout(() => {
        state.currentPattern = searchInput.value.trim() || "*";
        resetAutoRefreshTimer();
        resetAndScan();
      }, 500);
    });
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        clearTimeout(searchDebounce);
        state.currentPattern = searchInput.value.trim() || "*";
        resetAutoRefreshTimer();
        resetAndScan();
      }
    });
  }

  const typeFilterGroup = document.getElementById("typeFilterGroup");
  if (typeFilterGroup) {
    typeFilterGroup.addEventListener("click", (e) => {
      const btn = e.target.closest(".type-tab");
      if (btn && btn.dataset.type) {
        typeFilterGroup.querySelectorAll(".type-tab").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.currentType = btn.dataset.type;
        resetAutoRefreshTimer();
        resetAndScan();
      }
    });
  }

  const ttlFilterSelect = document.getElementById("ttlFilterSelect");
  if (ttlFilterSelect) {
    ttlFilterSelect.addEventListener("change", (e) => {
      state.currentTtlFilter = e.target.value;
      renderKeysView();
    });
  }

  const btnScanNext = document.getElementById("btnScanNext");
  if (btnScanNext) btnScanNext.addEventListener("click", () => scanNextBatch());

  const btnResetScan = document.getElementById("btnResetScan");
  if (btnResetScan) btnResetScan.addEventListener("click", () => {
    resetAutoRefreshTimer();
    resetAndScan();
  });

  const scanBatchSelect = document.getElementById("scanBatchSizeSelect");
  if (scanBatchSelect) {
    scanBatchSelect.addEventListener("change", (e) => {
      state.scanBatchSize = parseInt(e.target.value, 10) || 50;
      updateScanChunkLabel();
    });
  }

  const btnViewTable = document.getElementById("btnViewTable");
  const btnViewTree = document.getElementById("btnViewTree");

  if (btnViewTable) {
    btnViewTable.addEventListener("click", () => {
      if (state.currentViewMode !== "table") {
        state.currentViewMode = "table";
        localStorage.setItem("redis_insight_view_mode", "table");
        btnViewTable.classList.add("active");
        if (btnViewTree) btnViewTree.classList.remove("active");
        renderKeysView();
      }
    });
  }

  if (btnViewTree) {
    btnViewTree.addEventListener("click", () => {
      if (state.currentViewMode !== "tree") {
        state.currentViewMode = "tree";
        localStorage.setItem("redis_insight_view_mode", "tree");
        btnViewTree.classList.add("active");
        if (btnViewTable) btnViewTable.classList.remove("active");
        renderKeysView();
      }
    });
  }

  const btnToggleAutoRefresh = document.getElementById("btnToggleAutoRefresh");
  if (btnToggleAutoRefresh) {
    btnToggleAutoRefresh.addEventListener("click", () => {
      toggleAutoRefresh();
    });
  }

  const autoRefreshIntervalSelect = document.getElementById("autoRefreshIntervalSelect");
  if (autoRefreshIntervalSelect) {
    autoRefreshIntervalSelect.addEventListener("change", (e) => {
      const sec = parseInt(e.target.value, 10);
      if (!isNaN(sec) && sec >= 5) {
        state.autoRefreshIntervalSec = sec;
        localStorage.setItem("redis_insight_auto_refresh_sec", String(sec));
        resetAutoRefreshTimer();
      }
    });
  }

  updateAutoRefreshUI();
}
