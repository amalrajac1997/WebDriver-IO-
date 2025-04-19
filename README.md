Dummy practice websites
-------------------------
https://ultimateqa.com/dummy-automation-websites/

Pre-requesite:
------------------------------------
1. Node JS
2. Visual Studio

Commands to install webdriver.IO
------------------------------------
1. npm init -y
2. npm install --save-dev @wdio/cli
3. npx wdio config

Documentation
------------------------------------
https://webdriver.io/docs/

Best Practices /Folder struture
-----------------------------------------

project/
├── features/                  # Gherkin feature files (if using Cucumber)
│   ├── login.feature
├── step-definitions/         # Step definitions (Cucumber)
│   ├── loginSteps.js
├── pageobjects/              # Page Object files
│   ├── login.page.js
│   ├── dashboard.page.js
├── commands/                 # Custom browser/element commands
│   ├── customCommands.js
├── utils/                    # Helpers like random generators, config utils
│   ├── dataGenerator.js
├── wdio.conf.js              # WebdriverIO config

-------------------------------------------------------------------------------
❌ Bad Practice              | ✅ Better Way
Hardcoding selectors          | Use page objects
browser.pause(5000)           | Use waitForDisplayed()
Mixing logic in step files    | Keep logic in page objects / commands
Using complex CSS selectors   | Use stable attributes like data-testid

-------------------------------------------------------------------------------
