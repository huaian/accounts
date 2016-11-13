define("dojox/mobile/app/ImageView",["dojo","dijit","dojox","dojo/require!dojox/mobile/app/_Widget,dojo/fx/easing"],function(t,i,e){t.provide("dojox.mobile.app.ImageView"),t.experimental("dojox.mobile.app.ImageView"),t.require("dojox.mobile.app._Widget"),t.require("dojo.fx.easing"),t.declare("dojox.mobile.app.ImageView",e.mobile.app._Widget,{zoom:1,zoomCenterX:0,zoomCenterY:0,maxZoom:5,autoZoomLevel:3,disableAutoZoom:!1,disableSwipe:!1,autoZoomEvent:null,_leftImg:null,_centerImg:null,_rightImg:null,_leftSmallImg:null,_centerSmallImg:null,_rightSmallImg:null,constructor:function(){this.panX=0,this.panY=0,this.handleLoad=t.hitch(this,this.handleLoad),this._updateAnimatedZoom=t.hitch(this,this._updateAnimatedZoom),this._updateAnimatedPan=t.hitch(this,this._updateAnimatedPan),this._onAnimPanEnd=t.hitch(this,this._onAnimPanEnd)},buildRendering:function(){this.inherited(arguments),this.canvas=t.create("canvas",{},this.domNode),t.addClass(this.domNode,"mblImageView")},postCreate:function(){this.inherited(arguments),this.size=t.marginBox(this.domNode),t.style(this.canvas,{width:this.size.w+"px",height:this.size.h+"px"}),this.canvas.height=this.size.h,this.canvas.width=this.size.w;var i=this;this.connect(this.domNode,"onmousedown",function(t){i.isAnimating()||(i.panX&&i.handleDragEnd(),i.downX=t.targetTouches?t.targetTouches[0].clientX:t.clientX,i.downY=t.targetTouches?t.targetTouches[0].clientY:t.clientY)}),this.connect(this.domNode,"onmousemove",function(t){if(!i.isAnimating()&&(i.downX||0===i.downX)&&(i.downY||0===i.downY)&&(!i.disableSwipe&&1==i.zoom||!i.disableAutoZoom&&1!=i.zoom)){var e=t.targetTouches?t.targetTouches[0].clientX:t.pageX,n=t.targetTouches?t.targetTouches[0].clientY:t.pageY;i.panX=e-i.downX,i.panY=n-i.downY,1==i.zoom?Math.abs(i.panX)>10&&i.render():(Math.abs(i.panX)>10||Math.abs(i.panY)>10)&&i.render()}}),this.connect(this.domNode,"onmouseout",function(t){!i.isAnimating()&&i.panX&&i.handleDragEnd()}),this.connect(this.domNode,"onmouseover",function(t){i.downX=i.downY=null}),this.connect(this.domNode,"onclick",function(e){if(!i.isAnimating()&&null!=i.downX&&null!=i.downY){var n=e.targetTouches?e.targetTouches[0].clientX:e.pageX,h=e.targetTouches?e.targetTouches[0].clientY:e.pageY;if(Math.abs(i.panX)>14||Math.abs(i.panY)>14)return i.downX=i.downY=null,void i.handleDragEnd();if(i.downX=i.downY=null,!i.disableAutoZoom){if(!i._centerImg||!i._centerImg._loaded)return;if(1!=i.zoom)return void i.set("animatedZoom",1);var a=t._abs(i.domNode),o=i.size.w/i._centerImg.width,s=i.size.h/i._centerImg.height;i.zoomTo((n-a.x)/o-i.panX,(h-a.y)/s-i.panY,i.autoZoomLevel)}}}),t.connect(this.domNode,"flick",this,"handleFlick")},isAnimating:function(){return this._anim&&"playing"==this._anim.status()},handleDragEnd:function(){if(this.downX=this.downY=null,1==this.zoom){if(!this.panX)return;var i=this._leftImg&&this._leftImg._loaded||this._leftSmallImg&&this._leftSmallImg._loaded,e=this._rightImg&&this._rightImg._loaded||this._rightSmallImg&&this._rightSmallImg._loaded,n=!(Math.abs(this.panX)<this._centerImg._baseWidth/2)&&((this.panX>0&&i?1:0)||(this.panX<0&&e?1:0));n?this.moveTo(this.panX):this._animPanTo(0,t.fx.easing.expoOut,700)}else{if(!this.panX&&!this.panY)return;this.zoomCenterX-=this.panX/this.zoom,this.zoomCenterY-=this.panY/this.zoom,this.panX=this.panY=0}},handleFlick:function(t){1==this.zoom&&t.duration<500&&("ltr"==t.direction?this.moveTo(1):"rtl"==t.direction&&this.moveTo(-1),this.downX=this.downY=null)},moveTo:function(i){i=i>0?1:-1;var e;1>i?this._rightImg&&this._rightImg._loaded?e=this._rightImg:this._rightSmallImg&&this._rightSmallImg._loaded&&(e=this._rightSmallImg):this._leftImg&&this._leftImg._loaded?e=this._leftImg:this._leftSmallImg&&this._leftSmallImg._loaded&&(e=this._leftSmallImg),this._moveDir=i;var n=this;e&&e._loaded?this._animPanTo(this.size.w*i,null,500,function(){n.panX=0,n.panY=0,0>i?n._switchImage("left","right"):n._switchImage("right","left"),n.render(),n.onChange(-1*i)}):this._animPanTo(0,t.fx.easing.expoOut,700)},_switchImage:function(t,i){var e="_"+t+"SmallImg",n="_"+t+"Img",h="_"+i+"SmallImg",a="_"+i+"Img";this[n]=this._centerImg,this[e]=this._centerSmallImg,this[n]._type=t,this[e]&&(this[e]._type=t),this._centerImg=this[a],this._centerSmallImg=this[h],this._centerImg._type="center",this._centerSmallImg&&(this._centerSmallImg._type="center"),this[a]=this[h]=null},_animPanTo:function(i,e,n,h){return this._animCallback=h,this._anim=new t.Animation({curve:[this.panX,i],onAnimate:this._updateAnimatedPan,duration:n||500,easing:e,onEnd:this._onAnimPanEnd}),this._anim.play(),this._anim},onChange:function(t){},_updateAnimatedPan:function(t){this.panX=t,this.render()},_onAnimPanEnd:function(){this.panX=this.panY=0,this._animCallback&&this._animCallback()},zoomTo:function(t,i,e){this.set("zoomCenterX",t),this.set("zoomCenterY",i),this.set("animatedZoom",e)},render:function(){var t=this.canvas.getContext("2d");t.clearRect(0,0,this.canvas.width,this.canvas.height),this._renderImg(this._centerSmallImg,this._centerImg,1==this.zoom?this.panX<0?1:this.panX>0?-1:0:0),1==this.zoom&&0!=this.panX&&(this.panX>0?this._renderImg(this._leftSmallImg,this._leftImg,1):this._renderImg(this._rightSmallImg,this._rightImg,-1))},_renderImg:function(t,i,e){var n=i&&i._loaded?i:t;if(n&&n._loaded){var h=this.canvas.getContext("2d"),a=n._baseWidth,o=n._baseHeight,s=a*this.zoom,m=o*this.zoom,r=Math.min(this.size.w,s),d=Math.min(this.size.h,m),l=this.dispWidth=n.width*(r/s),g=this.dispHeight=n.height*(d/m),_=this.zoomCenterX-this.panX/this.zoom,c=this.zoomCenterY-this.panY/this.zoom,u=Math.floor(Math.max(l/2,Math.min(n.width-l/2,_))),p=Math.floor(Math.max(g/2,Math.min(n.height-g/2,c))),I=Math.max(0,Math.round((n.width-l)/2+(u-n._centerX))),f=Math.max(0,Math.round((n.height-g)/2+(p-n._centerY))),X=Math.round(Math.max(0,this.canvas.width-r)/2),w=Math.round(Math.max(0,this.canvas.height-d)/2),z=r,v=l;1==this.zoom&&e&&this.panX&&(this.panX<0?e>0?(r-=Math.abs(this.panX),X=0):0>e&&(r=Math.max(1,Math.abs(this.panX)-5),X=this.size.w-r):e>0?(r=Math.max(1,Math.abs(this.panX)-5),X=0):0>e&&(r-=Math.abs(this.panX),X=this.size.w-r),l=Math.max(1,Math.floor(l*(r/z))),e>0&&(I=I+v-l),I=Math.floor(I));try{h.drawImage(n,Math.max(0,I),f,Math.min(v,l),g,X,w,Math.min(z,r),d)}catch(M){}}},_setZoomAttr:function(t){this.zoom=Math.min(this.maxZoom,Math.max(1,t)),1==this.zoom&&this._centerImg&&this._centerImg._loaded&&(this.isAnimating()||(this.zoomCenterX=this._centerImg.width/2,this.zoomCenterY=this._centerImg.height/2),this.panX=this.panY=0),this.render()},_setZoomCenterXAttr:function(t){t!=this.zoomCenterX&&(this._centerImg&&this._centerImg._loaded&&(t=Math.min(this._centerImg.width,t)),this.zoomCenterX=Math.max(0,Math.round(t)))},_setZoomCenterYAttr:function(t){t!=this.zoomCenterY&&(this._centerImg&&this._centerImg._loaded&&(t=Math.min(this._centerImg.height,t)),this.zoomCenterY=Math.max(0,Math.round(t)))},_setZoomCenterAttr:function(t){(t.x!=this.zoomCenterX||t.y!=this.zoomCenterY)&&(this.set("zoomCenterX",t.x),this.set("zoomCenterY",t.y),this.render())},_setAnimatedZoomAttr:function(i){this._anim&&"playing"==this._anim.status()||(this._anim=new t.Animation({curve:[this.zoom,i],onAnimate:this._updateAnimatedZoom,onEnd:this._onAnimEnd}),this._anim.play())},_updateAnimatedZoom:function(t){this._setZoomAttr(t)},_setCenterUrlAttr:function(t){this._setImage("center",t)},_setLeftUrlAttr:function(t){this._setImage("left",t)},_setRightUrlAttr:function(t){this._setImage("right",t)},_setImage:function(i,e){var n=null,h=null;if(t.isString(e)?h=e:(h=e.large,n=e.small),!this["_"+i+"Img"]||this["_"+i+"Img"]._src!=h){var a=this["_"+i+"Img"]=new Image;if(a._type=i,a._loaded=!1,a._src=h,a._conn=t.connect(a,"onload",this.handleLoad),n){var o=this["_"+i+"SmallImg"]=new Image;o._type=i,o._loaded=!1,o._conn=t.connect(o,"onload",this.handleLoad),o._isSmall=!0,o._src=n,o.src=n}a.src=h}},handleLoad:function(i){var e=i.target;e._loaded=!0,t.disconnect(e._conn);var n=e._type;switch(n){case"center":this.zoomCenterX=e.width/2,this.zoomCenterY=e.height/2}var h=e.height,a=e.width;a/this.size.w<h/this.size.h?(e._baseHeight=this.canvas.height,e._baseWidth=a/(h/this.size.h)):(e._baseWidth=this.canvas.width,e._baseHeight=h/(a/this.size.w)),e._centerX=a/2,e._centerY=h/2,this.render(),this.onLoad(e._type,e._src,e._isSmall)},onLoad:function(t,i,e){}})});