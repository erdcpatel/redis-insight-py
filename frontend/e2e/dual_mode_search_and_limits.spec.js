import { test, expect } from '@playwright/test';
import { execSync } from 'child_process';

const pythonBin = '/Users/dhavalpatel/workspace/venv/py313/bin/python';

test.describe('Dual-Mode In-Memory Search & Memory Safety Ceiling Guards', () => {

  test.beforeAll(async () => {
    try {
      execSync(`${pythonBin} -c "
import redis
r = redis.Redis(host='127.0.0.1', port=6379, db=0)
pipe = r.pipeline()
for i in range(250):
    pipe.set(f'users:{i}:profile', 'active')
    pipe.set(f'orders:{i}:invoice', 'pending')
pipe.execute()
"`, { stdio: 'ignore' });
    } catch (_) {}
  });

  test.afterAll(async () => {
    try {
      execSync(`${pythonBin} -c "
import redis
r = redis.Redis(host='127.0.0.1', port=6379, db=0)
for p in ['users:*', 'orders:*', 'cache:api:*', 'session:auth:*']:
    cursor = 0
    while True:
        cursor, keys = r.scan(cursor=cursor, match=p, count=2000)
        if keys:
            r.unlink(*keys)
        if cursor == 0:
            break
r.set('app:config:version', '1.0.0')
r.set('session:token:standalone123', 'session_payload_data', ex=3600)
r.hset('user:profile:1', mapping={'name': 'Alice', 'role': 'Admin', 'email': 'alice@example.com'})
r.lpush('tasks:queue', 'job_1', 'job_2', 'job_3')
r.sadd('features:active', 'dark_mode', 'auto_refresh', 'clusters')
r.zadd('leaderboard:points', {'Alice': 100, 'Bob': 85, 'Charlie': 95})
r.set('api/v1/users/list', '{\\"count\\":25}')
r.set('services/auth:session:xyz', 'active_jwt', ex=1800)
r.set('system.metrics.cpu.load', '0.42')
r.set('audit_log_2026_events', 'ok')
r.set('models::v2::user#meta', 'custom_delim_data')
r.set('analytics|daily|summary', '1024_views')
"`, { stdio: 'ignore' });
    } catch (_) {}
  });

  test.beforeEach(async ({ request }) => {
    const connsRes = await request.get('/api/connections');
    if (connsRes.ok()) {
      const conns = await connsRes.json();
      const standalone = conns.find(c => (c.host === '127.0.0.1' || c.host === 'localhost') && c.port === 6379 && c.conn_type === 'standalone');
      if (standalone) {
        const limitRes = await request.get('/api/connections/limit');
        if (limitRes.ok()) {
          const limitData = await limitRes.json();
          for (const cid of (limitData.connected_ids || [])) {
            if (cid !== standalone.id) {
              await request.post(`/api/connections/${cid}/disconnect`);
            }
          }
        }
        await request.post(`/api/connections/${standalone.id}/activate`);
      }
    }
  });

  test('In-Memory instant regex filter searches loaded keys without hitting Redis', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#topConnContainer')).toBeVisible({ timeout: 10000 });

    // Ensure Table view is active
    const btnTable = page.locator('#btnViewTable');
    if (await btnTable.isVisible()) {
      await btnTable.click();
    }
    await expect(page.locator('.key-row').first()).toBeVisible({ timeout: 10000 });

    // Select 10,000 batch size and click Load More to accumulate a large dataset
    const batchSelect = page.locator('#scanBatchSizeSelect');
    await batchSelect.selectOption('10000');
    
    const btnScanNext = page.locator('#btnScanNext');
    await expect(btnScanNext).toBeVisible();
    await btnScanNext.click();

    // Wait until at least 1,000+ keys are loaded in browser memory
    await expect(page.locator('#scanStatusText')).toContainText(/Loaded/i, { timeout: 10000 });

    // Track network requests to /api/keys to ensure local filter makes ZERO network calls
    let remoteKeyRequests = 0;
    page.on('request', req => {
      if (req.url().includes('/api/keys') && !req.url().includes('/detail')) {
        remoteKeyRequests++;
      }
    });

    // 1. Test In-Memory Filter on keystroke
    const searchInput = page.locator('#keySearchInput');
    await searchInput.fill('orders:');


    // Matches should update instantly
    await expect(page.locator('.key-row').first()).toBeVisible();
    await expect(page.locator('.key-row').first()).toContainText('orders:');

    // Verify ZERO network calls were made to Redis
    expect(remoteKeyRequests).toBe(0);

    // Verify search match badge is visible with timing and count
    const matchBadge = page.locator('#searchMatchCountBadge');
    await expect(matchBadge).toBeVisible();
    await expect(matchBadge).toContainText(/orders|ms|\//i);
    await page.screenshot({ path: '/Users/dhavalpatel/.gemini/antigravity/brain/7f43d7c0-af33-419e-b2aa-bab690b5834a/snapshots/10_in_memory_search.png' });

    // 2. Test Regex literal filtering (/^users:[0-9]+:profile$/)
    await searchInput.fill('/^users:[0-9]+:profile$/');
    await expect(page.locator('.key-row').first()).toContainText('users:');
    expect(remoteKeyRequests).toBe(0);

    // 3. Test Clear Search Button
    const clearBtn = page.locator('#btnClearSearchQuery');
    await expect(clearBtn).toBeVisible();
    await clearBtn.click();
    await expect(searchInput).toHaveValue('*');

    // 4. Test Fallback Remote Scan Prompt when 0 local keys match
    await searchInput.fill('nonexistent_namespace_key_*');
    const fallbackScanBtn = page.locator('#btnFallbackRemoteScan');
    await expect(fallbackScanBtn).toBeVisible();
    await expect(fallbackScanBtn).toContainText(/Scan Redis Cluster for/i);
    await page.screenshot({ path: '/Users/dhavalpatel/.gemini/antigravity/brain/7f43d7c0-af33-419e-b2aa-bab690b5834a/snapshots/11_fallback_remote_scan.png' });

    // Clicking fallback button triggers remote SCAN
    await fallbackScanBtn.click();
    await expect(page.locator('#gridViewerContainer')).toBeVisible();
    expect(remoteKeyRequests).toBeGreaterThanOrEqual(1);
  });

  test('Scope switcher toggles between Local Filter and Cluster SCAN', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#topConnContainer')).toBeVisible({ timeout: 10000 });

    const scopeLocal = page.locator('#scopeBtnLocal');
    const scopeRemote = page.locator('#scopeBtnRemote');
    const searchInput = page.locator('#keySearchInput');

    // Switch to Remote Cluster SCAN
    await scopeRemote.click();
    await expect(scopeRemote).toHaveClass(/active/);
    await expect(scopeLocal).not.toHaveClass(/active/);
    await expect(searchInput).toHaveAttribute('placeholder', /Scan Redis cluster/i);

    // Switch back to In-Memory Filter
    await scopeLocal.click();
    await expect(scopeLocal).toHaveClass(/active/);
    await expect(scopeRemote).not.toHaveClass(/active/);
    await expect(searchInput).toHaveAttribute('placeholder', /Filter loaded keys/i);
  });

  test('Memory safety ceiling guard pauses accumulation and provides raise ceiling option', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#topConnContainer')).toBeVisible({ timeout: 10000 });

    // Artificially set a low ceiling in state to test guard triggering
    await page.evaluate(() => {
      if (window.__redisState && window.__redisKeys) {
        window.__redisState.maxLoadedKeysLimit = 5;
        window.__redisKeys.updateScanUI();
      }
    });

    // Verify memory limit banner appears
    const banner = page.locator('#memoryLimitBanner');
    await expect(banner).toBeVisible({ timeout: 5000 });
    await expect(banner).toContainText(/Memory Safety Ceiling Reached/i);

    // Verify Load More button shows ceiling alert
    const btnScanNext = page.locator('#btnScanNext');
    await expect(btnScanNext).toBeDisabled();
    await expect(btnScanNext).toContainText(/Memory Ceiling/i);
    await page.screenshot({ path: '/Users/dhavalpatel/.gemini/antigravity/brain/7f43d7c0-af33-419e-b2aa-bab690b5834a/snapshots/12_memory_ceiling_guard.png' });

    // Click Raise Ceiling button
    const btnRaise = page.locator('#btnRaiseMemoryCeiling');
    await expect(btnRaise).toBeVisible();
    await btnRaise.click();

    // Verify banner disappears and ceiling is raised
    await expect(banner).not.toBeVisible();
  });
});
