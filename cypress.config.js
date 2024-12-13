const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.js", // Include all test files in the `e2e` folder
    baseUrl: "https://automationexercise.com", // Set a base URL for API requests
    reporter: "mocha", // Set Mocha as the reporter
    reporterOptions: {
      reportDir: "cypress/results", // Directory to save the report
      overwrite: false,
      html: true,  // Generate HTML report
      json: true   // Generate JSON report
    }
  },
});
