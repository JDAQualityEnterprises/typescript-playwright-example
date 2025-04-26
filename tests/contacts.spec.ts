import { test, expect } from '@playwright/test';
import { MainMenu }  from '../pages/mainMenu';
import { ContactsPage } from '../pages/contactsPage';

test.describe('Contacts page tests ', () => {
  test.beforeEach(async ({ page }) => {

    await page.goto('/');
  });


  test('has heading', async ({ page }) => {
  
    const contactsPage = new ContactsPage(page)

    const mainMenu = new MainMenu(page)

    await expect(mainMenu.contact).toBeVisible
    await mainMenu.contact.click();
    
    await expect(contactsPage.heading).toHaveText("Contact");
  });
})