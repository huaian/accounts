define(["appRestStore/system_notification","page/viewFactory","appViewUtils/index","appViewUtils/system_notification","./events/events","cutil/c.util.validate","css!./res/style/h5.css"],function(e,t,n,i,a,o){"use strict";var r=t.create("appBaseView"),s=r.extend({showHeader:!0,events:{"click .mobile_back":_.debounce(i.goBack,250,!0,function(){})},onCreate:function(){},els:{loginButton:{selector:".js_button_login",type:"jquery"}},onShow:function(){$("iframe").attr("src","http://121.42.51.73:3001/")},onHide:function(){},init:function(){},prepareViewData:function(){var e=this;e.turnOn()},prepareEvents:function(){var e=this;e.event=a},prepareViewUtils:function(){var e=this;e.viewUtils=_.extend(i,n)},prepareDataHelper:function(){},afterShow:function(){var e=this;e.hideLoading()},getVueInitParams:function(){var e=this;return{data:{formData:e.memoryStore.getAttr("memory.formData")||{},announcement:e.viewData.announcement},methods:{}}}});return s});