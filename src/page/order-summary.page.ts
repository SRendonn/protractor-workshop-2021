import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderConfirmationMessage: ElementFinder;

  constructor() {
    this.orderConfirmationMessage = $('#center_column > div > p > strong');
  }

  public async confirmationMessage(): Promise<string> {
    return this.orderConfirmationMessage.getText();
  }
}
