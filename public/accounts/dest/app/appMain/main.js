define([],function(){var a="";require({packages:[{name:"kaiMain",location:kaiPrefx+"./kai/0.1/scripts/kaiMain"},{name:"dojo",location:kaiPrefx+"./kai/0.1/scripts/dojo",main:"main",lib:"."},{name:"appConfig",location:a+"./app/config",main:"main"},{name:"appRestStore",location:a+"./app/appRestStore"},{name:"dataHelper",location:a+"./app/dataHelper"},{name:"viewUtils",location:a+"./app/viewUtils"},{name:"pc",location:a+"./app/pc"},{name:"h5",location:a+"./app/h5"},{name:"appMain",location:"./"}]}),require(["appConfig/views","appConfig/project","appConfig/interface","appConfig/pageConfig"],function(a,e,i,n){require(["kaiMain/main"],function(o){o.then(function(o){require(["dojo/has!isH5?appRestStore/location:appRestStore/location","dojo/has!isH5?h5/page/appBaseViewExtension:pc/page/appBaseViewExtension","dojo/has!isH5?css!h5/res/style/h5:css!pc/res/style/pc","plugin/vendor/bee/bee-1.0.0"],function(p,t){require({config:{"custom/dijit/RestLocationSelector":{restStores:p}}});var c=_.extend({viewCollectionData:a,projectConfig:e,interfaceConfig:i,pageConfig:n},{viewExtension:t});o.start(c)})})})})});