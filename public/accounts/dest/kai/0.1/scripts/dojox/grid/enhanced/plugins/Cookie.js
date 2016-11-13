define("dojox/grid/enhanced/plugins/Cookie",["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/sniff","dojo/_base/html","dojo/_base/json","dojo/_base/window","dojo/_base/unload","dojo/cookie","../_Plugin","../../_RowSelector","../../EnhancedGrid","../../cells/_base"],function(e,o,n,i,t,r,a,s,d,c,l,u){var h=n.getObject("dojox.grid.cells"),f=function(e){return window.location+"/"+e.id},k=function(e){var i=[];return n.isArray(e)||(e=[e]),o.forEach(e,function(e){n.isArray(e)&&(e={cells:e});var t=e.rows||e.cells;n.isArray(t)&&(n.isArray(t[0])||(t=[t]),o.forEach(t,function(e){n.isArray(e)&&o.forEach(e,function(e){i.push(e)})}))}),i},_=function(e,o){if(n.isArray(e)){var i=o._setStructureAttr;o._setStructureAttr=function(n){if(!o._colWidthLoaded){o._colWidthLoaded=!0;for(var t=k(n),r=t.length-1;r>=0;--r)"number"==typeof e[r]?t[r].width=e[r]+"px":"hidden"==e[r]&&(t[r].hidden=!0)}i.call(o,n),o._setStructureAttr=i}}},g=function(e){return o.map(o.filter(e.layout.cells,function(e){return!(e.isRowSelector||e instanceof h.RowIndex)}),function(e){return e.hidden?"hidden":t[i("webkit")?"marginBox":"contentBox"](e.getHeaderNode()).w})},m=function(e,i){if(e&&o.every(e,function(e){return n.isArray(e)&&o.every(e,function(e){return n.isArray(e)&&e.length>0})})){var t=i._setStructureAttr,a=function(e){return"name"in e||"field"in e||"get"in e},s=function(e){return null!==e&&n.isObject(e)&&("cells"in e||"rows"in e||"type"in e&&!a(e))};i._setStructureAttr=function(a){if(!i._colOrderLoaded){i._colOrderLoaded=!0,i._setStructureAttr=t,a=n.clone(a),n.isArray(a)&&!o.some(a,s)?a=[{cells:a}]:s(a)&&(a=[a]);var d=k(a);o.forEach(n.isArray(a)?a:[a],function(i,t){var a=i;n.isArray(i)?i.splice(0,i.length):(delete i.rows,a=i.cells=[]),o.forEach(e[t],function(e){o.forEach(e,function(e){var o,n;for(o=0;o<d.length&&(n=d[o],r.toJson({name:n.name,field:n.field})!=r.toJson(e));++o);o<d.length&&a.push(n)})})})}t.call(i,a)}}},v=function(e){var n=o.map(o.filter(e.views.views,function(e){return!(e instanceof l)}),function(e){return o.map(e.structure.cells,function(e){return o.map(o.filter(e,function(e){return!(e.isRowSelector||e instanceof h.RowIndex)}),function(e){return{name:e.name,field:e.field}})})});return n},b=function(e,o){try{e&&n.isObject(e)&&o.setSortIndex(e.idx,e.asc)}catch(i){}},p=function(e){return{idx:e.getSortIndex(),asc:e.getSortAsc()}};i("ie")||s.addOnWindowUnload(function(){o.forEach(dijit.findWidgets(a.body()),function(e){e instanceof u&&!e._destroyed&&e.destroyRecursive()})});var y=e("dojox.grid.enhanced.plugins.Cookie",c,{name:"cookie",_cookieEnabled:!0,constructor:function(e,i){this.grid=e,i=i&&n.isObject(i)?i:{},this.cookieProps=i.cookieProps,this._cookieHandlers=[],this._mixinGrid(),this.addCookieHandler({name:"columnWidth",onLoad:_,onSave:g}),this.addCookieHandler({name:"columnOrder",onLoad:m,onSave:v}),this.addCookieHandler({name:"sortOrder",onLoad:b,onSave:p}),o.forEach(this._cookieHandlers,function(e){i[e.name]===!1&&(e.enable=!1)},this)},destroy:function(){this._saveCookie(),this._cookieHandlers=null,this.inherited(arguments)},_mixinGrid:function(){var e=this.grid;e.addCookieHandler=n.hitch(this,"addCookieHandler"),e.removeCookie=n.hitch(this,"removeCookie"),e.setCookieEnabled=n.hitch(this,"setCookieEnabled"),e.getCookieEnabled=n.hitch(this,"getCookieEnabled")},_saveCookie:function(){if(this.getCookieEnabled()){for(var e={},o=this._cookieHandlers,i=this.cookieProps,t=f(this.grid),a=o.length-1;a>=0;--a)o[a].enabled&&(e[o[a].name]=o[a].onSave(this.grid));i=n.isObject(this.cookieProps)?this.cookieProps:{},d(t,r.toJson(e),i)}else this.removeCookie()},onPreInit:function(){var e=this.grid,o=this._cookieHandlers,n=f(e),i=d(n);if(i){i=r.fromJson(i);for(var t=0;t<o.length;++t)o[t].name in i&&o[t].enabled&&o[t].onLoad(i[o[t].name],e)}this._cookie=i||{},this._cookieStartedup=!0},addCookieHandler:function(e){if(e.name){var o=function(){};e.onLoad=e.onLoad||o,e.onSave=e.onSave||o,"enabled"in e||(e.enabled=!0);for(var n=this._cookieHandlers.length-1;n>=0;--n)this._cookieHandlers[n].name==e.name&&this._cookieHandlers.splice(n,1);this._cookieHandlers.push(e),this._cookieStartedup&&e.name in this._cookie&&e.onLoad(this._cookie[e.name],this.grid)}},removeCookie:function(){var e=f(this.grid);d(e,null,{expires:-1})},setCookieEnabled:function(e,o){if("string"==typeof e)for(var n=this._cookieHandlers,i=n.length-1;i>=0;--i)n[i].name===e&&(n[i].enabled=!!o);else this._cookieEnabled=!!e,this._cookieEnabled||this.removeCookie()},getCookieEnabled:function(e){if(n.isString(e)){for(var o=this._cookieHandlers,i=o.length-1;i>=0;--i)if(o[i].name==e)return o[i].enabled;return!1}return this._cookieEnabled}});return u.registerPlugin(y,{preInit:!0}),y});