require({cache:{"url:dojox/layout/resources/ScrollPane.html":'<div class="dojoxScrollWindow" dojoAttachEvent="onmouseenter: _enter, onmouseleave: _leave">\n    <div class="dojoxScrollWrapper" style="${style}" dojoAttachPoint="wrapper" dojoAttachEvent="onmousemove: _calc">\n	<div class="dojoxScrollPane" dojoAttachPoint="containerNode"></div>\n    </div>\n    <div dojoAttachPoint="helper" class="dojoxScrollHelper"><span class="helperInner">|</span></div>\n</div>'}}),define("dojox/layout/ScrollPane",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/html","dojo/_base/fx","dijit/_Templated","dijit/layout/ContentPane","dojo/dom-class","dojo/text!./resources/ScrollPane.html"],function(e,t,i,o,s,l,h,n){e.experimental("dojox.layout.ScrollPane");var r=t("dojox.layout.ScrollPane",[l,s],{_line:null,_lo:null,_offset:15,orientation:"vertical",autoHide:!0,templateString:n,resize:function(e){e&&(e.h&&i.style(this.domNode,"height",e.h+"px"),e.w&&i.style(this.domNode,"width",e.w+"px"));var t=this._dir,s=this._vertical,l=this.containerNode[s?"scrollHeight":"scrollWidth"];if(i.style(this.wrapper,this._dir,this.domNode.style[this._dir]),this._lo=i.coords(this.wrapper,!0),this._size=Math.max(0,l-this._lo[s?"h":"w"]),!this._size)return this.helper.style.display="none",void(this.wrapper[this._scroll]=0);this.helper.style.display="",this._line=new o._Line(0-this._offset,this._size+2*this._offset);var h=this._lo[s?"h":"w"],n=Math.min(1,h/l),r=h*n,a=Math.floor(h-h*n);this._helpLine=new o._Line(0,a),i.style(this.helper,t,Math.floor(r)+"px")},postCreate:function(){this.inherited(arguments),this.autoHide&&(this._showAnim=o._fade({node:this.helper,end:.5,duration:350}),this._hideAnim=o.fadeOut({node:this.helper,duration:750})),this._vertical="vertical"==this.orientation,this._vertical?(this._dir="height",this._edge="top",this._scroll="scrollTop"):(h.add(this.containerNode,"dijitInline"),this._dir="width",this._edge="left",this._scroll="scrollLeft"),this._hideAnim&&this._hideAnim.play(),i.style(this.wrapper,"overflow","hidden")},_set:function(e){this._size&&"focused"!==e&&(this.wrapper[this._scroll]=Math.floor(this._line.getValue(e)),i.style(this.helper,this._edge,Math.floor(this._helpLine.getValue(e))+"px"))},_calc:function(e){this._lo||this.resize(),this._set(this._vertical?(e.pageY-this._lo.y)/this._lo.h:(e.pageX-this._lo.x)/this._lo.w)},_enter:function(e){this._hideAnim&&("playing"==this._hideAnim.status()&&this._hideAnim.stop(),this._showAnim.play())},_leave:function(e){this._hideAnim&&this._hideAnim.play()}});return r});