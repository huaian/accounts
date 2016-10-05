define("3rdlibs/angular/i18n/angular-locale_ps-af",["dojo","dijit","dojox"],function(e,n,a){"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e+="";var n=e.indexOf(".");return-1==n?0:e.length-n-1}function a(e,a){var r=a;void 0===r&&(r=Math.min(n(e),3));var M=Math.pow(10,r),i=(e*M|0)%M;return{v:r,f:i}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["غ.م.","غ.و."],DAY:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],ERANAMES:["ق.م.","م."],ERAS:["ق.م.","م."],FIRSTDAYOFWEEK:5,MONTH:["جنوري","فبروري","مارچ","اپریل","می","جون","جولای","اګست","سپتمبر","اکتوبر","نومبر","دسمبر"],SHORTDAY:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],SHORTMONTH:["جنوري","فبروري","مارچ","اپریل","می","جون","جولای","اګست","سپتمبر","اکتوبر","نومبر","دسمبر"],STANDALONEMONTH:["جنوري","فبروري","مارچ","اپریل","می","جون","جولای","اګست","سپتمبر","اکتوبر","نومبر","دسمبر"],WEEKENDRANGE:[3,4],fullDate:"EEEE د y د MMMM d",longDate:"د y د MMMM d",medium:"d MMM y H:mm:ss",mediumDate:"d MMM y",mediumTime:"H:mm:ss","short":"y/M/d H:mm",shortDate:"y/M/d",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"Af.",DECIMAL_SEP:"٫",GROUP_SEP:"٬",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"ps-af",localeID:"ps_AF",pluralCat:function(e,n){var M=0|e,i=a(e,n);return 1==M&&0==i.v?r.ONE:r.OTHER}})}])});