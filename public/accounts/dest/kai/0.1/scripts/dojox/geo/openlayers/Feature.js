define("dojox/geo/openlayers/Feature",["dojo/_base/kernel","dojo/_base/declare","./_base"],function(e,t,o){return t("dojox.geo.openlayers.Feature",null,{constructor:function(){this._layer=null,this._coordSys=o.EPSG4326},getCoordinateSystem:function(){return this._coordSys},setCoordinateSystem:function(e){this._coordSys=e},getLayer:function(){return this._layer},_setLayer:function(e){this._layer=e},render:function(){},remove:function(){},_getLocalXY:function(e){var t=e.x,o=e.y,n=this.getLayer(),r=n.olLayer.map.getResolution(),a=n.olLayer.getExtent(),s=t/r+-a.left/r,i=a.top/r-o/r;return[s,i]}})});