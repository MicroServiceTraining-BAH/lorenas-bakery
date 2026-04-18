import { test, expect } from '@playwright/test';

test.describe('Phone and external links', () => {
  const PHONE_HREF = 'tel:7037898919';

  test('every phone link uses the correct number', async ({ page }) => {
    const paths = ['/', '/about', '/menu', '/services', '/contact'];
    for (const path of paths) {
      await page.goto(path);
      const phoneLinks = page.locator(`a[href="${PHONE_HREF}"]`);
      const count = await phoneLinks.count();
      expect(count, `No correct phone link on ${path}`).toBeGreaterThan(0);

      // No links with wrong phone
      const wrongPhone = await page.locator('a[href^="tel:"]').evaluateAll(
        (els) => els.map((el) => el.getAttribute('href')).filter((h) => h !== 'tel:7037898919')
      );
      expect(wrongPhone, `Wrong phone href on ${path}: ${wrongPhone}`).toHaveLength(0);
    }
  });

  test('Instagram link points to correct account', async ({ page }) => {
    await page.goto('/');
    const igLink = page.locator('a[href*="instagram.com/lorenasbakery"]');
    await expect(igLink.first()).toBeVisible();
    const href = await igLink.first().getAttribute('href');
    expect(href).toContain('lorenasbakery');
  });

  test('Get Directions links point to correct address', async ({ page }) => {
    const paths = ['/', '/contact'];
    for (const path of paths) {
      await page.goto(path);
      const mapLinks = page.locator('a[href*="maps.google.com"]');
      const count = await mapLinks.count();
      if (count > 0) {
        const href = await mapLinks.first().getAttribute('href');
        expect(href, `Wrong map address on ${path}`).toContain('Sudley+Manor');
        expect(href, `Old Wellington address on ${path}`).not.toContain('Wellington');
      }
    }
  });

  test('View Our Menu button leads to /menu', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'View Our Menu' }).click();
    await expect(page).toHaveURL('/menu');
  });

  test('Meet the Family CTA leads to /about', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Meet the Family' }).click();
    await expect(page).toHaveURL('/about');
  });
});

test.describe('404 handling', () => {
  test('unknown route returns 404 page', async ({ page }) => {
    const response = await page.goto('/this-page-does-not-exist');
    expect(response?.status()).toBe(404);
  });
});
