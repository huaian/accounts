define("3rdlibs/angular/docs/examples/example-example.csp/protractor",["dojo","dijit","dojox"],function(e,t,r){function n(){return browser.manage().logs().get("browser").then(function(e){return e.filter(function(e){return e.level.value>u.logging.Level.WARNING.value})})}function o(){n()}function i(){n().then(function(e){expect(e.length).toEqual(0),e.length})}function c(e){n().then(function(t){var r=!1;if(t.forEach(function(t){t.message.match(e)&&(r=!0)}),!r)throw new Error("expected an error that matches "+e)})}var l,u,a=element(by.id("inc")),s=element(by.id("counter")),d=element(by.id("evil")),h=element(by.id("evilError"));beforeEach(function(){l=require("util"),u=require("protractor/node_modules/selenium-webdriver")}),"chrome"===browser.params.browser&&(it("should not report errors when the page is loaded",function(){o(),browser.driver.getCurrentUrl().then(function(e){browser.get(e)}),i()}),it("should evaluate expressions",function(){expect(s.getText()).toEqual("0"),a.click(),expect(s.getText()).toEqual("1"),i()}),it('should throw and report an error when using "eval"',function(){d.click(),expect(h.getText()).toMatch(/Content Security Policy/),c(/Content Security Policy/)}))});