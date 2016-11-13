define("dojox/dgauges/GaugeBase",["dojo/_base/lang","dojo/_base/declare","dojo/dom-geometry","dijit/registry","dijit/_WidgetBase","dojo/_base/html","dojo/_base/event","dojox/gfx","dojox/widget/_Invalidating","./ScaleBase","dojox/gfx/matrix"],function(e,t,i,n,s,r,a,o,h,d,l){return t("dojox.dgauges.GaugeBase",[s,h],{_elements:null,_scales:null,_elementsIndex:null,_elementsRenderers:null,_gfxGroup:null,_mouseShield:null,_widgetBox:null,_node:null,value:0,_mainIndicator:null,_getValueAttr:function(){return this._mainIndicator?this._mainIndicator.get("value"):(this._setMainIndicator(),this._mainIndicator?this._mainIndicator.get("value"):this.value)},_setValueAttr:function(e){this._set("value",e),this._mainIndicator?this._mainIndicator.set("value",e):(this._setMainIndicator(),this._mainIndicator&&this._mainIndicator.set("value",e))},_setMainIndicator:function(){for(var e,t=0;t<this._scales.length;t++)e=this._scales[t].getIndicator("indicator"),e&&(this._mainIndicator=e)},_resetMainIndicator:function(){this._mainIndicator=null},font:null,constructor:function(e,t){this.font={family:"Helvetica",style:"normal",variant:"small-caps",weight:"bold",size:"10pt",color:"black"},this._elements=[],this._scales=[],this._elementsIndex={},this._elementsRenderers={},this._node=n.byId(t);var i=r.getMarginBox(t);this.surface=o.createSurface(this._node,i.w||1,i.h||1),this._widgetBox=i,this._baseGroup=this.surface.createGroup(),this._mouseShield=this._baseGroup.createGroup(),this._gfxGroup=this._baseGroup.createGroup()},_setCursor:function(e){this._node&&(this._node.style.cursor=e)},_computeBoundingBox:function(e){return e?e.getBoundingBox():{x:0,y:0,width:0,height:0}},destroy:function(){this.surface.destroy(),this.inherited(arguments)},resize:function(e,t){switch(arguments.length){case 1:i.setMarginBox(this._node,e);break;case 2:i.setMarginBox(this._node,{w:e,h:t})}var n=i.getMarginBox(this._node);this._widgetBox=n;var s=this.surface.getDimensions();return s.width!=n.w||s.height!=n.h?(this.surface.setDimensions(n.w,n.h),this._mouseShield.clear(),this._mouseShield.createRect({x:0,y:0,width:n.w,height:n.h}).setFill([0,0,0,0]),this.invalidateRendering()):this},addElement:function(t,i){if(this._elementsIndex[t]&&this._elementsIndex[t]!=i&&this.removeElement(t),e.isFunction(i)){var n={};e.mixin(n,new h),n._name=t,n._gfxGroup=this._gfxGroup.createGroup(),n.width=0,n.height=0,n._isGFX=!0,n.refreshRendering=function(){return n._gfxGroup.clear(),i(n._gfxGroup,n.width,n.height)},this._elements.push(n),this._elementsIndex[t]=n}else i._name=t,i._gfxGroup=this._gfxGroup.createGroup(),i._gauge=this,this._elements.push(i),this._elementsIndex[t]=i,i instanceof d&&this._scales.push(i);return this.invalidateRendering()},removeElement:function(e){var t=this._elementsIndex[e];if(t){t._gfxGroup.removeShape();var i=this._elements.indexOf(t);if(this._elements.splice(i,1),t instanceof d){var n=this._scales.indexOf(t);this._scales.splice(n,1),this._resetMainIndicator()}delete this._elementsIndex[e],delete this._elementsRenderers[e]}return this.invalidateRendering(),t},getElement:function(e){return this._elementsIndex[e]},getElementRenderer:function(e){return this._elementsRenderers[e]},onStartEditing:function(e){},onEndEditing:function(e){}})});