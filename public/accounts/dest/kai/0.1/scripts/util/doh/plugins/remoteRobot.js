define("doh/plugins/remoteRobot",["doh/runner","dojo/_base/lang"],function(e,t){var r="",o="",n=window.location.search.substr(1);if(n.length)for(var i=n.split("&"),s=0;s<i.length;s++){var a=i[s].split("="),h=a[0],l=a[1].replace(/[<>"'\(\)]/g,"");if(0===l.indexOf("//")||0===l.indexOf("\\\\"))throw"Insupported URL";switch(h){case"remoteRobotURL":r=l;break;case"paths":o=l}}return e._registerUrl=function(n){return t.hitch(e,function(t,i,s,a,h){r&&(i+=(/\?/.test(i)?"&":"?")+"remoteRobotURL="+r),o&&(i+=(/\?/.test(i)?"&":"?")+"paths="+o),n.apply(e,[t,i,s,a,h])})}(e._registerUrl),r});