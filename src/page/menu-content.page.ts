import { $, ElementFinder } from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  public get getTShirtMenu(): ElementFinder {
    return this.tShirtMenu;
  }

  constructor() {
    // ? CHANGED SELECTOR FOR IMPROVED READABILITY, EASE OF UNDERSTANDING.
    // ? COULD ALSO REMOVE #block_top_menu BUT IT IMPROVES READABILITY.
    this.tShirtMenu = $('#block_top_menu li:nth-child(3) > a[title="T-shirts"]');
  }

  public async goToTShirtMenu(): Promise<void> {
    await this.tShirtMenu.click();
  }
}
