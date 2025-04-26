import { type Locator, type Page } from '@playwright/test';

export class ContactsPage  {
    

    readonly route = '/contacts';

    readonly emailLink: Locator;
    readonly heading: Locator;

    readonly page : Page;

    constructor(page: Page){
        this.page = page;

        this.emailLink = this.page.locator("//a[contains(@href, 'mailto')]");

        this.heading = this.page.locator("//h1").first();
    }
}
