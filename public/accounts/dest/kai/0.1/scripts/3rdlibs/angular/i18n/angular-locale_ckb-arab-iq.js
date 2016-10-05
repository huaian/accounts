define("3rdlibs/angular/i18n/angular-locale_ckb-arab-iq",["dojo","dijit","dojox"],function(e,a,n){"use strict";angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return-1==a?0:e.length-a-1}function n(e,n){var r=n;void 0===r&&(r=Math.min(a(e),3));var M=Math.pow(10,r),i=(e*M|0)%M;return{v:r,f:i}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["ب.ن","د.ن"],DAY:["یەکشەممە","دووشەممە","سێشەممە","چوارشەممە","پێنجشەممە","ھەینی","شەممە"],ERANAMES:["پێش زایین","زایینی"],ERAS:["پێش زاییین","ز"],FIRSTDAYOFWEEK:5,MONTH:["کانوونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمووز","ئاب","ئەیلوول","تشرینی یەکەم","تشرینی دووەم","کانونی یەکەم"],SHORTDAY:["یەکشەممە","دووشەممە","سێشەممە","چوارشەممە","پێنجشەممە","ھەینی","شەممە"],SHORTMONTH:["کانوونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمووز","ئاب","ئەیلوول","تشرینی یەکەم","تشرینی دووەم","کانونی یەکەم"],STANDALONEMONTH:["کانوونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمووز","ئاب","ئەیلوول","تشرینی یەکەم","تشرینی دووەم","کانونی یەکەم"],WEEKENDRANGE:[4,5],fullDate:"y MMMM d, EEEE",longDate:"dی MMMMی y",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"din",DECIMAL_SEP:"٫",GROUP_SEP:"٬",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"ckb-arab-iq",localeID:"ckb_Arab_IQ",pluralCat:function(e,a){var M=0|e,i=n(e,a);return 1==M&&0==i.v?r.ONE:r.OTHER}})}])});