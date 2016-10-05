define("dojox/mobile/SimpleDialog",["dojo/_base/declare","dojo/_base/window","dojo/dom-class","dojo/dom-attr","dojo/dom-construct","dojo/on","dojo/touch","dijit/registry","./Pane","./iconUtils","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/SimpleDialog"],function(o,e,t,i,s,d,l,n,a,h,m,r){var c=o(m("dojo-bidi")?"dojox.mobile.NonBidiSimpleDialog":"dojox.mobile.SimpleDialog",a,{top:"auto",left:"auto",modal:!0,closeButton:!1,closeButtonClass:"mblDomButtonSilverCircleRedCross",tabIndex:"0",_setTabIndexAttr:"",baseClass:"mblSimpleDialog",_cover:[],buildRendering:function(){if(this.containerNode=s.create("div",{className:"mblSimpleDialogContainer"}),this.srcNodeRef)for(var o=0,e=this.srcNodeRef.childNodes.length;e>o;o++)this.containerNode.appendChild(this.srcNodeRef.removeChild(this.srcNodeRef.firstChild));if(this.inherited(arguments),i.set(this.domNode,"role","dialog"),this.containerNode.getElementsByClassName){var d=this.containerNode.getElementsByClassName("mblSimpleDialogTitle")[0];d&&(d.id=d.id||n.getUniqueId("dojo_mobile_mblSimpleDialogTitle"),i.set(this.domNode,"aria-labelledby",d.id));var l=this.containerNode.getElementsByClassName("mblSimpleDialogText")[0];l&&(l.id=l.id||n.getUniqueId("dojo_mobile_mblSimpleDialogText"),i.set(this.domNode,"aria-describedby",l.id))}t.add(this.domNode,"mblSimpleDialogDecoration"),this.domNode.style.display="none",this.domNode.appendChild(this.containerNode),this.closeButton&&(this.closeButtonNode=s.create("div",{className:"mblSimpleDialogCloseBtn "+this.closeButtonClass},this.domNode),h.createDomButton(this.closeButtonNode),this.connect(this.closeButtonNode,"onclick","_onCloseButtonClick")),this.connect(this.domNode,"onkeydown","_onKeyDown")},startup:function(){this._started||(this.inherited(arguments),e.body().appendChild(this.domNode))},addCover:function(){this._cover[0]?this._cover[0].style.display="":this._cover[0]=s.create("div",{className:"mblSimpleDialogCover"},e.body()),m("windows-theme")&&this.own(d(this._cover[0],l.press,function(){}))},removeCover:function(){this._cover[0].style.display="none"},_onCloseButtonClick:function(o){this.onCloseButtonClick(o)!==!1&&this.hide()},onCloseButtonClick:function(){},_onKeyDown:function(o){27==o.keyCode&&this.hide()},refresh:function(){var o,t=this.domNode;if(this.closeButton){var i=this.closeButtonNode,s=Math.round(i.offsetHeight/2);i.style.top=-s+"px",i.style.left=t.offsetWidth-s+"px"}"auto"===this.top?(o=e.global.innerHeight||e.doc.documentElement.clientHeight,t.style.top=Math.round((o-t.offsetHeight)/2)+"px"):t.style.top=this.top,"auto"===this.left?(o=e.global.innerWidth||e.doc.documentElement.clientWidth,t.style.left=Math.round((o-t.offsetWidth)/2)+"px"):t.style.left=this.left},show:function(){if(""!==this.domNode.style.display){this.modal&&this.addCover(),this.domNode.style.display="",this.resize(),this.refresh();var o;this.domNode.getElementsByClassName&&(o=this.domNode.getElementsByClassName("mblSimpleDialogButton")[0]);var e=o||this.closeButtonNode||this.domNode;this.defer(function(){e.focus()},1e3)}},hide:function(){"none"!==this.domNode.style.display&&(this.domNode.style.display="none",this.modal&&this.removeCover())}});return m("dojo-bidi")?o("dojox.mobile.SimpleDialog",[c,r]):c});