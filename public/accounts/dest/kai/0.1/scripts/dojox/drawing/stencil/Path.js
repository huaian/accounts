define("dojox/drawing/stencil/Path",["dojo","dojo/_base/array","../util/oo","./_Base","../manager/_registry"],function(t,i,s,e,h){var o=s.declare(e,function(t){},{type:"dojox.drawing.stencil.Path",closePath:!0,baseRender:!0,closeRadius:10,closeColor:{r:255,g:255,b:0,a:.5},_create:function(t,s){if(this.remove(this[t]),this.points.length){if("svg"==dojox.gfx.renderer){var e=[];i.forEach(this.points,function(t,i){if(!t.skip)if(0==i)e.push("M "+t.x+" "+t.y);else{var s=(t.t||"")+" ";void 0===t.x?e.push(s):e.push(s+t.x+" "+t.y)}},this),this.closePath&&e.push("Z"),this.stringPath=e.join(" "),this[t]=this.container.createPath(e.join(" ")).setStroke(s),this.closePath&&this[t].setFill(s.fill)}else this[t]=this.container.createPath({}).setStroke(s),this.closePath&&this[t].setFill(s.fill),i.forEach(this.points,function(i,s){i.skip||(0==s||"M"==i.t?this[t].moveTo(i.x,i.y):"Z"==i.t?this.closePath&&this[t].closePath():this[t].lineTo(i.x,i.y))},this),this.closePath&&this[t].closePath();this._setNodeAtts(this[t])}},render:function(){this.onBeforeRender(this),this.renderHit&&this._create("hit",this.style.currentHit),this._create("shape",this.style.current)},getBounds:function(t){var s=1e4,e=1e4,h=0,o=0;return i.forEach(this.points,function(t){void 0===t.x||isNaN(t.x)||(s=Math.min(s,t.x),e=Math.min(e,t.y),h=Math.max(h,t.x),o=Math.max(o,t.y))}),{x1:s,y1:e,x2:h,y2:o,x:s,y:e,w:h-s,h:o-e}},checkClosePoint:function(t,i,s){var e=this.util.distance(t.x,t.y,i.x,i.y);if(this.points.length>1)if(e<this.closeRadius&&!this.closeGuide&&!s){var h={cx:t.x,cy:t.y,rx:this.closeRadius,ry:this.closeRadius};this.closeGuide=this.container.createEllipse(h).setFill(this.closeColor)}else(s||e>this.closeRadius&&this.closeGuide)&&(this.remove(this.closeGuide),this.closeGuide=null);return e<this.closeRadius}});return t.setObject("dojox.drawing.stencil.Path",o),h.register({name:"dojox.drawing.stencil.Path"},"stencil"),o});