import { test, expect } from '@playwright/test';

test.describe('RedisInsight E2E UI & Cluster Verification', () => {

  test('Page loads and renders top bar and connection controls', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Redis Insight/i);
    
    // Check main layout elements
    const topBar = page.locator('#topConnContainer');
    await expect(topBar).toBeVisible();
  });

  test('6-Node Cluster displays "6 Nodes" on top bar and Topology Modal displays all 6 nodes', async ({ page, request }) => {
    // 1. Ensure cluster connection exists and activate it via API
    const connsRes = await request.get('/api/connections');
    expect(connsRes.ok()).toBeTruthy();
    const conns = await connsRes.json();
    
    let clusterConn = conns.find(c => (c.host === '127.0.0.1' || c.host === 'localhost') && c.port === 7000 && c.conn_type === 'cluster');
    if (!clusterConn) {
      const createRes = await request.post('/api/connections', {
        data: {
          name: 'E2E 6-Node Cluster',
          host: '127.0.0.1',
          port: 7000,
          conn_type: 'cluster',
          cluster_nodes: '127.0.0.1:7000,127.0.0.1:7001,127.0.0.1:7002,127.0.0.1:7003,127.0.0.1:7004,127.0.0.1:7005',
          env: 'LOCAL',
        }
      });
      clusterConn = await createRes.json();
    }

    const actRes = await request.post(`/api/connections/${clusterConn.id}/activate`);
    expect(actRes.ok()).toBeTruthy();

    // 2. Load page and inspect top bar vitals
    await page.goto('/');
    
    // Check top bar connection badge
    const connBadge = page.locator('#topConnContainer');
    await expect(connBadge).toContainText('CLUSTER');

    // 3. CRITICAL BUG VERIFICATION: Top bar vitals button must show "6 Nodes" (NOT "1 Node")
    const topologyBtn = page.locator('#btnOpenTopologyTop');
    await expect(topologyBtn).toBeVisible({ timeout: 10000 });
    await expect(topologyBtn).toContainText('6 Nodes');

    // 4. Clicking the "6 Nodes" button opens the Cluster Topology Modal
    await topologyBtn.click();
    const modal = page.locator('#clusterTopologyModal');
    await expect(modal).toHaveClass(/active/);

    // 5. Verify the modal renders all 6 nodes
    const countBadge = page.locator('#topologyNodesCountBadge');
    await expect(countBadge).toContainText('6 Nodes');

    // Verify table has 6 node rows
    const rows = page.locator('#topologyTableContainer table tbody tr');
    await expect(rows).toHaveCount(6);

    // 6. Close the modal
    const closeBtn = page.locator('#btnCloseTopologyModal');
    await closeBtn.click();
    await expect(modal).not.toHaveClass(/active/);
  });

  test('Standalone instance displays "1 Node" on top bar', async ({ page, request }) => {
    // 1. Ensure standalone connection exists and activate it
    const connsRes = await request.get('/api/connections');
    expect(connsRes.ok()).toBeTruthy();
    const conns = await connsRes.json();
    
    let standaloneConn = conns.find(c => (c.host === '127.0.0.1' || c.host === 'localhost') && c.port === 6379 && c.conn_type === 'standalone');
    if (!standaloneConn) {
      const createRes = await request.post('/api/connections', {
        data: {
          name: 'E2E Standalone',
          host: '127.0.0.1',
          port: 6379,
          conn_type: 'standalone',
          env: 'LOCAL',
        }
      });
      standaloneConn = await createRes.json();
    }

    const actRes = await request.post(`/api/connections/${standaloneConn.id}/activate`);
    expect(actRes.ok()).toBeTruthy();

    // 2. Load page and inspect top bar
    await page.goto('/');
    
    const connBadge = page.locator('#topConnContainer');
    await expect(connBadge).toContainText('DB0');

    // Standalone must show "1 Node"
    const topologyBtn = page.locator('#btnOpenTopologyTop');
    await expect(topologyBtn).toBeVisible({ timeout: 10000 });
    await expect(topologyBtn).toContainText('1 Node');
  });

  test('Diagnostics modals (Clients, Memory) open and close cleanly', async ({ page }) => {
    await page.goto('/');

    // Clients Modal
    const clientsBtn = page.locator('#btnOpenClientsModal');
    if (await clientsBtn.isVisible()) {
      await clientsBtn.click();
      const clientsModal = page.locator('#clientsListModal');
      await expect(clientsModal).toHaveClass(/active/);
      const closeClientsBtn = page.locator('#btnCloseClientsModal');
      await closeClientsBtn.click();
      await expect(clientsModal).not.toHaveClass(/active/);
    }

    // Memory Profiler Modal
    const memBtn = page.locator('#btnOpenMemoryTop');
    if (await memBtn.isVisible()) {
      await memBtn.click();
      const memModal = page.locator('#memoryModal');
      await expect(memModal).toHaveClass(/active/);
      const closeMemBtn = page.locator('#btnCloseMemoryModal');
      await closeMemBtn.click();
      await expect(memModal).not.toHaveClass(/active/);
    }
  });

  test('Batch size supports 10,000 keys and Auto-refresh offers 5m interval', async ({ page }) => {
    await page.goto('/');

    // 1. Verify scanBatchSizeSelect has 10000 option and selection updates chunk label
    const batchSelect = page.locator('#scanBatchSizeSelect');
    await expect(batchSelect).toBeVisible();
    
    // Check that option 10000 exists
    const opt10k = batchSelect.locator('option[value="10000"]');
    await expect(opt10k).toHaveCount(1);

    // Select 10000
    await batchSelect.selectOption('10000');
    const chunkLabel = page.locator('#scanChunkLabel');
    await expect(chunkLabel).toContainText('10,000');

    // 2. Verify autoRefreshIntervalSelect has 5m (value 300) option
    const refreshSelect = page.locator('#autoRefreshIntervalSelect');
    await expect(refreshSelect).toBeVisible();
    const opt5m = refreshSelect.locator('option[value="300"]');
    await expect(opt5m).toHaveCount(1);
    await expect(opt5m).toHaveText('5m');

    // Select 5m interval and toggle auto refresh
    await refreshSelect.selectOption('300');
    const toggleBtn = page.locator('#btnToggleAutoRefresh');
    await toggleBtn.click();
    await expect(toggleBtn).toHaveClass(/active/);
    const statusText = page.locator('#autoRefreshStatusText');
    await expect(statusText).toContainText(/Auto: (5m|4m \d+s)/);

    // Toggle off
    await toggleBtn.click();
    await expect(toggleBtn).not.toHaveClass(/active/);
    await expect(statusText).toContainText('Auto: Off');
  });

  test('Read-Only Mode displays [🔒 READ ONLY] badge and disables bulk delete and mutation controls', async ({ page, request }) => {
    // 1. Create and activate a PROD connection (auto-defaults to read_only=True)
    const createRes = await request.post('/api/connections', {
      data: {
        name: 'E2E Prod ReadOnly Instance',
        host: '127.0.0.1',
        port: 6379,
        conn_type: 'standalone',
        env: 'PROD',
      }
    });
    expect(createRes.ok()).toBeTruthy();
    const prodConn = await createRes.json();
    expect(prodConn.read_only).toBe(true);

    // Free connected slots to respect max connection limit
    const limitRes = await request.get('/api/connections/limit');
    if (limitRes.ok()) {
      const limitData = await limitRes.json();
      for (const cid of (limitData.connected_ids || [])) {
        await request.post(`/api/connections/${cid}/disconnect`);
      }
    }

    const actRes = await request.post(`/api/connections/${prodConn.id}/activate`);
    expect(actRes.ok()).toBeTruthy();

    // 2. Load page
    await page.goto('/');

    // 3. Check for [🔒 READ ONLY] badge in top connection container
    const roBadge = page.locator('#topConnContainer .badge-readonly');
    await expect(roBadge).toBeVisible({ timeout: 10000 });
    await expect(roBadge).toContainText('READ ONLY');

    // 4. Verify Bulk Delete button is disabled with lock tooltip
    const bulkDeleteBtn = page.locator('#btnOpenBulkDeleteModal');
    await expect(bulkDeleteBtn).toBeDisabled();
    await expect(bulkDeleteBtn).toHaveAttribute('title', /Bulk Delete is disabled in Read-Only mode/);

    // 5. Cleanup / restore to standalone LOCAL
    const connsRes = await request.get('/api/connections');
    const conns = await connsRes.json();
    const localConn = conns.find(c => c.env === 'LOCAL');
    if (localConn) {
      await request.post(`/api/connections/${localConn.id}/activate`);
    }
  });

});

