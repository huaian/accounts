define("dojox/charting/plot2d/StackedBars",["dojo/_base/declare","./Bars","./commonStacked"],function(e,t,a){return e("dojox.charting.plot2d.StackedBars",t,{getSeriesStats:function(){var e,t=a.collectStats(this.series);return t.hmin-=.5,t.hmax+=.5,e=t.hmin,t.hmin=t.vmin,t.vmin=e,e=t.hmax,t.hmax=t.vmax,t.vmax=e,t},getValue:function(e,t,n,i){var r,s;return i?(s=t,r=a.getIndexValue(this.series,n,s)):(s=e.x-1,r=a.getValue(this.series,n,e.x),r=[r[0]?r[0].y:null,r[1]?r[1]:null]),{x:s,y:r[0],py:r[1]}}})});