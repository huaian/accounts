define("common/c.ajax",["data/store/c.common.store"],function(t){"use strict";function e(t,e,n,a,r){var o=u(t,e,n,a);return o.type="GET",o.timeout=r,i(o)}function n(t,e,n,a,r){var o=e.contentType;e=JSON.stringify(e);var s=u(t,e,n,a);return s.type="POST",s.dataType="json",s.timeout=r,s.contentType=f(o)||"application/json",i(s)}function a(t,e,n,a,r){var o=u(t,e,n,a);return o.type="GET",o.dataType="jsonp",o.crossDomain=!0,o.timeout=r,i(o)}function r(t,e,n,a,r,o){var s=n.contentType;"get"!==e.toLowerCase()&&(n=JSON.stringify(n));var c=u(t,n,a,r);return c.type=e,c.dataType="json",c.crossDomain=!0,c.data=n,c.contentType=f(s)||"application/json",c.timeout=o,i(c)}function o(t,e,n,a){var r=null,o="";r="string"==typeof e?$("#"+e):$(e),r&&r.length>0&&(o=r.serialize());var s=u(t,o,n,a);return i(s)}function s(t){Kai._interfaceStatesStore.get(t.url).then(function(e){e.costTime=t.statusChangeTime-e.requestTime,e.costTime>=2e3?(_.extend(e,t),Kai._interfaceStatesStore.put(e)):Kai._interfaceStatesStore.remove(t.url)},function(){})}function i(t){var e=0,n={url:t.url,type:t.type,dataType:t.dataType,data:t.data,contentType:t.contentType,timeout:t.timeout||Kai.timeout||5e4,beforeSend:function(n){n.onprogress=function(t){e=t.loaded?t.loaded:t.position};var a;try{a=JSON.parse(t.data)}catch(r){a=t.data}if(_.isObject(a)){var o=p.get()||{},s="";s=a.requestHead?a.requestHead["X-Sso-Token"]||"":o.auth||"",n.setRequestHeader("X-Sso-Token",s)}},success:function(e,n,a){var r=new Date;s({url:t.url,status:"success",statusChangeTime:r,statusChangeTimeString:r.toTimeString()}),t.callback(e)},error:function(e){t.error&&t.error(e);var n=new Date;s({url:t.url,status:"error",statusChangeTime:n,statusText:e&&e.statusText})}};-1===t.url.indexOf(window.location.host)&&(n.crossDomain=!!t.crossDomain);var a=new Date;return Kai._interfaceStatesStore.put({id:t.url,loadedLength:e,status:"加载中",requestTime:a}),$.ajax(n)}function u(t,e,n,a){return{url:t,data:e,callback:n,error:a}}var c={json:"application/json",jsonp:"application/json"},p=t.UserStore.getInstance(),f=function(t){return t&&(t=c[t]?c[t]:t),t};return{get:e,post:n,jsonp:a,cros:r,form:o}});