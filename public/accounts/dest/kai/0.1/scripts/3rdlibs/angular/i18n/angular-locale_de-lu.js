define("3rdlibs/angular/i18n/angular-locale_de-lu",["dojo","dijit","dojox"],function(e,r,a){"use strict";angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");return-1==r?0:e.length-r-1}function a(e,a){var n=a;void 0===n&&(n=Math.min(r(e),3));var i=Math.pow(10,n),o=(e*i|0)%i;return{v:n,f:o}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["vorm.","nachm."],DAY:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],ERANAMES:["v. Chr.","n. Chr."],ERAS:["v. Chr.","n. Chr."],FIRSTDAYOFWEEK:0,MONTH:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],SHORTDAY:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],SHORTMONTH:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],STANDALONEMONTH:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d. MMMM y",longDate:"d. MMMM y",medium:"dd.MM.y HH:mm:ss",mediumDate:"dd.MM.y",mediumTime:"HH:mm:ss","short":"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"de-lu",localeID:"de_LU",pluralCat:function(e,r){var i=0|e,o=a(e,r);return 1==i&&0==o.v?n.ONE:n.OTHER}})}])});