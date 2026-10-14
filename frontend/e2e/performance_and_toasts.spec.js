// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Performance, Virtual Scrolling & Toast Notifications', () => {

  test.beforeEach(async ({ request }) => {
    // Ensure standalone connection is active and limit respected
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

  test('Key copy uses in-place feedback and non-blocking toast without browser alerts', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    let dialogFired = false;
    page.on('dialog', async (dialog) => {
      dialogFired = true;
      await dialog.dismiss();
    });

    await page.goto('/');

    // Wait for key row to be visible
    const firstRow = page.locator('.key-row').first();
    await expect(firstRow).toBeVisible({ timeout: 10000 });

    // Click row to open Key Detail Modal
    await firstRow.click();
    const modal = page.locator('#keyDetailModal');
    await expect(modal).toHaveClass(/active/);

    // Locate Copy Key button in modal header
    const btnCopy = page.locator('#btnCopyKeyName');
    await expect(btnCopy).toBeVisible();

    // Click Copy Key button
    await btnCopy.click();

    // Assert that NO native browser dialog (alert) was fired
    expect(dialogFired).toBe(false);

    // Assert that Toast notification appeared in #appToastContainer
    const toast = page.locator('#appToastContainer .toast-pill');
    await expect(toast).toBeVisible({ timeout: 3000 });
    await expect(toast).toHaveClass(/toast-success/);
    await expect(toast).toContainText('Copied key');

    // Close detail modal
    await page.locator('#btnCloseDetailModal').click();
    await expect(modal).not.toHaveClass(/active/);
  });

  test('Keys Browser renders virtual scrolling container and loading shimmer element', async ({ page }) => {
    await page.goto('/');

    // Ensure shimmer bar element exists
    const shimmer = page.locator('#keysLoadingShimmer');
    await expect(shimmer).toBeAttached();

    // Ensure virtual scroll viewport or data table renders cleanly
    const viewport = page.locator('#keysTableViewport');
    await expect(viewport).toBeVisible({ timeout: 10000 });

    // Table rows exist and are clickable
    const rows = page.locator('.key-row');
    const count = await rows.count();
    expect(count).toBeGreaterThan(0);
  });

});
