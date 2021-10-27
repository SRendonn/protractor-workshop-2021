import { browser } from 'protractor';
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

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await browser.sleep(3000);
    await productListPage.addToCart();
    await browser.sleep(3000);
    await productAddedModalPage.goToCheckout();
    await browser.sleep(3000);
    await summaryStepPage.goToSignInStepPage();
    await browser.sleep(3000);
    await signInStepPage.enterEmail('aperdomobo@gmail.com');
    await signInStepPage.enterPassword('WorkshopProtractor');
    await signInStepPage.signIn();
    await browser.sleep(3000);
    await addressStepPage.goToShippingStepPage();
    await browser.sleep(3000);
    await shippingStepPage.acceptTermsOfService();
    await browser.sleep(3000);
    await shippingStepPage.goToPaymentStepPage();
    await browser.sleep(3000);
    await paymentStepPage.goToBankPayment();
    await browser.sleep(3000);
    await bankPaymentPage.confirmOrder();
    await browser.sleep(3000);

    await expect(orderSummaryPage.confirmationMessage()).toBe(
      'Your order on My Store is complete.',
    );
  });
});
