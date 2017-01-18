/**
base view for h5
*/
define([
  'kaiView/viewUtils/index',
  'appViewUtils/index',
  "page/c.page.view",
  "data/store/c.common.store",
  "cutil/c.util.common"
],
function(
  kaiViewIndexViewUtils,
  indexViewUtils,
  PageView,
  CommonStore,
  utilCommon
){

  "use strict";
  var  extension = {
  };
  //alert('生成page extension ');
  //extension for base view --begin
  extension = {
    'super': PageView.prototype,
    /**
    *  重写 initialize，初始化view
    *  @name BaseView#initialize
    */
    'initialize': function() {
      var superclass = this['super'].initialize.apply(this, arguments);
      //处理自己的事情
      return superclass;
    },
    /**
    *  重写capgeview show
    *  @name BaseView#show
    */
    show: function() {
      //console.log(this.referrer);
      var superclass = this['super'].show.apply(this, arguments);
      //初始化路由
      //zxRoute.initHandle(this, this.viewname);
      return superclass;
    },
  };//extension end

  _.extend(extension,kaiViewIndexViewUtils,indexViewUtils,
    {
      /**

      */
      login:function(){
        var self = this;
        self.showLoginDialog();
      },
      /*弹出登录框*/
      showLoginDialog:function(){
        var self = this;
        if(!self.loginDialogInstance){
          self.loginDialogInstance = new loginDialog({
            view:self
          });
        }
        self.loginDialogInstance.startup();
        self.loginDialogInstance.show();
        Kai.hideLoading();
      },

      /*注销*/
      logout:function(){
        var self = this;
        var _logoutComm = Models.logout.getInstance();//
        self.showLoading();
        var onSuccess = function(res){
          self.hideLoading();
          if(self.isSucceedResponse(res)){
            self.showToast({
              text:'注销成功',
              callback:function(){
                UserStore.remove();
                _.isObject(localStorage) && localStorage.clear();
                self.forward(Kai.loginUrl,{
                  keepURL:true
                });
              }
            });
          }else{
            self.showResponseError(res);
          }
        };
        var onError = function(res){
          self.hideLoading();
          self.showResponseError(res);
        };
        var getParams = function(){
        };
        var postParams = getParams();
        _logoutComm.execute(onSuccess,onError,true,self);
      },

      prepareDebugData:function(){
        var self = this;
        var queryObj = self.getQueryObj();
        if(queryObj.applycode){
          self.applyCode = queryObj.applycode;/*如果页面中存在applycode将优先被使用*/
        }
      },

      setUbtData:function(state){
        var self = this;
        self.ubtData = {
          current:state || "*",
          applyCode:self.model.get('applyCode') || "*",
        };
      },

      /*
      获得员工号
      */
      getStaffNumber:function(){
        var self = this;
        var UserStore = CommonStore.UserStore.getInstance();
        var headStore = CommonStore.HeadStore.getInstance();
        return (UserStore.get() || {}).user.username;
      },

      getStaffRole:function(){
        var self = this;
      }
    }
  );
  return extension;
});
