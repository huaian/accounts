/**
@description 记录 详情
*/
define([
  "appRestStore/expenses",
  "dojo/_base/lang",
  'cutil/c.util.common',
  'cutil/c.util.validate',
],
function (
  restStores,
  lang,
  utilCommon,
  validate
) {
  "use strict";
  var viewUtils = {
    hasValidFormData:function(opts){
      var self = this;
      var opts = opts || {};
      var postData = JSON.parse(JSON.stringify(self.vm.$data.formData));
      self.memoryStore.setAttr('memory.formData',postData);
      if(!postData.type){
        self.showToast({
          text:'请选择来源'
        });
        return false;
      }
      if((postData.date === '1')){//有效联络 但是没有还款时间提供
        self.showToast({
          text:'请选择日期'
        });
        return false;
      }
      if(!_.isNumber(parseFloat(postData.amount))){
        self.showToast({
          text:'请输入金额'
        });
        return false;
      }
      return postData;
    },

    save:function(e){
      var self = this;
      var postData = null;
      if(e && $(e.target).hasClass('form-disabled')){
        return false;
      }else{
        if((postData = $.proxy(viewUtils.hasValidFormData,self)())){
          console.log(postData);
          restStores.expenses.add(_.extend(postData,{
            id:self.getQueryObj().expenseid//更新操作
          }),{
            forcePost:false
          }).then(function(resp){//返回数据
            if(self.isSucceedResponse(resp) && lang.exists('body.content'),resp){
              self.showToast({
                text:'保存成功',
                callback:function(){
                  self.model.trigger('goBack');
                }
              });
            }else{
              self.showResponseError(resp);
            }
          },function(){
            self.showResponseError(resp);
          });
        }
      }
    }
  };
  return viewUtils;
});
