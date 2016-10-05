define("plugin/custom/lazyload.image.silder",["common/c.class.inherit","ui/base/c.ui.base","cImgLazyload"],function(i,t,e){return new i.Class({__propertys__:function(){this.ENUM={DIR:{LEFT:"LEFT",RIGHT:"RIGHT"}},this.images=[],this.autoPlay=!0,this.index=0,this.delay=3e3,this.dir=this.ENUM.DIR.LEFT,this.errorImage="",this.lodingImage="",this.onChange,this.onImageClick,this.container,this.onChanged,this.scope,this.showNav=!0,this.autoHeight=!1,this.defaultImageUrl,this.defaultHeight,this.imageSize,this.loop=!1,this.imgLazy=null,this.errorImageUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAYCAMAAAAGTsm6AAAAMFBMVEX6+vr+/v7+/v7+/v7+/v7+/v7+/v7y8vLv7+/+/v7+/v7+/v729vYAAADt7e3+/v6PQhf9AAAADnRSTlOtVTOIZpki1+wRd0TCAMJ8iPYAAAKfSURBVHjaxZWLjqMwDEXJO7FN7v//7WITOgQ6pVpptbdSecTxiW3iLOt/0g3cirj3po1ZL5lcuw8Sud8QgegJbALy+laMZb/UdY2n9Xj9F/wKFnwLXu/KRiSLG7ISwk+s6Fm9n9PgZUjNKvJ34LLeRThECl4L4ssDyMKak7NLTRvKc41z28Bia15dEVWxwkYiShAicgb26QiwAY6ZC1gV4wCTXdXUjey09gFMOCSvVSv46u2kiEnyMm3DNGGIP4GLCLpIgQyOmD266MsqKnuQPnJbkWhTBalSeIEFycAdZi3in2osOjHM4CqmO5i0gvcaG9ipr4gyDT+BaQKbUom3VLc6xqXewaymBfQdOOu3QFew14HSbGPVLYRCediPBHZ5D2b0bOt6BBvvBsZLoqtvGIEGCWRCJVOQOIEFVpMqfwleaEFajLImNId0dKWb6AXWqrQg8NvN8ggmJRHcBNZiJu1OwyIclY8UWZUAxyoinsBqHtcMegSnHcwzOJfKXODUrwfVa8lq7z+uZ7Dboo3gR3CB0q/gcs5kB+I8KSKlnmdwrTu4AXnpj706j213ATvtlQU8knIJ2HdkRjmfoLkplL0ikJAewYTwDnw0icxRbeRyhCPoaGpTEiiGdpwY+RFcDSSbJVu76vacmYlS31PN1nfpRfHVdnjuqPHcWfS919ttoD2BCXWcyRPYYVcgzr533ki1DwLBuJZw9ERsD0mPCUH3+nr7xc9ghu4jEvT18nGFyHvfcx3eTjGbyaEDMuLJgvG+JRTz3pmA1ApQQ/4d3KpOaxraRhhgd65xC0C0gOyiHs/7iBcrZ65HElKFuQkAPp1OLTUFiNoysU7lfKr/usa6L4TS0Vfm8uVoo8q17Y/KdseyXFP9T9VOn9s88gcLTIlzurC4gAAAAABJRU5ErkJggg==",this.loadImageUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAYCAMAAAAGTsm6AAAAMFBMVEX6+vr+/v7+/v7+/v7+/v7+/v7+/v7+/v7y8vLv7+/+/v729vb+/v4AAADt7e3+/v6c4gmbAAAADnRSTlOtM4hmVZkiEdfsRMJ3AHDRYrYAAAGwSURBVHjaxdbZktsgEAVQLSxNL9z//9vQgvFYUjKpkqnkPhgJbI4bJMuL/af8DGeS8IcRZm+Shnwb21U/hQ1Ivx9gLL0pDbqMKbYJsN2TDlGPuiF3RzGhYrJ7FF9Rh42wT4VTbrD40WqBxEM89lAjpL2GA15j7h/gdIIzp0fwd2FijB62ER6TO/zdd40+g0kEVYQgw5EDbn3eWcRznEhFh6t4yhgrz+BXQYztDBfpucNyWmr9GNYTfCTSflrqyXDyO0Wv8OoDlH3cCpmRptmwe3cYr0jrsgzwv4EXXRAX2VTVInJAnL7UCvaXcNnjXGI7zuMdG/gLLuoRSG+fw7HDfIYTFWZCUGVboaXMvY89BNevML1PXIH9BRN7ImJvH8MJ5NwVDqqBCTwWpdjIftnjXfaHsGK7wyMCS9wmVtdmP50K+CCS8fFzVY/zxKwaa19qBlqn5qmwooxn8gkO6NmU01org3KpM2GG30cqqHa5uLad27F/h4q1OcAyEc7Fp8teWhMGHN73OG/9io7evGX78K9PjtkBcZLVa105ve2/2V5CLzHaewTyAJ6QlVf7a34BIRiNTVIrVfEAAAAASUVORK5CYII=",this.lazyloadImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAYCAMAAAAGTsm6AAAAMFBMVEX6+vr+/v7+/v7+/v7+/v7+/v7+/v7+/v7y8vLv7+/+/v729vb+/v4AAADt7e3+/v6c4gmbAAAADnRSTlOtM4hmVZkiEdfsRMJ3AHDRYrYAAAGwSURBVHjaxdbZktsgEAVQLSxNL9z//9vQgvFYUjKpkqnkPhgJbI4bJMuL/af8DGeS8IcRZm+Shnwb21U/hQ1Ivx9gLL0pDbqMKbYJsN2TDlGPuiF3RzGhYrJ7FF9Rh42wT4VTbrD40WqBxEM89lAjpL2GA15j7h/gdIIzp0fwd2FijB62ER6TO/zdd40+g0kEVYQgw5EDbn3eWcRznEhFh6t4yhgrz+BXQYztDBfpucNyWmr9GNYTfCTSflrqyXDyO0Wv8OoDlH3cCpmRptmwe3cYr0jrsgzwv4EXXRAX2VTVInJAnL7UCvaXcNnjXGI7zuMdG/gLLuoRSG+fw7HDfIYTFWZCUGVboaXMvY89BNevML1PXIH9BRN7ImJvH8MJ5NwVDqqBCTwWpdjIftnjXfaHsGK7wyMCS9wmVtdmP50K+CCS8fFzVY/zxKwaa19qBlqn5qmwooxn8gkO6NmU01org3KpM2GG30cqqHa5uLad27F/h4q1OcAyEc7Fp8teWhMGHN73OG/9io7evGX78K9PjtkBcZLVa105ve2/2V5CLzHaewTyAJ6QlVf7a34BIRiNTVIrVfEAAAAASUVORK5CYII=",this._loadingNode,this._errorNode,this._isloadingImage=!1,this._pfix="slider",this._changing=!1,this._containerNode,this._rootNode,this._imageNode,this._navNode,this._imageLoaderNode,this._handerStartPos={x:0,y:0},this._moveValue=50,this._imageCount=0,this._played=!1,this._size={height:0,width:0},this._lastSize={height:0,width:0},this._displayImage,this._nextImage,this._changeCompletedEvents=[],this._autoPlayTimeout,this.firstLoad=!0,this._defaultSize={width:0,height:0},this._loadingImage=new Image,this._errorImage=new Image},initialize:function(i){for(var t in i)switch(t){case"images":case"autoPlay":case"delay":case"dir":case"index":case"onChange":case"autoPlay":case"onImageClick":case"scope":case"onChanged":case"errorImageUrl":case"loadImageUrl":case"loop":case"showNav":case"defaultImageUrl":case"defaultHeight":case"imageSize":case"lazyloadImage":this[t]=i[t];break;case"container":this._containerNode="string"==typeof i[t]?$(i[t]):i[t],this[t]=i[t]}this._validArgs(),this._correctArgs(),this._imageCount=this.images.length,this._loadingImage.src=this.loadImageUrl,this._errorImage.src=this.errorImageUrl,this.imageSize&&this.imageSize.width&&this.imageSize.height?this.autoHeight=!1:this.autoHeight=!0},play:function(){this._played||(this._played=!0,this._injectHTML(),this._bindEvents()),this.rePlay()},stop:function(){this._clearAutoPlay()},rePlay:function(){this.autoPlay&&this._autoPlay()},_autoPlay:function(){this._autoPlayTimeout=setTimeout($.proxy(function(){this._isloadingImage||this._play()},this),this.delay)},next:function(){this._changing||this._play()},pre:function(){if(!this._changing){if(this.dir===this.ENUM.DIR.RIGHT)if(this.index>=this._imageCount-1){if(!this.loop)return;this.index=0}else this.index++;else if(this.index<=0){if(!this.loop)return;this.index=this._imageCount-1}else this.index--;this["goto"](this.index)}},"goto":function(i){this.index=i,this._changeImage()},_play:function(){this.dir===this.ENUM.DIR.RIGHT?this._imageToRight():this._imageToLeft()},_clearAutoPlay:function(){clearTimeout(this._autoPlayTimeout)},_validArgs:function(){if(!this.container||!this._containerNode)throw"[c.widget.imageSlider]:no container!"},_correctArgs:function(){this.delay<=500&&(this.delay=2e3)},_createHTML:function(){return['<div class="cui-sliderContainer" style="width:100%;position:relative;">','<div class="cui-imageContainer" style="width:100%;">',"</div>",'<div class="cui-navContainer" style="color:#1491c5;position:absolute;"></div>','<div class="cui-imageLoader">',"</div>"].join("")},_createNav:function(){for(var i=[],t=0;t<this._imageCount;t++){var e=t==this.index?"cui-slide-nav-item-current":"";i.push('<span class="cui-slide-nav-item '+e+'"></span>')}this._navNode.empty().html(i.join(" "))},_injectHTML:function(){this._rootNode=$(this._createHTML()),this._containerNode.html(this._rootNode),this._imageNode=this._rootNode.find(".cui-imageContainer"),this._navNode=this._rootNode.find(".cui-navContainer"),this.showNav||this._navNode.css("display","none"),this._imageNode.empty(),this._imageCount>0?this._createImageItem(this.index,$.proxy(function(i,t){this._createNav(),this._setSize(t.height,t.width),this._displayImage=i,this._createImageContainer(),this.runImgLazyload("#cui-sliderContainer img")},this)):this._createDefault()},_onImageClick:function(){var i=this.images[this.index];return i&&i.onClick?void i.onClick.call(this.scope||this,i):void(this.onImageClick&&i&&this.onImageClick.call(this.scope||this,i))},_createImageItem:function(i,t){this._isloadingImage=!0,!i&&(i=0);var e=this._getImageInfo(i),s=new Image;e.src=e.src||this.defaultImageUrl,e.src&&(s.src=e.src),e.alt&&(s.alt=e.alt);var a=this;s.onload=function(){e.orgImage=s,a.autoHeight||(a._defaultSize.width=s.width,a._defaultSize.height=s.height),a._isloadingImage=!1,t.call(a,e,s)},s.onerror=function(){e.loadError=!0,a._errorImage=new Image,a._errorImage.src=a.errorImageUrl,a._isloadingImage=!1,a._errorImage.onload=function(){e.orgImage=a._errorImage,t.call(a,e,a._errorImage)}}},_getImageInfo:function(i){!i&&(i=0);for(var t=0,e=this.images.length;e>t;t++)if(i===t)return this.images[t];throw new Error("[c.ui.imageSlider]:image index is "+i+",but images.length is "+e)},_bindEvents:function(){this._containerNode.bind("touchmove",$.proxy(this._touchmove,this)),this._containerNode.bind("touchstart",$.proxy(this._touchstart,this)),this._containerNode.bind("touchend",$.proxy(this._touchend,this)),$(window).on("resize",$.proxy(this._resize,this)),this._navNode.bind("click",$.proxy(this._switchImage,this)),this._imageNode.bind("click",$.proxy(this._onImageClick,this))},_switchImage:function(i){var t=i.targetElement||i.srcElement,e=$(t).data("index");(0===e||e)&&this.index!==+e&&(this.index=e,this._changeImage())},_imageToRight:function(){if(this.index<=0){if(!this.loop)return;this.index=this._imageCount-1}else this.index--;this._changeImage(this.ENUM.DIR.LEFT)},_imageToLeft:function(){if(this.index>=this._imageCount-1){if(!this.loop)return;this.index=0}else this.index++;this._changeImage(this.ENUM.DIR.RIGHT)},_changeImage:function(i){if(!(this._imageCount<=1)){this._clearAutoPlay(),this._changing=!0,!i&&(i=this.dir);var t=this.images[this.index];t.node?(this._nextImage=t,this._showSliderImage(i)):(this._nextImage={node:this._loadingNode,orgImage:this._loadingImage},this._createImageItem(this.index,$.proxy(function(t,e){this._createImageContainer(),this._nextImage=t,this._showSliderImage(i),this.runImgLazyload("#cui-sliderContainer img")},this)))}},_showSliderImage:function(i,t){var e=0,s=0,a=0,h=0;i===this.ENUM.DIR.LEFT?(e=-1*this._size.width,s=0,a=0,h=this._size.width):(e=this._size.width,s=0,a=0,h=-1*this._size.width),this._displayImage.node.css("left",s),this._nextImage.node.css("left",e).css("display",""),this._nextImage.node.animate({left:a},500,"ease-out",$.proxy(function(){this._changing=!1,this._changeCompeted(),this.rePlay()},this)),this._displayImage.node.animate({left:h},500,"ease-out",$.proxy(function(){this._displayImage.node.css("display","none").css("left",0),this._displayImage=this._nextImage},this))},_touchmove:function(i){if(!this._isMoved){var e=t.getMousePosOfElement(i.targetTouches[0],i.currentTarget);if(!this._isMovedChecked){var s=Math.abs(e.x-this._handerStartPos.x),a=Math.abs(e.y-this._handerStartPos.y);if(a>s)return void(this._isMoved=!0)}if(this._isMovedChecked=!0,i.preventDefault(),!this._changing){var h=e.x-this._handerStartPos.x;h>0&&h>this._moveValue?this._imageToRight():0>h&&Math.abs(h)>this._moveValue&&this._imageToLeft()}}},_touchstart:function(i){this._isMoved=!1,this._isMovedChecked=!1;var e=t.getMousePosOfElement(i.targetTouches[0],i.currentTarget);this._handerStartPos={x:e.x,y:e.y}},_touchend:function(i){i.preventDefault()},_setSize:function(i,t){this._size.width=Math.ceil($(document.body).width()),this._size.height=Math.ceil(i*(this._size.width/t)),this._size.height<100&&(this._size.height=100,this._size.width=t*(this._size.height/i)),this._rootNode.css("width",this._size.width).css("height",this._size.height),this._imageNode.find("div").find("img").css("width",this._size.width).css("height",this._size.height),this.showNav&&this._setNavPos()},_setNavPos:function(){var i=(this._size.width-2*(10*this._imageCount))/2,t=this._size.height-20;this._navNode.css("left",i).css("top",t)},_resize:function(){this._lastSize.width=this._size.width,this._lastSize.height=this._size.height,this.imageSize&&this.imageSize.height&&this.imageSize.width?this._setSize(this.imageSize.height,this.imageSize.width):this._displayImage&&!this._displayImage.loadError&&(this._displayImage.orgImage?this._setSize(this._displayImage.orgImage.height,this._displayImage.orgImage.width):this._setSize(this._displayImage.height,this._displayImage.width))},_changeCompeted:function(){for(var i in this._changeCompletedEvents)this._changeCompletedEvents[i]();this._changeCompletedEvents.length=0,this._changeNav(),this.autoHeight&&this._resize(),this.onChanged&&this.onChanged.call(this.scope||this,this.images[this.index],this.index)},_changeNav:function(){this.showNav&&(this._navNode.find("span").removeClass("cui-slide-nav-item-current"),$(this._navNode.find("span")[this.index]).addClass("cui-slide-nav-item-current"))},_createImageContainer:function(){var i=this.images[this.index];if(!i.node){t.getElementPos(this._rootNode[0]).top-48;i.loadError?i.node=$(this._createImageHtml(this.errorImageUrl,i.alt)):i.node=$(this._createImageHtml(i.src,i.alt)),this._imageNode.append(i.node),i.node.css("position","absolute").css("left",0),i.node.bind("click",function(i){i.preventDefault()})}this.autoHeight&&this._resize()},_createDefault:function(){if(this.defaultImageUrl){var i=new Image;i.src=this.defaultImageUrl;var t=this;i.onload=function(){var e=$(t._createImageHtml(t.defaultImageUrl));t._imageNode.append(e),t._displayImage=i,t.autoHeight?t._setSize(i.height,i.width):t._setSize(t.imageSize.height,t.imageSize.width)}}},_createImageHtml:function(i,t){return'<div class="image-node slider-imageContainerNode"><img style="width:'+this._size.width+"px;height:"+this._size.height+'px" data-src="'+i+'" src="'+this.lazyloadImage+'" alt="'+(t?t:"")+'"></div>'},runImgLazyload:function(){var i=this._imageNode.find("img");i&&i.length>0&&(this.imgLazy&&this.imgLazy.refresh?this.imgLazy.refresh({imgs:i,loadingImg:"./res/img/default6.png"}):this.imgLazy=new e({imgs:i,loadingImg:"./res/img/default6.png"}))}})});