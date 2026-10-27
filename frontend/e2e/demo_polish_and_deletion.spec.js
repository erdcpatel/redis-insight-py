import { test, expect } from '@playwright/test';
import { execSync } from 'child_process';

const pythonBin = '/Users/dhavalpatel/workspace/venv/py313/bin/python';

test.describe('Demo Polish & Surgical Deletion Workflows', () => {
  test.beforeAll(() => {
    try {
      execSync(`${pythonBin} -c "
import redis
r = redis.Redis(host='127.0.0.1', port=6379, db=0)
r.set('test:demo:del', 'to_delete')
pipe = r.pipeline()
for i in range(1, 226):
    pipe.set(f'test:pagns:item{i:03d}', f'val{i}')
pipe.execute()
"`, { stdio: 'ignore' });
    } catch (_) {}
  });

  test.afterAll(() => {
    try {
      execSync(`${pythonBin} -c "
import redis
r = redis.Redis(host='127.0.0.1', port=6379, db=0)
r.delete('test:demo:del')
cursor = 0
while True:
    cursor, keys = r.scan(cursor=cursor, match='test:pagns:*', count=2000)
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
      const standalone = conns.find(c => !c.read_only && (c.host === '127.0.0.1' || c.host === 'localhost') && c.port === 6379 && c.conn_type === 'standalone');
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

  test('Toolbar alignment: TTL filter sits flush and action bar has compact buttons', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#topConnContainer')).toBeVisible({ timeout: 10000 });

    const ttlWrap = page.locator('.ttl-filter-control-wrap');
    await expect(ttlWrap).toBeVisible();

    // Verify margin-left is not auto
    const marginLeft = await ttlWrap.evaluate(el => window.getComputedStyle(el).marginLeft);
    expect(marginLeft).not.toBe('auto');

    // Verify actions bar buttons are present and have compact padding
    const btnBulk = page.locator('#btnOpenBulkDeleteModal');
    await expect(btnBulk).toBeVisible();
    const btnPadding = await btnBulk.evaluate(el => window.getComputedStyle(el).padding);
    expect(btnPadding).toContain('px');
  });

  test('Table headers are sticky at top: 0 with surface background', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.key-row').first()).toBeVisible({ timeout: 10000 });

    const firstTh = page.locator('.data-table thead th').first();
    await expect(firstTh).toBeVisible();

    const position = await firstTh.evaluate(el => window.getComputedStyle(el).position);
    const top = await firstTh.evaluate(el => window.getComputedStyle(el).top);
    const zIndex = await firstTh.evaluate(el => window.getComputedStyle(el).zIndex);

    expect(position).toBe('sticky');
    expect(top).toBe('0px');
    expect(Number(zIndex)).toBeGreaterThanOrEqual(20);
  });

  test('Surgical deletion from drawer removes row and closes drawer without reload', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#topConnContainer')).toBeVisible({ timeout: 10000 });

    // Set batch size to 500 so test:demo:del is scanned
    const batchSelect = page.locator('#scanBatchSizeSelect');
    await batchSelect.selectOption('500');

    // Use Remote search to scan specifically for test:demo:del
    const scopeBtnRemote = page.locator('#scopeBtnRemote');
    if (await scopeBtnRemote.isVisible()) {
      await scopeBtnRemote.click();
    }
    const searchInput = page.locator('#keySearchInput');
    await searchInput.fill('test:demo:del');
    await searchInput.press('Enter');

    const targetRow = page.locator('.key-row[data-key="test%3Ademo%3Adel"]');
    await expect(targetRow).toBeVisible({ timeout: 10000 });

    // Open detail drawer
    await targetRow.click();
    const drawer = page.locator('#keyDetailModal');
    await expect(drawer).toHaveClass(/active/);
    await expect(page.locator('#detailKeyTitle')).toContainText('test:demo:del');

    // Click delete from drawer
    const btnDelete = page.locator('#btnDeleteKeyFromDetail');
    await btnDelete.click();

    // Confirm in modal
    const confirmModal = page.locator('#deleteKeyConfirmModal');
    await expect(confirmModal).toHaveClass(/active/);
    const inputConfirm = page.locator('#inputConfirmDelete');
    await inputConfirm.fill('CONFIRM');

    const btnSubmit = page.locator('#btnSubmitDeleteKey');
    await btnSubmit.click();

    // Drawer should be closed
    await expect(drawer).not.toHaveClass(/active/);

    // Row should be removed from view
    await expect(targetRow).toHaveCount(0);
  });

  test('Virtual Tree View paginates large folder child keys with Show next toggle', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#topConnContainer')).toBeVisible({ timeout: 10000 });

    // Set batch size to 500 so all 225 keys load in one batch
    const batchSelect = page.locator('#scanBatchSizeSelect');
    await batchSelect.selectOption('500');

    // Switch remote pattern to test:pagns:* to load all 225 keys
    const scopeBtnRemote = page.locator('#scopeBtnRemote');
    if (await scopeBtnRemote.isVisible()) {
      await scopeBtnRemote.click();
    }
    const searchInput = page.locator('#keySearchInput');
    await searchInput.fill('test:pagns:*');
    await searchInput.press('Enter');

    // Wait for keys to load
    await expect(page.locator('.key-row').first()).toBeVisible({ timeout: 10000 });

    // Switch to Tree View
    const btnTree = page.locator('#btnViewTree');
    await btnTree.click();
    await expect(page.locator('.tree-view-wrapper')).toBeVisible({ timeout: 5000 });

    // Expand all folders
    const btnExpandAll = page.locator('#btnExpandAllTree');
    await expect(btnExpandAll).toBeVisible();
    await btnExpandAll.click();

    // Verify pagination button is displayed because 225 > 200
    const btnShowMore = page.locator('.btn-tree-show-more');
    await expect(btnShowMore.first()).toBeVisible({ timeout: 5000 });
    await expect(btnShowMore.first()).toContainText('Show next 25 keys');

    // Click Show next keys
    await btnShowMore.first().click();

    // Button should now disappear as all 225 keys are displayed
    await expect(btnShowMore).toHaveCount(0);
  });
});
