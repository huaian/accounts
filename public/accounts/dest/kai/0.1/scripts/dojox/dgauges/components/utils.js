define("dojox/dgauges/components/utils",["dojo/_base/lang","dojo/_base/Color"],function(t,o){var i={};return t.mixin(i,{brightness:function(o,i){var r=t.mixin(null,o);return r.r=Math.max(Math.min(r.r+i,255),0),r.g=Math.max(Math.min(r.g+i,255),0),r.b=Math.max(Math.min(r.b+i,255),0),r},createGradient:function(t){for(var o,i={colors:[]},r=0;r<t.length;r++)r%2==0?o={offset:t[r]}:(o.color=t[r],i.colors.push(o));return i},_setter:function(t,o,i){for(var r=0;r<o.length;r++)t[o[r]]=i[r]},genericCircularGauge:function(t,r,e,n,a,c,l,s,u,g,h){var d=["originX","originY","radius","startAngle","endAngle","orientation","font","labelPosition","tickShapeFunc"];s||(s="clockwise"),u||(u={family:"Helvetica",style:"normal",size:"10pt",color:"#555555"}),g||(g="inside"),h||(h=function(t,r,e){var n,a,c=r.tickStroke;if(c){n={color:c.color?c.color:"#000000",width:c.width?c.width:.5};var l=new o(c.color).toRgb();a={color:c.color?i.brightness({r:l[0],g:l[1],b:l[2]},51):"#000000",width:c.width?.6*c.width:.3}}return t.createLine({x1:e.isMinor?2:0,y1:0,x2:e.isMinor?8:10,y2:0}).setStroke(e.isMinor?a:n)}),this._setter(t,d,[e,n,a,c,l,s,u,g,h]),r.set("interactionArea","gauge"),r.set("indicatorShapeFunc",function(o,i){return o.createPolyline([0,-5,i.scale.radius-6,0,0,5,0,-5]).setStroke({color:"#333333",width:.25}).setFill(t._gauge.indicatorColor)})}}),i});