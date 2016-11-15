define("dojox/mobile/RoundRectList",["dojo/_base/array","dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/_base/window","dojo/dom-construct","dojo/dom-attr","dijit/_Contained","dijit/_Container","dijit/_WidgetBase"],function(e,t,i,s,o,n,d,l,c,a){return t("dojox.mobile.RoundRectList",[a,c,l],{transition:"slide",iconBase:"",iconPos:"",select:"",stateful:!1,syncWithViews:!1,editable:!1,tag:"ul",editableMixinClass:"dojox/mobile/_EditableListMixin",baseClass:"mblRoundRectList",filterBoxClass:"mblFilteredRoundRectListSearchBox",buildRendering:function(){this.domNode=this.srcNodeRef||n.create(this.tag),this.select&&(d.set(this.domNode,"role","listbox"),"multiple"===this.select&&d.set(this.domNode,"aria-multiselectable","true")),this.inherited(arguments)},postCreate:function(){if(this.editable&&require([this.editableMixinClass],s.hitch(this,function(e){t.safeMixin(this,new e)})),this.connect(this.domNode,"onselectstart",i.stop),this.syncWithViews){var o=function(t,i,s,o,n,d){var l=e.filter(this.getChildren(),function(e){return e.moveTo==="#"+t.id||e.moveTo===t.id})[0];l&&l.set("selected",!0)};this.subscribe("/dojox/mobile/afterTransitionIn",o),this.subscribe("/dojox/mobile/startView",o)}},resize:function(){e.forEach(this.getChildren(),function(e){e.resize&&e.resize()})},onCheckStateChanged:function(){},_setStatefulAttr:function(t){this._set("stateful",t),this.selectOne=t,e.forEach(this.getChildren(),function(e){e.setArrow&&e.setArrow()})},deselectItem:function(e){e.set("selected",!1)},deselectAll:function(){e.forEach(this.getChildren(),function(e){e.set("selected",!1)})},selectItem:function(e){e.set("selected",!0)}})});