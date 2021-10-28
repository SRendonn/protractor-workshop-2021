import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderConfirmationMessage: ElementFinder;

  public get getOrderConfirmationMessage(): ElementFinder {
    return this.orderConfirmationMessage;
  }

  constructor() {
    this.orderConfirmationMessage = $('p.cheque-indent');
  }

  public async confirmationMessage(): Promise<string> {
    return this.orderConfirmationMessage.getText();
  }
}
