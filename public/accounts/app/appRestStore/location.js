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

  _stores._name = 'pc/store/restStores';
  // 省
  _stores.Province = new CRest({
    target:  urlPrefix + '/dict/regions/0/0/',
  });

  //市
  _stores.City = new CRest({
    target:  urlPrefix + '/dict/regions/1/',
  });

  // 区
  _stores.County = new CRest({
    target:  urlPrefix + '/dict/regions/2/',
  });

  //获得某个特定的行政信息
  _stores.regions = new CRest({
    target:  urlPrefix + '/dict/region/',
  });

  return _stores;
});
