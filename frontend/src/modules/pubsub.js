import { state, escapeHtml } from "./state.js";
import { setupIcons } from "./icons.js";
import { showToast, copyToClipboard } from "./toast.js";
import { triggerButtonFeedback } from "./inspector.js";

// Pub/Sub Studio Local Reactive State
const pubsubState = {
  ws: null,
  isConnected: false,
  isPaused: false,
  activeSubscriptions: new Map(), // name -> { name, isPattern }
  messages: [],
  pausedQueue: [],
  searchQuery: "",
  loadedForConnId: null,
  hasConnectedExplicitly: false,
  publishDrawerOpen: false,
};

const MAX_BUFFER_SIZE = 1000;

function formatRelativeTime(dateInput) {
  if (!dateInput) return "";
  const date = typeof dateInput === "number" ? new Date(dateInput) : new Date(dateInput);
  const now = new Date();
  const diffSec = Math.max(0, Math.floor((now - date) / 1000));
  if (diffSec < 5) return "just now";
  if (diffSec < 60) return `${diffSec}s ago`;
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHours = Math.floor(diffMin / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  return `${Math.floor(diffHours / 24)}d ago`;
}

function formatBytes(bytes) {
  if (!bytes || bytes <= 0) return "0 B";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function tryParseJson(str) {
  if (typeof str !== "string") return { isJson: false, value: str };
  const trimmed = str.trim();
  if ((!trimmed.startsWith("{") || !trimmed.endsWith("}")) && (!trimmed.startsWith("[") || !trimmed.endsWith("]"))) {
    return { isJson: false, value: str };
  }
  try {
    const parsed = JSON.parse(trimmed);
    return { isJson: true, formatted: JSON.stringify(parsed, null, 2), parsed };
  } catch (_) {
    return { isJson: false, value: str };
  }
}

/**
 * Reset Pub/Sub Studio state upon cluster switch.
 * Follows Rule 6: Zero Auto-Command Firing on Cluster Switch.
 */
export function resetPubSubState(conn) {
  disconnectWebSocket();
  pubsubState.activeSubscriptions.clear();
  pubsubState.messages = [];
  pubsubState.pausedQueue = [];
  pubsubState.isPaused = false;
  pubsubState.searchQuery = "";
  pubsubState.loadedForConnId = null;
  pubsubState.hasConnectedExplicitly = false;
  pubsubState.publishDrawerOpen = false;

  // Clean DOM controls, forms, and badges
  const channelInput = document.getElementById("pubsubChannelInput");
  if (channelInput) channelInput.value = "";
  const isPatternCheckbox = document.getElementById("pubsubIsPattern");
  if (isPatternCheckbox) isPatternCheckbox.checked = false;
  const searchInput = document.getElementById("pubsubSearchInput");
  if (searchInput) searchInput.value = "";
  const matchBadge = document.getElementById("pubsubFilterMatchBadge");
  if (matchBadge) matchBadge.style.display = "none";
  const publishDrawer = document.getElementById("pubsubPublishDrawer");
  if (publishDrawer) publishDrawer.style.display = "none";
  const btnTogglePublish = document.getElementById("btnTogglePublishCard");
  if (btnTogglePublish) btnTogglePublish.classList.remove("active");
  const publishStatus = document.getElementById("pubsubPublishStatus");
  if (publishStatus) publishStatus.textContent = "";

  renderActiveSubscriptions();
  renderMessagesList();
  updatePauseButtonBadge();
  updateVitalsBadges();
  renderPubSubPrompt(conn);
}

/**
 * Render Target Cluster Prompt Card for Pub/Sub Studio.
 */
export function renderPubSubPrompt(conn) {
  const promptContainer = document.getElementById("pubsubPromptContainer");
  const feedList = document.getElementById("pubsubFeedList");
  if (!promptContainer) return;

  if (feedList) feedList.style.display = "none";
  promptContainer.style.display = "block";

  const targetConn = conn || state.cachedConnections.find(c => String(c.id) === String(state.selectedConnectionId) || c.is_selected) || null;
  const connName = targetConn ? targetConn.name : (state.lastStatus?.connection_name || "Active Cluster");
  const connHost = targetConn ? targetConn.host : (state.lastStatus?.host || "127.0.0.1");
  const connPort = targetConn ? targetConn.port : (state.lastStatus?.port || 6379);
  const env = targetConn ? (targetConn.env || "LOCAL").toUpperCase() : (state.lastStatus?.env || "LOCAL").toUpperCase();

  promptContainer.innerHTML = `
    <div style="padding: 3.5rem 1.5rem; text-align: center; color: var(--text-secondary); max-width: 580px; margin: 0 auto;">
      <div style="display: inline-flex; align-items: center; justify-content: center; width: 54px; height: 54px; border-radius: 50%; background: rgba(236, 72, 153, 0.1); border: 1px solid rgba(236, 72, 153, 0.28); margin-bottom: 1.25rem;">
        <i data-lucide="radio" style="width: 28px; height: 28px; color: #ec4899;"></i>
      </div>
      <div style="font-weight: 600; font-size: 1.1rem; color: var(--text-primary); margin-bottom: 0.45rem;">
        Pub/Sub Studio for ${escapeHtml(connName)} (${escapeHtml(connHost)}:${connPort})
        <span class="badge-env badge-env-${env.toLowerCase()}" style="margin-left: 0.4rem; vertical-align: middle;">${env}</span>
      </div>
      <p style="font-size: 0.84rem; color: var(--text-muted); margin: 0 auto 1.5rem; line-height: 1.6;">
        Real-time Redis Pub/Sub message stream & subscription inspector. Connect to subscribe to channels or glob patterns, stream events with JSON detection, and publish test payloads.
      </p>
      <button type="button" class="btn btn-primary" id="btnConnectPubsubExplicit" style="padding: 0.55rem 1.4rem; font-size: 0.88rem;">
        <i data-lucide="radio" style="width: 15px; height: 15px;"></i>
        Connect Pub/Sub Stream
      </button>
    </div>
  `;
  setupIcons();

  const btnConnect = document.getElementById("btnConnectPubsubExplicit");
  if (btnConnect) {
    btnConnect.onclick = () => {
      connectLivePubSub();
    };
  }
}

/**
 * Initialize or refresh the Pub/Sub tab UI when selected.
 */
export function initOrRefreshPubSubUI() {
  if (pubsubState.loadedForConnId !== state.selectedConnectionId || !pubsubState.hasConnectedExplicitly) {
    renderPubSubPrompt();
  }
}

/**
 * Connect WebSocket to Redis live Pub/Sub stream.
 */
export function connectLivePubSub() {
  pubsubState.hasConnectedExplicitly = true;
  const promptContainer = document.getElementById("pubsubPromptContainer");
  const feedList = document.getElementById("pubsubFeedList");
  if (promptContainer) promptContainer.style.display = "none";
  if (feedList) feedList.style.display = "flex";

  const targetConnId = state.selectedConnectionId || "";
  pubsubState.loadedForConnId = targetConnId;

  // Synchronize state and view elements upon connecting
  renderActiveSubscriptions();
  renderMessagesList();
  updateVitalsBadges();

  disconnectWebSocket();

  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  const wsUrl = `${protocol}//${window.location.host}/api/ws/pubsub?conn_id=${encodeURIComponent(targetConnId)}`;

  updateWsStatus("connecting");

  try {
    const ws = new WebSocket(wsUrl);
    pubsubState.ws = ws;

    ws.onopen = () => {
      if (String(targetConnId) !== String(state.selectedConnectionId || "")) {
        try { ws.close(); } catch (_) {}
        return;
      }
      pubsubState.isConnected = true;
      updateWsStatus("connected");
      showToast("Connected to Redis Pub/Sub WebSocket stream", "success", 2000);

      // Re-subscribe any existing active subscriptions if reconnecting
      if (pubsubState.activeSubscriptions.size > 0) {
        pubsubState.activeSubscriptions.forEach(sub => {
          sendWsCommand({
            action: sub.isPattern ? "psubscribe" : "subscribe",
            [sub.isPattern ? "pattern" : "channel"]: sub.name,
          });
        });
      }
    };

    ws.onmessage = (event) => {
      // Discard out-of-order messages from previously selected cluster (Rule 6)
      if (String(targetConnId) !== String(state.selectedConnectionId || "")) {
        return;
      }
      try {
        const payload = JSON.parse(event.data);
        handleIncomingWsMessage(payload);
      } catch (err) {
        console.warn("Failed to parse WebSocket message:", err);
      }
    };

    ws.onclose = () => {
      pubsubState.isConnected = false;
      updateWsStatus("disconnected");
    };

    ws.onerror = (err) => {
      console.error("PubSub WebSocket error:", err);
      pubsubState.isConnected = false;
      updateWsStatus("disconnected");
    };
  } catch (err) {
    console.error("Failed to construct WebSocket:", err);
    updateWsStatus("disconnected");
    showToast(`WebSocket connection failed: ${err.message}`, "error");
  }
}

function disconnectWebSocket() {
  if (pubsubState.ws) {
    try {
      pubsubState.ws.close(1000, "Client switched or closed");
    } catch (_) {}
    pubsubState.ws = null;
  }
  pubsubState.isConnected = false;
  updateWsStatus("disconnected");
}

function sendWsCommand(cmd) {
  if (pubsubState.ws && pubsubState.ws.readyState === WebSocket.OPEN) {
    pubsubState.ws.send(JSON.stringify(cmd));
  } else {
    showToast("WebSocket is not connected. Reconnecting...", "warning");
    connectLivePubSub();
  }
}

function updateWsStatus(status) {
  const badge = document.getElementById("pubsubWsStatusBadge");
  const text = document.getElementById("pubsubWsStatusText");
  if (!badge || !text) return;

  badge.className = `badge-status-pill ${status}`;
  if (status === "connected") {
    text.textContent = "Live Stream Active";
  } else if (status === "connecting") {
    text.textContent = "Connecting...";
  } else {
    text.textContent = "Disconnected";
  }
}

function handleIncomingWsMessage(payload) {
  const type = payload.type;

  if (type === "subscribe" || type === "psubscribe") {
    const isPattern = type === "psubscribe";
    const name = payload.channel;
    if (name) {
      pubsubState.activeSubscriptions.set(name, { name, isPattern });
      renderActiveSubscriptions();
      updateVitalsBadges();
      showToast(`Subscribed to ${isPattern ? 'pattern' : 'channel'}: ${name}`, "info", 2000);
    }
    return;
  }

  if (type === "unsubscribe" || type === "punsubscribe") {
    const name = payload.channel;
    if (name) {
      pubsubState.activeSubscriptions.delete(name);
      renderActiveSubscriptions();
      updateVitalsBadges();
      showToast(`Unsubscribed from ${name}`, "info", 1500);
    }
    return;
  }

  if (type === "message" || type === "pmessage") {
    const jsonInfo = tryParseJson(payload.data);
    const msgObj = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      type: payload.type,
      channel: payload.channel,
      pattern: payload.pattern || null,
      data: payload.data,
      isJson: jsonInfo.isJson,
      formattedJson: jsonInfo.formatted || null,
      timestamp: payload.timestamp || new Date().toISOString(),
      size: payload.size || (typeof payload.data === "string" ? payload.data.length : 0),
    };

    if (pubsubState.isPaused) {
      pubsubState.pausedQueue.push(msgObj);
      updatePauseButtonBadge();
    } else {
      pubsubState.messages.unshift(msgObj);
      if (pubsubState.messages.length > MAX_BUFFER_SIZE) {
        pubsubState.messages.pop();
      }
      renderMessagesList();
      updateVitalsBadges();
    }
  }
}

function updateVitalsBadges() {
  const subsBadge = document.getElementById("pubsubSubsCountBadge");
  const msgBadge = document.getElementById("pubsubMsgCountBadge");

  if (subsBadge) {
    const count = pubsubState.activeSubscriptions.size;
    subsBadge.textContent = `${count} Subscription${count === 1 ? '' : 's'}`;
  }

  if (msgBadge) {
    const count = pubsubState.messages.length;
    msgBadge.textContent = `${count.toLocaleString()} Message${count === 1 ? '' : 's'}`;
  }
}

function updatePauseButtonBadge() {
  const btn = document.getElementById("btnPubsubPauseToggle");
  if (!btn) return;

  if (pubsubState.isPaused) {
    const queueLen = pubsubState.pausedQueue.length;
    btn.classList.add("btn-warning");
    btn.innerHTML = `
      <i data-lucide="play" style="width: 13px; height: 13px;"></i>
      <span>Resume Stream ${queueLen > 0 ? `(${queueLen} new)` : ''}</span>
    `;
  } else {
    btn.classList.remove("btn-warning");
    btn.innerHTML = `
      <i data-lucide="pause" style="width: 13px; height: 13px;"></i>
      <span>Pause Stream</span>
    `;
  }
  setupIcons();
}

function renderActiveSubscriptions() {
  const container = document.getElementById("pubsubActiveSubsList");
  if (!container) return;

  if (pubsubState.activeSubscriptions.size === 0) {
    container.innerHTML = `<span class="pubsub-no-subs-text">No active subscriptions. Enter a channel or pattern above to subscribe.</span>`;
    return;
  }

  const chips = Array.from(pubsubState.activeSubscriptions.values()).map(sub => `
    <span class="pubsub-sub-chip ${sub.isPattern ? 'pattern' : ''}" data-name="${escapeHtml(sub.name)}" data-is-pattern="${sub.isPattern}">
      <i data-lucide="${sub.isPattern ? 'asterisk' : 'hash'}" style="width: 11px; height: 11px; opacity: 0.8;"></i>
      <span>${escapeHtml(sub.name)}</span>
      <button type="button" class="pubsub-sub-chip-remove" title="Unsubscribe" data-name="${escapeHtml(sub.name)}" data-is-pattern="${sub.isPattern}">
        <i data-lucide="x" style="width: 11px; height: 11px;"></i>
      </button>
    </span>
  `).join("");

  container.innerHTML = chips;
  setupIcons();

  container.querySelectorAll(".pubsub-sub-chip-remove").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const name = btn.getAttribute("data-name");
      const isPattern = btn.getAttribute("data-is-pattern") === "true";
      unsubscribeTarget(name, isPattern);
    });
  });
}

function subscribeTarget(name, isPattern) {
  const trimmed = (name || "").trim();
  if (!trimmed) {
    showToast("Please enter a channel or pattern name.", "warning");
    return;
  }

  sendWsCommand({
    action: isPattern ? "psubscribe" : "subscribe",
    [isPattern ? "pattern" : "channel"]: trimmed,
  });
}

function unsubscribeTarget(name, isPattern) {
  sendWsCommand({
    action: isPattern ? "punsubscribe" : "unsubscribe",
    [isPattern ? "pattern" : "channel"]: name,
  });
}

function renderMessagesList() {
  const listEl = document.getElementById("pubsubFeedList");
  if (!listEl) return;

  const query = (pubsubState.searchQuery || "").trim().toLowerCase();
  let displayed = pubsubState.messages;

  if (query) {
    displayed = displayed.filter(m => {
      const ch = (m.channel || "").toLowerCase();
      const pat = (m.pattern || "").toLowerCase();
      const payload = typeof m.data === "string" ? m.data.toLowerCase() : String(m.data || "").toLowerCase();
      return ch.includes(query) || pat.includes(query) || payload.includes(query);
    });
  }

  // Update match count badge
  const matchBadge = document.getElementById("pubsubFilterMatchBadge");
  if (matchBadge) {
    if (query) {
      matchBadge.style.display = "inline-flex";
      matchBadge.textContent = `${displayed.length} / ${pubsubState.messages.length} matched`;
    } else {
      matchBadge.style.display = "none";
    }
  }

  if (displayed.length === 0) {
    if (pubsubState.messages.length === 0) {
      listEl.innerHTML = `
        <div class="pubsub-empty-state">
          <i data-lucide="inbox" style="width: 32px; height: 32px; color: var(--text-muted); margin-bottom: 0.5rem; opacity: 0.5;"></i>
          <div style="font-weight: 500; font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Waiting for Live Messages</div>
          <p style="font-size: 0.78rem; color: var(--text-muted); max-width: 360px; line-height: 1.5;">
            Messages published to your subscribed channels will stream here in real-time. You can also publish a test payload using the button above.
          </p>
        </div>
      `;
    } else {
      listEl.innerHTML = `
        <div class="pubsub-empty-state">
          <i data-lucide="filter" style="width: 28px; height: 28px; color: var(--text-muted); margin-bottom: 0.5rem; opacity: 0.5;"></i>
          <div style="font-weight: 500; font-size: 0.88rem; color: var(--text-secondary);">No messages match "${escapeHtml(query)}"</div>
          <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Try clearing the search query to view all captured messages.</p>
        </div>
      `;
    }
    setupIcons();
    return;
  }

  listEl.innerHTML = displayed.map(msg => {
    const isPattern = msg.type === "pmessage";
    const relativeTime = formatRelativeTime(msg.timestamp);
    const timeFormatted = new Date(msg.timestamp).toLocaleTimeString();
    const displayPayload = msg.isJson ? (msg.formattedJson || msg.data) : (msg.data || "");

    return `
      <div class="pubsub-message-card" id="${msg.id}">
        <div class="pubsub-message-header">
          <div class="pubsub-message-badges">
            <span class="badge-tag pubsub-type-badge ${isPattern ? 'pattern' : 'channel'}">
              ${isPattern ? 'PMESSAGE' : 'MESSAGE'}
            </span>
            <span class="pubsub-channel-pill" title="Target channel">
              <i data-lucide="hash" style="width: 10px; height: 10px; opacity: 0.7;"></i>
              <strong>${escapeHtml(msg.channel)}</strong>
            </span>
            ${isPattern && msg.pattern ? `
              <span class="pubsub-pattern-pill" title="Matched pattern">
                <i data-lucide="asterisk" style="width: 10px; height: 10px; opacity: 0.7;"></i>
                ${escapeHtml(msg.pattern)}
              </span>
            ` : ''}
            ${msg.isJson ? `
              <span class="pubsub-json-badge">JSON</span>
            ` : ''}
            <span class="pubsub-size-badge">${formatBytes(msg.size)}</span>
          </div>

          <div class="pubsub-message-actions">
            <span class="pubsub-time-tag" title="${msg.timestamp}">
              ${timeFormatted} <span class="pubsub-rel-time">(${relativeTime})</span>
            </span>
            <button type="button" class="btn-copy-inline btn-copy-pubsub-msg" data-copy="${escapeHtml(typeof msg.data === 'string' ? msg.data : JSON.stringify(msg.data))}" title="Copy Message Payload">
              <i data-lucide="copy" style="width: 12px; height: 12px;"></i>
              <span>Copy</span>
            </button>
          </div>
        </div>

        <pre class="pubsub-payload-box"><code>${escapeHtml(displayPayload)}</code></pre>
      </div>
    `;
  }).join("");

  setupIcons();

  // Attach copy event listeners
  listEl.querySelectorAll(".btn-copy-pubsub-msg").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const txt = btn.getAttribute("data-copy");
      if (txt) {
        const ok = await copyToClipboard(txt);
        if (ok) {
          triggerButtonFeedback(btn, "Copied!");
        }
      }
    });
  });
}

/**
 * Handle Publish Message submission via POST /api/pubsub/publish.
 */
async function submitPublishMessage() {
  const channelInput = document.getElementById("pubsubPublishChannel");
  const payloadInput = document.getElementById("pubsubPublishPayload");
  const statusEl = document.getElementById("pubsubPublishStatus");
  const submitBtn = document.getElementById("btnSubmitPublish");

  if (!channelInput || !payloadInput) return;

  const channel = channelInput.value.trim();
  const message = payloadInput.value;

  if (!channel) {
    showToast("Please specify a target channel.", "warning");
    channelInput.focus();
    return;
  }

  if (state.isReadOnly) {
    showToast("Application or cluster is in Read-Only mode. Publishing is disabled.", "warning");
    return;
  }

  if (submitBtn) submitBtn.disabled = true;
  if (statusEl) statusEl.textContent = "Publishing message...";

  try {
    const res = await fetch("/api/pubsub/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Connection-ID": state.selectedConnectionId || "",
      },
      body: JSON.stringify({ channel, message }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.detail || "Failed to publish message.");
    }

    showToast(`Published to '${channel}' (delivered to ${data.receivers} client${data.receivers === 1 ? '' : 's'})`, "success", 3000);
    if (statusEl) statusEl.textContent = `Last published: ${new Date().toLocaleTimeString()} (Receivers: ${data.receivers})`;
  } catch (err) {
    console.error("Publish error:", err);
    showToast(err.message, "error");
    if (statusEl) statusEl.textContent = `Error: ${err.message}`;
  } finally {
    if (submitBtn) submitBtn.disabled = false;
  }
}

/**
 * Initialize DOM listeners and actions for Pub/Sub Studio.
 */
export function initPubSubModule() {
  // Subscribe form submission
  const subForm = document.getElementById("pubsubSubscribeForm");
  const channelInput = document.getElementById("pubsubChannelInput");
  const isPatternCheckbox = document.getElementById("pubsubIsPattern");

  if (subForm && channelInput) {
    subForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = channelInput.value.trim();
      const isPat = isPatternCheckbox ? isPatternCheckbox.checked || val.includes("*") || val.includes("?") : false;
      if (val) {
        subscribeTarget(val, isPat);
        channelInput.value = "";
      }
    });

    // Auto-detect glob patterns as user types
    channelInput.addEventListener("input", () => {
      if (isPatternCheckbox) {
        if (channelInput.value.includes("*") || channelInput.value.includes("?")) {
          isPatternCheckbox.checked = true;
        }
      }
    });
  }

  // Toggle Publish Drawer
  const btnTogglePublish = document.getElementById("btnTogglePublishCard");
  const publishDrawer = document.getElementById("pubsubPublishDrawer");
  const btnClosePublish = document.getElementById("btnClosePublishDrawer");

  if (btnTogglePublish && publishDrawer) {
    btnTogglePublish.addEventListener("click", () => {
      pubsubState.publishDrawerOpen = !pubsubState.publishDrawerOpen;
      publishDrawer.style.display = pubsubState.publishDrawerOpen ? "block" : "none";
      btnTogglePublish.classList.toggle("active", pubsubState.publishDrawerOpen);
      if (pubsubState.publishDrawerOpen) {
        const pubCh = document.getElementById("pubsubPublishChannel");
        if (pubCh && !pubCh.value) pubCh.focus();
      }
    });
  }

  if (btnClosePublish && publishDrawer) {
    btnClosePublish.addEventListener("click", () => {
      pubsubState.publishDrawerOpen = false;
      publishDrawer.style.display = "none";
      if (btnTogglePublish) btnTogglePublish.classList.remove("active");
    });
  }

  // Beautify JSON in Publish Drawer
  const btnBeautify = document.getElementById("btnPubsubBeautifyJson");
  const payloadInput = document.getElementById("pubsubPublishPayload");
  if (btnBeautify && payloadInput) {
    btnBeautify.addEventListener("click", () => {
      const raw = payloadInput.value.trim();
      if (!raw) return;
      try {
        const parsed = JSON.parse(raw);
        payloadInput.value = JSON.stringify(parsed, null, 2);
        showToast("JSON payload formatted", "info", 1500);
      } catch (err) {
        showToast("Invalid JSON: could not format", "warning", 2000);
      }
    });
  }

  // Submit Publish
  const btnSubmitPublish = document.getElementById("btnSubmitPublish");
  if (btnSubmitPublish) {
    btnSubmitPublish.addEventListener("click", () => {
      submitPublishMessage();
    });
  }

  // Search input filter
  const searchInput = document.getElementById("pubsubSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      pubsubState.searchQuery = searchInput.value;
      renderMessagesList();
    });
  }

  // Pause / Resume Toggle
  const btnPauseToggle = document.getElementById("btnPubsubPauseToggle");
  if (btnPauseToggle) {
    btnPauseToggle.addEventListener("click", () => {
      pubsubState.isPaused = !pubsubState.isPaused;
      if (!pubsubState.isPaused) {
        // Drain paused queue
        if (pubsubState.pausedQueue.length > 0) {
          pubsubState.messages.unshift(...pubsubState.pausedQueue);
          if (pubsubState.messages.length > MAX_BUFFER_SIZE) {
            pubsubState.messages.length = MAX_BUFFER_SIZE;
          }
          pubsubState.pausedQueue = [];
          renderMessagesList();
          updateVitalsBadges();
        }
      }
      updatePauseButtonBadge();
    });
  }

  // Clear Buffer
  const btnClearBuffer = document.getElementById("btnPubsubClearMessages");
  if (btnClearBuffer) {
    btnClearBuffer.addEventListener("click", () => {
      pubsubState.messages = [];
      pubsubState.pausedQueue = [];
      renderMessagesList();
      updateVitalsBadges();
      showToast("Pub/Sub message buffer cleared", "info", 1500);
    });
  }

  // Reconnect Button
  const btnReconnect = document.getElementById("btnPubsubReconnect");
  if (btnReconnect) {
    btnReconnect.addEventListener("click", () => {
      connectLivePubSub();
    });
  }
}
