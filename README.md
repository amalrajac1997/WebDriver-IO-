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
![image](https://github.com/user-attachments/assets/12941982-f3d7-4fa9-aee5-30809b279ce8)


-------------------------------------------------------------------------------
❌ Bad Practice              | ✅ Better Way
Hardcoding selectors          | Use page objects
browser.pause(5000)           | Use waitForDisplayed()
Mixing logic in step files    | Keep logic in page objects / commands
Using complex CSS selectors   | Use stable attributes like data-testid

-------------------------------------------------------------------------------
