/*
    cssx/shim/boxOffsets
    (c) copyright 2010, unscriptable.com
    author: john

    LICENSE: see the LICENSE.txt file. If file is missing, this file is subject to the AFL 3.0
    license at the following url: http://www.opensource.org/licenses/afl-3.0.php.

    This cssx plugin fixes lack of box offset positioning in IE6.

    TODO: the logic in here could be improved a bit

*/

function cssx_boxOffsets_checkBoxHeight(t,e){function i(){null==e&&(e=t.style.pixelBottom),t.runtimeStyle.bottom="0px";var i=t.currentStyle,o=t.offsetParent,s=t.ownerDocument;if(o&&"auto"!=i.top&&"absolute"==i.position||"fixed"==i.position){var n=o==s.body?s.body.clientHeight:o.offsetHeight-(t.offsetHeight-t.clientHeight)-parseInt(i.paddingTop)-parseInt(i.paddingBottom);n=n-t.offsetTop-e+"px"}else n="";t.runtimeStyle.height=n}setTimeout(function(){var e=t.parentNode,o=e.onresize;e.onresize=function(){i(),o&&o.call(this)}},10),i()}function cssx_boxOffsets_checkBoxWidth(t,e){function i(){null==e&&(e=t.style.pixelRight),t.runtimeStyle.right="0px";var i=t.currentStyle,o=t.offsetParent,s=t.ownerDocument;if(o&&"auto"!=i.left&&"absolute"==i.position||"fixed"==i.position){var n=(o==s.body?s.body.clientWidth:o.offsetWidth)-(t.offsetWidth-t.clientWidth)-parseInt(i.paddingLeft)-parseInt(i.paddingRight);n=n-t.offsetLeft-e+"px"}else n="";t.runtimeStyle.width=n}setTimeout(function(){var e=t.parentNode,o=e.onresize;e.onresize=function(){i(),o&&o.call(this)}},10),i()}define("xstyle/shim/boxOffsets",{onProperty:function(t,e){if("bottom"==t){if("auto"!==e)return e.match(/px$/)?"height: expression(cssx_boxOffsets_checkBoxHeight(this, "+parseInt(e)+"));":'height: expression(cssx_boxOffsets_checkBoxHeight(this)); bottom: expression("'+e+'");'}else if("auto"!==e)return e.match(/px$/)?"width: expression(cssx_boxOffsets_checkBoxWidth(this, "+parseInt(e)+"));":'width: expression(cssx_boxOffsets_checkBoxWidth(this)); right: expression("'+e+'");'}});