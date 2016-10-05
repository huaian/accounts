define("dojo/rpc/JsonService",["../_base/declare","../_base/Deferred","../_base/json","../_base/lang","../_base/xhr","./RpcService"],function(e,t,s,n,r,i){return e("dojo.rpc.JsonService",i,{bustCache:!1,contentType:"application/json-rpc",lastSubmissionId:0,callRemote:function(e,s){var n=new t;return this.bind(e,s,n),n},bind:function(e,t,s,n){var i=r.post({url:n||this.serviceUrl,postData:this.createRequest(e,t),contentType:this.contentType,timeout:this.timeout,handleAs:"json-comment-optional"});i.addCallbacks(this.resultCallback(s),this.errorCallback(s))},createRequest:function(e,t){var n={params:t,method:e,id:++this.lastSubmissionId};return s.toJson(n)},parseResults:function(e){if(n.isObject(e)){if("result"in e)return e.result;if("Result"in e)return e.Result;if("ResultSet"in e)return e.ResultSet}return e}})});