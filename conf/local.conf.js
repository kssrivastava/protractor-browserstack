var browserstack = require('browserstack-local');

exports.config = {
//  'specs': [ '../specs/local.js' ],
//additional
framework: 'mocha',
mochaOpts: {
      reporter: 'mochawesome-screenshots',
      reporterOptions: {
          reportDir: 'reports', 
          reportName: 'PRP-E2E',
          reportTitle: 'PRP E2E Test Report',
          takePassedScreenshot: true,
          clearOldScreenshots: true,
          jsonReport: true
      },
      timeout: 50000
  },
params: require('../testdata.json'),
baseUrl:'https://qa.planroompro.construction.com/',
//additional end
'specs': [ '../specs/loginData.js' ],
  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
  'capabilities': {
    'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'khushboossrivast1',
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'DgZxZqGzSwCHPg31yEs4',
    'build': 'protractor-browserstack',
    'name': 'local_test',
    'browserName': 'chrome',
    'browserstack.local': true,
    'browserstack.networkLogs':'true',
    'browserstack.debug': 'true'
  },
  onPrepare: function () {
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(5000);
  },
  // Code to start browserstack local before start of test
  beforeLaunch: function(){
    console.log("Connecting local");
    return new Promise(function(resolve, reject){
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({'key': exports.config.capabilities['browserstack.key'] }, function(error) {
        if (error) return reject(error);
        console.log('Connected. Now testing...');

        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  afterLaunch: function(){
    return new Promise(function(resolve, reject){
      exports.bs_local.stop(resolve);
    });
  }
};
