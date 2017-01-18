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
  h5 start
  */
  {id:'h5/view/login',parent:'h5/view/index',viewName:'login',useModule:true,viewTitle:'登录',isDefault:true,indexLevel:true},
  {id:'h5/view/register',parent:'h5/view/index',viewName:'register',useModule:true,viewTitle:'注册',isDefault:true,indexLevel:true,templatePath:'kaiView/h5/view/register/template/template'},
  {id:'h5/view/incomes',parent:'h5/view/index',viewName:'incomes',useModule:true,viewTitle:'收入',isDefault:true,indexLevel:true},
  {id:'h5/view/incomes_list',parent:'h5/view/index',viewName:'incomes_list',useModule:true,viewTitle:'收入列表',isDefault:true,indexLevel:true},
  {id:'h5/view/expenses',parent:'h5/view/index',viewName:'expenses',useModule:true,viewTitle:'支出',isDefault:true,indexLevel:true},
  {id:'h5/view/expenses_list',parent:'h5/view/index',viewName:'expenses_list',useModule:true,viewTitle:'支出列表',isDefault:true,indexLevel:true},
  {id:'h5/view/statistics',parent:'h5/view/index',viewName:'statistics',useModule:true,viewTitle:'当月实时',isDefault:true,indexLevel:true},
  {id:'h5/view/statistics_search',redirectView: 'h5/view/statistics',parent:'h5/view/index',viewName:'statistics_search',useModule:true,viewTitle:'统计查询',isDefault:true,indexLevel:true},
  {id:'h5/view/mobile_index',parent:'h5/view/index',viewName:'mobile_index',useModule:true,viewTitle:'主页',isDefault:true,indexLevel:true},
  {id:'h5/view/system_notification',parent:'h5/view/index',viewName:'system_notification',useModule:true,viewTitle:'系统通知',isDefault:true,indexLevel:true},
  {id:'h5/view/debit',parent:'h5/view/index',viewName:'debit',useModule:true,viewTitle:'借款',isDefault:true,indexLevel:true},
  {id:'h5/view/sign_in',parent:'h5/view/index',viewName:'sign_in',useModule:true,viewTitle:'签到',isDefault:true,indexLevel:true,templatePath:'kaiView/h5/view/sign_in/template/template'},
  {id:'h5/view/discuss',parent:'h5/view/index',viewName:'discuss',useModule:true,viewTitle:'讨论区',isDefault:true,indexLevel:true},
  {id:'h5/view/recommendedShops',parent:'h5/view/index',viewName:'recommendedShops',useModule:true,viewTitle:'推荐商户',isDefault:true,indexLevel:true},
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
