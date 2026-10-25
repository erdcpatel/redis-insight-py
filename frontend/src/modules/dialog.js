// Glassmorphic interactive dialog modal system for RedisInsight (Zero native popups)
import { escapeHtml } from "./state.js";

/**
 * Show a sleek glassmorphic confirmation modal.
 * @param {Object} options
 * @param {string} options.title - Dialog header title
 * @param {string} options.message - Confirmation explanation message
 * @param {string} [options.confirmText="Confirm"] - Text for confirmation button
 * @param {string} [options.cancelText="Cancel"] - Text for cancel button
 * @param {boolean} [options.danger=false] - Whether this is a destructive action
 * @returns {Promise<boolean>}
 */
export function showConfirmDialog({
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  danger = false
}) {
  return new Promise((resolve) => {
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop active";
    backdrop.style.zIndex = "10050";

    const accentColor = danger ? "var(--accent-danger, #ef4444)" : "var(--accent-primary, #38bdf8)";
    const btnClass = danger ? "btn btn-danger" : "btn btn-primary";
    const iconSvg = danger
      ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: ${accentColor}; flex-shrink: 0;"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
      : `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: ${accentColor}; flex-shrink: 0;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

    backdrop.innerHTML = `
      <div class="custom-dialog-card" style="width: 90%; max-width: 440px; background: #0f172a; border: 1px solid ${danger ? 'rgba(239, 68, 68, 0.4)' : 'rgba(56, 189, 248, 0.3)'}; border-radius: 12px; box-shadow: 0 20px 45px rgba(0, 0, 0, 0.8); overflow: hidden; animation: modalEnter 0.2s ease-out;">
        <div style="padding: 1.25rem 1.5rem; display: flex; align-items: center; gap: 0.75rem; border-bottom: 1px solid rgba(255, 255, 255, 0.08); background: ${danger ? 'rgba(239, 68, 68, 0.08)' : 'rgba(56, 189, 248, 0.08)'};">
          ${iconSvg}
          <h3 style="margin: 0; font-size: 1.05rem; font-weight: 600; color: #f8fafc;">${escapeHtml(title)}</h3>
        </div>
        <div style="padding: 1.25rem 1.5rem; color: #cbd5e1; font-size: 0.88rem; line-height: 1.55; word-break: break-word;">
          ${escapeHtml(message)}
        </div>
        <div style="padding: 1rem 1.5rem; display: flex; justify-content: flex-end; gap: 0.65rem; background: rgba(0, 0, 0, 0.25); border-top: 1px solid rgba(255, 255, 255, 0.06);">
          <button type="button" class="btn btn-secondary" id="dialogBtnCancel" style="padding: 0.45rem 1rem; font-size: 0.85rem;">${escapeHtml(cancelText)}</button>
          <button type="button" class="${btnClass}" id="dialogBtnConfirm" style="padding: 0.45rem 1.15rem; font-size: 0.85rem;">${escapeHtml(confirmText)}</button>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);

    const cleanup = (value) => {
      document.removeEventListener("keydown", handleKey);
      backdrop.classList.remove("active");
      if (backdrop.parentNode) {
        backdrop.parentNode.removeChild(backdrop);
      }
      resolve(value);
    };

    const handleKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        cleanup(false);
      } else if (e.key === "Enter") {
        e.preventDefault();
        cleanup(true);
      }
    };

    document.addEventListener("keydown", handleKey);

    const btnCancel = backdrop.querySelector("#dialogBtnCancel");
    const btnConfirm = backdrop.querySelector("#dialogBtnConfirm");

    if (btnCancel) btnCancel.addEventListener("click", () => cleanup(false));
    if (btnConfirm) btnConfirm.addEventListener("click", () => cleanup(true));

    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) cleanup(false);
    });

    // Auto-focus
    if (danger && btnCancel) {
      btnCancel.focus();
    } else if (btnConfirm) {
      btnConfirm.focus();
    }
  });
}

/**
 * Show a sleek glassmorphic prompt modal for text or number input.
 * @param {Object} options
 * @param {string} options.title - Dialog header title
 * @param {string} options.message - Explanation message
 * @param {string} [options.defaultValue=""] - Pre-filled input value
 * @param {string} [options.placeholder=""] - Input placeholder
 * @param {string} [options.inputType="text"] - HTML input type (text, number)
 * @param {string} [options.confirmText="Save"] - Confirmation button text
 * @param {string} [options.cancelText="Cancel"] - Cancel button text
 * @returns {Promise<string | null>}
 */
export function showPromptDialog({
  title,
  message,
  defaultValue = "",
  placeholder = "",
  inputType = "text",
  confirmText = "Save",
  cancelText = "Cancel"
}) {
  return new Promise((resolve) => {
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop active";
    backdrop.style.zIndex = "10050";

    backdrop.innerHTML = `
      <div class="custom-dialog-card" style="width: 90%; max-width: 440px; background: #0f172a; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 12px; box-shadow: 0 20px 45px rgba(0, 0, 0, 0.8); overflow: hidden; animation: modalEnter 0.2s ease-out;">
        <div style="padding: 1.25rem 1.5rem; display: flex; align-items: center; gap: 0.75rem; border-bottom: 1px solid rgba(255, 255, 255, 0.08); background: rgba(56, 189, 248, 0.08);">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #38bdf8; flex-shrink: 0;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          <h3 style="margin: 0; font-size: 1.05rem; font-weight: 600; color: #f8fafc;">${escapeHtml(title)}</h3>
        </div>
        <div style="padding: 1.25rem 1.5rem;">
          <label style="display: block; color: #cbd5e1; font-size: 0.88rem; margin-bottom: 0.65rem; line-height: 1.5;">${escapeHtml(message)}</label>
          <input type="${escapeHtml(inputType)}" id="dialogPromptInput" value="${escapeHtml(defaultValue)}" placeholder="${escapeHtml(placeholder)}" style="width: 100%; box-sizing: border-box; background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(56, 189, 248, 0.4); border-radius: 6px; padding: 0.6rem 0.85rem; color: #f8fafc; font-size: 0.9rem; outline: none; font-family: inherit;" />
        </div>
        <div style="padding: 1rem 1.5rem; display: flex; justify-content: flex-end; gap: 0.65rem; background: rgba(0, 0, 0, 0.25); border-top: 1px solid rgba(255, 255, 255, 0.06);">
          <button type="button" class="btn btn-secondary" id="dialogBtnCancel" style="padding: 0.45rem 1rem; font-size: 0.85rem;">${escapeHtml(cancelText)}</button>
          <button type="button" class="btn btn-primary" id="dialogBtnConfirm" style="padding: 0.45rem 1.15rem; font-size: 0.85rem;">${escapeHtml(confirmText)}</button>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);

    const input = backdrop.querySelector("#dialogPromptInput");
    if (input) {
      input.focus();
      input.select();
    }

    const cleanup = (value) => {
      document.removeEventListener("keydown", handleKey);
      backdrop.classList.remove("active");
      if (backdrop.parentNode) {
        backdrop.parentNode.removeChild(backdrop);
      }
      resolve(value);
    };

    const handleKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        cleanup(null);
      } else if (e.key === "Enter") {
        e.preventDefault();
        cleanup(input ? input.value : "");
      }
    };

    document.addEventListener("keydown", handleKey);

    const btnCancel = backdrop.querySelector("#dialogBtnCancel");
    const btnConfirm = backdrop.querySelector("#dialogBtnConfirm");

    if (btnCancel) btnCancel.addEventListener("click", () => cleanup(null));
    if (btnConfirm) btnConfirm.addEventListener("click", () => cleanup(input ? input.value : ""));

    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) cleanup(null);
    });
  });
}

/**
 * Show a sleek glassmorphic modal for adding a hash field & value.
 * @param {string} keyName - Target hash key name
 * @returns {Promise<{ field: string, value: string } | null>}
 */
export function showAddHashFieldDialog(keyName) {
  return new Promise((resolve) => {
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop active";
    backdrop.style.zIndex = "10050";

    backdrop.innerHTML = `
      <div class="custom-dialog-card" style="width: 90%; max-width: 460px; background: #0f172a; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 12px; box-shadow: 0 20px 45px rgba(0, 0, 0, 0.8); overflow: hidden; animation: modalEnter 0.2s ease-out;">
        <div style="padding: 1.25rem 1.5rem; display: flex; align-items: center; gap: 0.75rem; border-bottom: 1px solid rgba(255, 255, 255, 0.08); background: rgba(56, 189, 248, 0.08);">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #38bdf8; flex-shrink: 0;"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          <h3 style="margin: 0; font-size: 1.05rem; font-weight: 600; color: #f8fafc;">Add Field to Hash</h3>
        </div>
        <div style="padding: 1.25rem 1.5rem;">
          <div style="font-size: 0.78rem; color: #94a3b8; margin-bottom: 0.75rem; word-break: break-all;">
            Target Hash: <code style="color: #38bdf8; background: rgba(15, 23, 42, 0.6); padding: 0.2rem 0.4rem; border-radius: 4px;">${escapeHtml(keyName)}</code>
          </div>
          <div style="margin-bottom: 0.85rem;">
            <label style="display: block; color: #cbd5e1; font-size: 0.82rem; margin-bottom: 0.35rem; font-weight: 500;">Field Name</label>
            <input type="text" id="dialogHashFieldName" placeholder="e.g. email, status, count" style="width: 100%; box-sizing: border-box; background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(56, 189, 248, 0.4); border-radius: 6px; padding: 0.55rem 0.75rem; color: #f8fafc; font-size: 0.88rem; outline: none; font-family: inherit;" />
          </div>
          <div>
            <label style="display: block; color: #cbd5e1; font-size: 0.82rem; margin-bottom: 0.35rem; font-weight: 500;">Field Value</label>
            <textarea id="dialogHashFieldValue" rows="3" placeholder="Enter field content / JSON..." style="width: 100%; box-sizing: border-box; background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(56, 189, 248, 0.4); border-radius: 6px; padding: 0.55rem 0.75rem; color: #f8fafc; font-size: 0.88rem; outline: none; font-family: inherit; resize: vertical;"></textarea>
          </div>
        </div>
        <div style="padding: 1rem 1.5rem; display: flex; justify-content: flex-end; gap: 0.65rem; background: rgba(0, 0, 0, 0.25); border-top: 1px solid rgba(255, 255, 255, 0.06);">
          <button type="button" class="btn btn-secondary" id="dialogBtnCancel" style="padding: 0.45rem 1rem; font-size: 0.85rem;">Cancel</button>
          <button type="button" class="btn btn-primary" id="dialogBtnConfirm" style="padding: 0.45rem 1.15rem; font-size: 0.85rem;">Add Field</button>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);

    const fieldInput = backdrop.querySelector("#dialogHashFieldName");
    const valInput = backdrop.querySelector("#dialogHashFieldValue");
    if (fieldInput) fieldInput.focus();

    const cleanup = (value) => {
      document.removeEventListener("keydown", handleKey);
      backdrop.classList.remove("active");
      if (backdrop.parentNode) {
        backdrop.parentNode.removeChild(backdrop);
      }
      resolve(value);
    };

    const handleKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        cleanup(null);
      }
    };

    document.addEventListener("keydown", handleKey);

    const btnCancel = backdrop.querySelector("#dialogBtnCancel");
    const btnConfirm = backdrop.querySelector("#dialogBtnConfirm");

    if (btnCancel) btnCancel.addEventListener("click", () => cleanup(null));
    if (btnConfirm) {
      btnConfirm.addEventListener("click", () => {
        const field = fieldInput ? fieldInput.value.trim() : "";
        const value = valInput ? valInput.value : "";
        if (!field) {
          fieldInput?.focus();
          return;
        }
        cleanup({ field, value });
      });
    }

    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) cleanup(null);
    });
  });
}
