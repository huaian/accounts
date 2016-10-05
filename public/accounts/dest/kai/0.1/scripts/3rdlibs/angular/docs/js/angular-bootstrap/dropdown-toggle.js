/* This code is taken from the AngularUI - Bootstrap Project (https://github.com/angular-ui/bootstrap)
 *
 * The MIT License
 * 
 * Copyright (c) 2012-2014 the AngularUI Team, https://github.com/organizations/angular-ui/teams/291112
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

define("3rdlibs/angular/docs/js/angular-bootstrap/dropdown-toggle",["dojo","dijit","dojox"],function(n,o,e){angular.module("ui.bootstrap.dropdown",[]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document",function(n){var o=null;this.open=function(t){o||(n.on("click",e),n.on("keydown",i)),o&&o!==t&&(o.isOpen=!1),o=t},this.close=function(t){o===t&&(o=null,n.off("click",e),n.off("keydown",i))};var e=function(n){n&&3===n.which||o.$apply(function(){o.isOpen=!1})},i=function(n){27===n.which&&e()}}]).controller("DropdownController",["$scope","$attrs","dropdownConfig","dropdownService","$animate",function(n,o,e,i,t){var r=this,s=e.openClass;this.init=function(e){r.$element=e,n.isOpen=angular.isDefined(o.isOpen)?n.$parent.$eval(o.isOpen):!1},this.toggle=function(o){return n.isOpen=arguments.length?!!o:!n.isOpen},this.isOpen=function(){return n.isOpen},n.$watch("isOpen",function(o){t[o?"addClass":"removeClass"](r.$element,s),o?i.open(n):i.close(n),n.onToggle({open:!!o})}),n.$on("$locationChangeSuccess",function(){n.isOpen=!1})}]).directive("dropdown",function(){return{restrict:"CA",controller:"DropdownController",scope:{isOpen:"=?",onToggle:"&"},link:function(n,o,e,i){i.init(o)}}}).directive("dropdownToggle",function(){return{restrict:"CA",require:"?^dropdown",link:function(n,o,e,i){i&&(o.on("click",function(e){e.preventDefault(),e.stopPropagation(),o.hasClass("disabled")||o.prop("disabled")||n.$apply(function(){i.toggle()})}),o.attr({"aria-haspopup":!0,"aria-expanded":!1}),n.$watch(i.isOpen,function(n){o.attr("aria-expanded",!!n)}))}}})});