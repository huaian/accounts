define("dojox/analytics/plugins/touchPress",["dojo/_base/lang","../_base","dojo/_base/config","dojo/_base/window","dojo/on","dojo/touch"],function(e,t,s,a,o,h){return t.plugins.touchPress=new function(){void 0===s.showTouchesDetails||s.showTouchesDetails?this.showTouchesDetails=!0:this.showTouchesDetails=!1,this.targetProps=s.targetProps||["id","className","nodeName","localName","href","spellcheck","lang"],this.textContentMaxChars=s.textContentMaxChars||50,this.addData=e.hitch(t,"addData","touch.press"),this.onTouchPress=function(e){this.addData(this.trimEvent(e))},this.addDataRelease=e.hitch(t,"addData","touch.release"),this.onTouchRelease=function(e){this.addDataRelease(this.trimEvent(e))},o(a.doc,h.press,e.hitch(this,"onTouchPress")),o(a.doc,h.release,e.hitch(this,"onTouchRelease")),this.handleTarget=function(e,t,s){var a=this.targetProps;e[s]={};for(var o=0;o<a.length;o++)("object"==typeof t||"function"==typeof t)&&a[o]in t&&("text"==a[o]||"textContent"==a[o]?t.localName&&"HTML"!=t.localName&&"BODY"!=t.localName&&(e[s][a[o]]=t[a[o]].substr(0,this.textContentMaxChars)):e[s][a[o]]=t[a[o]])},this.trimEvent=function(e){var t={};for(var s in e)switch(s){case"target":this.handleTarget(t,e[s],s);break;case"touches":if(0!==e[s].length&&(t["touches.length"]=e[s].length),this.showTouchesDetails)for(var a=0;a<e[s].length;a++)for(var o in e[s][a])switch(o){case"target":this.handleTarget(t,e[s][a].target,"touches["+a+"][target]");break;case"clientX":case"clientY":case"screenX":case"screenY":if(e[s][a]){var h=e[s][a][o];t["touches["+a+"]["+o+"]"]=h+""}}break;case"clientX":case"clientY":case"screenX":case"screenY":t[s]=e[s]}return t}}});