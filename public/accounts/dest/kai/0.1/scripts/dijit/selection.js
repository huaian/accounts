define("dijit/selection",["dojo/_base/array","dojo/dom","dojo/_base/lang","dojo/sniff","dojo/_base/window","dijit/focus"],function(e,t,n,r,a,o){var l=function(l){var i=l.document;this.getType=function(){if(i.getSelection){var e,t="text";try{e=l.getSelection()}catch(n){}if(e&&1==e.rangeCount){var r=e.getRangeAt(0);r.startContainer==r.endContainer&&r.endOffset-r.startOffset==1&&3!=r.startContainer.nodeType&&(t="control")}return t}return i.selection.type.toLowerCase()},this.getSelectedText=function(){if(i.getSelection){var e=l.getSelection();return e?e.toString():""}return"control"==this.getType()?null:i.selection.createRange().text},this.getSelectedHtml=function(){if(i.getSelection){var e=l.getSelection();if(e&&e.rangeCount){var t,n="";for(t=0;t<e.rangeCount;t++){var r=e.getRangeAt(t).cloneContents(),a=i.createElement("div");a.appendChild(r),n+=a.innerHTML}return n}return null}return"control"==this.getType()?null:i.selection.createRange().htmlText},this.getSelectedElement=function(){if("control"==this.getType()){if(i.getSelection){var e=l.getSelection();return e.anchorNode.childNodes[e.anchorOffset]}var t=i.selection.createRange();if(t&&t.item)return i.selection.createRange().item(0)}return null},this.getParentElement=function(){if("control"==this.getType()){var e=this.getSelectedElement();if(e)return e.parentNode}else{if(!i.getSelection){var t=i.selection.createRange();return t.collapse(!0),t.parentElement()}var n=i.getSelection();if(n){for(var r=n.anchorNode;r&&1!=r.nodeType;)r=r.parentNode;return r}}return null},this.hasAncestorElement=function(e){return null!=this.getAncestorElement.apply(this,arguments)},this.getAncestorElement=function(e){var t=this.getSelectedElement()||this.getParentElement();return this.getParentOfType(t,arguments)},this.isTag=function(e,t){if(e&&e.tagName)for(var n=e.tagName.toLowerCase(),r=0;r<t.length;r++){var a=String(t[r]).toLowerCase();if(n==a)return a}return""},this.getParentOfType=function(e,t){for(;e;){if(this.isTag(e,t).length)return e;e=e.parentNode}return null},this.collapse=function(e){if(i.getSelection){var t=l.getSelection();t.removeAllRanges?e?t.collapseToStart():t.collapseToEnd():t.collapse(e)}else{var n=i.selection.createRange();n.collapse(e),n.select()}},this.remove=function(){var e=i.selection;return i.getSelection?(e=l.getSelection(),e.deleteFromDocument(),e):("none"!=e.type.toLowerCase()&&e.clear(),e)},this.selectElementChildren=function(e,n){var a;if(e=t.byId(e),i.getSelection){var o=l.getSelection();r("opera")?(a=o.rangeCount?o.getRangeAt(0):i.createRange(),a.setStart(e,0),a.setEnd(e,3==e.nodeType?e.length:e.childNodes.length),o.addRange(a)):o.selectAllChildren(e)}else if(a=e.ownerDocument.body.createTextRange(),a.moveToElementText(e),!n)try{a.select()}catch(s){}},this.selectElement=function(e,n){var o;if(e=t.byId(e),i.getSelection){var l=i.getSelection();o=i.createRange(),l.removeAllRanges&&(r("opera")&&l.getRangeAt(0)&&(o=l.getRangeAt(0)),o.selectNode(e),l.removeAllRanges(),l.addRange(o))}else try{var s=e.tagName?e.tagName.toLowerCase():"";o="img"===s||"table"===s?a.body(i).createControlRange():a.body(i).createRange(),o.addElement(e),n||o.select()}catch(c){this.selectElementChildren(e,n)}},this.inSelection=function(e){if(e){var t,n;if(i.getSelection){var r=l.getSelection();if(r&&r.rangeCount>0&&(n=r.getRangeAt(0)),n&&n.compareBoundaryPoints&&i.createRange)try{if(t=i.createRange(),t.setStart(e,0),1===n.compareBoundaryPoints(n.START_TO_END,t))return!0}catch(a){}}else{n=i.selection.createRange();try{t=e.ownerDocument.body.createTextRange(),t.moveToElementText(e)}catch(o){}if(n&&t&&1===n.compareEndPoints("EndToStart",t))return!0}}return!1},this.getBookmark=function(){var e,t,n,r=i.selection,a=o.curNode;if(i.getSelection){if(r=l.getSelection())if(r.isCollapsed){if(n=a?a.tagName:"",n&&(n=n.toLowerCase(),"textarea"==n||"input"==n&&(!a.type||"text"==a.type.toLowerCase())))return r={start:a.selectionStart,end:a.selectionEnd,node:a,pRange:!0},{isCollapsed:r.end<=r.start,mark:r};e={isCollapsed:!0},r.rangeCount&&(e.mark=r.getRangeAt(0).cloneRange())}else t=r.getRangeAt(0),e={isCollapsed:!1,mark:t.cloneRange()}}else if(r){if(n=a?a.tagName:"",n=n.toLowerCase(),a&&n&&("button"==n||"textarea"==n||"input"==n))return r.type&&"none"==r.type.toLowerCase()?{isCollapsed:!0,mark:null}:(t=r.createRange(),{isCollapsed:t.text&&t.text.length?!1:!0,mark:{range:t,pRange:!0}});e={};try{t=r.createRange(),e.isCollapsed=!("Text"==r.type?t.htmlText.length:t.length)}catch(s){return e.isCollapsed=!0,e}if("CONTROL"==r.type.toUpperCase())if(t.length){e.mark=[];for(var c=0,g=t.length;g>c;)e.mark.push(t.item(c++))}else e.isCollapsed=!0,e.mark=null;else e.mark=t.getBookmark()}return e},this.moveToBookmark=function(t){var r=t.mark;if(r)if(i.getSelection){var a=l.getSelection();if(a&&a.removeAllRanges)if(r.pRange){var o=r.node;o.selectionStart=r.start,o.selectionEnd=r.end}else a.removeAllRanges(),a.addRange(r)}else if(i.selection&&r){var s;r.pRange?s=r.range:n.isArray(r)?(s=i.body.createControlRange(),e.forEach(r,function(e){s.addElement(e)})):(s=i.body.createTextRange(),s.moveToBookmark(r)),s.select()}},this.isCollapsed=function(){return this.getBookmark().isCollapsed}},i=new l(window);return i.SelectionManager=l,i});