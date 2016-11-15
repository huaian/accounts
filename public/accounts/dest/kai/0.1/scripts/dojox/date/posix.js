define("dojox/date/posix",["dojo/_base/kernel","dojo/date","dojo/date/locale","dojo/string","dojo/cldr/supplemental"],function(e,r,t,a,s){var n=e.getObject("date.posix",!0,dojox);return n.strftime=function(e,s,o){for(var u=null,c=function(e,r){return a.pad(e,r||2,u||"0")},g=t._getGregorianBundle(o),l=function(a){switch(a){case"a":return t.getNames("days","abbr","format",o)[e.getDay()];case"A":return t.getNames("days","wide","format",o)[e.getDay()];case"b":case"h":return t.getNames("months","abbr","format",o)[e.getMonth()];case"B":return t.getNames("months","wide","format",o)[e.getMonth()];case"c":return t.format(e,{formatLength:"full",locale:o});case"C":return c(Math.floor(e.getFullYear()/100));case"d":return c(e.getDate());case"D":return l("m")+"/"+l("d")+"/"+l("y");case"e":return null==u&&(u=" "),c(e.getDate());case"f":return null==u&&(u=" "),c(e.getMonth()+1);case"g":break;case"G":break;case"F":return l("Y")+"-"+l("m")+"-"+l("d");case"H":return c(e.getHours());case"I":return c(e.getHours()%12||12);case"j":return c(t._getDayOfYear(e),3);case"k":return null==u&&(u=" "),c(e.getHours());case"l":return null==u&&(u=" "),c(e.getHours()%12||12);case"m":return c(e.getMonth()+1);case"M":return c(e.getMinutes());case"n":return"\n";case"p":return g["dayPeriods-format-wide-"+(e.getHours()<12?"am":"pm")];case"r":return l("I")+":"+l("M")+":"+l("S")+" "+l("p");case"R":return l("H")+":"+l("M");case"S":return c(e.getSeconds());case"t":return"	";case"T":return l("H")+":"+l("M")+":"+l("S");case"u":return String(e.getDay()||7);case"U":return c(t._getWeekOfYear(e));case"V":return c(n.getIsoWeekOfYear(e));case"W":return c(t._getWeekOfYear(e,1));case"w":return String(e.getDay());case"x":return t.format(e,{selector:"date",formatLength:"full",locale:o});case"X":return t.format(e,{selector:"time",formatLength:"full",locale:o});case"y":return c(e.getFullYear()%100);case"Y":return String(e.getFullYear());case"z":var s=e.getTimezoneOffset();return(s>0?"-":"+")+c(Math.floor(Math.abs(s)/60))+":"+c(Math.abs(s)%60);case"Z":return r.getTimezoneName(e);case"%":return"%"}},f="",i=0,d=0,m=null;-1!=(d=s.indexOf("%",i));){switch(f+=s.substring(i,d++),s.charAt(d++)){case"_":u=" ";break;case"-":u="";break;case"0":u="0";break;case"^":m="upper";break;case"*":m="lower";break;case"#":m="swap";break;default:u=null,d--}var k=l(s.charAt(d++));switch(m){case"upper":k=k.toUpperCase();break;case"lower":k=k.toLowerCase();break;case"swap":for(var h=k.toLowerCase(),b="",p="",w=0;w<k.length;w++)p=k.charAt(w),b+=p==h.charAt(w)?p.toUpperCase():p.toLowerCase();k=b}m=null,f+=k,i=d}return f+=s.substring(i)},n.getStartOfWeek=function(e,t){isNaN(t)&&(t=s.getFirstDayOfWeek?s.getFirstDayOfWeek():0);var a=t;a-=e.getDay()>=t?e.getDay():7-e.getDay();var n=new Date(e);return n.setHours(0,0,0,0),r.add(n,"day",a)},n.setIsoWeekOfYear=function(e,t){if(!t)return e;var a=n.getIsoWeekOfYear(e),s=t-a;if(0>t){var o=n.getIsoWeeksInYear(e);s=o+t+1-a}return r.add(e,"week",s)},n.getIsoWeekOfYear=function(e){var r=n.getStartOfWeek(e,1),t=new Date(e.getFullYear(),0,4);t=n.getStartOfWeek(t,1);var a=r.getTime()-t.getTime();return 0>a?n.getIsoWeeksInYear(r):Math.ceil(a/6048e5)+1},n.getIsoWeeksInYear=function(e){function r(e){return e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400)}var t=e.getFullYear();return r(t)%7==4||r(t-1)%7==3?53:52},n});