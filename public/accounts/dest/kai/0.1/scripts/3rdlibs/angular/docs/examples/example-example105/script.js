define("3rdlibs/angular/docs/examples/example-example105/script",["dojo","dijit","dojox"],function(e,n,a){!function(e){"use strict";e.module("orderByExample",[]).controller("ExampleController",["$scope",function(e){e.friends=[{name:"John",phone:"555-1212",age:10},{name:"Mary",phone:"555-9876",age:19},{name:"Mike",phone:"555-4321",age:21},{name:"Adam",phone:"555-5678",age:35},{name:"Julie",phone:"555-8765",age:29}],e.predicate="age",e.reverse=!0,e.order=function(n){e.reverse=e.predicate===n?!e.reverse:!1,e.predicate=n}}])}(window.angular)});