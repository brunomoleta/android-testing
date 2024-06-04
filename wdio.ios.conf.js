import { driver } from "@wdio/globals";

export const config = {
  specs: ["./test/specs/checkout.e2e.js"],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],

  maxInstances: 1,
  // Sauce Labs
  user: process.env.SAUCE_USER,
  key: process.env.SAUCE_KEY,
  hostname: process.env.SAUCE_HOSTNAME,
  port: 443,
  baseUrl: "wd/hub",
  // Fim Sauce Labs

  capabilities: [
    {
      platformName: "iOS",
      "appium:deviceName": "iPhone 12",
      "appium:automationName": "XCUITest",
      "appium:app": `storage:filename=LojaEBAC.ipa`,
      "sauce:options": {
        appiumVersion: "latest",
        build: "ebac-ios",
        name: "login-register-products",
      },
    },
  ],
  // Fim setup Local

  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [],
  framework: "mocha",
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  before: async () => {
    let state = await driver.queryAppState("br.com.lojaebac");
    if (state !== 4) {
      await driver.execute("mobile: launchApp", {
        bundleId: "br.com.lojaebac",
      });
    }
  },
  after: async () => {
    await driver.execute("mobile: terminateApp", {
      bundleId: "br.com.lojaebac",
    });
  },
};
