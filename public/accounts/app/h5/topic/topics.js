define([
  "common/c.class.inherit",
  "topic/c.topic"
],
function ( cBase, _BaseTopic) {
  "use strict";
  var _topics = {};//collections of all models

  /*首页level的tab请求变化*/
  _topics.indexLevelTabChangeRequire = new cBase.Class(_BaseTopic, {
    __propertys__: function () {
      this.topicName = '/pc/view/index/require_tab_change';
    }
  });
  /*首页level的tab请求关闭*/
  /*自定义配置 End*/
  return _topics;
});
