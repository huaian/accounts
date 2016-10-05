define("3rdlibs/angular/i18n/angular-locale_te-in",["dojo","dijit","dojox"],function(e,M,a){"use strict";angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["[AM]","[PM]"],DAY:["ఆదివారం","సోమవారం","మంగళవారం","బుధవారం","గురువారం","శుక్రవారం","శనివారం"],ERANAMES:["క్రీస్తు పూర్వం","క్రీస్తు శకం"],ERAS:["క్రీపూ","క్రీశ"],FIRSTDAYOFWEEK:6,MONTH:["జనవరి","ఫిబ్రవరి","మార్చి","ఏప్రిల్","మే","జూన్","జులై","ఆగస్టు","సెప్టెంబర్","అక్టోబర్","నవంబర్","డిసెంబర్"],SHORTDAY:["ఆది","సోమ","మంగళ","బుధ","గురు","శుక్ర","శని"],SHORTMONTH:["జన","ఫిబ్ర","మార్చి","ఏప్రి","మే","జూన్","జులై","ఆగ","సెప్టెం","అక్టో","నవం","డిసెం"],STANDALONEMONTH:["జనవరి","ఫిబ్రవరి","మార్చి","ఏప్రిల్","మే","జూన్","జులై","ఆగస్టు","సెప్టెంబర్","అక్టోబర్","నవంబర్","డిసెంబర్"],WEEKENDRANGE:[6,6],fullDate:"d, MMMM y, EEEE",longDate:"d MMMM, y",medium:"d MMM, y h:mm:ss a",mediumDate:"d MMM, y",mediumTime:"h:mm:ss a","short":"dd-MM-yy h:mm a",shortDate:"dd-MM-yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"₹",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:2,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:2,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"te-in",localeID:"te_IN",pluralCat:function(e,a){return 1==e?M.ONE:M.OTHER}})}])});