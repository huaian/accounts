/**
 * @license AngularJS v1.5.6
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT
 */

define("3rdlibs/angular/angular-touch",["dojo","dijit","dojox"],function(n,e,t){!function(n,e){"use strict";function t(n){return e.lowercase(n.nodeName||n[0]&&n[0].nodeName)}function o(n,t){var o=!1,c=!1;this.ngClickOverrideEnabled=function(i){return e.isDefined(i)?(i&&!c&&(c=!0,u.$$moduleName="ngTouch",t.directive("ngClick",u),n.decorator("ngClickDirective",["$delegate",function(n){if(o)n.shift();else for(var e=n.length-1;e>=0;){if("ngTouch"===n[e].$$moduleName){n.splice(e,1);break}e--}return n}])),o=i,this):o},this.$get=function(){return{ngClickOverrideEnabled:function(){return o}}}}function c(n,t,o){i.directive(n,["$parse","$swipe",function(c,i){var u=75,r=.3,a=30;return function(s,l,h){function f(n){if(!d)return!1;var e=Math.abs(n.y-d.y),o=(n.x-d.x)*t;return v&&u>e&&o>0&&o>a&&r>e/o}var d,v,g=c(h[n]),p=["touch"];e.isDefined(h.ngSwipeDisableMouse)||p.push("mouse"),i.bind(l,{start:function(n,e){d=n,v=!0},cancel:function(n){v=!1},end:function(n,e){f(n)&&s.$apply(function(){l.triggerHandler(o),g(s,{$event:e})})}},p)}}])}var i=e.module("ngTouch",[]);i.provider("$touch",o),o.$inject=["$provide","$compileProvider"],i.factory("$swipe",[function(){function n(n){var e=n.originalEvent||n,t=e.touches&&e.touches.length?e.touches:[e],o=e.changedTouches&&e.changedTouches[0]||t[0];return{x:o.clientX,y:o.clientY}}function t(n,t){var o=[];return e.forEach(n,function(n){var e=c[n][t];e&&o.push(e)}),o.join(" ")}var o=10,c={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}};return{bind:function(e,c,i){var u,r,a,s,l=!1;i=i||["mouse","touch"],e.on(t(i,"start"),function(e){a=n(e),l=!0,u=0,r=0,s=a,c.start&&c.start(a,e)});var h=t(i,"cancel");h&&e.on(h,function(n){l=!1,c.cancel&&c.cancel(n)}),e.on(t(i,"move"),function(e){if(l&&a){var t=n(e);if(u+=Math.abs(t.x-s.x),r+=Math.abs(t.y-s.y),s=t,!(o>u&&o>r))return r>u?(l=!1,void(c.cancel&&c.cancel(e))):(e.preventDefault(),void(c.move&&c.move(t,e)))}}),e.on(t(i,"end"),function(e){l&&(l=!1,c.end&&c.end(n(e),e))})}}}]);var u=["$parse","$timeout","$rootElement",function(n,o,c){function i(n,e,t,o){return Math.abs(n-t)<p&&Math.abs(e-o)<p}function u(n,e,t){for(var o=0;o<n.length;o+=2)if(i(n[o],n[o+1],e,t))return n.splice(o,o+2),!0;return!1}function r(n){if(!(Date.now()-l>g)){var e=n.touches&&n.touches.length?n.touches:[n],o=e[0].clientX,c=e[0].clientY;1>o&&1>c||f&&f[0]===o&&f[1]===c||(f&&(f=null),"label"===t(n.target)&&(f=[o,c]),u(h,o,c)||(n.stopPropagation(),n.preventDefault(),n.target&&n.target.blur&&n.target.blur()))}}function a(n){var e=n.touches&&n.touches.length?n.touches:[n],t=e[0].clientX,c=e[0].clientY;h.push(t,c),o(function(){for(var n=0;n<h.length;n+=2)if(h[n]==t&&h[n+1]==c)return void h.splice(n,n+2)},g,!1)}function s(n,e){h||(c[0].addEventListener("click",r,!0),c[0].addEventListener("touchstart",a,!0),h=[]),l=Date.now(),u(h,n,e)}var l,h,f,d=750,v=12,g=2500,p=25,m="ng-click-active";return function(t,o,c){function i(){f=!1,o.removeClass(m)}var u,r,a,l,h=n(c.ngClick),f=!1;o.on("touchstart",function(n){f=!0,u=n.target?n.target:n.srcElement,3==u.nodeType&&(u=u.parentNode),o.addClass(m),r=Date.now();var e=n.originalEvent||n,t=e.touches&&e.touches.length?e.touches:[e],c=t[0];a=c.clientX,l=c.clientY}),o.on("touchcancel",function(n){i()}),o.on("touchend",function(n){var t=Date.now()-r,h=n.originalEvent||n,g=h.changedTouches&&h.changedTouches.length?h.changedTouches:h.touches&&h.touches.length?h.touches:[h],p=g[0],m=p.clientX,w=p.clientY,$=Math.sqrt(Math.pow(m-a,2)+Math.pow(w-l,2));f&&d>t&&v>$&&(s(m,w),u&&u.blur(),e.isDefined(c.disabled)&&c.disabled!==!1||o.triggerHandler("click",[n])),i()}),o.onclick=function(n){},o.on("click",function(n,e){t.$apply(function(){h(t,{$event:e||n})})}),o.on("mousedown",function(n){o.addClass(m)}),o.on("mousemove mouseup",function(n){o.removeClass(m)})}}];c("ngSwipeLeft",-1,"swipeleft"),c("ngSwipeRight",1,"swiperight")}(window,window.angular)});