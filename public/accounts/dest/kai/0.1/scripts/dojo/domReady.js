define("dojo/domReady",["./has"],function(t){function e(t){f.push(t),d&&n()}function n(){if(!a){for(a=!0;f.length;)try{f.shift()(r)}catch(t){}a=!1,e._onQEmpty()}}var a,o=function(){return this}(),r=document,i={loaded:1,complete:1},c="string"!=typeof r.readyState,d=!!i[r.readyState],f=[];if(e.load=function(t,n,a){e(a)},e._Q=f,e._onQEmpty=function(){},c&&(r.readyState="loading"),!d){var u=[],l=function(t){t=t||o.event,d||"readystatechange"==t.type&&!i[r.readyState]||(c&&(r.readyState="complete"),d=1,n())},h=function(t,e){t.addEventListener(e,l,!1),f.push(function(){t.removeEventListener(e,l,!1)})};if(!t("dom-addeventlistener")){h=function(t,e){e="on"+e,t.attachEvent(e,l),f.push(function(){t.detachEvent(e,l)})};var y=r.createElement("div");try{y.doScroll&&null===o.frameElement&&u.push(function(){try{return y.doScroll("left"),1}catch(t){}})}catch(s){}}if(h(r,"DOMContentLoaded"),h(o,"load"),"onreadystatechange"in r?h(r,"readystatechange"):c||u.push(function(){return i[r.readyState]}),u.length){var v=function(){if(!d){for(var t=u.length;t--;)if(u[t]())return void l("poller");setTimeout(v,30)}};v()}}return e});