define("dstore/QueryResults",["dojo/_base/lang","dojo/when"],function(t,e){function n(t,n){return e(this,function(e){for(var o=0,r=e.length;r>o;o++)t.call(n,e[o],o,e)})}return function(e,o){var r=o&&"totalLength"in o;if(e.then){e=t.delegate(e);var a=e.then(function(t){var e=r?o.totalLength:t.totalLength||t.length;return t.totalLength=e,!r&&e});e.totalLength=r?o.totalLength:a,e.response=o&&o.response}else e.totalLength=r?o.totalLength:e.length;return e.forEach=n,e}});