define("dojox/math/round",["dojo","dojox"],function(o,t){if(o.getObject("math.round",!0,t),o.experimental("dojox.math.round"),t.math.round=function(o,t,a){var n=Math.log(Math.abs(o))/Math.log(10),r=10/(a||10),d=Math.pow(10,-15+n);return(r*(+o+(o>0?d:-d))).toFixed(t)/r},0==.9.toFixed()){var a=t.math.round;t.math.round=function(o,t,n){var r=Math.pow(10,-t||0),d=Math.abs(o);return!o||d>=r?r=0:(d/=r,(.5>d||d>=.95)&&(r=0)),a(o,t,n)+(o>0?r:-r)}}return t.math.round});