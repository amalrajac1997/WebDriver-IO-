browser.addCommand(
  "assertElementText",
  async function (expectedText) {
    await this.waitForDisplayed({ timeout: 5000 });
    const actualText = await this.getText();

    if (actualText !== expectedText) {
      throw new Error(
        `❌ Text mismatch! Expected: "${expectedText}", Found: "${actualText}"`
      );
    }

    console.log(`✅ Text matched: "${expectedText}"`);
  },
  true
);

browser.addCommand(
  "assertElementExists",
  async function () {
    const exists = await this.isExisting();

    if (!exists) {
      throw new Error(`❌ Element not found: ${await this.selector}`);
    }

    console.log(`✅ Element exists: ${await this.selector}`);
  },
  true
);

browser.addCommand(
  "assertElementVisible",
  async function () {
    const visible = await this.isDisplayed();

    if (!visible) {
      throw new Error(`❌ Element not visible: ${await this.selector}`);
    }

    console.log(`✅ Element is visible: ${await this.selector}`);
  },
  true
);
