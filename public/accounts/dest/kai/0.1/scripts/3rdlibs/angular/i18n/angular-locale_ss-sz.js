define("3rdlibs/angular/i18n/angular-locale_ss-sz",["dojo","dijit","dojox"],function(i,e,a){"use strict";angular.module("ngLocale",[],["$provide",function(i){function e(i){i+="";var e=i.indexOf(".");return-1==e?0:i.length-e-1}function a(i,a){var n=a;void 0===n&&(n=Math.min(e(i),3));var o=Math.pow(10,n),M=(i*o|0)%o;return{v:n,f:M}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};i.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Lisontfo","uMsombuluko","Lesibili","Lesitsatfu","Lesine","Lesihlanu","uMgcibelo"],ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:6,MONTH:["Bhimbidvwane","iNdlovana","iNdlovu-lenkhulu","Mabasa","iNkhwekhweti","iNhlaba","Kholwane","iNgci","iNyoni","iMphala","Lweti","iNgongoni"],SHORTDAY:["Son","Mso","Bil","Tsa","Ne","Hla","Mgc"],SHORTMONTH:["Bhi","Van","Vol","Mab","Nkh","Nhl","Kho","Ngc","Nyo","Mph","Lwe","Ngo"],WEEKENDRANGE:[5,6],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"SZL",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"ss-sz",pluralCat:function(i,e){var o=0|i,M=a(i,e);return 1==o&&0==M.v?n.ONE:n.OTHER}})}])});