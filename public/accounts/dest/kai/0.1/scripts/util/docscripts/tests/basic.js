define("util/docscripts/tests/basic",["dojo","dijit","dojox"],function(e,t,r){e.provide("util.docscripts.tests.basic"),function(){function t(t){var r;return e.xhrGet({url:i+"?f="+t,sync:!0,handleAs:"json",handle:function(e){r=e}}),r}function r(e,t){return t=t||s,t[e]}var s,i=e.moduleUrl("util.docscripts","dumpObj.php")+"";doh.register("doctests.basic",[function(e){s=t("util/docscripts/tests/simple.js"),e.t(s),e.t("object"==typeof s),e.is(s["#provides"],"util.docscripts.tests.simple","provide() object found"),e.is(s["#resource"],"docscripts/tests/simple.js","filename expansion"),e.t(s["util.docscripts.tests"],"provide() expansion")},function(t){t.t(e.isArray(s["#requires"][0]),"populated require"),t.t(~e.indexOf(s["#requires"][0],"dojo.cookie"),"found cookie require")},function(e){var t=r("util.docscripts.tests.simple");e.is("Module level summary",t.summary,"summary from psuedo on module obj")},function(t){var s=r("dojo.FooBar");t.t(s,"dojo.FooBar docs exist"),t.t(s.classlike,"classlike thinger found"),t.is("A Class",s.summary,"picked up summary from post-decalre docs"),t.is("Function",s.type,"inference"),t.is("A Class description",s.description,"description from post-declare docs"),t.t(e.isArray(s.examples),"found examples"),t.is(1,s.examples.length,"found one example exactly");var i=r("dojo.FooBar.constructor");t.is(i.prototype,"dojo.FooBar","prototype binding"),t.is(i.parameters.args.name,s.parameters.args.name,"params from constructor implied on class");var o=r("dojo.FooBar.memberFn");t.t(o,"member function picked out of declaration");var n=o.parameters;t.is("String",n.a.type),t.f(n.b.optional),t.is("String",n.b.type),t.f(n.b.optional),t.is("Boolean",n.c.type),t.t(n.c.optional,"last arg optional"),t.is("Integer",o.returns),t.is("A member function",o.summary)},function(e){var t=r("dojo.FooBar2");e.t(t)},function(e){var t=r("dojo.mixedValue");e.is("External doc block, mixed",t.summary,"summary found for mixed value"),e.is("Integer",t.type,"type infered from mixed value"),e.is("dojo",t.attached,"alias lookup in d.mixin");var s=r("dojo.mixedFunction");e.is("dojo",s.attached,"alias lookup in d.mixin"),e.is("Integer",s.returns,"returns from return line"),e.is("From mixin",s.summary,"basic summary"),e.is("a",s.parameters.a.name,"parameter picked up"),e.t(s.parameters.a.optional,"param is optional"),e.is(s.parameters.a.summary,"Some number or not","parameter description picked up")},function(e){var t=r("dojo.thisIsAtestFunction");e.t(t,"testFunction docs exist"),e.is("Testing a function",t.summary),e.is("String",t.returns,"return value determined"),e.is("Testing a string parameter",t.parameters.a.summary,"parameter summary picked out")},function(e){var t=r("dojo.testFunction2");e.is("Simple summary",t.summary),e.is("Simple Description.\nOn Multiple lines.",t.description),e.t(t.parameters.id.optional),e.is("Duplicate matched in signature and in line",t.parameters.id.summary),e.is("String",t.parameters.id.type)},function(e){var t=r("dojo.returner");e.t(t),e.is("String|Integer\nThis should be description",t.return_summary),e.f(t.returns)},function(e){var t=r("dojo.multiReturns");e.t(t),e.is("String|Integer",t.returns,"found all return statement types in block"),e.is("Simple multireturn check",t.summary)},function(e){var t=r("dojo.query.stub");e.t(t,"$ -> dojo.query unwrapped from closure"),e.is("Integer",t.returns),e.is("aliased to `dojo.query`",t.summary,"FIX: requires undone <code>")},function(e){var t=r("util.docscripts.tests.simple.__kwArgs"),s=(t.parameters,r("dojo.kwArgFunction")),i=s.parameters.args;e.is("util.docscripts.tests.simple.__kwArgs",i.type)},function(e){s=t("util/docscripts/tests/functional.js");var i=r("util.docscripts.tests.FunctionalThinger");e.t(i,"object exists in parsed output, meaning parsing happened")},function(e){s=t("util/docscripts/tests/extend_declare.js"),e.t(!0)},function(e){var t=r("dojo.BarBaz");e.t(t,"raw declare() call defined a named class")},function(e){var t=r("dojo.BarBaz.someProp");e.t(t,"lang.extend worked"),e.is("String",t.type,"lang.extend unwrapped innards")},function(e){var t=r("dojo.BarBaz.winning");e.t(t,"aliased extend() call resolves properly"),e.is("Boolean",t.type),e.is("Always true.",t.summary,"are we? rad.")}])}()});