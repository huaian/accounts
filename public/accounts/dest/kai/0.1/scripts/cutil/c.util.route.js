define("cutil/c.util.route",["underscore"],function(){var e={parse:function(e){for(var i={},t=0;t<e.length;t++){var r=e[t],n=r.parent,o=_.findWhere(e,{id:n});"object"==typeof r&&(""===r.parent?r.postfix=r.viewName:""==r.viewName||(r.needPostfix||r.indexLevel?r.postfix=r.id:r.postfix=o.postfix),i[r.id]=r.id||r.routeName)}return i}};return e});