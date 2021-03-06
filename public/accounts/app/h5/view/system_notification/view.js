/**
@description 系统通知
*/
define([
  'appRestStore/system_notification',
  'page/viewFactory',
  'appViewUtils/index',
  'appViewUtils/system_notification',
  './events/events',
  'cutil/c.util.validate',
],
function (
  restStores,
  CommonPageFactory,
  indexViewUtils,
  viewUtils,
  Events,
  //dataHelper,//TBD
  validate
) {

  "use strict";
  var baseview = CommonPageFactory.create('appBaseView');
  var View = baseview.extend({
    //是否显示title
    showHeader:true,

    /*可以冒泡的事件可以绑定在这里 delegate*/
    events: {
      'click .mobile_back': _.debounce(viewUtils.goBack,250,true,function(){})
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
      self.viewData.announcement = self.viewData.announcement || {
        title:'',
        notifier:'',
        content:'',
      };
      restStores['announcements'].get('').then(function(resp){
        //
        if(self.isSucceedResponse(resp)){
          var announcementObj = resp.body[0];
          //self.viewData.announcement = announcementObj;
          self.viewData.announcement.title = announcementObj.title;
          self.viewData.announcement.notifier = announcementObj.notifier;
          self.viewData.announcement.content = announcementObj.content;
        }else{
          self.showResponseError(resp);
        }
      },function(){
        //
      });
      self.turnOn();
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
          announcement:self.viewData.announcement
        },
        methods: {
        }
      };
    },
  });
  return View;
});
