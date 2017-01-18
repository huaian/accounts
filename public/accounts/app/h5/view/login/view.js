/*登录*/
define([
  'page/viewFactory',
  'appViewUtils/login',
  './events/events',
  //'dataHelper/login',//TBD
  'cutil/c.util.validate',
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
    //是否显示title
    showHeader:true,

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

    getVueData:function(){
      var self = this;
      return {
        formData: self.memoryStore.getAttr('memory.formData') || {},//表单数据
        baseUrl:appPrefx
      }
    },

    getVueMethods:function(){
      var self = this;
      return {
        goRegister:function(){
          //self.model.trigger('goRegister');
          self.goRegister();
        },
        setCellphoneNumberInputClicked:function(){
          this.cellphoneNumberInputClicked = true;
        },
        isValidCellphoneNumber:function(cellphoneNumber){
          return validate.isMobile(cellphoneNumber);
        },
        isValidUserName:function(){

        },
        isValidPassword:function(){
          
        }
      }
    }
  });
  return View;
});
