define("util/less/benchmark/less-benchmark",["dojo","dijit","dojox"],function(e,r,s){var n=require("path"),t=require("fs"),a=require("util"),i=require("../lib/less"),o=n.join(__dirname,"benchmark.less");process.argv[2]&&(o=n.join(process.cwd(),process.argv[2])),t.readFile(o,"utf8",function(e,r){var s,t,p,u;a.puts("Benchmarking...\n",n.basename(o)+" ("+parseInt(r.length/1024)+" KB)",""),t=new Date,new i.Parser({optimization:2}).parse(r,function(e,n){p=new Date,u=p-t,a.puts("Parsing: "+u+" ms ("+parseInt(1e3/u*r.length/1024)+" KB/s)"),t=new Date,s=n.toCSS(),p=new Date,a.puts("Generation: "+(p-t)+" ms ("+parseInt(1e3/(p-t)*r.length/1024)+" KB/s)"),u+=p-t,a.puts("Total: "+u+"ms ("+parseInt(1e3/u*r.length/1024)+" KB/s)"),e&&(i.writeError(e),process.exit(3))})})});