require({cache:{"url:dijit/form/templates/VerticalSlider.html":'<table class="dijit dijitReset dijitSlider dijitSliderV" cellspacing="0" cellpadding="0" border="0" rules="none" data-dojo-attach-event="onkeydown:_onKeyDown,onkeyup:_onKeyUp"\n	role="presentation"\n	><tr class="dijitReset"\n		><td class="dijitReset"></td\n		><td class="dijitReset dijitSliderButtonContainer dijitSliderButtonContainerV"\n			><div class="dijitSliderIncrementIconV" style="display:none" data-dojo-attach-point="decrementButton"><span class="dijitSliderButtonInner">+</span></div\n		></td\n		><td class="dijitReset"></td\n	></tr\n	><tr class="dijitReset"\n		><td class="dijitReset"></td\n		><td class="dijitReset"\n			><center><div class="dijitSliderBar dijitSliderBumper dijitSliderBumperV dijitSliderTopBumper" data-dojo-attach-event="press:_onClkIncBumper"></div></center\n		></td\n		><td class="dijitReset"></td\n	></tr\n	><tr class="dijitReset"\n		><td data-dojo-attach-point="leftDecoration" class="dijitReset dijitSliderDecoration dijitSliderDecorationL dijitSliderDecorationV"></td\n		><td class="dijitReset dijitSliderDecorationC" style="height:100%;"\n			><input data-dojo-attach-point="valueNode" type="hidden" ${!nameAttrSetting}\n			/><center class="dijitReset dijitSliderBarContainerV" role="presentation" data-dojo-attach-point="sliderBarContainer"\n				><div role="presentation" data-dojo-attach-point="remainingBar" class="dijitSliderBar dijitSliderBarV dijitSliderRemainingBar dijitSliderRemainingBarV" data-dojo-attach-event="press:_onBarClick"><!--#5629--></div\n				><div role="presentation" data-dojo-attach-point="progressBar" class="dijitSliderBar dijitSliderBarV dijitSliderProgressBar dijitSliderProgressBarV" data-dojo-attach-event="press:_onBarClick"\n					><div class="dijitSliderMoveable dijitSliderMoveableV" style="vertical-align:top;"\n						><div data-dojo-attach-point="sliderHandle,focusNode" class="dijitSliderImageHandle dijitSliderImageHandleV" data-dojo-attach-event="press:_onHandleClick" role="slider"></div\n					></div\n				></div\n			></center\n		></td\n		><td data-dojo-attach-point="containerNode,rightDecoration" class="dijitReset dijitSliderDecoration dijitSliderDecorationR dijitSliderDecorationV"></td\n	></tr\n	><tr class="dijitReset"\n		><td class="dijitReset"></td\n		><td class="dijitReset"\n			><center><div class="dijitSliderBar dijitSliderBumper dijitSliderBumperV dijitSliderBottomBumper" data-dojo-attach-event="press:_onClkDecBumper"></div></center\n		></td\n		><td class="dijitReset"></td\n	></tr\n	><tr class="dijitReset"\n		><td class="dijitReset"></td\n		><td class="dijitReset dijitSliderButtonContainer dijitSliderButtonContainerV"\n			><div class="dijitSliderDecrementIconV" style="display:none" data-dojo-attach-point="incrementButton"><span class="dijitSliderButtonInner">-</span></div\n		></td\n		><td class="dijitReset"></td\n	></tr\n></table>\n'}}),define("dijit/form/VerticalSlider",["dojo/_base/declare","./HorizontalSlider","dojo/text!./templates/VerticalSlider.html"],function(t,i,e){return t("dijit.form.VerticalSlider",i,{templateString:e,_mousePixelCoord:"pageY",_pixelCount:"h",_startingPixelCoord:"y",_handleOffsetCoord:"top",_progressPixelSize:"height",_descending:!0,_isReversed:function(){return this._descending}})});