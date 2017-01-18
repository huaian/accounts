/*
页面名称：重审申请
作者：chenxiangyun01@company.com
*/
define([
  //"dojo/on",
  //'appViewUtils/login',
  //'cutil/c.util.validate',
], function (
  //on,
  //viewUtils,
  //validate
) {
  "use strict";
  /*绑定函数*/
  var eventBinder = {
    /*订阅事件*/
    subscribeTopics: function () {
      var self = this;
    },

    /*绑定事件*/
    bindEvents: function () {
      var self = this;
      //输入框校验
      self.bind({
      });
    }
  };
  alert('events');
  return {
    eventBinder: eventBinder,
  };
});
