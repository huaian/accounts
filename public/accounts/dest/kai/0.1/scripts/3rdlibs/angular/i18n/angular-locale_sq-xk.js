define("3rdlibs/angular/i18n/angular-locale_sq-xk",["dojo","dijit","dojox"],function(e,r,a){"use strict";angular.module("ngLocale",[],["$provide",function(e){var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["paradite","pasdite"],DAY:["e diel","e hënë","e martë","e mërkurë","e enjte","e premte","e shtunë"],ERANAMES:["para erës së re","erës së re"],ERAS:["p.e.r.","e.r."],FIRSTDAYOFWEEK:0,MONTH:["janar","shkurt","mars","prill","maj","qershor","korrik","gusht","shtator","tetor","nëntor","dhjetor"],SHORTDAY:["Die","Hën","Mar","Mër","Enj","Pre","Sht"],SHORTMONTH:["Jan","Shk","Mar","Pri","Maj","Qer","Kor","Gsh","Sht","Tet","Nën","Dhj"],STANDALONEMONTH:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d.M.yy HH:mm",shortDate:"d.M.yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"sq-xk",localeID:"sq_XK",pluralCat:function(e,a){return 1==e?r.ONE:r.OTHER}})}])});