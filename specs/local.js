


describe('BrowserStack Local Testing', function() {
  it('can check tunnel working', function() {
    browser.driver.get('https://qa.planroompro.construction.com').then(function() {
      expect(browser.driver.getPageSource()).toMatch(/PlanRoom - Login/i);
    });
  });
  it('can check tunnel working again', function() {
    browser.driver.get('https://qa.planroompro.construction.com').then(function() {
      expect(browser.driver.getPageSource()).toMatch(/PlanRoom - Login/i);
    });
  });
});

