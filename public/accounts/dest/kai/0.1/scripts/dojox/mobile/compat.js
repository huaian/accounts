define("dojox/mobile/compat",["dojo/_base/lang","dojo/sniff"],function(o,e){var i=o.getObject("dojox.mobile",!0);if(!e("webkit")&&10!==e("ie")||!e("ie")&&e("trident")>6){var t="dojox/mobile/_compat";require([t])}return i});