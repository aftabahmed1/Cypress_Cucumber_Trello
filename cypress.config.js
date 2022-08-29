const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://trello.com/",
    "watchForFileChanges": false,
    "defaultCommandTimeout": 5000,
    "video": false,
    "reporter": "mochawesome",
    "experimentalSessionAndOrigin": true,
    "testFiles": "**/*.{feature,features}",
    "reporterOptions": {
      "reportDir": "cypress/reports/test-case",
      "overwrite": false,
      "html": false,
      "json": true
    }
  }
})