define("dojox/gfx/gradient",["dojo/_base/lang","./matrix","dojo/_base/Color"],function(o,t,e){function r(o,e,r,f,l,n){var s=t.multiplyPoint(r,o,e),c=t.multiplyPoint(f,s);return{r:s,p:c,o:t.multiplyPoint(l,c).x/n}}function f(o,t){return o.o-t.o}var l=o.getObject("dojox.gfx.gradient",!0),n=e;return l.rescale=function(o,t,r){var f,l=o.length,s=t>r;if(s){var c=t;t=r,r=c}if(!l)return[];if(r<=o[0].offset)f=[{offset:0,color:o[0].color},{offset:1,color:o[0].color}];else if(t>=o[l-1].offset)f=[{offset:0,color:o[l-1].color},{offset:1,color:o[l-1].color}];else{var i,y,x,u=r-t;for(f=[],0>t&&f.push({offset:0,color:new n(o[0].color)}),x=0;l>x&&(i=o[x],!(i.offset>=t));++x);for(x?(y=o[x-1],f.push({offset:0,color:e.blendColors(new n(y.color),new n(i.color),(t-y.offset)/(i.offset-y.offset))})):f.push({offset:0,color:new n(i.color)});l>x&&(i=o[x],!(i.offset>=r));++x)f.push({offset:(i.offset-t)/u,color:new n(i.color)});l>x?(y=o[x-1],f.push({offset:1,color:e.blendColors(new n(y.color),new n(i.color),(r-y.offset)/(i.offset-y.offset))})):f.push({offset:1,color:new n(o[l-1].color)})}if(s)for(f.reverse(),x=0,l=f.length;l>x;++x)i=f[x],i.offset=1-i.offset;return f},l.project=function(o,e,n,s,c,i){o=o||t.identity;var y=t.multiplyPoint(o,e.x1,e.y1),x=t.multiplyPoint(o,e.x2,e.y2),u=Math.atan2(x.y-y.y,x.x-y.x),a=t.project(x.x-y.x,x.y-y.y),p=t.multiplyPoint(a,y),d=t.multiplyPoint(a,x),h=new t.Matrix2D([t.rotate(-u),{dx:-p.x,dy:-p.y}]),g=t.multiplyPoint(h,d).x,m=[r(n.x,n.y,o,a,h,g),r(s.x,s.y,o,a,h,g),r(n.x,s.y,o,a,h,g),r(s.x,n.y,o,a,h,g)].sort(f),w=m[0].o,P=m[3].o,j=l.rescale(e.colors,w,P);Math.atan2(m[3].r.y-m[0].r.y,m[3].r.x-m[0].r.x);return{type:"linear",x1:m[0].p.x,y1:m[0].p.y,x2:m[3].p.x,y2:m[3].p.y,colors:j,angle:u}},l});