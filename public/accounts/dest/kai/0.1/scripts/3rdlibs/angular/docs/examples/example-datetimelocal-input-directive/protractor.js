define("3rdlibs/angular/docs/examples/example-datetimelocal-input-directive/protractor",["dojo","dijit","dojox"],function(e,t,i){function n(e){var t="var ipt = document.getElementById('exampleInput'); ipt.value = '"+e+"';angular.element(ipt).scope().$apply(function(s) { s.myForm[ipt.name].$setViewValue('"+e+"'); });";browser.executeScript(t)}var o=element(by.binding('example.value | date: "yyyy-MM-ddTHH:mm:ss"')),a=element(by.binding("myForm.input.$valid"));element(by.model("example.value"));it("should initialize to model",function(){expect(o.getText()).toContain("2010-12-28T14:57:00"),expect(a.getText()).toContain("myForm.input.$valid = true")}),it("should be invalid if empty",function(){n(""),expect(o.getText()).toEqual("value ="),expect(a.getText()).toContain("myForm.input.$valid = false")}),it("should be invalid if over max",function(){n("2015-01-01T23:59:00"),expect(o.getText()).toContain(""),expect(a.getText()).toContain("myForm.input.$valid = false")})});