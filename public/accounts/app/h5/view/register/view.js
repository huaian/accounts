/**
@file 注册
*/
define([
  'appRestStore/account',
  'kaiView/h5/view/register/view'
],
function (
  restStores,
  baseView
) {
  "use strict";
  var View = baseView.extend({
    _registerComm:restStores.register,
    //是否显示title
    showHeader:true,
  });
  return View;
});
