/*外访任务列表*/
define([
  //'appRestStore/statistics',
  'page/viewFactory',
  'appViewUtils/index',
  'appViewUtils/statistics',
  './events/events',
  //'dataHelper/login',//TBD
  //'cutil/c.util.validate',
  /*
  "dojox/charting/Chart",
  "dojox/charting/plot2d/Pie",
  "dojox/charting/action2d/Tooltip",
  "dojox/charting/themes/Tom",
  "dojox/charting/widget/Legend"
  */
],
function (
  //restStores,
  CommonPageFactory,
  indexViewUtils,
  viewUtils,
  Events//,
  //dataHelper,//TBD
  //validate
) {

  "use strict";
  var baseview = CommonPageFactory.create('appBaseView');
  var View = baseview.extend({
    //是否显示title
    showHeader:true,

    /*可以冒泡的事件可以绑定在这里 delegate*/
    events: {
      //'click .js_button_sendVerifyCode': _.debounce(viewUtils.sendVerifyCode,250,true,function(){}),
      //'click .mobile_back': _.debounce(viewUtils.goBack,250,true,function(){})//返回上一级
    },

    onCreate: function () {//初次加载时候使用
      var self = this;
      alert('onCreate');
    },

    els:{
      'loginButton':{
        selector:'.js_button_login',
        type:'jquery'
      }
    },

    onShow: function () {//在再显示时候调用 在 create之后调用
      var self = this;
      alert('onShow');
  },

  onHide: function () {//view is hidden
    var self = this;
  },

  init: function () {
    var self = this;
    alert('onInit');
  },

  prepareViewData: function () {
    var self = this;
    alert('prepareViewData');
    if(self.viewName.indexOf('statistics_search') >= 0){

    }else{
      self.model.trigger('fetchData');
    }
    self.turnOn();
  },

  /*prepare events*/
  prepareEvents: function () {
    var self = this;
    self.event = Events;
  },

  prepareViewUtils:function(){
    var self = this;
    self.viewUtils = _.extend({},viewUtils,indexViewUtils);
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
        sumIncomes:self.viewData.sumIncomes || '',
        sumExpenses:self.viewData.sumExpenses || '',
      },
      methods: {
        search:function(){
          self.model.trigger('search');//前往客户详情页面
        },
        goBack:function(accountId,event){
          self.model.trigger('goBack',accountId);//前往客户详情页面
        },
        goCustomerDetail:function(taskItem,event){
          self.model.trigger('goCustomerDetail',taskItem,event);
        }
      }
    };
  },
});
return View;
});
