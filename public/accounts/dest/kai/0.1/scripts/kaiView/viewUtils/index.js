define("kaiView/viewUtils/index",["service/web/c.web.geolocation","data/store/c.common.store","dojo/Deferred"],function(e,t,i){"use strict";var s={goBack:function(){var e=this;e.back()},gotoPage:function(e,t){var i=this,t=t||{};i.forward(e,t)},showSystemAlert:function(e){var e=e||{};Kai.showAlert('<div class="weui_cells notification"><p class="noti_title">'+(e.title||"")+'</p><p class="main_text"</p>'+(e.message||"")+'<p class="noti_name">---'+(e.source||"")+"</p></div>")},checkStrong:function(e){var t=0;if(e.length<8)return t;switch(/\d/.test(e)&&t++,/[a-z]/.test(e)&&t++,/[A-Z]/.test(e)&&t++,/[_\W]/.test(e)&&t++,t){case 1:return 1;case 2:return 2;case 3:case 4:return e.length<12?3:4}},getPosition:function(t,i,s){_.defer(function(){e.requestGeographic(t,i,s)})}};return s});