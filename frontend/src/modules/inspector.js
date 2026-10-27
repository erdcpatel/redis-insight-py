import { state, escapeHtml, HASH_FIELDS_PAGE_SIZE } from "./state.js";
import { setupIcons } from "./icons.js";
import { showToast, copyToClipboard } from "./toast.js";
import { showConfirmDialog, showPromptDialog, showAddHashFieldDialog } from "./dialog.js";

let onDeleteKey = null;
let onKeyDeleted = null;

export function triggerButtonFeedback(btn, newText = "Copied!", durationMs = 1500) {
  if (!btn) return;
  const originalHtml = btn.innerHTML;
  btn.classList.add("btn-copy-feedback", "copied");
  btn.innerHTML = `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 4px;"><polyline points="20 6 9 17 4 12"></polyline></svg>${newText}`;
  setTimeout(() => {
    btn.classList.remove("copied");
    btn.innerHTML = originalHtml;
  }, durationMs);
}

export function registerInspectorDeleteKey(deleteFn) {
  onDeleteKey = deleteFn;
}

export function registerInspectorKeyDeleted(fn) {
  onKeyDeleted = fn;
}

export async function openKeyDetail(keyName) {
  state.activeDetailKey = keyName;
  const modal = document.getElementById("keyDetailModal");
  const titleEl = document.getElementById("detailKeyTitle");
  const metaEl = document.getElementById("detailHeaderMeta");
  const bodyEl = document.getElementById("detailBodyContent");

  const btnDeleteDetail = document.getElementById("btnDeleteKeyFromDetail");
  if (btnDeleteDetail) {
    btnDeleteDetail.style.display = state.lastStatus?.read_only ? "none" : "";
  }

  if (titleEl) {
    titleEl.textContent = keyName;
    titleEl.title = keyName;
  }
  if (metaEl) metaEl.innerHTML = `<span style="color: var(--text-muted);">Loading key details...</span>`;
  if (bodyEl) bodyEl.innerHTML = `<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Fetching value from Redis...</div>`;
  if (modal) modal.classList.add("active");

  try {
    let res = await fetch(`/api/keys/detail?key=${encodeURIComponent(keyName)}`);
    if (!res.ok) {
      res = await fetch(`/api/keys/${encodeURIComponent(keyName)}/detail`);
    }

    if (!res.ok) {
      let errMsg = "Key not found or could not be read";
      try {
        const errJson = await res.json();
        if (errJson && errJson.detail) errMsg = errJson.detail;
      } catch (e) {}
      throw new Error(errMsg);
    }
    const data = await res.json();
    state.activeDetailData = data;

    renderKeyDetailMeta(data);
    renderKeyDetailValue(data);
  } catch (err) {
    if (metaEl) metaEl.innerHTML = `<span style="color: var(--accent-danger);">Error</span>`;
    if (bodyEl) {
      bodyEl.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem;"></i>
          <h4>Failed to inspect key</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">${escapeHtml(err.message)}</p>
        </div>
      `;
      setupIcons();
    }
  }
}

export function closeKeyDetail() {
  const modal = document.getElementById("keyDetailModal");
  if (modal) modal.classList.remove("active");
}

export function renderKeyDetailMeta(data) {
  const metaEl = document.getElementById("detailHeaderMeta");
  if (!metaEl) return;

  const memFormatted = data.memory_bytes ? (data.memory_bytes > 1024 ? `${(data.memory_bytes / 1024).toFixed(1)} KB` : `${data.memory_bytes} B`) : "N/A";
  const ttlText = data.ttl === -1 ? "No expiration" : data.ttl === -2 ? "Expired" : `${data.ttl}s`;

  metaEl.innerHTML = `
    <div style="display: flex; align-items: center; gap: 0.4rem;">
      <span style="color: var(--text-muted);">Type:</span>
      <span class="badge-db" style="color: var(--accent-primary); font-weight: 600;">${data.type.toUpperCase()}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 0.4rem;">
      <span style="color: var(--text-muted);">Size:</span>
      <span style="font-family: var(--font-mono);">${data.length} items / ${memFormatted}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 0.4rem;">
      <span style="color: var(--text-muted);">Encoding:</span>
      <span style="font-family: var(--font-mono);">${data.encoding}</span>
    </div>
    ${data.slot !== undefined && data.slot !== null ? `
      <div style="display: flex; align-items: center; gap: 0.35rem;" title="Cluster Hash Slot: slot ${data.slot} of 16384">
        <span style="color: var(--text-muted);">Slot:</span>
        <span class="badge-db" style="color: #c084fc; font-family: var(--font-mono); font-weight: 600;">#${data.slot}</span>
      </div>
    ` : ''}
    ${data.node ? `
      <div style="display: flex; align-items: center; gap: 0.35rem;" title="Owning Cluster Node">
        <span style="color: var(--text-muted);">Node:</span>
        <span class="badge-db" style="color: #38bdf8; font-family: var(--font-mono); font-size: 0.72rem;">${escapeHtml(data.node)}</span>
      </div>
    ` : ''}
    <div style="display: flex; align-items: center; gap: 0.4rem; margin-left: auto;">
      <i data-lucide="clock" style="width: 13px; height: 13px; color: ${data.ttl === -1 ? 'var(--text-muted)' : 'var(--accent-warning)'};"></i>
      <span style="font-family: var(--font-mono); color: ${data.ttl === -1 ? 'var(--text-muted)' : 'var(--accent-warning)'}; font-weight: 600;">${ttlText}</span>
      ${state.lastStatus?.read_only ? `
        <span title="Read-Only Mode: TTL modification locked" style="font-size: 0.72rem; color: var(--text-muted); display: inline-flex; align-items: center; gap: 3px; margin-left: 0.25rem;">
          <i data-lucide="lock" style="width: 11px; height: 11px;"></i>
        </span>
      ` : `
        <button type="button" class="btn btn-secondary" id="btnEditTtl" style="padding: 0.2rem 0.5rem; font-size: 0.72rem; margin-left: 0.25rem;">
          Edit TTL
        </button>
      `}
    </div>
  `;
  setupIcons();

  const btnEditTtl = document.getElementById("btnEditTtl");
  if (btnEditTtl) {
    btnEditTtl.addEventListener("click", () => {
      promptUpdateTTL(data.name, data.ttl);
    });
  }
}

export async function promptUpdateTTL(keyName, currentTtl) {
  if (state.lastStatus?.read_only) {
    showToast("TTL modification is disabled in Read-Only mode.", "warning");
    return;
  }
  const input = await showPromptDialog({
    title: `Update TTL: ${keyName}`,
    message: "Enter new TTL in seconds (-1 to persist with no expiration, or number of seconds):",
    defaultValue: currentTtl > 0 ? String(currentTtl) : "3600",
    placeholder: "Seconds (e.g. 3600 or -1)",
    inputType: "number",
    confirmText: "Update TTL"
  });
  if (input === null) return;
  const seconds = parseInt(input.trim(), 10);
  if (isNaN(seconds)) {
    showToast("Please enter a valid integer for TTL.", "warning");
    return;
  }

  try {
    const res = await fetch(`/api/keys/${encodeURIComponent(keyName)}/ttl`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ seconds })
    });
    if (!res.ok) throw new Error("Failed to update TTL");
    showToast(`Updated TTL for "${keyName}"`, "success");
    openKeyDetail(keyName);
  } catch (err) {
    showToast("Error updating TTL: " + err.message, "error");
  }
}

export function renderKeyDetailValue(data) {
  const bodyEl = document.getElementById("detailBodyContent");
  if (!bodyEl) return;
  const lowerType = data.type.toLowerCase();

  // 1. HASH VIEW
  if (lowerType === "hash") {
    const fields = data.fields || [];
    const cursor = data.has_more_fields ? Number(data.fields_cursor || 0) : 0;
    state.hashFieldsState = { key: data.name, cursor, fields: [...fields], total: Number(data.length || fields.length), match: null, loading: false };
    bodyEl.innerHTML = `
      <div class="fields-toolbar">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <input type="text" id="hashFieldSearchInput" class="field-search-input" placeholder="Filter fields (Enter: search all)" title="Filters loaded fields instantly; press Enter to search the whole hash on the server (HSCAN MATCH)">
          <span style="font-size: 0.75rem; color: var(--text-muted);" id="hashFieldCountText">${describeHashFieldCount(fields.length)}</span>
        </div>
        ${state.lastStatus?.read_only ? '' : `
          <button type="button" class="btn btn-secondary" id="btnAddHashField" style="font-size: 0.75rem; padding: 0.35rem 0.65rem;">
            <i data-lucide="plus" style="width: 13px; height: 13px;"></i>
            Add Field
          </button>
        `}
      </div>

      <div class="fields-table-container">
        <table class="data-table" style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 35%;">Field</th>
              <th style="width: 53%;">Value</th>
              <th style="width: 12%; text-align: right;">Action</th>
            </tr>
          </thead>
          <tbody id="hashFieldsTableBody">
            ${renderHashFieldRows(fields)}
          </tbody>
        </table>
      </div>
      <div id="hashFieldsFooter" style="display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; margin-top: 0.5rem; font-size: 0.75rem; color: var(--text-muted);"></div>
    `;
    setupIcons();
    setupHashEventListeners(data.name);
    updateHashFieldsFooter();
    return;
  }

  // 2. JSON or ReJSON-RL VIEW
  if (data.is_json || lowerType.includes("json")) {
    const jsonStr = data.parsed_json ? JSON.stringify(data.parsed_json, null, 2) : (data.value || "");
    bodyEl.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">JSON Document</span>
        <button type="button" class="btn btn-secondary" id="btnCopyJsonValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy JSON
        </button>
      </div>
      <div class="json-view-box" id="jsonViewBox">${escapeHtml(jsonStr)}</div>
    `;
    setupIcons();
    const btnCopy = document.getElementById("btnCopyJsonValue");
    if (btnCopy) {
      btnCopy.addEventListener("click", async () => {
        const ok = await copyToClipboard(jsonStr);
        if (ok) {
          showToast("JSON copied to clipboard", "success");
          triggerButtonFeedback(btnCopy, "Copied!");
        } else {
          showToast("Failed to copy JSON to clipboard", "error");
        }
      });
    }
    return;
  }

  // 3. STRING VIEW
  if (lowerType === "string") {
    bodyEl.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">String Value (${data.length} bytes)</span>
        <button type="button" class="btn btn-secondary" id="btnCopyStringValue" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">
          <i data-lucide="copy" style="width: 13px; height: 13px;"></i>
          Copy Value
        </button>
      </div>
      <div class="json-view-box" style="color: #f8fafc;">${escapeHtml(data.value || "")}</div>
    `;
    setupIcons();
    const btnCopy = document.getElementById("btnCopyStringValue");
    if (btnCopy) {
      btnCopy.addEventListener("click", async () => {
        const ok = await copyToClipboard(data.value || "");
        if (ok) {
          showToast("Value copied to clipboard", "success");
          triggerButtonFeedback(btnCopy, "Copied!");
        } else {
          showToast("Failed to copy value to clipboard", "error");
        }
      });
    }
    return;
  }

  // 4. STREAM VIEW
  if (lowerType === "stream") {
    const entries = Array.isArray(data.value) ? data.value : [];

    const formatRelativeTime = (timestampMs) => {
      if (!timestampMs || isNaN(timestampMs)) return "";
      const diffSec = Math.floor((Date.now() - timestampMs) / 1000);
      if (diffSec < 0) return "just now";
      if (diffSec < 60) return `${diffSec}s ago`;
      const diffMin = Math.floor(diffSec / 60);
      if (diffMin < 60) return `${diffMin}m ago`;
      const diffHours = Math.floor(diffMin / 60);
      if (diffHours < 24) return `${diffHours}h ago`;
      const diffDays = Math.floor(diffHours / 24);
      return `${diffDays}d ago`;
    };

    bodyEl.innerHTML = `
      <div class="stream-meta-bar">
        <div class="stream-filter-box">
          <i data-lucide="search" style="width: 13px; height: 13px; color: var(--text-muted); flex-shrink: 0;"></i>
          <input type="text" id="streamFilterInput" placeholder="Filter stream entries by field name, value, or entry ID...">
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <span style="font-size: 0.75rem; color: var(--text-muted);" id="streamFilterCountText">
            Showing ${entries.length} of ${(data.length || entries.length).toLocaleString()} entries
          </span>
          <span class="badge-db" style="color: #06b6d4; font-size: 0.7rem; display: inline-flex; align-items: center; gap: 3px;">
            <i data-lucide="activity" style="width: 11px; height: 11px;"></i> XREVRANGE (latest 50)
          </span>
        </div>
      </div>

      <div class="fields-table-container">
        <table class="data-table" id="streamEntriesTable" style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 32%;">Entry ID & Timestamp</th>
              <th style="width: 68%;">Fields & Values</th>
            </tr>
          </thead>
          <tbody id="streamEntriesTbody">
            ${entries.length === 0 ? `
              <tr><td colspan="2" style="text-align: center; color: var(--text-muted); padding: 2rem;">
                <i data-lucide="git-commit" style="width: 24px; height: 24px; color: var(--text-muted); margin-bottom: 0.5rem; display: inline-block;"></i>
                <div>Stream is empty (0 entries)</div>
              </td></tr>
            ` : entries.map((item, idx) => {
              const entryId = item.id || "";
              const tsMatch = String(entryId).match(/^(\d{10,13})-/);
              let tsFormatted = "";
              let relFormatted = "";
              if (tsMatch) {
                try {
                  const ms = parseInt(tsMatch[1], 10);
                  tsFormatted = new Date(ms).toLocaleString();
                  relFormatted = formatRelativeTime(ms);
                } catch (_) {}
              }
              const fields = item.fields || {};
              const fieldsEntries = Object.entries(fields);
              const fieldsHtml = fieldsEntries.map(([k, v]) => `
                <div class="stream-entry-pill" title="${escapeHtml(k)}: ${escapeHtml(String(v))}">
                  <span class="pill-key">${escapeHtml(k)}:</span>
                  <span class="pill-val">${escapeHtml(String(v))}</span>
                </div>
              `).join("");

              const searchBlob = `${entryId} ${fieldsEntries.map(([k, v]) => `${k} ${v}`).join(" ")}`.toLowerCase();

              return `
                <tr class="stream-entry-row" data-search="${escapeHtml(searchBlob)}" style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                  <td style="padding: 0.65rem 1rem; vertical-align: top;">
                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                      <span style="font-family: var(--font-mono); font-size: 0.82rem; color: #06b6d4; font-weight: 600;">${escapeHtml(entryId)}</span>
                      <button type="button" class="stream-action-icon-btn btn-copy-stream-id" data-copy="${escapeHtml(entryId)}" title="Copy Entry ID">
                        <i data-lucide="copy" style="width: 11px; height: 11px;"></i>
                      </button>
                      <button type="button" class="stream-action-icon-btn btn-copy-stream-json" data-idx="${idx}" title="Copy entry JSON">
                        <i data-lucide="code" style="width: 11px; height: 11px;"></i>
                      </button>
                    </div>
                    ${tsFormatted ? `
                      <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-sans); margin-top: 3px; display: flex; align-items: center; gap: 0.35rem;">
                        <span>${escapeHtml(tsFormatted)}</span>
                        ${relFormatted ? `<span class="badge-env" style="font-size: 0.62rem; padding: 0.05rem 0.3rem;">${escapeHtml(relFormatted)}</span>` : ''}
                      </div>
                    ` : ''}
                  </td>
                  <td style="padding: 0.65rem 1rem; vertical-align: top;">
                    <div style="display: flex; flex-wrap: wrap; gap: 2px;">
                      ${fieldsHtml || '<span style="color: var(--text-muted); font-size: 0.78rem;">(no fields)</span>'}
                    </div>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;
    setupIcons();

    // Stream Copy Event Listeners
    bodyEl.querySelectorAll(".btn-copy-stream-id").forEach(btn => {
      btn.addEventListener("click", async () => {
        const text = btn.getAttribute("data-copy") || "";
        const ok = await copyToClipboard(text);
        if (ok) {
          btn.innerHTML = `<i data-lucide="check" style="width: 11px; height: 11px; color: #10b981;"></i>`;
          setupIcons();
          setTimeout(() => {
            btn.innerHTML = `<i data-lucide="copy" style="width: 11px; height: 11px;"></i>`;
            setupIcons();
          }, 1500);
        }
      });
    });

    bodyEl.querySelectorAll(".btn-copy-stream-json").forEach(btn => {
      btn.addEventListener("click", async () => {
        const idx = parseInt(btn.getAttribute("data-idx") || "-1", 10);
        if (idx >= 0 && entries[idx]) {
          const ok = await copyToClipboard(JSON.stringify(entries[idx], null, 2));
          if (ok) {
            btn.innerHTML = `<i data-lucide="check" style="width: 11px; height: 11px; color: #10b981;"></i>`;
            setupIcons();
            setTimeout(() => {
              btn.innerHTML = `<i data-lucide="code" style="width: 11px; height: 11px;"></i>`;
              setupIcons();
            }, 1500);
          }
        }
      });
    });

    // Stream Filter Event Listener
    const filterInput = document.getElementById("streamFilterInput");
    const countText = document.getElementById("streamFilterCountText");
    if (filterInput) {
      filterInput.addEventListener("input", () => {
        const query = filterInput.value.trim().toLowerCase();
        const rows = bodyEl.querySelectorAll(".stream-entry-row");
        let visibleCount = 0;
        rows.forEach(r => {
          const blob = r.getAttribute("data-search") || "";
          if (!query || blob.includes(query)) {
            r.style.display = "";
            visibleCount++;
          } else {
            r.style.display = "none";
          }
        });
        if (countText) {
          countText.textContent = `Showing ${visibleCount} of ${entries.length} entries`;
        }
      });
    }

    return;
  }

  // 5. LIST / SET / ZSET
  if (Array.isArray(data.value)) {
    const isZset = lowerType === "zset";
    bodyEl.innerHTML = `
      <div class="fields-table-container">
        <table class="data-table" style="width: 100%;">
          <thead>
            <tr>
              <th style="width: 15%;">${isZset ? 'Score' : 'Index'}</th>
              <th style="width: 85%;">Element / Member</th>
            </tr>
          </thead>
          <tbody>
            ${data.value.map((item, idx) => `
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); color: var(--text-muted); font-size: 0.8rem;">
                  ${isZset ? item.score : `[${idx}]`}
                </td>
                <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem;">
                  ${escapeHtml(isZset ? item.member : String(item))}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
    return;
  }

  // Fallback raw display
  bodyEl.innerHTML = `<div class="json-view-box">${escapeHtml(String(data.value))}</div>`;
}

export function renderHashFieldRows(fields) {
  if (fields.length === 0) {
    return `<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No fields found in hash</td></tr>`;
  }
  return fields.map(f => `
    <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary); font-weight: 500;">
        ${escapeHtml(f.field)}
      </td>
      <td style="padding: 0.6rem 1rem; font-family: var(--font-mono); font-size: 0.85rem; word-break: break-all;">
        ${escapeHtml(f.value)}
      </td>
      <td style="padding: 0.6rem 1rem; text-align: right;">
        ${state.lastStatus?.read_only ? `
          <span title="Read-Only Mode: Field deletion locked" style="color: var(--text-muted); opacity: 0.45; display: inline-flex; align-items: center; padding: 4px;">
            <i data-lucide="lock" style="width: 12px; height: 12px;"></i>
          </span>
        ` : `
          <button type="button" class="btn-icon danger btn-delete-hash-field" data-field="${encodeURIComponent(f.field)}" title="Delete field">
            <i data-lucide="trash-2" style="width: 13px; height: 13px;"></i>
          </button>
        `}
      </td>
    </tr>
  `).join("");
}

export function describeHashFieldCount(loaded, shown = null) {
  const st = state.hashFieldsState;
  const total = st ? st.total : loaded;
  const base = st && st.match
    ? `${loaded.toLocaleString()} matching fields loaded`
    : loaded < total
    ? `${loaded.toLocaleString()} of ${total.toLocaleString()} fields loaded`
    : `${loaded.toLocaleString()} fields`;
  return shown !== null ? `${shown.toLocaleString()} shown · ${base}` : base;
}

export function hashGlobForQuery(q) {
  return `*${q.replace(/[\\*?\[\]]/g, ch => `\\${ch}`)}*`;
}

export function rerenderHashFields() {
  const st = state.hashFieldsState;
  const tbody = document.getElementById("hashFieldsTableBody");
  const countText = document.getElementById("hashFieldCountText");
  const searchInput = document.getElementById("hashFieldSearchInput");
  if (!st || !tbody) return;
  const q = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const filtered = q ? st.fields.filter(f => f.field.toLowerCase().includes(q) || f.value.toLowerCase().includes(q)) : st.fields;
  tbody.innerHTML = renderHashFieldRows(filtered);
  if (countText) countText.textContent = describeHashFieldCount(st.fields.length, q ? filtered.length : null);
  setupIcons();
  attachHashDeleteHandlers(st.key);
  updateHashFieldsFooter();
}

export function updateHashFieldsFooter() {
  const footer = document.getElementById("hashFieldsFooter");
  const st = state.hashFieldsState;
  if (!footer || !st) return;
  const hasMore = st.cursor !== 0;
  const note = st.match
    ? `Server-side filter: <code>${escapeHtml(st.match)}</code> · <a href="#" id="btnClearHashMatch" style="color: var(--accent-primary);">clear</a>`
    : hasMore
    ? "Search applies to loaded fields. Press Enter to search all fields on the server."
    : "";
  footer.innerHTML = `
    <span>${note}</span>
    ${hasMore ? `
      <button type="button" class="btn btn-secondary" id="btnLoadMoreHashFields" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;" ${st.loading ? "disabled" : ""}>
        <i data-lucide="${st.loading ? "refresh-cw" : "arrow-down-circle"}" ${st.loading ? 'class="spin"' : ""} style="width: 13px; height: 13px;"></i>
        ${st.loading ? "Loading..." : "Load More Fields"}
      </button>` : ""}
  `;
  setupIcons();
  const btnMore = document.getElementById("btnLoadMoreHashFields");
  if (btnMore) btnMore.addEventListener("click", () => loadMoreHashFields());
  const btnClear = document.getElementById("btnClearHashMatch");
  if (btnClear) {
    btnClear.addEventListener("click", (e) => {
      e.preventDefault();
      const searchInput = document.getElementById("hashFieldSearchInput");
      if (searchInput) searchInput.value = "";
      loadMoreHashFields({ reset: true, match: null });
    });
  }
}

export async function loadMoreHashFields({ reset = false, match } = {}) {
  const st = state.hashFieldsState;
  if (!st || st.loading) return;
  if (!reset && st.cursor === 0) return;
  const key = st.key;
  const nextMatch = reset ? match : st.match;
  st.loading = true;
  updateHashFieldsFooter();

  try {
    const params = new URLSearchParams({ cursor: String(reset ? 0 : st.cursor), count: String(HASH_FIELDS_PAGE_SIZE) });
    if (nextMatch) params.set("match", nextMatch);
    const res = await fetch(`/api/keys/${encodeURIComponent(key)}/hash/fields?${params}`);
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.detail || `Server error: ${res.status}`);
    }
    const page = await res.json();
    if (state.hashFieldsState !== st || state.activeDetailKey !== key) return;

    if (reset) st.fields = [];
    const seen = new Set(st.fields.map(f => f.field));
    for (const f of page.fields || []) {
      if (!seen.has(f.field)) {
        seen.add(f.field);
        st.fields.push(f);
      }
    }
    st.cursor = Number(page.cursor || 0);
    st.total = Number(page.total ?? st.total);
    st.match = nextMatch || null;
  } catch (err) {
    showToast("Failed to load hash fields: " + err.message, "error");
  } finally {
    st.loading = false;
    if (state.hashFieldsState === st) rerenderHashFields();
  }
}

export function setupHashEventListeners(keyName) {
  const searchInput = document.getElementById("hashFieldSearchInput");

  if (searchInput) {
    searchInput.addEventListener("input", () => rerenderHashFields());
    searchInput.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" || !state.hashFieldsState) return;
      const q = searchInput.value.trim();
      const st = state.hashFieldsState;
      const fullyLoaded = st.cursor === 0 && !st.match;
      if (fullyLoaded) return;
      loadMoreHashFields({ reset: true, match: q ? hashGlobForQuery(q) : null });
    });
  }

  const btnAdd = document.getElementById("btnAddHashField");
  if (btnAdd) {
    btnAdd.addEventListener("click", async () => {
      const data = await showAddHashFieldDialog(keyName);
      if (!data) return;
      const { field, value: val } = data;

      try {
        const res = await fetch(`/api/keys/${encodeURIComponent(keyName)}/field`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ field, value: val })
        });
        if (!res.ok) throw new Error("Failed to set field");
        showToast(`Added field "${field}" to hash`, "success");
        openKeyDetail(keyName);
      } catch (err) {
        showToast("Error setting field: " + err.message, "error");
      }
    });
  }

  attachHashDeleteHandlers(keyName);
}

export function attachHashDeleteHandlers(keyName) {
  document.querySelectorAll(".btn-delete-hash-field").forEach(btn => {
    btn.addEventListener("click", async () => {
      const field = decodeURIComponent(btn.getAttribute("data-field"));
      const confirmed = await showConfirmDialog({
        title: "Delete Hash Field",
        message: `Delete field '${field}' from hash '${keyName}'?`,
        confirmText: "Delete Field",
        danger: true
      });
      if (confirmed) {
        try {
          const res = await fetch(`/api/keys/${encodeURIComponent(keyName)}/field/${encodeURIComponent(field)}`, {
            method: "DELETE"
          });
          if (!res.ok) throw new Error("Failed to delete field");
          showToast(`Deleted field "${field}"`, "success");
          openKeyDetail(keyName);
        } catch (err) {
          showToast("Error: " + err.message, "error");
        }
      }
    });
  });
}

export function parseContentDispositionFilename(disposition) {
  if (!disposition) return null;
  const extended = disposition.match(/filename\*\s*=\s*([\w-]*)'[^']*'([^;]+)/i);
  if (extended) {
    try {
      return decodeURIComponent(extended[2].trim().replace(/^"|"$/g, ""));
    } catch (e) {}
  }
  const plain = disposition.match(/filename\s*=\s*"([^"]*)"/i) || disposition.match(/filename\s*=\s*([^;]+)/i);
  return plain && plain[1].trim() ? plain[1].trim() : null;
}

export function saveBlobAsFile(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}

export async function downloadResponseAsFile(res, fallbackName, format = null) {
  let filename = parseContentDispositionFilename(res.headers.get("content-disposition")) || fallbackName;
  const ext = String(res.headers.get("x-export-format") || format || "").toLowerCase();
  if (ext && !filename.toLowerCase().endsWith(`.${ext}`)) {
    filename = `${filename}.${ext}`;
  }
  const blob = await res.blob();
  saveBlobAsFile(blob, filename);
  return filename;
}

export async function downloadKeyValue(keyName, btn) {
  if (!keyName) return;
  const originalHtml = btn ? btn.innerHTML : "";
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="refresh-cw" class="spin" style="width: 13px; height: 13px;"></i> Downloading...`;
    setupIcons();
  }
  try {
    const res = await fetch(`/api/keys/${encodeURIComponent(keyName)}/download`);
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.detail || `Server error: ${res.status}`);
    }
    const fallback = keyName.replace(/[^A-Za-z0-9._-]+/g, "_") || "redis_key";
    await downloadResponseAsFile(res, fallback);
    if (res.headers.get("x-export-truncated") === "true") {
      showToast(`Download was capped: only the first portion was included.`, "warning");
    } else {
      showToast(`Downloaded value for "${keyName}"`, "success");
    }
  } catch (err) {
    showToast("Download failed: " + err.message, "error");
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalHtml;
      setupIcons();
    }
  }
}

export function setupInspectorEventListeners() {
  const btnCloseDetail = document.getElementById("btnCloseDetailModal");
  if (btnCloseDetail) btnCloseDetail.addEventListener("click", closeKeyDetail);

  const detailModal = document.getElementById("keyDetailModal");
  if (detailModal) {
    detailModal.addEventListener("click", (e) => {
      if (e.target === detailModal) closeKeyDetail();
    });
  }

  const btnCopyKey = document.getElementById("btnCopyKeyName");
  if (btnCopyKey) {
    btnCopyKey.addEventListener("click", async () => {
      if (state.activeDetailKey) {
        const ok = await copyToClipboard(state.activeDetailKey);
        if (ok) {
          showToast(`Copied key "${state.activeDetailKey}" to clipboard`, "success");
          triggerButtonFeedback(btnCopyKey, "Key Copied!");
        } else {
          showToast("Failed to copy key to clipboard", "error");
        }
      }
    });
  }

  const btnDownloadKey = document.getElementById("btnDownloadKeyValue");
  if (btnDownloadKey) {
    btnDownloadKey.addEventListener("click", () => {
      downloadKeyValue(state.activeDetailKey, btnDownloadKey);
    });
  }

  const btnDeleteFromDetail = document.getElementById("btnDeleteKeyFromDetail");
  if (btnDeleteFromDetail) {
    btnDeleteFromDetail.addEventListener("click", () => {
      if (state.activeDetailKey && onDeleteKey) {
        const keyToDelete = state.activeDetailKey;
        onDeleteKey(keyToDelete, () => {
          closeKeyDetail();
          if (onKeyDeleted) {
            onKeyDeleted(keyToDelete);
          }
        });
      }
    });
  }
}
