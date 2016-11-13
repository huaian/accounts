/*!
 * modernizr v3.3.1
 * Build https://modernizr.com/download?-inputtypes-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */

/*!
{
  "name": "Form input types",
  "property": "inputtypes",
  "caniuse": "forms",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "polyfills": [
    "jquerytools",
    "webshims",
    "h5f",
    "webforms2",
    "nwxforms",
    "fdslider",
    "html5slider",
    "galleryhtml5forms",
    "jscolor",
    "html5formshim",
    "selectedoptionsjs",
    "formvalidationjs"
  ]
}
!*/

define("3rdlibs/modernizr-custom",["dojo","dijit","dojox"],function(e,t,n){!function(e,t,n){function s(e,t){return typeof e===t}function a(){var e,t,n,a,o,i,c;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],t=r[f],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=s(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],c=i.split("."),1===c.length?u[c[0]]=a:(!u[c[0]]||u[c[0]]instanceof Boolean||(u[c[0]]=new Boolean(u[c[0]])),u[c[0]][c[1]]=a),l.push((a?"":"no-")+c.join("-"))}}function o(e){var t=f.className,n=u._config.classPrefix||"";if(p&&(t=t.baseVal),u._config.enableJSClass){var s=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(s,"$1"+n+"js$2")}u._config.enableClasses&&(t+=" "+n+e.join(" "+n),p?f.className.baseVal=t:f.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):p?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}var l=[],r=[],c={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){r.push({name:e,fn:t,options:n})},addAsyncTest:function(e){r.push({name:null,fn:e})}},u=function(){};u.prototype=c,u=new u;var f=t.documentElement,p="svg"===f.nodeName.toLowerCase(),d=i("input"),m="search tel url email datetime date month week time datetime-local number range color".split(" "),h={};u.inputtypes=function(e){for(var s,a,o,i=e.length,l="1)",r=0;i>r;r++)d.setAttribute("type",s=e[r]),o="text"!==d.type&&"style"in d,o&&(d.value=l,d.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(s)&&d.style.WebkitAppearance!==n?(f.appendChild(d),a=t.defaultView,o=a.getComputedStyle&&"textfield"!==a.getComputedStyle(d,null).WebkitAppearance&&0!==d.offsetHeight,f.removeChild(d)):/^(search|tel)$/.test(s)||(o=/^(url|email)$/.test(s)?d.checkValidity&&d.checkValidity()===!1:d.value!=l)),h[e[r]]=!!o;return h}(m),a(),o(l),delete c.addTest,delete c.addAsyncTest;for(var g=0;g<u._q.length;g++)u._q[g]();e.Modernizr=u}(window,document)});