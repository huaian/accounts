/**
@description 历史列表
*/
define([
   "dojo/date/locale",
  'appRestStore/expenses',
  'page/viewFactory',
  'appViewUtils/index',
  'appViewUtils/expenses_list',
  './events/events',
  'cutil/c.util.validate',
],
function (
  locale,
  restStores,
  CommonPageFactory,
  indexViewUtils,
  viewUtils,
  Events,
  validate
) {

  "use strict";
  var baseview = CommonPageFactory.create('appBaseView');
  var View = baseview.extend({
    //是否显示title
    showHeader:true,

    /*可以冒泡的事件可以绑定在这里 delegate*/
    events: {
      'click .mobile_back': _.debounce(viewUtils.goBack,250,true,function(){})//返回上一级
    },

    onCreate: function () {//初次加载时候使用
      var self = this;
    },

    els:{
      'loginButton':{
        selector:'.js_button_login',
        type:'jquery'
      }
    },

    onShow: function () {//在再显示时候调用 在 create之后调用
      var self = this;
    },

    onHide: function () {//view is hidden
      var self = this;
    },

    init: function () {
      var self = this;
    },

    prepareViewData: function () {
      var self = this;
      /*
      {
      "_id" : ObjectId("57f2553103e48f5c3d3e65ad"),
      "userName" : "zhangyan",
      "ExpenseType" : "reward",
      "date" : "2016-10-11",
      "amount" : "2313",
      "contactRemark" : "1313"
    }
    */
    self.viewData.expenseList = self.viewData.expenseList || [];
    var setViewData = function(expenseList){//set view data
      self.viewData.expenseList = expenseList;
      _.each(expenseList,function(expenseItem){
        expenseItem.date = locale.format(new Date(expenseItem.date), {
          datePattern: "yyyy-MM-dd",
          selector: 'date'
        });
      });
      if(self.vm){
        self.vm.$set('expenseList',self.viewData.expenseList);
      }else{
      }
    };
    restStores['expenses'].get('').then(function(resp){
      if(self.isSucceedResponse(resp)){
        setViewData(resp.body.content);
      }else{
        self.showResponseError(resp);
      }
      self.turnOn();
    },function(){
    });
  },

    /*prepare events*/
    prepareEvents: function () {
        var self = this;
        self.event = Events;
    },

    prepareViewUtils:function(){
      var self = this;
      self.viewUtils = _.extend(viewUtils,indexViewUtils);
    },

    prepareDataHelper:function(){
      var self = this;
      //self.dataHelper = dataHelper;//TBD
    },

    afterShow:function(){
      var self = this;
      self.hideLoading();
    },

    getVueInitParams:function(){
      var self = this;
      return {
        data: {
          formData: self.memoryStore.getAttr('memory.formData') || {},//表单数据
          expenseList:self.viewData.expenseList
        },
        methods: {
          delete:function(ExpenseId){
            Kai.showConfirm({
              datamodel:{
                title: '',
                content: '<div class="font-small align-left">确认删除该记录吗？</div>',
                btns: [//添加buttons
                  { name: '确认删除', className: 'cui-btns-ok' },
                  { name: '取消', className: 'cui-btns-cancel' }
                ],
              },
              okAction:function(){
                this.hide();
                self.model.trigger('deleteExpense',ExpenseId);//删除
              },
              cancelAction:function(){
                this.hide();
              }
            });
          },
          edit:function(ExpenseId,event){
            self.forward('h5/view/expenses?' + $.param({ExpenseId:ExpenseId}));
          },
          gotoExpenses:function(accountId,event){
            self.forward('h5/view/expenses');
          },
          goBack:function(accountId,event){
            //self.model.trigger('goBack',accountId);//前往客户详情页面
            self.goBack();
          },
        }
      };
    },
  });
  return View;
});
