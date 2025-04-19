const { browser } = require('@wdio/globals')

module.exports = class Page {
    open () {
        return browser.url(`/`)
    }

    async onClick(WebElement){
        try{
            WebElement.click();
        }catch(err){
           throw new Error("Unable to click on Web Element") 
        }
    }

    async onSendKeys(WebElement,value){
        try{
            WebElement.setValue(value);
        }catch(err){
            throw new Error("Unable to send keys to Web Element")
        }
    }
}
