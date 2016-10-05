define("data/store/c.abstract.store",["common/c.class.inherit","cutil/c.util.date","cutil/c.util.object"],function(t,e,i){var s=i,r=new t.Class({__propertys__:function(){this.NULL={},this.key=this.NULL,this.lifeTime="30M",this.useServerTime=!1,this.defaultData=null,this.sProxy=this.NULL,this.userData=!1,this.rollbackEnabled=!1},initialize:function(t){for(var e in t)this[e]=t[e];this.assert()},assert:function(){if(this.key===this.NULL)throw"not override key property"},set:function(t,i,s){var r=this._getNowTime(),n=new e(this.getExpireTime());r.addSeconds(this._getLifeTime());var a=n.getTime();r.getTime()<a&&(r=n),this.rollbackEnabled&&!s&&(s=t),this.sProxy.set(this.key,t,r,i,null,s)},setAttr:function(t,e,i){if(!_.isObject(t)){i=i||this.getTag();var r=this.get(i)||{},n={};if(r){if(this.rollbackEnabled){n=this.get(i,!0);var a=s.get(r,t);s.set(n,t,a)}return s.set(r,t,e),this.set(r,i,n)}return!1}for(var o in t)t.hasOwnProperty(o)&&this.setAttr(o,t[o],e)},setLifeTime:function(t,i){this.lifeTime=t;var s,r=this.getTag(),n=this.get();s=i?this._getNowTime():this.sProxy.getSaveDate(this.key,!0)||this._getNowTime();var a=new e(s.valueOf()).format("Y/m/d H:i:s");s.addSeconds(this._getLifeTime()),this.sProxy.set(this.key,n,s,r,a)},get:function(e,i){var s=null,r=!0;"[object Array]"===Object.prototype.toString.call(this.defaultData)?s=this.defaultData.slice(0):this.defaultData&&(s=$.extend(!0,{},this.defaultData));var n=this.sProxy.get(this.key,e,i),a=typeof n;if({string:!0,number:!0,"boolean":!0}[a])return n;if(n)if("[object Array]"==Object.prototype.toString.call(n)){s=[];for(var o=0,h=n.length;h>o;o++)s[o]=n[o]}else n&&!s&&(s={}),t.extend(s,n);for(var l in s){r=!1;break}return r?null:s},getAttr:function(t,e){var i=this.get(e),r=null;return i&&(r=s.get(i,t)),r},getTag:function(){return this.sProxy.getTag(this.key)},remove:function(){this.sProxy.remove(this.key)},removeAttr:function(t){var e=this.get()||{};e[t]&&delete e[t],this.set(e)},getExpireTime:function(){var t=null;try{t=this.sProxy.getExpireTime(this.key)}catch(e){console}return t},setExpireTime:function(t){var i=this.get(),s=e.parse(t);this.sProxy.set(this.key,i,s)},_getNowTime:function(){return this.useServerTime?new e(e.getServerDate()):new e},_getLifeTime:function(){var t=0,e=this.lifeTime+"",i=e.charAt(e.length-1),s=+e.substring(0,e.length-1);return i="number"==typeof i?"M":i.toUpperCase(),t="D"==i?24*s*60*60:"H"==i?60*s*60:"M"==i?60*s:"S"==i?s:60*s},rollback:function(t){if(this.rollbackEnabled){var e=this.getTag(),i=this.sProxy.get(this.key,e),s=this.sProxy.get(this.key,e,!0);if(t&&t instanceof Array)for(var r in t){var n=t[r],a=s[n];"undefined"!=typeof a&&(i[n]=a)}else i=s,s={};this.set(i,e,s)}}});return r.getInstance=function(){return this.instance?this.instance:this.instance=new this},r});