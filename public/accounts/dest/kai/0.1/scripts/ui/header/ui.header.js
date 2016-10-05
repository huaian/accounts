define("ui/header/ui.header",["dojo","dijit","dojox"],function(t,e,a){define(["UIView",getAppUITemplatePath("ui.header"),"UIBubbleLayer"],function(t,e,a){return _.inherit(t,{propertys:function($super){$super(),this.viewScope=null,this.datamodel={left:[],right:[],center:{}},this.needEmptyWrapper=!0,this.template=e,this.events={}},resetPropery:function($super){$super(),this.root&&this.root[0]&&(this.wrapper=this.root)},set:function(t){if(this.setOption(t),this._originData=t,"object"==typeof t){t.events||(t.events={}),t.view&&(this.viewScope=t.view);var e={left:[],right:[],center:{}},a={};t.back!==!1&&(_.isObject(t.back)?e.left.push(t.back):_.isString(t.backtext)?(a.tagname="back",a.value=t.backtext,_.isFunction(t.events.returnHandler)&&(a.callback=t.events.returnHandler),e.left.push(a)):_.find(t.left,function(t){return"back"==t.tagname})||e.left.push({tagname:"back",callback:t.events.returnHandler})),_.isObject(t.tel)&&e.right.push({tagname:"tel",number:t.tel.number,callback:t.events.telHandler}),t.home&&e.right.push({tagname:"home",callback:t.events.homeHandler}),_.isObject(t.btn)&&e.right.push({tagname:"commit",value:t.btn.title,classname:t.btn.classname,data:t.btn.data,callback:t.events.commitHandler}),_.isArray(t.moreMenus)&&e.right.push({tagname:"list",data:t.moreMenus});var i={};_.isString(t.title)&&(i.tagname="title",i.value=t.title),_.isString(t.subtitle)&&(i.tagname="subtitle",i.value=[t.title,t.subtitle]),_.isString(t.citybtn)&&(i.tagname="select",i.value=t.citybtn,i.callback=t.events.citybtnHandler),_.isObject(t.title)&&(i=t.title),e.center=i,t.left&&(e.left=t.left.concat(e.left)),t.right&&(e.right=t.right.concat(e.right));var n=_.groupBy(e.right,function(t){return"list"==t.tagname?"a":"b"});e.right=(n.b||[]).concat(n.a||[]),_.isObject(t.center)&&(e.center=t.center),this.handleSpecialParam(e),this.datamodel=e,this.setEventsParam(),this.datamodel.left[0]&&_.isFunction(this.datamodel.left[0].callback)&&(this.lastReturnHandler=this.datamodel.left[0].callback),this.refresh(!0),this.show()}},listDefaultCallback:function(t){var e=_.find(this.datamodel.right,function(t){return"list"==t.tagname});e&&(this.sidebar||(this.sidebar=new a({datamodel:{data:e.data,wrapperClass:"cm-pop--user-nav",itemFn:function(t){var e=t.iconname||t.tagname;return'<i class="icon-'+e+'"></i>'+t.value}},triangleRight:"16px",triggerEl:$(t.currentTarget),width:"128px",onCreate:function(){this.mask.$el.addClass("cm-overlay--transparent"),this.mask.$el.removeClass("cui-mask")},onClick:function(t,e,a){_.isFunction(t.callback)&&t.callback.call(this.viewScope,t,e,a),this.hide()}})),"show"==this.sidebar.status?this.sidebar.hide():this.sidebar.show())},backDefaultCallback:function(){return this.lastReturnHandler?void this.lastReturnHandler.call(this.viewScope):void Kai.goBack()},setEventsParam:function(){for(var t,e=null,a=this.datamodel.left.concat(this.datamodel.right).concat(this.datamodel.center),i=0,n=a.length;n>i;i++)t=a[i],_.isFunction(this[t.tagname+"DefaultCallback"])&&(e=this[t.tagname+"DefaultCallback"]),_.isFunction(t.callback)&&(e=$.proxy(t.callback,this.viewScope)),e&&(this.events["click .js_"+t.tagname]=e),e=null},handleSpecialParam:function(t){var e,a,i,n;for(e in t)if(_.isArray(t[e]))for(a=0,i=t[e].length;i>a;a++)n=t[e][a],this["customtHandle_"+n.tagname]&&this["customtHandle_"+n.tagname](t[e][a],e)},_getDir:function(t){var e={left:"fl",right:"fr"};return e[t]},customtHandle_tel:function(t,e){e=this._getDir(e),t.itemFn=function(){return'<a href="tel:'+t.number+'" class="cm-header-icon __hreftel__ '+e+" js_"+t.tagname+' " ><i class="icon-'+t.tagname+'"></i></a>'}},addEvent:function(){this.on("onShow",function(){this.$el.removeClass("cm-header--no-right"),0===this.datamodel.right.length&&this.$el.addClass("cm-header--no-right")})},createRoot:function(t){var e=$("#headerview").show();this.$el=$(t).hide().attr("id",this.id),this.$el.children().length&&e.html("").css("height","44px")},updateHeader:function(t,e){_.isObject(t)?this.set(_.extend(this._originData,t)):_.isObject(this._originData)?this.set(_.extend(this._originData,_.object([t],[e]))):this.set(_.object([t],[e]))},hide:function($super){$super(),this.$el.parent().hide()},show:function($super){$super(),this.$el.parent().show()}})})});