define("3rdlibs/angular/docs/examples/example-example52/script",["dojo","dijit","dojox"],function(e,c,n){!function(e){"use strict";e.module("cacheExampleApp",[]).controller("CacheController",["$scope","$cacheFactory",function(c,n){c.keys=[],c.cache=n("cacheId"),c.put=function(n,o){e.isUndefined(c.cache.get(n))&&c.keys.push(n),c.cache.put(n,e.isUndefined(o)?null:o)}}])}(window.angular)});