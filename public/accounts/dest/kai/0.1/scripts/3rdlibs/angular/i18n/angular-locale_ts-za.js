define("3rdlibs/angular/i18n/angular-locale_ts-za",["dojo","dijit","dojox"],function(a,n,u){"use strict";angular.module("ngLocale",[],["$provide",function(a){function n(a){a+="";var n=a.indexOf(".");return-1==n?0:a.length-n-1}function u(a,u){var e=u;void 0===e&&(e=Math.min(n(a),3));var i=Math.pow(10,e),M=(a*i|0)%i;return{v:e,f:M}}var e={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Sonto","Musumbhunuku","Ravumbirhi","Ravunharhu","Ravumune","Ravuntlhanu","Mugqivela"],ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:6,MONTH:["Sunguti","Nyenyenyani","Nyenyankulu","Dzivamisoko","Mudyaxihi","Khotavuxika","Mawuwani","Mhawuri","Ndzhati","Nhlangula","Hukuri","N’wendzamhala"],SHORTDAY:["Son","Mus","Bir","Har","Ne","Tlh","Mug"],SHORTMONTH:["Sun","Yan","Kul","Dzi","Mud","Kho","Maw","Mha","Ndz","Nhl","Huk","N’w"],WEEKENDRANGE:[5,6],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"R",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"ts-za",pluralCat:function(a,n){var i=0|a,M=u(a,n);return 1==i&&0==M.v?e.ONE:e.OTHER}})}])});