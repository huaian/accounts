define("dojox/gauges/AnalogCircleIndicator",["dojo/_base/declare","./AnalogIndicatorBase"],function(o,r){return o("dojox.gauges.AnalogCircleIndicator",[r],{_getShapes:function(o){var r=this.color?this.color:"black",t=this.strokeColor?this.strokeColor:r,e={color:t,width:1};return this.color.type&&!this.strokeColor&&(e.color=this.color.colors[0].color),[o.createCircle({cx:0,cy:-this.offset,r:this.length}).setFill(r).setStroke(e)]}})});