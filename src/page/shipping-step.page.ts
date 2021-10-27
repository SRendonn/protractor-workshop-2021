import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private termsOfServiceCheckbox: ElementFinder;

  private checkoutButton: ElementFinder;

  constructor() {
    this.termsOfServiceCheckbox = $('#cgv');
    this.checkoutButton = $('#form > p > button > span');
  }

  public async acceptTermsOfService() {
    await this.termsOfServiceCheckbox.click();
  }

  public async goToPaymentStepPage() {
    await this.checkoutButton.click();
  }
}
