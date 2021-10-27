import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailInput: ElementFinder;

  private passwordInput: ElementFinder;

  private signInButton: ElementFinder;

  constructor() {
    this.emailInput = $('#email');
    this.passwordInput = $('#passwd');
    this.signInButton = $('#SubmitLogin > span');
  }

  public async enterEmail(value: string): Promise<void> {
    await this.emailInput.sendKeys(value);
  }

  public async enterPassword(value: string): Promise<void> {
    await this.passwordInput.sendKeys(value);
  }

  public async signIn(): Promise<void> {
    await this.signInButton.click();
  }
}
