define("3rdlibs/angular/docs/examples/example-example40/script",["dojo","dijit","dojox"],function(e,n,i){!function(e){"use strict";e.module("form-example2",[]).directive("contenteditable",function(){return{require:"ngModel",link:function(e,n,i,t){n.on("blur",function(){t.$setViewValue(n.html())}),t.$render=function(){n.html(t.$viewValue)},t.$setViewValue(n.html())}}})}(window.angular)});