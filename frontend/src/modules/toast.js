// Non-blocking, glassmorphic toast notification system for RedisInsight

let toastContainer = null;

function ensureToastContainer() {
  if (!toastContainer || !document.body.contains(toastContainer)) {
    toastContainer = document.createElement("div");
    toastContainer.id = "appToastContainer";
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }
  return toastContainer;
}

/**
 * Show a sleek, non-blocking toast notification.
 * @param {string} message - Message text to display
 * @param {'success' | 'error' | 'warning' | 'info'} [type='info'] - Toast category
 * @param {number} [durationMs=2500] - Duration in milliseconds before auto-dismiss
 */
export function showToast(message, type = "info", durationMs = 2500) {
  if (!message) return;

  const container = ensureToastContainer();

  const toast = document.createElement("div");
  toast.className = `toast-pill toast-${type}`;

  const iconName = type === "success" 
    ? "check-circle" 
    : type === "error" 
    ? "alert-circle" 
    : type === "warning" 
    ? "alert-triangle" 
    : "info";

  // Simple SVG icon inline to avoid Lucide re-query overhead
  const iconSvg = type === "success"
    ? `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
    : type === "error"
    ? `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
    : type === "warning"
    ? `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
    : `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

  toast.innerHTML = `
    <span class="toast-icon-wrapper">${iconSvg}</span>
    <span class="toast-message">${escapeToastText(message)}</span>
    <button type="button" class="toast-close" title="Dismiss">&times;</button>
  `;

  // Dismiss on close button click
  const closeBtn = toast.querySelector(".toast-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => dismissToast(toast));
  }

  container.appendChild(toast);

  // Trigger entrance animation
  requestAnimationFrame(() => {
    toast.classList.add("toast-show");
  });

  // Auto dismiss timer
  if (durationMs > 0) {
    const timer = setTimeout(() => {
      dismissToast(toast);
    }, durationMs);

    toast.addEventListener("mouseenter", () => clearTimeout(timer));
    toast.addEventListener("mouseleave", () => {
      setTimeout(() => dismissToast(toast), 1000);
    });
  }

  return toast;
}

function dismissToast(toast) {
  if (!toast || toast.classList.contains("toast-exit")) return;
  toast.classList.remove("toast-show");
  toast.classList.add("toast-exit");
  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 250);
}

function escapeToastText(str) {
  if (typeof str !== "string") return String(str ?? "");
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Reliably copy text to clipboard with modern Clipboard API and fallback for unprivileged/HTTP environments.
 * @param {string} text
 * @returns {Promise<boolean>}
 */
export async function copyToClipboard(text) {
  if (typeof text !== "string") text = String(text ?? "");
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (e) {
    // Fallback below
  }

  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    textArea.setAttribute("readonly", "");
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand("copy");
    textArea.remove();
    return successful;
  } catch (err) {
    return false;
  }
}

