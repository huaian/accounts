define("3rdlibs/angular/i18n/angular-locale_nus",["dojo","dijit","dojox"],function(a,i,n){"use strict";angular.module("ngLocale",[],["$provide",function(a){function i(a){a+="";var i=a.indexOf(".");return-1==i?0:a.length-i-1}function n(a,n){var e=n;void 0===e&&(e=Math.min(i(a),3));var t=Math.pow(10,e),o=(a*t|0)%t;return{v:e,f:o}}var e={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["RW","TŊ"],DAY:["Cäŋ kuɔth","Jiec la̱t","Rɛw lätni","Diɔ̱k lätni","Ŋuaan lätni","Dhieec lätni","Bäkɛl lätni"],ERANAMES:["A ka̱n Yecu ni dap","Ɛ ca Yecu dap"],ERAS:["AY","ƐY"],FIRSTDAYOFWEEK:0,MONTH:["Tiop thar pɛt","Pɛt","Duɔ̱ɔ̱ŋ","Guak","Duät","Kornyoot","Pay yie̱tni","Tho̱o̱r","Tɛɛr","Laath","Kur","Tio̱p in di̱i̱t"],SHORTDAY:["Cäŋ","Jiec","Rɛw","Diɔ̱k","Ŋuaan","Dhieec","Bäkɛl"],SHORTMONTH:["Tiop","Pɛt","Duɔ̱ɔ̱","Guak","Duä","Kor","Pay","Thoo","Tɛɛ","Laa","Kur","Tid"],STANDALONEMONTH:["Tiop thar pɛt","Pɛt","Duɔ̱ɔ̱ŋ","Guak","Duät","Kornyoot","Pay yie̱tni","Tho̱o̱r","Tɛɛr","Laath","Kur","Tio̱p in di̱i̱t"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"d/MM/y h:mm a",shortDate:"d/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"SDG",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"nus",localeID:"nus",pluralCat:function(a,i){var t=0|a,o=n(a,i);return 1==t&&0==o.v?e.ONE:e.OTHER}})}])});