define("3rdlibs/angular/i18n/angular-locale_dsb-de",["dojo","dijit","dojox"],function(e,a,r){"use strict";angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return-1==a?0:e.length-a-1}function r(e,r){var n=r;void 0===n&&(n=Math.min(a(e),3));var o=Math.pow(10,n),t=(e*o|0)%o;return{v:n,f:t}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["dopołdnja","wótpołdnja"],DAY:["njeźela","pónjeźele","wałtora","srjoda","stwórtk","pětk","sobota"],ERANAMES:["pśed Kristusowym naroźenim","pó Kristusowem naroźenju"],ERAS:["pś.Chr.n.","pó Chr.n."],FIRSTDAYOFWEEK:0,MONTH:["januara","februara","měrca","apryla","maja","junija","julija","awgusta","septembra","oktobra","nowembra","decembra"],SHORTDAY:["nje","pón","wał","srj","stw","pět","sob"],SHORTMONTH:["jan.","feb.","měr.","apr.","maj.","jun.","jul.","awg.","sep.","okt.","now.","dec."],STANDALONEMONTH:["januar","februar","měrc","apryl","maj","junij","julij","awgust","september","oktober","nowember","december"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d. MMMM y",longDate:"d. MMMM y",medium:"d.M.y H:mm:ss",mediumDate:"d.M.y",mediumTime:"H:mm:ss","short":"d.M.yy H:mm",shortDate:"d.M.yy",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"dsb-de",localeID:"dsb_DE",pluralCat:function(e,a){var o=0|e,t=r(e,a);return 1==o&&0==t.v?n.ONE:n.OTHER}})}])});