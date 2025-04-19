const {
  standardUser,
  lockedOutUser,
  problemUser,
  performanceGlitchUser,
  errorUser,
  visualUser,
  Password,
} = process.env;

async function loginAsUser(username, userPassword) {
  const usernameTextBox = $("#user-name");
  const passwordTextBox = $("#password");
  const loginButton = $("#login-button");
  await browser.url("/");
  await usernameTextBox.setValue(username);
  await passwordTextBox.setValue(userPassword);
  await loginButton.click();
  console.log(`✅ Logged in as ${username}`);
}

browser.addCommand("loginAsStandardUser", async function () {
  await loginAsUser(standardUser, Password);
  console.log("✅ Logged in as standard user");
});

browser.addCommand("loginAsLockedOutUser", async function () {
  await loginAsUser(lockedOutUser, Password);
  console.log("✅ Logged in as locked out user");
});

browser.addCommand("loginAsProblemUser", async function () {
  await loginAsUser(problemUser, Password);
  console.log("✅ Logged in as problem user");
});

browser.addCommand("loginAsPerformanceGlitchUser", async function () {
  await loginAsUser(performanceGlitchUser, Password);
  console.log("✅ Logged in as performance glitch user");
});

browser.addCommand("loginAsErrorUser", async function () {
  await loginAsUser(errorUser, Password);
  console.log("✅ Logged in as error user");
});

browser.addCommand("loginAsVisualUser", async function () {
  await loginAsUser(visualUser, Password);
  console.log("✅ Logged in as visual user");
});