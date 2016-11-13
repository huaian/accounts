define("dojox/calendar/RendererManager",["dojo/_base/declare","dojo/_base/array","dojo/_base/html","dojo/_base/lang","dojo/dom-class","dojo/dom-style","dojo/Stateful","dojo/Evented"],function(e,r,n,t,o,d,i,s,l){return e("dojox.calendar.RendererManager",[i,s],{owner:null,rendererPool:null,rendererList:null,itemToRenderer:null,constructor:function(e){e=e||{},this.rendererPool=[],this.rendererList=[],this.itemToRenderer={}},destroy:function(){for(;this.rendererList.length>0;)this.destroyRenderer(this.rendererList.pop());for(var e in this._rendererPool){var r=this._rendererPool[e];if(r)for(;r.length>0;)this.destroyRenderer(r.pop())}},recycleItemRenderers:function(e){for(;this.rendererList.length>0;){var r=this.rendererList.pop();this.recycleRenderer(r,e)}this.itemToRenderer={}},getRenderers:function(e){if(null==e||null==e.id)return null;var r=this.itemToRenderer[e.id];return null==r?null:r.concat()},createRenderer:function(e,r,n,t){if(null!=e&&null!=r&&null!=n){var o=null,d=null,i=this.rendererPool[r];null!=i&&(o=i.shift()),null==o?(d=new n,o={renderer:d,container:d.domNode,kind:r},this.emit("rendererCreated",{renderer:o,source:this.owner,item:e})):(d=o.renderer,this.emit("rendererReused",{renderer:d,source:this.owner,item:e})),d.owner=this.owner,d.set("rendererKind",r),d.set("item",e);var s=this.itemToRenderer[e.id];return null==s&&(this.itemToRenderer[e.id]=s=[]),s.push(o),this.rendererList.push(o),o}return null},recycleRenderer:function(e,r){this.emit("rendererRecycled",{renderer:e,source:this.owner});var n=this.rendererPool[e.kind];null==n?this.rendererPool[e.kind]=[e]:n.push(e),r&&e.container.parentNode.removeChild(e.container),d.set(e.container,"display","none"),e.renderer.owner=null,e.renderer.set("item",null)},destroyRenderer:function(e){this.emit("rendererDestroyed",{renderer:e,source:this.owner});var r=e.renderer;r.destroy&&r.destroy(),n.destroy(e.container)},destroyRenderersByKind:function(e){for(var r=[],n=0;n<this.rendererList.length;n++){var t=this.rendererList[n];t.kind==e?this.destroyRenderer(t):r.push(t)}this.rendererList=r;var o=this.rendererPool[e];if(o)for(;o.length>0;)this.destroyRenderer(o.pop())}})});