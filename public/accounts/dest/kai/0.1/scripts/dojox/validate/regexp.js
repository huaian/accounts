define("dojox/validate/regexp",["dojo/_base/lang","dojo/regexp","dojox/main"],function(o,l,e){var a=o.getObject("validate.regexp",!0,e);return a=e.validate.regexp={ipAddress:function(o){o="object"==typeof o?o:{},"boolean"!=typeof o.allowDottedDecimal&&(o.allowDottedDecimal=!0),"boolean"!=typeof o.allowDottedHex&&(o.allowDottedHex=!0),"boolean"!=typeof o.allowDottedOctal&&(o.allowDottedOctal=!0),"boolean"!=typeof o.allowDecimal&&(o.allowDecimal=!0),"boolean"!=typeof o.allowHex&&(o.allowHex=!0),"boolean"!=typeof o.allowIPv6&&(o.allowIPv6=!0),"boolean"!=typeof o.allowHybrid&&(o.allowHybrid=!0);var l="((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])",e="(0[xX]0*[\\da-fA-F]?[\\da-fA-F]\\.){3}0[xX]0*[\\da-fA-F]?[\\da-fA-F]",a="(0+[0-3][0-7][0-7]\\.){3}0+[0-3][0-7][0-7]",t="(0|[1-9]\\d{0,8}|[1-3]\\d{9}|4[01]\\d{8}|42[0-8]\\d{7}|429[0-3]\\d{6}|4294[0-8]\\d{5}|42949[0-5]\\d{4}|429496[0-6]\\d{3}|4294967[01]\\d{2}|42949672[0-8]\\d|429496729[0-5])",r="0[xX]0*[\\da-fA-F]{1,8}",d="([\\da-fA-F]{1,4}\\:){7}[\\da-fA-F]{1,4}",n="([\\da-fA-F]{1,4}\\:){6}((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])",i=[];o.allowDottedDecimal&&i.push(l),o.allowDottedHex&&i.push(e),o.allowDottedOctal&&i.push(a),o.allowDecimal&&i.push(t),o.allowHex&&i.push(r),o.allowIPv6&&i.push(d),o.allowHybrid&&i.push(n);var f="";return i.length>0&&(f="("+i.join("|")+")"),f},host:function(o){o="object"==typeof o?o:{},"boolean"!=typeof o.allowIP&&(o.allowIP=!0),"boolean"!=typeof o.allowLocal&&(o.allowLocal=!1),"boolean"!=typeof o.allowPort&&(o.allowPort=!0),"boolean"!=typeof o.allowNamed&&(o.allowNamed=!1);var l="(?:[\\da-zA-Z](?:[-\\da-zA-Z]{0,61}[\\da-zA-Z])?)",e="(?:[a-zA-Z](?:[-\\da-zA-Z]{0,6}[\\da-zA-Z])?)",t=o.allowPort?"(\\:\\d+)?":"",r="((?:"+l+"\\.)+"+e+"\\.?)";return o.allowIP&&(r+="|"+a.ipAddress(o)),o.allowLocal&&(r+="|localhost"),o.allowNamed&&(r+="|^[^-][a-zA-Z0-9_-]*"),"("+r+")"+t},url:function(o){o="object"==typeof o?o:{},"scheme"in o||(o.scheme=[!0,!1]);var e=l.buildGroupRE(o.scheme,function(o){return o?"(https?|ftps?)\\://":""}),t="(/(?:[^?#\\s/]+/)*(?:[^?#\\s/]+(?:\\?[^?#\\s/]*)?(?:#[A-Za-z][\\w.:-]*)?)?)?";return e+a.host(o)+t},emailAddress:function(o){o="object"==typeof o?o:{},"boolean"!=typeof o.allowCruft&&(o.allowCruft=!1),o.allowPort=!1;var l="([!#-'*+\\-\\/-9=?A-Z^-~]+[.])*[!#-'*+\\-\\/-9=?A-Z^-~]+",e=l+"@"+a.host(o);return o.allowCruft&&(e="<?(mailto\\:)?"+e+">?"),e},emailAddressList:function(o){o="object"==typeof o?o:{},"string"!=typeof o.listSeparator&&(o.listSeparator="\\s;,");var l=a.emailAddress(o),e="("+l+"\\s*["+o.listSeparator+"]\\s*)*"+l+"\\s*["+o.listSeparator+"]?\\s*";return e},numberFormat:function(o){o="object"==typeof o?o:{},"undefined"==typeof o.format&&(o.format="###-###-####");var e=function(o){return l.escapeString(o,"?").replace(/\?/g,"\\d?").replace(/#/g,"\\d")};return l.buildGroupRE(o.format,e)},ca:{postalCode:function(){return"([A-Z][0-9][A-Z] [0-9][A-Z][0-9])"},province:function(){return"(AB|BC|MB|NB|NL|NS|NT|NU|ON|PE|QC|SK|YT)"}},us:{state:function(o){o="object"==typeof o?o:{},"boolean"!=typeof o.allowTerritories&&(o.allowTerritories=!0),"boolean"!=typeof o.allowMilitary&&(o.allowMilitary=!0);var l="AL|AK|AZ|AR|CA|CO|CT|DE|DC|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY",e="AS|FM|GU|MH|MP|PW|PR|VI",a="AA|AE|AP";return o.allowTerritories&&(l+="|"+e),o.allowMilitary&&(l+="|"+a),"("+l+")"}}}});