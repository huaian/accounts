define("kaiView/pc/viewUtils/index",["data/store/c.common.store","../widget/dijit/views_states_dialog","../widget/dijit/interface_states_dialog","../data/index","dojo/Deferred","dojo/store/Memory","cutil/c.util.common","cutil/c.util.data","dojo/parser","page/viewFactory","dijit/registry","dojo/dom-construct","dojo/dom-style","dojo/dom","dojo/on","dijit/Fieldset","dijit/form/Form","dijit/form/TextBox","dijit/form/Select","dijit/form/Button","dijit/form/CheckBox","dojo/ready","dijit/form/NumberTextBox"],function(e,t,i,o,a,s,n,r,c,d,l,g,u,f,w){"use strict";var m={showInterfacesStatesDialog:function(){var e=this;o.dataFetcher.getInterfaceStatesList().then(function(t){_.each(t,function(e){}),e.interface_states_dialog=new i({widgetData:{viewsStatesList:t,dataHelper:o}}),e.interface_states_dialog.startup(),e.interface_states_dialog.show()})},showViewsStatesDialog:function(){var e=this;o.dataFetcher.getViewsStatesList().then(function(i){_.each(i,function(e){e.state=Kai.getViewState(e.id)}),e.views_states_dialog=new t({widgetData:{viewsStatesList:i,dataHelper:o}}),e.views_states_dialog.startup(),e.views_states_dialog.show()})},getSelectedItemData:function(e){var t=_.keys(e.selection)[0],i=e.collection.data.filter(function(e){return e.id==t});return i[0]},getTwoAyncRequest:function(){new a,new a},createCGrid:function(e){return new cdgrid({allowTextSelection:!0,SelectionMode:"multiple",modelName:"queryLoanConfirm",collection:e.collection,columns:e.columns,allowSelectAll:!0,noDataMessage:"没有结果.",loadingMessage:"查询中...",firstLastArrows:!0,pagingLinks:!1,pagingTextBox:!0,rowsPerPage:25,pageSizeOptions:[5,10,15,25],className:"dgrid-autoheight",getBeforePut:!1},e.domId)},checkStrong:function(e){var t=0;if(e.length<8)return t;switch(/\d/.test(e)&&t++,/[a-z]/.test(e)&&t++,/[A-Z]/.test(e)&&t++,/[_\W]/.test(e)&&t++,t){case 1:return 1;case 2:return 2;case 3:case 4:return e.length<12?3:4}},safeLogout:function(){var t=this,i=e.UserStore.getInstance();i.remove(),_.isObject(localStorage)&&localStorage.clear(),t.forward(Kai.loginUrl,{keepURL:!0})},openAllTabs:function(){var e=this,t=e.store.getAttr("navigationItems");_.each(t,function(t,i){t.leaf&&_.delay(function(){e.model&&e.model.set({currentChildViewName:t.url},{changeType:"tab"})},1e3*(i+1))})}};return m});