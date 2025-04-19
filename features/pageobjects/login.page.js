const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }
    get appLogo(){
        return $('.app_logo')
    }

    async login (username, password) {
        await this.onSendKeys(this.inputUsername,username);
        await this.onSendKeys(this.inputPassword,password);
        await this.onClick(this.btnSubmit);
    }

    async verifyTheVisibilityOfLogoIconInHomePage(){
        await this.appLogo.waitForDisplayed();
    }

    
    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
