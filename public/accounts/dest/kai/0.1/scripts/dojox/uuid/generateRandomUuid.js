define("dojox/uuid/generateRandomUuid",["./_base"],function(){return dojox.uuid.generateRandomUuid=function(){function n(){for(var n=Math.floor(Math.random()%1*Math.pow(2,32)),o=n.toString(r);o.length<8;)o="0"+o;return o}var r=16,o="-",t="4",u="8",e=n(),a=n();a=a.substring(0,4)+o+t+a.substring(5,8);var i=n();i=u+i.substring(1,4)+o+i.substring(4,8);var d=n(),s=e+o+a+o+i+d;return s=s.toLowerCase()},dojox.uuid.generateRandomUuid});