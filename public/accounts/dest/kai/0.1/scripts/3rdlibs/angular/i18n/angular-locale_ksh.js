define("3rdlibs/angular/i18n/angular-locale_ksh",["dojo","dijit","dojox"],function(e,a,r){"use strict";angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return-1==a?0:e.length-a-1}function r(e,r){var n=r;void 0===n&&(n=Math.min(a(e),3));var o=Math.pow(10,n),u=(e*o|0)%o;return{v:n,f:u}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["Uhr vörmiddaachs","Uhr nommendaachs"],DAY:["Sunndaach","Moondaach","Dinnsdaach","Metwoch","Dunnersdaach","Friidaach","Samsdaach"],ERANAMES:["vür Chrestus","noh Chrestus"],ERAS:["v. Chr.","n. Chr."],FIRSTDAYOFWEEK:0,MONTH:["Jannewa","Fäbrowa","Määz","Aprell","Mäi","Juuni","Juuli","Oujoß","Septämber","Oktoober","Novämber","Dezämber"],SHORTDAY:["Su.","Mo.","Di.","Me.","Du.","Fr.","Sa."],SHORTMONTH:["Jan","Fäb","Mäz","Apr","Mäi","Jun","Jul","Ouj","Säp","Okt","Nov","Dez"],STANDALONEMONTH:["Jannewa","Fäbrowa","Määz","Aprell","Mäi","Juuni","Juuli","Oujoß","Septämber","Oktoober","Novämber","Dezämber"],WEEKENDRANGE:[5,6],fullDate:"EEEE, 'dä' d. MMMM y",longDate:"d. MMMM y",medium:"d. MMM. y HH:mm:ss",mediumDate:"d. MMM. y",mediumTime:"HH:mm:ss","short":"d. M. y HH:mm",shortDate:"d. M. y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"ksh",localeID:"ksh",pluralCat:function(e,a){var o=0|e,u=r(e,a);return 1==o&&0==u.v?n.ONE:n.OTHER}})}])});