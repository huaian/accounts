define("plugin/custom/certificate",["UIView","text!TemplateCertificate"],function(t,e){return _.inherit(t,{propertys:function($super){var t=this;$super(),this.template=e,this.datamodel={scope:this,def_data:t.def_data},this.events={"click .cui_calendar_item ":"itemAction"},this.onItemClick=function(t,e,i){}},itemAction:function(t){var e=$(t.currentTarget),i={credentialtype:e.attr("data-credentialtype"),credential:e.attr("data-credential")};this.onItemClick&&this.onItemClick.call(this,i,e,t)},initialize:function($super,t){this.def_data=t.def_data,$super(t)}})});