const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const LoginPage = require('../../pageobjects/login.page');

const {standardUser,Password}=process.env

Given (/I logged into the application as standard User$/,async()=>{
    await LoginPage.open();
    await LoginPage.login(standardUser,Password)
    await LoginPage.verifyTheVisibilityOfLogoIconInHomePage();
});


