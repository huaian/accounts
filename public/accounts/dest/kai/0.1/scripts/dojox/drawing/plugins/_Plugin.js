define("dojox/drawing/plugins/_Plugin",["dojo","../util/oo"],function(n,i){return i.declare(function(i){this._cons=[],n.mixin(this,i),this.button&&this.onClick&&this.connect(this.button,"onClick",this,"onClick")},{util:null,keys:null,mouse:null,drawing:null,stencils:null,anchors:null,canvas:null,node:null,button:null,type:"dojox.drawing.plugins._Plugin",connect:function(){this._cons.push(n.connect.apply(n,arguments))},disconnect:function(i){i&&(n.isArray(i)||(i=[i]),n.forEach(i,n.disconnect,n))}})});