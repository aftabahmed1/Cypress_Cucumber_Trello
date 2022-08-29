const report = require("multiple-cucumber-html-reporter");
  report.generate({
      jsonDir: "cypress/reports/cucumber-json",  // ** Path of .json file **//
      reportPath: "cypress/reports", // ** Path of .html file **//
      charts:true,
      useCDN: true,
      metadata: {
          browser: {
              name: "chrome",
              version: "104",
          },
          device: "Local test machine",
          platform: {
              name: "MacOS",
              version: "11.6.4",
          },
      },
  });