define("dojox/charting/action2d/TouchIndicator",["dojo/_base/lang","dojo/_base/declare","dojo/_base/event","dojo/has","dojo/touch","dojo/_base/connect","./ChartAction","./_IndicatorElement","dojox/lang/utils"],function(t,e,o,n,h,a,c,s,i){return e("dojox.charting.action2d.TouchIndicator",c,{defaultParams:{series:"",dualIndicator:!1,vertical:!0,autoScroll:!0,fixed:!0,precision:0,lines:!0,labels:!0,markers:!0},optionalParams:{lineStroke:{},outlineStroke:{},shadowStroke:{},lineFill:{},stroke:{},outline:{},shadow:{},fill:{},fillFunc:null,labelFunc:null,font:"",fontColor:"",markerStroke:{},markerOutline:{},markerShadow:{},markerFill:{},markerSymbol:"",offset:{},start:!1},constructor:function(e,o,a){n("touch-events")?this._listeners=[{eventName:"touchstart",methodName:"onTouchStart"},{eventName:"touchmove",methodName:"onTouchMove"},{eventName:"touchend",methodName:"onTouchEnd"},{eventName:"touchcancel",methodName:"onTouchEnd"}]:this._listeners=[{eventName:h.press,methodName:"onTouchStart"},{eventName:h.move,methodName:"onTouchMove"},{eventName:h.cancel,methodName:"onTouchEnd"}],this.opt=t.clone(this.defaultParams),i.updateWithObject(this.opt,a),i.updateWithPattern(this.opt,a,this.optionalParams),this._uName="touchIndicator"+this.opt.series,this.connect()},connect:function(){this.inherited(arguments),this.chart.addPlot(this._uName,{type:s,inter:this})},disconnect:function(){var t=this.chart.getPlot(this._uName);t.pageCoord&&this.onTouchEnd(),this.chart.removePlot(this._uName),this.inherited(arguments)},onChange:function(t){},onTouchStart:function(t){t.touches&&1!=t.touches.length?this.opt.dualIndicator&&2==t.touches.length&&this._onTouchDual(t):this._onTouchSingle(t,!0)},onTouchMove:function(t){t.touches&&1!=t.touches.length?this.opt.dualIndicator&&2==t.touches.length&&this._onTouchDual(t):this._onTouchSingle(t)},_onTouchSingle:function(t,e){n("touch-events")||this._onTouchEndHandler||(this._onTouchEndHandler=a.connect(this.chart.node.ownerDocument,h.release,this,"onTouchEnd")),this.chart._delayedRenderHandle&&!e&&this.chart.render();var c=this.chart.getPlot(this._uName);c.pageCoord={x:t.touches?t.touches[0].pageX:t.pageX,y:t.touches?t.touches[0].pageY:t.pageY},c.dirty=!0,e?this.chart.delayedRender():this.chart.render(),o.stop(t)},_onTouchDual:function(t){n("touch-events")||this._onTouchEndHandler||(this._onTouchEndHandler=a.connect(this.chart.node.ownerDocument,h.release,this,"onTouchEnd")),this.chart._delayedRenderHandle&&this.chart.render();var e=this.chart.getPlot(this._uName);e.pageCoord={x:t.touches[0].pageX,y:t.touches[0].pageY},e.secondCoord={x:t.touches[1].pageX,y:t.touches[1].pageY},e.dirty=!0,this.chart.render(),o.stop(t)},onTouchEnd:function(t){!n("touch-events")&&this._onTouchEndHandler&&(a.disconnect(this._onTouchEndHandler),this._onTouchEndHandler=null);var e=this.chart.getPlot(this._uName);e.stopTrack(),e.pageCoord=null,e.secondCoord=null,e.dirty=!0,this.chart.delayedRender()}})});