define("3rdlibs/angular/docs/examples/example-example56/protractor",["dojo","dijit","dojox"],function(e,t,c){it("should check both checkBoxes",function(){expect(element(by.id("checkSlave")).getAttribute("checked")).toBeFalsy(),element(by.model("master")).click(),expect(element(by.id("checkSlave")).getAttribute("checked")).toBeTruthy()})});