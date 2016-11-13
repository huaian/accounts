define("ui/calendar/script/_ui.calendar",["require","text!calendarTemplate","Stores","exports","module","swiper"],function(t,e,a,s,i){function l(t){var s=this;$(s.containerNode).html(e);var i=o(this.stocks);if(!_.isArray(i))return!1;if(null!=i&&0!=i.length){var l=i[0].split(","),d=l[0]+"年"+l[1]+"月";$(".cal_year").html(d);for(var n="",c=0;c<i.length;c++){var v=i[c].split(","),h=new Date;h.setFullYear(v[0],v[1]-1,v[2]);var m=$.proxy(r,s)(h),f=['<div class="swiper-slide red-slide"><div class="day">',"</div></div>"],g=f[0]+m+f[1];n+=g}$(".selectCalendarBox .swiper-wrapper").html(n);var p=new Swiper(s.calendarSwiperNode,{direction:"horizontal",pagination:!1,onSlideChangeStart:function(t){var e=t.activeIndex,a=o(s.stocks),i=a[t.activeIndex].split(","),l=i[0]+"年"+i[1]+"月";$(".cal_year").html(l),0==e?($(".left_cal_btn").removeClass("left_cal_btn-active"),a.length-1==1&&$(".right_cal_btn").addClass("right_cal_btn-active")):e==a.length-1?(a.length-1==1&&$(".left_cal_btn").addClass("left_cal_btn-active"),$(".right_cal_btn").removeClass("right_cal_btn-active")):($(".left_cal_btn").addClass("left_cal_btn-active"),$(".right_cal_btn").addClass("right_cal_btn-active"))}});$("#closeCalendar").click(function(){var t=a.calendarStore.getInstance(),e=$("#j_select_calendar .selected .day_stock"),s=$("#j_select_calendar .selected"),i=e.attr("price"),l=e.attr("downpayment"),r=e.attr("downOddDiffCost"),d=e.attr("stock"),n=e.attr("travelledTime"),c=e.attr("productid"),o=["周日","周一","周二","周三","周四","周五","周六"],v=o[s.index()];$("#j_select_calendar").data("travelledTime",n),c&&t.setAttr({productId:c,choosedProductPrice:i,choosedTravelTime:n,downPayment:l,weekDay:v,downOddDiffCost:r,stocksNumber:d}),history.go(-1)});var u=$(".day").length,b=0,y=function(t){"right"==t?b++:b--,p.slideTo(b),b>=u-1&&$(".right_cal_btn").removeClass("right_cal_btn-active"),0>=b&&$(".left_cal_btn").removeClass("left_cal_btn-active"),b>0&&$(".left_cal_btn").addClass("left_cal_btn-active"),u-1>b&&$(".right_cal_btn").addClass("right_cal_btn-active"),C()},C=function(){var t=i[b]&&i[b].split(",");if(_.isArray(t)){var e=t[0]+"年"+t[1]+"月";$(".cal_year").html(e)}};i.length>1&&($(".right_cal_btn").addClass("right_cal_btn-active"),$(".right_cal_btn, .left_cal_btn").on("click",function(t){var e=$(t.target);return 0>b||b>u-1?!1:$(t.target).hasClass("left_cal_btn-active")||$(t.target).hasClass("right_cal_btn-active")?void y(e.hasClass("right_cal_btn-active")?"right":"left"):!1}))}}function r(t){var e=this,a=(new Date,['<table cellpadding="0" cellspacing="0" border="0">',"</table>"]),s=t.getFullYear(),i=t.getMonth()+1;t.setDate(1);var l=t.getDay();t.setMonth(t.getMonth()+1),t.setDate(t.getDate()-1);var r=t.getDate(),n="";n+=a[0];for(var o=0,h=0;6>h;h++){n+="<tr>";for(var _=0;7>_;_++){var m=s+"-"+i+"-"+(o+1-l),f=d(e.stocks,m);if(-1!=f&&v?(n+="<td>",v=!1):n+="<td>",l>o||o>=r+l)n+="&nbsp;";else{var m=s+"-"+i+"-"+(o+1-l),f=d(e.stocks,m);if(-1!=f){var g=e.stocks[f];stockPrice=parseInt(g.price/12),n+=1==g.state||2==g.state?'<div class="someday disabled">'+(o+1-l)+'</div><div class="day_stock_out">已售罄</div>':'<div class="someday">'+(o+1-l)+'</div><div stock="'+g.stock+'" price="'+g.price+'" productid="'+g.id+'" downOddDiffCost="'+g.downOddDiffCost+'" downpayment="'+g.downPayment+'" id="'+g.stockid+'" travelledTime="'+g.travelledTime+'" class="day_stock">剩余'+g.stock+'</div><div class="day_price">&yen;'+g.downPayment+"</div>"}else n+='<div class="someday disabled">'+(o+1-l)+'</div><div class="day_stock">&nbsp;</div>'}n+="</td>",o++}n+="</tr>"}n+=a[1];var p=$("<div></div>");p.html(n);for(var u=p.find(".someday"),b=0,y=0,C=!1,h=0;h<c.length;h++)i==c[h].month&&u.each(function(t,e){var a=$(this),s=a.parent(),i=a.html();i==c[h].date&&(s.addClass("holidays"),a.removeClass("disabled"),a.addClass("small-font"),a.html(c[h].name),b=t,y=c[h].days,c[h].week&&(C=!0))});if(C)u.eq(b-1).parent().addClass("holidays");else for(var h=1;y>h;h++){var w=u.eq(h+b);w.parent().addClass("holidays")}return n=p.html()}function d(t,e){for(var a=0;a<t.length;a++){var s=t[a].travelledTime.split(" ")[0];if(s==e)return a}return-1}function n(){var t=this,e=document.querySelectorAll("#left_cal_btn,#right_cal_btn"),a=$(".right_cal_btn-active");t.view.$el.find(".day").length<=1&&a.removeClass("right_cal_btn-active");for(var s=0;s<e.length;s++)e[s].index=s,e[s].addEventListener("touchstart",function(){"td"==this.tagName.toLowerCase()&&"&nbsp;"==$(this).find(".day_stock").html()||"td"==this.tagName.toLowerCase()&&"&nbsp;"==$(this).html()||$(this).addClass("activeTd")},!1),e[s].addEventListener("touchend",function(){var t=this;timer=setTimeout(function(){clearTimeout(timer),$(t).removeClass("activeTd")},80)},!1);$(".cal_content td").click(function(){"td"==this.tagName.toLowerCase()&&"&nbsp;"==$(this).find(".day_stock").html()||"td"==this.tagName.toLowerCase()&&"&nbsp;"==$(this).html()||($(this).find(".day_stock")&&"0"==$(this).find(".day_stock").attr("stock")||"已售罄"==$(this).find(".day_stock_out").html()?t.view.showToast({text:"已售罄"}):($(".selected").removeClass("selected"),$(this).addClass("selected")))})}var c=[{name:"端午节",month:6,date:20,days:3},{name:"中秋节",month:9,date:27,days:2,week:!0},{name:"国庆节",month:10,date:1,days:7},{name:"元旦节",month:1,date:1,days:3},{name:"圣诞节",month:12,date:25,days:1}],o=function(t){var e={},a=[],s=[];if(!_.isArray(t))return!1;for(var i=0;i<t.length;i++){var l=t[i].travelledTime.split("-")[1],r=t[i].travelledTime.split("-")[0];e[r+" "+l]||(e[r+" "+l]=!0,s.push(t[i].travelledTime.split(" ")[0].replace(/-/g,",")),a.push(l))}return s};s&&(s.getUniqueDate=o);var v=!0,h=function(t){var e=this,a=t.stocks;e.peopleNumber=t.poepleNumber,e.stocks=a,e.mothsNumber=2,e.calendarSwiperNode=t.calendarSwiperNode,e.containerNode=t.containerNode,e.view=t.view,$.proxy(l,e)(),$.proxy(n,e)()};return h});