define("ui/_tab/script/ui.tab",["text!tabTemplate","BootStrap"],function(e){var t={data:{tabs:[]},viewConfig:{fade:!0,view:null}},i=_.template(e),n=function(e){this.create(e)};return n.prototype.create=function(e){var n=this;this.opts=e||{};var o=Backbone.Model.extend({});this.model=new o(_.extend(t,e)),this.model.on({"change:hidden":function(){n.model.get("hidden")&&n.destroy()}}),this.htmlString=i({model:this.model.attributes}),this.elementNode=$(this.htmlString);var d=Backbone.View.extend({});this.view=new d({el:this.elementNode})},n.prototype.display=function(){var e=this;e.model.get("viewConfig").view.$el.append(this.view.$el)},n.prototype.destroy=function(){this.view.destroy()},n});