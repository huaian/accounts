require({cache:{"url:ui/tip/template/ui.tip.html":'<div class="cui-tip-content weui_toptips weui_warn js_tooltips"><%=data.tipMessage%></div>\n'}}),define("ui/tip/ui.tip",["../ui.abstract.view","dojo/text!./template/ui.tip.html"],function(t,i){return _.inherit(t,{propertys:function($super){$super(),this.type="tip",this.needAnimat=!1,this.template=i,this.datamodel={data:{tipMessage:"",duration:2e3}},this.onChange=function(t){}},resetPropery:function(){},setDatamodel:function(){},initElement:function(){this.tips=this.$(".cui-tip-content")},initialize:function($super,t){$super(t)},addEvent:function($super){$super()},show:function($super){$super();var t=this;this.tips.fadeIn(),_.delay(function(){t.$el.fadeOut(500)},this.datamodel.data.duration||1e3)}})});