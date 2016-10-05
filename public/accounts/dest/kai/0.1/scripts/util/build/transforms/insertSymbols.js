define("util/build/transforms/insertSymbols",["../buildControl","../fileUtils","../fs","../replace"],function(e,r,n,t){var o=1,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=s.length,l=function(r,n){var t=r;if("short"===e.symbol){for(var l=[],a=o;a;)l.unshift(s[a%i]),a=Math.floor(a/i);l="$D"+l.join(""),o++,n[l+"_"]=r,t=l+"_"}return t},a=function(r,n){var t=r.replace(/\./g,"_");return"short"!==e.symbol&&r===t?("define"===t&&(t="DEFINE"),t+"__"+Math.floor(1e4*Math.random())):l(t,n)},u=function(e,r){var n=e.getText(),t=[],o=function(e,n,o,s,i){return n+o+s+" "+l(t+o,r)+i};if(e.pid&&t.push(e.pid),e.mid&&t.push(e.mid.replace(/\//g,"_")),!t.length){var s=n.match(/dojo\.provide\("(.*)"\);/);s&&t.push(s[1].replace(/\./g,"_"))}return t.length&&(t=t.join("_").replace(/\.|\-/g,"_")+"_",n=n.replace(/^(\s*)(\w+)(\s*:\s*function)\s*(\(.*)$/gm,o).replace(/^(\s*this\.)(\w+)(\s*=\s*function)\s*(\(.*)$/gm,o)),n=n.replace(/^(\s*)([\w\.]+)(\s*=\s*function)\s*(\(.*)/gm,function(e,n,t,o,s){return n+t+o+" "+a(t,r)+s})},f=0;return function(n,t){return e.symbol&&(n.tag.report?"short"===e.symbol&&(e.symbolTable={},n.reports.push({dir:".",filename:"symboltable.txt",content:function(){var r,n=[],t=e.symbolTable;for(r in t)n.push(r+': "'+t[r]+'"'+e.newline);return n.join("")}})):(f||(f=1,e.log("symbolsLeak",[])),r.ensureDirectoryByFilename(n.dest),n.text=u(n,e.symbolTable))),0}});