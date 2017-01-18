({
	appDir: "../dist/app",
  baseUrl: "kai/0.1/scripts",
  dir: "../dest/app",
    //fileExclusionRegExp:'/^demo_(\w)+.js|demo_(\w)+.html/',
		//|demo_
    //fileExclusionRegExp: /^[\w,-]*.css$|^[\w,-]*.min.css$|^(node_modules)\.js/,
		fileExclusionRegExp:/^[\w,-]+\.ts$|kaiDocs|node_modules|build.txt|static_html|sass|config.rb|.sass-cache|test_json|nightwatch|webdriverio|README|build-report|_test|Gruntfile|\.md|package.json/,
    /*modules: [
        {
            name: "main",
            out:"main"
        }
    ],
    */
    //optimize:'uglify',
    optimize:'uglify2',
    //name: "main",
    removeCombined:true,
    preserveLicenseComments: true,
    uglify2: {
    	toplevel: true,
    	except: ['$super'],
    	ascii_only: true,
    	compress: {
    		drop_console: true,
    		dead_code: true,
    		sequences: true,
    		conditionals: true,
    		booleans: true,
    		unused: true,
    		if_return: true,
            join_vars: true
    	},
    	/*beautify: {
    		width   : 1000,
    	},*/
    	mangle  : {
    		except: ['$super']
    	}
    },
    optimizeCss:"none",
    //mainConfigFile: 'main.js',

    /*
    "standard"：标准的压缩方式；
	"standard.keepLines"：保留换行；
	"standard.keepComments"：保留注释；
	"standard.keepComments.keepLines"：保留换行；
	"none"：不压缩；
	*/
    paths: {
    },

    //start of shim
    shim:{
        _: {
            exports: '_'
        },
        jquery:{
            exports:'jquery'
        },
        Backbone:{
            deps   : ['_', 'jquery'],
            exports: 'Backbone'
        },
        BootStrap:{
            deps   : ['jquery'],
        },
        F:{
            deps   : ['jquery'],
            exports: 'Fastclick'
        },
        lazyload:{
            deps:['jquery'],
            exports:'lazyload'
        },
        zepto             : {
            exports: 'zepto'
        },
        libs          : {
            deps   : ['_', '$', 'Backbone'],
            exports: 'libs'
        },
        libs_pc         : {
            deps   : ['_', '$', 'Backbone'],
            exports: 'libs'
        },
        initializer:{
            deps:['Backbone']
        },
        swipe:{
            deps:['jquery']
        },
        ti_net_ccic2JwsClient:{
            deps:['ti_net_jWebSocket']
        }
    },
    //start of shim

    "map"      : {
        "*": {
            "cUtility"   : "cUtilCommon",
            "cStore"     : "cLocalStore",
            "CommonStore": "cCommonStore",
            'css': 'plugin/vendor/require-css/css', // or whatever the path to require-css is
        }
    },

    packages : [
        {
            location: '3rdlibs/dbootstrap-0.1.1',
            name: 'dbootstrap'
        },
        {
            name: 'dgrid',
            location: 'dgrid',
            lib:'.',
            main:'OnDemandGrid',
        },
        {
            name     : 'dijit',
            location : 'dijit',
            main:'main',
            lib: '.'  ,
            "dependencies": {
                "dojo":"1.10.4"
            },
        },
        {
            name     : 'dojo',
            location : 'dojo',
            main:'main',
            lib: '.'
        },
        {
            name     : 'dojox',
            location : 'dojox',
            main: 'main',
            lib: '.'  ,
            "dependencies": {
                "dojo":"1.10.4",
                "dijit":"1.10.4"
            }
        },
        {
            name     : 'doh',
            location : 'util/doh',
            main : 'main',
            lib: '.'
        },
        {
            name: 'dstore',
            location: 'dstore',
            main:'Store',
            lib: '.'
        },
        {
            name     : 'xstyle',
            location : 'xstyle',
            main: 'main',
            lib: '.'

        },
        {
            name     : 'put-selector',
            location : 'put-selector',
            main: 'main',
            lib: '.'

        },
        {
            name     : 'demos',
            location : 'demos',
            main: 'main',
            lib: '.'
        },
        /*自定义dojo类*/
        {
            name     : 'custom',
            location : 'custom',
            main: 'main',
            lib: '.'
        },
        /*业务widget类*/
        {
            name     : 'Widgets_pc',
            location : '../../../app/pc/widget',
            main: 'main',
            lib: '.'
        },
        /*pc业务data类*/
        {
            name     : 'Data_pc',
            location : '../../../app/pc/data',
            main: 'main',
            lib: '.'
        },
        /*业务event类*/
        {
            name     : 'Events_pc',
            location : '../../../app/pc/events',
            main: 'main',
            lib: '.'
        },
        /*业务event类*/
        {
            name     : 'Elements_pc',
            location :  '../../../app/pc/elements',
            main: 'main',
            lib: '.'
        },
        /*业务event类*/
        {
            name     : 'viewUtils_pc',
            location :  '../../../app/pc/viewUtils',
            main: 'main',
            lib: '.'
        },
        ],


})
