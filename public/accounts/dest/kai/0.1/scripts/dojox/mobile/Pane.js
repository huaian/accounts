define("dojox/mobile/Pane",["dojo/_base/array","dojo/_base/declare","dijit/_Contained","dijit/_WidgetBase"],function(e,i,n,o){return i("dojox.mobile.Pane",[o,n],{baseClass:"mblPane",buildRendering:function(){this.inherited(arguments),this.containerNode||(this.containerNode=this.domNode)},resize:function(){e.forEach(this.getChildren(),function(e){e.resize&&e.resize()})}})});