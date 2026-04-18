import { test, expect } from '@playwright/test';

const VIEWPORTS = [
  { name: '320px (smallest mobile)', width: 320, height: 568 },
  { name: '390px (iPhone 14)', width: 390, height: 844 },
  { name: '768px (tablet)', width: 768, height: 1024 },
  { name: '1440px (desktop)', width: 1440, height: 900 },
];

test.describe('Responsive layout', () => {
  for (const vp of VIEWPORTS) {
    test(`homepage renders without overflow at ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      // Allow 4px for scrollbar gutter differences across platforms
      expect(scrollWidth, `Horizontal overflow at ${vp.name}`).toBeLessThanOrEqual(clientWidth + 4);

      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await expect(page.getByLabel('Trust signals')).toBeVisible();
    });
  }

  test('navbar shows hamburger on mobile, links on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeVisible();
    await expect(page.locator('nav ul').first()).not.toBeVisible();

    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    await expect(page.getByRole('button', { name: 'Open menu' })).not.toBeVisible();
    await expect(page.locator('nav[aria-label="Main navigation"] ul')).toBeVisible();
  });

  test('navbar shrinks logo on scroll', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');

    const logoBefore = await page.locator('header img').first().boundingBox();
    await page.mouse.wheel(0, 500);
    await page.waitForTimeout(600);
    const logoAfter = await page.locator('header img').first().boundingBox();

    expect(logoAfter!.width, 'Logo should shrink on scroll').toBeLessThan(logoBefore!.width);
  });

  test('navbar links are white on homepage, dark on inner pages', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });

    // Homepage unscrolled — About link should have white text class
    await page.goto('/');
    const aboutLink = page.locator('nav[aria-label="Main navigation"] a[href="/about"]');
    const homeClass = await aboutLink.getAttribute('class');
    expect(homeClass).toContain('text-white');

    // Inner page — non-active link should be dark (check /menu link on /about page)
    await page.goto('/about');
    const menuLink = page.locator('nav[aria-label="Main navigation"] a[href="/menu"]');
    const innerClass = await menuLink.getAttribute('class');
    expect(innerClass).toContain('text-stone-700');
  });

  test('all inner pages have no horizontal overflow on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    const paths = ['/about', '/menu', '/services', '/gallery', '/contact'];

    for (const path of paths) {
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth, `Overflow on ${path}`).toBeLessThanOrEqual(clientWidth + 4);
    }
  });
});
