const fs = require("fs")

if (fs.existsSync('./cypress/reports/test-case')) {
    fs.rmdirSync('./cypress/reports/test-case', {recursive: true})
  }