define("dijit/form/_ListMouseMixin",["dojo/_base/declare","dojo/on","dojo/touch","./_ListBase"],function(e,i,t,o){return e("dijit.form._ListMouseMixin",o,{postCreate:function(){this.inherited(arguments),this.domNode.dojoClick=!0,this._listConnect("click","_onClick"),this._listConnect("mousedown","_onMouseDown"),this._listConnect("mouseup","_onMouseUp"),this._listConnect("mouseover","_onMouseOver"),this._listConnect("mouseout","_onMouseOut")},_onClick:function(e,i){this._setSelectedAttr(i,!1),this._deferredClick&&this._deferredClick.remove(),this._deferredClick=this.defer(function(){this._deferredClick=null,this.onClick(i)})},_onMouseDown:function(e,i){this._hoveredNode&&(this.onUnhover(this._hoveredNode),this._hoveredNode=null),this._isDragging=!0,this._setSelectedAttr(i,!1)},_onMouseUp:function(e,i){this._isDragging=!1;var t=this.selected,o=this._hoveredNode;t&&i==t?this.defer(function(){this._onClick(e,t)}):o&&this.defer(function(){this._onClick(e,o)})},_onMouseOut:function(e,i){this._hoveredNode&&(this.onUnhover(this._hoveredNode),this._hoveredNode=null),this._isDragging&&(this._cancelDrag=(new Date).getTime()+1e3)},_onMouseOver:function(e,i){if(this._cancelDrag){var t=(new Date).getTime();t>this._cancelDrag&&(this._isDragging=!1),this._cancelDrag=null}this._hoveredNode=i,this.onHover(i),this._isDragging&&this._setSelectedAttr(i,!1)}})});