define("dojo/dom-form",["./_base/lang","./dom","./io-query","./json"],function(e,t,i,n){function o(t,i,n){if(null!==n){var o=t[i];"string"==typeof o?t[i]=[o,n]:e.isArray(o)?o.push(n):t[i]=n}}var r="file|submit|image|reset|button",l={fieldToObject:function(e){var i=null;if(e=t.byId(e)){var n=e.name,o=(e.type||"").toLowerCase();if(n&&o&&!e.disabled)if("radio"==o||"checkbox"==o)e.checked&&(i=e.value);else if(e.multiple){i=[];for(var r=[e.firstChild];r.length;)for(var l=r.pop();l;l=l.nextSibling){if(1!=l.nodeType||"option"!=l.tagName.toLowerCase()){l.nextSibling&&r.push(l.nextSibling),l.firstChild&&r.push(l.firstChild);break}l.selected&&i.push(l.value)}}else i=e.value}return i},toObject:function(e){for(var i={},n=t.byId(e).elements,a=0,u=n.length;u>a;++a){var f=n[a],s=f.name,d=(f.type||"").toLowerCase();s&&d&&r.indexOf(d)<0&&!f.disabled&&(o(i,s,l.fieldToObject(f)),"image"==d&&(i[s+".x"]=i[s+".y"]=i[s].x=i[s].y=0))}return i},toQuery:function(e){return i.objectToQuery(l.toObject(e))},toJson:function(e,t){return n.stringify(l.toObject(e),null,t?4:0)}};return l});