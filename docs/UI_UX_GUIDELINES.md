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

### A. Separation of Workspace Tabs vs Dialog Modals

1. **Analytical & Diagnostic Studios (Workspace Tabs)**:
   - Deep diagnostic surfaces (**Keys Browser**, **Benchmark Studio**, **Memory & BigKeys Studio**, **Slowlog Profiler**, **Cluster Topology Map**, **Connected Clients**) are rendered as full-surface workspace tabs (`.ws-tab-pane`) rather than stacked popup dialogs.
   - Tabs are toggled via the top navbar navigation pills (`.ws-tab-btn`) with active indicators.
   - Switching between tabs preserves scroll state, search filters, and loaded results without refetching unnecessarily.
2. **Ephemeral Dialog Modals**:
   - Short-lived interactions (Connection Configuration, Add Connection, Key Inspector, Bulk Delete, Export Dialog, Deep Scan Safety Warning) use centered backdrop dialog modals (`.modal-backdrop` + `.modal-card`).
   - Must dismiss smoothly on `Escape` key and backdrop click.

### B. Memory Studio: TTL Horizon & Leak Audit Standards

1. **Scan Mode Selector & Safety Gate**:
   - Provide clear choice between **Sampled Scan (Default, Fast & Safe)** and **Full Keyspace Deep Scan**.
   - Any full keyspace scan must display the **Deep Scan Safety Modal** (`#deepScanSafetyModal`) with a clear warning explaining cluster overhead and non-blocking safety invariants, requiring explicit user confirmation.
2. **TTL Expiry Horizon Card**:
   - Summary KPIs: Projected memory reclaimed in next **1h**, **24h**, **7d**, and **Unexpiring Memory %**.
   - Stacked Progress Bar: Multi-colored horizon distribution bar visualizing the 5 buckets:
     - `< 1h`: Cyan (`#38bdf8`)
     - `1-24h`: Emerald (`#10b981`)
     - `1-7d`: Amber (`#f59e0b`)
     - `> 7d`: Indigo (`#818cf8`)
     - `Persistent`: Rose (`#f43f5e`)
3. **Persistent Keys Leak Audit**:
   - Tabulate top namespaces containing persistent keys (e.g. `session:*`, `cache:*`), their total count, and memory footprint.
   - Each namespace row must feature a 1-click **Filter in Keys** action button that switches to the Keys Browser tab, sets the pattern input, and activates the `Persistent` TTL filter.

### C. Connected Clients Inspector Standards

1. **App Self-Identification (`[THIS APP]`)**:
   - All client connections initialized by this application must send `client_name="redisinsight-py"`.
   - In the Connected Clients table, rows matching the current application connection must display a prominent cyan **`[THIS APP]`** badge (`.badge-db`) so operators never mistake monitoring traffic for external microservice load.
2. **Client Termination Safeguards**:
   - Terminating a client (`CLIENT KILL`) requires confirmation and must be disabled when connected in Read-Only mode.

### D. Benchmark & Latency Studio Standards

1. **Top Segmented Level Switcher**:
   - Navigation between the 4 levels (Probe, Commands, Lua Profiler, Cluster Matrix) must use clean segmented tabs (`.benchmark-tab-btn`).
2. **Visual Latency Decomposition**:
   - Always display the dual-color **Latency Decomposition Bar** separating **Network Transit** (`#38bdf8`) from **Server CPU Time** (`#10b981`) with exact percentage and microsecond/millisecond tags.
3. **Atomicity Safeguards for Lua**:
   - Lua script profiling must prominently display a green **Atomicity Safe** banner for runs $\le 5\text{ms}$ and a bright red **High Atomicity Warning** banner for runs $> 5\text{ms}$ with clear explanatory guidance.
4. **Ephemeral Key Reassurance**:
   - Display a green safety badge confirming that benchmark keys are isolated to `__ri_bench__:*` and automatically deleted via `UNLINK`.
5. **Read-Only / PROD Lockout**:
   - In Read-Only mode or PROD environments, write benchmarks (`SET`, `HSET`) must be automatically locked out.

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

## 6. UI/UX Pre-PR Verification Checklist

Before opening any Pull Request:

1. [ ] **Responsive Test**: Shrink browser window to `1024px` and verify toolbars don't wrap awkwardly or overlap.
2. [ ] **Control Sizing**: Verify no dropdown or input is excessively wide or misaligned.
3. [ ] **Visual Feedback**: Verify hover states, active pulsing dots, and tooltip text work as expected.
4. [ ] **Read-Only Mode Test**: Connect to a PROD or read-only connection and confirm `[🔒 READ ONLY]` badge appears, bulk delete is disabled, and mutation controls are hidden/locked.
5. [ ] **Automated E2E Suite**: Run `./scripts/run_e2e_tests.sh` to ensure Playwright browser tests pass.
