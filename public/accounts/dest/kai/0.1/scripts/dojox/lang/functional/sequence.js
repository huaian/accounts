define("dojox/lang/functional/sequence",["dojo/_base/kernel","dojo/_base/lang","./lambda"],function(a,l,n){return l.mixin(n,{repeat:function(l,e,o,r){r=r||a.global,e=n.lambda(e);var u=new Array(l),t=1;for(u[0]=o;l>t;u[t]=o=e.call(r,o),++t);return u},until:function(l,e,o,r){r=r||a.global,e=n.lambda(e),l=n.lambda(l);for(var u=[];!l.call(r,o);u.push(o),o=e.call(r,o));return u}}),n});