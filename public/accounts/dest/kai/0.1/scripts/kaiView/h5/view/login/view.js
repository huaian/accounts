require({cache:{"url:kaiView/h5/view/login/template/template.html":'<!--登录-->\n<script type="text/template" style="display: none;" class=\'kai_widget\' data-avoidreparse=\'true\'>\n<div>\n  <div class="hd" style="text-align:center;">\n    <img class=\'logoImg\' v-bind:src="logoImgUrl" title="中腾信金融" alt="中腾信金融">\n    <h2 class="align-center">{{title}}</h2><!-- align-cente-->\n  </div>\n  <div class="weui_cells weui_cells weui_cells_form ">\n    <div class="weui_cell js_cellphone_container">\n      <div class="weui_cell_hd"><label class="weui_label">用户名:</label></div>\n      <div class="weui_cell_bd weui_cell_primary">\n        <input class="weui_input js_input_username" type="" pattern="" maxlength="{{nameMaxLength}}" placeholder="请输入用户名" v-model="formData.<%=idNameAttribute%>" v-on:click="setUsernameInputClicked">\n      </div>\n      <div class="weui_cell_ft">\n        <i class="weui_icon_warn" v-show=\'!isValidUserName(formData.loginId)\'></i>\n        <i class="weui_icon_success_no_circle" v-show=\'isValidUserName(formData.<%=idNameAttribute%>)\'></i>\n      </div>\n    </div>\n    <div class="weui_cell js_cellphone_container"><!---->\n      <div class="weui_cell_hd"><label class="weui_label">密码:</label></div>\n      <div class="weui_cell_bd weui_cell_primary">\n        <input class="weui_input js_input_password" type="password" pattern="" maxlength="20" placeholder="请输入密码" v-model="formData.<%=passwordNameAttribute%>" v-on:click="setPasswordInputClicked">\n      </div>\n      <div class="weui_cell_ft">\n        <i class="weui_icon_warn" v-show=\'!isValidPassword(formData.password)\'></i>\n        <i class="weui_icon_success_no_circle" v-show=\'isValidPassword(formData.password)\'></i>\n      </div>\n    </div>\n\n    <div class="weui_cell  weui_cell_select" v-show="needSupermarket"><!---->\n      <div class="weui_cell_hd"><label class="weui_label">驻点商超:</label></div>\n      <div class="weui_cell_bd weui_cell_primary">\n        <select  class="weui_select js_select_store {{formData.storeCode?\'\':\'kui_placeholder_sim font-small\'}}" name="storeCode" v-model="formData.<%=storeNameAttribute%>">\n          <option :selected="!formData.storeCode" value=\'\'>请选择驻点商超</option>\n          <option v-for="item in dictData[\'STORE\']" value="{{item.id}}">\n            {{item.name}}</option>\n        </select>\n      </div>\n      <div class="weui_cell_ft">\n        <i class="weui_icon_warn" v-show=\'!formData.storeCode\'></i>\n        <i class="weui_icon_success_no_circle" v-show=\'formData.storeCode\'></i>\n      </div>\n    </div>\n\n    <div class="weui_cell weui_vcode weui_cell_warn">\n        <div class="weui_cell_bd weui_cell_primary">\n            <input class="weui_input" type="text" placeholder="请输入验证码" maxlength="10"  v-model="formData.<%=captchaNameAttribute%>" >\n        </div>\n        <div class="weui_btn_area">\n          <a class="weui_btn weui_btn_primary js-button-send_verifyCode" href="javascript:">发送验证码</a>\n        </div>\n    </div>\n  </div>\n  <div class="weui_btn_area" style="margin-top:2em;">\n    <a class="weui_btn weui_btn_primary js_button_login" href="javascript:">登录</a>\n  </div>\n</div>\n</script>\n'}}),define("kaiView/h5/view/login/view",["data/restStore/factory","../../page/appBaseViewExtension","../../../viewUtils/index","page/viewFactory","./viewUtils/login","./events/events","cutil/c.util.validate","dojo/text!./template/template.html"],function(e,i,t,a,n,s,l){"use strict";var o=a.create("kaiBaseView",i),r=o.extend({events:{"click .js-button-send_verifyCode":_.debounce(n.sendVerifyCode,250,!0,function(){}),"click .js_button_login":_.debounce(n.login,250,!0,function(){})},onCreate:function(){},els:{sendVerifyCodeButton:{selector:".js-button-send_verifyCode",type:"jquery"},cellphoneErrorIconNode:{selector:".js_cellphone_container .weui_icon_warn",type:"jquery"},cellphoneSuccessIconNode:{selector:".js_cellphone_container .weui_icon_success_no_circle",type:"jquery"},loginButton:{selector:".js_button_login",type:"jquery"},js_select_store:{selector:".js_select_store",type:"jquery"}},onShow:function(){},onHide:function(){},init:function(){},prepareViewData:function(){var i=this;if(i.needSupermarket){i.viewData.dictData=i.viewData.dictData||{};var t={id:i.supermarketCode},a=[t];_.each(a,function(t){i.viewData.dictData[t.id]=[],e.createDictStore(t.id).get("").then(function(e){i.viewData.dictData[t.id]=e})})}i.viewData.idNameAttribute=i.idNameAttribute||"loginId",i.viewData.passwordNameAttribute=i.passwordNameAttribute||"password",i.viewData.captchaNameAttribute=i.captchaNameAttribute||"captcha",i.viewData.storeNameAttribute=i.storeNameAttribute||"storeCode",i.turnOn()},prepareEvents:function(){var e=this;e.event=s},prepareViewUtils:function(){var e=this;e.viewUtils=n},afterShow:function(){var e=this;e.hideLoading()},getVueData:function(){var e=this;return{formData:e.memoryStore.getAttr("memory.formData")||{},logoImgUrl:_.isFunction(e.getLogoImgUrl)?e.getLogoImgUrl():dojoConfig.baseUrl+kaiPrefx+"/./kai/0.1/scripts/kaiView/h5/view/login/res/img/logo.png",baseUrl:appPrefx,title:e.title,needSupermarket:e.needSupermarket,dictData:e.viewData.dictData,nameMaxLength:e.nameMaxLength||"11"}},getVueMethods:function(){return{setCellphoneNumberInputClicked:function(){this.cellphoneNumberInputClicked=!0},isValidCellphoneNumber:function(e){return l.isMobile(e)},isValidUserName:function(e){return!!e},isValidPassword:function(e){return!!e},setUsernameInputClicked:function(){},setPasswordInputClicked:function(){}}}});return r});