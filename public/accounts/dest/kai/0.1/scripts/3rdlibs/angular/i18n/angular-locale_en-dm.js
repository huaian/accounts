define("3rdlibs/angular/i18n/angular-locale_en-dm",["dojo","dijit","dojox"],function(e,a,r){"use strict";angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return-1==a?0:e.length-a-1}function r(e,r){var n=r;void 0===n&&(n=Math.min(a(e),3));var u=Math.pow(10,n),M=(e*u|0)%u;return{v:n,f:M}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:["January","February","March","April","May","June","July","August","September","October","November","December"],SHORTDAY:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],SHORTMONTH:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],STANDALONEMONTH:["January","February","March","April","May","June","July","August","September","October","November","December"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"en-dm",localeID:"en_DM",pluralCat:function(e,a){var u=0|e,M=r(e,a);return 1==u&&0==M.v?n.ONE:n.OTHER}})}])});