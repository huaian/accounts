define("plugin/custom/c.zepto.plugin",["jquery"],function(){var t=$.fn.html;$.fn.html=function(n){return void 0===n?this.length>0?this[0].innerHTML:null:t.call(this,n)};var n=$.fn.text;$.fn.text=function(t){return void 0===t?this.length>0?this[0].textContent:null:n.call(this,t)};var i=$.fn.data;$.fn.data=function(t,n){return"0"===this.attr("data-"+t)&&_.isUndefined(n)?"0":i.apply(this,arguments)},$.fn.serializeObject=function(){var t={},n=this.serializeArray();return $.each(n,function(){void 0!==t[this.name]?(t[this.name].push||(t[this.name]=[t[this.name]]),t[this.name].push(this.value||"")):t[this.name]=this.value||""}),t}});