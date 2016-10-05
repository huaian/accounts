/*设置页面配置信息*/
define([
],function(
) {
  "use strict";
	var viewCollectionData = [
	/*
	isVirtualView: 没有对应的实在js和模版文件,可以访问，因此不改变js和html的路径
	需要将父级别的路径配置在前面
  id为空的条目将作为默认路由,且使用其routeName属性作为目的路由
	*/
  /*
  pc start
  */
  {id:'kaiView/pc/view',parent:'',viewName:'pc/view'},//
  {id:'kaiView/pc/view/login',parent:'kaiView/pc/view',viewName:'login'},
  {id:'kaiView/pc/view/index',parent:'kaiView/pc/view',viewName:'index'},
  {id:'pc/view/index',parent:'pc/view',viewName:'index',hasTemplate:true,templatePath:'kaiView/pc/template/index'},
	{id:'pc/view',parent:'',viewName:'pc/view',needPostfix:true},
	//{id:'pc/view/index',parent:'pc/view',viewName:'index',nodeName:'首页',isVirtualView:true,isDefault:true,needPostfix:true},
  {id:'pc/view/login',parent:'pc/view',viewName:'login', nodeName: '登录',isDefault:false,hasTemplate:false},//登录页面
  {id:'pc/view/customer_search',parent:'pc/view/index',viewName:'customer_search', nodeName: '客户查询',isDefault:false,indexLevel:true},//客户查询
  {id:'pc/view/import_cases',parent:'pc/view/index',viewName:'import_cases', nodeName: '案件导入',isDefault:false,indexLevel:true},//案件导入
  {id:'pc/view/system_notification',parent:'pc/view/index',viewName:'system_notification', nodeName: '系统通知',isDefault:false,indexLevel:true},//系统通知
  {id:'pc/view/my_task',parent:'pc/view/index',viewName:'my_task', nodeName: '我的任务',isDefault:false,indexLevel:true},//我的任务
  //外访人员在权限系统配置，先注释
  //{id:'pc/view/outbound_people_infomation',parent:'pc/view/index',viewName:'outbound_people_infomation', nodeName: '外访人员信息',isDefault:false,indexLevel:true},//外访人员信息
  {id:'pc/view/customer_details',parent:'pc/view/index',viewName:'customer_details', nodeName: '客户详细信息',isDefault:false,indexLevel:true},//客户详细页面
  {id:'pc/view/history_details',parent:'pc/view/index',viewName:'history_details', nodeName: '外访记录',isDefault:false,indexLevel:true},//外访记录
  /*
  pc end
  */

  /*
  h5 start
  */
  {id:'h5/view',parent:'',viewName:'h5/view',isVirtualView:true},
	{id:'h5/view/index',parent:'h5/view',viewName:'index',viewTitle:'首页',isVirtualView:true,needPostfix:true,hasTemplate:true,useModule:true},
  //{id:'',parent:'',viewName:'h5/view',routeName:'h5/view/login'},//default route view
  //CUISHOU
  {id:'h5/view/login',parent:'h5/view/index',viewName:'login',useModule:true,viewTitle:'账号绑定',isDefault:true,},
  {id:'h5/view/register',parent:'h5/view/index',viewName:'register',useModule:true,viewTitle:'注册',isDefault:true,},
  {id:'h5/view/incomes',parent:'h5/view/index',viewName:'incomes',useModule:true,viewTitle:'收入',isDefault:true,},
  {id:'h5/view/incomes_list',parent:'h5/view/index',viewName:'incomes_list',useModule:true,viewTitle:'收入列表',isDefault:true,},
  {id:'h5/view/expenses',parent:'h5/view/index',viewName:'expenses',useModule:true,viewTitle:'支出',isDefault:true,},
  {id:'h5/view/expenses_list',parent:'h5/view/index',viewName:'expenses_list',useModule:true,viewTitle:'支出列表',isDefault:true,},
  {id:'h5/view/statistics',parent:'h5/view/index',viewName:'statistics',useModule:true,viewTitle:'当月实时',isDefault:true,},
  {id:'h5/view/statistics_search',redirectView: 'h5/view/statistics',parent:'h5/view/index',viewName:'statistics_search',useModule:true,viewTitle:'统计查询',isDefault:true,},
  {id:'h5/view/mobile_index',parent:'h5/view/index',viewName:'mobile_index',useModule:true,viewTitle:'主页',isDefault:true,},
  {id:'h5/view/system_notification',parent:'h5/view/index',viewName:'system_notification',useModule:true,viewTitle:'系统通知',isDefault:true,},
  /*
  h5 end
  */
	];
  //default route view 设置首页路由
  if(dojoConfig.isH5){
    viewCollectionData.unshift({id:'',parent:'',viewName:'index',routeName:'h5/view/mobile_index'});
  }else{
    viewCollectionData.unshift({id:'',parent:'',viewName:'index',routeName:'pc/view/index'});
  }
	return viewCollectionData;
});
