define("dojox/html/ext-dojo/style",["dojo/_base/kernel","dojo/dom-style","dojo/_base/lang","dojo/_base/html","dojo/_base/sniff","dojo/_base/window","dojo/dom","dojo/dom-construct","dojo/dom-style","dojo/dom-attr"],function(t,r,e,a,o,s,n,i,l,f){t.experimental("dojox.html.ext-dojo.style");var m=(e.getObject("dojox.html.ext-dojo.style",!0),e.getObject("dojox.html"));return e.mixin(m["ext-dojo"].style,{supportsTransform:!0,_toPx:function(t){var r=a.style,e=this._conversion;return"number"==typeof t?t+"px":-1!=t.toLowerCase().indexOf("px")?t:(!e.parentNode&&i.place(e,s.body()),r(e,"margin",t),r(e,"margin"))},init:function(){var t=s.doc.documentElement.style,r=m["ext-dojo"].style,e=l.get,a=l.set;l.get=function(t,a){var o="transform"==a,s="transformOrigin"==a;return o?r.getTransform(t):s?r.getTransformOrigin(t):e.apply(this,arguments)},l.set=function(t,e,o){var s="transform"==e,i="transformOrigin"==e,l=n.byId(t);return s?r.setTransform(l,o,!0):i?r.setTransformOrigin(l,o):a.apply(this,arguments)};for(var f=0,p=["WebkitT","MozT","OT","msT","t"];f<p.length;f++)"undefined"!=typeof t[p[f]+"ransform"]&&(this.tPropertyName=p[f]+"ransform"),"undefined"!=typeof t[p[f]+"ransformOrigin"]&&(this.toPropertyName=p[f]+"ransformOrigin");this.tPropertyName?(this.setTransform=function(t,r){return a(t,this.tPropertyName,r)},this.getTransform=function(t){return e(t,this.tPropertyName)}):o("ie")&&(this.setTransform=this._setTransformFilter,this.getTransform=this._getTransformFilter),this.toPropertyName?(this.setTransformOrigin=function(t,r){return a(t,this.toPropertyName,r)},this.getTransformOrigin=function(t){return e(t,this.toPropertyName)}):o("ie")?(this.setTransformOrigin=this._setTransformOriginFilter,this.getTransformOrigin=this._getTransformOriginFilter):this.supportsTransform=!1,this._conversion=i.create("div",{style:{position:"absolute",top:"-100px",left:"-100px",fontSize:0,width:"0",backgroundPosition:"50% 50%"}})},_notSupported:function(){},_setTransformOriginFilter:function(t,r){for(var o=e.trim(r).replace(" top"," 0").replace("left ","0 ").replace(" center","50%").replace("center ","50% ").replace(" bottom"," 100%").replace("right ","100% ").replace(/\s+/," "),s=o.split(" "),i=n.byId(t),l=this.getTransform(i),f=!0,m=0;m<s.length;m++)f=f&&/^0|(\d+(%|px|pt|in|pc|mm|cm))$/.test(s[m]),-1==s[m].indexOf("%")&&(s[m]=this._toPx(s[m]));return!f||!s.length||s.length>2?r:(a.attr(i,"dojo-transform-origin",s.join(" ")),l&&this.setTransform(t,l),r)},_getTransformOriginFilter:function(t){return a.attr(t,"dojo-transform-origin")||"50% 50%"},_setTransformFilter:function(t,r){var e=r.replace(/\s/g,""),s=n.byId(t),i=e.split(")"),l=1,m=1,p="DXImageTransform.Microsoft.Matrix",d=f.has,g=a.attr,c=Math.PI,h=Math.cos,x=Math.sin,u=Math.tan,y=Math.max,j=Math.min,b=Math.abs,T=c/180,O=c/200,I="",v="",M=[],k=0,_=0,w=0,F=0,P=0,X=0,Y=0,N=1,z=0,S=0,D=1,L=0,B=0,C=[N,z,S,D,L,B],E=!1,R=a.style,W="absolute"==R(s,"position")?"absolute":"relative",$=R(s,"width")+R(s,"paddingLeft")+R(s,"paddingRight"),q=R(s,"height")+R(s,"paddingTop")+R(s,"paddingBottom"),A=this._toPx;!d(s,"dojo-transform-origin")&&this.setTransformOrigin(s,"50% 50%");for(var G=0,H=i.length;H>G;G++){switch(M=i[G].match(/matrix|rotate|scaleX|scaleY|scale|skewX|skewY|skew|translateX|translateY|translate/),v=M?M[0]:""){case"matrix":I=i[G].replace(/matrix\(|\)/g,"");var J=I.split(",");N=C[0]*J[0]+C[1]*J[2],z=C[0]*J[1]+C[1]*J[3],S=C[2]*J[0]+C[3]*J[2],D=C[2]*J[1]+C[3]*J[3],L=C[4]+J[4],B=C[5]+J[5];break;case"rotate":I=i[G].replace(/rotate\(|\)/g,""),l=-1!=I.indexOf("deg")?T:-1!=I.indexOf("grad")?O:1,Y=parseFloat(I)*l;var K=x(Y),Q=h(Y);N=C[0]*Q+C[1]*K,z=-C[0]*K+C[1]*Q,S=C[2]*Q+C[3]*K,D=-C[2]*K+C[3]*Q;break;case"skewX":I=i[G].replace(/skewX\(|\)/g,""),l=-1!=I.indexOf("deg")?T:-1!=I.indexOf("grad")?O:1;var U=u(parseFloat(I)*l);N=C[0],z=C[0]*U+C[1],S=C[2],D=C[2]*U+C[3];break;case"skewY":I=i[G].replace(/skewY\(|\)/g,""),l=-1!=I.indexOf("deg")?T:-1!=I.indexOf("grad")?O:1,U=u(parseFloat(I)*l),N=C[0]+C[1]*U,z=C[1],S=C[2]+C[3]*U,D=C[3];break;case"skew":I=i[G].replace(/skew\(|\)/g,"");var V=I.split(",");V[1]=V[1]||"0",l=-1!=V[0].indexOf("deg")?T:-1!=V[0].indexOf("grad")?O:1,m=-1!=V[1].indexOf("deg")?T:-1!=V[1].indexOf("grad")?O:1;var Z=u(parseFloat(V[0])*l),tt=u(parseFloat(V[1])*m);N=C[0]+C[1]*tt,z=C[0]*Z+C[1],S=C[2]+C[3]*tt,D=C[2]*Z+C[3];break;case"scaleX":I=parseFloat(i[G].replace(/scaleX\(|\)/g,""))||1,N=C[0]*I,z=C[1],S=C[2]*I,D=C[3];break;case"scaleY":I=parseFloat(i[G].replace(/scaleY\(|\)/g,""))||1,N=C[0],z=C[1]*I,S=C[2],D=C[3]*I;break;case"scale":I=i[G].replace(/scale\(|\)/g,"");var rt=I.split(",");rt[1]=rt[1]||rt[0],N=C[0]*rt[0],z=C[1]*rt[1],S=C[2]*rt[0],D=C[3]*rt[1];break;case"translateX":I=parseInt(i[G].replace(/translateX\(|\)/g,""))||1,N=C[0],z=C[1],S=C[2],D=C[3],L=A(I),L&&g(s,"dojo-transform-matrix-tx",L);break;case"translateY":I=parseInt(i[G].replace(/translateY\(|\)/g,""))||1,N=C[0],z=C[1],S=C[2],D=C[3],B=A(I),B&&g(s,"dojo-transform-matrix-ty",B);break;case"translate":I=i[G].replace(/translate\(|\)/g,""),N=C[0],z=C[1],S=C[2],D=C[3];var et=I.split(",");et[0]=parseInt(A(et[0]))||0,et[1]=parseInt(A(et[1]))||0,L=et[0],B=et[1],L&&g(s,"dojo-transform-matrix-tx",L),B&&g(s,"dojo-transform-matrix-ty",B)}C=[N,z,S,D,L,B]}var at=j($*N+q*z,j(j($*N,q*z),0)),ot=j($*S+q*D,j(j($*S,q*D),0));if(w=-at,F=-ot,o("ie")<8){if(s.style.zoom="1","absolute"!=W){var st=R(t.parentNode,"width"),nt=b($*N),it=b(q*z),lt=y(nt+it,y(y(it,nt),0));w-=(lt-$)/2-(st>lt?0:(lt-st)/2)}}else 8==o("ie")&&"auto"==R(s,"zIndex")&&(s.style.zIndex="0");try{E=!!s.filters.item(p)}catch(ft){E=!1}E?(s.filters.item(p).M11=N,s.filters.item(p).M12=z,s.filters.item(p).M21=S,s.filters.item(p).M22=D,s.filters.item(p).filterType="bilinear",s.filters.item(p).Dx=0,s.filters.item(p).Dy=0,s.filters.item(p).sizingMethod="auto expand"):s.style.filter+=" progid:"+p+"(M11="+N+",M12="+z+",M21="+S+",M22="+D+",FilterType='bilinear',Dx=0,Dy=0,sizingMethod='auto expand')",L=parseInt(g(s,"dojo-transform-matrix-tx")||"0"),B=parseInt(g(s,"dojo-transform-matrix-ty")||"0");var mt=g(s,"dojo-transform-origin").split(" ");for(G=0;2>G;G++)mt[G]=mt[G]||"50%";return P=-1!=mt[0].toString().indexOf("%")?$*parseInt(mt[0])*.01:mt[0],X=-1!=mt[1].toString().indexOf("%")?q*parseInt(mt[1])*.01:mt[1],d(s,"dojo-startX")?k=parseInt(g(s,"dojo-startX")):(k=parseInt(R(s,"left")),g(s,"dojo-startX","absolute"==W?k:"0")),d(s,"dojo-startY")?_=parseInt(g(s,"dojo-startY")):(_=parseInt(R(s,"top")),g(s,"dojo-startY","absolute"==W?_:"0")),R(s,{position:W,left:k-parseInt(w)+parseInt(P)-((parseInt(P)-L)*N+(parseInt(X)-B)*z)+"px",top:_-parseInt(F)+parseInt(X)-((parseInt(P)-L)*S+(parseInt(X)-B)*D)+"px"}),r},_getTransformFilter:function(t){try{var r=n.byId(t),e=r.filters.item(0);return"matrix("+e.M11+", "+e.M12+", "+e.M21+", "+e.M22+", "+(a.attr(t,"dojo-transform-tx")||"0")+", "+(a.attr(t,"dojo-transform-ty")||"0")+")"}catch(o){return"matrix(1, 0, 0, 1, 0, 0)"}},setTransform:function(){this._notSupported()},setTransformOrigin:function(){this._notSupported()}}),m["ext-dojo"].style.init(),a.style});