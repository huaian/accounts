define("3rdlibs/angular/i18n/angular-locale_eo-001",["dojo","dijit","dojox"],function(o,e,a){"use strict";angular.module("ngLocale",[],["$provide",function(o){function e(o){o+="";var e=o.indexOf(".");return-1==e?0:o.length-e-1}function a(o,a){var r=a;void 0===r&&(r=Math.min(e(o),3));var n=Math.pow(10,r),m=(o*n|0)%n;return{v:r,f:m}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};o.value("$locale",{DATETIME_FORMATS:{AMPMS:["atm","ptm"],DAY:["dimanĉo","lundo","mardo","merkredo","ĵaŭdo","vendredo","sabato"],ERANAMES:["aK","pK"],ERAS:["aK","pK"],FIRSTDAYOFWEEK:0,MONTH:["januaro","februaro","marto","aprilo","majo","junio","julio","aŭgusto","septembro","oktobro","novembro","decembro"],SHORTDAY:["di","lu","ma","me","ĵa","ve","sa"],SHORTMONTH:["jan","feb","mar","apr","maj","jun","jul","aŭg","sep","okt","nov","dec"],STANDALONEMONTH:["januaro","februaro","marto","aprilo","majo","junio","julio","aŭgusto","septembro","oktobro","novembro","decembro"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d-'a' 'de' MMMM y",longDate:"y-MMMM-dd",medium:"y-MMM-dd HH:mm:ss",mediumDate:"y-MMM-dd",mediumTime:"HH:mm:ss","short":"yy-MM-dd HH:mm",shortDate:"yy-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"eo-001",localeID:"eo_001",pluralCat:function(o,e){var n=0|o,m=a(o,e);return 1==n&&0==m.v?r.ONE:r.OTHER}})}])});