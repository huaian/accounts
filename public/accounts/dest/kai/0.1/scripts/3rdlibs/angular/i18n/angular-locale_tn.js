define("3rdlibs/angular/i18n/angular-locale_tn",["dojo","dijit","dojox"],function(e,o,a){"use strict";angular.module("ngLocale",[],["$provide",function(e){function o(e){e+="";var o=e.indexOf(".");return-1==o?0:e.length-o-1}function a(e,a){var n=a;void 0===n&&(n=Math.min(o(e),3));var M=Math.pow(10,n),t=(e*M|0)%M;return{v:n,f:t}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Tshipi","Mosopulogo","Labobedi","Laboraro","Labone","Labotlhano","Matlhatso"],ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:6,MONTH:["Ferikgong","Tlhakole","Mopitlo","Moranang","Motsheganang","Seetebosigo","Phukwi","Phatwe","Lwetse","Diphalane","Ngwanatsele","Sedimonthole"],SHORTDAY:["Tsh","Mos","Bed","Rar","Ne","Tla","Mat"],SHORTMONTH:["Fer","Tlh","Mop","Mor","Mot","See","Phu","Pha","Lwe","Dip","Ngw","Sed"],WEEKENDRANGE:[5,6],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"R",DECIMAL_SEP:".",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"tn",pluralCat:function(e,o){var M=0|e,t=a(e,o);return 1==M&&0==t.v?n.ONE:n.OTHER}})}])});