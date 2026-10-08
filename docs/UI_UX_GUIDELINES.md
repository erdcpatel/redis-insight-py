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
│ Actions Bar: Keys per scan: [50▾] [↓ Load More]     │ [⤓ Export] [🗑 Bulk Delete]    │
└────────────────────────────────────────────────────────────────────────┘
```

- **Panel 1 (`.chunk-status-bar`)**:
  - Left: `.safety-badge` + `.scan-status-text`
  - Right: `#autoRefreshGroup` (segmented toggle pill) + `#btnResetScan`
- **Panel 2 (`.keys-actions-bar`)**:
  - Left: `#scanBatchSizeSelect` + `#btnScanNext`
  - Right: Utility tools like `#btnOpenExportModal` and `#btnOpenBulkDeleteModal`

### B. Segmented Auto-Refresh Pill Pattern

- Always pair live periodic watchers into a **compact segmented pill**:
  - Toggle Button: Shows active pulsing indicator and countdown (`Auto: 10s`, `Auto: 4m 30s`, `Auto: Off`).
  - Interval Select: Narrow select (`width: 58px; max-width: 62px; text-align: center; font-weight: 500;`).
  - Standard intervals: `5s`, `10s`, `15s`, `30s`, `1m`, `2m`, `5m`.

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

## 4. Modal Design Standards

All dialogs and profilers must follow the standard modal architecture:

- **Backdrop**: `backdrop-filter: blur(8px)` with smooth fade-in.
- **Card**: Max width constrained (`720px` for dialogs, `980px` for wide analysis tables like Slowlog, Memory, and Topology).
- **Header**:
  - Clear icon + title.
  - Context badges (Environment, Node Count, Status).
  - Refresh button (`btn-secondary`) + Close button (`btn-icon` with `id="btnClose<Name>Modal"`).
- **Footer**:
  - Right-aligned buttons with explicit primary and cancel actions.
- **Keyboard Shortcuts**:
  - Pressing `Escape` must close any active modal.
  - Modals must pause active background polling to conserve bandwidth and prevent state conflicts.

---

## 5. UI/UX Pre-PR Verification Checklist

Before opening any Pull Request:

1. [ ] **Responsive Test**: Shrink browser window to `1024px` and verify toolbars don't wrap awkwardly or overlap.
2. [ ] **Control Sizing**: Verify no dropdown or input is excessively wide or misaligned.
3. [ ] **Visual Feedback**: Verify hover states, active pulsing dots, and tooltip text work as expected.
4. [ ] **Automated E2E Suite**: Run `./scripts/run_e2e_tests.sh` to ensure Playwright browser tests pass.
