define("util/buildscripts/tests/css/flattenTest",["dojo","dijit","dojox"],function(l,i,s){load("../../jslib/logger.js"),load("../../jslib/buildUtil.js"),load("../../jslib/fileUtil.js");var t=buildUtil.flattenCss("blue/one.css",fileUtil.readFile("blue/one.css"));print(t)});