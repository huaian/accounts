define(["dojo/date/locale","viewUtils/index","appRestStore/expenses","appRestStore/dict","page/viewFactory","viewUtils/expenses","./events/events","cutil/c.util.validate"],function(t,e,a,n,i,o,c,r){"use strict";var s=i.create("appBaseView"),u=s.extend({showHeader:!0,events:{"click .mobile_back":_.debounce(o.goBack,250,!0,function(){})},onCreate:function(){},els:{loginButton:{selector:".js_button_login",type:"jquery"}},onShow:function(){},onHide:function(){},init:function(){},prepareViewData:function(){var e=this,i=e.getQueryObj().expenseid;e.viewData.dictData=e.viewData.dictData||{},e.viewData.formData=e.viewData.formData||{date:"",type:"",amount:"",remark:""},_.each(["dict_expense_types"],function(t){e.viewData.dictData[t]=[],n.storeFactory.createDictStore(t).get("").then(function(a){e.viewData.dictData[t]=a},function(t){}).always(function(t){})}),_.isString(i)&&a.expenses.get(i).then(function(a){e.viewData.formData=a.body.content,e.viewData.formData.date=t.format(new Date(e.viewData.formData.date),{datePattern:"yyyy-MM-dd",selector:"date"}),e.vm&&e.vm.$set("formData",e.viewData.formData)}),e.turnOn()},prepareEvents:function(){var t=this;t.event=c},prepareViewUtils:function(){var t=this;t.viewUtils=_.extend({},e,o)},prepareDataHelper:function(){},afterShow:function(){var t=this;t.hideLoading()},getVueInitParams:function(){var t=this;return{data:{formData:t.viewData.formData||{}||t.memoryStore.getAttr("memory.formData"),dictData:t.viewData.dictData,contactInfos:t.viewData.contactInfos},methods:{setCellphoneNumberInputClicked:function(){this.cellphoneNumberInputClicked=!0},isValidCellphoneNumber:function(t){return r.isMobile(t)},save:function(e){t.model.trigger("save",e)}},computed:{delayInfos:function(){return t.viewData.delayInfos},idNum:function(){},collectionId:function(){return(t.getQueryObj()||{}).collectionid},contactNames:function(){return _.pluck(this.contactInfos,"contactName")||[]},contactPhones:function(){var t=_.findWhere(this.contactInfos,{contactName:this.formData.contactName});return _.compact([t.contactMobile,t.contactPhone])||[]}}}}});return u});