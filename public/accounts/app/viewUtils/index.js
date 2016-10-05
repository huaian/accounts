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

    /**
    @description 拨打电话
    */
    dial:function(phoneNumber,customerInfo){
      var self = this;
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

    //从任务列表中读取某条任务的值
    getInfoByAccountId:function(attr){
      var self = this;
      if(!_.isString(attr)){
        /*
        throw Error({
          message:'缺少属性名'
        });
        */
      }
      var idNum = self.getQueryObj().idnum;//账户号
      var custId = self.getQueryObj().custid;//账户号
      var taskList = self.getParentStore().getAttr('taskList');//  var queryObj = self.getQueryObj();
      /*
      var taskItem = (_.findWhere(taskList,{
        idNum:idNum
      })) || {};
      */
      //alert(JSON.stringify(taskList));
      var taskItems = _.filter(taskList,function(taskItem){
        return (taskItem.idNum == idNum) || (taskItem.custInfo.id == custId);
      });
      //alert(JSON.stringify(taskItems));
      var taskItem = taskItems[0] || {};
      if(_.isString(attr)){
        return taskItem[attr]
      }else{
        return taskItem;
      }
    },

    //更新任务列表
    updateTaskList:function(collectionid,customerObj){
      var self = this;
      var taskList = self.parentStore.getAttr('taskList');//  var queryObj = self.getQueryObj();
      taskList = _.reject(taskList,function(taskItem){
          return taskItem.custInfo.idNum = customerObj.custInfo.idNum;
      });
      customerObj.idNum = customerObj.custInfo.idNum;
      taskList.push(customerObj);
      self.parentStore.setAttr('taskList',taskList);
    }
  };

  return viewUtils;
});
