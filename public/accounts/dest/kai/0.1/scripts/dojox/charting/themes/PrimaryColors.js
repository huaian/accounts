define("dojox/charting/themes/PrimaryColors",["../Theme","./gradientGenerator","./common"],function(e,r,o){var n=["#f00","#0f0","#00f","#ff0","#0ff","#f0f","./common"],f={type:"linear",space:"plot",x1:0,y1:0,x2:0,y2:100};return o.PrimaryColors=new e({seriesThemes:r.generateMiniTheme(n,f,90,40,25)}),o.PrimaryColors});