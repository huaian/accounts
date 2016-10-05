define("dijit/form/_FormMixin",["dojo/_base/array","dojo/_base/declare","dojo/_base/kernel","dojo/_base/lang","dojo/on","dojo/window"],function(e,t,n,a,i,s){return t("dijit.form._FormMixin",null,{state:"",_getDescendantFormWidgets:function(t){var n=[];return e.forEach(t||this.getChildren(),function(e){"value"in e?n.push(e):n=n.concat(this._getDescendantFormWidgets(e.getChildren()))},this),n},reset:function(){e.forEach(this._getDescendantFormWidgets(),function(e){e.reset&&e.reset()})},validate:function(){var t=!1;return e.every(e.map(this._getDescendantFormWidgets(),function(e){e._hasBeenBlurred=!0;var n=e.disabled||!e.validate||e.validate();return n||t||(s.scrollIntoView(e.containerNode||e.domNode),e.focus(),t=!0),n}),function(e){return e})},setValues:function(e){return n.deprecated(this.declaredClass+"::setValues() is deprecated. Use set('value', val) instead.","","2.0"),this.set("value",e)},_setValueAttr:function(t){var n={};e.forEach(this._getDescendantFormWidgets(),function(e){if(e.name){var t=n[e.name]||(n[e.name]=[]);t.push(e)}});for(var i in n)if(n.hasOwnProperty(i)){var s=n[i],d=a.getObject(i,!1,t);void 0!==d&&(d=[].concat(d),"boolean"==typeof s[0].checked?e.forEach(s,function(t){t.set("value",-1!=e.indexOf(d,t._get("value")))}):s[0].multiple?s[0].set("value",d):e.forEach(s,function(e,t){e.set("value",d[t])}))}},_setDirtyFieldsAttr:function(t){var n={};e.forEach(this._getDescendantFormWidgets(),function(e){if(e.name){var t=n[e.name]||(n[e.name]=[]);t.push(e)}});for(var i in n)if(n.hasOwnProperty(i)){var s=n[i],d=a.getObject(i,!1,t);void 0!==d&&(d=[].concat(d),e.forEach(s,function(e,t){d[t]&&!$(e.domNode).hasClass("dirtyInput")?$(e.domNode).addClass("dirtyInput"):!d[t]&&$(e.domNode).hasClass("dirtyInput")&&$(e.domNode).removeClass("dirtyInput")}))}},getValues:function(){return n.deprecated(this.declaredClass+"::getValues() is deprecated. Use get('value') instead.","","2.0"),this.get("value")},_getValueAttr:function(){var t={};return e.forEach(this._getDescendantFormWidgets(),function(e){var n=e.name;if(n&&!e.disabled){var i=e.get("value");if("boolean"==typeof e.checked)if(/Radio/.test(e.declaredClass))i!==!1?a.setObject(n,i,t):(i=a.getObject(n,!1,t),void 0===i&&a.setObject(n,null,t));else{var s=a.getObject(n,!1,t);s||(s=[],a.setObject(n,s,t)),i!==!1&&_.isArray(s)&&s.push(i)}else{var d=a.getObject(n,!1,t);if("undefined"!=typeof d?a.isArray(d)?d.push(i):a.setObject(n,[d,i],t):a.setObject(n,i,t),"dijit.form.FilteringSelect"===e.declaredClass||"dijit.form.Select"===e.declaredClass||"dojox.form.CheckedMultiSelect"===e.declaredClass){var r;if("dojox.form.CheckedMultiSelect"===e.declaredClass){if(r=[],e.get("value").length>0){var o=e.getOptions(e.get("value"));_.each(o,function(e){r.push(e.label)})}}else r=e.get("value")?e.get("displayedValue"):"";r="请选择"===r?"":r,d=a.getObject(n+"Desc",!1,t),"undefined"!=typeof d?a.isArray(d)?d.push(r):a.setObject(n+"Desc",[d,r],t):a.setObject(n+"Desc",r,t)}}}}),t},isValid:function(){return""==this.state},onValidStateChange:function(){},_getState:function(){var t=e.map(this._descendants,function(e){return e.get("state")||""});return e.indexOf(t,"Error")>=0?"Error":e.indexOf(t,"Incomplete")>=0?"Incomplete":""},disconnectChildren:function(){},connectChildren:function(t){this._descendants=this._getDescendantFormWidgets(),e.forEach(this._descendants,function(e){e._started||e.startup()}),t||this._onChildChange()},_onChildChange:function(e){e&&"state"!=e&&"disabled"!=e||this._set("state",this._getState()),e&&"value"!=e&&"disabled"!=e&&"checked"!=e||(this._onChangeDelayTimer&&this._onChangeDelayTimer.remove(),this._onChangeDelayTimer=this.defer(function(){delete this._onChangeDelayTimer,this._set("value",this.get("value"))},10))},startup:function(){this.inherited(arguments),this._descendants=this._getDescendantFormWidgets(),this.value=this.get("value"),this.state=this._getState();var e=this;this.own(i(this.containerNode,"attrmodified-state, attrmodified-disabled, attrmodified-value, attrmodified-checked",function(t){t.target!=e.domNode&&e._onChildChange(t.type.replace("attrmodified-",""))})),this.watch("state",function(e,t,n){this.onValidStateChange(""==n)})},destroy:function(){this.inherited(arguments)}})});