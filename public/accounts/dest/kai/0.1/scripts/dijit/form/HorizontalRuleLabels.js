define("dijit/form/HorizontalRuleLabels",["dojo/_base/declare","dojo/has","dojo/number","dojo/query","dojo/_base/lang","./HorizontalRule"],function(i,t,e,n,s,r){var o=i("dijit.form.HorizontalRuleLabels",r,{templateString:'<div class="dijitRuleContainer dijitRuleContainerH dijitRuleLabelsContainer dijitRuleLabelsContainerH"></div>',labelStyle:"",labels:[],numericMargin:0,minimum:0,maximum:1,constraints:{pattern:"#%"},_positionPrefix:'<div class="dijitRuleLabelContainer dijitRuleLabelContainerH" style="left:',_labelPrefix:'"><div class="dijitRuleLabel dijitRuleLabelH">',_suffix:"</div></div>",_calcPosition:function(i){return i},_genHTML:function(i,t){var e=this.labels[t];return this._positionPrefix+this._calcPosition(i)+this._positionSuffix+this.labelStyle+this._genDirectionHTML(e)+this._labelPrefix+e+this._suffix},_genDirectionHTML:function(i){return""},getLabels:function(){var i=this.labels;if(!i.length&&this.srcNodeRef&&(i=n("> li",this.srcNodeRef).map(function(i){return String(i.innerHTML)})),!i.length&&this.count>1)for(var t=this.minimum,s=(this.maximum-t)/(this.count-1),r=0;r<this.count;r++)i.push(r<this.numericMargin||r>=this.count-this.numericMargin?"":e.format(t,this.constraints)),t+=s;return i},postMixInProperties:function(){this.inherited(arguments),this.labels=this.getLabels(),this.count=this.labels.length}});return t("dojo-bidi")&&o.extend({_setTextDirAttr:function(i){this.textDir!=i&&(this._set("textDir",i),n(".dijitRuleLabelContainer",this.domNode).forEach(s.hitch(this,function(i){i.style.direction=this.getTextDir(i.innerText||i.textContent||"")})))},_genDirectionHTML:function(i){return this.textDir?"direction:"+this.getTextDir(i)+";":""}}),o});