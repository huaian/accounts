define("dijit/form/_ToggleButtonMixin",["dojo/_base/declare","dojo/dom-attr"],function(e,t){return e("dijit.form._ToggleButtonMixin",null,{checked:!1,_aria_attr:"aria-pressed",_onClick:function(e){var t=this.checked;this._set("checked",!t);var i=this.inherited(arguments);return this.set("checked",i?this.checked:t),i},_setCheckedAttr:function(e,i){this._set("checked",e);var s=this.focusNode||this.domNode;this._created&&t.get(s,"checked")!=!!e&&t.set(s,"checked",!!e),s.setAttribute(this._aria_attr,String(e)),this._handleOnChange(e,i)},postCreate:function(){this.inherited(arguments);var e=this.focusNode||this.domNode;this.checked&&e.setAttribute("checked","checked"),void 0===this._resetValue&&(this._lastValueReported=this._resetValue=this.checked)},reset:function(){this._hasBeenBlurred=!1,this.set("checked",this.params.checked||!1)}})});