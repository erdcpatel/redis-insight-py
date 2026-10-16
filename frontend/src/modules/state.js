// Central reactive application state and shared constants
export const SCAN_BATCH_SIZES = [50, 100, 200, 500, 1000, 2000, 5000, 10000];
export const HASH_FIELDS_PAGE_SIZE = 200;

export const state = {
  // Active Workspace Tab ('keys', 'benchmark', 'memory', 'slowlog', 'topology', 'clients')
  activeWorkspaceTab: 'keys',

  // Clients
  allConnectedClients: [],

  // Slowlog
  allSlowlogEntries: [],
  currentSlowlogMinDuration: 0,
  currentSlowlogSearch: "",
  currentSlowlogNode: "all",
  currentSlowlogTimeWindow: "all",

  // View Mode & Tree Multi-Delimiters
  currentViewMode: localStorage.getItem("redis_insight_view_mode") || "table",
  activeTreeDelimiters: (() => {
    try {
      const raw = localStorage.getItem("redis_insight_tree_delimiters_global");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (_) {}
    const legacy = localStorage.getItem("redis_insight_tree_delimiter");
    if (legacy && legacy !== "auto") return [legacy];
    return [":", "/", "."];
  })(),
  customTreeDelimiters: (() => {
    try {
      const raw = localStorage.getItem("redis_insight_custom_delimiters");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (_) {}
    return [];
  })(),
  treeDelimiterPreset: localStorage.getItem("redis_insight_tree_delimiter_preset") || "auto",
  get currentTreeDelimiter() {
    return this.treeDelimiterPreset || (this.activeTreeDelimiters && this.activeTreeDelimiters[0]) || "auto";
  },
  set currentTreeDelimiter(val) {
    this.treeDelimiterPreset = val;
  },
  treeExpandedPaths: new Set(),
  treeInitialized: false,
  currentTreeFilterQuery: "",

  // Memory & BigKeys
  currentMemoryOverview: null,
  currentMemoryAnalysis: null,
  isMemoryProfilingRunning: false,
  memoryLoadedForConnId: null,
  bigkeysSearchQuery: "",

  // Diagnostic Screen Isolation Trackers
  slowlogLoadedForConnId: null,
  clientsLoadedForConnId: null,
  topologyLoadedForConnId: null,

  // Keys Scanning & In-Memory Dataset
  currentCursor: 0,
  currentPattern: "*",
  currentType: "all",
  currentTtlFilter: "all",
  isScanning: false,
  totalScanned: 0,
  scanComplete: false,
  dbTotalKeys: 0,
  lastStatus: null,
  keysTableRows: [],
  loadedKeysSet: new Set(),

  // Dual-Mode Search & Memory Limit Guards
  searchScope: "local", // "local" (instant in-memory filter) or "remote" (query Redis SCAN)
  localFilterQuery: "",
  localMatchCount: 0,
  localMatchDurationMs: 0,
  maxLoadedKeysLimit: 100000,
  isMemoryCeilingReached: false,

  // Auto-Refresh
  isAutoRefreshActive: false,
  autoRefreshIntervalSec: (() => {
    let s = parseInt(localStorage.getItem("redis_insight_auto_refresh_sec") || "10", 10);
    return (isNaN(s) || s < 5) ? 10 : s;
  })(),
  autoRefreshRemainingSec: 10,
  autoRefreshTimer: null,

  // Detail / Inspector
  activeDetailKey: null,
  activeDetailData: null,
  hashFieldsState: null,

  // Deletion confirmations
  pendingDeleteKey: null,
  pendingDeleteCallback: null,

  // Connections & Topology
  selectedConnectionId: (() => {
    const raw = localStorage.getItem("redis_insight_selected_conn_id");
    if (!raw) return null;
    const num = Number(raw);
    return !isNaN(num) && String(num) === raw.trim() ? num : raw;
  })(),
  cachedConnections: [],
  currentEnvFilter: "ALL",
  currentConnSearch: "",
  currentTopologyData: null,
  currentTopologyRole: "all",
  currentTopologySearch: "",
  currentLimit: 2,
  activeConfigConn: null,
  currentScanEpoch: 0,
  scanBatchSize: 50,
};

export function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
