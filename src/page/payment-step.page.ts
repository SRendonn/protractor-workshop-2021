import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private bankPaymentButton: ElementFinder;

  constructor() {
    this.bankPaymentButton = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public goToBankPayment() {
    this.bankPaymentButton.click();
  }
}
