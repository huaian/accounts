define("custom/dstore/createHierarchicalStore",["dstore/Tree","./createSyncStore","./createAsyncStore"],function(e,t,r){return function(o,n){var c=n?r(o,e):t(o,e);return c.getRootCollection=function(){return this.root.filter({parent:void 0})},c.getRootCollection()}});