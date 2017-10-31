sap.ui.define([	
"sap/ui/core/mvc/Controller",
"sap/ui/model/json/JSONModel",
"sap/ui/model/Filter",
"sap/ui/model/FilterOperator"
],function(Controller,JSONModel,Filter,FilterOperator){
	"use strict" ;
	return Controller.extend("com.accenture.googlemap.view.Master",{
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Master
*/
	onInit: function() {
		this.getView().byId("map_canvas").addStyleClass("myMap");
	},
	handleRouteMatched : function(oEvent) {
		
		 
						
		
	},
	
	
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Master
*/
	onAfterRendering: function() {
		if (!this.initialized) {
			this.initialized = true;
			var othis=this;
			var contentString="This is demo for Google Map Intergration with SAPUI5";
			this.geocoder = new google.maps.Geocoder();
			window.mapOptions = {
				center: new google.maps.LatLng(48.085, 11.5686),
				zoom: 4,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				passiveLogo: true
			};
			//This is basically for setting the initial position of the map, ie. Setting the coordinates, for the place by default
			var myLatLng = {lat: 48.085418575511966, lng: 11.568603515625};
			var map = new google.maps.Map(this.getView().byId("map_canvas").getDomRef(), mapOptions);
			
			var infowindow = new google.maps.InfoWindow;
			var geocoder = new google.maps.Geocoder();
			var marker = new google.maps.Marker({
				position: myLatLng,
		        map: map,
		        title: 'Hello World!'
			});
			var infowindow = new google.maps.InfoWindow({
		          content: contentString
		        });
			marker.addListener('click', function(e) {
		          infowindow.open(map, marker);
		        });
			/*google.maps.event.addListener(map, "click", function(e) {
				var lolatitude = e.latLng.lat(); //calculates latitude of the point of click
				var lolongitude = e.latLng.lng() //calculates longitude of the point of click
				jQuery.sap.require("sap.m.MessageToast");
				sap.m.MessageToast.show("Lat" + lolatitude + "\n Lng" + lolongitude);
				var latlng = new google.maps.LatLng("latlng", lolatitude, lolongitude);
				var text1 = new sap.m.Text({
					text: lolatitude
				});
				var text2 = new sap.m.Text({
					text: lolongitude
				});
				window.point1 = lolatitude;
				window.point2 = lolongitude;
				othis.geocodeLatLng(geocoder, map, infowindow, text1, text2);

			});*/
		}
	},
	
	
	geocodeLatLng:function (geocoder, map, infowindow,text1,text2) {
		var markers = [];
		var input1 = text1.mProperties.text;
		var input2 = text2.mProperties.text;
		var latlng = {lat: parseFloat(input1), lng: parseFloat(input2)};

		geocoder.geocode({'location': latlng}, function(results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
		if (results[1]) {
		//Here result will consist of many result, but we have to take fist result //itself, since that would be the appropriate one
		map.setZoom(11);
		function addMarker(location) {
		var marker = new google.maps.Marker({
		position: location,
		map: newmap1
		});
		markers.push(marker);// A marker is added to the point where it was clicked
		}
		var address1 = results[1].formatted_address;

		infowindow.setContent(results[1].formatted_address);
		infowindow.open(map, marker);
		} else {
		window.alert('No results found');
		}
		} else {
		window.alert('Geocoder failed due to: ' + status);
		}

		});
		}

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Master
*/
//	onExit: function() {
//
//	}
	
});
});
