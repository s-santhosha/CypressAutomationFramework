const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    "api-endpoint": "https://petstore.swagger.io/v2/pet",
    "ebay-url": "https://www.ebay.com.au",
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  execTimeout: 20000,
  pageLoadTimeout: 30000,
  requestTimeout: 20000,
  responseTimeout: 20000,
  video: false,
  failOnStatusCode: false,
  viewportHeight: 1200,
  viewportWidth: 1920,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Cypress Framework Tests",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    screenshotOnRunFailure: true,
    video: false,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {},
  },
});
