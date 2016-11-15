define("dojox/data/OpmlStore",["dojo/_base/declare","dojo/_base/lang","dojo/_base/xhr","dojo/data/util/simpleFetch","dojo/data/util/filter","dojo/_base/kernel"],function(t,e,i,r,s,a){var n=t("dojox.data.OpmlStore",null,{constructor:function(t){this._xmlData=null,this._arrayOfTopLevelItems=[],this._arrayOfAllItems=[],this._metadataNodes=null,this._loadFinished=!1,this.url=t.url,this._opmlData=t.data,t.label&&(this.label=t.label),this._loadInProgress=!1,this._queuedFetches=[],this._identityMap={},this._identCount=0,this._idProp="_I",t&&"urlPreventCache"in t&&(this.urlPreventCache=t.urlPreventCache?!0:!1)},label:"text",url:"",urlPreventCache:!1,_assertIsItem:function(t){if(!this.isItem(t))throw new Error("dojo.data.OpmlStore: a function was passed an item argument that was not an item")},_assertIsAttribute:function(t){if(!e.isString(t))throw new Error("dojox.data.OpmlStore: a function was passed an attribute argument that was not an attribute object nor an attribute name string")},_removeChildNodesThatAreNotElementNodes:function(t,e){var i=t.childNodes;if(0!==i.length){var r,s,a=[];for(r=0;r<i.length;++r)s=i[r],1!=s.nodeType&&a.push(s);for(r=0;r<a.length;++r)s=a[r],t.removeChild(s);if(e)for(r=0;r<i.length;++r)s=i[r],this._removeChildNodesThatAreNotElementNodes(s,e)}},_processRawXmlTree:function(t){this._loadFinished=!0,this._xmlData=t;var e=t.getElementsByTagName("head"),i=e[0];i&&(this._removeChildNodesThatAreNotElementNodes(i),this._metadataNodes=i.childNodes);var r=t.getElementsByTagName("body"),s=r[0];if(s){this._removeChildNodesThatAreNotElementNodes(s,!0);for(var a=r[0].childNodes,n=0;n<a.length;++n){var o=a[n];"outline"==o.tagName&&(this._identityMap[this._identCount]=o,this._identCount++,this._arrayOfTopLevelItems.push(o),this._arrayOfAllItems.push(o),this._checkChildNodes(o))}}},_checkChildNodes:function(t){if(t.firstChild)for(var e=0;e<t.childNodes.length;e++){var i=t.childNodes[e];"outline"==i.tagName&&(this._identityMap[this._identCount]=i,this._identCount++,this._arrayOfAllItems.push(i),this._checkChildNodes(i))}},_getItemsArray:function(t){return t&&t.deep?this._arrayOfAllItems:this._arrayOfTopLevelItems},getValue:function(t,e,i){if(this._assertIsItem(t),this._assertIsAttribute(e),"children"==e)return t.firstChild||i;var r=t.getAttribute(e);return void 0!==r?r:i},getValues:function(t,e){this._assertIsItem(t),this._assertIsAttribute(e);var i=[];if("children"==e)for(var r=0;r<t.childNodes.length;++r)i.push(t.childNodes[r]);else null!==t.getAttribute(e)&&i.push(t.getAttribute(e));return i},getAttributes:function(t){this._assertIsItem(t);for(var e=[],i=t,r=i.attributes,s=0;s<r.length;++s){var a=r.item(s);e.push(a.nodeName)}return i.childNodes.length>0&&e.push("children"),e},hasAttribute:function(t,e){return this.getValues(t,e).length>0},containsValue:function(t,e,i){var r=void 0;return"string"==typeof i&&(r=s.patternToRegExp(i,!1)),this._containsValue(t,e,i,r)},_containsValue:function(t,e,i,r){for(var s=this.getValues(t,e),a=0;a<s.length;++a){var n=s[a];if("string"==typeof n&&r)return null!==n.match(r);if(i===n)return!0}return!1},isItem:function(t){return t&&1==t.nodeType&&"outline"==t.tagName&&t.ownerDocument===this._xmlData},isItemLoaded:function(t){return this.isItem(t)},loadItem:function(t){},getLabel:function(t){return this.isItem(t)?this.getValue(t,this.label):void 0},getLabelAttributes:function(t){return[this.label]},_fetchItems:function(t,e,r){var a=this,n=function(t,i){var r=null;if(t.query){r=[];var n=t.queryOptions?t.queryOptions.ignoreCase:!1,o={};for(var l in t.query){var h=t.query[l];"string"==typeof h&&(o[l]=s.patternToRegExp(h,n))}for(var u=0;u<i.length;++u){var d=!0,c=i[u];for(var l in t.query){var h=t.query[l];a._containsValue(c,l,h,o[l])||(d=!1)}d&&r.push(c)}}else i.length>0&&(r=i.slice(0,i.length));e(r,t)};if(this._loadFinished)n(t,this._getItemsArray(t.queryOptions));else if(this._loadInProgress)this._queuedFetches.push({args:t,filter:n});else if(""!==this.url){this._loadInProgress=!0;var o={url:a.url,handleAs:"xml",preventCache:a.urlPreventCache},l=i.get(o);l.addCallback(function(e){a._processRawXmlTree(e),n(t,a._getItemsArray(t.queryOptions)),a._handleQueuedFetches()}),l.addErrback(function(t){throw t})}else{if(!this._opmlData)throw new Error("dojox.data.OpmlStore: No OPML source data was provided as either URL or XML data input.");this._processRawXmlTree(this._opmlData),this._opmlData=null,n(t,this._getItemsArray(t.queryOptions))}},getFeatures:function(){var t={"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0};return t},getIdentity:function(t){if(this.isItem(t))for(var e in this._identityMap)if(this._identityMap[e]===t)return e;return null},fetchItemByIdentity:function(t){if(this._loadFinished){var e=this._identityMap[t.identity];if(this.isItem(e)||(e=null),t.onItem){var r=t.scope?t.scope:a.global;t.onItem.call(r,e)}}else{var s=this;if(""!==this.url)if(this._loadInProgress)this._queuedFetches.push({args:t});else{this._loadInProgress=!0;var n={url:s.url,handleAs:"xml"},o=i.get(n);o.addCallback(function(e){var i=t.scope?t.scope:a.global;try{s._processRawXmlTree(e);var r=s._identityMap[t.identity];s.isItem(r)||(r=null),t.onItem&&t.onItem.call(i,r),s._handleQueuedFetches()}catch(n){t.onError&&t.onError.call(i,n)}}),o.addErrback(function(e){if(this._loadInProgress=!1,t.onError){var i=t.scope?t.scope:a.global;t.onError.call(i,e)}})}else if(this._opmlData){this._processRawXmlTree(this._opmlData),this._opmlData=null;var e=this._identityMap[t.identity];if(s.isItem(e)||(e=null),t.onItem){var r=t.scope?t.scope:a.global;t.onItem.call(r,e)}}}},getIdentityAttributes:function(t){return null},_handleQueuedFetches:function(){if(this._queuedFetches.length>0){for(var t=0;t<this._queuedFetches.length;t++){var e=this._queuedFetches[t],i=e.args,r=e.filter;r?r(i,this._getItemsArray(i.queryOptions)):this.fetchItemByIdentity(i)}this._queuedFetches=[]}},close:function(t){}});return e.extend(n,r),n});