define("dijit/Viewport",["dojo/Evented","dojo/on","dojo/domReady","dojo/sniff","dojo/window"],function(e,t,o,n,i){var r,a=new e;return o(function(){var e=i.getBox();if(a._rlh=t(window,"resize",function(){var t=i.getBox();(e.h!=t.h||e.w!=t.w)&&(e=t,a.emit("resize"))}),8==n("ie")){var o=screen.deviceXDPI;setInterval(function(){screen.deviceXDPI!=o&&(o=screen.deviceXDPI,a.emit("resize"))},500)}n("ios")&&(t(document,"focusin",function(e){r=e.target}),t(document,"focusout",function(e){r=null}))}),a.getEffectiveBox=function(e){var t=i.getBox(e),o=r&&r.tagName&&r.tagName.toLowerCase();if(n("ios")&&r&&!r.readOnly&&("textarea"==o||"input"==o&&/^(color|email|number|password|search|tel|text|url)$/.test(r.type))){t.h*=0==orientation||180==orientation?.66:.4;var a=r.getBoundingClientRect();t.h=Math.max(t.h,a.top+a.height)}return t},a});