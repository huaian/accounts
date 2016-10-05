/**
@description rest请求接口
*/
define([
  "dojo/_base/lang",
  //"data/store/c.common.store",
  'dojo/_base/declare',
  "custom/dstore/Rest",
  "dstore/Cache",
  'custom/dstore/Trackable',
  "cutil/c.util.config",
  "appConfig/interface"
],
function (
  lang,
  //CommonStore,
  declare,
  Rest,
  Cache,
  Trackable,
  configUtil,
  urlinfo
) {
  "use strict";
  //var headStore = CommonStore.HeadStore.getInstance();//headStore
  var CRest = declare([ Rest,Trackable]);//不使用缓存
  var CacheableRest = declare([ Rest, Cache, Trackable]);//可缓存的Rest

  var urlPrefix;

  var _stores = {};//collections of all models

  var urlobj = configUtil.getBaseUrl(urlinfo);

  if (urlobj && urlobj.domain && urlobj.protocol) {//拼接接口url前缀
    urlPrefix = urlobj.protocol + '://' + urlobj.domain + '/' +  urlobj.path;
  }

  _stores._name = 'appRestStore/account';

  //login
  _stores.login = new CRest({
    target: urlPrefix + '/authority/login/',
    authRequired:false
  });

  //register
  _stores.register = new CRest({
    target: urlPrefix + '/authority/register/',
    authRequired:false
  });


  //changePassword
  _stores.changePassword = new CRest({
    target: urlPrefix + '/authority/password/',
    authRequired:false
  });

  //{"statusCode":"1","statusMsg":"已成功注销登录！"}
  _stores.logout = new CRest({
    target: urlPrefix + '/authority/logout/',
  });

  //签名
  _stores.beeSignature = new CRest({
    target: urlPrefix + '/authority/beeSignature/',
    /*
    target: urlPrefix + '/login/',
    authRequired:false,//是否需要认证
    */
  });

  return _stores;
});
