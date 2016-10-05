define("3rdlibs/angular/docs/examples/example-ngControllerAs/app",["dojo","dijit","dojox"],function(t,e,o){!function(t){"use strict";function e(){this.name="John Smith",this.contacts=[{type:"phone",value:"408 555 1212"},{type:"email",value:"john.smith@example.org"}]}t.module("controllerAsExample",[]).controller("SettingsController1",e),e.prototype.greet=function(){alert(this.name)},e.prototype.addContact=function(){this.contacts.push({type:"email",value:"yourname@example.org"})},e.prototype.removeContact=function(t){var e=this.contacts.indexOf(t);this.contacts.splice(e,1)},e.prototype.clearContact=function(t){t.type="phone",t.value=""}}(window.angular)});