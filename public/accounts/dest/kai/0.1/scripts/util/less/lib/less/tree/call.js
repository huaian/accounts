define("util/less/lib/less/tree/call",["dojo","dijit","dojox"],function(n,e,t){!function(n){n.Call=function(n,e,t,i){this.name=n,this.args=e,this.index=t,this.filename=i},n.Call.prototype={eval:function(e){var t,i=this.args.map(function(n){return n.eval(e)});if(this.name in n.functions)try{if(t=n.functions[this.name].apply(n.functions,i),null!=t)return t}catch(s){throw{type:s.type||"Runtime",message:"error evaluating function `"+this.name+"`"+(s.message?": "+s.message:""),index:this.index,filename:this.filename}}return new n.Anonymous(this.name+"("+i.map(function(n){return n.toCSS(e)}).join(", ")+")")},toCSS:function(n){return this.eval(n).toCSS()}}}(require("../tree"))});