define("dijit/_editor/plugins/FontChoice",["require","dojo/_base/array","dojo/_base/declare","dojo/dom-construct","dojo/i18n","dojo/_base/lang","dojo/store/Memory","../../registry","../../_Widget","../../_TemplatedMixin","../../_WidgetsInTemplateMixin","../../form/FilteringSelect","../_Plugin","../range","dojo/i18n!../nls/FontChoice"],function(e,t,i,o,n,a,s,r,l,d,c,m,u,h){var f=i("dijit._editor.plugins._FontDropDown",[l,d,c],{label:"",plainText:!1,templateString:"<span style='white-space: nowrap' class='dijit dijitReset dijitInline'><label class='dijitLeft dijitInline' for='${selectId}'>${label}</label><input data-dojo-type='../../form/FilteringSelect' required='false' data-dojo-props='labelType:\"html\", labelAttr:\"label\", searchAttr:\"name\"' class='${comboClass}' tabIndex='-1' id='${selectId}' data-dojo-attach-point='select' value=''/></span>",contextRequire:e,postMixInProperties:function(){this.inherited(arguments),this.strings=n.getLocalization("dijit._editor","FontChoice"),this.label=this.strings[this.command],this.id=r.getUniqueId(this.declaredClass.replace(/\./g,"_")),this.selectId=this.id+"_select",this.inherited(arguments)},postCreate:function(){this.select.set("store",new s({idProperty:"value",data:t.map(this.values,function(e){var t=this.strings[e]||e;return{label:this.getLabel(e,t),name:t,value:e}},this)})),this.select.set("value","",!1),this.disabled=this.select.get("disabled")},_setValueAttr:function(e,i){i=i!==!1,this.select.set("value",t.indexOf(this.values,e)<0?"":e,i),i||(this.select._lastValueReported=null)},_getValueAttr:function(){return this.select.get("value")},focus:function(){this.select.focus()},_setDisabledAttr:function(e){this._set("disabled",e),this.select.set("disabled",e)}}),p=i("dijit._editor.plugins._FontNameDropDown",f,{generic:!1,command:"fontName",comboClass:"dijitFontNameCombo",postMixInProperties:function(){this.values||(this.values=this.generic?["serif","sans-serif","monospace","cursive","fantasy"]:["Arial","Times New Roman","Comic Sans MS","Courier New"]),this.inherited(arguments)},getLabel:function(e,t){return this.plainText?t:"<div style='font-family: "+e+"'>"+t+"</div>"},_setValueAttr:function(e,t){if(t=t!==!1,this.generic){var i={Arial:"sans-serif",Helvetica:"sans-serif",Myriad:"sans-serif",Times:"serif","Times New Roman":"serif","Comic Sans MS":"cursive","Apple Chancery":"cursive",Courier:"monospace","Courier New":"monospace",Papyrus:"fantasy","Estrangelo Edessa":"cursive",Gabriola:"fantasy"};e=i[e]||e}this.inherited(arguments,[e,t])}}),g=i("dijit._editor.plugins._FontSizeDropDown",f,{command:"fontSize",comboClass:"dijitFontSizeCombo",values:[1,2,3,4,5,6,7],getLabel:function(e,t){return this.plainText?t:"<font size="+e+"'>"+t+"</font>"},_setValueAttr:function(e,t){if(t=t!==!1,e.indexOf&&-1!=e.indexOf("px")){var i=parseInt(e,10);e={10:1,13:2,16:3,18:4,24:5,32:6,48:7}[i]||e}this.inherited(arguments,[e,t])}}),v=i("dijit._editor.plugins._FormatBlockDropDown",f,{command:"formatBlock",comboClass:"dijitFormatBlockCombo",values:["noFormat","p","h1","h2","h3","pre"],postCreate:function(){this.inherited(arguments),this.set("value","noFormat",!1)},getLabel:function(e,t){return this.plainText||"noFormat"==e?t:"<"+e+">"+t+"</"+e+">"},_execCommand:function(e,i,o){if("noFormat"===o){var n,s,r=h.getSelection(e.window);if(r&&r.rangeCount>0){var l,d,c=r.getRangeAt(0);if(c){for(n=c.startContainer,s=c.endContainer;n&&n!==e.editNode&&n!==e.document.body&&1!==n.nodeType;)n=n.parentNode;for(;s&&s!==e.editNode&&s!==e.document.body&&1!==s.nodeType;)s=s.parentNode;var m=a.hitch(this,function(i,o){if(i.childNodes&&i.childNodes.length){var n;for(n=0;n<i.childNodes.length;n++){var a=i.childNodes[n];if(1==a.nodeType&&e.selection.inSelection(a)){var s=a.tagName?a.tagName.toLowerCase():"";-1!==t.indexOf(this.values,s)&&o.push(a),m(a,o)}}}}),u=a.hitch(this,function(t){if(t&&t.length){for(e.beginEditing();t.length;)this._removeFormat(e,t.pop());e.endEditing()}}),f=[];if(n==s){var p;for(l=n;l&&l!==e.editNode&&l!==e.document.body;){if(1==l.nodeType&&(d=l.tagName?l.tagName.toLowerCase():"",-1!==t.indexOf(this.values,d))){p=l;break}l=l.parentNode}m(n,f),p&&(f=[p].concat(f)),u(f)}else{for(l=n;e.selection.inSelection(l);)1==l.nodeType&&(d=l.tagName?l.tagName.toLowerCase():"",-1!==t.indexOf(this.values,d)&&f.push(l),m(l,f)),l=l.nextSibling;u(f)}e.onDisplayChanged()}}}else e.execCommand(i,o)},_removeFormat:function(e,t){if(e.customUndo){for(;t.firstChild;)o.place(t.firstChild,t,"before");t.parentNode.removeChild(t)}else{e.selection.selectElementChildren(t);var i=e.selection.getSelectedHtml();e.selection.selectElement(t),e.execCommand("inserthtml",i||"")}}}),b=i("dijit._editor.plugins.FontChoice",u,{useDefaultCommand:!1,_initButton:function(){var e={fontName:p,fontSize:g,formatBlock:v}[this.command],t=this.params;this.params.custom&&(t.values=this.params.custom);var i=this.editor;this.button=new e(a.delegate({dir:i.dir,lang:i.lang},t)),this.own(this.button.select.on("change",a.hitch(this,function(e){this.editor.focused&&this.editor.focus(),"fontName"==this.command&&-1!=e.indexOf(" ")&&(e="'"+e+"'"),this.button._execCommand?this.button._execCommand(this.editor,this.command,e):this.editor.execCommand(this.command,e)})))},updateState:function(){var e=this.editor,i=this.command;if(e&&e.isLoaded&&i.length&&this.button){var o=this.get("disabled");if(this.button.set("disabled",o),o)return;var n;try{n=e.queryCommandValue(i)||""}catch(s){n=""}var r=a.isString(n)&&(n.match(/'([^']*)'/)||n.match(/"([^"]*)"/));if(r&&(n=r[1]),"formatBlock"===i)if(n&&"p"!=n)t.indexOf(this.button.values,n)<0&&(n="noFormat");else{n=null;var l,d=h.getSelection(this.editor.window);if(d&&d.rangeCount>0){var c=d.getRangeAt(0);c&&(l=c.endContainer)}for(;l&&l!==e.editNode&&l!==e.document;){var m=l.tagName?l.tagName.toLowerCase():"";if(m&&t.indexOf(this.button.values,m)>-1){n=m;break}l=l.parentNode}n||(n="noFormat")}n!==this.button.get("value")&&this.button.set("value",n,!1)}}});return t.forEach(["fontName","fontSize","formatBlock"],function(e){u.registry[e]=function(t){return new b({command:e,plainText:t.plainText})}}),b._FontDropDown=f,b._FontNameDropDown=p,b._FontSizeDropDown=g,b._FormatBlockDropDown=v,b});