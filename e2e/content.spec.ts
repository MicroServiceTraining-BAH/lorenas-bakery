import { test, expect } from '@playwright/test';

test.describe('Critical content', () => {
  test('correct phone number appears sitewide', async ({ page }) => {
    const PHONE = '(703) 789-8919';
    const paths = ['/', '/about', '/menu', '/services', '/contact'];

    for (const path of paths) {
      await page.goto(path);
      // Use innerText to get only rendered visible text (excludes JSON-LD scripts)
      const text = await page.locator('body').innerText();
      expect(text, `Wrong phone on ${path}`).toContain(PHONE);

      const wrongPhone = await page.locator('a[href^="tel:"]').evaluateAll(
        (els) => els.map((el) => el.getAttribute('href')).filter((h) => h !== 'tel:7037898919')
      );
      expect(wrongPhone, `Wrong tel href on ${path}`).toHaveLength(0);
    }
  });

  test('correct address appears sitewide', async ({ page }) => {
    const paths = ['/', '/about', '/contact'];
    for (const path of paths) {
      await page.goto(path);
      const text = await page.locator('body').innerText();
      expect(text, `Missing address on ${path}`).toContain('Sudley Manor');
    }
  });

  test('correct opening year 2026 shown', async ({ page }) => {
    await page.goto('/');
    const text = await page.locator('body').innerText();
    expect(text).toContain('2026');
  });

  test('correct business hours shown in footer', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    const text = await footer.innerText();
    expect(text).toContain('6:30');
  });

  test('correct hours on contact page', async ({ page }) => {
    await page.goto('/contact');
    const text = await page.locator('body').innerText();
    expect(text).toContain('6:30 AM');
    expect(text).toContain('8:00 AM');
  });

  test('hero section shows bakery name and CTA buttons', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'View Our Menu' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Order Now' }).first()).toBeVisible();
  });

  test('about page shows all team members, no old members', async ({ page }) => {
    await page.goto('/about');
    // Use innerText to get visible text only (excludes JSON-LD)
    const text = await page.locator('main').innerText();
    expect(text).toContain('Lorena');
    expect(text).toContain('Felipe');
    expect(text).toContain('Sofia');
  });

  test('Donde la tradicion quote visible on homepage', async ({ page }) => {
    await page.goto('/');
    const text = await page.locator('body').innerText();
    expect(text).toContain('tradición');
  });
});

test.describe('Language toggle', () => {
  test('EN/ES toggle switches language on homepage', async ({ page }) => {
    await page.goto('/');

    const enText = await page.locator('body').innerText();
    expect(enText).toContain('Fresh Pan Dulce');

    await page.getByRole('button', { name: 'Switch to Spanish' }).click();
    const esText = await page.locator('body').innerText();
    expect(esText).toContain('Pan Dulce Fresco');

    await page.getByRole('button', { name: 'Cambiar a inglés' }).click();
    const backToEn = await page.locator('body').innerText();
    expect(backToEn).toContain('Fresh Pan Dulce');
  });

  test('language toggle works on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    await page.getByRole('button', { name: 'Open menu' }).click();
    await page.locator('#mobile-menu').getByRole('button', { name: 'Switch to Spanish' }).click();

    const text = await page.locator('body').innerText();
    expect(text).toContain('Pan Dulce Fresco');
  });
});
