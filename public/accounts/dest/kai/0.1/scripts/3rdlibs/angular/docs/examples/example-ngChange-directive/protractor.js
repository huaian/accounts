define("3rdlibs/angular/docs/examples/example-ngChange-directive/protractor",["dojo","dijit","dojox"],function(e,t,n){var i=element(by.binding("counter")),o=element(by.binding("confirmed"));it("should evaluate the expression if changing from view",function(){expect(i.getText()).toContain("0"),element(by.id("ng-change-example1")).click(),expect(i.getText()).toContain("1"),expect(o.getText()).toContain("true")}),it("should not evaluate the expression if changing from model",function(){element(by.id("ng-change-example2")).click(),expect(i.getText()).toContain("0"),expect(o.getText()).toContain("true")})});