define("3rdlibs/angular/i18n/angular-locale_seh",["dojo","dijit","dojox"],function(e,o,i){"use strict";angular.module("ngLocale",[],["$provide",function(e){function o(e){e+="";var o=e.indexOf(".");return-1==o?0:e.length-o-1}function i(e,i){var r=i;void 0===r&&(r=Math.min(o(e),3));var n=Math.pow(10,r),a=(e*n|0)%n;return{v:r,f:a}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Dimingu","Chiposi","Chipiri","Chitatu","Chinai","Chishanu","Sabudu"],ERANAMES:["Antes de Cristo","Anno Domini"],ERAS:["AC","AD"],FIRSTDAYOFWEEK:0,MONTH:["Janeiro","Fevreiro","Marco","Abril","Maio","Junho","Julho","Augusto","Setembro","Otubro","Novembro","Decembro"],SHORTDAY:["Dim","Pos","Pir","Tat","Nai","Sha","Sab"],SHORTMONTH:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Aug","Set","Otu","Nov","Dec"],STANDALONEMONTH:["Janeiro","Fevreiro","Marco","Abril","Maio","Junho","Julho","Augusto","Setembro","Otubro","Novembro","Decembro"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d 'de' MMMM 'de' y",longDate:"d 'de' MMMM 'de' y",medium:"d 'de' MMM 'de' y HH:mm:ss",mediumDate:"d 'de' MMM 'de' y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"MTn",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"¤",posPre:"",posSuf:"¤"}]},id:"seh",localeID:"seh",pluralCat:function(e,o){var n=0|e,a=i(e,o);return 1==n&&0==a.v?r.ONE:r.OTHER}})}])});