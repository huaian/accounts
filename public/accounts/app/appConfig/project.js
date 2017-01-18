/*设置全局配置*/
define([],function() {
    "use strict";
    /*project related directory definition start*/
    var projectConfig = {
      projectName:'pc',//project app name
      title:'管理系统',
      loginUrl:dojoConfig.isH5?'h5/view/login':'pc/view/login',//login url
      indexUrl:dojoConfig.isH5?'h5/view/index':'pc/view/index',//index url
      //errorUrl:'pc/error',
      isH5:dojoConfig.isH5,//env check [true,false,'auto']
      isOffline:false,//for offline test.if this value is set,all model request will be failed
      enableRoute:true,//是否允许各个页面单独路由
      appStoreLifeTime:'0.42D',//store的默认过期时间
      useRest:true//使用rest风格接口，请求数据定义有关
    };
    /*project related directory definition end*/
    return projectConfig;
});
