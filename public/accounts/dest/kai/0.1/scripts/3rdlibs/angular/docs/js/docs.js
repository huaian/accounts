define("3rdlibs/angular/docs/js/docs",["dojo","dijit","dojox"],function(e,t,n){angular.module("docsApp",["ngRoute","ngCookies","ngSanitize","ngAnimate","DocsController","versionsData","pagesData","navData","directives","errors","examples","search","tutorials","versions","ui.bootstrap.dropdown"]).config(["$locationProvider",function(e){e.html5Mode(!0).hashPrefix("!")}]),angular.module("directives",[]).directive("backToTop",["$anchorScroll","$location",function(e,t){return function(n,a){a.on("click",function(a){t.hash(""),n.$apply(e)})}}]).directive("code",function(){return{restrict:"E",terminal:!0,compile:function(e){var t=e.hasClass("linenum"),n=/lang-(\S+)/.exec(e[0].className),a=n&&n[1],r=e.html();e.html(window.prettyPrintOne(r,a,t))}}}).directive("scrollYOffsetElement",["$anchorScroll",function(e){return function(t,n){e.yOffset=n}}]).directive("table",function(){return{restrict:"E",link:function(e,t,n){n["class"]||t.addClass("table table-bordered table-striped code-table")}}}),angular.module("DocsController",[]).controller("DocsController",["$scope","$rootScope","$location","$window","$cookies","NG_PAGES","NG_NAVIGATION","NG_VERSION",function(e,t,n,a,r,o,i,s){e.docsVersion=s.isSnapshot?"snapshot":s.version,e.navClass=function(e){return{active:e.href&&this.currentPage&&this.currentPage.path,current:this.currentPage&&this.currentPage.path===e.href,"nav-index-section":"section"===e.type}},e.$on("$includeContentLoaded",function(){var t=e.currentPage?e.currentPage.path:n.path();a._gaq.push(["_trackPageview",t])}),e.$watch(function(){return n.path()},function(t){if(t=t.replace(/^\/?(.+?)(\/index)?\/?$/,"$1"),currentPage=e.currentPage=o[t],currentPage){e.partialPath="partials/"+t+".html",e.currentArea=i[currentPage.area];var n=currentPage.path.split("/"),a=e.breadcrumb=[],r="";angular.forEach(n,function(e){r+=e,a.push({name:o[r]&&o[r].name||e,url:r}),r+="/"})}else e.currentArea=i.api,e.breadcrumb=[],e.partialPath="Error404.html"}),e.versionNumber=angular.version.full,e.version=angular.version.full+"  "+angular.version.codeName,e.loading=0;var l=/^(\/|\/index[^\.]*.html)$/;(!n.path()||l.test(n.path()))&&n.path("/api").replace()}]),angular.module("errors",["ngSanitize"]).filter("errorLink",["$sanitize",function(e){var t=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s\.\;\,\(\)\{\}<>]/g,n=/^mailto:/,a=/:\d+:\d+$/,r=function(e,t){return e.length>t?e.substr(0,t-3)+"...":e};return function(o,i){if(!o)return o;var s=i?' target="'+i+'"':"";return e(o.replace(t,function(e){return a.test(e)?e:(/^((ftp|https?):\/\/|mailto:)/.test(e)||(e="mailto:"+e),"<a"+s+' href="'+e+'">'+r(e.replace(n,""),60)+"</a>")}))}}]).directive("errorDisplay",["$location","errorLinkFilter",function(e,t){var n=function(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")},a=function(e){var t=arguments;return e.replace(/\{\d+\}/g,function(e){var n=+e.slice(1,-1);return n+1>=t.length?e:t[n+1]})};return{link:function(r,o,i){var s,l,c=e.search(),u=[i.errorDisplay];for(l=0;angular.isDefined(c["p"+l]);l++)u.push(c["p"+l]);s=n(a.apply(null,u)),o.html(t(s,"_blank"))}}}]),angular.module("examples",[]).directive("runnableExample",["$templateCache","$document",function(e,t){var n=".runnable-example-file",a=(t[0],'<nav class="runnable-example-tabs" ng-if="tabs">  <a ng-class="{active:$index==activeTabIndex}"ng-repeat="tab in tabs track by $index" href="" class="btn"ng-click="setTab($index)">    {{ tab }}  </a></nav>');return{restrict:"C",scope:!0,controller:["$scope",function(e){e.setTab=function(t){var n=e.tabs[t];e.activeTabIndex=t,e.$broadcast("tabChange",t,n)}}],compile:function(e){return e.html(a+e.html()),function(e,t){var a=t[0],r=a.querySelectorAll(n),o=[];Date.now();angular.forEach(r,function(e,t){o.push(e.getAttribute("name"))}),o.length>0&&(e.tabs=o,e.$on("tabChange",function(e,t,n){angular.forEach(r,function(e){e.style.display="none"});var a=r[t];a.style.display="block"}),e.setTab(0))}}}}]).factory("formPostData",["$document",function(e){return function(t,n,a){var r=n?"_blank":"_self",o=angular.element('<form style="display: none;" method="post" action="'+t+'" target="'+r+'"></form>');angular.forEach(a,function(e,t){var n=angular.element('<input type="hidden" name="'+t+'">');n.attr("value",e),o.append(n)}),e.find("body").append(o),o[0].submit(),o.remove()}}]).factory("createCopyrightNotice",function(){var e="Copyright "+(new Date).getFullYear()+" Google Inc. All Rights Reserved.\nUse of this source code is governed by an MIT-style license that\ncan be found in the LICENSE file at http://angular.io/license",t="\n\n/*\n"+e+"\n*/",n="\n\n<!-- \n"+e+"\n-->";return function(a){switch(a.substr(a.lastIndexOf("."))){case".html":return n;case".js":case".css":return t;case".md":return e}return""}}).directive("plnkrOpener",["$q","getExampleData","formPostData","createCopyrightNotice",function(e,t,n,a){return{scope:{},bindToController:{examplePath:"@"},controllerAs:"plnkr",template:'<button ng-click="plnkr.open($event)" class="btn pull-right"> <i class="glyphicon glyphicon-edit">&nbsp;</i> Edit in Plunker</button> ',controller:[function(){var r=this;r.example={path:r.examplePath,manifest:void 0,files:void 0,name:"AngularJS Example"},r.prepareExampleData=function(){return r.example.manifest?e.when(r.example):t(r.examplePath).then(function(e){r.example.files=e.files,r.example.manifest=e.manifest;var t=e.manifest.name.split("-");return t.unshift("AngularJS"),angular.forEach(t,function(e,n){t[n]=e.charAt(0).toUpperCase()+e.substr(1)}),r.example.name=t.join(" - "),r.example})},r.open=function(e){var t=e.ctrlKey||e.metaKey,o={"tags[0]":"angularjs","tags[1]":"example","private":!0};r.prepareExampleData().then(function(){angular.forEach(r.example.files,function(e){o["files["+e.name+"]"]=e.content+a(e.name)}),o.description=r.example.name,n("https://plnkr.co/edit/?p=preview",t,o)})},r.prepareExampleData(r.example.path)}]}}]).factory("getExampleData",["$http","$q",function(e,t){return function(n){return e.get(n+"/manifest.json").then(function(e){return e.data}).then(function(a){var r=[];return angular.forEach(a.files,function(t){r.push(e.get(n+"/"+t,{transformResponse:[]}).then(function(e){return"index-production.html"===t&&(t="index.html"),{name:t,content:e.data}}))}),t.all({manifest:a,files:t.all(r)})})}}]),angular.module("search",[]).controller("DocsSearchCtrl",["$scope","$location","docsSearch",function(e,t,n){function a(){e.results=[],e.colClassName=null,e.hasResults=!1}e.search=function(t){var r=2;t.length>=r?n(t).then(function(t){var n={api:[],guide:[],tutorial:[],error:[],misc:[]};angular.forEach(t,function(e){var t=e.area,a="api"==t?40:14;n[t]=n[t]||[],n[t].length<a&&n[t].push(e)});var a=0;for(var r in n)++a;a>0&&(e.colClassName="cols-"+a),e.hasResults=a>0,e.results=n}):a(),e.$$phase||e.$apply()},e.submit=function(){var n;if(e.results.api)n=e.results.api[0];else for(var a in e.results)if(n=e.results[a][0])break;n&&(t.path(n.path),e.hideResults())},e.hideResults=function(){a(),e.q=""}}]).controller("Error404SearchCtrl",["$scope","$location","docsSearch",function(e,t,n){n(t.path().split(/[\/\.:]/).pop()).then(function(t){e.results={},angular.forEach(t,function(t){var n=e.results[t.area]||[];n.push(t),e.results[t.area]=n})})}]).provider("docsSearch",function(){function e(e,t,n){var a=lunr(function(){this.ref("path"),this.field("titleWords",{boost:50}),this.field("members",{boost:40}),this.field("keywords",{boost:20})}),r=e.get("js/search-data.json").then(function(e){var n=e.data;return t(function(){angular.forEach(n,function(e){a.add(e)})},500)});return function(e){return r.then(function(){var t=a.search(e),r=[];return angular.forEach(t,function(e){r.push(n[e.ref])}),r})}}function t(e,t,n){var a,r=e.defer(),o=new Worker("js/search-worker.js");return o.onmessage=function(e){t.$apply(function(){switch(e.data.e){case"index-ready":r.resolve();break;case"query-ready":var t=e.data.d.map(function(e){return n[e]});a.resolve(t)}})},function(t){return r.promise.then(function(){return a=e.defer(),o.postMessage({q:t}),a.promise})}}return e.$inject=["$http","$timeout","NG_PAGES"],t.$inject=["$q","$rootScope","NG_PAGES"],{$get:window.Worker?t:e}}).directive("focused",function(e){return function(t,n,a){n[0].focus(),n.on("focus",function(){t.$apply(a.focused+"=true")}),n.on("blur",function(){e(function(){t.$eval(a.focused+"=false")})}),t.$eval(a.focused+"=true")}}).directive("docsSearchInput",["$document",function(e){return function(t,n,a){var r=27,o=191;angular.element(e[0].body).on("keydown",function(e){var t=n[0];e.keyCode==o&&document.activeElement!=t&&(e.stopPropagation(),e.preventDefault(),t.focus())}),n.on("keydown",function(e){e.keyCode==r&&(e.stopPropagation(),e.preventDefault(),t.$apply(function(){t.hideResults()}))})}}]),angular.module("tutorials",[]).directive("docTutorialNav",function(){var e=["","step_00","step_01","step_02","step_03","step_04","step_05","step_06","step_07","step_08","step_09","step_10","step_11","step_12","step_13","step_14","the_end"];return{scope:{},template:'<a ng-href="tutorial/{{prev}}"><li class="btn btn-primary"><i class="glyphicon glyphicon-step-backward"></i> Previous</li></a>\n<a ng-href="http://angular.github.io/angular-phonecat/step-{{seq}}/app"><li class="btn btn-primary"><i class="glyphicon glyphicon-play"></i> Live Demo</li></a>\n<a ng-href="https://github.com/angular/angular-phonecat/compare/step-{{diffLo}}...step-{{diffHi}}"><li class="btn btn-primary"><i class="glyphicon glyphicon-search"></i> Code Diff</li></a>\n<a ng-href="tutorial/{{next}}"><li class="btn btn-primary">Next <i class="glyphicon glyphicon-step-forward"></i></li></a>',link:function(t,n,a){var r=1*a.docTutorialNav;t.seq=r,t.prev=e[r],t.next=e[2+r],t.diffLo=r?r-1:"0~1",t.diffHi=r,n.addClass("btn-group"),n.addClass("tutorial-nav")}}}).directive("docTutorialReset",function(){return{scope:{step:"@docTutorialReset"},template:'<p><button class="btn" ng-click="show=!show">Workspace Reset Instructions  ➤</button></p>\n<div class="alert alert-info" ng-show="show">\n  <p>Reset the workspace to step {{step}}.</p>  <p><pre>git checkout -f step-{{step}}</pre></p>\n  <p>Refresh your browser or check out this step online: <a href="http://angular.github.io/angular-phonecat/step-{{step}}/app">Step {{step}} Live Demo</a>.</p>\n</div>\n<p>The most important changes are listed below. You can see the full diff on <a ng-href="https://github.com/angular/angular-phonecat/compare/step-{{step ? (step - 1): \'0~1\'}}...step-{{step}}" title="See diff on Github">GitHub</a>.\n</p>'}}),angular.module("versions",[]).controller("DocsVersionsCtrl",["$scope","$location","$window","NG_VERSIONS",function(e,t,n,a){e.docs_version=a[0],e.docs_versions=a;for(var r=0,o=NaN;r<a.length;r++){var i=a[r];o<=i.minor||(i.isLatest=!0,o=i.minor)}e.getGroupName=function(e){return e.isLatest?"Latest":"v"+e.major+"."+e.minor+".x"},e.jumpToDocsVersion=function(e){var a=t.path().replace(/\/$/,""),r="";r=e.isOldDocsUrl?e.docsUrl:e.docsUrl+a,n.location=r}}])});