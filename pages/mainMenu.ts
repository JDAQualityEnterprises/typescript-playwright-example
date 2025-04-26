import { expect, type Locator, type Page } from '@playwright/test';
import { HomePage } from './homePage';
import { ContactsPage } from './contactsPage';

export class MainMenu {
  readonly route: string = '/';

  readonly mainMenu: Locator;
  readonly home: Locator;
  readonly contact : Locator;
  readonly aboutus : Locator;
  readonly clients : Locator;
  readonly page: Page;
  
  constructor (page: Page) {
    this.page = page;
    this.mainMenu = page.locator("//nav[contains(@style, 'visible')]/ul");
    this.home = page.locator("//nav[contains(@style, 'visible')]/ul/li[contains(.,'Home')]//a").first();
    this.contact = page.locator("//nav[contains(@style, 'visible')]/ul/li[contains(.,'Contact')]//a").first();
    this.aboutus = page.locator("//nav[contains(@style, 'visible')]/ul/li[contains(.,'About Us')]//a").first();
    this.clients = page.locator("//nav[contains(@style, 'visible')]/ul/li[contains(.,'Clients')]//a").first();
  }

  async navigateHome(): Promise<HomePage> {
    const url = this.page.url();
    console.log(`Current url '${url}'`);

    if (url !== undefined && !url.includes(this.route))
    {
      await console.log(`Navigate to home page`);

      this.page.goto(this.route);

      expect(this.mainMenu).toBeVisible
    }
    
    return new HomePage(this.page);
  }

  async navigateContacts(): Promise<ContactsPage> {
    
    await this.contact.click;
  
    return new ContactsPage(this.page);
  }
}