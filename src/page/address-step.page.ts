import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private checkoutButton: ElementFinder;

  public get getCheckoutButton(): ElementFinder {
    return this.checkoutButton;
  }

  constructor() {
    // ? CHANGED CSS SELECTOR: REMOVED CHILD SELECTORS, ADDED TYPE name SELECTOR.
    this.checkoutButton = $('button[name="processAddress"]');
  }

  public async goToShippingStepPage(): Promise<void> {
    await this.checkoutButton.click();
  }
}
