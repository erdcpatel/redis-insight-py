import { state } from "./state.js";
import { setupIcons } from "./icons.js";

// Callbacks for data loaders per tab
const tabLoaders = {};

export function registerTabLoader(tabId, loaderFn) {
  tabLoaders[tabId] = loaderFn;
}

let isSwitchingTab = false;

export function switchWorkspaceTab(tabId, updateHash = true) {
  if (isSwitchingTab) return;
  isSwitchingTab = true;

  try {
    const validTabs = ["keys", "benchmark", "memory", "slowlog", "topology", "clients"];
    if (!validTabs.includes(tabId)) {
      tabId = "keys";
    }

    state.activeWorkspaceTab = tabId;

    // 1. Update navigation tab buttons in workspace bar
    document.querySelectorAll(".ws-tab-btn").forEach((btn) => {
      const isActive = btn.dataset.tab === tabId;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    // 2. Update workspace panes
    document.querySelectorAll(".ws-tab-pane").forEach((pane) => {
      pane.classList.remove("active");
    });

  const targetPane = document.getElementById(`paneWorkspace${capitalize(tabId)}`);
  if (targetPane) {
    targetPane.classList.add("active");
  }

  // 3. Maintain backward compatibility with modal IDs and .active classes
  const modalMap = {
    benchmark: "benchmarkModal",
    memory: "memoryModal",
    slowlog: "slowlogModal",
    topology: "clusterTopologyModal",
    clients: "clientsListModal",
  };

  Object.entries(modalMap).forEach(([t, modalId]) => {
    const el = document.getElementById(modalId);
    if (el) {
      if (t === tabId) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    }
  });

  // 4. Update top bar action pill buttons active states
  const toolPills = {
    benchmark: "btnOpenBenchmarkModal",
    slowlog: "btnOpenSlowlog",
    memory: "btnOpenMemoryModal",
    topology: "btnOpenTopologyTop",
    clients: "btnOpenClientsModal",
  };

  Object.entries(toolPills).forEach(([t, btnId]) => {
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.classList.toggle("active", t === tabId);
    }
  });

  // 5. Update browser URL hash
  if (updateHash) {
    history.replaceState(null, "", `#/${tabId}`);
  }

  // 6. Trigger data loader if registered
  if (tabLoaders[tabId]) {
    try {
      tabLoaders[tabId]();
    } catch (e) {
      console.warn(`Error loading data for tab ${tabId}:`, e);
    }
  }

    // Re-run Lucide icons in case any newly visible panes have fresh markup
    setupIcons();
  } finally {
    isSwitchingTab = false;
  }
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function initWorkspaceTabs() {
  // Click listener for workspace tab buttons
  const tabsBar = document.getElementById("workspaceTabsBar");
  if (tabsBar) {
    tabsBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".ws-tab-btn");
      if (btn && btn.dataset.tab) {
        switchWorkspaceTab(btn.dataset.tab);
      }
    });
  }

  // Listen to browser hash changes (e.g. back/forward, direct links)
  window.addEventListener("hashchange", () => {
    handleHashNavigation();
  });

  // Keyboard shortcuts (Ctrl+1 .. Ctrl+6, Cmd+1 .. Cmd+6)
  window.addEventListener("keydown", (e) => {
    // If typing in input, textarea, or contenteditable, ignore shortcuts
    const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea" || tag === "select") {
      return;
    }

    if ((e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey) {
      const keyMap = {
        "1": "keys",
        "2": "benchmark",
        "3": "memory",
        "4": "slowlog",
        "5": "topology",
        "6": "clients",
      };
      if (keyMap[e.key]) {
        e.preventDefault();
        switchWorkspaceTab(keyMap[e.key]);
      }
    }
  });

  // Initial tab from URL hash if provided
  handleHashNavigation();
}

function handleHashNavigation() {
  const hash = window.location.hash || "";
  const match = hash.match(/^#\/([a-z0-9_-]+)/i);
  if (match) {
    const requestedTab = match[1].toLowerCase();
    const validTabs = ["keys", "benchmark", "memory", "slowlog", "topology", "clients"];
    if (validTabs.includes(requestedTab)) {
      switchWorkspaceTab(requestedTab, false);
      return;
    }
  }
  // Default to keys
  switchWorkspaceTab("keys", false);
}
