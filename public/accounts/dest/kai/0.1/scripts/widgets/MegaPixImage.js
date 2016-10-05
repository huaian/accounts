/**
* Mega pixel image rendering library for iOS6 Safari
*
* Fixes iOS6 Safari's image file rendering issue for large size image (over mega-pixel),
* which causes unexpected subsampling when drawing it in canvas.
* By using this library, you can safely render the image with proper stretching.
*
* Copyright (c) 2012 Shinichi Tomita <shinichi.tomita@gmail.com>
* Released under the MIT license
*/

!function(){function e(e){var t=e.naturalWidth,a=e.naturalHeight;if(t*a>1048576){var r=document.createElement("canvas");r.width=r.height=1;var i=r.getContext("2d");return i.drawImage(e,-t+1,0),0===i.getImageData(0,0,1,1).data[3]}return!1}function t(e,t,a){var r=document.createElement("canvas");r.width=1,r.height=a;var i=r.getContext("2d");i.drawImage(e,0,0);for(var n=i.getImageData(0,0,1,a).data,o=0,s=a,c=a;c>o;){var h=n[4*(c-1)+3];0===h?s=c:o=c,c=s+o>>1}var d=c/a;return 0===d?1:d}function a(e,t,a){var i=document.createElement("canvas");return r(e,i,t,a),i.toDataURL("image/jpeg",t.quality||.8)}function r(a,r,n,o){var s=a.naturalWidth,c=a.naturalHeight,h=n.width,d=n.height,g=r.getContext("2d");g.save(),i(r,g,h,d,n.orientation);var l=e(a);l&&(s/=2,c/=2);var u=1024,w=document.createElement("canvas");w.width=w.height=u;for(var m=w.getContext("2d"),f=o?t(a,s,c):1,v=Math.ceil(u*h/s),b=Math.ceil(u*d/c/f),L=0,I=0;c>L;){for(var R=0,U=0;s>R;)m.clearRect(0,0,u,u),m.drawImage(a,-R,-L),g.drawImage(w,0,0,u,u,U,I,v,b),R+=u,U+=v;L+=u,I+=b}g.restore(),w=m=null}function i(e,t,a,r,i){switch(i){case 5:case 6:case 7:case 8:e.width=r,e.height=a;break;default:e.width=a,e.height=r}switch(i){case 2:t.translate(a,0),t.scale(-1,1);break;case 3:t.translate(a,r),t.rotate(Math.PI);break;case 4:t.translate(0,r),t.scale(1,-1);break;case 5:t.rotate(.5*Math.PI),t.scale(1,-1);break;case 6:t.rotate(.5*Math.PI),t.translate(0,-r);break;case 7:t.rotate(.5*Math.PI),t.translate(a,-r),t.scale(-1,1);break;case 8:t.rotate(-.5*Math.PI),t.translate(-a,0)}}function n(e){if(window.Blob&&e instanceof Blob){var t=new Image,a=window.URL&&window.URL.createObjectURL?window.URL:window.webkitURL&&window.webkitURL.createObjectURL?window.webkitURL:null;if(!a)throw Error("No createObjectURL function found to create blob url");t.src=a.createObjectURL(e),this.blob=e,e=t}if(!e.naturalWidth&&!e.naturalHeight){var r=this;e.onload=function(){var e=r.imageLoadListeners;if(e){r.imageLoadListeners=null;for(var t=0,a=e.length;a>t;t++)e[t]()}},this.imageLoadListeners=[]}this.srcImage=e}n.prototype.render=function(e,t){if(this.imageLoadListeners){var i=this;return void this.imageLoadListeners.push(function(){i.render(e,t)})}t=t||{};var n=this.srcImage.naturalWidth,o=this.srcImage.naturalHeight,s=t.width,c=t.height,h=t.maxWidth,d=t.maxHeight,g=!this.blob||"image/jpeg"===this.blob.type;s&&!c?c=o*s/n<<0:c&&!s?s=n*c/o<<0:(s=n,c=o),h&&s>h&&(s=h,c=o*s/n<<0),d&&c>d&&(c=d,s=n*c/o<<0);var l={width:s,height:c};for(var u in t)l[u]=t[u];var w=e.tagName.toLowerCase();"img"===w?e.src=a(this.srcImage,l,g):"canvas"===w&&r(this.srcImage,e,l,g),"function"==typeof this.onrender&&this.onrender(e)},"function"==typeof define&&define.amd?define("widgets/MegaPixImage",[],function(){return n}):this.MegaPixImage=n}();