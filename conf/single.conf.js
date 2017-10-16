exports.config = {
  'specs': [ '../specs/single.js' ],
  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',

  'capabilities': {
    'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'khushboossrivast1',
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'DgZxZqGzSwCHPg31yEs4',
    'build': 'protractor-browserstack',
    'name': 'single_test',
    'browserName': 'chrome',
    'resolution': '1024x768',
     'browserstack.debug': 'true',
     'browserstack.networkLogs':'true',
    // 'os': 'OS X',
    // 'os_version': 'Sierra',
    // 'browserName': 'Safari',
    
  }
  
};
