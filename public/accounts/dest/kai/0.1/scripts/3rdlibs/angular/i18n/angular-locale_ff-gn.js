define("3rdlibs/angular/i18n/angular-locale_ff-gn",["dojo","dijit","dojox"],function(a,e,o){"use strict";angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");return-1==e?0:a.length-e-1}function o(a,o){var i=o;void 0===i&&(i=Math.min(e(a),3));var n=Math.pow(10,i),r=(a*n|0)%n;return{v:i,f:r}}var i={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["subaka","kikiiɗe"],DAY:["dewo","aaɓnde","mawbaare","njeslaare","naasaande","mawnde","hoore-biir"],ERANAMES:["Hade Iisa","Caggal Iisa"],ERAS:["H-I","C-I"],FIRSTDAYOFWEEK:0,MONTH:["siilo","colte","mbooy","seeɗto","duujal","korse","morso","juko","siilto","yarkomaa","jolal","bowte"],SHORTDAY:["dew","aaɓ","maw","nje","naa","mwd","hbi"],SHORTMONTH:["sii","col","mbo","see","duu","kor","mor","juk","slt","yar","jol","bow"],STANDALONEMONTH:["siilo","colte","mbooy","seeɗto","duujal","korse","morso","juko","siilto","yarkomaa","jolal","bowte"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM, y HH:mm:ss",mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FG",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"ff-gn",localeID:"ff_GN",pluralCat:function(a,e){var n=0|a,r=o(a,e);return 1==n&&0==r.v?i.ONE:i.OTHER}})}])});