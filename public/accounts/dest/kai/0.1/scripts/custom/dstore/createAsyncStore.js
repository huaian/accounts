define("custom/dstore/createAsyncStore",["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dstore/Memory","dstore/Trackable","dstore/QueryResults","dstore/Cache"],function(e,r,o,a,t,d,n){var s=e([t,a,n]);return function(e,o){e=e||{},e.data&&(e=r.mixin({},e,{data:r.clone(e.data)}));var a=s;return new a(e)}});