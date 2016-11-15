define("dstore/Trackable",["dojo/_base/lang","dojo/_base/declare","dojo/aspect","dojo/when","dojo/promise/all","dojo/_base/array","dojo/on"],function(t,e,n,r,a,i,o){function s(t,e){return{start:t,count:e-t}}function u(t,e,n){for(var r=t.length-1;r>=0;--r){var a=t[r],i=a.start,o=i+a.count;if(e>o)return void t.splice(r+1,0,s(e,n));n>=i&&(e=Math.min(e,i),n=Math.max(n,o),t.splice(r,1))}t.unshift(s(e,n))}function l(t,e,n){for(var r,a=0;r=t[a];++a){var i=r.start,o=i+r.count;if(i>=e){if(!(n>=o))return r.start=n,void(r.count=o-r.start);t.splice(a,1)}else if(o>e){if(n>i)return void t.splice(a,1,s(i,e),s(n,o));r.count=e-r.start}}}var f=0,c={track:function(){function a(){return function(){var t=this,e=this.inherited(arguments);return r(e,function(e){e=t._results=e.slice(),t._partialResults&&(t._partialResults=null),t._ranges=[],u(t._ranges,0,e.length)}),e}}function s(){return function(t){var e=this,n=t.start,a=t.end,i=this.inherited(arguments);return this._results||r(i,function(t){return r(t.totalLength,function(r){var i=e._partialResults||(e._partialResults=[]);a=Math.min(a,n+t.length),i.length=r;var o=[n,a-n].concat(t);return i.splice.apply(i,o),u(e._ranges,n,a),t})}),i}}function c(e,n){f++;var a=n.target;n=t.delegate(n,x[e]),r(p._results||p._partialResults,function(t){function r(){var t=p["on_tracked"+e];t&&t.call(p,n)}if(!t)return void r();var o,s,u,l,f=p._ranges,c="id"in n?n.id:d.getIdentity(a),h=-1,g=-1,v=-1,x=-1;if("delete"===e||"update"===e)for(o=0;-1===h&&o<f.length;++o)for(l=f[o],s=l.start,u=s+l.count;u>s;++s){var b=t[s];if(d.getIdentity(b)==c){for(h=n.previousIndex=s,g=o,t.splice(h,1),l.count--,s=o+1;s<f.length;++s)f[s].start--;break}}if("add"===e||"update"===e){if(_){if(_([a]).length){for(var m,y,R,M=0,j=f.length-1,k=-1;j>=M&&-1===v;)o=M+Math.round((j-M)/2),l=f[o],m=t.slice(l.start,l.start+l.count),"beforeId"in n&&(k=null===n.beforeId?m.length:I(m,n.beforeId)),-1===k&&(k=h>=Math.max(0,l.start-1)&&h<=l.start+l.count?h:d.defaultNewToStart?0:m.length),m.splice(k,0,a),y=i.indexOf(_(m),a),R=l.start+y,0===y&&0!==l.start?j=o-1:y>=m.length-1&&R<t.length?M=o+1:(v=R,x=o);if(-1===v&&M>0&&M<f.length)var S=!0}}else{var l,w=-1;if("beforeId"in n)if(null===n.beforeId)v=t.length,w=f.length-1;else for(o=0,u=f.length;-1===x&&u>o;++o)l=f[o],v=I(t,n.beforeId,l.start,l.start+l.count),-1!==v&&(x=o);else"update"===e?(v=h,x=g):d.defaultNewToStart?(v=0,w=0):(v=t.length,w=f.length-1);-1!==w&&-1===x&&(l=f[w],l&&l.start<=v&&v<=l.start+l.count&&(x=w))}if(v>-1&&x>-1)for(n.index=v,t.splice(v,0,a),f[x].count++,o=x+1;o<f.length;++o)f[o].start++;else if(S)for(n.beforeIndex=f[M].start,o=M;o<f.length;++o)f[o].start++}n.totalLength=t.length,r()})}var d=this.store||this,h=[],g={add:1,update:1,"delete":1};for(var v in g)h.push(this.on(v,function(t){return function(e){c(t,e)}}(v)));var p=e.safeMixin(t.delegate(this),{_ranges:[],fetch:a(),fetchRange:s(),releaseRange:function(t,e){if(this._partialResults){l(this._ranges,t,e);for(var n=t;e>n;++n)delete this._partialResults[n]}},on:function(t,e){var r=this,a=this.getInherited(arguments);return o.parse(p,t,e,function(t,i){return i in g?n.after(p,"on_tracked"+i,e,!0):a.call(r,i,e)})},tracking:{remove:function(){for(;h.length>0;)h.pop().remove();this.remove=function(){}}},track:null});this.fetchSync&&(e.safeMixin(p,{fetchSync:a(),fetchRangeSync:s()}),p.fetchSync());var _;i.forEach(this.queryLog,function(t){var e=_,n=t.querier;n&&(_=e?function(t){return n(e(t))}:n)});var x={add:{index:void 0},update:{previousIndex:void 0,index:void 0},"delete":{previousIndex:void 0}},I=function(t,e,n,r){n=void 0!==n?n:0,r=void 0!==r?r:t.length;for(var a=n;r>a;++a)if(d.getIdentity(t[a])===e)return a;return-1};return p}},d=e(null,c);return d.create=function(n,r){return n=e.safeMixin(t.delegate(n),c),e.safeMixin(n,r),n},d});