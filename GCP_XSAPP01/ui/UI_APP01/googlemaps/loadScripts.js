sap.ui.define(["jquery.sap.global"],function(i){"use strict";var o=function(){var o={};return o.notifyEvent="google.maps.loaded",o.isLoaded=new Promise(function(i){o.callBack=function(){this.loaded=!0,sap.ui.getCore().getEventBus().publish(this.notifyEvent),i()}}),o.loadFromMapsApi=function(o){return void 0!==this.loaded?(i.sap.log.warning("Can't load the Google Api scripts twice"),void 0):(this.loaded=!1,i.sap.includeScript(o.getLibraryURL(),"google.maps",null,null),void 0)},o}();return o},!0);