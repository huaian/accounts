define("3rdlibs/angular/i18n/angular-locale_mua-cm",["dojo","dijit","dojox"],function(i,a,e){"use strict";angular.module("ngLocale",[],["$provide",function(i){function a(i){i+="";var a=i.indexOf(".");return-1==a?0:i.length-a-1}function e(i,e){var o=e;void 0===o&&(o=Math.min(a(i),3));var M=Math.pow(10,o),m=(i*M|0)%M;return{v:o,f:m}}var o={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};i.value("$locale",{DATETIME_FORMATS:{AMPMS:["comme","lilli"],DAY:["Com’yakke","Comlaaɗii","Comzyiiɗii","Comkolle","Comkaldǝɓlii","Comgaisuu","Comzyeɓsuu"],ERANAMES:["KǝPel Kristu","Pel Kristu"],ERAS:["KK","PK"],FIRSTDAYOFWEEK:0,MONTH:["Fĩi Loo","Cokcwaklaŋne","Cokcwaklii","Fĩi Marfoo","Madǝǝuutǝbijaŋ","Mamǝŋgwãafahbii","Mamǝŋgwãalii","Madǝmbii","Fĩi Dǝɓlii","Fĩi Mundaŋ","Fĩi Gwahlle","Fĩi Yuru"],SHORTDAY:["Cya","Cla","Czi","Cko","Cka","Cga","Cze"],SHORTMONTH:["FLO","CLA","CKI","FMF","MAD","MBI","MLI","MAM","FDE","FMU","FGW","FYU"],STANDALONEMONTH:["Fĩi Loo","Cokcwaklaŋne","Cokcwaklii","Fĩi Marfoo","Madǝǝuutǝbijaŋ","Mamǝŋgwãafahbii","Mamǝŋgwãalii","Madǝmbii","Fĩi Dǝɓlii","Fĩi Mundaŋ","Fĩi Gwahlle","Fĩi Yuru"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"mua-cm",localeID:"mua_CM",pluralCat:function(i,a){var M=0|i,m=e(i,a);return 1==M&&0==m.v?o.ONE:o.OTHER}})}])});