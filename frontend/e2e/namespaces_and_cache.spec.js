import { test, expect } from '@playwright/test';
import { execSync } from 'child_process';

const pythonBin = '/Users/dhavalpatel/workspace/venv/py313/bin/python';

test.describe('Namespace & Hygiene Studio and IndexedDB Keyspace Cache', () => {

  test.beforeAll(async () => {
    try {
      execSync(`${pythonBin} -c "
import redis
r = redis.Redis(host='127.0.0.1', port=6379, db=0)
pipe = r.pipeline()
for i in range(100):
    pipe.set(f'users:{i}:profile', 'active')
    pipe.set(f'orders:{i}:invoice', 'pending')
# Hygiene test fixtures:
pipe.set('users:trailing:', 'bad_delim')
pipe.set('auth::double::colons', 'bad_double_delim')
pipe.set('key with spaces', 'bad_whitespace')
pipe.set('temp_root_unnamespaced', 'no_delim')
pipe.execute()
"`, { stdio: 'ignore' });
    } catch (_) {}
  });

  test.afterAll(async () => {
    try {
      execSync(`${pythonBin} -c "
import redis
r = redis.Redis(host='127.0.0.1', port=6379, db=0)
for p in ['users:*', 'orders:*', 'auth::*', 'key with*', 'temp_root*']:
    cursor = 0
    while True:
        cursor, keys = r.scan(cursor=cursor, match=p, count=2000)
        if keys:
            r.unlink(*keys)
        if cursor == 0:
            break
"`, { stdio: 'ignore' });
    } catch (_) {}
  });

  test.beforeEach(async ({ request }) => {
    const connsRes = await request.get('/api/connections');
    if (connsRes.ok()) {
      const conns = await connsRes.json();
      const standalone = conns.find(c => (c.host === '127.0.0.1' || c.host === 'localhost') && c.port === 6379 && c.conn_type === 'standalone');
      if (standalone) {
        await request.post(`/api/connections/${standalone.id}/activate`);
      }
    }
  });

  test('Namespace & Key Hygiene Studio opens, renders distribution KPIs, and filters table on 1-click', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#topConnContainer')).toBeVisible({ timeout: 10000 });

    // Ensure keys are loaded in flat table
    const btnTable = page.locator('#btnViewTable');
    if (await btnTable.isVisible()) {
      await btnTable.click();
    }
    await expect(page.locator('.key-row').first()).toBeVisible({ timeout: 10000 });

    // Open Namespace & Key Hygiene Studio
    const btnNsModal = page.locator('#btnOpenNamespaceModal');
    await expect(btnNsModal).toBeVisible();
    await btnNsModal.click();

    // Verify modal is visible
    const modal = page.locator('#namespaceModal');
    await expect(modal).toBeVisible();

    // Verify KPI cards
    await expect(page.locator('#kpiNsTotalKeys')).not.toHaveText('0');
    await expect(page.locator('#kpiNsCount')).not.toHaveText('0');
    await expect(page.locator('#kpiNsTop')).toContainText(':');

    // Verify Namespace Distribution table
    const firstNsRow = page.locator('#tbodyNsDistribution tr').first();
    await expect(firstNsRow).toBeVisible();
    await expect(firstNsRow).toContainText('%');

    // Click Filter button on a namespace
    const btnFilter = firstNsRow.locator('.btn-ns-filter');
    await expect(btnFilter).toBeVisible();
    await btnFilter.click();

    // Verify modal closes and input is populated
    await expect(modal).not.toBeVisible();
    const searchInput = page.locator('#keySearchInput');
    const query = await searchInput.inputValue();
    expect(query).toMatch(/[:/.*]/);

    // Reopen modal to inspect Key Hygiene & Linting
    await btnNsModal.click();
    await expect(modal).toBeVisible();

    const tabHygiene = page.locator('#tabBtnNsHygiene');
    await expect(tabHygiene).toBeVisible();
    await tabHygiene.click();

    // Verify Hygiene pane is visible and contains flagged issues
    const hygienePane = page.locator('#paneNsHygiene');
    await expect(hygienePane).toBeVisible();

    const hygieneRows = page.locator('#tbodyNsHygiene tr');
    await expect(hygieneRows.first()).toBeVisible();
    await expect(hygienePane).toContainText(/Delimiter|Whitespace|Missing/i);

    // Capture Snapshot 14: Key Hygiene & Linting
    const snapshotsDir = '/Users/dhavalpatel/.gemini/antigravity/brain/7f43d7c0-af33-419e-b2aa-bab690b5834a/snapshots';
    await page.screenshot({ path: `${snapshotsDir}/14_key_hygiene_linting.png` });

    // Switch back to Distribution tab to capture Snapshot 13
    await page.locator('#tabBtnNsDistribution').click();
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${snapshotsDir}/13_namespaces_distribution.png` });

    // Close modal
    await page.locator('#btnCloseNamespaceModal').click();
    await expect(modal).not.toBeVisible();
  });

  test('IndexedDB snapshot caching renders status pill and supports 1-click clear', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#topConnContainer')).toBeVisible({ timeout: 10000 });

    // Wait for initial scan to complete and cache to save
    await expect(page.locator('.key-row').first()).toBeVisible({ timeout: 10000 });
    await page.waitForTimeout(500);

    // Force a Refresh to trigger saving
    const btnRefresh = page.locator('#btnResetScan');
    await btnRefresh.click();
    await expect(page.locator('.key-row').first()).toBeVisible({ timeout: 10000 });
    await page.waitForTimeout(600);

    const cachePill = page.locator('#keysCacheStatusPill');
    await expect(cachePill).toBeVisible({ timeout: 5000 });
    await expect(cachePill).toContainText(/Cached/i);

    // Capture Snapshot 15: IndexedDB Cache Pill in Actions Bar
    const snapshotsDir = '/Users/dhavalpatel/.gemini/antigravity/brain/7f43d7c0-af33-419e-b2aa-bab690b5834a/snapshots';
    await page.screenshot({ path: `${snapshotsDir}/15_indexeddb_cache_pill.png` });

    // Click Clear on cache pill
    const btnClearCache = page.locator('#btnClearCacheSnapshot');
    await expect(btnClearCache).toBeVisible();
    await btnClearCache.click();

    // Verify cache pill disappears
    await expect(cachePill).not.toBeVisible();
  });

});
