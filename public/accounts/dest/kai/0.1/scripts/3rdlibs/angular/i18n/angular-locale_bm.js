define("3rdlibs/angular/i18n/angular-locale_bm",["dojo","dijit","dojox"],function(a,u,i){"use strict";angular.module("ngLocale",[],["$provide",function(a){function u(a){a+="";var u=a.indexOf(".");return-1==u?0:a.length-u-1}function i(a,i){var r=i;void 0===r&&(r=Math.min(u(a),3));var e=Math.pow(10,r),n=(a*e|0)%e;return{v:r,f:n}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["kari","ntɛnɛ","tarata","araba","alamisa","juma","sibiri"],ERANAMES:["jezu krisiti ɲɛ","jezu krisiti minkɛ"],ERAS:["J.-C. ɲɛ","ni J.-C."],FIRSTDAYOFWEEK:0,MONTH:["zanwuye","feburuye","marisi","awirili","mɛ","zuwɛn","zuluye","uti","sɛtanburu","ɔkutɔburu","nowanburu","desanburu"],SHORTDAY:["kar","ntɛ","tar","ara","ala","jum","sib"],SHORTMONTH:["zan","feb","mar","awi","mɛ","zuw","zul","uti","sɛt","ɔku","now","des"],STANDALONEMONTH:["zanwuye","feburuye","marisi","awirili","mɛ","zuwɛn","zuluye","uti","sɛtanburu","ɔkutɔburu","nowanburu","desanburu"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM, y HH:mm:ss",mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"CFA",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"bm",localeID:"bm",pluralCat:function(a,u){var e=0|a,n=i(a,u);return 1==e&&0==n.v?r.ONE:r.OTHER}})}])});