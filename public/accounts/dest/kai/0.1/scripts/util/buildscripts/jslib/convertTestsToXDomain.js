define("util/buildscripts/jslib/convertTestsToXDomain",["dojo","dijit","dojox"],function(i,l,e){var t=arguments[0],s=arguments[1];load("jslib/fileUtil.js"),load("jslib/buildUtil.js");for(var o=fileUtil.getFilteredFileList(t,/\.(html|htm)$/,!0),r=0;r<o.length;r++){var a=o[r],d=fileUtil.readFile(a);d=d.replace(/src\=\".*dojo.js"/,'src="'+s+'"'),fileUtil.saveUtf8File(a,d)}});