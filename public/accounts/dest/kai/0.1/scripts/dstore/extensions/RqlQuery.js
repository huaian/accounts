define(["dojo/_base/declare","rql/js-array","../SimpleQuery"],function(e,r,t){return e(t,{_createFilterQuerier:function(e){return"string"===e.type?r.query(e.args[0]):this.inherited(arguments)}})});