define("3rdlibs/angular/docs/examples/example-service-decorator/protractor",["dojo","dijit","dojox"],function(e,o,t){it("should display log messages in dom",function(){element.all(by.repeater("l in myLog")).count().then(function(e){expect(e).toEqual(6)})})});