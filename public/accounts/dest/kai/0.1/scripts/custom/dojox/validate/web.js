define("custom/dojox/validate/web",["dojox/validate/web","cutil/c.util.validate"],function(e,i){return e.isIpAddress=function(e,i){var t=new RegExp("^"+xregexp.ipAddress(i)+"$","i");return t.test(e)},e.isZip=function(e){return e},e});