import { state, escapeHtml } from "./state.js";
import { setupIcons } from "./icons.js";
import { saveBlobAsFile, downloadResponseAsFile } from "./inspector.js";

let onResetAndScan = null;

export function registerActionsResetAndScan(fn) {
  onResetAndScan = fn;
}

export function triggerDeleteConfirmation(keyName, onSuccess) {
  if (state.lastStatus?.read_only) {
    alert("Key deletion is disabled in Read-Only mode.");
    return;
  }
  state.pendingDeleteKey = keyName;
  state.pendingDeleteCallback = onSuccess;

  const modal = document.getElementById("deleteKeyConfirmModal");
  const targetBadge = document.getElementById("deleteKeyTargetName");
  const inputConfirm = document.getElementById("inputConfirmDelete");
  const btnSubmit = document.getElementById("btnSubmitDeleteKey");

  if (targetBadge) targetBadge.textContent = keyName;
  if (inputConfirm) inputConfirm.value = "";
  if (btnSubmit) btnSubmit.disabled = true;
  if (modal) modal.classList.add("active");
  if (inputConfirm) inputConfirm.focus();

  if (inputConfirm) {
    inputConfirm.oninput = () => {
      const val = inputConfirm.value.trim().toUpperCase();
      if (btnSubmit) {
        btnSubmit.disabled = (val !== "CONFIRM" && inputConfirm.value.trim() !== keyName);
      }
    };
  }

  if (btnSubmit) {
    btnSubmit.onclick = async () => {
      btnSubmit.disabled = true;
      btnSubmit.textContent = "Deleting...";

      try {
        const res = await fetch(`/api/keys/${encodeURIComponent(keyName)}?confirmed=true`, {
          method: "DELETE"
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.detail || "Failed to delete key");

        if (modal) modal.classList.remove("active");
        if (state.pendingDeleteCallback) {
          state.pendingDeleteCallback();
        }
      } catch (err) {
        alert("Error deleting key: " + err.message);
      } finally {
        btnSubmit.disabled = false;
        btnSubmit.textContent = "Delete Permanently";
      }
    };
  }
}

export function setupActionsEventListeners() {
  // Delete confirm modal close
  const deleteConfirmModal = document.getElementById("deleteKeyConfirmModal");
  const btnCloseDeleteConfirm = document.getElementById("btnCloseDeleteConfirmModal");
  const btnCancelDeleteConfirm = document.getElementById("btnCancelDeleteConfirm");
  const closeDelete = () => deleteConfirmModal && deleteConfirmModal.classList.remove("active");

  if (btnCloseDeleteConfirm) btnCloseDeleteConfirm.addEventListener("click", closeDelete);
  if (btnCancelDeleteConfirm) btnCancelDeleteConfirm.addEventListener("click", closeDelete);

  // ==========================================
  // Export Matched Keys
  // ==========================================
  const modalExport = document.getElementById("exportKeysModal");
  const btnOpenExportModal = document.getElementById("btnOpenExportModal");
  const btnCloseExportModal = document.getElementById("btnCloseExportModal");
  const btnCancelExportModal = document.getElementById("btnCancelExportModal");
  const btnExecuteExport = document.getElementById("btnExecuteExport");

  if (btnOpenExportModal && modalExport) {
    btnOpenExportModal.addEventListener("click", () => {
      const pat = document.getElementById("exportPatternDisplay");
      const typ = document.getElementById("exportTypeDisplay");
      const loadedCnt = document.getElementById("exportLoadedCount");
      const scopeLoaded = document.getElementById("exportScopeLoadedText");

      if (pat) pat.textContent = state.currentPattern || "*";
      if (typ) typ.textContent = (state.currentType && state.currentType !== "all") ? state.currentType.toUpperCase() : "All Types";
      if (loadedCnt) loadedCnt.textContent = `${state.keysTableRows.length} keys`;
      if (scopeLoaded) scopeLoaded.textContent = `${state.keysTableRows.length} keys`;

      modalExport.classList.add("active");
      setupIcons();
    });

    const closeExport = () => modalExport.classList.remove("active");
    if (btnCloseExportModal) btnCloseExportModal.addEventListener("click", closeExport);
    if (btnCancelExportModal) btnCancelExportModal.addEventListener("click", closeExport);

    if (btnExecuteExport) {
      btnExecuteExport.addEventListener("click", async () => {
        const formatRadio = document.querySelector('input[name="exportFormatRadio"]:checked');
        const scopeRadio = document.querySelector('input[name="exportScopeRadio"]:checked');
        const format = (formatRadio ? formatRadio.value : "csv").toLowerCase();
        const scope = scopeRadio ? scopeRadio.value : "loaded";

        const pattern = state.currentPattern || "*";
        const typeFilter = (state.currentType && state.currentType !== "all") ? state.currentType : "";
        const dateStr = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
        const defaultFilename = `redis_keys_${dateStr}.${format}`;

        if (scope === "all") {
          btnExecuteExport.disabled = true;
          btnExecuteExport.innerHTML = `<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Exporting...`;
          setupIcons();

          try {
            let url = `/api/keys/export?pattern=${encodeURIComponent(pattern)}&format=${format}`;
            if (typeFilter) url += `&type=${encodeURIComponent(typeFilter)}`;
            const res = await fetch(url);
            if (!res.ok) {
              const err = await res.json().catch(() => ({ detail: "Export failed" }));
              throw new Error(err.detail || `Server error: ${res.status}`);
            }

            await downloadResponseAsFile(res, defaultFilename, format);
            closeExport();
          } catch (err) {
            alert(`Export failed: ${err.message}`);
          } finally {
            btnExecuteExport.disabled = false;
            btnExecuteExport.innerHTML = `<i data-lucide="download" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Download`;
            setupIcons();
          }
          return;
        }

        if (state.keysTableRows.length === 0) {
          alert("No keys loaded in browser to export.");
          return;
        }

        let blob;
        if (format === "csv") {
          const header = "Key,Type,TTL_Seconds\n";
          const rows = state.keysTableRows.map(r => `"${(r.key || "").replace(/"/g, '""')}",${r.type || ""},${r.ttl_seconds !== undefined ? r.ttl_seconds : -1}`);
          blob = new Blob([header + rows.join("\n")], { type: "text/csv;charset=utf-8;" });
        } else {
          const lines = state.keysTableRows.map(r => r.key);
          blob = new Blob([lines.join("\n") + "\n"], { type: "text/plain;charset=utf-8;" });
        }

        saveBlobAsFile(blob, defaultFilename);
        closeExport();
      });
    }
  }

  // ==========================================
  // Bulk Delete (UNLINK)
  // ==========================================
  const modalBulkDelete = document.getElementById("bulkDeleteModal");
  const btnOpenBulkDeleteModal = document.getElementById("btnOpenBulkDeleteModal");
  const btnCloseBulkDeleteModal = document.getElementById("btnCloseBulkDeleteModal");
  const btnCancelBulkDelete = document.getElementById("btnCancelBulkDelete");
  const btnConfirmBulkDelete = document.getElementById("btnConfirmBulkDelete");

  const bdCountConfirmInput = document.getElementById("bdCountConfirmInput");
  const bdProdConfirmInput = document.getElementById("bdProdConfirmInput");
  const bdProdConfirmGroup = document.getElementById("bdProdConfirmGroup");
  const bdProdBanner = document.getElementById("bulkDeleteProdBanner");
  const bdDryRunStatus = document.getElementById("bulkDeleteDryRunStatus");
  const bdDetails = document.getElementById("bulkDeleteDetails");

  let activeDryRunResult = null;

  function updateBulkDeleteButtonState() {
    if (!activeDryRunResult || !btnConfirmBulkDelete) return;
    const requiredCount = String(activeDryRunResult.matched_count);
    const countTyped = (bdCountConfirmInput?.value || "").trim();
    const countValid = countTyped === requiredCount && activeDryRunResult.matched_count > 0;

    let prodValid = true;
    if (activeDryRunResult.is_prod) {
      const prodTyped = (bdProdConfirmInput?.value || "").trim().toUpperCase();
      prodValid = prodTyped === "PROD";
    }

    btnConfirmBulkDelete.disabled = !(countValid && prodValid);
  }

  if (bdCountConfirmInput) bdCountConfirmInput.addEventListener("input", updateBulkDeleteButtonState);
  if (bdProdConfirmInput) bdProdConfirmInput.addEventListener("input", updateBulkDeleteButtonState);

  if (btnOpenBulkDeleteModal && modalBulkDelete) {
    btnOpenBulkDeleteModal.addEventListener("click", async () => {
      if (state.lastStatus?.read_only) {
        alert("Bulk Delete is disabled in Read-Only mode.");
        return;
      }
      const pattern = state.currentPattern || "*";
      const typeFilter = (state.currentType && state.currentType !== "all") ? state.currentType : null;

      activeDryRunResult = null;
      if (bdCountConfirmInput) bdCountConfirmInput.value = "";
      if (bdProdConfirmInput) bdProdConfirmInput.value = "";
      if (btnConfirmBulkDelete) btnConfirmBulkDelete.disabled = true;

      if (bdDryRunStatus) bdDryRunStatus.style.display = "block";
      if (bdDetails) bdDetails.style.display = "none";
      modalBulkDelete.classList.add("active");
      setupIcons();

      try {
        const res = await fetch("/api/keys/bulk-delete/dry-run", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pattern, type_filter: typeFilter })
        });
        if (!res.ok) {
          const err = await res.json().catch(() => ({ detail: "Dry run failed" }));
          throw new Error(err.detail || "Dry run failed");
        }
        const data = await res.json();
        activeDryRunResult = data;

        const pDisp = document.getElementById("bdPatternDisplay");
        const tDisp = document.getElementById("bdTypeDisplay");
        const cDisp = document.getElementById("bdCountDisplay");
        const rTxt = document.getElementById("bdRequiredCountText");

        if (pDisp) pDisp.textContent = data.pattern;
        if (tDisp) tDisp.textContent = data.type_filter ? data.type_filter.toUpperCase() : "All Types";
        if (cDisp) cDisp.textContent = data.matched_count.toLocaleString();
        if (rTxt) rTxt.textContent = String(data.matched_count);

        if (data.is_prod) {
          if (bdProdBanner) bdProdBanner.style.display = "block";
          if (bdProdConfirmGroup) bdProdConfirmGroup.style.display = "block";
        } else {
          if (bdProdBanner) bdProdBanner.style.display = "none";
          if (bdProdConfirmGroup) bdProdConfirmGroup.style.display = "none";
        }

        const breakdownEl = document.getElementById("bdPerNodeBreakdown");
        const nodeEntries = Object.entries(data.per_node_counts || {});
        if (breakdownEl) {
          if (nodeEntries.length > 1) {
            breakdownEl.innerHTML = `<strong>Per-node breakdown:</strong> ` + nodeEntries.map(([node, cnt]) => `${escapeHtml(node)}: ${cnt.toLocaleString()}`).join(" &bull; ");
            breakdownEl.style.display = "block";
          } else {
            breakdownEl.style.display = "none";
          }
        }

        const sampleListEl = document.getElementById("bdSampleKeysList");
        const sampleSec = document.getElementById("bdSampleKeysSection");
        if (sampleListEl && sampleSec) {
          if (data.sample_keys && data.sample_keys.length > 0) {
            sampleListEl.innerHTML = data.sample_keys.map(k => `<div>${escapeHtml(k)}</div>`).join("");
            sampleSec.style.display = "block";
          } else {
            sampleSec.style.display = "none";
          }
        }

        if (bdDryRunStatus) bdDryRunStatus.style.display = "none";
        if (bdDetails) bdDetails.style.display = "flex";
        setupIcons();
      } catch (err) {
        if (bdDryRunStatus) {
          bdDryRunStatus.innerHTML = `
            <div style="color: var(--accent-danger);">
              <i data-lucide="alert-circle" style="width: 20px; height: 20px; margin-bottom: 0.35rem; display: inline-block;"></i>
              <div>Failed to calculate dry-run: ${escapeHtml(err.message)}</div>
            </div>
          `;
          setupIcons();
        }
      }
    });

    const closeBulkDelete = () => modalBulkDelete.classList.remove("active");
    if (btnCloseBulkDeleteModal) btnCloseBulkDeleteModal.addEventListener("click", closeBulkDelete);
    if (btnCancelBulkDelete) btnCancelBulkDelete.addEventListener("click", closeBulkDelete);

    if (btnConfirmBulkDelete) {
      btnConfirmBulkDelete.addEventListener("click", async () => {
        if (!activeDryRunResult) return;
        btnConfirmBulkDelete.disabled = true;
        btnConfirmBulkDelete.innerHTML = `<i data-lucide="refresh-cw" class="spin" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Unlinking...`;
        setupIcons();

        try {
          const res = await fetch("/api/keys/bulk-delete", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              pattern: activeDryRunResult.pattern,
              type_filter: activeDryRunResult.type_filter,
              expected_count: activeDryRunResult.matched_count,
              confirmed_count: parseInt(bdCountConfirmInput.value.trim(), 10),
              confirmed_env: bdProdConfirmInput ? bdProdConfirmInput.value.trim() : null
            })
          });

          if (!res.ok) {
            const err = await res.json().catch(() => ({ detail: "Bulk delete failed" }));
            throw new Error(err.detail || "Bulk delete failed");
          }

          const result = await res.json();
          alert(`Bulk delete complete!\n${result.message} (Duration: ${result.duration_ms}ms)`);
          closeBulkDelete();
          if (onResetAndScan) onResetAndScan();
        } catch (err) {
          alert(`Bulk delete error: ${err.message}`);
          btnConfirmBulkDelete.disabled = false;
          btnConfirmBulkDelete.innerHTML = `<i data-lucide="trash-2" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> Unlink Keys`;
          setupIcons();
        }
      });
    }
  }
}
