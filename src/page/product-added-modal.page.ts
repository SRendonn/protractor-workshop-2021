import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private checkoutButton: ElementFinder;

  constructor() {
    this.checkoutButton = $('#layer_cart .button-container > a');
  }

  public async goToCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
