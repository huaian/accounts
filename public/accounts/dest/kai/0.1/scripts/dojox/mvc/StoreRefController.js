define("dojox/mvc/StoreRefController",["dojo/_base/declare","dojo/_base/lang","dojo/when","./getStateful","./ModelRefController"],function(e,t,r,o,n){return e("dojox.mvc.StoreRefController",n,{store:null,getStatefulOptions:null,_refSourceModelProp:"model",queryStore:function(e,n){if((this.store||{}).query){this._queryObserveHandle&&this._queryObserveHandle.cancel();var s=this,i=this.store.query(e,n),u=r(i,function(e){return s._beingDestroyed?void 0:(e=o(e,s.getStatefulOptions),s.set(s._refSourceModelProp,e),e)});u.then&&(u=t.delegate(u));for(var d in i)isNaN(d)&&i.hasOwnProperty(d)&&t.isFunction(i[d])&&(u[d]=i[d]);return u}},getStore:function(e,t){if((this.store||{}).get){this._queryObserveHandle&&this._queryObserveHandle.cancel();var n=this;return result=r(this.store.get(e,t),function(e){return n._beingDestroyed?void 0:(e=o(e,n.getStatefulOptions),n.set(n._refSourceModelProp,e),e)}),result}},putStore:function(e,t){return(this.store||{}).put?this.store.put(e,t):void 0},addStore:function(e,t){return(this.store||{}).add?this.store.add(e,t):void 0},removeStore:function(e,t){return(this.store||{}).remove?this.store.remove(e,t):void 0}})});