define("3rdlibs/angular/docs/examples/example-multiSlotTranscludeExample/protractor",["dojo","dijit","dojox"],function(e,t,l){it("should have transcluded the title and the body",function(){var e=element(by.model("title"));e.clear(),e.sendKeys("TITLE");var t=element(by.model("text"));t.clear(),t.sendKeys("TEXT"),expect(element(by.css(".title")).getText()).toEqual("TITLE"),expect(element(by.binding("text")).getText()).toEqual("TEXT"),expect(element(by.css(".footer")).getText()).toEqual("Fallback Footer")})});