require({cache:{"url:dojox/grid/enhanced/templates/FilterBar.html":'<table class="dojoxGridFBar" border="0" cellspacing="0" role="presentation" dojoAttachEvent="onclick:_onClickFilterBar, onmouseenter:_onMouseEnter, onmouseleave:_onMouseLeave, onmousemove:_onMouseMove"\n	><tr><td class="dojoxGridFBarBtnTD"\n		><span dojoType="dijit.form.Button" class="dojoxGridFBarBtn" dojoAttachPoint="defineFilterButton" label="..." iconClass="dojoxGridFBarDefFilterBtnIcon" showLabel="true" dojoAttachEvent="onClick:_showFilterDefDialog, onMouseEnter:_onEnterButton, onMouseLeave:_onLeaveButton, onMouseMove:_onMoveButton"></span\n	></td><td class="dojoxGridFBarInfoTD"\n		><span class="dojoxGridFBarInner"\n			><span class="dojoxGridFBarStatus" dojoAttachPoint="statusBarNode">${_noFilterMsg}</span\n			><span dojoType="dijit.form.Button" class="dojoxGridFBarClearFilterBtn" dojoAttachPoint="clearFilterButton" \n				label="${_filterBarClearBtnLabel}" iconClass="dojoxGridFBarClearFilterBtnIcon" showLabel="true" \n				dojoAttachEvent="onClick:_clearFilterDefDialog, onMouseEnter:_onEnterButton, onMouseLeave:_onLeaveButton, onMouseMove:_onMoveButton"></span\n			><span dojotype="dijit.form.Button" class="dojoxGridFBarCloseBtn" dojoAttachPoint="closeFilterBarButton" \n				label="${_closeFilterBarBtnLabel}" iconClass="dojoxGridFBarCloseBtnIcon" showLabel="false" \n				dojoAttachEvent="onClick:_closeFilterBar, onMouseEnter:_onEnterButton, onMouseLeave:_onLeaveButton, onMouseMove:_onMoveButton"></span\n		></span\n	></td></tr\n></table>\n'}}),define("dojox/grid/enhanced/plugins/filter/FilterBar",["dojo/_base/declare","dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/_base/sniff","dojo/_base/event","dojo/_base/html","dojo/_base/window","dojo/query","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/fx","dojo/_base/fx","dojo/string","dijit/focus","dojo/text!../../templates/FilterBar.html"],function(t,e,i,o,s,n,r,l,a,u,d,h,c,f,_,B,g){var p="dojoxGridFBarHover",F="dojoxGridFBarFiltered",m=function(t){try{t&&t.preventDefault&&n.stop(t)}catch(e){}};return t("dojox.grid.enhanced.plugins.filter.FilterBar",[u,d,h],{templateString:g,widgetsInTemplate:!0,_timeout_statusTooltip:300,_handle_statusTooltip:null,_curColIdx:-1,plugin:null,postMixInProperties:function(){var t=this.plugin,e=t.nls;this._filterBarDefBtnLabel=e.filterBarDefButton,this._filterBarClearBtnLabel=e.filterBarClearButton,this._closeFilterBarBtnLabel=e.closeFilterBarBtn;var i=t.args.itemsName||e.defaultItemsName;this._noFilterMsg=_.substitute(e.filterBarMsgNoFilterTemplate,["",i]);var s=this.plugin.args.statusTipTimeout;"number"==typeof s&&(this._timeout_statusTooltip=s);var n=t.grid;n.showFilterBar=o.hitch(this,"showFilterBar"),n.toggleFilterBar=o.hitch(this,"toggleFilterBar"),n.isFilterBarShown=o.hitch(this,"isFilterBarShown")},postCreate:function(){this.inherited(arguments),this.plugin.args.closeFilterbarButton||r.style(this.closeFilterBarButton.domNode,"display","none");var t=this,e=this.plugin.grid,i=this.oldGetHeaderHeight=o.hitch(e,e._getHeaderHeight);this.placeAt(e.viewsHeaderNode,"after"),this.connect(this.plugin.filterDefDialog,"showDialog","_onShowFilterDefDialog"),this.connect(this.plugin.filterDefDialog,"closeDialog","_onCloseFilterDefDialog"),this.connect(e.layer("filter"),"onFiltered",this._onFiltered),this.defineFilterButton.domNode.title=this.plugin.nls.filterBarDefButton,r.hasClass(l.body(),"dijit_a11y")&&this.defineFilterButton.set("label",this.plugin.nls.a11yFilterBarDefButton),this.connect(this.defineFilterButton.domNode,"click",m),this.connect(this.clearFilterButton.domNode,"click",m),this.connect(this.closeFilterBarButton.domNode,"click",m),this.toggleClearFilterBtn(!0),this._initAriaInfo(),e._getHeaderHeight=function(){return i()+r.marginBox(t.domNode).h},e.focus.addArea({name:"filterbar",onFocus:o.hitch(this,this._onFocusFilterBar,!1),onBlur:o.hitch(this,this._onBlurFilterBar)}),e.focus.placeArea("filterbar","after","header")},uninitialize:function(){var t=this.plugin.grid;t._getHeaderHeight=this.oldGetHeaderHeight,t.focus.removeArea("filterbar"),this.plugin=null},isFilterBarShown:function(){return"none"!=r.style(this.domNode,"display")},showFilterBar:function(t,i,n){var l=this.plugin.grid;if(i){if(Boolean(t)==this.isFilterBarShown())return;n=n||{};var a=[],u=500;a.push(c[t?"wipeIn":"wipeOut"](o.mixin({node:this.domNode,duration:u},n)));var d=l.views.views[0].domNode.offsetHeight,h={duration:u,properties:{height:{end:o.hitch(this,function(){var e=this.domNode.scrollHeight;return s("ff")&&(e-=2),t?d-e:d+e})}}};e.forEach(l.views.views,function(t){a.push(f.animateProperty(o.mixin({node:t.domNode},h,n)),f.animateProperty(o.mixin({node:t.scrollboxNode},h,n)))}),a.push(f.animateProperty(o.mixin({node:l.viewsNode},h,n))),c.combine(a).play()}else r.style(this.domNode,"display",t?"":"none"),l.update()},toggleFilterBar:function(t,e){this.showFilterBar(!this.isFilterBarShown(),t,e)},getColumnIdx:function(t){for(var e=a("[role='columnheader']",this.plugin.grid.viewsHeaderNode),i=-1,o=e.length-1;o>=0;--o){var s=r.position(e[o]);if(t>=s.x&&t<s.x+s.w){i=o;break}}return i>=0&&this.plugin.grid.layout.cells[i].filterable!==!1?i:-1},toggleClearFilterBtn:function(t){r.style(this.clearFilterButton.domNode,"display",t?"none":"")},_closeFilterBar:function(t){m(t);var e=this.plugin.filterDefDialog.getCriteria();if(e){var o=i.connect(this.plugin.filterDefDialog,"clearFilter",this,function(){this.showFilterBar(!1,!0),i.disconnect(o)});this._clearFilterDefDialog(t)}else this.showFilterBar(!1,!0)},_showFilterDefDialog:function(t){m(t),this.plugin.filterDefDialog.showDialog(this._curColIdx),this.plugin.grid.focus.focusArea("filterbar")},_clearFilterDefDialog:function(t){m(t),this.plugin.filterDefDialog.onClearFilter(),this.plugin.grid.focus.focusArea("filterbar")},_onEnterButton:function(t){this._onBlurFilterBar(),m(t)},_onMoveButton:function(t){this._onBlurFilterBar()},_onLeaveButton:function(t){this._leavingBtn=!0},_onShowFilterDefDialog:function(t){"number"==typeof t&&(this._curColIdx=t),this._defPaneIsShown=!0},_onCloseFilterDefDialog:function(){this._defPaneIsShown=!1,this._curColIdx=-1,B.focus(this.defineFilterButton.domNode)},_onClickFilterBar:function(t){m(t),this._clearStatusTipTimeout(),this.plugin.grid.focus.focusArea("filterbar"),this.plugin.filterDefDialog.showDialog(this.getColumnIdx(t.clientX))},_onMouseEnter:function(t){this._onFocusFilterBar(!0,null),this._updateTipPosition(t),this._setStatusTipTimeout()},_onMouseMove:function(t){this._leavingBtn&&(this._onFocusFilterBar(!0,null),this._leavingBtn=!1),this._isFocused&&(this._setStatusTipTimeout(),this._highlightHeader(this.getColumnIdx(t.clientX)),this._handle_statusTooltip&&this._updateTipPosition(t))},_onMouseLeave:function(t){this._onBlurFilterBar()},_updateTipPosition:function(t){this._tippos={x:t.pageX,y:t.pageY}},_onFocusFilterBar:function(t,e,i){if(!this.isFilterBarShown())return!1;if(this._isFocused=!0,r.addClass(this.domNode,p),!t){var o="none"!==r.style(this.clearFilterButton.domNode,"display"),s="none"!==r.style(this.closeFilterBarButton.domNode,"display");"undefined"==typeof this._focusPos&&(i>0?this._focusPos=0:(s?this._focusPos=1:this._focusPos=0,o&&++this._focusPos)),0===this._focusPos?B.focus(this.defineFilterButton.focusNode):1===this._focusPos&&o?B.focus(this.clearFilterButton.focusNode):B.focus(this.closeFilterBarButton.focusNode)}return m(e),!0},_onBlurFilterBar:function(t,e){this._isFocused&&(this._isFocused=!1,r.removeClass(this.domNode,p),this._clearStatusTipTimeout(),this._clearHeaderHighlight());var i=!0;if(e){var o=3;if("none"===r.style(this.closeFilterBarButton.domNode,"display")&&--o,"none"===r.style(this.clearFilterButton.domNode,"display")&&--o,1==o)delete this._focusPos;else{for(var s=this._focusPos,n=s+e;0>n;n+=o);n%=o,e>0&&s>n||0>e&&n>s?delete this._focusPos:(this._focusPos=n,i=!1)}}return i},_onFiltered:function(t,e){var i=this.plugin,o=i.args.itemsName||i.nls.defaultItemsName,s="",n=i.grid,l=n.layer("filter");l.filterDef()?(s=_.substitute(i.nls.filterBarMsgHasFilterTemplate,[t,e,o]),r.addClass(this.domNode,F)):(s=_.substitute(i.nls.filterBarMsgNoFilterTemplate,[e,o]),r.removeClass(this.domNode,F)),this.statusBarNode.innerHTML=s,this._focusPos=0},_initAriaInfo:function(){this.defineFilterButton.domNode.setAttribute("aria-label",this.plugin.nls.waiFilterBarDefButton),this.clearFilterButton.domNode.setAttribute("aria-label",this.plugin.nls.waiFilterBarClearButton)},_isInColumn:function(t,e,i){var o=r.position(e);return t>=o.x&&t<o.x+o.w},_setStatusTipTimeout:function(){this._clearStatusTipTimeout(),this._defPaneIsShown||(this._handle_statusTooltip=setTimeout(o.hitch(this,this._showStatusTooltip),this._timeout_statusTooltip))},_clearStatusTipTimeout:function(){clearTimeout(this._handle_statusTooltip),this._handle_statusTooltip=null},_showStatusTooltip:function(){this._handle_statusTooltip=null,this.plugin&&this.plugin.filterStatusTip.showDialog(this._tippos.x,this._tippos.y,this.getColumnIdx(this._tippos.x))},_highlightHeader:function(t){if(t!=this._previousHeaderIdx){var e=this.plugin.grid,i=e.getCell(this._previousHeaderIdx);i&&r.removeClass(i.getHeaderNode(),"dojoxGridCellOver"),i=e.getCell(t),i&&r.addClass(i.getHeaderNode(),"dojoxGridCellOver"),this._previousHeaderIdx=t}},_clearHeaderHighlight:function(){if("undefined"!=typeof this._previousHeaderIdx){var t=this.plugin.grid,e=t.getCell(this._previousHeaderIdx);e&&t.onHeaderCellMouseOut({cellNode:e.getHeaderNode()}),delete this._previousHeaderIdx}}})});