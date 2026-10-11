import { state, escapeHtml } from "./state.js";
import { setupIcons } from "./icons.js";
import { switchWorkspaceTab } from "./tabs.js";

let onRefreshStatus = null;

export function registerClientsRefresh(refreshFn) {
  onRefreshStatus = refreshFn;
}

export async function openClientsModal() {
  switchWorkspaceTab("clients");
  await loadConnectedClients();
}

export function closeClientsModal() {
  switchWorkspaceTab("keys");
}

export async function loadConnectedClients() {
  const container = document.getElementById("clientsTableContainer");
  const countBadge = document.getElementById("clientsCountBadge");
  const quickStats = document.getElementById("clientsQuickStats");
  const searchInput = document.getElementById("clientsSearchInput");

  if (container) {
    container.innerHTML = `<div style="padding: 2.5rem; text-align: center; color: var(--text-muted);"><i data-lucide="refresh-cw" class="spin" style="width: 24px; height: 24px; margin-bottom: 0.5rem;"></i><br>Fetching connected clients...</div>`;
    setupIcons();
  }

  try {
    const res = await fetch("/api/clients");
    if (!res.ok) throw new Error("Failed to load connected clients");
    state.allConnectedClients = await res.json();

    if (countBadge) countBadge.textContent = state.allConnectedClients.length;
    if (quickStats) quickStats.textContent = `${state.allConnectedClients.length} total connections`;

    if (searchInput) searchInput.value = "";
    renderClientsTable(state.allConnectedClients);
  } catch (err) {
    if (container) {
      container.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--accent-danger);">
          <i data-lucide="alert-circle" style="width: 28px; height: 28px; margin-bottom: 0.5rem;"></i>
          <h4>Error loading clients</h4>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">${escapeHtml(err.message)}</p>
        </div>
      `;
      setupIcons();
    }
  }
}

export function renderClientsTable(clients) {
  const container = document.getElementById("clientsTableContainer");
  if (!container) return;

  if (!clients || clients.length === 0) {
    container.innerHTML = `
      <div style="padding: 3rem; text-align: center; color: var(--text-muted);">
        <i data-lucide="users" style="width: 32px; height: 32px; margin-bottom: 0.5rem; opacity: 0.4;"></i>
        <p>No matching connected clients found.</p>
      </div>
    `;
    setupIcons();
    return;
  }

  container.innerHTML = `
    <table class="data-table" style="width: 100%;">
      <thead>
        <tr>
          <th style="width: 7%;">ID</th>
          <th style="width: 25%;">Client Name / Host</th>
          <th style="width: 22%;">Remote Address (IP:Port)</th>
          <th style="width: 8%;">DB</th>
          <th style="width: 12%;">Last CMD</th>
          <th style="width: 10%;">Age</th>
          <th style="width: 10%;">Idle</th>
          <th style="width: 6%; text-align: right;">Action</th>
        </tr>
      </thead>
      <tbody>
        ${clients.map(c => `
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); color: var(--text-muted); font-size: 0.8rem;">
              #${c.id}
            </td>
            <td style="padding: 0.65rem 0.85rem;">
              <div style="font-weight: 600; font-size: 0.85rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.4rem;">
                <span>${escapeHtml(c.name)}</span>
                ${c.flags && c.flags.includes("O") ? '<span class="badge-db" style="background: rgba(234, 179, 8, 0.15); color: #fde047; font-size: 0.65rem;">MONITOR</span>' : ''}
              </div>
              <div class="client-sub-text">User: ${escapeHtml(c.user)} | Flags: ${escapeHtml(c.flags || 'none')}</div>
            </td>
            <td style="padding: 0.65rem 0.85rem;">
              <div class="client-ip-cell">${escapeHtml(c.addr)}</div>
              <div class="client-sub-text">Target: ${escapeHtml(c.laddr || "localhost")}</div>
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.82rem;">
              DB${c.db}
            </td>
            <td style="padding: 0.65rem 0.85rem;">
              <span class="client-cmd-badge">${escapeHtml(c.cmd || "idle")}</span>
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary);">
              ${c.age_human}
            </td>
            <td style="padding: 0.65rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; color: ${c.idle > 300 ? 'var(--accent-warning)' : 'var(--accent-success)'};">
              ${c.idle_human}
            </td>
            <td style="padding: 0.65rem 0.85rem; text-align: right;">
              ${state.lastStatus?.read_only ? `
                <span title="Read-Only Mode: Disconnecting clients is locked" style="color: var(--text-muted); opacity: 0.45; display: inline-flex; align-items: center; padding: 4px;">
                  <i data-lucide="lock" style="width: 13px; height: 13px;"></i>
                </span>
              ` : `
                <button type="button" class="btn-icon danger btn-kill-client" data-id="${c.id}" data-addr="${escapeHtml(c.addr)}" title="Disconnect client">
                  <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                </button>
              `}
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;

  setupIcons();

  container.querySelectorAll(".btn-kill-client").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const addr = btn.getAttribute("data-addr");
      killConnectedClient(id, addr);
    });
  });
}

export async function killConnectedClient(clientId, clientAddr) {
  if (state.lastStatus?.read_only) {
    alert("Client disconnection is disabled in Read-Only mode.");
    return;
  }
  if (!confirm(`Are you sure you want to disconnect client #${clientId} (${clientAddr})?`)) {
    return;
  }
  try {
    const res = await fetch(`/api/clients/${clientId}`, { method: "DELETE" });
    const data = await res.json();
    if (!res.ok) throw new Error(data.detail || "Failed to disconnect client");
    await loadConnectedClients();
    if (onRefreshStatus) await onRefreshStatus();
  } catch (err) {
    alert("Error disconnecting client: " + err.message);
  }
}

export function setupClientsEventListeners() {
  const btnCloseClients = document.getElementById("btnCloseClientsModal");
  if (btnCloseClients) btnCloseClients.addEventListener("click", closeClientsModal);

  const btnOpenClients = document.getElementById("btnOpenClientsModal");
  if (btnOpenClients) btnOpenClients.addEventListener("click", openClientsModal);

  const btnRefreshClients = document.getElementById("btnRefreshClientsModal");
  if (btnRefreshClients) btnRefreshClients.addEventListener("click", loadConnectedClients);

  const searchInput = document.getElementById("clientsSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.trim().toLowerCase();
      const filtered = q
        ? state.allConnectedClients.filter(c =>
            (c.addr || "").toLowerCase().includes(q) ||
            (c.name || "").toLowerCase().includes(q) ||
            (c.user || "").toLowerCase().includes(q) ||
            (c.cmd || "").toLowerCase().includes(q) ||
            String(c.id).includes(q)
          )
        : state.allConnectedClients;
      renderClientsTable(filtered);
    });
  }
}
