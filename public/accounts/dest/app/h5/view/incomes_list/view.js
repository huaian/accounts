define(["dojo/date/locale","appRestStore/incomes","page/viewFactory","viewUtils/index","viewUtils/incomes_list","./events/events","cutil/c.util.validate"],function(e,t,n,i,o,a,c){"use strict";var s=n.create("appBaseView"),r=s.extend({showHeader:!0,events:{"click .mobile_back":_.debounce(o.goBack,250,!0,function(){})},onCreate:function(){},els:{loginButton:{selector:".js_button_login",type:"jquery"}},onShow:function(){},onHide:function(){},init:function(){},prepareViewData:function(){var n=this;n.viewData.incomeList=n.viewData.incomeList||[];var i=function(t){n.viewData.incomeList=t,_.each(t,function(t){t.date=e.format(new Date(t.date),{datePattern:"yyyy-MM-dd",selector:"date"})}),n.vm&&n.vm.$set("incomeList",n.viewData.incomeList)};t.incomes.get("").then(function(e){n.isSucceedResponse(e)?i(e.body.content):n.showResponseError(e),n.turnOn()},function(){})},prepareEvents:function(){var e=this;e.event=a},prepareViewUtils:function(){var e=this;e.viewUtils=_.extend(o,i)},prepareDataHelper:function(){},afterShow:function(){var e=this;e.hideLoading()},getVueInitParams:function(){var e=this;return{data:{formData:e.memoryStore.getAttr("memory.formData")||{},incomeList:e.viewData.incomeList},methods:{"delete":function(t){Kai.showConfirm({datamodel:{title:"",content:'<div class="font-small align-left">确认删除该记录吗？</div>',btns:[{name:"确认删除",className:"cui-btns-ok"},{name:"取消",className:"cui-btns-cancel"}]},okAction:function(){this.hide(),e.model.trigger("deleteIncome",t)},cancelAction:function(){this.hide()}})},edit:function(t,n){e.forward("h5/view/incomes?"+$.param({incomeId:t}))},gotoIncomes:function(t,n){e.forward("h5/view/incomes")},goBack:function(t,n){e.model.trigger("goBack",t)}}}}});return r});