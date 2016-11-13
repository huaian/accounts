define("dojox/dgauges/components/classic/HorizontalLinearGauge",["dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","../../RectangularGauge","../../LinearScaler","../../RectangularScale","../../RectangularValueIndicator","../DefaultPropertiesMixin"],function(e,o,t,i,r,l,a,n){return o("dojox.dgauges.components.classic.HorizontalLinearGauge",[i,n],{borderColor:[121,126,134],fillColor:[148,152,161],indicatorColor:"#FFFFFF",constructor:function(){this.borderColor=new t(this.borderColor),this.fillColor=new t(this.fillColor),this.indicatorColor=new t(this.indicatorColor),this.addElement("background",e.hitch(this,this.drawBackground));var o=new r,i=new l;i.set("scaler",o),i.set("labelPosition","leading"),i.set("paddingLeft",30),i.set("paddingRight",30),i.set("paddingTop",32),i.set("labelGap",8),i.set("font",{family:"Helvetica",weight:"bold",size:"7pt"}),i.set("tickShapeFunc",function(e,o,t){return e.createCircle({r:t.isMinor?.5:2}).setFill("black")}),this.addElement("scale",i);var n=new a;n.set("interactionArea","gauge"),n.set("value",o.minimum),n.set("paddingTop",30),n.set("indicatorShapeFunc",e.hitch(this,function(e,o){return e.createPolyline([0,0,-10,-20,10,-20,0,0]).setFill(this.indicatorColor).setStroke({color:[121,126,134],width:1,style:"Solid",cap:"butt",join:20})})),i.addIndicator("indicator",n)},drawBackground:function(e,o,t){e.createRect({x:0,y:0,width:o,height:50,r:8}).setFill(this.borderColor),e.createRect({x:2,y:2,width:o-4,height:32,r:6}).setFill({type:"linear",x1:0,y1:2,x2:0,y2:15,colors:[{offset:0,color:[235,235,235]},{offset:1,color:this.borderColor}]}),e.createRect({x:6,y:6,width:o-12,height:38,r:5}).setFill({type:"linear",x1:0,y1:6,x2:0,y2:38,colors:[{offset:0,color:[220,220,220]},{offset:1,color:this.fillColor}]}),e.createRect({x:7,y:7,width:o-14,height:36,r:3}).setFill({type:"linear",x1:0,y1:7,x2:0,y2:36,colors:[{offset:0,color:this.fillColor},{offset:1,color:[220,220,220]}]})}})});