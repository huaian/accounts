define("3rdlibs/angular/docs/examples/example-example6/script",["dojo","dijit","dojox"],function(e,o,n){!function(e){"use strict";e.module("drag",[]).directive("draggable",function(e){return function(o,n,r){function i(e){d=e.screenY-u,c=e.screenX-t,n.css({top:d+"px",left:c+"px"})}function s(){e.off("mousemove",i),e.off("mouseup",s)}var t=0,u=0,c=0,d=0;n.css({position:"relative",border:"1px solid red",backgroundColor:"lightgrey",cursor:"pointer",display:"block",width:"65px"}),n.on("mousedown",function(o){o.preventDefault(),t=o.screenX-c,u=o.screenY-d,e.on("mousemove",i),e.on("mouseup",s)})}})}(window.angular)});