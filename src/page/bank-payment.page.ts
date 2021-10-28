import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmOrderButton: ElementFinder;

  public get getConfirmOrderButton(): ElementFinder {
    return this.confirmOrderButton;
  }

  constructor() {
    this.confirmOrderButton = $('#cart_navigation > button');
  }

  public async confirmOrder() {
    this.confirmOrderButton.click();
  }
}
