
/*
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);
*/
/**
@description 详情
*/
define([
   "dojo/date/locale",
  'appViewUtils/index',
  'appRestStore/expenses',
  'appRestStore/dict',
  'page/viewFactory',
  'appViewUtils/expenses',
  './events/events',
  'cutil/c.util.validate',
],
function (
  locale,
  indexViewUtils,
  expensesRestStores,
  dictRestStores,
  CommonPageFactory,
  viewUtils,
  Events,
  validate
) {

  "use strict";
  var baseview = CommonPageFactory.create('appBaseView');
  var View = baseview.extend({

    /*可以冒泡的事件可以绑定在这里 delegate*/
    events: {
      'click .mobile_back': _.debounce(viewUtils.goBack,250,true,function(){})
    },

    onCreate: function () {//初次加载时候使用
      var self = this;
    },

    els:{
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
      /**
      */
      var expenseId = self.getQueryObj().expenseid;//记录id
      self.viewData.dictData = self.viewData.dictData || {
      };
      self.viewData.formData = self.viewData.formData || {
        date:'',
        type:'',
        amount:'',
        remark:''
      };
      //字典数据
      _.each(['dict_expense_types'],function(code){
        self.viewData.dictData[code] = [];
        dictRestStores.storeFactory.createDictStore(code).get('').then(function(dictList){
            self.viewData.dictData[code] = dictList;
        },function(resp){
          //deal by dict factory
          console.log(resp);
        }).always(function(resp){
          console.log(resp);
        });
      });
      if(_.isString(expenseId)){
        expensesRestStores.expenses.get(expenseId).then(function(resp){
          self.viewData.formData = resp.body;
          self.viewData.formData.date = locale.format(new Date(self.viewData.formData.date), {
            datePattern: "yyyy-MM-dd",
            selector: 'date'
          });
          if(self.vm){
            self.vm.$set('formData',self.viewData.formData);
          }
        });
      }
      self.turnOn();
    },

    /*prepare events*/
    prepareEvents: function () {
        var self = this;
        self.event = Events;
    },

    prepareViewUtils:function(){
      var self = this;
      self.viewUtils = _.extend({},indexViewUtils,viewUtils);
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
          formData:self.viewData.formData || {} || self.memoryStore.getAttr('memory.formData'),//表单数据
          dictData:self.viewData.dictData,//异步设置数据字典
          contactInfos:self.viewData.contactInfos,
        },
        methods: {
          setCellphoneNumberInputClicked:function(){
            this.cellphoneNumberInputClicked = true;
          },
          isValidCellphoneNumber:function(cellphoneNumber){
            return validate.isMobile(cellphoneNumber);
          },
          save:function(e){
            self.model.trigger('save',e);
          }
        },
        computed:{
          delayInfos:function(){//逾期信息
            return self.viewData.delayInfos;
          },
          idNum:function(){//身份证号码
          },
          collectionId:function(){
            return (self.getQueryObj() || {}).collectionid;
          },
          contactNames:function(){//联系人姓名
            return _.pluck(this.contactInfos,'contactName') || [];
          },
          contactPhones:function(){//联系电话
            var contactInfo = _.findWhere(this.contactInfos,{contactName:this.formData.contactName});
            return _.compact([contactInfo.contactMobile,contactInfo.contactPhone]) || [];
          },
        }
      };
    },
    /*
    onVisible:function(){
    }
    */
  });
  return View;
});
