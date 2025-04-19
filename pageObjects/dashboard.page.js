class dashboardPage{

  get shopingCartLink() {
    return $('.shopping_cart_link');
  }

  async verifyTheVisibilityOfShoppingCartLink() {
    this.shopingCartLink.assertElementVisible();
  }
}

module.exports = new dashboardPage();