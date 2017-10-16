var browserstack = require('browserstack-local');

exports.config = {
    framework: 'mocha',
    baseUrl:'https://qa.planroompro.construction.com/',
    specs: [ '../specs/restAPICall.js' ],
    capabilities: {
        browserName: 'chrome'
    },
    directConnect: true,
    
    mochaOpts: {
        reporter: 'mochawesome-screenshots',
        reporterOptions: {
            reportDir: 'reports', 
            reportName: 'PRP-E2E',
            reportTitle: 'PRP E2E Test Report1',
            takePassedScreenshot: true,
            clearOldScreenshots: true,
            jsonReport: true
        },
        timeout: 50000
     }
    
};