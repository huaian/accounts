define("util/build/transforms/optimizer/stripConsole",["../../buildControl"],function(r){if(r.stripConsole){var n="assert|count|debug|dir|dirxml|group|groupEnd|info|profile|profileEnd|time|timeEnd|trace|log";"warn"===r.stripConsole?n+="|warn":"all"===r.stripConsole&&(n+="|warn|error");var o=new RegExp("([^\\w\\.]|^)((window.)?console\\.("+n+")\\s*\\()","g");return function(r){return r.replace(o,"$1 0 && $2")}}return function(r){return r}});