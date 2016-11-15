define("dojox/charting/plot2d/Candlesticks",["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/has","./CartesianBase","./_PlotEvents","./common","dojox/lang/functional","dojox/lang/functional/reversed","dojox/lang/utils","dojox/gfx/fx"],function(t,e,a,i,r,s,n,o,h,d,l){var c=h.lambda("item.purgeGroup()");return e("dojox.charting.plot2d.Candlesticks",[r,s],{defaultParams:{gap:2,animate:null},optionalParams:{minBarSize:1,maxBarSize:1,stroke:{},outline:{},shadow:{},fill:{},font:"",fontColor:""},constructor:function(e,a){this.opt=t.clone(this.defaultParams),d.updateWithObject(this.opt,a),d.updateWithPattern(this.opt,a,this.optionalParams),this.animate=this.opt.animate},collectStats:function(e){for(var i=t.delegate(n.defaultStats),r=0;r<e.length;r++){var s=e[r];if(s.data.length){var o=i.vmin,h=i.vmax;"ymin"in s&&"ymax"in s||a.forEach(s.data,function(t,e){if(null!==t){var a=t.x||e+1;i.hmin=Math.min(i.hmin,a),i.hmax=Math.max(i.hmax,a),i.vmin=Math.min(i.vmin,t.open,t.close,t.high,t.low),i.vmax=Math.max(i.vmax,t.open,t.close,t.high,t.low)}}),"ymin"in s&&(i.vmin=Math.min(o,s.ymin)),"ymax"in s&&(i.vmax=Math.max(h,s.ymax))}}return i},getSeriesStats:function(){var t=this.collectStats(this.series);return t.hmin-=.5,t.hmax+=.5,t},render:function(t,e){if(this.zoom&&!this.isDataDirty())return this.performZoom(t,e);this.resetEvents(),this.dirty=this.isDirty();var r;this.dirty&&(a.forEach(this.series,c),this._eventSeries={},this.cleanGroup(),r=this.getGroup(),o.forEachRev(this.series,function(t){t.cleanGroup(r)}));var s,h,d,l=this.chart.theme,m=this._hScaler.scaler.getTransformerFromModel(this._hScaler),g=this._vScaler.scaler.getTransformerFromModel(this._vScaler),f=this.events();s=n.calculateBarSize(this._hScaler.bounds.scale,this.opt),h=s.gap,d=s.size;for(var u=this.series.length-1;u>=0;--u){var x=this.series[u];if(this.dirty||x.dirty){x.cleanGroup();var v=l.next("candlestick",[this.opt,x]),p=new Array(x.data.length);if(x.hidden)x.dyn.fill=v.series.fill,x.dyn.stroke=v.series.stroke;else{r=x.group;for(var y=0;y<x.data.length;++y){var k=x.data[y];if(null!==k){var S=l.addMixin(v,"candlestick",k,!0),M=m(k.x||y+.5)+e.l+h,_=t.height-e.b,w=g(k.open),j=g(k.close),b=g(k.high),C=g(k.low);if("mid"in k)var E=g(k.mid);if(C>b){var G=b;b=C,C=G}if(d>=1){var z=w>j,P={x1:d/2,x2:d/2,y1:_-b,y2:_-C},B={x:0,y:_-Math.max(w,j),width:d,height:Math.max(z?w-j:j-w,1)},F=r.createGroup();F.setTransform({dx:M,dy:0});var T=F.createGroup();if(T.createLine(P).setStroke(S.series.stroke),T.createRect(B).setStroke(S.series.stroke).setFill(z?S.series.fill:"white"),"mid"in k&&T.createLine({x1:S.series.stroke.width||1,x2:d-(S.series.stroke.width||1),y1:_-E,y2:_-E}).setStroke(z?"white":S.series.stroke),x.dyn.fill=S.series.fill,x.dyn.stroke=S.series.stroke,f){var D={element:"candlestick",index:y,run:x,shape:T,x:M,y:_-Math.max(w,j),cx:d/2,cy:_-Math.max(w,j)+Math.max(z?w-j:j-w,1)/2,width:d,height:Math.max(z?w-j:j-w,1),data:k};this._connectEvents(D),p[y]=D}}this.animate&&this._animateCandlesticks(F,_-C,b-C)}}this._eventSeries[x.name]=p,x.dirty=!1}}else l.skip(),this._reconnectEvents(x.name)}return this.dirty=!1,i("dojo-bidi")&&this._checkOrientation(this.group,t,e),this},tooltipFunc:function(t){return'<table cellpadding="1" cellspacing="0" border="0" style="font-size:0.9em;"><tr><td>Open:</td><td align="right"><strong>'+t.data.open+'</strong></td></tr><tr><td>High:</td><td align="right"><strong>'+t.data.high+'</strong></td></tr><tr><td>Low:</td><td align="right"><strong>'+t.data.low+'</strong></td></tr><tr><td>Close:</td><td align="right"><strong>'+t.data.close+"</strong></td></tr>"+(void 0!==t.data.mid?'<tr><td>Mid:</td><td align="right"><strong>'+t.data.mid+"</strong></td></tr>":"")+"</table>"},_animateCandlesticks:function(e,a,i){l.animateTransform(t.delegate({shape:e,duration:1200,transform:[{name:"translate",start:[0,a-a/i],end:[0,0]},{name:"scale",start:[1,1/i],end:[1,1]},{name:"original"}]},this.animate)).play()}})});