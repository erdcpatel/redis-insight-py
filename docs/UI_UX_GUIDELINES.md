# RedisInsight UI/UX Design & Architecture Guidelines

This document outlines the core UI/UX principles, component hierarchy, and design standards for **RedisInsight Python**. Every developer or AI agent enhancing the application or adding new features must follow these instructions to prevent cluttered panels and maintain a cohesive, high-density, ergonomic user experience.

---

## 1. Core Principles

1. **Information Density without Cognitive Clutter**:
   - RedisInsight is an engineering tool for developers and SREs. It should display critical metrics at a glance.
   - Never jam unrelated controls into a single horizontal toolbar. Split controls by functional responsibility.
2. **Separation of Concerns**:
   - **Status & Monitoring Bar**: Dedicated to keyspace state, live scan progress, safe chunk badges, and auto-refresh watcher.
   - **Action & Pagination Bar**: Dedicated to user intents (batch size, load more, export, bulk delete).
3. **Compact, Proportional Controls**:
   - Dropdowns must fit their text width (e.g. `58px` for time intervals, `80px` for batch sizes). Never let `<select>` inputs stretch across the toolbar.
   - Keep button text concise (`Load More`, `Export`, `Refresh`). Avoid long descriptive phrases in button labels; use descriptive `title=""` tooltips instead.
4. **Dangerous Actions Must Stand Out**:
   - Destructive actions (Bulk Delete, Key Delete, Client Kill) must use outline-danger styling (`var(--accent-danger)`), require two-step dry-run or explicit confirmation, and never be placed adjacent to primary harmless buttons.

---

## 2. Toolbar & Layout Standards

### A. Keyspace Toolbars Hierarchy

When adding new keyspace controls, place them in the appropriate dedicated bar:

```
┌────────────────────────────────────────────────────────────────────────┐
│ Filter Card: Pattern Search Input (flex: 1) | Type Filter Tabs         │
├────────────────────────────────────────────────────────────────────────┤
│ Status Bar: [Safe SCAN Badge] [Keys Count Progress] │ [Auto: 10s][10s▾] [↻ Refresh] │
├────────────────────────────────────────────────────────────────────────┤
│ Actions Bar: [Table|Tree] | Keys per scan: [50▾] [↓ Load More] │ [⤓ Export] [🗑 Bulk Delete] │
└────────────────────────────────────────────────────────────────────────┘
```

- **Panel 1 (`.chunk-status-bar`)**:
  - Left: `.safety-badge` + `.scan-status-text`
  - Right: `#autoRefreshGroup` (segmented toggle pill) + `#btnResetScan`
- **Panel 2 (`.keys-actions-bar`)**:
  - Left: `#viewModeToggleGroup` (Table vs Tree segmented pill) + divider + `#scanBatchSizeSelect` + `#btnScanNext`
  - Right: Utility tools like `#btnOpenExportModal` and `#btnOpenBulkDeleteModal`

### B. Segmented Auto-Refresh Pill Pattern

- Always pair live periodic watchers into a **compact segmented pill**:
  - Toggle Button: Shows active pulsing indicator and countdown (`Auto: 10s`, `Auto: 4m 30s`, `Auto: Off`).
  - Interval Select: Narrow select (`width: 58px; max-width: 62px; text-align: center; font-weight: 500;`).
  - Standard intervals: `5s`, `10s`, `15s`, `30s`, `1m`, `2m`, `5m`.

### C. Virtual Folder Tree View Standards

1. **Seamless View Mode Switching**:
   - The view switcher must be an ergonomic segmented pill (`.view-mode-toggle-group`) placed at the start of `.actions-left`.
   - Persist choice in `localStorage ("redis_insight_view_mode")`.
2. **Multi-Delimiter & Custom Delimiter Controls**:
   - Display active delimiters as interactive togglable chips (`.delim-chip.active` / `.delim-chip`).
   - Include a `+ Add` button triggering a lightweight popover for custom delimiters (single or multi-character, e.g. `::`, `#`, `|`).
   - Precedence: longest delimiters matched first to prevent premature splitting on substrings.
   - Persist delimiter sets per connection (`redis_insight_tree_delimiters_<connId>`).
3. **Compact Tree Toolbar**:
   - Delimiter chip container with horizontal flex wrapping.
   - Summary badge (`N Namespaces • M Keys`).
   - In-tree real-time filter box (`#treeFilterInput`) with clear icon.
   - Expand All and Collapse All buttons.
4. **Hierarchical Folder Structure**:
   - Folders display chevron toggle, folder icon, trailing delimiter (`:`), and key count badge.
   - Hover reveals a 1-click `Filter` button to immediately scope the Redis SCAN pattern to `prefix:*`.
   - Folder click toggles expansion without re-querying the backend.
   - Leaf keys display key icon, leaf name, type badge, TTL badge (`⏳ Expiring` or `∞ No TTL`), status, and action buttons (respecting Read-Only mode). Clicking a key opens the Key Inspector modal.

---

## 3. Typography, Numbers & Units Formatting

1. **Large Numbers**:
   - Always format numbers using `.toLocaleString()` (e.g. `1,000`, `10,000`, `250,420`). Never display raw unformatted numbers like `10000` or `250420`.
2. **Durations & Time Intervals**:
   - In compact buttons and dropdowns, use shorthand notation: `5s`, `10s`, `30s`, `1m`, `5m`.
   - In live countdowns: Show seconds if `< 60s` (`Auto: 15s`); show minutes and seconds if `≥ 60s` (`Auto: 4m 58s`).
3. **Memory & Byte Units**:
   - Use standard binary multiples (`B`, `KB`, `MB`, `GB`) with 2 decimal places.

---

## 4. Workspace Tabs & Modal Architecture Standards

### A. Separation of Workspace Tabs, Slide-Over Drawers vs Dialog Modals

1. **Analytical & Diagnostic Studios (Workspace Tabs)**:
   - Deep diagnostic surfaces (**Keys Browser**, **Benchmark Studio**, **Memory & BigKeys Studio**, **Slowlog Profiler**, **Cluster Topology Map**, **Connected Clients**) are rendered as full-surface workspace tabs (`.ws-tab-pane`) rather than stacked popup dialogs.
   - Tabs are toggled via the top navbar navigation pills (`.ws-tab-btn`) with active indicators.
   - Switching between tabs preserves scroll state, search filters, and loaded results without refetching unnecessarily.
   - **No `[x Esc]` Buttons on Tabs**: Workspace tabs are persistent surfaces navigated via tab pills. Do not place close buttons on tabs.
   - **Telemetry Single Source of Truth**: Never duplicate high-level numeric count badges on navigation tabs or inner H1 headers. The global top navbar vitals capsule is the authoritative single source of truth for high-level telemetry, eliminating state drift.

2. **Key Inspector Slide-Over Drawer**:
   - Key inspection (`#keyDetailModal`) uses a sleek glassmorphic slide-over drawer sliding in from the right edge (`width: 720px; max-width: 88vw; height: 100vh`).
   - The drawer uses a subtle transparent backdrop blur, keeping the keys table behind it visible and clickable so operators can rapidly inspect different keys without opening and closing modals repeatedly.
   - Dismissible via the header close button, `Escape` key, or clicking the backdrop area.

3. **Ephemeral Dialog Modals**:
   - Short-lived dialog interactions (Connection Configuration, Add Connection, Bulk Delete, Export Dialog, Deep Scan Safety Warning) use centered backdrop dialog modals (`.modal-backdrop` + `.modal-card`).
   - Must dismiss smoothly on `Escape` key and backdrop click.

### B. Memory Studio: TTL Horizon & Leak Audit Standards

1. **Scan Mode Selector & Safety Gate**:
   - Provide clear choice between **Sampled Scan (Default, Fast & Safe)** and **Full Keyspace Deep Scan**.
   - Any full keyspace scan must display the **Deep Scan Safety Modal** (`#deepScanSafetyModal`) with a clear warning explaining cluster overhead and non-blocking safety invariants, requiring explicit user confirmation.
2. **TTL Expiry Horizon Card**:
   - Stacked Progress Bar: Multi-colored horizon distribution bar visualizing the 5 buckets:
     - `< 1h`: Emerald (`#10b981`)
     - `1-24h`: Cyan (`#06b6d4`)
     - `1-7d`: Blue (`#3b82f6`)
     - `> 7d`: Purple (`#8b5cf6`)
     - `Persistent`: Rose (`#f43f5e`)
   - **Unified 5-Horizon KPI Row**: A single 5-column grid (`.mem-ttl-kpi-grid`) directly beneath the progress bar displaying exact recovery RAM, key count, and percentage per horizon bucket. Never repeat cumulative and bucketed rows simultaneously.
3. **Persistent Keys Leak Audit Above the Fold**:
   - By eliminating redundant middle banners, the **Persistent Keys Leak Audit** table remains visible above the fold on desktop viewports.
   - Tabulate top namespaces containing persistent keys (e.g. `session:*`, `cache:*`), their total count, and memory footprint.
   - Each namespace row features a 1-click **Filter in Keys** action button that switches to the Keys Browser tab, sets the pattern input, and activates the `Persistent` TTL filter.

### C. Connected Clients Inspector Standards

1. **App Self-Identification (`[THIS APP]`)**:
   - All client connections initialized by this application must send `client_name="redisinsight-py"`.
   - In the Connected Clients table, rows matching the current application connection display a cyan **`[THIS APP]`** badge (`.badge-db`).
2. **Hide Internal (This App) Quick Toggle**:
   - The toolbar features a `Hide Internal (This App)` toggle button (`#btnToggleHideInternalClients`) allowing operators to instantly filter out background diagnostic sessions and isolate user application traffic.
3. **Clean Remote Address**:
   - Render the client `IP:Port` address cleanly without repeating redundant `Target: ...` labels since the cluster target is already displayed in the top bar.
4. **Client Termination Safeguards**:
   - Terminating a client (`CLIENT KILL`) requires confirmation and must be disabled when connected in Read-Only mode.

### D. Benchmark & Latency Studio Standards

1. **Top Segmented Level Switcher**:
   - Navigation between the 4 levels (Probe, Commands, Lua Profiler, Cluster Matrix) uses clean segmented tabs (`.benchmark-tab-btn`).
   - Active sub-navigation pills use the application's primary cyan accent (`var(--accent-primary)`) to prevent visual confusion with warning or warning-state amber badges.
2. **Pre-Rendered Metric Preview Cards**:
   - In the empty state before execution, render preview metric cards with placeholder values (`-- ms`, `-- ops/s`) so operators understand expected outputs at a glance.
3. **Visual Latency Decomposition**:
   - Always display the dual-color **Latency Decomposition Bar** separating **Network Transit** (`#38bdf8`) from **Server CPU Time** (`#10b981`) with exact percentage and microsecond/millisecond tags.
4. **Atomicity Safeguards for Lua**:
   - Lua script profiling must prominently display a green **Atomicity Safe** banner for runs $\le 5\text{ms}$ and a bright red **High Atomicity Warning** banner for runs $> 5\text{ms}$ with clear explanatory guidance.
5. **Ephemeral Key Reassurance**:
   - Display a green safety badge confirming that benchmark keys are isolated to `__ri_bench__:*` and automatically deleted via `UNLINK`.
6. **Read-Only / PROD Lockout**:
   - In Read-Only mode or PROD environments, write benchmarks (`SET`, `HSET`) must be automatically locked out.

### E. Global Context Single Source of Truth & De-Duplication Standards

1. **Global Top Header as Single Source of Truth**:
   - Retain the active cluster context (name, endpoint, DB index, environment badge, topology status) **solely in the Global Top Header Bar** (`#topConnContainer`) and Left Sidebar.
   - Do NOT duplicate `Target: ...` sub-headers, subtitle badge clusters, or redundant target capsules inside individual workspace tab action bars. This saves 25% vertical screen space across all analytical views.
2. **Keys Browser Unified TTL / Expiration Column**:
   - Merge `TTL (SEC)` and `STATUS` into a single **TTL / Expiration** column.
   - **Persistent Keys**: Display a muted slate badge `∞ Persistent` (`#94a3b8`) to avoid false alarm fatigue (persistent keys are normal and expected).
   - **Expiring Keys**: Display an amber badge `⏳ 52s`.
3. **Sidebar Environmental Identification**:
   - In multi-connection deployments with identical cluster names across environments (e.g., `Cache Cluster` in DEV, UAT, PROD), embed the environmental badge (`DEV`, `UAT`, `PROD`) directly in the connection card title row to make environments instantly recognizable without checking truncated hostnames.

### F. Redis Stream Inspector Standards

1. **Human-Readable Timestamp Parsing**:
   - Stream entry IDs follow the standard Redis format `<timestamp_ms>-<seq>` (e.g. `1760414000000-0`).
   - Extract the millisecond timestamp, format it to local ISO date/time, and append a high-contrast relative duration badge (`1S AGO`, `5M AGO`, `2D AGO`).
2. **Interactive Live Search Filter**:
   - Provide an instant client-side search input (`#streamFilterInput`) inside `.stream-meta-bar`.
   - Filter stream entries across Entry IDs, field names, and field values in real-time.
   - Render a live count counter: `Showing X of Y entries`.
3. **High-Contrast Field-Value Badges & Clipboard Feedback**:
   - Group field-value pairs into compact chips (`.stream-entry-pill`).
   - Include 1-click **Copy ID** and **Copy JSON** buttons for each entry.
   - On copy, animate the icon to a green checkmark (`Check`) with visual feedback (`Copied!`), restoring original state after 1.5 seconds.

### G. Zero Auto-Command Firing & Explicit Prompt Standards

1. **Zero Auto-Command Invariant on Cluster Switch**:
   - When switching clusters, **ONLY** the landing screen (Keys Browser) automatically queries Redis.
   - Diagnostic studios (**Memory Studio**, **Benchmark Studio**, **Slowlog Profiler**, **Connected Clients**, **Cluster Topology**) **MUST NEVER** automatically fire Redis commands in the background.
2. **Explicit User-Initiated Analysis Card**:
   - When switching to a new cluster while a diagnostic tab is open, reset previous metrics and render an informative zero-fetch prompt card (`.memory-prompt-card` or equivalent).
   - Display the new cluster's name, host:port endpoint, node count, and an explicit action button (e.g., `Start Profiling`, `Load Slowlog`, `Inspect Clients`).
3. **In-Flight Cancellation via AbortController**:
   - Any long-running fetch operation (e.g. keyspace scan or memory analysis) must track an `AbortController`.
   - On cluster switch, immediately call `abortController.abort()` to cancel the in-flight network request and prevent race conditions or stale metrics from contaminating the newly selected cluster.

### H. Real-Time Slowlog & Latency Profiler Standards

1. **Dual Dimension Toolbar (Time Window & Min Latency)**:
   - Separate the filter bar into two distinct button groups divided by `.actions-divider`:
     - **Time Window**: `All`, `5m`, `15m`, `1h`, `24h` (`.slowlog-time-btn`) with cyan active state (`#38bdf8`).
     - **Min Latency**: `All`, `> 1ms`, `> 5ms`, `> 10ms`, `> 50ms` (`.slowlog-filter-btn`) with blue active state.
2. **Instant In-Memory Filtering**:
   - Filtering by Time Window or Min Latency evaluates in-memory cached entries client-side without firing additional Redis commands.
3. **Relative Time Formatting**:
   - Every slowlog entry displays its human-readable execution time string alongside a high-contrast relative duration badge (`15s ago`, `2m ago`, `1h ago`).
4. **Slowlog Export (JSON & CSV)**:
   - Provide an Export modal (`#exportSlowlogModal`) supporting JSON (full telemetry with arguments array) and CSV formats.
   - Operators can toggle export scope between currently filtered entries and all loaded buffer entries.
5. **Slowlog Command Zoom & Detailed Inspector (`#slowlogDetailModal`)**:
   - Clicking any command code box or the `[🔍 Zoom]` icon opens the Slowlog Command Inspector.
   - **Dedicated Lua Script Zoom Box**: When inspecting `EVAL` or `EVALSHA`, displays a formatted multiline code box with line counts, byte size, 1-click Lua copy, and parsed `KEYS` / `ARGV` chip breakdown.
   - **Arguments Breakdown Table**: Lists every argument with its index, role (`COMMAND`, `LUA SCRIPT`, `NUMKEYS`, `KEYS[i]`, `ARGV[i]`), byte length, and individual copy action.
   - **Redis Server-Side Truncation Notice**: Automatically detects when Redis truncated an argument (`... (N more bytes)`) and renders an explicit informational badge explaining the Redis C engine compile-time limit (`SLOWLOG_ENTRY_MAX_STRING = 128`), preventing operator confusion.

---

## 5. Read-Only Mode & Safety Guardrails

When Read-Only mode is active (globally via `APP_READONLY=true` or per-connection via `read_only: true` / PROD auto-lock):

1. **Prominent Navbar Security Badge**:
   - The top navigation bar must render the **`[🔒 READ ONLY]`** amber badge (`.badge-readonly`) immediately adjacent to the environment badge.
   - Tooltip must state: `"Read-Only Mode: All write, update, and delete actions are locked"`.
2. **Mutating Control Suppression**:
   - **Bulk Delete**: The toolbar button must be visibly disabled (`opacity: 0.4`, `cursor: not-allowed`) with tooltip `🔒 Bulk Delete is disabled in Read-Only mode`.
   - **Row-Level Deletions**: In the keys table, bigkeys table, and client inspector, replace active delete/trash icon buttons with a subtle lock icon (`<i data-lucide="lock"></i>`) and tooltip.
   - **Key Detail Modal**: The "Delete Key" button and "Add Field" button must be hidden. The "Edit TTL" button must be replaced by a locked badge (`🔒 Locked`).
   - **Slowlog Modal**: The "Reset Slowlog" button must be hidden.
3. **Defense-in-Depth UI Feedback**:
   - If an action or hotkey triggers a delete confirmation modal or prompt while in read-only mode, it must immediately alert the user (`"... is disabled in Read-Only mode."`) without initiating network requests or modal opens.

---

## 6. Glassmorphic Toast System & Zero-Alert Standard

1. **Strict Prohibition of Native Browser Popups**:
   - **NEVER** use `window.alert()`, `window.confirm()`, or `window.prompt()`. They freeze the browser event loop, look disconnected from the glassmorphic dark theme, and degrade UX.
2. **Toast System (`frontend/src/modules/toast.js`)**:
   - Use `showToast(message, type, durationMs)`:
     - `success` (green): Successful copies, connection activations, exports.
     - `error` (red): Failed network requests, command errors, copy failures.
     - `warning` (amber): Rate limiting, read-only warnings, large dataset safety gates.
     - `info` (blue): General background task updates.
   - Toasts render in `#appToastContainer` (`.toast-container`) with backdrop blur, smooth slide-in/slide-out animations, and auto-dismiss after 2500ms (pauses on hover).
3. **In-Place Copy Feedback (`triggerButtonFeedback`)**:
   - All copy buttons (Key name, String value, JSON, Stream ID/JSON, BigKey, Slowlog command) must immediately switch in-place to `<svg> Check` + `Copied!` (or `Key Copied!`) for 1500ms.
4. **Resilient `copyToClipboard()`**:
   - Always call `copyToClipboard(text)` from `toast.js`. It utilizes modern `navigator.clipboard.writeText` when available in secure contexts and automatically falls back to hidden `document.execCommand('copy')` on unprivileged HTTP dev domains or automated test runners.

---

## 7. Large Keyspace Performance (100K to 1M Keys)

1. **Virtual Windowing (`renderKeysFlatTable`)**:
   - When displayed rows exceed 100, the table automatically activates virtual windowing.
   - Only ~60 visible rows are mounted in `#keysTableViewport` at any given time based on scroll offset.
   - Dynamic top and bottom spacers maintain precise scrollbar proportions based on `VIRTUAL_ROW_HEIGHT = 44px`.
2. **Event Delegation**:
   - Never register individual click listeners in loops across thousands of rows.
   - Use a single delegated click listener on `#gridViewerContainer` matching `.key-row` or action buttons.
3. **Lazy Tree View**:
   - Virtual Folder Tree nodes only generate DOM children when the folder is expanded (`isExpanded`). Collapsed hierarchies consume near-zero DOM elements.
4. **Lightweight Action SVGs**:
   - Avoid calling heavy `setupIcons()` Lucide scans during scroll frames. Action icons rendered in virtual rows use lightweight inline SVGs.

---

## 8. Visual Scan Progress & Shimmer Bar

1. **Shimmer Progress Bar**:
   - During active Redis cursor sweeps, display the animated glassmorphic shimmer indicator (`#keysLoadingShimmer` / `.scan-progress-shimmer`) right above the table header.
2. **Active Scan Spinner Badge**:
   - `#scanStatusText` renders an animated spinning SVG badge and live cursor progress (`Scanning cursor: <cursor>`).
3. **Initial Loading Card**:
   - During the first keys fetch, render a centered `.table-loading-card` with double-ring spinner instead of an empty table.

---

## 9. Dual-Mode Search & Browser Memory Safety Ceiling Guards

1. **Dual-Mode Keyspace Search**:
   - **Instant In-Memory Filter (`searchScope = "local"`)**:
     - Evaluates queries directly against in-memory key rows in `< 1ms` (typically 0.1ms – 0.5ms).
     - Does **ZERO network calls** to Redis, preventing CPU starvation or cluster failovers on busy production nodes.
     - Supports Regex literals (e.g. `/^user:[0-9]+$/i`), Glob patterns (`orders:*`, `*cache*`), and fast case-insensitive substring matches.
     - Live execution telemetry badge (`#searchMatchCountBadge`) displays `X / Y (Z ms)`.
   - **Cluster SCAN (`searchScope = "remote"`)**:
     - Performs cursor-based `SCAN` sweeps directly against the Redis cluster master nodes.
   - **Smart Fallback & Shift+Enter**:
     - If an in-memory search yields 0 matches among loaded keys, pressing `Enter` or clicking the fallback button `[🌐 Scan Redis Cluster for "..."]` automatically triggers a remote cluster scan.
     - Pressing `Shift+Enter` inside the search input always triggers a remote Redis scan regardless of current scope.
   - **Clear Button (`#btnClearSearchQuery`)**:
     - Inline `[x]` button inside the input quickly resets the search pattern back to `*` with zero network delay.

2. **Browser Memory Safety Ceiling Guard**:
   - Default ceiling guard: **100,000 loaded keys** (`maxLoadedKeysLimit`).
   - When keys accumulated via progressive "Load More" reaches the ceiling, further accumulation is paused:
     - An alert banner (`#memoryLimitBanner`) appears above the toolbar.
     - The "Load More" button transitions to a disabled `Memory Ceiling (100,000)` state with a warning shield.
     - Operators can explicitly click `Raise Ceiling (+100,000)` if client hardware has sufficient RAM.

3. **Web Worker Keyspace Indexing & Namespace Studio (Phase 3)**:
   - Evaluates prefix tokenization, large regex matching, and key hygiene analysis in background thread `keys-worker.js`.
   - **Keyspace Namespace & Hygiene Studio Modal** (`#namespaceModal`):
     - Purple header badge with KPI overview (Total Keys, Distinct Namespaces, Top Namespace % share, Hygiene Flags).
     - **Namespace Distribution**: lists prefixes with color-coded horizontal progress bars and a 1-click `[🔍 Filter]` button that instantly updates local search and closes the modal.
4. **Responsive Keys Actions Bar & Compact Telemetry**:
   - The keys actions bar (`.keys-actions-bar`) enforces zero horizontal clipping and zero horizontal scrolling on all desktop resolutions:
     - `flex-wrap: wrap; gap: 0.45rem;` allows graceful wrapping onto balanced rows on narrower screens.
     - Status telemetry uses compact notation (`Loaded X / Y keys (All)`) to conserve horizontal space.
     - Uniform toolbar action buttons (`.btn-toolbar-action`) with standardized padding (`0.26rem 0.52rem`) keep controls aligned and compact.

---

## 11. Mandatory Pre-Commit & Pre-Push Checklist

Before opening any Pull Request or committing changes, verify and complete this checklist:

```markdown
- [ ] 1. Frontend Build: Run `cd frontend && npm run build` (0 errors, dist updated).
- [ ] 2. Backend Automated Tests: Run `PYTHONPATH=. pytest tests/` (All 106+ tests must pass).
- [ ] 3. Playwright E2E Tests: Run `cd frontend && npx playwright test` (All 19+ tests must pass).
- [ ] 4. Documentation & Skills Synchronization:
      - [ ] `AGENTS.md` updated with any new architecture rules, flags, or modules.
      - [ ] `.agents/skills/redis-insight-dev/SKILL.md` updated with new runbooks or APIs.
      - [ ] `docs/UI_UX_GUIDELINES.md` updated with new UI components, styles, or patterns.
      - [ ] `README.md` updated if new configuration variables, endpoints, or features were introduced.
      - [ ] `docs/LOCAL_TESTING.md` updated if local test prerequisites or commands changed.
- [ ] 5. Git Branch Protection:
      - [ ] Confirm active branch is NOT `main` (`git branch --show-current`).
      - [ ] Push to feature branch and open PR via `gh pr create`.
```


