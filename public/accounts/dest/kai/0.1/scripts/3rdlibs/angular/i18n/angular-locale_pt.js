define("3rdlibs/angular/i18n/angular-locale_pt",["dojo","dijit","dojox"],function(e,o,a){"use strict";angular.module("ngLocale",[],["$provide",function(e){var o={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"],ERANAMES:["Antes de Cristo","Ano do Senhor"],ERAS:["a.C.","d.C."],FIRSTDAYOFWEEK:6,MONTH:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],SHORTDAY:["dom","seg","ter","qua","qui","sex","sáb"],SHORTMONTH:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],STANDALONEMONTH:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d 'de' MMMM 'de' y",longDate:"d 'de' MMMM 'de' y",medium:"d 'de' MMM 'de' y HH:mm:ss",mediumDate:"d 'de' MMM 'de' y",mediumTime:"HH:mm:ss","short":"dd/MM/yy HH:mm",shortDate:"dd/MM/yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"R$",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"pt",localeID:"pt",pluralCat:function(e,a){return e>=0&&2>=e&&2!=e?o.ONE:o.OTHER}})}])});