define("util/less/lib/less/tree/rule",["dojo","dijit","dojox"],function(t,i,e){!function(t){t.Rule=function(i,e,n,o,s){this.name=i,this.value=e instanceof t.Value?e:new t.Value([e]),this.important=n?" "+n.trim():"",this.index=o,this.inline=s||!1,"@"===i.charAt(0)?this.variable=!0:this.variable=!1},t.Rule.prototype.toCSS=function(t){return this.variable?"":this.name+(t.compress?":":": ")+this.value.toCSS(t)+this.important+(this.inline?"":";")},t.Rule.prototype.eval=function(i){return new t.Rule(this.name,this.value.eval(i),this.important,this.index,this.inline)},t.Rule.prototype.makeImportant=function(){return new t.Rule(this.name,this.value,"!important",this.index,this.inline)},t.Shorthand=function(t,i){this.a=t,this.b=i},t.Shorthand.prototype={toCSS:function(t){return this.a.toCSS(t)+"/"+this.b.toCSS(t)},eval:function(){return this}}}(require("../tree"))});