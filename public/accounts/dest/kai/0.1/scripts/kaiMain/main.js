define("kaiMain/main",["module","dojo/Deferred","dojo/on"],function(i,e,n){"use strict";var a=document,t=window,o=new e;require({waitSeconds:0,packages:[{name:"react",location:kaiPrefx+"./kai/0.1/scripts/react",main:"react"},{name:"underscore",location:kaiPrefx+"./kai/0.1/scripts/underscore",main:"underscore-1.8.3"},{name:"jquery",location:kaiPrefx+"./kai/0.1/scripts/jquery",main:"jquery"},{name:"ti_net",location:"http://10.21.2.76/jws/sourceCode"},{name:"res",location:kaiPrefx+"./kai/0.1/res"},{name:"style",location:kaiPrefx+"./kai/0.1/style"},{name:"ui",location:kaiPrefx+"./kai/0.1/scripts/ui"},{name:"common",location:kaiPrefx+"./kai/0.1/scripts/common"},{name:"3rdlibs",location:kaiPrefx+"./kai/0.1/scripts/3rdlibs"},{name:"topic",location:kaiPrefx+"./kai/0.1/scripts/topic"},{name:"cutil",location:kaiPrefx+"./kai/0.1/scripts/cutil"},{name:"plugin",location:kaiPrefx+"./kai/0.1/scripts/plugin"},{name:"vendors",location:kaiPrefx+"./kai/0.1/scripts/vendors"},{name:"data",location:kaiPrefx+"./kai/0.1/scripts/data"},{name:"page",location:kaiPrefx+"./kai/0.1/scripts/page"},{name:"kaiView",location:kaiPrefx+"./kai/0.1/scripts/kaiView"},{name:"controller",location:kaiPrefx+"./kai/0.1/scripts/controller"},{name:"dijit",location:kaiPrefx+"./kai/0.1/scripts/dijit",main:"main",lib:".",dependencies:{dojo:"1.10.4"}},{name:"dojox",location:kaiPrefx+"./kai/0.1/scripts/dojox",main:"main",lib:".",dependencies:{dojo:"1.10.4",dijit:"1.10.4"}},{name:"doh",location:kaiPrefx+"./kai/0.1/scripts/util/doh",main:"main",lib:"."},{name:"dstore",location:kaiPrefx+"./kai/0.1/scripts/dstore",main:"Store",lib:"."},{name:"dgrid",location:kaiPrefx+"./kai/0.1/scripts/dgrid",lib:".",main:"OnDemandGrid"},{name:"xstyle",location:kaiPrefx+"./kai/0.1/scripts/xstyle",main:"main",lib:"."},{name:"put-selector",location:kaiPrefx+"./kai/0.1/scripts/put-selector",main:"main",lib:"."},{name:"demos",location:kaiPrefx+"./kai/0.1/scripts/demos",main:"main",lib:"."},{name:"custom",location:kaiPrefx+"./kai/0.1/scripts/custom",main:"main",lib:"."},{name:"bootstrap",location:kaiPrefx+"./kai/0.1/scripts/bootstrap",main:"main",lib:"."},{name:"widgets",location:kaiPrefx+"./kai/0.1/scripts/widgets"}],map:{"*":{cUtility:"cutil/c.util.common",cStore:"cLocalStore",CommonStore:"cCommonStore",css:"plugin/vendor/require-css/css",_:"underscore",$:"jquery","jquery.ui.widget":"plugin/vendor/jquery.ui.widget",fileUpload:"plugin/jquery.fileupload",text:"plugin/text"}},shim:{underscore:{exports:"_"},jquery:{exports:"$"},"3rdlibs/backbone":{deps:["underscore","jquery"],exports:"Backbone"},BootStrap:{deps:["jquery"]},F:{deps:["jquery"],exports:"Fastclick"},lazyload:{deps:["jquery"],exports:"lazyload"},zepto:{exports:"zepto"},"controller/initializer":{deps:["3rdlibs/backbone"]},swipe:{deps:["jquery"]},"ti_net/ccic2JwsClient":{deps:["ti_net/jWebSocket"]}}});var r=function(i){require({config:{"controller/initializer":i.projectConfig,"data/model/c.appBase.model":{interfaceConfig:i.interfaceConfig},"page/viewFactory":{viewExtension:i.viewExtension},"page/c.page.view":{pageConfig:i.pageConfig}}})},c=function(){function i(i){var e=new TrackObj;e=_.extend(e,i);var n=new Tracker(e);n.sendEvent(e.event)}var e={click:{eventName:"click",trackingData:"clk"},hover:{eventName:"mouseenter",trackingData:"hover"},blur:{eventName:"blur",trackingData:"blur"}},n=$(document);for(var a in e)!function(a){var t=a;n.on(e[t].eventName,"[data-tracking~="+t+"]",function(n){try{var a=$(n.currentTarget),o=a.data();if(!o.tracking)return;var r=a.attr("data-tracking-extend-info");_.isString(r)&&(r=JSON.parse(r)),r=r||{},o.trackingValue&&(r[o.trackingValue]=a.val());var c={key:o.trackingKey,entity:o.entity||a.text(),topic:o.topic,event:e[t].trackingData};c=_.extend({},c,r),i(c)}catch(s){}})}(a)},s=function(){if(dojoConfig.isH5){var i=a.documentElement,e="orientationchange"in window?"orientationchange":"resize",n=function(){var e=i.clientWidth;e&&(e>=640&&(e=640),i.style.fontSize=20*(e/320)+"px")};t.addEventListener&&t.addEventListener(e,n,!1),n();for(var o=document.getElementsByTagName("div"),r=0;r<o.length;r++)o[r].addEventListener("touchstart",function(){},!1);c()}else Kai.enableLeftWarning!==!1&&(window.onbeforeunload=function(){if(Kai.isLogin()){var i="确认退出?";return i}}),document.addEventListener("visibilitychange",function(){}),window.addEventListener("offline",function(i){Kai.showMessage("您已断开连接，请检查你的网络情况")}),window.addEventListener("online",function(i){Kai.showMessage("网络连接已恢复")})},l=function(i,e){var n=e.configUtil,a=e.initializer,t=n.getConfig(i);r(i),a.start(t.routes,{viewCollectionData:i.viewCollectionData}),s()};return require(["kaiView/config/views","3rdlibs/libs","cutil/c.util.config","controller/initializer","cutil/c.util.kai","dojo/has","plugin/c.plugins"],function(i,e,n,a,t,r){var c=function(){o.resolve({start:function(e){e.viewCollectionData=(i||[]).concat(e.viewCollectionData),l(e,{configUtil:n,initializer:a})}})};dojoConfig.isH5||dojoConfig.isH5!==!1&&t.getEnv().isH5?(dojoConfig.isH5=!0,r.add("isH5",function(){return!0},!0),require(["3rdlibs/fastclick","css!res/style/main_h5"],function(i,e){c()})):(r.add("isH5",function(){return!1},!0),dojoConfig.isH5=!1,require(["css!bootstrap/css/bootstrap","css!res/style/main_pc","css!dijit/themes/claro/claro"],function(){c()}))}),o});