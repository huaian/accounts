define("doh/runner",["dojo/_base/lang"],function(lang){var doh={};tests=doh,this.doh=doh,doh._line="------------------------------------------------------------",doh.debug=function(){},doh.error=function(){},doh._AssertFailure=function(t,e){return doh.breakOnError,this instanceof doh._AssertFailure?(e&&(t=new String(t||"")+" with hint: \n		"+(new String(e)+"\n")),this.message=new String(t||""),this):new doh._AssertFailure(t,e)},doh._AssertFailure.prototype=new Error,doh._AssertFailure.prototype.constructor=doh._AssertFailure,doh._AssertFailure.prototype.name="doh._AssertFailure",doh.Deferred=function(t){this.chain=[],this.id=this._nextId(),this.fired=-1,this.paused=0,this.results=[null,null],this.canceller=t,this.silentlyCancelled=!1},lang.extend(doh.Deferred,{getTestErrback:function(t,e){var r=this;return function(){try{t.apply(e||doh.global||r,arguments)}catch(n){r.reject(n)}}},getTestCallback:function(t,e){var r=this;return function(){try{t.apply(e||doh.global||r,arguments)}catch(n){return void r.reject(n)}r.resolve(!0)}},_nextId:function(){var t=1;return function(){return t++}}(),cancel:function(){-1==this.fired?(this.canceller?this.canceller(this):this.silentlyCancelled=!0,-1==this.fired&&this.reject(new Error("Deferred(unfired)"))):0==this.fired&&this.results[0]&&this.results[0].cancel&&this.results[0].cancel()},_pause:function(){this.paused++},_unpause:function(){this.paused--,0==this.paused&&this.fired>=0&&this._fire()},_continue:function(t){this._resback(t),this._unpause()},_resback:function(t){this.fired=t instanceof Error?1:0,this.results[this.fired]=t,this._fire()},_check:function(){if(-1!=this.fired){if(!this.silentlyCancelled)throw new Error("already called!");this.silentlyCancelled=!1}},resolve:function(t){this._check(),this._resback(t)},reject:function(t){this._check(),t instanceof Error||(t=new Error(t)),this._resback(t)},then:function(t,e){return this.chain.push([t,e]),this.fired>=0&&this._fire(),this},always:function(t){this.then(t,t)},otherwise:function(t){this.then(null,t)},isFulfilled:function(){return this.fired>=0},isResolved:function(){return 0==this.fired},isRejected:function(){return 1==this.fired},_fire:function(){for(var t=this.chain,e=this.fired,r=this.results[e],n=this,i=null;t.length>0&&0==this.paused;){var s=t.shift(),o=s[e];if(null!=o)try{r=o(r),e=r instanceof Error?1:0,r&&r.then&&(i=function(t){n._continue(t)},this._pause())}catch(u){e=1,r=u}}this.fired=e,this.results[e]=r,i&&this.paused&&r.always(i)}}),lang.extend(doh.Deferred,{getFunctionFromArgs:function(){var t=arguments;if(t[0]&&!t[1]){if("function"==typeof t[0])return t[0];if("string"==typeof t[0])return doh.global[t[0]]}else if(t[0]&&t[1])return lang.hitch(t[0],t[1]);return null},addCallbacks:function(t,e){this.then(t,e)},addCallback:function(t,e){var r=this.getFunctionFromArgs(t,e);return arguments.length>2&&(r=lang.hitch(null,r,arguments,2)),this.then(r)},addErrback:function(t,e){var r=this.getFunctionFromArgs(t,e);return arguments.length>2&&(r=lang.hitch(null,r,arguments,2)),this.otherwise(r)},addBoth:function(t,e){var r=this.getFunctionFromArgs(t,e);return arguments.length>2&&(r=lang.hitch(null,r,arguments,2)),this.always(r)},callback:function(t){this.resolve(t)},errback:function(t){this.reject(t)}}),doh._testCount=0,doh._groupCount=0,doh._errorCount=0,doh._failureCount=0,doh._currentGroup=null,doh._currentTest=null,doh._paused=!0,doh._init=function(){this._currentGroup=null,this._currentTest=null,this._errorCount=0,this._failureCount=0,this.debug(this._testCount,"tests to run in",this._groupCount,"groups")},doh._groups={},doh._testTypes={},doh.registerTestType=function(t,e){doh._testTypes[t]=e},doh.registerTestType("perf",function(t,e,r){("perf"===r||"perf"===e.testType)&&(e.testType="perf",doh.perfTestResults||(doh.perfTestResults={},doh.perfTestResults[t]={}),doh.perfTestResults[t]||(doh.perfTestResults[t]={}),doh.perfTestResults[t][e.name]||(doh.perfTestResults[t][e.name]={}),e.results=doh.perfTestResults[t][e.name],"trialDuration"in e||(e.trialDuration=100),"trialDelay"in e||(e.trialDelay=100),"trialIterations"in e||(e.trialIterations=10))});var createFixture=function(t,e,r){var n=e;if(lang.isString(e))n={name:e.replace("/s/g","_"),runTest:new Function("t",e)};else if(lang.isFunction(e))if(n={runTest:e},e.name)n.name=e.name;else try{var i="function ",s=n.runTest+"";0<=s.indexOf(i)&&(n.name=s.split(i)[1].split("(",1)[0])}catch(o){}else lang.isString(n.runTest)&&(n.runTest=new Function("t",n.runTest));if(!n.runTest)return 0;var u=doh._testTypes[r]||doh._testTypes[n.testType];return u&&u(t,n),doh._groups[t].push(n),doh._testCount++,doh._testRegistered(t,n),n},dumpArg=function(t){return lang.isString(t)?"string("+t+")":typeof t},illegalRegister=function(t,e){for(var r="	arguments: ",n=0;5>n;n++)r+=dumpArg(t[n]);doh.debug("ERROR:"),e?doh.debug("	illegal arguments provided to doh.register; the test at argument "+e+" wasn't a test."):doh.debug("	illegal arguments provided to doh.register"),doh.debug(r)};doh._testRegistered=function(t,e){},doh._groupStarted=function(t){},doh._groupFinished=function(t,e){},doh._testStarted=function(t,e){},doh._testFinished=function(t,e,r){},doh._registerTest=function(t,e,r){var n=this._groups[t];if(n||(this._groupCount++,n=this._groups[t]=[],n.inFlight=0),!e)return n;var i;if(lang.isFunction(e)||lang.isString(e)||"runTest"in e)return createFixture(t,e,r)?n:0;if(lang.isArray(e)){for(var s=0;s<e.length;s++)if(i=createFixture(t,e[s],r),!i)return this.debug("ERROR:"),this.debug("	illegal test is test array; more information follows..."),null;return n}for(var o in e){var u=e[o];if(lang.isFunction(u)||lang.isString(u)?i=createFixture(t,{name:o,runTest:u},r):(u.name=u.name||o,i=createFixture(t,u,r)),!i)return this.debug("ERROR:"),this.debug("	illegal test is test hash; more information follows..."),null}return n},doh._registerTestAndCheck=function(t,e,r,n,i,s,o){var u=0;if(t)if(r){var a=t.match(/([^\!]+)\!(.+)/);a&&(u=a[1],t=a[2])}else{var h=t&&t.split("!");3==h.length?(u=h[0],t=h[1],r=h[2]):2==h.length&&(h[1]in doh._testTypes?(t=h[0],r=h[1]):(u=h[0],t=h[1]))}var d=doh._registerTest(t,e,r);d?(u&&(d.amdMid=u),s&&(d.setUp=s),o&&(d.tearDown=o)):illegalRegister(arguments,n)},doh._registerUrl=function(t,e,r,n,i){this.debug("ERROR:"),this.debug("	NO registerUrl() METHOD AVAILABLE.")};var typeSigs=function(){function t(e,n,i,s){for(var o,u=e.slice(1),a=r[e[0]],h=0;h<a.length;h++)o=n+(n?"-":"")+a[h],u.length?t(u,o,i,s):i.push(o,s)}var e=["test",function(t,e){doh._registerTestAndCheck("ungrouped",e,0,0,t,0,0)},"url",function(t,e){doh._registerUrl("ungrouped",e)},"group-test",function(t,e,r){doh._registerTestAndCheck(e,r,0,0,t,0,0)},"test-type",function(t,e,r){doh._registerTestAndCheck("ungrouped",e,r,1,t,0,0)},"test-up",function(t,e,r){doh._registerTestAndCheck("ungrouped",e,0,0,t,r,0)},"group-url",function(t,e,r){doh._registerUrl(e,r)},"url-to",function(t,e,r){doh._registerUrl("ungrouped",e,r)},"url-type",function(t,e,r){doh._registerUrl("ungrouped",e,void 0,r)},"url-args",function(t,e,r){doh._registerUrl("ungrouped",e,void 0,0,r)},"group-test-type",function(t,e,r,n){doh._registerTestAndCheck(e,r,n,2,t,0,0)},"group-test-up",function(t,e,r,n){doh._registerTestAndCheck(e,r,0,2,t,n,0)},"test-type-up",function(t,e,r,n){doh._registerTestAndCheck("ungrouped",e,r,0,t,n,0)},"test-up-down",function(t,e,r,n){doh._registerTestAndCheck("ungrouped",e,0,0,t,r,n)},"group-url-to",function(t,e,r,n){doh._registerUrl(e,r,n)},"group-url-type",function(t,e,r,n){doh._registerUrl(e,r,void 0,n)},"group-url-args",function(t,e,r,n){doh._registerUrl(e,r,void 0,0,n)},"url-to-type",function(t,e,r,n){doh._registerUrl("ungrouped",e,r,n)},"url-to-args",function(t,e,r,n){doh._registerUrl("ungrouped",e,r,0,n)},"url-type-args",function(t,e,r,n){doh._registerUrl("ungrouped",e,void 0,r,n)},"group-test-type-up",function(t,e,r,n,i){doh._registerTestAndCheck(e,r,n,2,t,i,0)},"group-test-up-down",function(t,e,r,n,i){doh._registerTestAndCheck(e,r,0,2,t,n,i)},"test-type-up-down",function(t,e,r,n,i){doh._registerTestAndCheck("ungrouped",e,2,0,t,n,i)},"group-url-to-type",function(t,e,r,n,i){doh._registerUrl(e,r,n,i)},"group-url-to-args",function(t,e,r,n,i){doh._registerUrl(e,r,n,0,i)},"group-url-type-args",function(t,e,r,n,i){doh._registerUrl(e,r,void 0,n,i)},"url-to-type-args",function(t,e,r,n,i){doh._registerUrl("ungrouped",e,r,n,i)},"group-test-type-up-down",function(t,e,r,n,i,s){doh._registerTestAndCheck(e,r,n,2,t,i,s)},"group-url-to-type-args",function(t,e,r,n,i,s){doh._registerUrl(e,r,n,i,s)}],r={group:"st.sf.s",test:"a.sf.o.f",type:"st",up:"f",down:"f",url:"s",to:"n",args:"o"};for(var n in r)r[n]=r[n].split(".");for(var i,s,o,u=[],a=0;a<e.length;a++)i=e[a++].split("-"),s=e[a],o=u[i.length-1]||(u[i.length-1]=[]),t(i,"",o,s);return u}();return doh.register=function(t,e,r,n,i){function s(t){return t instanceof Array?"a":"function"==typeof t?"f":"number"==typeof t?"n":"string"==typeof t?t in doh._testTypes?"st":/\(/.test(t)?"sf":"s":"o"}var o,u=arguments.length,a=typeSigs[u-1],h=[];for(o=0;u>o;o++)h.push(s(arguments[o]));for(h=h.join("-"),o=0;o<a.length;o+=2)if(a[o]==h)return void a[o+1](arguments,t,e,r,n,i);illegalRegister(arguments)},doh.registerDocTests=function(t){for(var e=new dojox.testing.DocTest,r=e.getTests(t),n=r.length,i=[],s=0;n>s;s++){var o=r[s],u="";if(o.commands.length&&-1!=o.commands[0].indexOf("//")){var a=o.commands[0].split("//");u=", "+a[a.length-1]}i.push({runTest:function(t){return function(r){var n=e.runTest(t.commands,t.expectedResult);r.assertTrue(n.success)}}(o),name:"Line "+o.line+u})}this.register("DocTests: "+t,i)},doh.registerTest=function(t,e,r){doh.register(t+(r?"!"+r:""),e)},doh.registerGroup=function(t,e,r,n,i){var s=[(t?t:"")+(i?"!"+i:""),e];r&&s.push(r),n&&s.push(n),doh.register.apply(doh,s)},doh.registerTestNs=function(t,e){doh.register(t,e)},doh.registerTests=function(t,e,r){doh.register(t+(r?"!"+r:""),e)},doh.registerUrl=function(t,e,r,n,i){doh.register(t+(n?"!"+n:""),e+"",r||1e4,i||{})},doh.t=doh.assertTrue=function(condition,hint){if(arguments.length<1)throw new doh._AssertFailure("assertTrue failed because it was not passed at least 1 argument");if(!eval(condition))throw new doh._AssertFailure("assertTrue('"+condition+"') failed",hint)},doh.f=doh.assertFalse=function(condition,hint){if(arguments.length<1)throw new doh._AssertFailure("assertFalse failed because it was not passed at least 1 argument");if(eval(condition))throw new doh._AssertFailure("assertFalse('"+condition+"') failed",hint)},doh.e=doh.assertError=function(t,e,r,n,i){try{e[r].apply(e,n)}catch(s){if(s instanceof t)return!0;throw new doh._AssertFailure("assertError() failed:\n	expected error\n		"+t+"\n	but got\n		"+s+"\n\n",i)}throw new doh._AssertFailure("assertError() failed:\n	expected error\n		"+t+"\n	but no error caught\n\n",i)},doh.is=doh.assertEqual=function(t,e,r,n){if(void 0===t&&void 0===e)return!0;if(arguments.length<2)throw doh._AssertFailure("assertEqual failed because it was not passed 2 arguments");if(t===e||t==e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e))return!0;if(lang.isArray(t)&&lang.isArray(e)&&this._arrayEq(t,e))return!0;if("object"==typeof t&&"object"==typeof e&&this._objPropEq(t,e))return!0;if(n)return!1;throw new doh._AssertFailure("assertEqual() failed:\n	expected\n		"+t+"\n	but got\n		"+e+"\n\n",r)},doh.isNot=doh.assertNotEqual=function(t,e,r){if(void 0===t&&void 0===e)throw new doh._AssertFailure("assertNotEqual() failed: not expected |"+t+"| but got |"+e+"|",r);if(arguments.length<2)throw doh._AssertFailure("assertEqual failed because it was not passed 2 arguments");if(t===e||t==e)throw new doh._AssertFailure("assertNotEqual() failed: not expected |"+t+"| but got |"+e+"|",r);if(lang.isArray(t)&&lang.isArray(e)&&this._arrayEq(t,e))throw new doh._AssertFailure("assertNotEqual() failed: not expected |"+t+"| but got |"+e+"|",r);if("object"==typeof t&&"object"==typeof e){var n=!1;try{n=this._objPropEq(t,e)}catch(i){if(!(i instanceof doh._AssertFailure))throw i}if(n)throw new doh._AssertFailure("assertNotEqual() failed: not expected |"+t+"| but got |"+e+"|",r)}return!0},doh._arrayEq=function(t,e){if(t.length!=e.length)return!1;for(var r=0;r<t.length;r++)if(!doh.assertEqual(t[r],e[r],0,!0))return!1;return!0},doh._objPropEq=function(t,e){if(null===t&&null===e)return!0;if(null===t||null===e)return!1;if(t instanceof Date)return e instanceof Date&&t.getTime()==e.getTime();var r;for(r in e)if(!(r in t))return!1;for(r in t){if(!(r in e))return!1;if(!doh.assertEqual(t[r],e[r],0,!0))return!1}return!0},doh._setupGroupForRun=function(t){var e=this._groups[t];this.debug(this._line),this.debug("GROUP",'"'+t+'"',"has",e.length,"test"+(e.length>1?"s":"")+" to run"),doh._groupStarted(t)},doh._handleFailure=function(t,e,r){this._groups[t].failures++;var n="";if(r instanceof this._AssertFailure?(this._failureCount++,r.fileName&&(n+=r.fileName+":"),r.lineNumber&&(n+=r.lineNumber+" "),n+=r.message,this.error("	_AssertFailure:",n)):(this._errorCount++,this.error("	Error:",r.message||r)),e.runTest.toSource){var i=e.runTest.toSource();this.debug("	ERROR IN:\n		",i)}else this.debug("	ERROR IN:\n		",e.runTest);r.rhinoException?r.rhinoException.printStackTrace():r.javaException&&r.javaException.printStackTrace()},doh._runPerfFixture=function(t,e){var r=this._groups[t];e.startTime=new Date;var n=new doh.Deferred;r.inFlight++,n.groupName=t,n.fixture=e;var i=!1;n.otherwise(function(r){doh._handleFailure(t,e,r),i=!0});var s,o,u=function(){s=!0,e.tearDown&&e.tearDown(doh),r.inFlight--,!r.inFlight&&r.iterated&&doh._groupFinished(t,!r.failures),doh._testFinished(t,e,!i),doh._paused&&doh.run()},a=e.timeout;a>0&&(o=setTimeout(function(){n.reject(new Error("test timeout in "+e.name.toString()))},a)),n.always(function(){o&&clearTimeout(o),u()});var h=e.results;h.trials=[];var d=doh._calcTrialIterations(t,e);return d.then(function(r){if(r){var i=e.trialIterations;doh.debug("TIMING TEST: ["+e.name+"]\n		ITERATIONS PER TRIAL: "+r+"\n	TRIALS: "+i);var s=function(){var o=new Date,u=new doh.Deferred,a={countdown:r},d=function(r){for(;r;)try{if(r.countdown--,r.countdown){var i=e.runTest(doh);if(i&&i.then){var s={countdown:r.countdown};i.then(function(){d(s)},function(r){doh._handleFailure(t,e,r),e.endTime=new Date,n.reject(r)}),r=null}}else u.resolve(new Date),r=null}catch(o){e.endTime=new Date,u.reject(o)}};u.then(function(t){var u={trial:e.trialIterations-i,testIterations:r,executionTime:t.getTime()-o.getTime(),average:(t.getTime()-o.getTime())/r};if(h.trials.push(u),doh.debug("\n		TRIAL #: "+u.trial+"\n	TIME: "+u.executionTime+"ms.\n	AVG TEST TIME: "+u.executionTime/u.testIterations+"ms."),i--,i)setTimeout(s,e.trialDelay);else{h.trials;e.endTime=new Date,n.resolve(!0)}},function(t){e.endTime=new Date,n.reject(t)}),d(a)};s()}},function(t){e.endTime=new Date,n.reject(t)}),s||doh.pause(),n},doh._calcTrialIterations=function(t,e){var r=new doh.Deferred,n=function(){var t=lang.hitch(e,e.runTest),n={start:new Date,curIter:0,iterations:5},i=function(n){for(;n;)if(n.curIter<n.iterations)try{var s=t(doh);if(s&&s.then){var o={start:n.start,curIter:n.curIter+1,iterations:n.iterations};s.then(function(){i(o)},function(t){e.endTime=new Date,r.reject(t)}),n=null}else n.curIter++}catch(u){return e.endTime=new Date,void r.reject(u)}else{var a=new Date,h=a.getTime()-n.start.getTime();if(h<e.trialDuration){var d={iterations:2*n.iterations,curIter:0};n=null,setTimeout(function(){d.start=new Date,i(d)},50)}else{var l=n.iterations;setTimeout(function(){r.resolve(l)},50),n=null}}};i(n)};return setTimeout(n,10),r},doh._runRegFixture=function(t,e){var r=this._groups[t];e.startTime=new Date;var n=e.runTest(this);if(n&&n.then){n.promise&&(n=n.promise),r.inFlight++,n.groupName=t,n.fixture=e;var i=!1;n.otherwise(function(r){i||(doh._handleFailure(t,e,r),i=!0)});var s,o=function(){if(!s){if(s=!0,e.endTime=new Date,e.tearDown)try{e.tearDown(doh)}catch(n){this.debug("Error tearing down test: "+n.message)}r.inFlight--,doh._testFinished(t,e,!i),!r.inFlight&&r.iterated&&doh._groupFinished(t,!r.failures),doh._paused&&doh.run()}},u=setTimeout(function(){u&&(doh._handleFailure(t,e,new Error("test timeout in "+e.name.toString())),i=!0,o())},e.timeout||1e3);return n.always(function(){clearTimeout(u),u=null,o()}),s||doh.pause(),n}},doh._runFixture=function(t,e){var r=this._groups[t];this._testStarted(t,e);var n=!1,i=null;try{if(e.group=r,e.setUp&&e.setUp(this),e.runTest){if("perf"===e.testType)return doh._runPerfFixture(t,e);var s=doh._runRegFixture(t,e);if(s)return s}}catch(o){n=!0,i=o}e.endTime=new Date;try{e.tearDown&&e.tearDown(this)}catch(o){this.debug("Error tearing down test: "+o.message)}var u=new doh.Deferred;return setTimeout(lang.hitch(this,function(){n&&this._handleFailure(t,e,i),this._testFinished(t,e,!n),!r.inFlight&&r.iterated?doh._groupFinished(t,!r.failures):r.inFlight>0&&(setTimeout(lang.hitch(this,function(){doh.runGroup(t)}),100),this._paused=!0),doh._paused&&doh.run()}),30),doh.pause(),u},doh.runGroup=function(t,e){e=e||0;var r=this._groups[t];if(r.skip!==!0&&lang.isArray(r)){void 0===r.iterated&&(r.iterated=!1,r.inFlight=0,r.failures=0,this._setupGroupForRun(t),r.setUp&&r.setUp(this));for(var n=e;n<r.length;n++){if(this._paused)return void(this._currentTest=n);if(doh._runFixture(t,r[n]),this._paused)return this._currentTest=n+1,void(this._currentTest==r.length&&(r.iterated=!0))}r.iterated=!0,r.inFlight||(r.tearDown&&r.tearDown(this),doh._groupFinished(t,!r.failures))}},doh._onEnd=function(){},doh._report=function(){this.debug(this._line),this.debug("| TEST SUMMARY:"),this.debug(this._line),this.debug("	",this._testCount,"tests in",this._groupCount,"groups"),this.debug("	",this._errorCount,"errors"),this.debug("	",this._failureCount,"failures")},doh.togglePaused=function(){this[this._paused?"run":"pause"]()},doh.pause=function(){this._paused=!0},doh.run=function(){this._paused=!1;var t=this._currentGroup,e=this._currentTest,r=!1;t||(this._init(),r=!0),this._currentGroup=null,this._currentTest=null;for(var n in this._groups)if(!r&&n==t||r){if(this._paused)return;if(this._currentGroup=n,r?this.runGroup(n):(r=!0,this.runGroup(n,e)),this._paused)return}this._currentGroup=null,this._currentTest=null,this._paused=!1,this._onEnd(),this._report()},doh.runOnLoad=function(){require(["dojo/ready"],function(t){t(doh,"run")})},doh}),"undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location==location&&window.document==document&&require(["doh/_browserRunner"]);