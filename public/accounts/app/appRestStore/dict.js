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
  /*
  -案件类型 CASE_TYPES
  -地址类型 ADDRESS_TYPE
  -跟进方式 FOLLOW_TYPE
  -活动 COLLECTION_ACTIVE
  -类别 COLLECTION_TYPE
  -无效联络结果代码 NOT_RESULT_CODE
  -有效联络结果代码 RESULT_CODE
  -逾期原因 OVERDUE_CAUSE
  */
  _stores.storeFactory = {
    createDictStore:function(code){//创建字典数据
      if(_stores['/dict/code/' + code + '/']){
      }else{
        _stores['/dict/code/' + code + '/'] =  new CacheableRest({
          authRequired:true,//TBD
          target:  urlPrefix + '/dict/code/' + code + '/',
          parse:function(res){
            var resObj = JSON.parse(res);
            return resObj.body;
          }
        });
      }
      return _stores['/dict/code/' + code + '/'];
    }
  };
  return _stores;
});
