define("3rdlibs/angular/docs/examples/example-ngController/app",["dojo","dijit","dojox"],function(e,n,o){!function(e){"use strict";function n(e){e.name="John Smith",e.contacts=[{type:"phone",value:"408 555 1212"},{type:"email",value:"john.smith@example.org"}],e.greet=function(){alert(e.name)},e.addContact=function(){e.contacts.push({type:"email",value:"yourname@example.org"})},e.removeContact=function(n){var o=e.contacts.indexOf(n);e.contacts.splice(o,1)},e.clearContact=function(e){e.type="phone",e.value=""}}e.module("controllerExample",[]).controller("SettingsController2",["$scope",n])}(window.angular)});