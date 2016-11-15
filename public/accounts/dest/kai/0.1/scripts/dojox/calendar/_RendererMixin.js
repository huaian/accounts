define("dojox/calendar/_RendererMixin",["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/dom-class","dojo/Stateful"],function(e,t,i,s,a){return e("dojox.calendar._RendererMixin",a,{item:null,owner:null,edited:!1,focused:!1,hovered:!1,selected:!1,storeState:!1,moveEnabled:!0,resizeEnabled:!0,_orientation:"vertical",_displayValue:"block",_displayValueMap:{},visibilityLimits:{resizeStartHandle:50,resizeEndHandle:-1,summaryLabel:15,startTimeLabel:45,endTimeLabel:50},_setSelectedAttr:function(e){this._setState("selected",e,"Selected")},_setFocusedAttr:function(e){this._setState("focused",e,"Focused")},_setEditedAttr:function(e){this._setState("edited",e,"Edited")},_setHoveredAttr:function(e){this._setState("hovered",e,"Hovered")},_setStoreStateAttr:function(e){var t=null;switch(e){case"storing":t="Storing";break;case"unstored":t="Unstored";break;default:t=null}var i=this.stateNode||this.domNode;s.remove(i,"Storing"),s.remove(i,"Unstored"),this._set("storeState",e),null!=t&&s.add(i,t)},_setState:function(e,t,i){if(this[e]!=t){var a=this.stateNode||this.domNode;s[t?"add":"remove"](a,i),this._set(e,t)}},_setItemAttr:function(e){null==e?(this.item&&this.item.cssClass&&s.remove(this.domNode,this.item.cssClass),this.item=null):null!=this.item?(this.item.cssClass!=e.cssClass&&this.item.cssClass&&s.remove(this.domNode,this.item.cssClass),this.item=t.mixin(this.item,e),e.cssClass&&s.add(this.domNode,e.cssClass)):(this.item=e,e.cssClass&&s.add(this.domNode,e.cssClass))},_setText:function(e,t,i){this.owner&&this.owner._setText(e,t,i)},_isElementVisible:function(e,t,i,s){var a,l=this.visibilityLimits[e];switch(e){case"moveHandle":a=this.moveEnabled;break;case"resizeStartHandle":a=this.mobile?this.resizeEnabled&&!t&&this.edited&&(-1==l||s>l):this.resizeEnabled&&!t&&(-1==l||s>l);break;case"resizeEndHandle":a=this.mobile?this.resizeEnabled&&!i&&this.edited&&(-1==l||s>l):this.resizeEnabled&&!i&&(-1==l||s>l);break;case"startTimeLabel":a=this.mobile?!t&&(!this.edited||this.edited&&(-1==l||s>l)):!t&&(-1==l||s>l);break;case"endTimeLabel":a=this.edited&&!i&&(-1==l||s>l);break;case"summaryLabel":a=this.mobile?!this.edited||this.edited&&(-1==l||s>l):-1==l||s>l}return a},_formatTime:function(e,t){if(this.owner){var i=this.owner.get("formatItemTimeFunc");if(null!=i&&"function"==typeof i)return i(t,e,this.owner,this.item)}return e.dateLocaleModule.format(t,{selector:"time"})},getDisplayValue:function(e){return this._displayValue},updateRendering:function(e,t){if(t=t||this.item.h,e=e||this.item.w,t||e){this.item.h=t,this.item.w=e;var s,a="vertical"==this._orientation?t:e,l=this.owner.renderData,n=0!=l.dateModule.compare(this.item.range[0],this.item.startTime),d=0!=l.dateModule.compare(this.item.range[1],this.item.endTime);null!=this.beforeIcon&&(s="horizontal"!=this._orientation||this.isLeftToRight()?n:d,i.set(this.beforeIcon,"display",s?this.getDisplayValue("beforeIcon"):"none")),null!=this.afterIcon&&(s="horizontal"!=this._orientation||this.isLeftToRight()?d:n,i.set(this.afterIcon,"display",s?this.getDisplayValue("afterIcon"):"none")),this.moveHandle&&(s=this._isElementVisible("moveHandle",n,d,a),i.set(this.moveHandle,"display",s?this.getDisplayValue("moveHandle"):"none")),this.resizeStartHandle&&(s=this._isElementVisible("resizeStartHandle",n,d,a),i.set(this.resizeStartHandle,"display",s?this.getDisplayValue("resizeStartHandle"):"none")),this.resizeEndHandle&&(s=this._isElementVisible("resizeEndHandle",n,d,a),i.set(this.resizeEndHandle,"display",s?this.getDisplayValue("resizeEndHandle"):"none")),this.startTimeLabel&&(s=this._isElementVisible("startTimeLabel",n,d,a),i.set(this.startTimeLabel,"display",s?this.getDisplayValue("startTimeLabel"):"none"),s&&this._setText(this.startTimeLabel,this._formatTime(l,this.item.startTime))),this.endTimeLabel&&(s=this._isElementVisible("endTimeLabel",n,d,a),i.set(this.endTimeLabel,"display",s?this.getDisplayValue("endTimeLabel"):"none"),s&&this._setText(this.endTimeLabel,this._formatTime(l,this.item.endTime))),this.summaryLabel&&(s=this._isElementVisible("summaryLabel",n,d,a),i.set(this.summaryLabel,"display",s?this.getDisplayValue("summaryLabel"):"none"),s&&this._setText(this.summaryLabel,this.item.summary,!0))}}})});