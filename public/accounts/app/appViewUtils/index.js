/**
@description 被所有页面继承的工具方法
*/
define([
],
function (
) {
  "use strict";
  var viewUtils = {
    //回退到上一页
    goBack:function(){
      var self = this;
      self.back();//返回上一级页面
    },
    //注册
    goRegister:function(){
      var self = this;
      self.forward('h5/view/register');
    },

    //显示系统提示
    /*{
    title,message,source
  }
  */
    showSystemAlert:function(opts){
      var self = this;
      var opts = opts || {};
      Kai.showAlert('<div class="weui_cells notification">' +
      '<p class="noti_title">'+ (opts.title || '')+'</p><p class="main_text"</p>'+
      (opts.message||'') +
      '<p class="noti_name">---'+
      (opts.source || '')+
      '</p></div>');
    },
  };

  return viewUtils;
});
