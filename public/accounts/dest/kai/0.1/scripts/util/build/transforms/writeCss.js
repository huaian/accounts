define("util/build/transforms/writeCss",["../buildControl","../fileUtils","../fs"],function(t,e,r){return function(n,i){var s=0,o=[],u=function(t){t&&o.push(t),0==--s&&i(n,o.length&&o)},c=function(i,o,c){e.ensureDirectoryByFilename(i),s++,r.writeFile(i,t.newlineFilter(o,n,"writeCss"),c||"utf8",u)},f=0;try{if(c(n.dest,n.text),n.compactDest!=n.dest&&c(n.compactDest,n.compactText),f)return i;f=1;var l,a,d,m=t.destDirToExternSet;for(l in m){a=m[l];for(d in a)c(l+"/"+a[d],t.resources[d].text,n.encoding)}}catch(p){return s?(o.push(p),0):p}return i}});