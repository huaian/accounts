define("cutil/c.util.cacheview",[],function(){function e(){this.catchs={},this.backups={},this.orderCaches=[]}return e.prototype={add:function(e,t){this.catchs[e]=t,this.orderCaches.push({key:e,url:t.url,viewName:t.viewName}),this.backups[e]={url:t.url,opts:t.opts,text:t.text,datas:t.datas,viewName:t.viewName}},_delElemFromCollection:function(e,t,i){e=_.reject(e,function(e){return e[t]==i})},delOrderCaches:function(e,t){this._delElemFromCollection(this.orderCaches,e,t)},delById:function(e){this.catchs[e]&&delete this.catchs[e],this.delOrderCaches("key",e)},delByName:function(e){this._delElemFromCollection(this.catchs,"viewName",e),this.delOrderCaches("viewName",e)},delByURL:function(e){this._delElemFromCollection(this.catchs,"url",e),this.delOrderCaches("url",e)},delByIdFromBackups:function(e){this.backups[e]&&delete this.backups[e],this.delOrderCaches("key",e)},delByNameFromBackups:function(e){this._delElemFromCollection(this.backups,"viewName",e),this.delOrderCaches("viewName",e)},delByURLFromBackups:function(e){this._delElemFromCollection(this.backups,"url",e),this.delOrderCaches("url",e)},findById:function(e){return this.catchs[e]},findByName:function(e){return _.findWhere(this.catchs,{viewName:e})},findByIdFromBackups:function(e){return this.backups[e]},findByNameFromBackups:function(e){return _.findWhere(this.backups,{viewName:e})},findByURLFromBackups:function(e){return _.findWhere(this.backups,{url:e})},length:function(){return _.size(this.catchs)},each:function(e){_.isFunction(e)&&_.each(this.catchs,function(t,i){e(i,t)})}},e});