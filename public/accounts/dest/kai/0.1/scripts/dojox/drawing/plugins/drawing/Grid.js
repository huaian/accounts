define("dojox/drawing/plugins/drawing/Grid",["dojo","../../util/oo","../_Plugin"],function(o,r,i){var t=r.declare(i,function(r){r.gap&&(this.major=r.gap),this.majorColor=r.majorColor||this.majorColor,this.minorColor=r.minorColor||this.minorColor,this.setGrid(),o.connect(this.canvas,"setZoom",this,"setZoom")},{type:"dojox.drawing.plugins.drawing.Grid",gap:100,major:100,minor:0,majorColor:"#00ffff",minorColor:"#d7ffff",zoom:1,setZoom:function(o){this.zoom=o,this.setGrid()},setGrid:function(o){var r=Math.floor(this.major*this.zoom),i=this.minor?Math.floor(this.minor*this.zoom):r;this.grid&&this.grid.removeShape();var t,n,s,a,e,d,h,m=this.canvas.underlay.createGroup(),l=2e3,f=1e3,g=1,c=this.majorColor,u=this.minorColor,j=function(o,r,i,t,n){m.createLine({x1:o,y1:r,x2:i,y2:t}).setStroke({style:"Solid",width:g,cap:"round",color:n})};for(e=1,h=f/i;h>e;e++)t=0,n=l,s=i*e,a=s,d=s%r?u:c,j(t,s,n,a,d);for(e=1,h=l/i;h>e;e++)s=0,a=f,t=i*e,n=t,d=t%r?u:c,j(t,s,n,a,d);return m.moveToBack(),this.grid=m,this.util.attr(m,"id","grid"),m}});return o.setObject("dojox.drawing.plugins.drawing.Grid",t),t});