/**
* This is the default application build profile used by the boilerplate. While it looks similar, this build profile
* is different from the package build profile at `app/package.js` in the following ways:
*
* 1. you can have multiple application build profiles (e.g. one for desktop, one for tablet, etc.), but only one
*    package build profile;
* 2. the package build profile only configures the `resourceTags` for the files in the package, whereas the
*    application build profile tells the build system how to build the entire application.
*
* Look to `util/build/buildControlDefault.js` for more information on available options and their default values.
*/
var kaiPrefx = '/var/lib/jenkins/jobs/kai-cuishou-sit/workspace/';//小呆的目录多了一级
//var kaiPrefx = '../kai/';//小呆的目录多了一级
var profile = {
	//releaseDir: "./app",    //相对于basePath路径，现在basePath已经定位到js文件夹下
	//releaseName: "lib",    //在releaseDir文件加下，此处是app文件夹下创建个lib文件夹
	selectorEngine:"lite",
	// `basePath` is relative to the directory containing this profile file; in this case, it is being set to the
	// src/ directory, which is the same place as the `baseUrl` directory in the loader configuration. (If you change
	// this, you will also need to update run.js.)
	//需要改变路径，如果文件夹路径不对的话
	basePath: '../..',//,//相对于profile.js文件的路径，例如我喜欢把profile.js文件放在util->buildScript->profiles文件夹下

	// This is the directory within the release directory where built packages will be placed. The release directory
	// itself is defined by `build.sh`. You should probably not use this; it is a legacy option dating back to Dojo
	// 0.4.
	// If you do use this, you will need to update build.sh, too.
	// releaseName: '',

	// Builds a new release.
	action: 'release',

	// Strips all comments and whitespace from CSS files and inlines @imports where possible.
	cssOptimize: 'comments',

	// Excludes tests, demos, and original template files from being included in the built version.
	mini: true,

	// Uses Closure Compiler as the JavaScript minifier. This can also be set to "shrinksafe" to use ShrinkSafe,
	// though ShrinkSafe is deprecated and not recommended.
	// This option defaults to "" (no compression) if not provided.
	//optimize: 'closure',
	optimize: '',

	// We're building layers, so we need to set the minifier to use for those, too.
	// This defaults to "shrinksafe" if not provided.
	layerOptimize: '',

	// A list of packages that will be built. The same packages defined in the loader should be defined here in the
	// build profile.
	//start of packages
	packages : [
		/*
		{
		name     : 'demos',
		location : '0.1/scripts/3rdlibs/dojo-1.10.4/demos',
		main: 'main',
		lib: '.',
		destLocation: '0.1/scripts/3rdlibs/dojo-1.10.4/demos',
	},
	*/

	{
		name: 'react',
		location: kaiPrefx + '0.1/scripts/react',
		destLocation:"./kai/0.1/scripts/react"
	},

	{
		name: 'appMain',
		location: './app/appMain',
		destLocation:'./' + "/app/appMain"
	},

	{
		name: 'appConfig',
		location: './app/config',
		//destLocation:'./' + "/app/config"
		destLocation:'./'  + "/app/config"
	},

	{
		name: 'underscore',
		location: kaiPrefx + '0.1/scripts/underscore',
		main:'underscore-1.8.3',
		destLocation:"./kai/0.1/scripts/underscore"
	},

	{
		name: 'jquery',
		location: kaiPrefx + '0.1/scripts/jquery',
		main:'jquery',
		destLocation:"./kai/0.1/scripts/jquery"
	},

	{
		name: 'ti_net',
		location: 'http://10.21.2.76/jws/sourceCode/code',
	},

	{
		name: 'dataHelper',
		location: './app/dataHelper',
		destLocation:'./' + "/app/dataHelper"
	},

	{
		name: 'model',
		location: './app/model',
		//destLocation:'./' + "/app/model"
	},

	{
		name: 'viewUtils',
		location: './app/viewUtils',
		destLocation:'./' + "/app/viewUtils"
	},

	{
		name: 'pc',
		location: './app/pc',
		destLocation:'./'   + "/app/pc"
	},

	{
		name: 'h5',
		location: './app/h5',
		destLocation:'./'  + "/app/h5"
	},

	{
		name: 'store',
		location: './app/store',
		destLocation:'./' + "/app/store"
	},

	{
		name: 'appRestStore',
		location: './app/appRestStore',
		destLocation:'./' + "/app/appRestStore"
	},

	{
		name: 'tutorial',
		location: './app/tutorial',
		destLocation:'./'  + "/app/tutorial"
	},

	{
		name: 'res',
		location: kaiPrefx + '0.1/res',
		destLocation:"./kai/0.1/res"
	},

	{
		name: 'img',
		location: kaiPrefx + '0.1/img',
		destLocation:"./kai/0.1/img"
	},

	{
		name: 'style',
		location: kaiPrefx + '0.1/style',
		destLocation:"./kai/0.1/style"
	},

	{
		name:'3rdlibs',
		location:kaiPrefx + "0.1/scripts/3rdlibs",
		destLocation:"./kai/0.1/scripts/3rdlibs"
	},

	{
		name:'common',
		location:kaiPrefx + '0.1/scripts/common',
		destLocation:"./kai/0.1/scripts/common"
	},

	{
		name:'controller',
		location:kaiPrefx + '0.1/scripts/controller',
		destLocation:"./kai/0.1/scripts/controller"
	},

	{
		name     : 'custom',
		location : kaiPrefx + '0.1/scripts/custom',
		main: 'main',
		lib: '.',
		destLocation: './kai/0.1/scripts/custom',
	},

	{
		name:'data',
		location:kaiPrefx + '0.1/scripts/data',
		destLocation:"./kai/0.1/scripts/data"
	},

	{
		name     : 'dojo',
		location : kaiPrefx + '0.1/scripts/dojo',
		main:'main',
		lib: '.',
		destLocation:"./kai/0.1/scripts/dojo"
	},

	{
		name     : 'dijit',
		location : kaiPrefx + '0.1/scripts/dijit',
		main:'main',
		//lib: '.'  ,
		/*
		"dependencies": {
			//"dojo":"1.10.4"
		},
		*/
		destLocation:"./kai/0.1/scripts/dijit"
	},

	{
		name     : 'dojox',
		location : kaiPrefx + '0.1/scripts/dojox',
		main: 'main',
		lib: '.'  ,
		"dependencies": {
			"dojo":"1.10.4",
			"dijit":"1.10.4"
		},
		destLocation:"./kai/0.1/scripts/dojox"
	},

	{
		name: 'dstore',
		location: kaiPrefx + '0.1/scripts/dstore',
		main:'Store',
		lib: '.',
		destLocation: './kai/0.1/scripts/dstore',
	},

	{
		name: 'dgrid',
		location: kaiPrefx + '0.1/scripts/dgrid',
		lib:'.',
		main:'OnDemandGrid',
		destLocation: './kai/0.1/scripts/dgrid',
	},

	{
		name:'page',
		location:kaiPrefx + '0.1/scripts/page',
		destLocation:"./kai/0.1/scripts/page"
	},

	{
		name:'plugin',
		location:kaiPrefx + '0.1/scripts/plugin',
		destLocation:"./kai/0.1/scripts/plugin"
	},

	{
		name     : 'put-selector',
		location : kaiPrefx + '0.1/scripts/put-selector',
		main: 'main',
		lib: '.',
		destLocation: './kai/0.1/scripts/put-selector',
	},

	{
		name:'topic',
		location:kaiPrefx + '0.1/scripts/topic',
		destLocation:"./kai/0.1/scripts/topic"
	},

	{
		name: 'ui',
		location: kaiPrefx + '0.1/scripts/ui',
		destLocation:"./kai/0.1/scripts/ui"
	},

	{
		name:'util',
		location:kaiPrefx + '0.1/scripts/util',
		destLocation:"./kai/0.1/scripts/util"
	},

	{
		name:'cutil',
		location:kaiPrefx + '0.1/scripts/cutil',
		destLocation:"./kai/0.1/scripts/cutil"
	},

	{
		name:'vendors',
		location:kaiPrefx + '0.1/scripts/vendors',
		destLocation:"./kai/0.1/scripts/vendors"
	},

	{
		name:'widgets',
		location:kaiPrefx + '0.1/scripts/widgets',
		destLocation:"./kai/0.1/scripts/widgets"
	},

	{
		name     : 'xstyle',
		location : kaiPrefx + '0.1/scripts/xstyle',
		main: 'main',
		lib: '.',
		destLocation: './kai/0.1/scripts/xstyle',
	},

	{
		name     : 'bootstrap',
		location : kaiPrefx + '0.1/scripts/bootstrap',
		main: 'main',
		lib: '.',
		destLocation: './kai/0.1/scripts/bootstrap'
	},

	{
		name: 'kaiMain',
		location: kaiPrefx + '0.1/scripts/kaiMain',
		destLocation: './kai/0.1/scripts/kaiMain'
	},

	{
		name: 'kaiView',
		location: kaiPrefx + '0.1/scripts/kaiView',
		destLocation: './kai/0.1/scripts/kaiView'
	},

	/*
	{
	location: '0.1/scripts/3rdlibs/dbootstrap-0.1.1',
	name: 'dbootstrap',
	destLocation:"0.1/scripts/3rdlibs/dbootstrap-0.1.1"
},
*/
/*
{
name     : 'doh',
location : '0.1/scripts/3rdlibs/dojo-1.10.4/util/doh',
main : 'main',
lib: '.',
destLocation:"0.1/scripts/3rdlibs/dojo-1.10.4/util/doh"
},
*/
],
//end of packages

// Strips all calls to console functions within the code. You can also set this to "warn" to strip everything
// but console.error, and any other truthy value to strip everything but console.warn and console.error.
// This defaults to "normal" (strip all but warn and error) if not provided.
stripConsole: 'all',

// The default selector engine is not included by default in a dojo.js build in order to make mobile builds
// smaller. We add it back here to avoid that extra HTTP request. There is also an "acme" selector available; if
// you use that, you will need to set the `selectorEngine` property in index.html, too.
selectorEngine: 'lite',

// Any module in an application can be converted into a "layer" module, which consists of the original module +
// additional dependencies built into the same file. Using layers allows applications to reduce the number of HTTP
// requests by combining all JavaScript into a single file.
layers: {
	// This is the main loader module. It is a little special because it is treated like an AMD module even though
	// it is actually just plain JavaScript. There is some extra magic in the build system specifically for this
	// module ID.
	'dojo/dojo': {
		// By default, the build system will try to include `dojo/main` in the built `dojo/dojo` layer, which adds
		// a bunch of stuff we do not want or need. We want the initial script load to be as small and quick t,o
		// load as possible, so we configure it as a custom, bootable base.
		include: [
			"dojo/store/Memory",
			"dojo/topic",
			"dojo/_base/lang",
			"dojo/_base/declare",
			"dojo/_base/array",
			'dojo/Deferred',
			"dojo/aspect",
			"dojo/on",
			"dojo/parser",
			"dojo/dom-construct",
			"dojo/dom",
			"dojo/domReady",
			///*
			"dojo/cookie", // cookie
			"dojo/promise/all",
			"dojo/dom", // dom.isDescendant
			"dojo/dom-class", // domClass.add domClass.remove domClass.replace domClass.toggle
			"dojo/dom-geometry", // domGeometry.setMarginBox domGeometry.position
			"dojo/dom-style", // domStyle.set
			"dojo/errors/create", // createError
			"dojo/fx", // fxUtils.wipeIn fxUtils.wipeOut
			"dojo/has",
			"dojo/_base/kernel", // kernel.deprecated
			"dojo/keys", // arrows etc.
			"dojo/_base/lang", // lang.getObject lang.mixin lang.hitch
			"dojo/on", // on(), on.selector()
			"dojo/topic",
			"dojo/touch",
			"dojo/when",
			"dojo/_base/Deferred",
			"dojo/data/util/sorter",
			"dojo/dnd/autoscroll",
			"dojo/request/handlers",
			"dojo/request/default",
			"dojo/errors/RequestError",
			"dojo/errors/RequestTimeoutError",
			"dojo/dnd/Mover",
			"dojo/dnd/common",
			"dojo/request/util",
			"dojo/request/xhr",
			"dojo/request/watch",
			"dojo/_base/json",
			"dojo/_base/html",
			"dojo/dnd/TimedMoveable",
			"dojo/dnd/Moveable",
			"dojo/_base/xhr",
			"dojo/i18n",
			"dojo/date/locale",
			"dojo/data/ObjectStore",
			"dojo/store/JsonRest",
			//dijit
			"dijit/registry",
			"dijit/_WidgetBase",
			"dijit/tree/ObjectStoreModel",
			"dijit/Dialog",
			"dijit/Tree",
			"dijit/form/Form",
			"dijit/form/TextBox",
			"dijit/form/CheckBox",
			"dijit/ConfirmDialog",
			"dijit/form/Textarea",
			"dijit/layout/LinkPane",
			"dijit/layout/TabContainer",
			"dijit/layout/ContentPane",
			"dijit/layout/BorderContainer",
			"dijit/layout/AccordionContainer",
			"dijit/form/RadioButton",
			"dijit/form/DateTextBox",
			"dijit/form/ValidationTextBox",
			"dijit/_WidgetBase",
			"dijit/_TemplatedMixin",
			"dijit/_WidgetsInTemplateMixin",
			"dijit/form/NumberSpinner",
			"dijit/Toolbar",
			"dijit/Fieldset",
			"dijit/form/Button",
			"dijit/form/FilteringSelect",
			"dijit/form/DataList",
			"dijit/layout/Container",
			"dijit/form/Select",
			"dijit/form/TimeTextBox",
			//dojox
			"dojox/validate",
			"dojox/validate/web",
			"dojox/layout/ExpandoPane",
			"dojox/encoding/digests/MD5",
			"dojox/layout/ResizeHandle",
			"dojox/form/nls/zh/CheckedMultiSelect",
			//dstore
			"dstore/Rest",
			"dstore/Cache",
			"dstore/Trackable",
			//dgrid
			"dgrid/Grid",
			"dgrid/extensions/Pagination",
			"dgrid/Selection",
			'dgrid/extensions/ColumnResizer',
			"dgrid/Editor",
			"dgrid/Keyboard",
			"dgrid/extensions/ColumnHider",
			"dgrid/Selector",
			//Custom
			"jquery",
			//vendors
			"plugin/vendor/jquery.ui.widget",
			'plugin/jquery.fileupload',
			//'react/react-dom',
			//
			"custom/dstore/createAsyncStore",
			"topic/c.topic",
			"plugin/text",
			"plugin/vendor/require-css/css",
			"data/model/c.appBase.model",
			"data/model/dataHandler",
			"data/model/c.model",
			"data/model/c.abstract.model",
			///*
			"data/model/dataHandlerFactory",
			"custom/dgrid/cdgrid",
			"custom/dijit/form/DateTextBox",
			"custom/helper/dijitHelper",
			"custom/dijit/LocationSelector",
			"custom/dstore/Trackable",
			"custom/dstore/Rest",
			"custom/dstore/Request",
			"custom/dstore/RestStore",
			"custom/dijit/CheckTreeSelector",
			"custom/dijit/confirm_dialog",
			//
			"cutil/c.util.route",
			"cutil/c.util.dgrid",
			"cutil/c.util.data",
			"cutil/c.util.config",
			//
			"3rdlibs/libs",//pc libs
			"page/viewFactory",
			"controller/initializer",
			"plugin/vendor/require-css/css",
			"plugin/highlight/highlight",
			//UI
			"ui/loading/ui.loading",
			"ui/alert/ui.alert",
			"ui/ui.mask",
			"ui/tip/ui.tip",
			"ui/inputclear/ui.inputclear",
			//Kaiview
			"kaiView/pc/view/index",
			"kaiView/pc/widget/dijit/code_dialog",
			"kaiView/pc/data/index",
			"kaiView/pc/widget/dijit/interface_states_dialog",
			"kaiView/pc/events/index",
			"kaiView/pc/widget/dijit/change_password_dialog",
			"kaiView/pc/viewUtils/index",
		],
		customBase: true,
		boot: true,
		includeLocales: [ 'zh' ]
	},

	// In this demo application, we load `app/main` on the client-side, so here we build a separate layer containing
	// that code. (Practically speaking, you would probably just want to roll everything into the `dojo/dojo` layer,
	// but this helps provide a basic illustration of how multi-layer builds work.) Note that when you create a new
	// layer, the module referenced by the layer is always included in the layer (in this case, `app/main`), so it
	// does not need to be explicitly defined in the `include` array.
	///*
	'appMain/main': {
		include:[
			"appConfig/interface",
			"appConfig/pageConfig",
			"appConfig/project",
			"appConfig/views",
			"pc/store/restStores",
			"pc/model/models",
			"pc/page/appBaseViewExtension",
			//"pc/store/stores",
		],
		dependencies: [],
		includeLocales: [ 'zh' ]
	}
//*/
},

// Providing hints to the build system allows code to be conditionally removed on a more granular level than simple
// module dependencies can allow. This is especially useful for creating tiny mobile builds. Keep in mind that dead
// code removal only happens in minifiers that support it! Currently, only Closure Compiler to the Dojo build system
// with dead code removal. A documented list of has-flags in use within the toolkit can be found at
// <http://dojotoolkit.org/reference-guide/dojo/has.html>.
staticHasFeatures: {
	// The trace & log APIs are used for debugging the loader, so we do not need them in the build.
	'dojo-trace-api': false,

	'dojo-log-api': false,

	// This causes normally private loader data to be exposed for debugging. In a release build, we do not need
	// that either.
	'dojo-publish-privates': false,

	// This application is pure AMD, so get rid of the legacy loader.
	'dojo-sync-loader': false,

	// `dojo-xhr-factory` relies on `dojo-sync-loader`, which we have removed.
	'dojo-xhr-factory': false,

	// We are not loading tests in production, so we can get rid of some test sniffing code.
	'dojo-test-sniff': false,

	"config-deferredInstrumentation": 0,
	"config-dojo-loader-catches": 0,
	"dojo-amd-factory-scan": 0,
	"dojo-combo-api": 0,
	"dojo-config-api": 1,
	"dojo-config-require": 0,
	"dojo-debug-messages": 0,
	"dojo-dom-ready-api": 1,
	"dojo-firebug": 0,
	"dojo-guarantee-console": 1,
	"dojo-has-api": 1,
	"dojo-inject-api": 1,
	"dojo-loader": 1,
	"dojo-log-api": 0,
	"dojo-modulePaths": 0,
	"dojo-moduleUrl": 0,
	"dojo-publish-privates": 0,
	"dojo-requirejs-api": 0,
	"dojo-sniff": 1,
	"dojo-sync-loader": 0,
	"dojo-test-sniff": 0,
	"dojo-timeout-api": 0,
	"dojo-trace-api": 0,
	"dojo-undef-api": 0,
	"dojo-v1x-i18n-Api": 1,
	"dom": 1,
	"host-browser": 1,
	"extend-dojo": 1,
},

defaultConfig: {
	hasCache:{
		"dojo-built": 1,
		"dojo-loader": 1,
		"dom": 1,
		"host-browser": 1,
		"config-selectorEngine": "lite",
		"config-tlmSiblingOfDojo":false
	},
	async: 1,
	locale: "zh"
}
};
