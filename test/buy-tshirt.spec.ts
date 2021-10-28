import { browser, ExpectedConditions } from 'protractor';
import {
  AddressStepPage,
  BankPaymentPage,
  MenuContentPage,
  OrderSummaryPage,
  PaymentStepPage,
  ProductAddedModalPage,
  ProductListPage,
  ShippingStepPage,
  SignInStepPage,
  SummaryStepPage,
} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage = new MenuContentPage();
  const productListPage = new ProductListPage();
  const productAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage = new SummaryStepPage();
  const signInStepPage = new SignInStepPage();
  const addressStepPage = new AddressStepPage();
  const shippingStepPage = new ShippingStepPage();
  const paymentStepPage = new PaymentStepPage();
  const bankPaymentPage = new BankPaymentPage();
  const orderSummaryPage = new OrderSummaryPage();

  const ec = ExpectedConditions;

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await browser.wait(ec.elementToBeClickable(menuContentPage.getTShirtMenu), 5000);
    await menuContentPage.goToTShirtMenu();
    await browser.wait(ec.elementToBeClickable(productListPage.getAddToCartButton), 5000);
    await productListPage.addToCart();
    await browser.wait(ec.elementToBeClickable(productAddedModalPage.getCheckoutButton), 5000);
    await productAddedModalPage.goToCheckout();
    await browser.wait(ec.elementToBeClickable(summaryStepPage.getCheckoutButton), 5000);
    await summaryStepPage.goToSignInStepPage();
    await signInStepPage.enterEmail('aperdomobo@gmail.com');
    await signInStepPage.enterPassword('WorkshopProtractor');
    await signInStepPage.signIn();
    await browser.wait(ec.elementToBeClickable(addressStepPage.getCheckoutButton), 5000);
    await addressStepPage.goToShippingStepPage();
    await browser.wait(ec.elementToBeClickable(shippingStepPage.getCheckoutButton), 5000);
    await shippingStepPage.acceptTermsOfService();
    await shippingStepPage.goToPaymentStepPage();
    await browser.wait(ec.elementToBeClickable(paymentStepPage.getBankPaymentButton), 5000);
    await paymentStepPage.goToBankPayment();
    await browser.wait(ec.elementToBeClickable(bankPaymentPage.getConfirmOrderButton), 5000);
    await bankPaymentPage.confirmOrder();
    await browser.wait(ec.textToBePresentInElement(orderSummaryPage.getOrderConfirmationMessage, 'Your order on My Store is complete.'), 5000);
    await expect(orderSummaryPage.confirmationMessage()).toBe(
      'Your order on My Store is complete.',
    );
  });
});
