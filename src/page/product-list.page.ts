import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private addToCartButton: ElementFinder;

  public get getAddToCartButton(): ElementFinder {
    return this.addToCartButton;
  }

  constructor() {
    // ? CHANGED SELECTOR: SPECICY TO CLICK THE CART BUTTON OF THE FIRST ELEMENT
    // ? IN THE GRID, AS IT IS A PRODUCT LIST, REMOVED REDUNDANT CLASSES.
    this.addToCartButton = $('li:first-child a.ajax_add_to_cart_button');
  }

  public async addToCart(): Promise<void> {
    await this.addToCartButton.click();
  }
}
