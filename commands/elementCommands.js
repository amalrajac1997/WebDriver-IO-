browser.addCommand("clickElement", async function () {
    await this.waitForDisplayed({ timeout: 5000 });
    await this.click();
    console.log(`✅ Clicked: ${await this.selector}`);
  }, true);
  
  browser.addCommand("sendKeysToElement", async function (value) {
    await this.waitForDisplayed({ timeout: 5000 });
    await this.setValue(value);
    console.log(`✅ Set value: ${value} on ${await this.selector}`);
  }, true);


  browser.addCommand("clearElement", async function () {
    await this.waitForDisplayed({ timeout: 5000 });
    await this.click();
    const value = await this.getValue();
    if (!value || value.length === 0) {
      console.log(`🧼 No value to clear on ${await this.selector}`);
      return;
    }
    for (let i = 0; i < value.length; i++) {
        await browser.keys('Backspace'); 
    }
    console.log(`✅ Cleared value on ${await this.selector}`);
  }, true);
  

    browser.addCommand("getElementText", async function () {
        await this.waitForDisplayed({ timeout: 5000 });
        const text = await this.getText();
        console.log(`✅ Text retrieved: ${text} from ${await this.selector}`);
        return text;
    }
    , true);

    browser.addCommand("getElementAttribute", async function (attribute) {
        await this.waitForDisplayed({ timeout: 5000 });
        const attrValue = await this.getAttribute(attribute);
        console.log(`✅ Attribute "${attribute}" retrieved: ${attrValue} from ${await this.selector}`);
        return attrValue;
    }
    , true);

    browser.addCommand("isElementDisplayed", async function () {
        await this.waitForDisplayed({ timeout: 5000 });
        const isDisplayed = await this.isDisplayed();
        console.log(`✅ Element displayed: ${isDisplayed} for ${await this.selector}`);
        return isDisplayed;
    }
    , true);

    browser.addCommand("isElementEnabled", async function () {
        await this.waitForDisplayed({ timeout: 5000 });
        const isEnabled = await this.isEnabled();
        console.log(`✅ Element enabled: ${isEnabled} for ${await this.selector}`);
        return isEnabled;
    }
    , true);

    browser.addCommand("isElementSelected", async function () {
        await this.waitForDisplayed({ timeout: 5000 });
        const isSelected = await this.isSelected();
        console.log(`✅ Element selected: ${isSelected} for ${await this.selector}`);
        return isSelected;
    }
    , true);

    browser.addCommand("getElementCSSProperty", async function (property) {
        await this.waitForDisplayed({ timeout: 5000 });
        const cssValue = await this.getCSSProperty(property);
        console.log(`✅ CSS property "${property}" retrieved: ${cssValue} from ${await this.selector}`);
        return cssValue;
    }
    , true);
