define("3rdlibs/angular/i18n/angular-locale_iw",["dojo","dijit","dojox"],function(e,n,i){"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e+="";var n=e.indexOf(".");return-1==n?0:e.length-n-1}function i(e,i){var M=i;void 0===M&&(M=Math.min(n(e),3));var a=Math.pow(10,M),r=(e*a|0)%a;return{v:M,f:r}}var M={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["לפנה״צ","אחה״צ"],DAY:["יום ראשון","יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","יום שבת"],ERANAMES:["לפני הספירה","לספירה"],ERAS:["לפנה״ס","לספירה"],FIRSTDAYOFWEEK:6,MONTH:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],SHORTDAY:["יום א׳","יום ב׳","יום ג׳","יום ד׳","יום ה׳","יום ו׳","שבת"],SHORTMONTH:["ינו׳","פבר׳","מרץ","אפר׳","מאי","יוני","יולי","אוג׳","ספט׳","אוק׳","נוב׳","דצמ׳"],STANDALONEMONTH:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],WEEKENDRANGE:[4,5],fullDate:"EEEE, d בMMMM y",longDate:"d בMMMM y",medium:"d בMMM y H:mm:ss",mediumDate:"d בMMM y",mediumTime:"H:mm:ss","short":"d.M.y H:mm",shortDate:"d.M.y",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"₪",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"iw",localeID:"iw",pluralCat:function(e,n){var a=0|e,r=i(e,n);return 1==a&&0==r.v?M.ONE:2==a&&0==r.v?M.TWO:0==r.v&&(0>e||e>10)&&e%10==0?M.MANY:M.OTHER}})}])});