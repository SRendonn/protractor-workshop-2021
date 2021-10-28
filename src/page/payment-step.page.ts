import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private bankPaymentButton: ElementFinder;

  public get getBankPaymentButton(): ElementFinder {
    return this.bankPaymentButton;
  }

  constructor() {
    // ? CHANGED SELECTOR: SIMPLIFIED TO TAG PLUS CLASS
    this.bankPaymentButton = $('a.bankwire');
  }

  public async goToBankPayment() {
    this.bankPaymentButton.click();
  }
}
