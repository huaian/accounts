/*
环境接口信息配置
参数说明：
host 前端域名地址
protocol 接口协议
domain：接口域名
path：接口的path
preventAlert：是否禁止使用弹窗
isDefault：当没有匹配时的使用的默认配置
*/
define([
], function (
) {
  "use strict";
  var interfaceConfig = [
    //node env local used
    {
      host:'10.2.130.145',
      protocol:'http',
      //domain:(function(){return location.host})(),
      domain: '10.2.130.145:3000',
      path:'accounts',
      preventAlert:false,
      isDefault:false,
      envCode:'LOCAL',
      trackerPostUrl:{
      }
    },
    //node env local used
    {
      host:'192.168.1.6:8000',
      protocol:'http',
      //domain:(function(){return location.host})(),
      //domain: '192.168.1.6:3000',
      domain: '192.168.1.7:3000',
      path:'accounts',
      preventAlert:false,
      isDefault:false,
      envCode:'LOCAL',
      trackerPostUrl:{
      }
    },
    //product enviornment
    {
      host:'121.42.51.73:3000',
      protocol:'http',
      //domain:(function(){return location.host})(),
      //domain: '10.2.130.145:3000',
      // domain: '121.42.51.73:3000',
      domain: '118.24.221.219:3000',
      path:'accounts',
      preventAlert:false,
      isDefault:true,
      envCode:'PRODUCT',
      trackerPostUrl:{
      },
      hybrid:{
        apkDownloadURL:'http://121.42.51.73:3000/womai.apk',
        versionCheckURL:'http://121.42.51.73:3000/version',
      }
    },
  ];
  return interfaceConfig;
});
