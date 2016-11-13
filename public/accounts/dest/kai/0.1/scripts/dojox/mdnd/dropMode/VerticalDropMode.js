define("dojox/mdnd/dropMode/VerticalDropMode",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/array","dojo/dom-geometry","dojox/mdnd/AreaManager"],function(o,r,e,t){var n=r("dojox.mdnd.dropMode.VerticalDropMode",null,{_oldXPoint:null,_oldYPoint:null,_oldBehaviour:"up",addArea:function(o,r){var e=o.length,n=t.position(r.node,!0);if(r.coords={x:n.x,y:n.y},0==e)o.push(r);else{for(var i=r.coords.x,d=0;e>d;d++)if(i<o[d].coords.x){for(var a=e-1;a>=d;a--)o[a+1]=o[a];o[d]=r;break}d==e&&o.push(r)}return o},updateAreas:function(o){var r=o.length;if(r>1)for(var e,t,n=0;r>n;n++){var i,d=o[n];d.coords.x1=-1,d.coords.x2=-1,0==n?(i=o[n+1],this._updateArea(d),this._updateArea(i),e=d.coords.x+d.node.offsetWidth,t=i.coords.x,d.coords.x2=e+(t-e)/2):n==r-1?d.coords.x1=o[n-1].coords.x2:(i=o[n+1],this._updateArea(i),e=d.coords.x+d.node.offsetWidth,t=i.coords.x,d.coords.x1=o[n-1].coords.x2,d.coords.x2=e+(t-e)/2)}},_updateArea:function(o){var r=t.position(o.node,!0);o.coords.x=r.x,o.coords.y=r.y},initItems:function(o){e.forEach(o.items,function(o){var r=o.item.node,e=t.position(r,!0),n=e.y+e.h/2;o.y=n}),o.initItems=!0},refreshItems:function(o,r,e,t){if(-1!=r&&o&&e&&e.h){var n=e.h;o.margin&&(n+=o.margin.t);for(var i=o.items.length,d=r;i>d;d++){var a=o.items[d];t?a.y+=n:a.y-=n}}},getDragPoint:function(o,r,e){var t=o.y;return this._oldYPoint&&(t>this._oldYPoint?(this._oldBehaviour="down",t+=r.h):t<=this._oldYPoint&&(this._oldBehaviour="up")),this._oldYPoint=t,{x:o.x+r.w/2,y:t}},getTargetArea:function(o,r,e){var t=0,n=r.x,i=o.length;if(i>1){var d=0,a="right",s=!1;if(-1==e||arguments.length<3?s=!0:this._checkInterval(o,e,n)?t=e:(this._oldXPoint<n?d=e+1:(d=e-1,i=0,a="left"),s=!0),s)if("right"===a){for(var c=d;i>c;c++)if(this._checkInterval(o,c,n)){t=c;break}}else for(var c=d;c>=i;c--)if(this._checkInterval(o,c,n)){t=c;break}}return this._oldXPoint=n,t},_checkInterval:function(o,r,e){var t=o[r].coords;if(-1==t.x1){if(e<=t.x2)return!0}else if(-1==t.x2){if(e>t.x1)return!0}else if(t.x1<e&&e<=t.x2)return!0;return!1},getDropIndex:function(o,r){var e=o.items.length,t=(o.coords,r.y);if(e>0)for(var n=0;e>n;n++){if(t<o.items[n].y)return n;if(n==e-1)return-1}return-1},destroy:function(){}});return dojox.mdnd.areaManager()._dropMode=new dojox.mdnd.dropMode.VerticalDropMode,n});