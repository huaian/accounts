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

  //下载通话音频文件
  //use template http://10.3.1.241/loaning-web/call-center/record/file?fileUrl=http://10.21.2.76/voices/record/20160712/4000006-20160712163805-13717089090-075522733134-record-ztxcs76m-1468312685.61210.mp3&uniqueId=ztxcs76m-1468312685.61210


    //系统通知
    _stores.announcement = new CRest({
      target: urlPrefix + '/common/announcement/',
      authRequired:true
    });

    //系统通知
    _stores.announcements = new CRest({
      target: urlPrefix + '/common/announcements/',
      authRequired:true
    });

  return _stores;
});
