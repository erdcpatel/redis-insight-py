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

export function getDelimiterForKey(key, delimiterPreference = "auto") {
  if (!key) return null;
  if (delimiterPreference && delimiterPreference !== "auto") {
    return key.includes(delimiterPreference) ? delimiterPreference : null;
  }
  if (key.includes(":")) return ":";
  if (key.includes("/")) return "/";
  if (key.includes(".")) return ".";
  if (key.includes("-")) return "-";
  return null;
}

export function buildNamespaceTree(rows, delimiterPreference = "auto") {
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

  for (const row of rows) {
    const key = row.key || "";
    const delim = getDelimiterForKey(key, delimiterPreference);

    if (!delim) {
      root.keys.push({ ...row, leafName: key });
      continue;
    }

    const rawParts = key.split(delim);
    let parts = rawParts;
    if (parts.length > 1 && parts[parts.length - 1] === "") {
      parts = parts.slice(0, -1);
    }

    if (parts.length <= 1) {
      root.keys.push({ ...row, leafName: key });
      continue;
    }

    let currentNode = root;
    let currentPrefix = "";

    for (let i = 0; i < parts.length - 1; i++) {
      const seg = parts[i];
      currentPrefix += (i > 0 ? delim : "") + seg;
      const fullFolderPrefix = currentPrefix + delim;

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

    const leafName = parts[parts.length - 1] || "(empty)";
    currentNode.keys.push({ ...row, leafName });
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

export function renderKeysFlatTable() {
  const container = document.getElementById("gridViewerContainer");
  if (!container) return;
  if (state.keysTableRows.length === 0) {
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
  container.innerHTML = `
    <div style="overflow-y: auto; height: 100%; width: 100%; padding: 0.5rem;">
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
        <tbody>
          ${state.keysTableRows.map(r => `
            <tr class="key-row" data-key="${encodeURIComponent(r.key)}" style="border-bottom: 1px solid rgba(255,255,255,0.04); cursor: pointer;">
              <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500;">
                <span class="btn-inspect-key" data-key="${encodeURIComponent(r.key)}">${escapeHtml(r.key)}</span>
              </td>
              <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase;">
                <span class="badge-db">${r.type}</span>
              </td>
              <td style="padding: 0.65rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-secondary);">${r.ttl_seconds}</td>
              <td style="padding: 0.65rem 1rem; font-size: 0.8rem; color: ${r.ttl_seconds === -1 ? 'var(--text-muted)' : 'var(--accent-warning)'};">${r.status}</td>
              <td style="padding: 0.65rem 1rem; text-align: right;" onclick="event.stopPropagation()">
                ${state.lastStatus?.read_only ? `
                  <span title="Read-Only Mode: Deletion locked" style="color: var(--text-muted); opacity: 0.45; display: inline-flex; align-items: center; padding: 4px;">
                    <i data-lucide="lock" style="width: 13px; height: 13px;"></i>
                  </span>
                ` : `
                  <button type="button" class="btn-icon danger btn-delete-key-table" data-key="${encodeURIComponent(r.key)}" title="Delete key">
                    <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                  </button>
                `}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;

  setupIcons();

  container.querySelectorAll(".key-row").forEach(row => {
    row.addEventListener("click", () => {
      const k = decodeURIComponent(row.getAttribute("data-key"));
      openKeyDetail(k);
    });
  });

  container.querySelectorAll(".btn-delete-key-table").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const k = decodeURIComponent(btn.getAttribute("data-key"));
      triggerDeleteConfirmation(k, () => {
        resetAndScan();
      });
    });
  });
}

export function renderKeysTreeView() {
  const container = document.getElementById("gridViewerContainer");
  if (!container) return;
  if (state.keysTableRows.length === 0) {
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

  const treeRoot = buildNamespaceTree(state.keysTableRows, state.currentTreeDelimiter);

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
          <span class="tree-key-ttl" title="TTL in seconds">${r.ttl_seconds}s</span>
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

  container.innerHTML = `
    <div class="tree-view-wrapper">
      <div class="tree-toolbar">
        <div class="tree-toolbar-left">
          <div class="tree-delimiter-control">
            <label for="treeDelimiterSelect" class="tree-control-label">Delimiter:</label>
            <select id="treeDelimiterSelect" class="tree-select" title="Grouping delimiter convention">
              <option value="auto"${state.currentTreeDelimiter === "auto" ? " selected" : ""}>Auto (:, /, .)</option>
              <option value=":"${state.currentTreeDelimiter === ":" ? " selected" : ""}>: (Colon)</option>
              <option value="/"${state.currentTreeDelimiter === "/" ? " selected" : ""}>/ (Slash)</option>
              <option value="."${state.currentTreeDelimiter === "." ? " selected" : ""}>. (Dot)</option>
              <option value="-"${state.currentTreeDelimiter === "-" ? " selected" : ""}>- (Dash)</option>
            </select>
          </div>
          <div class="tree-summary-pill" id="treeSummaryPill">
            ${totalFolders.toLocaleString()} ${totalFolders === 1 ? 'Namespace' : 'Namespaces'} &bull; ${state.keysTableRows.length.toLocaleString()} ${state.keysTableRows.length === 1 ? 'Key' : 'Keys'}
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

  container.querySelectorAll(".tree-leaf").forEach(row => {
    row.addEventListener("click", () => {
      const k = decodeURIComponent(row.getAttribute("data-key"));
      openKeyDetail(k);
    });
  });

  container.querySelectorAll(".btn-delete-key-table").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const k = decodeURIComponent(btn.getAttribute("data-key"));
      triggerDeleteConfirmation(k, () => {
        resetAndScan();
      });
    });
  });

  const delimSelect = document.getElementById("treeDelimiterSelect");
  if (delimSelect) {
    delimSelect.addEventListener("change", (e) => {
      state.currentTreeDelimiter = e.target.value;
      localStorage.setItem("redis_insight_tree_delimiter", state.currentTreeDelimiter);
      state.treeExpandedPaths.clear();
      state.treeInitialized = false;
      renderKeysTreeView();
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

  const isComplete = state.scanComplete;

  if (statusText) {
    statusText.innerHTML = `
      Loaded <strong>${state.totalScanned.toLocaleString()}</strong> keys
      ${isComplete ? '<span style="color: var(--accent-success); margin-left: 6px;">(All Keys Loaded)</span>' : `<span style="color: var(--text-muted);">(${escapeHtml(describeScanProgress(state.currentCursor))})</span>`}
      | ${isClusterView() ? "Cluster Total" : "DB Total"}: <strong>${Number(state.dbTotalKeys || 0).toLocaleString()}</strong>
    `;
  }

  if (btnScanNext) {
    btnScanNext.disabled = state.isScanning || isComplete;
    btnScanNext.innerHTML = state.isScanning
      ? `<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Loading...`
      : isComplete
      ? `<i data-lucide="check-circle-2" style="width: 13px; height: 13px;"></i> All Keys Loaded`
      : `<i data-lucide="arrow-down-circle" style="width: 13px; height: 13px;"></i> Load More`;
    setupIcons();
  }
}

export function setupKeysEventListeners() {
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
