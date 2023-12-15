import { test, expect } from '@playwright/test';

test('get film details', async ({ page }) => {
  await page.goto('https://xata-search-puce.vercel.app/');

  // Click the get started link.
  await page.getByRole('heading', { name: 'Hips don\'t lie' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByText('Duration: 103 minutes.')).toBeVisible();
});
