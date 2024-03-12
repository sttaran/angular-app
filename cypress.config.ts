import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.test.{js,jsx}',
    viewportHeight: 1080,
    viewportWidth: 1920,
    requestTimeout: 5000,
    responseTimeout: 30000,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});