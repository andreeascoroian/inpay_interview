const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 120000,
  experimentalFetchPolyfill: false,
  experimentalInteractiveRunEvents: false,
  experimentalSourceRewriting: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  numTestsKeptInMemory: 1,
  pageLoadTimeout: 120000,
  includeShadowDom: true,
  isTextTerminal: false,
  maxCachedSessions: 1,
  env: {
    baseUrl: 'https://practice.automationtesting.in/',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
