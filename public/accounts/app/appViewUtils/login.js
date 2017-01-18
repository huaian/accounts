/**
登录
*/
define([
  '../appRestStore/account',
  "appConfig/const",
  'cutil/c.util.common',
  'cutil/c.util.validate',
  //'dataHelper/login',
],
function (
  restStores,
  constData,
  utilCommon,
  validate
  //dataHelper
) {
  "use strict";
  var viewUtils = {
    //表单数据校验
    hasValidFormData:function(opts){
      var self = this;
      var opts = opts || {};
      var postData = JSON.parse(JSON.stringify(self.vm.$data.formData));
      self.memoryStore.setAttr('memory.formData',postData);
      if(!self.vm.$data.formData.loginId){
        self.showErrorTip({
          tipMessage:'请输入用户名'
        });
        return false;
      }else if(!self.vm.$data.formData.password){
        self.showErrorTip({
          tipMessage:'请输入密码'
        });
        return false;
      }else{
        return postData;
      }
    },

    //登录
    login:function(e){
      var self = this;
      var postData = null;
      if(e && $(e.target).hasClass('disabled')){
        return false;
      }else{
        if((postData = $.proxy(viewUtils.hasValidFormData,self)())){
          console.log(postData);
          restStores.login.add(_.extend(self.vm.$data.formData,{
            //URL:location.href
            url:Kai.getUrlWithoutHash()
          })).then(function(resp){
            if(self.isSucceedResponse(resp)){
              self.setUserStore(resp.body.userInfo);
              self.showToast({
                text:'登录成功',
                callback:function(){
                  self.forward('h5/view/mobile_index');
                }
              });
            }else{
              self.showResponseError(resp);
            }
        },function(resp){
          self.showResponseError(resp);
        });
      }
    }
  }
};
return viewUtils;
});
