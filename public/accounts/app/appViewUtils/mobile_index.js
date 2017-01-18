/**
客户详情信息
*/
define([
  '../appRestStore/account',
  "appConfig/const",
  'cutil/c.util.common',
  'cutil/c.util.validate',
  //'dataHelper/login',
],
function (
  restStores,
  constData,
  utilCommon,
  validate
  //dataHelper
) {
  "use strict";
  var viewUtils = {
    goBack:function(){
      var self = this;
      self.back();//返回上一级页面
    },

    /*
    *电催作业
    */
    gotoPhoneCollection:function(accountId){
      var self = this;
      self.showToast({
        text:'电催作业功能未开通'
      });
    },

    /*
    *客户查询
    */
    gotoCustomerSearch:function(accountId){
      var self = this;
      if(Kai.isH5){
        self.forward('h5/view/customer_search' + '?' + $.param({accountId:accountId}));
      }else{
        //
      }
    },

    /*
    *业绩
    */
    gotoCollectionPerformance:function(accountId){
      var self = this;
      self.showToast({
        text:'业绩功能未开通'
      });
    },

    /*
    *外访
    */
    gotoOutboundCollection:function(accountId){
      var self = this;
      if(Kai.isH5){
        self.forward('h5/view/outbound_task' + '?' + $.param({accountId:accountId}));
      }else{
        //
      }
    },

    /*
    *系统通知
    */
    gotoSystemNotification:function(accountId){
      var self = this;
      if(dojoConfig.isH5){
        _.delay(function(){
          self.forward('h5/view/system_notification');
        },200);
      }else{
        //
      }
    },

    /**
    @description 讨论区
    */
    gotoDiscuss:function(accountId){
      var self = this;
      if(dojoConfig.isH5){
        _.delay(function(){
          self.forward('h5/view/discuss');
        },200);
      }else{
        //
      }
    },
};
return viewUtils;
});
