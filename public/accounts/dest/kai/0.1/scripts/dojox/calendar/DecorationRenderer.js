define("dojox/calendar/DecorationRenderer",["dojo/_base/declare","dojo/dom-class","dijit/_WidgetBase","dijit/_TemplatedMixin"],function(s,t,e,i,a){return s("dojox.calendar.DecorationRenderer",[e,i],{templateString:'<div class="dojoxCalendarDecoration"></div>',_setItemAttr:function(s){null==s?(this.item&&this.item.cssClass&&t.remove(this.domNode,this.item.cssClass),this.item=null):null!=this.item?(this.item.cssClass!=s.cssClass&&this.item.cssClass&&t.remove(this.domNode,this.item.cssClass),this.item=lang.mixin(this.item,s),s.cssClass&&t.add(this.domNode,s.cssClass)):(this.item=s,s.cssClass&&t.add(this.domNode,s.cssClass))},postCreate:function(){this.inherited(arguments),this._applyAttributes()}})});