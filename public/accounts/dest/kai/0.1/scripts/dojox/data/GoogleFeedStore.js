define("dojox/data/GoogleFeedStore",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojox/data/GoogleSearchStore"],function(e,t,a,o){e.experimental("dojox.data.GoogleFeedStore");var r=o.Search;return a("dojox.data.GoogleFeedStore",r,{_type:"",_googleUrl:"http://ajax.googleapis.com/ajax/services/feed/load",_attributes:["title","link","author","published","content","summary","categories"],_queryAttrs:{url:"q"},getFeedValue:function(e,a){var o=this.getFeedValues(e,a);return t.isArray(o)?o[0]:o},getFeedValues:function(e,t){return this._feedMetaData?this._feedMetaData[e]||t:t},_processItem:function(e,t){this.inherited(arguments),e.summary=e.contentSnippet,e.published=e.publishedDate},_getItems:function(e){return e.feed?(this._feedMetaData={title:e.feed.title,desc:e.feed.description,url:e.feed.link,author:e.feed.author},e.feed.entries):null},_createContent:function(e,t,a){var o=this.inherited(arguments);return o.num=(a.count||10)+(a.start||0),o}})});