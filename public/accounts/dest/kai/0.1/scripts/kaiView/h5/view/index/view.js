define("kaiView/h5/view/index/view",["page/viewFactory","../../../viewUtils/index","./events/events","cutil/c.util.validate","css!./res/style/h5.css"],function(e,t,i,n){"use strict";var o=e.create("appBaseView"),a=o.extend({events:{"click .js_button_login":_.debounce(t.login,250,!0,function(){})},onCreate:function(){},els:{sendVerifyCodeButton:{selector:".js_button_sendVerifyCode",type:"jquery"},cellphoneErrorIconNode:{selector:".js_cellphone_container .weui_icon_warn",type:"jquery"},cellphoneSuccessIconNode:{selector:".js_cellphone_container .weui_icon_success_no_circle",type:"jquery"},loginButton:{selector:".js_button_login",type:"jquery"}},onShow:function(){},onHide:function(){},init:function(){},prepareViewData:function(){var e=this;e.turnOn()},prepareEvents:function(){var e=this;e.event=i},prepareViewUtils:function(){var e=this;e.viewUtils=t},prepareDataHelper:function(){},afterShow:function(){var e=this;e.hideLoading()},getVueInitParams:function(){var e=this;return{data:{formData:e.memoryStore.getAttr("memory.formData")||{},taskList:e.viewData.taskList},methods:{gotoCustomerDetail:function(t,i){e.model.trigger("gotoCustomerDetail",t)},greet:function(e){alert("Hello "+this.name+"!"),alert(e.target.tagName)}}}},parseTempate:function(){var e=this,t=_.template("<%_.each(childViewItems,function(viewItem){%><h2><%=viewItem.viewTitle%></h2><div data-viewname='<%=viewItem.id%>'><a data-dojo-type='dijit/layout/LinkPane' id='<%=viewItem.id%>'></a></div><%});%>"),i=t({childViewItems:e.childViewItems});e.$el.append(i)}});return a});