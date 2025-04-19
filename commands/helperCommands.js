browser.addCommand("logMessage", async function (msg) {
  const timestamp = new Date().toISOString();
  console.log(`📝 [${timestamp}] ${msg}`);
});

browser.addCommand("waitForUrlContains", async function (text, timeout = 5000) {
  await browser.waitUntil(async () => (await browser.getUrl()).includes(text), {
    timeout,
    timeoutMsg: `❌ URL did not contain "${text}" after ${timeout}ms`,
  });

  console.log(`✅ URL contains: ${text}`);
});
