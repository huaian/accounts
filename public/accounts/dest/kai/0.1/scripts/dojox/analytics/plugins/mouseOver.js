define("dojox/analytics/plugins/mouseOver",["dojo/_base/lang","../_base","dojo/_base/config","dojo/_base/window","dojo/on"],function(t,e,s,o,a){return e.plugins.mouseOver=new function(){this.watchMouse=s.watchMouseOver||!0,this.mouseSampleDelay=s.sampleDelay||2500,this.addData=t.hitch(e,"addData","mouseOver"),this.targetProps=s.targetProps||["id","className","localName","href","spellcheck","lang","textContent","value"],this.textContentMaxChars=s.textContentMaxChars||50,this.toggleWatchMouse=function(){return this._watchingMouse?(this._watchingMouse.remove(),void delete this._watchingMouse):void a(o.doc,"mousemove",t.hitch(this,"sampleMouse"))},this.watchMouse&&(a(o.doc,"mouseover",t.hitch(this,"toggleWatchMouse")),a(o.doc,"mouseout",t.hitch(this,"toggleWatchMouse"))),this.sampleMouse=function(e){return this._rateLimited||(this.addData("sample",this.trimMouseEvent(e)),this._rateLimited=!0,setTimeout(t.hitch(this,function(){this._rateLimited&&(this.trimMouseEvent(this._lastMouseEvent),delete this._lastMouseEvent,delete this._rateLimited)}),this.mouseSampleDelay)),this._lastMouseEvent=e,e},this.trimMouseEvent=function(t){var e={};for(var s in t)switch(s){case"target":var o=this.targetProps;e[s]={};for(var a=0;a<o.length;a++)("object"==typeof t[s]||"function"==typeof t[s])&&o[a]in t[s]&&("text"==o[a]||"textContent"==o[a]?t[s].localName&&"HTML"!=t[s].localName&&"BODY"!=t[s].localName&&(e[s][o[a]]=t[s][o[a]].substr(0,this.textContentMaxChars)):e[s][o[a]]=t[s][o[a]]);break;case"screenX":case"screenY":case"x":case"y":if(t[s]){var i=t[s];e[s]=i+""}}return e}}});