define("3rdlibs/angular/docs/examples/example-directive-decorator/script",["dojo","dijit","dojox"],function(n,r,e){!function(n){"use strict";n.module("urlDecorator",[]).controller("Ctrl",["$scope",function(n){n.id=3,n.warnCount=0}]).config(["$provide",function(r){function e(n){var r=n.match(/{{([^}]+)}}/g);if(null!==r)return r=r.map(function(n){var r=n.match(/[^{}]+/);return null===r?null:r[0]})}r.decorator("ngHrefDirective",["$delegate","$log","$parse",function(r,o,i){var t=r[0].link;return r[0].compile=function(a,u){var c=u.ngHref,l=e(c),f=l.map(function(n){return n?i(n):void 0});return function(e,i,a){t.apply(r[0],arguments),a.$observe("ngHref",function(r){f&&n.isArray(f)&&n.forEach(f,function(r,i){var t=n.isFunction(r)?r(e):!0;t||(o.warn('NgHref Warning: "'+l[i]+'" in the expression "'+c+'" is falsy!'),e.warnCount++)})})}},delete r[0].link,r}])}])}(window.angular)});