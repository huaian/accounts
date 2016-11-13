// Copyright (c) 2005  Tom Wu
// All Rights Reserved.
// See "LICENSE-BigInteger" for details.

define("dojox/math/random/prng4",["dojo","dojox"],function(n,t){function i(){this.i=0,this.j=0,this.S=new Array(256)}return n.getObject("math.random.prng4",!0,t),n.extend(i,{init:function(n){var t,i,r,o=this.S,h=n.length;for(t=0;256>t;++t)o[t]=t;for(i=0,t=0;256>t;++t)i=i+o[t]+n[t%h]&255,r=o[t],o[t]=o[i],o[i]=r;this.i=0,this.j=0},next:function(){var n,t,i,r=this.S;return this.i=t=this.i+1&255,this.j=i=this.j+r[t]&255,n=r[t],r[t]=r[i],r[i]=n,r[n+r[t]&255]}}),t.math.random.prng4=function(){return new i},t.math.random.prng4.size=256,t.math.random.prng4});