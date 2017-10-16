var expect = require('../conf/chai.conf.js');
var LoginPage = require('../tests/e2e/login.po.js');
var testData = require('../testdata.json');

var loginPage = new LoginPage();

describe('Login suite', function() {
// testData.tc01.forEach(function (data) {
//   it('tc01 - should remain on login page after invalid login', function(done) {
//     browser.waitForAngularEnabled(false);
//     browser.get('/');
//     loginPage.setUsername(data.UserName);
//     loginPage.setPassword(data.Password);
//     loginPage.loginButton.click();
//     expect(browser.getCurrentUrl()).to.eventually.equal('https://qa.planroompro.construction.com/');
//     done();
//   });
// });
// testData.tc02.forEach(function (data) {
//   it('tc02 - should remain on login page after invalid login again', function(done) {
//     browser.waitForAngularEnabled(false);
//     browser.get('/');
//     loginPage.setUsername(data.UserName);
//     loginPage.setPassword(data.Password);
//     loginPage.loginButton.click();
//     expect(browser.getCurrentUrl()).to.eventually.equal('https://qa.planroompro.construction.com/');
//     done();
//   });
// });
testData.tc04.forEach(function (data) {
  it('tc04 - should remain on login page after invalid login - check with API get request', function(done) {
    browser.waitForAngularEnabled(false);
    browser.get('/');
    loginPage.setUsername(data.UserName);
    loginPage.setPassword(data.Password);
    loginPage.loginButton.click();
    expect(browser.getCurrentUrl()).to.eventually.equal('https://qa.planroompro.construction.com/');

    loginPage.getAPIResponse();
    done();
  });
});
});