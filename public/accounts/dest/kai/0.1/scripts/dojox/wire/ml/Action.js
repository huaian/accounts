define("dojox/wire/ml/Action",["dojo","dijit","dojox","dojo/require!dijit/_Widget,dijit/_Container,dojox/wire/Wire,dojox/wire/ml/util"],function(e,i,r){e.provide("dojox.wire.ml.Action"),e.require("dijit._Widget"),e.require("dijit._Container"),e.require("dojox.wire.Wire"),e.require("dojox.wire.ml.util"),e.declare("dojox.wire.ml.Action",[i._Widget,i._Container],{trigger:"",triggerEvent:"",triggerTopic:"",postCreate:function(){this._connect()},_connect:function(){if(this.triggerEvent)if(this.trigger){var i=r.wire.ml._getValue(this.trigger);i&&(i[this.triggerEvent]||(i[this.triggerEvent]=function(){}),this._triggerHandle=e.connect(i,this.triggerEvent,this,"run"))}else{var t=this.triggerEvent.toLowerCase();if("onload"==t){var n=this;e.addOnLoad(function(){n._run.apply(n,arguments)})}}else this.triggerTopic&&(this._triggerHandle=e.subscribe(this.triggerTopic,this,"run"))},_disconnect:function(){this._triggerHandle&&(this.triggerTopic?e.unsubscribe(this.triggerTopic,this._triggerHandle):e.disconnect(this._triggerHandle))},run:function(){var e=this.getChildren();for(var i in e){var t=e[i];if(t instanceof r.wire.ml.ActionFilter&&!t.filter.apply(t,arguments))return}this._run.apply(this,arguments)},_run:function(){var e=this.getChildren();for(var i in e){var t=e[i];t instanceof r.wire.ml.Action&&t.run.apply(t,arguments)}},uninitialize:function(){return this._disconnect(),!0}}),e.declare("dojox.wire.ml.ActionFilter",i._Widget,{required:"",requiredValue:"",type:"",message:"",error:"",filter:function(){if(""===this.required)return!0;var e=r.wire.ml._getValue(this.required,arguments);if(""===this.requiredValue){if(e)return!0}else{var i=this.requiredValue;if(""!==this.type){var t=this.type.toLowerCase();"boolean"===t?i="false"===i.toLowerCase()?!1:!0:"number"===t&&(i=parseInt(i,10))}if(e===i)return!0}return this.message&&(this.error?r.wire.ml._setValue(this.error,this.message):alert(this.message)),!1}})});