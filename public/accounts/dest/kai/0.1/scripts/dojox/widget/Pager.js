require({cache:{"url:dojox/widget/Pager/Pager.html":'<div dojoAttachPoint="pagerContainer" tabIndex="0" dojoAttachEvent="onkeypress: _handleKey, onfocus: _a11yStyle, onblur:_a11yStyle" class="${orientation}PagerContainer">\n    <div class="pagerContainer">\n		<div dojoAttachPoint="pagerContainerStatus" class="${orientation}PagerStatus"></div>\n		<div dojoAttachPoint="pagerContainerView" class="${orientation}PagerView">\n		    <div dojoAttachPoint="pagerItemContainer"><ul dojoAttachPoint="pagerItems" class="pagerItems"></ul></div>\n		</div>\n		<div dojoAttachPoint="pagerContainerPager" class="${orientation}PagerPager">\n			<div tabIndex="0" dojoAttachPoint="pagerNext" class="pagerIconContainer" dojoAttachEvent="onclick: _next"><img dojoAttachPoint="pagerIconNext" src="${iconNext}" alt="Next" /></div>\n			<div tabIndex="0" dojoAttachPoint="pagerPrevious" class="pagerIconContainer" dojoAttachEvent="onclick: _previous"><img dojoAttachPoint="pagerIconPrevious" src="${iconPrevious}" alt="Previous" /></div>\n		</div>\n    </div>\n	<div dojoAttachPoint="containerNode" style="display:none"></div>\n</div>'}}),define("dojox/widget/Pager",["dojo/aspect","dojo/_base/array","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/fx","dojo/_base/kernel","dojo/keys","dojo/_base/lang","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin","./PagerItem","dojo/text!./Pager/Pager.html"],function(t,e,i,a,s,r,o,n,h,g,d,p,c,l,P,u,m,v){return d.experimental("dojox.widget.Pager"),i("dojox.widget.Pager",[P,u],{templateString:v,iconPrevious:"",iconNext:"",iconPage:require.toUrl("dojox/widget/Pager/images/pageInactive.png"),iconPageActive:require.toUrl("dojox/widget/Pager/images/pageActive.png"),store:null,orientation:"horizontal",statusPos:"leading",pagerPos:"center",duration:500,itemSpace:2,resizeChildren:!0,itemClass:m,itemsPage:3,postMixInProperties:function(){var t="horizontal"==this.orientation;c.mixin(this,{_totalPages:0,_currentPage:1,dirClass:"pager"+(t?"Horizontal":"Vertical"),iconNext:require.toUrl("dojox/widget/Pager/images/"+(t?"h":"v")+"Next.png"),iconPrevious:require.toUrl("dojox/widget/Pager/images/"+(t?"h":"v")+"Previous.png")})},_next:function(){this.isLeftToRight()?this._pagerNext():this._pagerPrevious()},_previous:function(){this.isLeftToRight()?this._pagerPrevious():this._pagerNext()},postCreate:function(){this.inherited(arguments),this.store.fetch({onComplete:c.hitch(this,"_init")})},_a11yStyle:function(t){r.toggle(t.target,"pagerFocus","focus"==t.type)},_handleKey:function(t){var e=t.charCode==p.SPACE?p.SPACE:t.keyCode;switch(e){case p.UP_ARROW:case p.RIGHT_ARROW:case 110:case 78:t.preventDefault(),this._next();break;case p.DOWN_ARROW:case p.LEFT_ARROW:case 112:case 80:t.preventDefault(),this._previous();break;case p.ENTER:switch(t.target){case this.pagerNext:this._next();break;case this.pagerPrevious:this._previous()}}},_init:function(t){this.items=t,this._renderPages(),this._renderStatus(),this._renderPager()},generatePagerItem:function(t,e){var i=this.itemClass,a="string"==typeof i?c.getObject(i):i,s=o.create("div",{innerHTML:t.content});return new a({id:this.id+"-item-"+(e+1)},s)},_renderPages:function(){var t=this.pagerContainerView,i="horizontal"==this.orientation;if(i){var a=n.getMarginBox(this.pagerContainerPager).h,s=n.getMarginBox(this.pagerContainerStatus).h;if("center"!=this.pagerPos)var r=a+s;else{var r=s,o=this.pagerIconNext.width,g=h.get(t,"width"),d=g-2*o;h.set(t,{width:d+"px",marginLeft:this.pagerIconNext.width+"px",marginRight:this.pagerIconNext.width+"px"})}var p=h.get(this.pagerContainer,"height")-r;h.set(this.pagerContainerView,"height",p+"px");var c=Math.floor(h.get(t,"width")/this.itemsPage);"trailing"==this.statusPos?("center"!=this.pagerPos&&h.set(t,"marginTop",a+"px"),h.set(t,"marginBottom",s+"px")):(h.set(t,"marginTop",s+"px"),"center"!=this.pagerPos&&h.set(t,"marginTop",a+"px"))}else{var l=n.getMarginBox(this.pagerContainerPager).w,P=n.getMarginBox(this.pagerContainerStatus).w;h.get(this.pagerContainer,"width");if("center"!=this.pagerPos)var u=l+P;else{var u=P,m=this.pagerIconNext.height,v=h.get(t,"height"),x=v-2*m;h.set(t,{height:x+"px",marginTop:this.pagerIconNext.height+"px",marginBottom:this.pagerIconNext.height+"px"})}var _=h.get(this.pagerContainer,"width")-u;h.set(t,"width",_+"px");var c=Math.floor(h.get(t,"height")/this.itemsPage);"trailing"==this.statusPos?("center"!=this.pagerPos&&h.set(t,"marginLeft",l+"px"),h.set(t,"marginRight",P+"px")):(h.set(t,"marginLeft",P+"px"),"center"!=this.pagerPos&&h.set(t,"marginRight",l+"px"))}var f="padding"+(i?"Left":"Top"),C="padding"+(i?"Right":"Bottom");e.forEach(this.items,function(e,a){var s=this.generatePagerItem(e,a),r={};this.pagerItems.appendChild(s.domNode),r[i?"width":"height"]=c-this.itemSpace+"px";var o=i?"height":"width";if(r[o]=h.get(t,o)+"px",h.set(s.containerNode,r),this.resizeChildren&&s.resizeChildren(),s.parseChildren(),h.set(s.domNode,"position","absolute"),a<this.itemsPage){var n=a*c,g=i?"left":"top",d=i?"top":"left";h.set(s.domNode,d,"0px"),h.set(s.domNode,g,n+"px")}else h.set(s.domNode,"top","-1000px"),h.set(s.domNode,"left","-1000px");h.set(s.domNode,C,this.itemSpace/2+"px"),h.set(s.domNode,f,this.itemSpace/2+"px")},this)},_renderPager:function(){var t=this.pagerContainerPager,e="0px",i="horizontal"==this.orientation;i?("center"==this.statusPos||("trailing"==this.statusPos?h.set(t,"top",e):h.set(t,"bottom",e)),h.set(this.pagerNext,"right",e),h.set(this.pagerPrevious,"left",e)):("trailing"==this.statusPos?h.set(t,"left",e):h.set(t,"right",e),h.set(this.pagerNext,"bottom",e),h.set(this.pagerPrevious,"top",e))},_renderStatus:function(){this._totalPages=Math.ceil(this.items.length/this.itemsPage),this.iconWidth=0,this.iconHeight=0,this.iconsLoaded=0,this._iconConnects=[];for(var t=1;t<=this._totalPages;t++){var e=new Image,i=t;l(e,"click",c.hitch(this,"_pagerSkip",i)),this._iconConnects[i]=l(e,"load",c.hitch(this,function(t){if(this.iconWidth+=e.width,this.iconHeight+=e.height,this.iconsLoaded++,this._totalPages==this.iconsLoaded)if("horizontal"==this.orientation){if("trailing"==this.statusPos){if("center"==this.pagerPos){var i=h.get(this.pagerContainer,"height"),a=h.get(this.pagerContainerStatus,"height");h.set(this.pagerContainerPager,"top",i/2-a/2+"px")}h.set(this.pagerContainerStatus,"bottom","0px")}else{if("center"==this.pagerPos){var i=h.get(this.pagerContainer,"height"),a=h.get(this.pagerContainerStatus,"height");h.set(this.pagerContainerPager,"bottom",i/2-a/2+"px")}h.set(this.pagerContainerStatus,"top","0px")}var s=h.get(this.pagerContainer,"width")/2-this.iconWidth/2;h.set(this.pagerContainerStatus,this.isLeftToRight()?"paddingLeft":"paddingRight",s+"px")}else{if("trailing"==this.statusPos){if("center"==this.pagerPos){var r=h.get(this.pagerContainer,"width"),o=h.get(this.pagerContainerStatus,"width");h.set(this.pagerContainerPager,"left",r/2-o/2+"px")}h.set(this.pagerContainerStatus,"right","0px")}else{if("center"==this.pagerPos){var r=h.get(this.pagerContainer,"width"),o=h.get(this.pagerContainerStatus,"width");h.set(this.pagerContainerPager,"right",r/2-o/2+"px")}h.set(this.pagerContainerStatus,"left","0px")}var s=h.get(this.pagerContainer,"height")/2-this.iconHeight/2;h.set(this.pagerContainerStatus,"paddingTop",s+"px")}this._iconConnects[t].remove()},i)),t==this._currentPage?e.src=this.iconPageActive:e.src=this.iconPage;var i=t;r.add(e,this.orientation+"PagerIcon"),s.set(e,"id",this.id+"-status-"+t),this.pagerContainerStatus.appendChild(e),"vertical"==this.orientation&&h.set(e,"display","block")}},_pagerSkip:function(e){if(this._currentPage!=e){var i,a;e<this._currentPage?(i=this._currentPage-e,a=this._totalPages+e-this._currentPage):(i=this._totalPages+this._currentPage-e,a=e-this._currentPage);var s=a>i;this._toScroll=s?i:a;var r=s?"_pagerPrevious":"_pagerNext",o=t.after(this,"onScrollEnd",c.hitch(this,function(){this._toScroll--,this._toScroll<1?o.remove():this[r]()}),!0);this[r]()}},_pagerNext:function(){if(!this._anim){for(var e=[],i=this._currentPage*this.itemsPage;i>(this._currentPage-1)*this.itemsPage;i--)if(a.byId(this.id+"-item-"+i)){var s=a.byId(this.id+"-item-"+i),r=n.getMarginBox(s);if("horizontal"==this.orientation){var o=r.l-this.itemsPage*r.w;e.push(g.slideTo({node:s,left:o,duration:this.duration}))}else{var o=r.t-this.itemsPage*r.h;e.push(g.slideTo({node:s,top:o,duration:this.duration}))}}var d=this._currentPage;this._currentPage==this._totalPages?this._currentPage=1:this._currentPage++;for(var p=this.itemsPage,i=this._currentPage*this.itemsPage;i>(this._currentPage-1)*this.itemsPage;i--){if(a.byId(this.id+"-item-"+i)){var s=a.byId(this.id+"-item-"+i),r=n.getMarginBox(s);if("horizontal"==this.orientation){var l=h.get(this.pagerContainerView,"width")+(p-1)*r.w-1;h.set(s,"left",l+"px"),h.set(s,"top","0px");var o=l-this.itemsPage*r.w;e.push(g.slideTo({node:s,left:o,duration:this.duration}))}else{l=h.get(this.pagerContainerView,"height")+(p-1)*r.h-1,h.set(s,"top",l+"px"),h.set(s,"left","0px");var o=l-this.itemsPage*r.h;e.push(g.slideTo({node:s,top:o,duration:this.duration}))}}p--}this._anim=g.combine(e);var P=t.after(this._anim,"onEnd",c.hitch(this,function(){delete this._anim,this.onScrollEnd(),P.remove()}),!0);this._anim.play(),a.byId(this.id+"-status-"+d).src=this.iconPage,a.byId(this.id+"-status-"+this._currentPage).src=this.iconPageActive}},_pagerPrevious:function(){if(!this._anim){for(var e=[],i=this._currentPage*this.itemsPage;i>(this._currentPage-1)*this.itemsPage;i--)if(a.byId(this.id+"-item-"+i)){var s=a.byId(this.id+"-item-"+i),r=n.getMarginBox(s);if("horizontal"==this.orientation){var o=h.get(s,"left")+this.itemsPage*r.w;e.push(g.slideTo({node:s,left:o,duration:this.duration}))}else{var o=h.get(s,"top")+this.itemsPage*r.h;e.push(g.slideTo({node:s,top:o,duration:this.duration}))}}var d=this._currentPage;1==this._currentPage?this._currentPage=this._totalPages:this._currentPage--;for(var p=this.itemsPage,l=1,i=this._currentPage*this.itemsPage;i>(this._currentPage-1)*this.itemsPage;i--){if(a.byId(this.id+"-item-"+i)){var s=a.byId(this.id+"-item-"+i),r=n.getMarginBox(s);if("horizontal"==this.orientation){var P=-(l*r.w)+1;h.set(s,"left",P+"px"),h.set(s,"top","0px");var o=(p-1)*r.w;e.push(g.slideTo({node:s,left:o,duration:this.duration}));var o=P+this.itemsPage*r.w;e.push(g.slideTo({node:s,left:o,duration:this.duration}))}else{P=-(l*r.h+1),h.set(s,"top",P+"px"),h.set(s,"left","0px");var o=(p-1)*r.h;e.push(g.slideTo({node:s,top:o,duration:this.duration}))}}p--,l++}this._anim=g.combine(e);var u=t.after(this._anim,"onEnd",c.hitch(this,function(){delete this._anim,this.onScrollEnd(),u.remove()}),!0);this._anim.play(),a.byId(this.id+"-status-"+d).src=this.iconPage,a.byId(this.id+"-status-"+this._currentPage).src=this.iconPageActive}},onScrollEnd:function(){}})});