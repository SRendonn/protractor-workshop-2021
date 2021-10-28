import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private checkoutButton: ElementFinder;

  public get getCheckoutButton(): ElementFinder {
    return this.checkoutButton;
  }

  constructor() {
    // ? CHANGED SELECTOR: SPECIFY CLASS .standard-checkout
    this.checkoutButton = $('a.standard-checkout');
  }

  public async goToSignInStepPage(): Promise<void> {
    await this.checkoutButton.click();
  }
}
