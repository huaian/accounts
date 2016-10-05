/**
应用层的常量配置,原则上不应hardcode常量在本地，放在本地可以作为权宜之计，待日后做成接口
*/
 define([],function(){
    "use strict";
    var constData = {
        verifyCodeType: { // 验证码接口类型，简表或登陆
            'simple': '001',
            'login': '002'
        }
    };
    return constData;
});
