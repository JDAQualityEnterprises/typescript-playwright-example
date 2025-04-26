import { test, expect } from '@playwright/test';
import data from '../data/testData';
import { HomePage }  from '../pages/homePage';
import { MainMenu }  from '../pages/mainMenu';

test.describe('Home page tests', () => {
  test.beforeEach(async ({ page }) => {

    await page.goto('/');
  });

  test('Has title', async ({ page }) => {

    await expect(page).toHaveTitle(/JDA Quality Enterprises Limited/);
  });

  test('Has links', async ({ page }) => {

    const siteInfo = data.website
      
    const homePage = new HomePage(page)

    await expect.soft(homePage.emailLink).toHaveAttribute("href", `mailto:${siteInfo.email}`);
    
    const mainMenu = new MainMenu(page);
    
    await expect.soft(mainMenu.home).toHaveAttribute("href", "/home");
    await expect.soft(mainMenu.contact).toHaveAttribute("href", "/contact");
    await expect.soft(mainMenu.clients).toHaveAttribute("href", "/clients");
    await expect.soft(mainMenu.aboutus).toHaveAttribute("href", "/about-us");
  });
})