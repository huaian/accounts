define("dojox/dgauges/MultiLinearScaler",["dojo/_base/declare","dojo/Stateful"],function(i,o){return i("dojox.dgauges.MultiLinearScaler",o,{majorTickValues:null,minorTickCount:4,majorTicks:null,minorTicks:null,_snapIntervalPrecision:null,_snapCount:4,_snapIntervalPrecision:6,constructor:function(){this.watchedProperties=["majorTickValues","snapCount","minorTickCount"]},computeTicks:function(){this.majorTicks=[],this.minorTicks=[];for(var i,o,s,t,r=1/(this.majorTickValues.length-1),n=r/(this.minorTickCount+1),a=0,e=0;e<this.majorTickValues.length;e++){if(t=this.majorTickValues[e],i={scaler:this},i.position=a*r,i.value=t,i.isMinor=!1,this.majorTicks.push(i),a<this.majorTickValues.length-1){s=Number(t),o=(Number(this.majorTickValues[e+1])-s)/(this.minorTickCount+1);for(var u=1;u<=this.minorTickCount;u++)i={scaler:this},i.isMinor=!0,i.position=a*r+u*n,i.value=s+o*u,this.minorTicks.push(i)}a++}return this.majorTicks.concat(this.minorTicks)},positionForValue:function(i){if(!this.majorTickValues)return 0;this.majorTicks||this.computeTicks();var o=this._getMinMax(i),s=(i-o[0].value)/(o[1].value-o[0].value);return o[0].position+s*(o[1].position-o[0].position)},valueForPosition:function(i){if(null==this.majorTicks)return 0;var o=this._getMinMax(i,"position"),s=(i-o[0].position)/(o[1].position-o[0].position);return o[0].value+s*(o[1].value-o[0].value)},_getMinMax:function(i,o){o||(o="value");var s,t=[],r=0,n=this.majorTicks.length-1;if(i<=this.majorTicks[0][o]||i>=this.majorTicks[n][o])return t[0]=this.majorTicks[0],t[1]=this.majorTicks[n],t;for(;;)if(s=Math.floor((r+n)/2),this.majorTicks[s][o]<=i){if(this.majorTicks[s+1][o]>=i)return t[0]=this.majorTicks[s],t[1]=this.majorTicks[s+1],t;r=s+1}else n=s}})});