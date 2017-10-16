
var LoginPage = function() {
    this.usernameInput = element(by.id('username'));
    this.passwordInput = element(by.id('password'));
    //this.loginButton = element(by.id('submit'));
    this.loginButton = element(by.buttonText('Sign In'));

    ///Move below elements to homepage
    this.projectTab =  element(by.css('[ng-class="{ active: currentStateName.match(\'main.project\') }"]'));
    this.searchText = element(by.model('search'));
    //this.userToggle = element(by.css('.nav__user.dropdown__toggle'));
    //this.logOutLink = this.userToggle.$('.dropdown__menu').$$('.dropdown__link').get(0);
    //this.registerLink = $$('.decorLink').get(1);
  
    this.get = function() {
      browser.get('/');
    };
  
    this.setUsername = function(username) {
      this.usernameInput.clear();
      this.usernameInput.sendKeys(username);
    };
  
    this.setPassword = function(password) {
      this.passwordInput.clear();
      this.passwordInput.sendKeys(password);
    };
    this.clickProjectTab = function() {
      this.projectTab.click();
      
    };


    var request = require('request');
    
    var executeRequest = function(method, url) {
      var defer = protractor.promise.defer();
      
      // method can be ‘GET’, ‘POST’ or ‘PUT’
      request({uri: url, method: method, json: true}, function(error, response, body) {
    
        if (error || response.statusCode >= 400) {
          defer.reject({
            error : error,
            message : response
          });
        } else {
          defer.fulfill(body);
        }
      });
    
      // Return a promise so the caller can wait on it for the request to complete
      return defer.promise;
    };

  //  var businessMonitoring = exports; 
    
    //businessMonitoring.getMonitoredPageName = function () {
      this.getAPIResponse = function () {
      // Return a promise that will execute the rest call,
      // so that the call is only done when the controlflow queue is executed.
      var deferredExecutor = protractor.promise.defer();
    
      deferredExecutor.then(function() {
        var defer = protractor.promise.defer();
    
        executeRequest('GET', '/de_prp//contact/index?offset=0&max=100&order=0&sort=0 HTTP/1.1')
          .then(function success(data) {
            console.log('log: ' + data.url);
            defer.fulfill(data.url);
          }, function error(e) {
            defer.reject('Error when calling BusinessMonitoring mock: ' + e);
          });
    
        return defer.promise;
      });
    
      return deferredExecutor;
    };


    
  };
  module.exports = LoginPage;