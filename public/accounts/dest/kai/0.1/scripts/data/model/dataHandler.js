define("data/model/dataHandler",["cutil/c.util.common","dojo/Deferred"],function(e,n){"use strict";var t={};return t.createDataFetcher=function(t){var r={},c=t;return _.each(c,function(t,o){if(c[o])if(c[o].get)r[o]=c[o];else{if(o.indexOf("_")>=0)return!1;r[o]=function(t,r){var a=c[o].getInstance();a.clearResult(),a.param=null,a.setParam(t,!0);var u=new n,i=function(n){e.doResponse(n,function(e){r?u.resolve(n):u.resolve(n.body.obj||n.body)},function(e){u.reject({code:e.code,msg:e.msg})})},f=function(e){u.reject({msg:"网络异常，请重试！"})};return a.execute(i,f,!0),u}}}),r},t});