// @ts-check
import { test, expect } from '@playwright/test';
import { execSync } from 'child_process';

test.describe('Cluster Switch Lifecycle & State Isolation', () => {

  test.beforeEach(async () => {
    try {
      execSync('redis-cli -p 6379 DEL test:stream:events');
      execSync('redis-cli -p 6379 XADD test:stream:events "*" user_id u100 action login ip 127.0.0.1');
      execSync('redis-cli -p 6379 XADD test:stream:events "*" user_id u101 action purchase amount 49.99');
    } catch (_) {}
  });

  test('Switching clusters invalidates diagnostic caches and prompts for explicit load', async ({ page, request }) => {
    // 1. Setup two standalone connections
    const conn1Res = await request.post('/api/connections', {
      data: {
        name: 'Cluster Alpha Lifecycle',
        host: '127.0.0.1',
        port: 6379,
        conn_type: 'standalone',
        env: 'DEV'
      }
    });
    expect(conn1Res.ok()).toBeTruthy();
    const conn1 = await conn1Res.json();

    const conn2Res = await request.post('/api/connections', {
      data: {
        name: 'Cluster Beta Lifecycle',
        host: '127.0.0.1',
        port: 6379,
        conn_type: 'standalone',
        env: 'UAT'
      }
    });
    expect(conn2Res.ok()).toBeTruthy();
    const conn2 = await conn2Res.json();

    try {
      // Connect both
      await request.post(`/api/connections/${conn1.id}/connect`);
      await request.post(`/api/connections/${conn2.id}/connect`);
      await request.post(`/api/connections/${conn1.id}/select`);

      // 2. Open page
      await page.goto('/');
      await expect(page.locator('.key-row').first()).toBeVisible({ timeout: 10000 });

      // 3. Navigate to Memory tab for Alpha
      const tabMemory = page.locator('button[data-tab="memory"]');
      await tabMemory.click();
      await expect(page.locator('#memoryModal')).toHaveClass(/active/);

      // Verify explicit prompt is visible for Alpha
      const btnLoadMemOverview = page.locator('#btnLoadMemoryOverviewExplicit');
      await expect(btnLoadMemOverview).toBeVisible();
      await expect(page.locator('.mem-cluster-prompt-card')).toContainText('Cluster Alpha Lifecycle');

      // Click explicit Load Memory Overview
      await btnLoadMemOverview.click();
      await expect(page.locator('.mem-grid')).toBeVisible({ timeout: 10000 });
      await expect(page.locator('.mem-stat-card').first()).toBeVisible();

      // Verify safeguard box shows Target: Cluster Alpha Lifecycle
      const safeguardBox = page.locator('.mem-safeguard-box');
      await expect(safeguardBox).toBeVisible();
      await expect(safeguardBox).toContainText('Cluster Alpha Lifecycle');

      // 4. Switch to Slowlog tab for Alpha and click fetch
      const tabSlowlog = page.locator('button[data-tab="slowlog"]');
      await tabSlowlog.click();
      const btnFetchSlowlog = page.locator('#btnFetchSlowlogExplicit');
      await expect(btnFetchSlowlog).toBeVisible();
      await expect(page.locator('#slowlogTableContainer')).toContainText('Cluster Alpha Lifecycle');
      await btnFetchSlowlog.click();
      await expect(page.locator('#slowlogFooterStats')).toBeVisible();

      // 5. Now switch cluster to Beta from the sidebar
      const betaCard = page.locator(`.conn-card[data-id="${conn2.id}"]`);
      await expect(betaCard).toBeVisible();
      await betaCard.hover();
      const btnSelectBeta = betaCard.locator('.btn-card-select');
      await btnSelectBeta.click({ force: true });

      // Wait for top bar to update to Cluster Beta
      await expect(page.locator('#topConnContainer')).toContainText('Cluster Beta Lifecycle');

      // 6. Verify Slowlog tab immediately cleared and shows Beta prompt (NO auto-command fired)
      await expect(page.locator('#slowlogTableContainer')).toContainText('Cluster Beta Lifecycle');
      await expect(page.locator('#btnFetchSlowlogExplicit')).toBeVisible();

      // 7. Verify Memory tab is reset and shows Beta prompt without stale Alpha data
      await tabMemory.click();
      await expect(page.locator('.mem-cluster-prompt-card')).toContainText('Cluster Beta Lifecycle');
      await expect(page.locator('#btnLoadMemoryOverviewExplicit')).toBeVisible();
      await expect(page.locator('.mem-grid')).not.toBeVisible();

      // 8. Verify Connected Clients tab shows Beta prompt
      const tabClients = page.locator('button[data-tab="clients"]');
      await tabClients.click();
      await expect(page.locator('#clientsTableContainer')).toContainText('Cluster Beta Lifecycle');
      await expect(page.locator('#btnFetchClientsExplicit')).toBeVisible();

      // 9. Verify Topology tab shows Beta prompt
      const tabTopology = page.locator('button[data-tab="topology"]');
      await tabTopology.click();
      await expect(page.locator('#topologyTableContainer')).toContainText('Cluster Beta Lifecycle');
      await expect(page.locator('#btnFetchTopologyExplicit')).toBeVisible();

    } finally {
      await request.delete(`/api/connections/${conn1.id}`);
      await request.delete(`/api/connections/${conn2.id}`);
    }
  });

  test('Memory Studio supports scan cancellation without error modals', async ({ page }) => {
    // Intercept /api/memory/analyze with a delay to reliably exercise in-flight cancellation
    await page.route('**/api/memory/analyze**', async (route) => {
      await new Promise(r => setTimeout(r, 1200));
      await route.continue().catch(() => {});
    });

    // 1. Open Memory tab
    await page.goto('/');
    const tabMemory = page.locator('button[data-tab="memory"]');
    await tabMemory.click();

    // 2. Click Start Memory & BigKeys Profiling
    const btnStart = page.locator('#btnStartProfilingAction');
    await expect(btnStart).toBeVisible();
    await btnStart.click();

    // 3. In-flight cancellation button should appear
    const btnCancel = page.locator('#btnCancelMemoryProfiling');
    await expect(btnCancel).toBeVisible({ timeout: 5000 });
    await btnCancel.click();

    // Safeguard should be restored with cancellation notice
    await expect(page.locator('#memoryProfilingContainer')).toContainText(/cancelled/i);
    // Ensure no modal popped up
    await expect(page.locator('.modal-backdrop:not(.ws-dashboard-pane).active')).toHaveCount(0);
  });

  test('Redis Stream inspection renders dedicated entries table without [object Object]', async ({ page }) => {
    // Seed stream key in redis idempotently
    try {
      execSync('redis-cli -p 6379 DEL test:stream:events');
      execSync('redis-cli -p 6379 XADD test:stream:events "*" user_id u100 action login ip 127.0.0.1');
      execSync('redis-cli -p 6379 XADD test:stream:events "*" user_id u101 action purchase amount 49.99');
    } catch (_) {}

    // 1. Open page and search for stream key
    await page.goto('/');
    await expect(page.locator('.key-row').first()).toBeVisible({ timeout: 10000 });

    const searchInput = page.locator('#keySearchInput');
    await searchInput.fill('test:stream:events');
    await searchInput.press('Enter');

    // Click inspect key
    const streamKeyRow = page.locator('.btn-inspect-key:has-text("test:stream:events")').first();
    await expect(streamKeyRow).toBeVisible({ timeout: 10000 });
    await streamKeyRow.click();

    // Inspector modal should open
    const modal = page.locator('#keyDetailModal');
    await expect(modal).toHaveClass(/active/);
    await expect(page.locator('#detailKeyTitle')).toContainText('test:stream:events');

    // Verify stream entries table is rendered
    const streamTable = page.locator('#detailBodyContent table.data-table');
    await expect(streamTable).toBeVisible();

    // Verify [object Object] does NOT exist in inspector content
    const modalText = await page.locator('#detailBodyContent').innerText();
    expect(modalText).not.toContain('[object Object]');
    expect(modalText).toContain('entries');
    expect(modalText).toContain('action');

    // Test stream interactive filter
    const filterInput = page.locator('#streamFilterInput');
    await expect(filterInput).toBeVisible();
    await filterInput.fill('purchase');
    await expect(page.locator('#streamEntriesTbody tr.stream-entry-row:visible')).toHaveCount(1);
    await expect(page.locator('#streamFilterCountText')).toContainText('Showing 1 of 2 entries');

    // Reset filter
    await filterInput.fill('');
    await expect(page.locator('#streamEntriesTbody tr.stream-entry-row:visible')).toHaveCount(2);

    // Close modal
    await page.locator('#btnCloseDetailModal').click();
  });

  test('Validate UI UX across all workspace tabs with in-pane context bars and take snapshots', async ({ page }) => {
    const snapDir = '/Users/dhavalpatel/.gemini/antigravity/brain/7f43d7c0-af33-419e-b2aa-bab690b5834a/snapshots';
    await page.setViewportSize({ width: 1440, height: 900 });

    // 1. Keys Browser with active connection in top bar
    await page.goto('/');
    await expect(page.locator('#topConnContainer')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('#topConnContainer')).toContainText('127.0.0.1');
    await page.screenshot({ path: `${snapDir}/01_keys_browser.png` });

    // 2. Benchmark Studio
    const tabBench = page.locator('button[data-tab="benchmark"]');
    await tabBench.click();
    await expect(page.locator('#benchmarkPaneProbe')).toBeVisible();
    await page.screenshot({ path: `${snapDir}/02_benchmark_studio.png` });

    // 3. Memory Studio prompt state
    const tabMemory = page.locator('button[data-tab="memory"]');
    await tabMemory.click();
    await expect(page.locator('#memoryModal')).toBeVisible();
    await page.screenshot({ path: `${snapDir}/03_memory_prompt.png` });

    // Load Memory Overview & Run Profiling
    const btnLoadMem = page.locator('#btnLoadMemoryOverviewExplicit');
    if (await btnLoadMem.isVisible()) {
      await btnLoadMem.click();
    }
    const btnStart = page.locator('#btnStartProfilingAction');
    await expect(btnStart).toBeVisible();
    await btnStart.click();
    await expect(page.locator('#memoryProfilingContainer table').first()).toBeVisible({ timeout: 15000 });
    await page.screenshot({ path: `${snapDir}/04_memory_analyzed.png` });

    // 4. Slowlog Profiler
    const tabSlowlog = page.locator('button[data-tab="slowlog"]');
    await tabSlowlog.click();
    await expect(page.locator('#slowlogModal')).toBeVisible();
    const btnFetchSlow = page.locator('#btnFetchSlowlogExplicit');
    if (await btnFetchSlow.isVisible()) {
      await btnFetchSlow.click();
    }
    await page.screenshot({ path: `${snapDir}/05_slowlog.png` });

    // 5. Connected Clients
    const tabClients = page.locator('button[data-tab="clients"]');
    await tabClients.click();
    await expect(page.locator('#clientsListModal')).toBeVisible();
    const btnFetchClients = page.locator('#btnFetchClientsExplicit');
    if (await btnFetchClients.isVisible()) {
      await btnFetchClients.click();
    }
    await page.screenshot({ path: `${snapDir}/06_clients.png` });

    // 6. Cluster Topology
    const tabTopology = page.locator('button[data-tab="topology"]');
    await tabTopology.click();
    await expect(page.locator('#clusterTopologyModal')).toBeVisible();
    await page.screenshot({ path: `${snapDir}/07_topology.png` });

    // 7. Stream Inspector snapshot
    const tabKeys = page.locator('button[data-tab="keys"]');
    await tabKeys.click();
    const searchInput = page.locator('#keySearchInput');
    await searchInput.fill('test:stream:events');
    await searchInput.press('Enter');
    const streamRow = page.locator('.btn-inspect-key:has-text("test:stream:events")').first();
    await expect(streamRow).toBeVisible({ timeout: 10000 });
    await streamRow.click();
    await expect(page.locator('#keyDetailModal')).toHaveClass(/active/);
    await expect(page.locator('#streamEntriesTable')).toBeVisible();
    await page.screenshot({ path: `${snapDir}/08_stream_inspector.png` });

    // 8. Stream Inspector Filter snapshot
    const filterInput = page.locator('#streamFilterInput');
    await filterInput.fill('purchase');
    await expect(page.locator('#streamEntriesTbody tr.stream-entry-row:visible')).toHaveCount(1);
    await page.screenshot({ path: `${snapDir}/09_stream_filtered.png` });
  });

});
