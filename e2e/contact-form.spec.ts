import { test, expect } from '@playwright/test';

test.describe('Contact form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('shows validation errors on empty submit', async ({ page }) => {
    await page.getByRole('button', { name: 'Send your message' }).click();
    await expect(page.getByText('Please enter your name.')).toBeVisible();
    await expect(page.getByText('Please enter your email address.')).toBeVisible();
    await expect(page.getByText('Please include a message')).toBeVisible();
  });

  test('shows email format error', async ({ page }) => {
    await page.getByLabel('Email Address').fill('notanemail');
    await page.getByLabel('Email Address').blur();
    await expect(page.getByText("That email doesn't look right")).toBeVisible();
  });

  test('clears field error after valid input', async ({ page }) => {
    await page.getByRole('button', { name: 'Send your message' }).click();
    await expect(page.getByText('Please enter your name.')).toBeVisible();

    await page.getByLabel('Full Name').fill('Maria Garcia');
    await page.getByLabel('Full Name').blur();
    await expect(page.getByText('Please enter your name.')).not.toBeVisible();
  });

  test('submit button disabled when form has touched errors', async ({ page }) => {
    await page.getByLabel('Full Name').fill('Test');
    await page.getByLabel('Full Name').fill('');
    await page.getByLabel('Full Name').blur();

    const btn = page.getByRole('button', { name: 'Send your message' });
    await expect(btn).toBeDisabled();
  });

  test('successful submission shows confirmation', async ({ page }) => {
    await page.getByLabel('Full Name').fill('Maria Garcia');
    await page.getByLabel('Email Address').fill('maria@example.com');
    // Use locator to avoid strict mode violation with two "Your Message" labels
    await page.locator('textarea[name="message"]').fill('I would like to order a custom quinceañera cake.');

    await page.getByRole('button', { name: 'Send your message' }).click();

    await expect(page.getByText('Sending your message...')).toBeVisible();
    await expect(page.getByText('Message Sent!')).toBeVisible({ timeout: 5000 });
    await expect(page.getByRole('link', { name: '(703) 789-8919', exact: true })).toBeVisible();
  });

  test('can send another message after success', async ({ page }) => {
    await page.getByLabel('Full Name').fill('Test User');
    await page.getByLabel('Email Address').fill('test@example.com');
    await page.locator('textarea[name="message"]').fill('Test message content here.');
    await page.getByRole('button', { name: 'Send your message' }).click();
    await expect(page.getByText('Message Sent!')).toBeVisible({ timeout: 5000 });

    await page.getByRole('button', { name: 'Send Another Message' }).click();
    await expect(page.getByRole('button', { name: 'Send your message' })).toBeVisible();
  });
});
