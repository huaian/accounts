/*
    cssx/shim/inlineBlock
    (c) copyright 2010, unscriptable.com
    author: john

    LICENSE: see the LICENSE.txt file. If file is missing, this file is subject to the AFL 3.0
    license at the following url: http://www.opensource.org/licenses/afl-3.0.php.

    This cssx plugin fixes lack of inline-block support in IE6 and IE7

*/

define("xstyle/shim/inlineBlock",[],function(){return{onProperty:function(n,i){return"inline-block"===i?"display: inline; zoom: 1":void 0}}});