define("custom/dijit/form/FilteringSelect",["dojo/when","dojo/_base/lang","dojo/_base/declare","dijit/form/FilteringSelect"],function(e,t,i,s){return i("custom.dijit.form.FilteringSelect",[s],{_setDisplayedValueAttr:function(i,s){if($(this.textbox).attr("title",i),null==i&&(i=""),!this._created){if(!("displayedValue"in this.params))return;s=!1}if(this.store){this.closeDropDown();var n,r=t.clone(this.query),l=this._getDisplayQueryString(i);this.store._oldAPI?n=l:(n=this._patternToRegExp(l),n.toString=function(){return l}),this._lastQuery=r[this.searchAttr]=n,this.textbox.value=i,this._lastDisplayedValue=i,this._set("displayedValue",i);var a=this,o={queryOptions:{ignoreCase:this.ignoreCase,deep:!0}};t.mixin(o,this.fetchProperties),this._fetchHandle=this.store.query(r,o),e(this._fetchHandle,function(e){return a._fetchHandle=null,"{}"==JSON.stringify(r.name)?void(a.valueNode.value=""):void a._callbackSetLabel(e||[],r,o,s)},function(e){a._fetchHandle=null,!a._cancelingQuery})}}})});