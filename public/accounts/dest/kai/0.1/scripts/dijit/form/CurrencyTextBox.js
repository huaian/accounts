define("dijit/form/CurrencyTextBox",["dojo/currency","dojo/_base/declare","dojo/_base/lang","./NumberTextBox"],function(e,r,t,n){return r("dijit.form.CurrencyTextBox",n,{currency:"",baseClass:"dijitTextBox dijitCurrencyTextBox",_formatter:e.format,_parser:e.parse,_regExpGenerator:e.regexp,parse:function(e,r){var i=this.inherited(arguments);return isNaN(i)&&/\d+/.test(e)&&(i=t.hitch(t.delegate(this,{_parser:n.prototype._parser}),"inherited")(arguments)),i},_setConstraintsAttr:function(r){!r.currency&&this.currency&&(r.currency=this.currency),this.inherited(arguments,[e._mixInDefaults(t.mixin(r,{exponent:!1}))])}})});