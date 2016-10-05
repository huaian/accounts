define("3rdlibs/angular/i18n/angular-locale_haw-us",["dojo","dijit","dojox"],function(a,e,l){"use strict";angular.module("ngLocale",[],["$provide",function(a){var e={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Lāpule","Poʻakahi","Poʻalua","Poʻakolu","Poʻahā","Poʻalima","Poʻaono"],ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:6,MONTH:["Ianuali","Pepeluali","Malaki","ʻApelila","Mei","Iune","Iulai","ʻAukake","Kepakemapa","ʻOkakopa","Nowemapa","Kekemapa"],SHORTDAY:["LP","P1","P2","P3","P4","P5","P6"],SHORTMONTH:["Ian.","Pep.","Mal.","ʻAp.","Mei","Iun.","Iul.","ʻAu.","Kep.","ʻOk.","Now.","Kek."],STANDALONEMONTH:["Ianuali","Pepeluali","Malaki","ʻApelila","Mei","Iune","Iulai","ʻAukake","Kepakemapa","ʻOkakopa","Nowemapa","Kekemapa"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"d/M/yy h:mm a",shortDate:"d/M/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"haw-us",localeID:"haw_US",pluralCat:function(a,l){return 1==a?e.ONE:e.OTHER}})}])});