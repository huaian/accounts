define("dojox/gauges/Range",["dojo/_base/declare","dijit/_Widget"],function(o,e){return o("dojox.gauges.Range",[e],{low:0,high:0,hover:"",color:null,size:0,startup:function(){this.color=this.color?this.color.color||this.color:"black"}})});