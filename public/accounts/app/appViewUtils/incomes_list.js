/**
@description 记录 详情
*/
define([
  "appRestStore/incomes",
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
    deleteIncome:function(incomeId){
      var self = this;
      restStores.incomes.remove(incomeId).then(function(resp){
        self.showToast({
          text:'删除成功',
          callback:function(){
            self.reload();
          }
        });
      });
    },
  };
  return viewUtils;
});
