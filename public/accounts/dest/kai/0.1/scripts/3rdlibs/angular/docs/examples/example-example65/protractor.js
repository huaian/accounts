define("3rdlibs/angular/docs/examples/example-example65/protractor",["dojo","dijit","dojox"],function(e,t,s){it("should check ng-class",function(){expect(element(by.css(".base-class")).getAttribute("class")).not.toMatch(/my-class/),element(by.id("setbtn")).click(),expect(element(by.css(".base-class")).getAttribute("class")).toMatch(/my-class/),element(by.id("clearbtn")).click(),expect(element(by.css(".base-class")).getAttribute("class")).not.toMatch(/my-class/)})});