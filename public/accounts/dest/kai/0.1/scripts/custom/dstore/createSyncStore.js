define("custom/dstore/createSyncStore",["dojo/_base/declare","dojo/_base/lang","dstore/Memory","dstore/Trackable"],function(e,a,r,o){var t=e([r,o]);return function(r,o){r=r||{},r.data&&(r=a.mixin({},r,{data:a.clone(r.data)}));var n=o?e([t,o]):t;return new n(r)}});