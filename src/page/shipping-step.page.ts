import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private termsOfServiceCheckbox: ElementFinder;

  private checkoutButton: ElementFinder;

  public get getTermsOfServiceCheckbox(): ElementFinder {
    return this.termsOfServiceCheckbox;
  }

  public get getCheckoutButton(): ElementFinder {
    return this.checkoutButton;
  }

  constructor() {
    this.termsOfServiceCheckbox = $('#cgv');
    // ? CHANGED SELECTOR: removed unnecesary selectors
    this.checkoutButton = $('button.standard-checkout');
  }

  public async acceptTermsOfService() {
    await this.termsOfServiceCheckbox.click();
  }

  public async goToPaymentStepPage() {
    await this.checkoutButton.click();
  }
}
