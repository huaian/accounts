/*登录*/
define([
  'page/viewFactory',
  'appViewUtils/index',
  './events/events',
  //'dataHelper/login',//TBD
  'cutil/c.util.validate',
  'css!./res/style/h5.css',

],
function (
  CommonPageFactory,
  viewUtils,
  Events,
  //dataHelper,//TBD
  validate
) {

  "use strict";
  var baseview = CommonPageFactory.create('appBaseView');
  var View = baseview.extend({

    /*可以冒泡的事件可以绑定在这里 delegate*/
    events: {
      //'click .js_button_sendVerifyCode': _.debounce(viewUtils.sendVerifyCode,250,true,function(){}),
      'click .js_button_login': _.debounce(viewUtils.login,250,true,function(){})
    },

    onCreate: function () {//初次加载时候使用
      var self = this;
    },

    els:{
      'sendVerifyCodeButton':{//发送验证码按钮
        selector:'.js_button_sendVerifyCode',
        type:'jquery'
      },
      'cellphoneErrorIconNode':{//发送验证码按钮
        selector:'.js_cellphone_container .weui_icon_warn',
        type:'jquery'
      },
      'cellphoneSuccessIconNode':{//发送验证码按钮
        selector:'.js_cellphone_container .weui_icon_success_no_circle',
        type:'jquery'
      },
      'loginButton':{
        selector:'.js_button_login',
        type:'jquery'
      }
    },

    onShow: function () {//在再显示时候调用 在 create之后调用
      var self = this;
    },

    onHide: function () {//view is hidden
      var self = this;
    },

    init: function () {
      var self = this;
    },

    prepareViewData: function () {
      var self = this;
      self.viewData.taskList = [{
        customerName:'陈祥云',
        delayDays:'4',
        delayAmount:50000,
        id:'00000000'
      },
      {
        customerName:'陈祥云',
        delayDays:'4',
        delayAmount:40000,
        id:'00000001'
      },
      {
        customerName:'陈祥云',
        delayDays:'4',
        delayAmount:30000,
        id:'00000002'
      }
    ];
      self.turnOn();
    },

    /*prepare events*/
    prepareEvents: function () {
        var self = this;
        self.event = Events;
    },

    prepareViewUtils:function(){
      var self = this;
      self.viewUtils = viewUtils;
    },

    prepareDataHelper:function(){
      var self = this;
      //self.dataHelper = dataHelper;//TBD
    },

    afterShow:function(){
      var self = this;
      self.hideLoading();
    },

    getVueInitParams:function(){
      var self = this;
      return {
        data: {
          formData: self.memoryStore.getAttr('memory.formData') || {},//表单数据
          taskList:self.viewData.taskList
        },
        methods: {
          gotoCustomerDetail:function(accountId,event){
            self.model.trigger('gotoCustomerDetail',accountId);//前往客户详情页面
          },
          greet: function (event) {
            // `this` inside methods point to the Vue instance
            alert('Hello ' + this.name + '!')
            // `event` is the native DOM event
            alert(event.target.tagName)
          }
        }
      };
    },
    parseTempate:function(){//提前重新处理模版
      var self = this;
      var templateFn = _.template(
        "<%_.each(childViewItems,function(viewItem){%>" +
        "<h2><%=viewItem.viewTitle%></h2>"+
        "<div data-viewname='<%=viewItem.id%>'>" +
        "<a data-dojo-type='dijit/layout/LinkPane' id='<%=viewItem.id%>'>"+
        "</a>" +
        "</div>" +
        "<%});%>"
      );
      var appendedNodes = templateFn({
        childViewItems:self.childViewItems
      });//TBD
      //self.$el.find('.viewContainer').append(appendedNodes);//update template to a destination one
      self.$el.append(appendedNodes);//update template to a destination one
    },
  });
  return View;
});
