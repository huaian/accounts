define("3rdlibs/angular/docs/examples/example-location-html5-mode/fakeBrowser",["dojo","dijit","dojox"],function(n,o,e){!function(n){"use strict";n.module("fake-browser",[]).config(function(n){n.decorator("$browser",function(n,o,e){return n.onUrlChange=function(n){this.urlChange=n},n.url=function(){return e},n.defer=function(n,o){setTimeout(function(){n()},o||0)},n.baseHref=function(){return o},n})})}(window.angular)});