/**
@description 单页应用的入口文件，设置项目配置信息
*/
define([
],function(
) {
	//var projectName = '';//使用相对路径寻找资源,目前使用相对路径，不需要配置
	//var projectName = srcParentDirectory;//使用相对路径寻找资源,目前使用相对路径，不需要配置
	/**
	@description 定义Kai路径和应用层包路径
	*/
	require({
		packages:[
			/*
			@description 需要访问的kai资源，不需要修改
			*/
			{
				name: 'kaiMain',
				location: kaiPrefx + './kai/0.1/scripts/kaiMain',
			},

			{
				name     : 'dojo',
				location : kaiPrefx + './kai/0.1/scripts/dojo',
				main:'main',
				lib: '.',
			},

			/**
			本地址资源路径配置
			*/

			{
				name: 'appConfig',
				location: appPrefix + './app/appConfig',
				main:'main'
			},

			{
				name: 'appRestStore',
				location: appPrefix + './app/appRestStore',
			},

			{
				name: 'dataHelper',
				location: appPrefix + './app/dataHelper',
			},

			{
				name: 'viewUtils',
				location:appPrefix + './app/viewUtils',
			},

			{
				name: 'appViewUtils',
				location:appPrefix + './app/appViewUtils',
			},

			{
				name: 'pc',
				location: appPrefix + './app/pc',
			},

			{
				name: 'h5',
				location: appPrefix + './app/h5',
			},

			{
				name: 'appMain',
				location: appPrefix + './app/appMain',
			}
		]
	});
	require([
		'appConfig/views',//view集合的定义
		'appConfig/project',//项目相关信息的定义
		'appConfig/interface',//接口环境定义
		'appConfig/pageConfig',//title定义
	],function(
		routes,
		projectConfig,
		interfaceConfig,
		pageConfig
	){
		require([
			'kaiMain/main'
		],function(
			kaiMainDefer
		){
			kaiMainDefer.then(function(controller){
				require([
					//'pc/model/models',//title定义
					'dojo/has!isH5?appRestStore/location:appRestStore/location',
					'dojo/has!isH5?h5/page/appBaseViewExtension:pc/page/appBaseViewExtension',
					'dojo/has!isH5?css!h5/res/style/h5:css!pc/res/style/pc',
				],function(
					locationRestStores,
					//models,
					viewExtension
				){
					//alert('应用层获得主导权');
					require({
						config:{
							/*
							配置传递给kai的信息
							*/
							'custom/dijit/RestLocationSelector':{
								restStores: locationRestStores
							},
							/*
							'custom/dgrid/cdgrid':{
								models:models//使用应用层models
							},
							'plugin/custom/imagescanutil':{
								models:models//使用应用层models
							}
							*/
						}
					});
					var app = _.extend({
						viewCollectionData:routes,
						projectConfig:projectConfig,
						interfaceConfig:interfaceConfig,
						pageConfig:pageConfig
					},{
						viewExtension:viewExtension
					});
					controller.start(app);
				});
			});
			console.log('kaiMain/main required');
			//alert('kaiMain/main required');
			});
	});
});
