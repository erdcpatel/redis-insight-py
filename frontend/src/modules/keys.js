import { state, escapeHtml } from "./state.js";
import { setupIcons } from "./icons.js";
import { openKeyDetail } from "./inspector.js";
import { triggerDeleteConfirmation } from "./actions.js";
import {
  saveKeyspaceSnapshot,
  getKeyspaceSnapshot,
  clearKeyspaceSnapshot
} from "./db-cache.js";
import {
  initNamespaceHygieneModal,
  openNamespaceHygieneStudio
} from "./namespace-hygiene.js";

let keysWorker = null;
try {
  keysWorker = new Worker(new URL("./keys-worker.js", import.meta.url), { type: "module" });
} catch (err) {
  console.warn("Keys Web Worker fallback to main thread:", err);
}

export function getKeysWorker() {
  return keysWorker;
}

export function updateCacheStatusUI(cachedData = null) {
  const pill = document.getElementById("keysCacheStatusPill");
  if (!pill) return;

  if (!cachedData || !cachedData.keys || cachedData.keys.length === 0) {
    pill.style.display = "none";
    pill.innerHTML = "";
    return;
  }

  const count = cachedData.keys.length;

  pill.style.display = "inline-flex";
  pill.innerHTML = `
    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
    <span>Cached (${count.toLocaleString()})</span>
    <span class="cache-clear-link" id="btnClearCacheSnapshot" title="Clear IndexedDB cache snapshot">Clear</span>
  `;
}

export async function resetAndScan(forceRefresh = false) {
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
  state.isMemoryCeilingReached = false;

  const limitBanner = document.getElementById("memoryLimitBanner");
  if (limitBanner) limitBanner.style.display = "none";

  const emptyEl = document.getElementById("emptyWorkspaceState");
  const gridContainer = document.getElementById("gridViewerContainer");
  if (emptyEl) emptyEl.style.display = "none";
  if (gridContainer) gridContainer.style.display = "block";

  // Phase 4: Instant restoration from IndexedDB cache if not explicit Refresh and searching default pattern in local mode
  if (!forceRefresh && state.searchScope === "local" && (!state.currentPattern || state.currentPattern === "*")) {
    const activeConnId = getActiveConnectionId();
    if (activeConnId) {
      try {
        const cached = await getKeyspaceSnapshot(activeConnId, state.lastStatus?.db || 0);
        if (cached && Array.isArray(cached.keys) && cached.keys.length > 0) {
          state.keysTableRows = cached.keys;
          state.loadedKeysSet = new Set(cached.keys.map(k => k.key));
          state.dbTotalKeys = cached.totalInDb || cached.keys.length;
          state.currentCursor = cached.cursor || 0;
          state.totalScanned = state.keysTableRows.length;
          state.scanComplete = isScanCursorComplete(state.currentCursor);

          renderKeysTable();
          updateScanUI();
          updateCacheStatusUI(cached);
          return;
        }
      } catch (err) {
        console.warn("Keyspace cache restoration bypassed:", err);
      }
    }
  }

  updateCacheStatusUI(null);
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
      return `${pending}/${values.length} nodes scanning`;
    } catch {
      return "";
    }
  }
  return "";
}

export function isClusterView() {
  return Boolean(state.lastStatus && state.lastStatus.is_cluster) || String(state.currentCursor ?? "").trim().startsWith("{");
}

export async function scanNextBatch(expectedEpoch = null) {
  if (state.isScanning) return;
  if (state.scanComplete) return;

  const ceiling = state.maxLoadedKeysLimit || 100000;
  if (state.keysTableRows.length >= ceiling) {
    state.isMemoryCeilingReached = true;
    updateScanUI();
    return;
  }

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

    const remainingCapacity = Math.max(0, ceiling - state.keysTableRows.length);
    const newKeys = (data.keys || []).filter(k => {
      if (state.loadedKeysSet.has(k.name)) return false;
      state.loadedKeysSet.add(k.name);
      return true;
    }).slice(0, remainingCapacity);

    const rows = newKeys.map(k => ({
      key: k.name,
      type: k.type,
      ttl_seconds: k.ttl,
      status: k.ttl === -1 ? "Persistent" : k.ttl === -2 ? "Expired" : `Expires in ${k.ttl}s`
    }));

    if (rows.length > 0) {
      state.keysTableRows.push(...rows);
      const activeConnId = getActiveConnectionId();
      if (activeConnId) {
        saveKeyspaceSnapshot(activeConnId, state.lastStatus?.db || 0, {
          keys: state.keysTableRows,
          totalInDb: state.dbTotalKeys,
          cursor: state.currentCursor,
          pattern: state.currentPattern
        }).then(() => {
          updateCacheStatusUI({
            keys: state.keysTableRows,
            timestamp: Date.now()
          });
        }).catch(() => {});
      }
    }

    if (state.keysTableRows.length >= ceiling) {
      state.isMemoryCeilingReached = true;
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

export function globToRegex(glob, flags = "i") {
  let reStr = "^";
  for (let i = 0; i < glob.length; i++) {
    const c = glob[i];
    if (c === "*") {
      reStr += ".*";
    } else if (c === "?") {
      reStr += ".";
    } else if (/[.\\+*?[^\]$(){}=!<>|:-]/.test(c)) {
      reStr += "\\" + c;
    } else {
      reStr += c;
    }
  }
  reStr += "$";
  return new RegExp(reStr, flags);
}

export function createKeyMatcher(query) {
  const q = (query || "").trim();
  if (!q || q === "*") return () => true;

  // 1. Literal regex format /pattern/flags (e.g. /^users:[0-9]+/i)
  if (q.startsWith("/") && q.lastIndexOf("/") > 0) {
    try {
      const lastSlash = q.lastIndexOf("/");
      const pattern = q.slice(1, lastSlash);
      const flags = q.slice(lastSlash + 1) || "i";
      const re = new RegExp(pattern, flags);
      return (k) => re.test(k);
    } catch (_) {}
  }

  // 2. Glob pattern with * or ?
  if (q.includes("*") || q.includes("?")) {
    try {
      const re = globToRegex(q, "i");
      return (k) => re.test(k);
    } catch (_) {}
  }

  // 3. User typed an unquoted regex with syntax characters (^, $, \d, etc.)
  if (/[\^$|()\\[\\]{}]/.test(q)) {
    try {
      const re = new RegExp(q, "i");
      return (k) => re.test(k);
    } catch (_) {}
  }

  // 4. Default: Fast case-insensitive substring match
  const lowerQ = q.toLowerCase();
  return (k) => k.toLowerCase().includes(lowerQ);
}

export function getFilteredKeysRows() {
  const t0 = performance.now();
  let rows = state.keysTableRows || [];

  // 1. Filter by In-Memory Local Query (Regex, Glob, or Substring)
  const q = (state.localFilterQuery || "").trim();
  if (q && q !== "*") {
    const matcher = createKeyMatcher(q);
    rows = rows.filter(r => matcher(r.key));
  }

  // 2. Filter by Redis Type Tab (Strings, Hashes, Lists, Sets, ZSets, JSON)
  if (state.currentType && state.currentType !== "all") {
    const targetType = state.currentType.toLowerCase();
    rows = rows.filter(r => (r.type || "").toLowerCase() === targetType);
  }

  // 3. Filter by TTL Expiration
  const filter = (state.currentTtlFilter || "all").toLowerCase();
  if (filter === "expiring") {
    rows = rows.filter(r => r.ttl_seconds > 0);
  } else if (filter === "persistent" || filter === "no-ttl") {
    rows = rows.filter(r => r.ttl_seconds === -1);
  }

  const duration = (performance.now() - t0).toFixed(1);
  state.localMatchCount = rows.length;
  state.localMatchDurationMs = duration;

  return rows;
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

  const ttlExpirationHtml = r.ttl_seconds === -1
    ? `<span class="badge-persistent" style="background: rgba(148, 163, 184, 0.12); color: #94a3b8; border: 1px solid rgba(148, 163, 184, 0.25); padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.72rem; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;">
         <span style="font-size: 0.82rem;">∞</span> Persistent
       </span>`
    : `<span class="badge-expiring" style="background: rgba(245, 158, 11, 0.12); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.25); padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.72rem; font-weight: 600; display: inline-flex; align-items: center; gap: 4px;">
         <span>⏳</span> ${r.ttl_seconds}s
       </span>`;

  return `
    <tr class="key-row" data-key="${encodedKey}" style="border-bottom: 1px solid rgba(255,255,255,0.04); cursor: pointer; height: ${VIRTUAL_ROW_HEIGHT}px;">
      <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 380px;">
        <span class="btn-inspect-key" data-key="${encodedKey}" title="${escapeHtml(r.key)}">${escapeHtml(r.key)}</span>
      </td>
      <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase;">
        <span class="badge-db">${escapeHtml(r.type)}</span>
      </td>
      <td style="padding: 0.65rem 1rem; font-size: 0.8rem;">
        ${ttlExpirationHtml}
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
      const q = (state.localFilterQuery || "").trim();
      if (q && q !== "*") {
        container.innerHTML = `
          <div style="padding: 3.5rem 1.5rem; text-align: center; color: var(--text-muted);">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 46px; height: 46px; border-radius: 50%; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); margin-bottom: 0.85rem;">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--accent-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            </div>
            <div style="font-weight: 600; color: var(--text-primary); font-size: 0.95rem; margin-bottom: 0.35rem;">
              No loaded keys match "<code>${escapeHtml(q)}</code>"
            </div>
            <p style="font-size: 0.8rem; color: var(--text-muted); max-width: 480px; margin: 0 auto 1.25rem; line-height: 1.5;">
              Searched across all <strong>${state.keysTableRows.length.toLocaleString()}</strong> keys currently loaded in browser memory.
              The key may exist in the Redis cluster but has not been loaded yet.
            </p>
            <button type="button" class="btn btn-primary" id="btnFallbackRemoteScan" style="padding: 0.45rem 1.15rem; font-size: 0.82rem;">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 5px;"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              <span>Scan Redis Cluster for "${escapeHtml(q)}"</span>
            </button>
          </div>
        `;
        const btnFallback = document.getElementById("btnFallbackRemoteScan");
        if (btnFallback) {
          btnFallback.addEventListener("click", () => {
            state.searchScope = "remote";
            state.currentPattern = q.includes("*") ? q : `${q}*`;
            const searchInput = document.getElementById("keySearchInput");
            if (searchInput) searchInput.value = state.currentPattern;
            resetAndScan(true);
          });
        }
        return;
      }

      container.innerHTML = `
        <div style="padding: 3rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No keys match TTL filter "<strong>${escapeHtml(state.currentTtlFilter)}</strong>" or Type filter "<strong>${escapeHtml(state.currentType)}</strong>".<br>
          <span style="font-size: 0.78rem; opacity: 0.75; margin-top: 0.35rem; display: inline-block;">(${state.keysTableRows.length.toLocaleString()} total keys loaded in browser memory)</span>
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
              <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: left;">TTL / EXPIRATION</th>
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
      <div class="virtual-scroll-spacer" style="height: ${totalHeight}px; width: 100%; pointer-events: none;"></div>
      <div class="virtual-scroll-content" id="virtualScrollContent" style="position: absolute; top: 0px; left: 0; right: 0; visibility: visible; pointer-events: auto;">
        <table class="data-table" style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: left;">KEY (CLICK TO VIEW)</th>
              <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: left;">TYPE</th>
              <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: left;">TTL / EXPIRATION</th>
              <th style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-align: right;">ACTION</th>
            </tr>
          </thead>
          <tbody id="keysTableBody">
            ${rowsToDisplay.slice(0, initialEnd).map(renderTableRowHtml).join("")}
          </tbody>
        </table>
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
            ? `<span class="badge-persistent" style="margin-left: 0.35rem; font-size: 0.65rem; padding: 0.08rem 0.35rem; border-radius: 4px; background: rgba(148, 163, 184, 0.12); color: #94a3b8; border: 1px solid rgba(148, 163, 184, 0.25); font-weight: 500;">∞ Persistent</span>`
            : `<span class="tree-key-ttl" style="margin-left: 0.35rem; background: rgba(245, 158, 11, 0.12); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 4px; padding: 0.08rem 0.35rem; font-size: 0.65rem; font-weight: 600;" title="Expires in ${r.ttl_seconds}s">⏳ ${r.ttl_seconds}s</span>`
          }
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

export function updateSearchScopeUI() {
  const scopeLocal = document.getElementById("scopeBtnLocal");
  const scopeRemote = document.getElementById("scopeBtnRemote");
  const searchInput = document.getElementById("keySearchInput");
  const matchBadge = document.getElementById("searchMatchCountBadge");
  const clearBtn = document.getElementById("btnClearSearchQuery");

  const isLocal = state.searchScope === "local";

  if (scopeLocal) scopeLocal.classList.toggle("active", isLocal);
  if (scopeRemote) scopeRemote.classList.toggle("active", !isLocal);

  if (searchInput) {
    if (isLocal) {
      searchInput.placeholder = "Filter loaded keys by regex, glob (*), or text (instant)...";
      searchInput.title = "Instant in-memory filter across loaded keys (~5ms). Press Enter or click Cluster SCAN to query Redis.";
    } else {
      searchInput.placeholder = "Scan Redis cluster by pattern (e.g. *, users:*, order:*) - Press Enter";
      searchInput.title = "Query Redis Cluster directly with pattern. Clears local cache and scans Redis.";
    }
  }

  if (clearBtn) {
    const val = searchInput ? searchInput.value.trim() : "";
    clearBtn.style.display = (val && val !== "*") ? "inline-flex" : "none";
  }

  if (matchBadge) {
    const totalLoaded = state.keysTableRows.length;
    if (totalLoaded > 0 && isLocal) {
      const q = (state.localFilterQuery || "").trim();
      if (q && q !== "*") {
        matchBadge.textContent = `${state.localMatchCount.toLocaleString()} / ${totalLoaded.toLocaleString()} (${state.localMatchDurationMs}ms)`;
        matchBadge.title = `Filtered ${state.localMatchCount.toLocaleString()} of ${totalLoaded.toLocaleString()} loaded keys in ${state.localMatchDurationMs}ms`;
      } else {
        matchBadge.textContent = `${totalLoaded.toLocaleString()} loaded`;
        matchBadge.title = `${totalLoaded.toLocaleString()} keys loaded in browser memory`;
      }
      matchBadge.style.display = "inline-flex";
    } else {
      matchBadge.style.display = "none";
    }
  }
}

export function updateMemoryLimitBanner() {
  const banner = document.getElementById("memoryLimitBanner");
  if (!banner) return;

  const total = state.keysTableRows.length;
  const ceiling = state.maxLoadedKeysLimit || 100000;

  if (total >= ceiling) {
    state.isMemoryCeilingReached = true;
    const nextCeiling = ceiling + 100000;
    banner.innerHTML = `
      <div class="memory-limit-left">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        <span>
          <strong>Memory Safety Ceiling Reached:</strong>
          <strong>${total.toLocaleString()}</strong> keys loaded in browser memory. Further key accumulation paused to preserve 60fps rendering and prevent browser crashes.
        </span>
      </div>
      <div class="memory-limit-actions">
        <button type="button" class="btn btn-secondary btn-sm" id="btnRaiseMemoryCeiling" style="font-size: 0.72rem; padding: 0.25rem 0.6rem; color: #fbbf24; border-color: rgba(245, 158, 11, 0.4); white-space: nowrap;">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
          <span>Raise Ceiling (${nextCeiling.toLocaleString()})</span>
        </button>
      </div>
    `;
    banner.style.display = "flex";

    const btnRaise = document.getElementById("btnRaiseMemoryCeiling");
    if (btnRaise) {
      btnRaise.addEventListener("click", () => {
        state.maxLoadedKeysLimit = nextCeiling;
        state.isMemoryCeilingReached = false;
        banner.style.display = "none";
        updateScanUI();
      });
    }
  } else {
    state.isMemoryCeilingReached = false;
    banner.style.display = "none";
  }
}

export function updateScanUI() {
  const statusText = document.getElementById("scanStatusText");
  const btnScanNext = document.getElementById("btnScanNext");
  const shimmer = document.getElementById("keysLoadingShimmer");

  const isScanning = Boolean(state.isScanning);
  const isComplete = state.scanComplete;
  const isCeilingReached = state.isMemoryCeilingReached || state.keysTableRows.length >= (state.maxLoadedKeysLimit || 100000);

  if (shimmer) {
    shimmer.classList.toggle("active", isScanning);
  }

  if (statusText) {
    statusText.innerHTML = `
      ${isScanning ? '<span style="color: var(--accent-primary); display: inline-flex; align-items: center; gap: 5px; margin-right: 6px;"><span class="spin" style="display: inline-block;">↻</span> Scanning chunk...</span>' : ''}
      Loaded <strong>${state.totalScanned.toLocaleString()}</strong> keys
      ${isCeilingReached ? '<span style="color: #fbbf24; margin-left: 6px; font-weight: 500;">(Ceiling Reached)</span>' : isComplete ? '<span style="color: var(--text-muted); margin-left: 6px; font-weight: 400;">(All Keys Loaded)</span>' : describeScanProgress(state.currentCursor) ? `<span style="color: var(--text-muted); margin-left: 4px;">(${escapeHtml(describeScanProgress(state.currentCursor))})</span>` : ""}
      | ${isClusterView() ? "Cluster Total" : "DB Total"}: <strong>${Number(state.dbTotalKeys || 0).toLocaleString()}</strong>
    `;
  }

  if (btnScanNext) {
    if (isCeilingReached) {
      btnScanNext.disabled = true;
      btnScanNext.style.display = "inline-flex";
      btnScanNext.style.opacity = "0.75";
      btnScanNext.innerHTML = `<i data-lucide="shield-alert" style="width: 13px; height: 13px; color: #fbbf24;"></i> Memory Ceiling (${state.maxLoadedKeysLimit.toLocaleString()})`;
    } else {
      btnScanNext.disabled = isScanning || isComplete;
      btnScanNext.style.opacity = "";
      btnScanNext.style.display = isComplete ? "none" : "inline-flex";
      btnScanNext.innerHTML = isScanning
        ? `<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Loading...`
        : `<i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i> Load More`;
    }
    setupIcons();
  }

  updateMemoryLimitBanner();
  updateSearchScopeUI();
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
      const val = searchInput.value;
      const clearBtn = document.getElementById("btnClearSearchQuery");
      if (clearBtn) clearBtn.style.display = (val.trim() && val.trim() !== "*") ? "inline-flex" : "none";

      if (state.searchScope === "local") {
        state.localFilterQuery = val.trim();
        renderKeysView();
        updateSearchScopeUI();
      } else {
        clearTimeout(searchDebounce);
        searchDebounce = setTimeout(() => {
          state.currentPattern = val.trim() || "*";
        }, 300);
      }
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        clearTimeout(searchDebounce);
        const val = searchInput.value.trim() || "*";
        state.localFilterQuery = val;

        const matcher = createKeyMatcher(val);
        const matchedLocally = val === "*"
          ? (state.keysTableRows || []).length
          : (state.keysTableRows || []).filter(r => matcher(r.key)).length;

        if (state.searchScope === "remote" || e.shiftKey || state.keysTableRows.length === 0 || (state.searchScope === "local" && matchedLocally === 0)) {
          state.currentPattern = val;
          resetAutoRefreshTimer();
          resetAndScan();
        } else {
          renderKeysView();
          updateSearchScopeUI();
        }
      }
    });
  }

  const scopeBtnLocal = document.getElementById("scopeBtnLocal");
  const scopeBtnRemote = document.getElementById("scopeBtnRemote");

  if (scopeBtnLocal) {
    scopeBtnLocal.addEventListener("click", () => {
      state.searchScope = "local";
      const inp = document.getElementById("keySearchInput");
      if (inp) state.localFilterQuery = inp.value.trim();
      renderKeysView();
      updateSearchScopeUI();
    });
  }

  if (scopeBtnRemote) {
    scopeBtnRemote.addEventListener("click", () => {
      state.searchScope = "remote";
      const inp = document.getElementById("keySearchInput");
      if (inp) state.currentPattern = inp.value.trim() || "*";
      updateSearchScopeUI();
    });
  }

  const btnClearSearch = document.getElementById("btnClearSearchQuery");
  if (btnClearSearch) {
    btnClearSearch.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "*";
        state.localFilterQuery = "*";
        if (state.searchScope === "remote") {
          state.currentPattern = "*";
        }
        renderKeysView();
        updateSearchScopeUI();
        searchInput.focus();
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
        if (state.searchScope === "local" && state.keysTableRows.length > 0) {
          renderKeysView();
          updateSearchScopeUI();
        } else {
          resetAutoRefreshTimer();
          resetAndScan();
        }
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
    resetAndScan(true);
  });

  // Phase 3: Namespace Distribution & Key Hygiene Studio
  initNamespaceHygieneModal(keysWorker);

  const btnOpenNsModal = document.getElementById("btnOpenNamespaceModal");
  if (btnOpenNsModal) {
    btnOpenNsModal.addEventListener("click", () => {
      openNamespaceHygieneStudio(keysWorker);
    });
  }

  // Phase 4: Clear IndexedDB cache snapshot on user click
  document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "btnClearCacheSnapshot") {
      const activeConnId = getActiveConnectionId();
      if (activeConnId) {
        clearKeyspaceSnapshot(activeConnId, state.lastStatus?.db || 0).then(() => {
          updateCacheStatusUI(null);
        });
      }
    }
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
