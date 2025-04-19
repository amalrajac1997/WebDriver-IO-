const { Given, When, Then } = require('@cucumber/cucumber');
const dashboardPage = require('../pageObjects/dashboard.page');
const logger = require('../helper/logger');

Given (/I logged into the application with valid credentials$/,async() => {
    await browser.loginAsStandardUser();
    logger.info('Logged in with standard user credentials');
})
When (/I navigate to the dashboard$/,async() => {
    logger.info('Navigated to the inventory page');
})
Then (/I should see the dashboard page items$/,async() => {
    await dashboardPage.verifyTheVisibilityOfShoppingCartLink();
})   