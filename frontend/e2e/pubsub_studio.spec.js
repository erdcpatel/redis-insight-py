import { test, expect } from '@playwright/test';

test.describe('Pub/Sub Studio Live Stream & Subscription Lifecycle', () => {
  test.beforeEach(async ({ request }) => {
    const connsRes = await request.get('/api/connections');
    if (connsRes.ok()) {
      const conns = await connsRes.json();
      const standalone = conns.find(c => !c.read_only && (c.host === '127.0.0.1' || c.host === 'localhost') && c.port === 6379 && c.conn_type === 'standalone');
      if (standalone) {
        await request.post(`/api/connections/${standalone.id}/activate`);
      }
    }
  });

  test('Pub/Sub Studio renders tab, displays prompt card, connects WebSocket, subscribes, and streams live messages', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#topConnContainer')).toBeVisible({ timeout: 10000 });

    // 1. Verify Pub/Sub tab exists in workspace tabs bar
    const pubsubTabBtn = page.locator('#btnOpenPubsubModal');
    await expect(pubsubTabBtn).toBeVisible();
    await expect(pubsubTabBtn).toContainText('Pub/Sub Studio');

    // 2. Click Pub/Sub Studio tab
    await pubsubTabBtn.click();
    const pubsubModal = page.locator('#pubsubModal');
    await expect(pubsubModal).toHaveClass(/active/);

    // 3. Rule 6 verification: Prompt Card rendered prior to explicit connection
    const promptCard = page.locator('#pubsubPromptContainer');
    await expect(promptCard).toBeVisible();
    await expect(promptCard).toContainText('Pub/Sub Studio for');
    const connectBtn = page.locator('#btnConnectPubsubExplicit');
    await expect(connectBtn).toBeVisible();

    // 4. Connect to live WebSocket stream
    await connectBtn.click();
    await expect(promptCard).not.toBeVisible();
    const statusBadge = page.locator('#pubsubWsStatusBadge');
    await expect(statusBadge).toHaveClass(/connected/, { timeout: 8000 });
    await expect(page.locator('#pubsubWsStatusText')).toHaveText('Live Stream Active');

    // 5. Subscribe to a channel
    const channelInput = page.locator('#pubsubChannelInput');
    await channelInput.fill('e2e:notifications');
    await page.locator('#btnPubsubSubscribe').click();

    // Verify subscription chip appears
    const subsList = page.locator('#pubsubActiveSubsList');
    await expect(subsList.locator('.pubsub-sub-chip')).toContainText('e2e:notifications');
    await expect(page.locator('#pubsubSubsCountBadge')).toContainText('1 Subscription');

    // 6. Subscribe to a pattern
    await channelInput.fill('e2e:orders:*');
    await page.locator('#pubsubIsPattern').check();
    await page.locator('#btnPubsubSubscribe').click();

    await expect(subsList.locator('.pubsub-sub-chip.pattern')).toContainText('e2e:orders:*');
    await expect(page.locator('#pubsubSubsCountBadge')).toContainText('2 Subscriptions');

    // 7. Publish a message via the inline publish drawer
    await page.locator('#btnTogglePublishCard').click();
    const publishDrawer = page.locator('#pubsubPublishDrawer');
    await expect(publishDrawer).toBeVisible();

    await page.locator('#pubsubPublishChannel').fill('e2e:notifications');
    await page.locator('#pubsubPublishPayload').fill('{"event": "user_order", "id": 999}');
    await page.locator('#btnPubsubBeautifyJson').click();

    await page.locator('#btnSubmitPublish').click();

    // 8. Verify message arrived in live stream feed
    const feedList = page.locator('#pubsubFeedList');
    await expect(feedList.locator('.pubsub-message-card').first()).toBeVisible({ timeout: 8000 });
    await expect(feedList).toContainText('e2e:notifications');
    await expect(feedList.locator('.pubsub-json-badge')).toBeVisible();
    await expect(feedList).toContainText('user_order');

    // 9. Filter captured messages locally
    const searchInput = page.locator('#pubsubSearchInput');
    await searchInput.fill('user_order');
    await expect(page.locator('#pubsubFilterMatchBadge')).toBeVisible();
    await expect(feedList.locator('.pubsub-message-card')).toHaveCount(1);

    await searchInput.fill('nonexistent_e2e_query_xyz');
    await expect(feedList).toContainText('No messages match');
    await searchInput.fill('');

    // 10. Pause / Resume stream toggle
    const pauseBtn = page.locator('#btnPubsubPauseToggle');
    await pauseBtn.click();
    await expect(pauseBtn).toContainText('Resume Stream');
    await pauseBtn.click();
    await expect(pauseBtn).toContainText('Pause Stream');

    // 11. Clear buffer
    await page.locator('#btnPubsubClearMessages').click();
    await expect(feedList).toContainText('Waiting for Live Messages');
    await expect(page.locator('#pubsubMsgCountBadge')).toContainText('0 Messages');

    // 12. Unsubscribe chip removal
    const removeBtn = subsList.locator('.pubsub-sub-chip-remove').first();
    await removeBtn.click();
    await expect(page.locator('#pubsubSubsCountBadge')).toContainText('1 Subscription');
  });
});
