define("3rdlibs/angular/i18n/angular-locale_gl-es",["dojo","dijit","dojox"],function(e,o,r){"use strict";angular.module("ngLocale",[],["$provide",function(e){function o(e){e+="";var o=e.indexOf(".");return-1==o?0:e.length-o-1}function r(e,r){var a=r;void 0===a&&(a=Math.min(o(e),3));var n=Math.pow(10,a),m=(e*n|0)%n;return{v:a,f:m}}var a={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["a.m.","p.m."],DAY:["domingo","luns","martes","mércores","xoves","venres","sábado"],ERANAMES:["antes de Cristo","despois de Cristo"],ERAS:["a.C.","d.C."],FIRSTDAYOFWEEK:0,MONTH:["xaneiro","febreiro","marzo","abril","maio","xuño","xullo","agosto","setembro","outubro","novembro","decembro"],SHORTDAY:["dom","lun","mar","mér","xov","ven","sáb"],SHORTMONTH:["xan","feb","mar","abr","mai","xuñ","xul","ago","set","out","nov","dec"],STANDALONEMONTH:["Xaneiro","Febreiro","Marzo","Abril","Maio","Xuño","Xullo","Agosto","Setembro","Outubro","Novembro","Decembro"],WEEKENDRANGE:[5,6],fullDate:"EEEE dd MMMM y",longDate:"dd MMMM y",medium:"d MMM, y HH:mm:ss",mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"dd/MM/yy HH:mm",shortDate:"dd/MM/yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"gl-es",localeID:"gl_ES",pluralCat:function(e,o){var n=0|e,m=r(e,o);return 1==n&&0==m.v?a.ONE:a.OTHER}})}])});