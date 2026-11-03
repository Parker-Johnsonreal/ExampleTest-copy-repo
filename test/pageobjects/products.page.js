import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for the Products (inventory) page
 */
class ProductsPage extends Page {

    async addToCart() {
        const itemId = 'Sauce Labs Onesie';
        await $(`[data-test="add-to-cart-${itemId}"]`).click();
    }
    /**
     * define selectors using getter methods
     */
    get title () {
        return $('.title');
    }

    get inventoryItems () {
        return $$('.inventory_item');
    }

    get cartLink () {
        return $('.shopping_cart_link');
    }

    get cartBadge () {
        return $('.shopping_cart_badge');
    }

    /**
     * click "Add to cart" for a product by its name, e.g. 'Sauce Labs Onesie'
     * the button id is the name in lowercase with dashes: #add-to-cart-sauce-labs-onesie
     */
    async addToCart (productName) {
        const id = productName.toLowerCase().replaceAll(' ', '-');
        await $(`#add-to-cart-${id}`).click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('inventory.html');
    }
}

export default new ProductsPage();
