import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private checkoutButton: ElementFinder;

  public get getCheckoutButton(): ElementFinder {
    return this.checkoutButton;
  }

  constructor() {
    // ? CHANGED SELECTOR: SPECIFIED TITLE OF a TAG AND #layer_cart CONTAINER
    this.checkoutButton = $('#layer_cart a[title="Proceed to checkout"]');
  }

  public async goToCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
