define("3rdlibs/angular/docs/examples/example-ngView-directive/protractor",["dojo","dijit","dojox"],function(e,t,o){it("should load and compile correct template",function(){element(by.linkText("Moby: Ch1")).click();var e=element(by.css("[ng-view]")).getText();expect(e).toMatch(/controller\: ChapterCtrl/),expect(e).toMatch(/Book Id\: Moby/),expect(e).toMatch(/Chapter Id\: 1/),element(by.partialLinkText("Scarlet")).click(),e=element(by.css("[ng-view]")).getText(),expect(e).toMatch(/controller\: BookCtrl/),expect(e).toMatch(/Book Id\: Scarlet/)})});