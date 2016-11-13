define("dojox/mobile/migrationAssist",["dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/ready","dijit/_Container","dijit/_WidgetBase","./_ItemBase","./common","./FixedSplitterPane","./Heading","./iconUtils","./ListItem","./RoundRect","./SpinWheel","./SpinWheelSlot","./SwapView","./TabBarButton","./ToolBarButton","./View"],function(e,t,s,o,i,c,n,r,a,l,d,h,f,u,m,b,p,g,y,x,N,k){var S,v=function(){var e=function(e,t){return e[t]||e.srcNodeRef&&e.srcNodeRef.getAttribute(t)};this.dispatch=function(e,t){var s=e.replace(/.*\./,"");this["check"+s]&&this["check"+s](t)},this.checkCarousel=function(e){},this.checkFixedSplitter=function(e){if(!this._fixedSplitter_css_checked){this._fixedSplitter_css_checked=!0;var t=i.create("div",{className:"mblFixedSplitter"},s.body());0==c.get(t,"height")&&i.create("link",{href:"../themes/android/FixedSplitter.css",type:"text/css",rel:"stylesheet"},s.doc.getElementsByTagName("head")[0]),s.body().removeChild(t),setTimeout(function(){e.resize()},1e3)}},this.checkFixedSplitterPane=function(e){},this.checkFixedSplitter=function(e){if(!this._fixedSplitter_css_checked){this._fixedSplitter_css_checked=!0;var t=i.create("div",{className:"mblFixedSplitter"},s.body());0==c.get(t,"height")&&i.create("link",{href:"../themes/android/FixedSplitter.css",type:"text/css",rel:"stylesheet"},s.doc.getElementsByTagName("head")[0]),s.body().removeChild(t),setTimeout(function(){e.resize()},1e3)}},this.checkListItem=function(e){void 0!==e.sync||e.srcNodeRef&&e.srcNodeRef.getAttribute("sync"),(void 0!==e.btnClass||e.srcNodeRef&&e.srcNodeRef.getAttribute("btnClass"))&&(e.rightIcon=e.btnClass||e.srcNodeRef&&e.srcNodeRef.getAttribute("btnClass")),(void 0!==e.btnClass2||e.srcNodeRef&&e.srcNodeRef.getAttribute("btnClass2"))&&(e.rightIcon2=e.btnClass2||e.srcNodeRef&&e.srcNodeRef.getAttribute("btnClass2"))},this.checkSpinWheelSlot=function(e){if(e.labels&&e.labels[0]&&"["===e.labels[0].charAt(0))for(var t=0;t<e.labels.length;t++)e.labels[t]=e.labels[t].replace(/^\[*[\'\"]*/,""),e.labels[t]=e.labels[t].replace(/[\'\"]*\]*$/,"")},this.checkSwapView=function(e){var t=e.srcNodeRef;if(t){t.getAttribute("dojoType")||t.getAttribute("data-dojo-type")}},this.checkSwitch=function(e){"mblItemSwitch"===e["class"]},this.checkTabBar=function(t){"segmentedControl"===e(t,"barType")&&i.create("style",{innerHTML:".iphone_theme .mblTabBarSegmentedControl .mblTabBarButtonIconArea { display: none; }"},s.doc.getElementsByTagName("head")[0])},this.checkTabBarButton=function(e){0===(e["class"]||"").indexOf("mblDomButton")&&(e.icon=e["class"],e["class"]="",e.srcNodeRef&&(e.srcNodeRef.className=""))},this.checkToolBarButton=function(e){0===(e["class"]||"").indexOf("mblColor")&&(e.defaultColor=e["class"],e["class"]="",e.srcNodeRef&&(e.srcNodeRef.className="")),0===(e["class"]||"").indexOf("mblDomButton")&&(e.icon=e["class"],e["class"]="",e.srcNodeRef&&(e.srcNodeRef.className=""))}};dojox.mobile.FlippableView=y;var B=new v;a.prototype.postMixInProperties=function(){B.dispatch(this.declaredClass,this),dojo.forEach([h,f,b,p,x,N,k],function(e){this.declaredClass!==e.prototype.declaredClass&&this instanceof e&&B.dispatch(e.prototype.declaredClass,this)},this)};var C=function(e){t.extend(e,{select:function(){e.prototype.set.apply(this,["selected",!arguments[0]])},deselect:function(){this.select(!0)}})};C(N),C(x),t.extend(m,{set:function(e,t){"btnClass"===e?e="rightIcon":"btnClass2"===e&&(e="rightIcon2"),a.prototype.set.apply(this,[e,t])}}),t.extend(p,{getValue:function(){return this.get("values")},setValue:function(e){return this.set("values",e)}}),t.extend(g,{getValue:function(){return this.get("value")},getKey:function(){return this.get("key")},setValue:function(e){return this.set("value",e)}}),t.mixin(d,{createDomButton:function(){return u.createDomButton.apply(this,arguments)}});var R,_,j=[],T=s.doc.styleSheets;for(R=0;R<T.length;R++)if(!T[R].href){var w=T[R].cssRules||T[R].imports;if(w)for(_=0;_<w.length;_++)w[_].href&&j.push(w[_].href)}var A=s.doc.getElementsByTagName("link");for(R=0;R<A.length;R++)j.push(A[R].href);for(R=0;R<j.length;R++)-1!==j[R].indexOf("/iphone/")?S="iphone":-1!==j[R].indexOf("/android/")?S="android":-1!==j[R].indexOf("/blackberry/")?S="blackberry":-1!==j[R].indexOf("/custom/")&&(S="custom"),o.add(s.doc.documentElement,S+"_theme"),j[R].match(/themes\/common\/(FixedSplitter.css)|themes\/common\/(SpinWheel.css)/);return n(function(){dojo.hash&&(dojo.require?dojo.require("dojox.mobile.bookmarkable"):require(["dojox/mobile/bookmarkable"]))}),B});