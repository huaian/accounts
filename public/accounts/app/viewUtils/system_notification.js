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
    }

};
return viewUtils;
});
