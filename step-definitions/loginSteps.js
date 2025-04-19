const { Given, When, Then } = require('@cucumber/cucumber');
const dashboardPage = require('../pageObjects/dashboard.page');

Given (/I logged into the application with valid credentials$/,async() => {
    await browser.loginAsStandardUser();
})
When (/I navigate to the dashboard$/,async() => {})
Then (/I should see the dashboard page items$/,async() => {
    dashboardPage.verifyTheVisibilityOfShoppingCartLink();
})   