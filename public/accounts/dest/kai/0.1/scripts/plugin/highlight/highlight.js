!function(e){var n="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define("plugin/highlight/highlight",[],function(){return n.hljs}))}(function(e){function n(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0===t.index}function a(e){return/^(no-?highlight|plain|text)$/i.test(e)}function i(e){var n,t,r,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=/\blang(?:uage)?-([\w-]+)\b/i.exec(i))return _(t[1])?t[1]:"no-highlight";for(i=i.split(/\s+/),n=0,r=i.length;r>n;n++)if(_(i[n])||a(i[n]))return i[n]}function s(e,n){var t,r={};for(t in e)r[t]=e[t];if(n)for(t in n)r[t]=n[t];return r}function l(e){var n=[];return function r(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3===i.nodeType?a+=i.nodeValue.length:1===i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=r(i,a),t(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function o(e,r,a){function i(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function s(e){function r(e){return" "+e.nodeName+'="'+n(e.value)+'"'}c+="<"+t(e)+R.map.call(e.attributes,r).join("")+">"}function l(e){c+="</"+t(e)+">"}function o(e){("start"===e.event?s:l)(e.node)}for(var u=0,c="",g=[];e.length||r.length;){var f=i();if(c+=n(a.substr(u,f[0].offset-u)),u=f[0].offset,f===e){g.reverse().forEach(l);do o(f.splice(0,1)[0]),f=i();while(f===e&&f.length&&f[0].offset===u);g.reverse().forEach(s)}else"start"===f[0].event?g.push(f[0].node):g.pop(),o(f.splice(0,1)[0])}return c+n(a.substr(u))}function u(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.keywords=a.keywords||a.beginKeywords,a.keywords){var l={},o=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");l[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.keywords?o("keyword",a.keywords):N(a.keywords).forEach(function(e){o(e,a.keywords[e])}),a.keywords=l}a.lexemesRe=t(a.lexemes||/\w+/,!0),i&&(a.beginKeywords&&(a.begin="\\b("+a.beginKeywords.split(" ").join("|")+")\\b"),a.begin||(a.begin=/\B|\b/),a.beginRe=t(a.begin),a.end||a.endsWithParent||(a.end=/\B|\b/),a.end&&(a.endRe=t(a.end)),a.terminator_end=n(a.end)||"",a.endsWithParent&&i.terminator_end&&(a.terminator_end+=(a.end?"|":"")+i.terminator_end)),a.illegal&&(a.illegalRe=t(a.illegal)),null==a.relevance&&(a.relevance=1),a.contains||(a.contains=[]);var u=[];a.contains.forEach(function(e){e.variants?e.variants.forEach(function(n){u.push(s(e,n))}):u.push("self"===e?a:e)}),a.contains=u,a.contains.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var c=a.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([a.terminator_end,a.illegal]).map(n).filter(Boolean);a.terminators=c.length?t(c.join("|"),!0):{exec:function(){return null}}}}r(e)}function c(e,t,a,i){function s(e,n){for(var t=0;t<n.contains.length;t++)if(r(n.contains[t].beginRe,e))return n.contains[t]}function l(e,n){if(r(e.endRe,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.endsWithParent?l(e.parent,n):void 0}function o(e,n){return!a&&r(n.illegalRe,e)}function f(e,n){var t=b.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function d(e,n,t,r){var a=r?"":x.classPrefix,i='<span class="'+a,s=t?"":"</span>";return i+=e+'">',i+n+s}function E(){if(!N.keywords)return n(S);var e="",t=0;N.lexemesRe.lastIndex=0;for(var r=N.lexemesRe.exec(S);r;){e+=n(S.substr(t,r.index-t));var a=f(N,r);a?(C+=a[1],e+=d(a[0],n(r[0]))):e+=n(r[0]),t=N.lexemesRe.lastIndex,r=N.lexemesRe.exec(S)}return e+n(S.substr(t))}function v(){var e="string"==typeof N.subLanguage;if(e&&!w[N.subLanguage])return n(S);var t=e?c(N.subLanguage,S,!0,M[N.subLanguage]):g(S,N.subLanguage.length?N.subLanguage:void 0);return N.relevance>0&&(C+=t.relevance),e&&(M[N.subLanguage]=t.top),d(t.language,t.value,!1,!0)}function h(){O+=null!=N.subLanguage?v():E(),S=""}function m(e){O+=e.className?d(e.className,"",!0):"",N=Object.create(e,{parent:{value:N}})}function p(e,n){if(S+=e,null==n)return h(),0;var t=s(n,N);if(t)return t.skip?S+=n:(t.excludeBegin&&(S+=n),h(),t.returnBegin||t.excludeBegin||(S=n)),m(t,n),t.returnBegin?0:n.length;var r=l(N,n);if(r){var a=N;a.skip?S+=n:(a.returnEnd||a.excludeEnd||(S+=n),h(),a.excludeEnd&&(S=n));do N.className&&(O+="</span>"),N.skip||(C+=N.relevance),N=N.parent;while(N!==r.parent);return r.starts&&m(r.starts,""),a.returnEnd?0:n.length}if(o(n,N))throw new Error('Illegal lexeme "'+n+'" for mode "'+(N.className||"<unnamed>")+'"');return S+=n,n.length||1}var b=_(e);if(!b)throw new Error('Unknown language: "'+e+'"');u(b);var R,N=i||b,M={},O="";for(R=N;R!==b;R=R.parent)R.className&&(O=d(R.className,"",!0)+O);var S="",C=0;try{for(var L,y,B=0;;){if(N.terminators.lastIndex=B,L=N.terminators.exec(t),!L)break;y=p(t.substr(B,L.index-B),L[0]),B=L.index+y}for(p(t.substr(B)),R=N;R.parent;R=R.parent)R.className&&(O+="</span>");return{relevance:C,value:O,language:e,top:N}}catch(A){if(A.message&&-1!==A.message.indexOf("Illegal"))return{relevance:0,value:n(t)};throw A}}function g(e,t){t=t||x.languages||N(w);var r={relevance:0,value:n(e)},a=r;return t.filter(_).forEach(function(n){var t=c(n,e,!1);t.language=n,t.relevance>a.relevance&&(a=t),t.relevance>r.relevance&&(a=r,r=t)}),a.language&&(r.second_best=a),r}function f(e){return x.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,n){return n.replace(/\t/g,x.tabReplace)})),x.useBR&&(e=e.replace(/\n/g,"<br>")),e}function d(e,n,t){var r=n?M[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function E(e){var n=i(e);if(!a(n)){var t;x.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e;var r=t.textContent,s=n?c(n,r,!0):g(r),u=l(t);if(u.length){var E=document.createElementNS("http://www.w3.org/1999/xhtml","div");E.innerHTML=s.value,s.value=o(u,l(E),r)}s.value=f(s.value),e.innerHTML=s.value,e.className=d(e.className,n,s.language),e.result={language:s.language,re:s.relevance},s.second_best&&(e.second_best={language:s.second_best.language,re:s.second_best.relevance})}}function v(e){x=s(x,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");R.forEach.call(e,E)}}function m(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function p(n,t){var r=w[n]=t(e);r.aliases&&r.aliases.forEach(function(e){M[e]=n})}function b(){return N(w)}function _(e){return e=(e||"").toLowerCase(),w[e]||w[M[e]]}var R=[],N=Object.keys,w={},M={},x={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=c,e.highlightAuto=g,e.fixMarkup=f,e.highlightBlock=E,e.configure=v,e.initHighlighting=h,e.initHighlightingOnLoad=m,e.registerLanguage=p,e.listLanguages=b,e.getLanguage=_,e.inherit=s,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",e.BINARY_NUMBER_RE="\\b(0b[01']+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.COMMENT=function(n,t,r){var a=e.inherit({className:"comment",begin:n,end:t,contains:[]},r||{});return a.contains.push(e.PHRASAL_WORDS_MODE),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),a},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},e});