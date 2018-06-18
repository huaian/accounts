define(["kaiView/h5/view/mobile_index/view","page/viewFactory","appViewUtils/index","appViewUtils/mobile_index","./events/events","cutil/c.util.validate"],function(o,t,e,i,n,r){"use strict";var s=o.extend({showHeader:!1,events:{},onCreate:function(){},els:{loginButton:{selector:".js_button_login",type:"jquery"}},onShow:function(){},onHide:function(){},init:function(){},prepareViewData:function(){var o=this;o.turnOn()},prepareEvents:function(){var o=this;o.event=n},prepareViewUtils:function(){var o=this;o.viewUtils=_.extend({},e,i)},prepareDataHelper:function(){},afterShow:function(){var o=this;o.hideLoading()},getVueInitParams:function(){var o=this;return{data:{formData:o.memoryStore.getAttr("memory.formData")||{},customerInfo:o.viewData.customerInfo,baseUrl:appPrefx},methods:{gotoStatisticsSearch:function(t){o.forward("h5/view/statistics_search")},gotoStatistics:function(t){o.forward("h5/view/statistics")},gotoExpensesList:function(t){o.forward("h5/view/expenses_list")},gotoIncomesList:function(t){o.forward("h5/view/incomes_list")},gotoIncomes:function(t,e){o.forward("h5/view/incomes")},gotoPhoneCollection:function(t,e){o.model.trigger("gotoPhoneCollection",t)},gotoCustomerSearch:function(t,e){o.model.trigger("gotoCustomerSearch",t)},gotoCollectionPerformance:function(t,e){o.model.trigger("gotoCollectionPerformance",t)},gotoOutboundCollection:function(t,e){o.model.trigger("gotoOutboundCollection",t)},gotoSystemNotification:function(t){o.model.trigger("gotoSystemNotification",t)},gotoDiscuss:function(t){o.model.trigger("gotoDiscuss",t)},gotoRecommendedShops:function(t){o.gotoPage("h5/view/recommendedShops",t)}}}}});return s});