/**
@description 记录 详情
*/
define([
  "appRestStore/statistics",
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
      if(!postData.startDate){
        self.showToast({
          text:'请选择开始日期'
        });
        return false;
      }
      return postData;
    },

    fetchData:function(opts){
      var self = this;
      var queryParams = _.isObject(opts)?opts:'';
      restStores['statistics'].get(queryParams).then(function(resp){
        if(self.isSucceedResponse(resp)){
          /*
          var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
          => 6
          */
          self.viewData.sumExpenses = _.reduce(_.pluck(resp.body.expenses,'total'),function(memo,num){
            return memo + num;
          },0);
          self.viewData.sumIncomes = _.reduce(_.pluck(resp.body.incomes,'total'),function(memo,num){
            return memo + num;
          },0);
          if(self.vm){
            self.vm.$set('sumExpenses',self.viewData.sumExpenses);
            self.vm.$set('sumIncomes',self.viewData.sumIncomes);
          }
        }else{
          self.showResponseError(resp);
        }
      },function(resp){
        self.showResponseError(resp);
      });
    },

    search:function(e){
      var self = this;
      var postData = null;
      if(e && $(e.target).hasClass('form-disabled')){
        return false;
      }else{
        if((postData = $.proxy(viewUtils.hasValidFormData,self)())){
          self.model.trigger('fetchData',postData);
        }
      }
    }
  };
  return viewUtils;
});
