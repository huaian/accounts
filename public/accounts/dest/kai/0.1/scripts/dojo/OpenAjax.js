/*******************************************************************************
 * OpenAjax.js
 *
 * Reference implementation of the OpenAjax Hub, as specified by OpenAjax Alliance.
 * Specification is under development at:
 *
 *   http://www.openajax.org/member/wiki/OpenAjax_Hub_Specification
 *
 * Copyright 2006-2007 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless
 * required by applicable law or agreed to in writing, software distributed
 * under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 ******************************************************************************/

window.OpenAjax||(OpenAjax=new function(){var e={},i="org.openajax.hub.",s={};this.hub=s,s.implementer="http://openajax.org",s.implVersion="0.6",s.specVersion="0.6",s.implExtraData={},s.libraries=e,s.registerLibrary=function(s,n,t,r){e[s]={prefix:s,namespaceURI:n,version:t,extraData:r},this.publish(i+"registerLibrary",e[s])},s.unregisterLibrary=function(s){this.publish(i+"unregisterLibrary",e[s]),delete e[s]},s._subscriptions={c:{},s:[]},s._cleanup=[],s._subIndex=0,s._pubDepth=0,s.subscribe=function(e,i,s,n,t){s||(s=window);var r=e+"."+this._subIndex,p={scope:s,cb:i,fcb:t,data:n,sid:this._subIndex++,hdl:r},u=e.split(".");return this._subscribe(this._subscriptions,u,0,p),r},s.publish=function(e,i){var s=e.split(".");if(this._pubDepth++,this._publish(this._subscriptions,s,0,e,i),this._pubDepth--,this._cleanup.length>0&&0==this._pubDepth){for(var n=0;n<this._cleanup.length;n++)this.unsubscribe(this._cleanup[n].hdl);delete this._cleanup,this._cleanup=[]}},s.unsubscribe=function(e){var i=e.split("."),s=i.pop();this._unsubscribe(this._subscriptions,i,0,s)},s._subscribe=function(e,i,s,n){var t=i[s];s==i.length?e.s.push(n):("undefined"==typeof e.c&&(e.c={}),"undefined"==typeof e.c[t]&&(e.c[t]={c:{},s:[]}),this._subscribe(e.c[t],i,s+1,n))},s._publish=function(e,i,s,n,t){if("undefined"!=typeof e){var r;if(s==i.length?r=e:(this._publish(e.c[i[s]],i,s+1,n,t),this._publish(e.c["*"],i,s+1,n,t),r=e.c["**"]),"undefined"!=typeof r)for(var p=r.s,u=p.length,a=0;u>a;a++)if(p[a].cb){var b=p[a].scope,h=p[a].cb,c=p[a].fcb,l=p[a].data;"string"==typeof h&&(h=b[h]),"string"==typeof c&&(c=b[c]),(!c||c.call(b,n,t,l))&&h.call(b,n,t,l)}}},s._unsubscribe=function(e,i,s,n){if("undefined"!=typeof e){if(s<i.length){var t=e.c[i[s]];if(this._unsubscribe(t,i,s+1,n),0==t.s.length){for(var r in t.c)return;delete e.c[i[s]]}return}for(var p=e.s,u=p.length,a=0;u>a;a++)if(n==p[a].sid)return void(this._pubDepth>0?(p[a].cb=null,this._cleanup.push(p[a])):p.splice(a,1))}},s.reinit=function(){for(var e in OpenAjax.hub.libraries)delete OpenAjax.hub.libraries[e];OpenAjax.hub.registerLibrary("OpenAjax","http://openajax.org/hub","0.6",{}),delete OpenAjax._subscriptions,OpenAjax._subscriptions={c:{},s:[]},delete OpenAjax._cleanup,OpenAjax._cleanup=[],OpenAjax._subIndex=0,OpenAjax._pubDepth=0}},OpenAjax.hub.registerLibrary("OpenAjax","http://openajax.org/hub","0.6",{}));