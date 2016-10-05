define("dojox/mobile/app/SceneController",["dojo","dijit","dojox","dojo/require!dojox/mobile/_base"],function(e,t,s){e.provide("dojox.mobile.app.SceneController"),e.experimental("dojox.mobile.app.SceneController"),e.require("dojox.mobile._base"),function(){var t=s.mobile.app,o={};e.declare("dojox.mobile.app.SceneController",s.mobile.View,{stageController:null,keepScrollPos:!1,init:function(s,i){this.sceneName=s,this.params=i;var n=t.resolveTemplate(s);return this._deferredInit=new e.Deferred,o[s]?this._setContents(o[s]):e.xhrGet({url:n,handleAs:"text"}).addCallback(e.hitch(this,this._setContents)),this._deferredInit},_setContents:function(i){o[this.sceneName]=i,this.domNode.innerHTML="<div>"+i+"</div>";for(var n="",r=this.sceneName.split("-"),a=0;a<r.length;a++)n+=r[a].substring(0,1).toUpperCase()+r[a].substring(1);n+="Assistant",this.sceneAssistantName=n;var l=this;s.mobile.app.loadResourcesForScene(this.sceneName,function(){if("undefined"!=typeof e.global[n])l._initAssistant();else{var s=t.resolveAssistant(l.sceneName);e.xhrGet({url:s,handleAs:"text"}).addCallback(function(t){try{e.eval(t)}catch(s){throw s}l._initAssistant()})}})},_initAssistant:function(){var t=e.getObject(this.sceneAssistantName);if(!t)throw Error("Unable to resolve scene assistant "+this.sceneAssistantName);this.assistant=new t(this.params),this.assistant.controller=this,this.assistant.domNode=this.domNode.firstChild,this.assistant.setup(),this._deferredInit.callback()},query:function(t,s){return e.query(t,s||this.domNode)},parse:function(e){for(var t=this._widgets=s.mobile.parser.parse(e||this.domNode,{controller:this}),o=0;o<t.length;o++)t[o].set("controller",this)},getWindowSize:function(){return{w:e.global.innerWidth,h:e.global.innerHeight}},showAlertDialog:function(t){var o=(e.marginBox(this.assistant.domNode),new s.mobile.app.AlertDialog(e.mixin(t,{controller:this})));this.assistant.domNode.appendChild(o.domNode),o.show()},popupSubMenu:function(e){var t=new s.mobile.app.ListSelector({controller:this,destroyOnHide:!0,onChoose:e.onChoose});this.assistant.domNode.appendChild(t.domNode),t.set("data",e.choices),t.show(e.fromNode)}})}()});