define("custom/dijit/_WidgetBase",["3rdlibs/vue-1.0.0","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/_base/declare","dijit/registry","dojo/parser","dojo/on","dojo/aspect"],function(e,t,i,n,a,o,d,u,r){return a([t,i,n],{baseClass:"customDijit",widgetData:{},param:{},view:null,buildRendering:function(){var e=this;e.widgetTemplateFunction=_.template(e.templateString),e.createTemplateFunction(),e.prepareViewData(),e.templateString=e.widgetTemplateFunction(e.widgetData),e.inherited(arguments)},prepareViewData:function(){},initVue:function(){var t=this,i={el:t.domNode};t.beforeInitVue&&t.beforeInitVue(),t.getVueInitParams?_.extend(i,t.getVueInitParams()):i={el:t.domNode,data:_.isFunction(t.getVueData)?t.getVueData()||{}:{},methods:_.isFunction(t.getVueMethods)?t.getVueMethods()||{}:{},computed:_.isFunction(t.getVueComputed)?t.getVueComputed()||{}:{}},t.vm=new e(i)},postCreate:function(){var e=this;e.initVue(),e.inherited(arguments)},show:function(){var e=this;e.bindEvents()},bindEvents:function(){},createTemplateFunction:function(){var e=this;e.templateFunction=[];var t=$(e.templateString).find(".kai_widget");t&&_.each(t,function(t){e.templateFunction[$(t).data("templatefunctionid")]=_.template($(t).html())})}})});