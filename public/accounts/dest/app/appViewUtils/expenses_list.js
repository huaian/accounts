define(["appRestStore/expenses","dojo/_base/lang","cutil/c.util.common","cutil/c.util.validate"],function(e,t,n,o){"use strict";var c={deleteExpense:function(t){var n=this;e.expenses.remove(t).then(function(e){n.showToast({text:"删除成功",callback:function(){n.reload()}})})}};return c});