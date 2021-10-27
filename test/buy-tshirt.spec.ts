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
    await productListPage.addToCart();
    await productAddedModalPage.goToCheckout();
    await summaryStepPage.goToSignInStepPage();
    await signInStepPage.enterEmail('aperdomobo@gmail.com');
    await signInStepPage.enterPassword('WorkshopProtractor');
    await signInStepPage.signIn();
    await addressStepPage.goToShippingStepPage();
    await shippingStepPage.acceptTermsOfService();
    await shippingStepPage.goToPaymentStepPage();
    await paymentStepPage.goToBankPayment();
    await bankPaymentPage.confirmOrder();

    await expect(orderSummaryPage.confirmationMessage()).toBe(
      'Your order on My Store is complete.',
    );
  });
});
