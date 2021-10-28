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
  const ec = ExpectedConditions;

  describe('given an online shop', () => {
    beforeAll(async () => {
      await browser.get('http://automationpractice.com/');
    });

    describe('then should buy a t-shirt', () => {
      beforeAll(async () => {
        const menuContentPage = new MenuContentPage();
        const productListPage = new ProductListPage();
        const productAddedModalPage = new ProductAddedModalPage();
        const summaryStepPage = new SummaryStepPage();

        await browser.wait(ec.elementToBeClickable(menuContentPage.getTShirtMenu), 5000);
        await menuContentPage.goToTShirtMenu();
        await browser.wait(ec.elementToBeClickable(productListPage.getAddToCartButton), 5000);
        await productListPage.addToCart();
        await browser.wait(ec.elementToBeClickable(productAddedModalPage.getCheckoutButton), 5000);
        await productAddedModalPage.goToCheckout();
        await browser.wait(ec.elementToBeClickable(summaryStepPage.getCheckoutButton), 5000);
        await summaryStepPage.goToSignInStepPage();
      });

      describe('then should sign-in', () => {
        beforeAll(async () => {
          const signInStepPage = new SignInStepPage();

          await signInStepPage.enterEmail('aperdomobo@gmail.com');
          await signInStepPage.enterPassword('WorkshopProtractor');
          await signInStepPage.signIn();
        });

        describe('should select default address', () => {
          beforeAll(async () => {
            const addressStepPage = new AddressStepPage();
            const shippingStepPage = new ShippingStepPage();

            await browser.wait(ec.elementToBeClickable(addressStepPage.getCheckoutButton), 5000);
            await addressStepPage.goToShippingStepPage();
            await browser.wait(ec.elementToBeClickable(shippingStepPage.getCheckoutButton), 5000);
            await shippingStepPage.acceptTermsOfService();
            await shippingStepPage.goToPaymentStepPage();
          });

          describe('should pay via bank wire', () => {
            it('then should be bought a t-shirt', async () => {
              const paymentStepPage = new PaymentStepPage();
              const bankPaymentPage = new BankPaymentPage();
              const orderSummaryPage = new OrderSummaryPage();

              await browser.wait(ec.elementToBeClickable(paymentStepPage.getBankPaymentButton),
                5000);
              await paymentStepPage.goToBankPayment();
              await browser.wait(ec.elementToBeClickable(bankPaymentPage.getConfirmOrderButton),
                5000);
              await bankPaymentPage.confirmOrder();
              await browser.wait(ec.textToBePresentInElement(orderSummaryPage.getOrderConfirmationMessage, 'Your order on My Store is complete.'), 5000);
              await expect(orderSummaryPage
                .confirmationMessage())
                .toBe('Your order on My Store is complete.');
            });
          });
        });
      });
    });
  });
});
