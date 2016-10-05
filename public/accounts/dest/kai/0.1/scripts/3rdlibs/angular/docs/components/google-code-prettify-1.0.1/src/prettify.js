// Copyright (C) 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

window.PR_SHOULD_USE_CONTINUATION=!0;var prettyPrintOne,prettyPrint;!function(){function e(e){function t(e){var t=e.charCodeAt(0);if(92!==t)return t;var n=e.charAt(1);return t=d[n],t?t:n>="0"&&"7">=n?parseInt(e.substring(1),8):"u"===n||"x"===n?parseInt(e.substring(2),16):e.charCodeAt(1)}function n(e){if(32>e)return(16>e?"\\x0":"\\x")+e.toString(16);var t=String.fromCharCode(e);return"\\"===t||"-"===t||"]"===t||"^"===t?"\\"+t:t}function r(e){var r=e.substring(1,e.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),a=[],s="^"===r[0],i=["["];s&&i.push("^");for(var l=s?1:0,o=r.length;o>l;++l){var u=r[l];if(/\\[bdsw]/i.test(u))i.push(u);else{var c,d=t(u);o>l+2&&"-"===r[l+1]?(c=t(r[l+2]),l+=2):c=d,a.push([d,c]),65>c||d>122||(65>c||d>90||a.push([32|Math.max(65,d),32|Math.min(c,90)]),97>c||d>122||a.push([-33&Math.max(97,d),-33&Math.min(c,122)]))}}a.sort(function(e,t){return e[0]-t[0]||t[1]-e[1]});for(var f=[],p=[],l=0;l<a.length;++l){var h=a[l];h[0]<=p[1]+1?p[1]=Math.max(p[1],h[1]):f.push(p=h)}for(var l=0;l<f.length;++l){var h=f[l];i.push(n(h[0])),h[1]>h[0]&&(h[1]+1>h[0]&&i.push("-"),i.push(n(h[1])))}return i.push("]"),i.join("")}function a(e){for(var t=e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),a=t.length,l=[],o=0,u=0;a>o;++o){var c=t[o];if("("===c)++u;else if("\\"===c.charAt(0)){var d=+c.substring(1);d&&(u>=d?l[d]=-1:t[o]=n(d))}}for(var o=1;o<l.length;++o)-1===l[o]&&(l[o]=++s);for(var o=0,u=0;a>o;++o){var c=t[o];if("("===c)++u,l[u]||(t[o]="(?:");else if("\\"===c.charAt(0)){var d=+c.substring(1);d&&u>=d&&(t[o]="\\"+l[d])}}for(var o=0;a>o;++o)"^"===t[o]&&"^"!==t[o+1]&&(t[o]="");if(e.ignoreCase&&i)for(var o=0;a>o;++o){var c=t[o],f=c.charAt(0);c.length>=2&&"["===f?t[o]=r(c):"\\"!==f&&(t[o]=c.replace(/[a-zA-Z]/g,function(e){var t=e.charCodeAt(0);return"["+String.fromCharCode(-33&t,32|t)+"]"}))}return t.join("")}for(var s=0,i=!1,l=!1,o=0,u=e.length;u>o;++o){var c=e[o];if(c.ignoreCase)l=!0;else if(/[a-z]/i.test(c.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){i=!0,l=!1;break}}for(var d={b:8,t:9,n:10,v:11,f:12,r:13},f=[],o=0,u=e.length;u>o;++o){var c=e[o];if(c.global||c.multiline)throw new Error(""+c);f.push("(?:"+a(c)+")")}return new RegExp(f.join("|"),l?"gi":"g")}function t(e,t){function n(e){switch(e.nodeType){case 1:if(r.test(e.className))return;for(var o=e.firstChild;o;o=o.nextSibling)n(o);var u=e.nodeName.toLowerCase();("br"===u||"li"===u)&&(a[l]="\n",i[l<<1]=s++,i[l++<<1|1]=e);break;case 3:case 4:var c=e.nodeValue;c.length&&(c=t?c.replace(/\r\n?/g,"\n"):c.replace(/[ \t\r\n]+/g," "),a[l]=c,i[l<<1]=s,s+=c.length,i[l++<<1|1]=e)}}var r=/(?:^|\s)nocode(?:\s|$)/,a=[],s=0,i=[],l=0;return n(e),{sourceCode:a.join("").replace(/\n$/,""),spans:i}}function n(e,t,n,r){if(t){var a={sourceCode:t,basePos:e};n(a),r.push.apply(r,a.decorations)}}function r(e){for(var t=void 0,n=e.firstChild;n;n=n.nextSibling){var r=n.nodeType;t=1===r?t?e:n:3===r&&V.test(n.nodeValue)?e:t}return t===e?void 0:t}function a(t,r){var a,s={};!function(){for(var n=t.concat(r),i=[],l={},o=0,u=n.length;u>o;++o){var c=n[o],d=c[3];if(d)for(var f=d.length;--f>=0;)s[d.charAt(f)]=c;var p=c[1],h=""+p;l.hasOwnProperty(h)||(i.push(p),l[h]=null)}i.push(/[\0-\uffff]/),a=e(i)}();var i=r.length,l=function(e){for(var t=e.sourceCode,o=e.basePos,c=[o,O],d=0,f=t.match(a)||[],p={},h=0,g=f.length;g>h;++h){var m,v=f[h],y=p[v],x=void 0;if("string"==typeof y)m=!1;else{var b=s[v.charAt(0)];if(b)x=v.match(b[1]),y=b[0];else{for(var w=0;i>w;++w)if(b=r[w],x=v.match(b[1])){y=b[0];break}x||(y=O)}m=y.length>=5&&"lang-"===y.substring(0,5),!m||x&&"string"==typeof x[1]||(m=!1,y=z),m||(p[v]=y)}var S=d;if(d+=v.length,m){var C=x[1],N=v.indexOf(C),_=N+C.length;x[2]&&(_=v.length-x[2].length,N=_-C.length);var E=y.substring(5);n(o+S,v.substring(0,N),l,c),n(o+S+N,C,u(E,C),c),n(o+S+_,v.substring(_),l,c)}else c.push(o+S,y)}e.decorations=c};return l}function s(e){var t=[],n=[];e.tripleQuotedStrings?t.push([k,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):e.multiLineStrings?t.push([k,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):t.push([k,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),e.verbatimStrings&&n.push([k,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var r=e.hashComments;if(r&&(e.cStyleComments?(r>1?t.push([R,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):t.push([R,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),n.push([k,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):t.push([R,/^#[^\r\n]*/,null,"#"])),e.cStyleComments&&(n.push([R,/^\/\/[^\r\n]*/,null]),n.push([R,/^\/\*[\s\S]*?(?:\*\/|$)/,null])),e.regexLiterals){var s="/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C[\\s\\S]|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+/";n.push(["lang-regex",new RegExp("^"+U+"("+s+")")])}var i=e.types;i&&n.push([$,i]);var l=(""+e.keywords).replace(/^ | $/g,"");l.length&&n.push([A,new RegExp("^(?:"+l.replace(/[\s,]+/g,"|")+")\\b"),null]),t.push([O,/^\s+/,null," \r\n	 "]);var o=/^.[^\s\w\.$@\'\"\`\/\\]*/;return n.push([T,/^@[a-z_$][a-z_$@0-9]*/i,null],[$,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[O,/^[a-z_$][a-z_$@0-9]*/i,null],[T,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[O,/^\\[\s\S]?/,null],[L,o,null]),a(t,n)}function i(e,t,n){function r(e){switch(e.nodeType){case 1:if(s.test(e.className))break;if("br"===e.nodeName)a(e),e.parentNode&&e.parentNode.removeChild(e);else for(var t=e.firstChild;t;t=t.nextSibling)r(t);break;case 3:case 4:if(n){var o=e.nodeValue,u=o.match(i);if(u){var c=o.substring(0,u.index);e.nodeValue=c;var d=o.substring(u.index+u[0].length);if(d){var f=e.parentNode;f.insertBefore(l.createTextNode(d),e.nextSibling)}a(e),c||e.parentNode.removeChild(e)}}}}function a(e){function t(e,n){var r=n?e.cloneNode(!1):e,a=e.parentNode;if(a){var s=t(a,1),i=e.nextSibling;s.appendChild(r);for(var l=i;l;l=i)i=l.nextSibling,s.appendChild(l)}return r}for(;!e.nextSibling;)if(e=e.parentNode,!e)return;for(var n,r=t(e.nextSibling,0);(n=r.parentNode)&&1===n.nodeType;)r=n;u.push(r)}for(var s=/(?:^|\s)nocode(?:\s|$)/,i=/\r\n?|\n/,l=e.ownerDocument,o=l.createElement("li");e.firstChild;)o.appendChild(e.firstChild);for(var u=[o],c=0;c<u.length;++c)r(u[c]);t===(0|t)&&u[0].setAttribute("value",t);var d=l.createElement("ol");d.className="linenums";for(var f=Math.max(0,t-1|0)||0,c=0,p=u.length;p>c;++c)o=u[c],o.className="L"+(c+f)%10,o.firstChild||o.appendChild(l.createTextNode(" ")),d.appendChild(o);e.appendChild(d)}function l(e){var t=/\bMSIE\s(\d+)/.exec(navigator.userAgent);t=t&&+t[1]<=8;var n=/\n/g,r=e.sourceCode,a=r.length,s=0,i=e.spans,l=i.length,o=0,u=e.decorations,c=u.length,d=0;u[c]=a;var f,p;for(p=f=0;c>p;)u[p]!==u[p+2]?(u[f++]=u[p++],u[f++]=u[p++]):p+=2;for(c=f,p=f=0;c>p;){for(var h=u[p],g=u[p+1],m=p+2;c>=m+2&&u[m+1]===g;)m+=2;u[f++]=h,u[f++]=g,p=m}c=u.length=f;var v,y=e.sourceNode;y&&(v=y.style.display,y.style.display="none");try{for(;l>o;){var x,b=(i[o],i[o+2]||a),w=u[d+2]||a,m=Math.min(b,w),S=i[o+1];if(1!==S.nodeType&&(x=r.substring(s,m))){t&&(x=x.replace(n,"\r")),S.nodeValue=x;var C=S.ownerDocument,N=C.createElement("span");N.className=u[d+1];var _=S.parentNode;_.replaceChild(N,S),N.appendChild(S),b>s&&(i[o+1]=S=C.createTextNode(r.substring(m,b)),_.insertBefore(S,N.nextSibling))}s=m,s>=b&&(o+=2),s>=w&&(d+=2)}}finally{y&&(y.style.display=v)}}function o(e,t){for(var n=t.length;--n>=0;){var r=t[n];H.hasOwnProperty(r)?p.console:H[r]=e}}function u(e,t){return e&&H.hasOwnProperty(e)||(e=/^\s*</.test(t)?"default-markup":"default-code"),H[e]}function c(e){var n=e.langExtension;try{var r=t(e.sourceNode,e.pre),a=r.sourceCode;e.sourceCode=a,e.spans=r.spans,e.basePos=0,u(n,a)(e),l(e)}catch(s){p.console}}function d(e,t,n){var r=document.createElement("pre");r.innerHTML=e,n&&i(r,n,!0);var a={langExtension:t,numberLines:n,sourceNode:r,pre:1};return c(a),r.innerHTML}function f(e){function t(e){return document.getElementsByTagName(e)}function n(){for(var t=p.PR_SHOULD_USE_CONTINUATION?d.now()+250:1/0;h<s.length&&d.now()<t;h++){var a=s[h],l=a.className;if(m.test(l)&&!v.test(l)){for(var o=!1,u=a.parentNode;u;u=u.parentNode){var w=u.tagName;if(b.test(w)&&u.className&&m.test(u.className)){o=!0;break}}if(!o){a.className+=" prettyprinted";var S,C=l.match(g);!C&&(S=r(a))&&x.test(S.tagName)&&(C=S.className.match(g)),C&&(C=C[1]);var N;if(y.test(a.tagName))N=1;else{var _=a.currentStyle,E=_?_.whiteSpace:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(a,null).getPropertyValue("white-space"):0;N=E&&"pre"===E.substring(0,3)}var P=a.className.match(/\blinenums\b(?::(\d+))?/);P=P?P[1]&&P[1].length?+P[1]:!0:!1,P&&i(a,P,N),f={langExtension:C,sourceNode:a,numberLines:P,pre:N},c(f)}}}h<s.length?setTimeout(n,250):e&&e()}for(var a=[t("pre"),t("code"),t("xmp")],s=[],l=0;l<a.length;++l)for(var o=0,u=a[l].length;u>o;++o)s.push(a[l][o]);a=null;var d=Date;d.now||(d={now:function(){return+new Date}});var f,h=0,g=/\blang(?:uage)?-([\w.]+)(?!\S)/,m=/\bprettyprint\b/,v=/\bprettyprinted\b/,y=/pre|xmp/i,x=/^code$/i,b=/^(?:pre|code|xmp)$/i;n()}var p=window,h=["break,continue,do,else,for,if,return,while"],g=[h,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],m=[g,"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],v=[m,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],y=[m,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],x=[y,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],b="all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",w=[m,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],S="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",C=[h,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],N=[h,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],_=[h,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],E=[v,x,w,S+C,N,_],P=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,k="str",A="kwd",R="com",$="typ",T="lit",L="pun",O="pln",I="tag",D="dec",z="src",M="atn",j="atv",B="nocode",U="(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*",V=/\S/,F=s({keywords:E,hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),H={};o(F,["default-code"]),o(a([],[[O,/^[^<?]+/],[D,/^<!\w[^>]*(?:>|$)/],[R,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[L,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),o(a([[O,/^[\s]+/,null," 	\r\n"],[j,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[[I,/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],[M,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[L,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),o(a([],[[j,/^[\s\S]+/]]),["uq.val"]),o(s({keywords:v,hashComments:!0,cStyleComments:!0,types:P}),["c","cc","cpp","cxx","cyc","m"]),o(s({keywords:"null,true,false"}),["json"]),o(s({keywords:x,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:P}),["cs"]),o(s({keywords:y,cStyleComments:!0}),["java"]),o(s({keywords:_,hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]),o(s({keywords:C,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py"]),o(s({keywords:S,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl","pl","pm"]),o(s({keywords:N,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]),o(s({keywords:w,cStyleComments:!0,regexLiterals:!0}),["js"]),o(s({keywords:b,hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),o(a([],[[k,/^[\s\S]+/]]),["regex"]);var q=p.PR={createSimpleLexer:a,registerLangHandler:o,sourceDecorator:s,PR_ATTRIB_NAME:M,PR_ATTRIB_VALUE:j,PR_COMMENT:R,PR_DECLARATION:D,PR_KEYWORD:A,PR_LITERAL:T,PR_NOCODE:B,PR_PLAIN:O,PR_PUNCTUATION:L,PR_SOURCE:z,PR_STRING:k,PR_TAG:I,PR_TYPE:$,prettyPrintOne:p.prettyPrintOne=d,prettyPrint:p.prettyPrint=f};"function"==typeof define&&define.amd&&define([],function(){return q})}();