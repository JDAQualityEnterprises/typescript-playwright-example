import { expect, type Locator, type Page } from '@playwright/test';


export class HomePage {
    readonly route: string = '/';

    readonly page: Page;

    readonly emailLink: Locator;
    
    constructor(page: Page){
        this.page = page;

        this.emailLink =  page.locator("//a[contains(@href, 'mailto')]");
    }
}
