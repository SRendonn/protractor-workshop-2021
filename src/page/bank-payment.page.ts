import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmOrderButton: ElementFinder;

  constructor() {
    this.confirmOrderButton = $('#cart_navigation > button > span');
  }

  public confirmOrder() {
    this.confirmOrderButton.click();
  }
}
