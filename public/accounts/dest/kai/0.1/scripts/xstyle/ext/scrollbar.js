/*
    cssx/shim/scrollbar
    (c) copyright 2010, unscriptable.com
    author: john

    LICENSE: see the LICENSE.txt file. If file is missing, this file is subject to the AFL 3.0
    license at the following url: http://www.opensource.org/licenses/afl-3.0.php.
*/

define("xstyle/ext/scrollbar",[],function(){function t(){var t={w:15,h:15},e=document.createElement("div");e.style.cssText="width:100px;height:100px;overflow:scroll;bottom:100%;right:100%;position:absolute;visibility:hidden;",document.body.appendChild(e);try{t={w:e.offsetWidth-Math.max(e.clientWidth,e.scrollWidth),h:e.offsetHeight-Math.max(e.clientHeight,e.scrollHeight)},document.body.removeChild(e)}catch(i){}return t}function e(){var i=t();return i={w:i.w+"px",h:i.h+"px"},e=function(){return i},i}var i=/-cssx-scrollbar-(width|height)/;return{onValue:function(t,n,r){return t.replace(i,function(t,i){return"width"==i?e().w:e().h})}}});