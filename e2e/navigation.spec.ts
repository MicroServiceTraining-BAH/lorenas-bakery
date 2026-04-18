import { test, expect } from '@playwright/test';

const PAGES = [
  { path: '/', title: /Lorena/i },
  { path: '/about', title: /Lorena/i },
  { path: '/menu', title: /Lorena/i },
  { path: '/services', title: /Lorena/i },
  { path: '/gallery', title: /Lorena/i },
  { path: '/contact', title: /Lorena/i },
  { path: '/blog', title: /Lorena/i },
];

test.describe('Navigation', () => {
  test('all pages load without errors', async ({ page }) => {
    for (const { path, title } of PAGES) {
      const errors: string[] = [];
      page.on('pageerror', (e) => errors.push(e.message));

      await page.goto(path);
      await expect(page).toHaveTitle(title);
      expect(errors, `JS errors on ${path}: ${errors.join(', ')}`).toHaveLength(0);
    }
  });

  test('desktop nav links navigate correctly', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav[aria-label="Main navigation"]');

    await nav.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');

    await nav.getByRole('link', { name: 'Menu' }).click();
    await expect(page).toHaveURL('/menu');

    await nav.getByRole('link', { name: 'Services' }).click();
    await expect(page).toHaveURL('/services');

    await nav.getByRole('link', { name: 'Gallery' }).click();
    await expect(page).toHaveURL('/gallery');

    await nav.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL('/contact');
  });

  test('logo navigates to home', async ({ page }) => {
    await page.goto('/about');
    // Use first() — logo link appears in both navbar and footer
    await page.getByRole('link', { name: "Lorena's Bakery home" }).first().click();
    await expect(page).toHaveURL('/');
  });

  test('Order Now CTA navigates to contact', async ({ page }) => {
    await page.goto('/');
    await page.locator('nav').getByRole('link', { name: 'Order Now' }).click();
    await expect(page).toHaveURL('/contact');
  });
});

test.describe('Mobile navigation', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('hamburger opens and closes menu', async ({ page }) => {
    await page.goto('/');
    const mobileMenu = page.locator('#mobile-menu');

    await expect(mobileMenu).toHaveClass(/top-full/);
    await page.getByRole('button', { name: 'Open menu' }).click();
    await expect(mobileMenu).toHaveClass(/top-16/);

    await page.getByRole('button', { name: 'Close menu' }).click();
    await expect(mobileMenu).toHaveClass(/top-full/);
  });

  test('mobile menu links navigate and close menu', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Open menu' }).click();
    await expect(page.locator('#mobile-menu')).toHaveClass(/top-16/);
    await page.locator('#mobile-menu').getByRole('link', { name: 'Menu' }).click();
    await expect(page).toHaveURL('/menu');
    await expect(page.locator('#mobile-menu')).toHaveClass(/top-full/);
  });

  test('mobile menu contains all nav links and action buttons', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Open menu' }).click();
    await expect(page.locator('#mobile-menu')).toHaveClass(/top-16/);

    const mobileMenu = page.locator('#mobile-menu');
    for (const label of ['Home', 'About', 'Menu', 'Services', 'Gallery', 'Contact']) {
      await expect(mobileMenu.getByRole('link', { name: label })).toBeAttached();
    }
    await expect(mobileMenu.getByRole('link', { name: 'Order Now' })).toBeAttached();
  });

  test('page does not scroll behind open mobile menu', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Open menu' }).click();

    const bodyPosition = await page.evaluate(() => document.body.style.position);
    expect(bodyPosition).toBe('fixed');
  });
});
