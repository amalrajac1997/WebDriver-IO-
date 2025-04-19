const logger = require('../helper/logger');

class DashboardPage {

  get shoppingCartLink() {
    return $('.shopping_cart_link');
  }

  async verifyTheVisibilityOfShoppingCartLink() {
    // Wait for URL to contain 'inventory.html'
    await browser.waitUntil(
      async () => (await browser.getUrl()).includes('inventory.html'),
      {
        timeout: 5000,
        timeoutMsg: 'Expected URL to contain inventory.html'
      }
    );
    logger.info('Verified URL contains inventory.html');

    // Hover on the shopping cart link
    await this.shoppingCartLink.hoverOnElement;
    logger.info('Hovered over the shopping cart link');

    // Navigate to inventory (assuming custom command)
    if (browser.gotoInventory) {
      await browser.gotoInventory();
      logger.info('Navigated to the inventory page');
    } else {
      logger.warn('gotoInventory is not defined on browser');
    }

    // Wait for the element to be displayed
    await this.shoppingCartLink.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: 'Shopping cart link was not visible'
    });
    logger.info('Shopping cart link is visible');
  }
}

module.exports = new DashboardPage();
