require({cache:{"url:ui/switch/template/ui.switch.html":'<div class="cui-switch <%if(checkedFlag) { %><%=checkedClass %><% } %> ">\r\n  <div class="cui-switch-bg <%if(checkedFlag) { %><%=checkedClass %><% } %> ">\r\n  </div>\r\n  <div class="cui-switch-scroll">\r\n  </div>\r\n</div>\r\n'}}),define("ui/switch/ui.switch",["../ui.abstract.view","dojo/text!./template/ui.switch.html"],function(t,i){return _.inherit(t,{propertys:function($super){$super(),this.template=i,this.datamodel={checkedFlag:!1,checkedClass:"current"}},initialize:function($super,t){$super(t)},changed:function(t){},initElement:function(){this.el=this.$el,this.switchBar=this.$(".cui-switch-bg")},checked:function(){("function"!=typeof this.checkAvailabe||this.checkAvailabe())&&(this.getStatus()||(this.el.addClass("current"),this.switchBar.addClass("current"),this.datamodel.checkedFlag=!0,this._triggerChanged()))},unChecked:function(){("function"!=typeof this.checkAvailabe||this.checkAvailabe())&&this.getStatus()&&(this.el.removeClass("current"),this.switchBar.removeClass("current"),this.datamodel.checkedFlag=!1,this._triggerChanged())},_triggerChanged:function(){"function"==typeof this.changed&&this.changed.call(this,this.getStatus())},getStatus:function(){return this.datamodel.checkedFlag},createRoot:function(t){this.$el=$(t).hide().attr("id",this.id)},addEvent:function($super){$super(),this.on("onCreate",function(){}),this.on("onShow",function(){_.flip(this.$el,"left",$.proxy(function(){this.unChecked()},this)),_.flip(this.$el,"right",$.proxy(function(){this.checked()},this)),_.flip(this.$el,"tap",$.proxy(function(){this.getStatus()?this.unChecked():this.checked()},this))}),this.on("onHide",function(){_.flipDestroy(this.$el)})}})});