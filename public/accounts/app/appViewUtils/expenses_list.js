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
    deleteExpense:function(expenseId){
      var self = this;
      restStores.expenses.remove(expenseId).then(function(resp){
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
