define("3rdlibs/angular/docs/examples/example-httpbackend-e2e-testing/app",["dojo","dijit","dojox"],function(n,e,o){!function(n){"use strict";var e=n.module("myApp",[]);e.controller("main",function(n){var e=this;e.phones=[],e.newPhone={name:""},e.getPhones=function(){n.get("/phones").then(function(n){e.phones=n.data})},e.addPhone=function(o){n.post("/phones",o).then(function(){return e.newPhone={name:""},e.getPhones()})},e.getPhones()})}(window.angular)});