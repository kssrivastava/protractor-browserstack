



var expect = require('../conf/chai.conf.js');
var LoginPage = require('../tests/e2e/login.po.js');
var loginPage = new LoginPage();

describe('Login suite', function() {

  it('T', function(done) {
    browser.waitForAngularEnabled(false);
    browser.get('/');
    loginPage.setUsername(browser.params[0].UserName);
    loginPage.setPassword(browser.params[0].Password);
    loginPage.loginButton.click();
    expect(browser.getCurrentUrl()).to.eventually.equal('https://qa.planroompro.construction.com/');
    done();
  });

  it('should redirect to home page after valid login', function(done) {
    loginPage.setUsername(browser.params[1].UserName);
    loginPage.setPassword(browser.params[1].Password);
    loginPage.loginButton.click();
    expect(browser.getCurrentUrl()).to.eventually.equal('https://qa.planroompro.construction.com/');
    done();
  });
  
});