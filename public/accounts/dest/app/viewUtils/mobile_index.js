define(["../appRestStore/account","appConfig/const","cutil/c.util.common","cutil/c.util.validate"],function(o,t,i,n){"use strict";var a={goBack:function(){var o=this;o.back()},gotoPhoneCollection:function(o){var t=this;t.showToast({text:"电催作业功能未开通"})},gotoCustomerSearch:function(o){var t=this;Kai.isH5&&t.forward("h5/view/customer_search?"+$.param({accountId:o}))},gotoCollectionPerformance:function(o){var t=this;t.showToast({text:"业绩功能未开通"})},gotoOutboundCollection:function(o){var t=this;Kai.isH5&&t.forward("h5/view/outbound_task?"+$.param({accountId:o}))},gotoSystemNotification:function(o){var t=this;dojoConfig.isH5&&_.delay(function(){t.forward("h5/view/system_notification")},200)}};return a});