define("dojox/dtl/ext-dojo/NodeList",["dojo/_base/lang","dojo/query","../_base"],function(e,t,o){var n=(e.getObject("dojox.dtl.ext-dojo.NodeList",!0),t.NodeList);return e.extend(n,{dtl:function(e,t){var n=o,d=this,r=function(e,t){var o=e.render(new n._Context(t));d.forEach(function(e){e.innerHTML=o})};return n.text._resolveTemplateArg(e).addCallback(function(o){e=new n.Template(o),n.text._resolveContextArg(t).addCallback(function(t){r(e,t)})}),this}}),n});