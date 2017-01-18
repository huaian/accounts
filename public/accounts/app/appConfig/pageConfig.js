/*设置页面头部 title*/
define([],function() {
    "use strict";
    var pageIdConfig = {
        index: ["281001", "282001"]
    };
    /**
    @description 设置麻袋理财跟踪id
    */
    var trackConfig = {
      'h5/view/simple_form':{
        entity : null, //land的时候这个必须设置为null，我也不知道为什么不设置不行。
        key : "pages",
        topic : "simple_form"
      },
      'h5/view/question':{
        entity : null, //land的时候这个必须设置为null，我也不知道为什么不设置不行。
        key : "pages",
        topic : "question"
      },
    };

    /*配置页面名称*/
    var pageNameConfig = {
        //h5
        'h5/view/login':'登录',
        'h5/view/task_list':'任务列表',
        'h5/view/task_detail':'客户详细信息',
        //
        'h5/view/simple_form':'中腾信金融',
        'h5/view/submit_success':'提交成功',
        'h5/view/subscribe_success':'预约成功',
        'h5/view/supplemental_first':'身份信息录入',
        'h5/view/supplemental_second':'借款需求信息录入',
        'h5/view/supplemental_success':'资料提交成功',
        'h5/view/business_type':'选择业务类型',
        'h5/view/apply_contract':'申请合约',
        'h5/view/approve_search':'审批查询',
        'h5/view/qianhai_authorization':'前海征信授权',
        'h5/view/borrow_requirement':'借款需求',
        'h5/view/life_material':'生活资料',
        'h5/view/work_material':'工作资料',
        'h5/view/contact_material':'联系人资料',
        'h5/view/experience':'操作指引',
        'h5/view/proves':'证明文件',
        'h5/view/question':'常见问题',
        'h5/view/city':'选择城市',
        'h5/view/largest_consumer/largest_consumer':'大消费活动',
        //pc
        //'pc/view/index':'审批系统',
        'pc/view/login':'登录',
    };

    var pageConfig = {
        pageIdConfig:pageIdConfig,
        pageNameConfig:pageNameConfig,
        trackConfig:trackConfig,
    };
    return pageConfig;
});
