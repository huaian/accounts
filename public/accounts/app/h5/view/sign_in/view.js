/**
@file 注册
*/
define([
  'common/c.geo',
  'appRestStore/account',
  'kaiView/h5/view/sign_in/view'
],
function (
  geo,
  restStores,
  baseView
) {
  "use strict";
  var View = baseView.extend({
    _registerComm:restStores.register
  });
  return View;
});
