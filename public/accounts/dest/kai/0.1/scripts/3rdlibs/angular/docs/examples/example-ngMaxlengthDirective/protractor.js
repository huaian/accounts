define("3rdlibs/angular/docs/examples/example-ngMaxlengthDirective/protractor",["dojo","dijit","dojox"],function(e,t,n){var i=element(by.binding("model")),a=element(by.id("input"));it("should validate the input with the default maxlength",function(){a.sendKeys("abcdef"),expect(i.getText()).not.toContain("abcdef"),a.clear().then(function(){a.sendKeys("abcde"),expect(i.getText()).toContain("abcde")})})});