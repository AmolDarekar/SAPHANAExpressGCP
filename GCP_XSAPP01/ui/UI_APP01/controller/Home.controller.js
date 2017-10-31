sap.ui.controller("siemens.KAIROS.ui.salesfunnel.WebContent.src.controller.Home", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Home
*/
	onInit: function() {
		var sPath = jQuery.sap.getModulePath("siemens.KAIROS.ui.salesfunnel.WebContent.src", "/model/report.json");
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData(sPath,null,true);
		this.getView().setModel(oModel,"mModel");
		
		var sPath = jQuery.sap.getModulePath("siemens.KAIROS.ui.salesfunnel.WebContent.src", "/model/reportsum.json");
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData(sPath,null,true);
		this.getView().setModel(oModel,"msModel");
		
	},
	
	onDetaileView:function(evt){
		var _data= evt.getSource().getBindingContext("mModel").getObject();
		this.oPopUp= sap.ui.xmlfragment("siemens.KAIROS.ui.salesfunnel.WebContent.src.fragment.PopUp", this);
		this.setItemModel(this.oPopUp);
		this.getView().addDependent(this.oPopUp);
		this.oPopUp.open();
		
	},
	setItemModel:function(popup){
		var othis= this;
		var sPath = jQuery.sap.getModulePath("siemens.KAIROS.ui.salesfunnel.WebContent.src", "/model/items.json");
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData(sPath,null,true);
		popup.setModel(oModel,"iModel");
		oModel.attachRequestCompleted(function() {
			othis.doCellFormat(oModel);
	    });
		
		var sPath = jQuery.sap.getModulePath("siemens.KAIROS.ui.salesfunnel.WebContent.src", "/model/popsum.json");
		var osModel = new sap.ui.model.json.JSONModel();
		osModel.loadData(sPath,null,true);
		popup.setModel(osModel,"iSumModel");
		
	},
	onItemDialogClose:function(){
		this.oPopUp.destroy();
	},
	onHomePress:function(){
		//window.self.location = "/DAREKARA/XS/UI/TileDashBoard/WebContent/index.html"+ window.location.search;   
	},
	doCellFormat:function(oModel){
		var oTable = sap.ui.getCore().byId("idTableAMDetails");
	  
	    oTable.onAfterRendering = function() {
	        if (sap.m.Table.onAfterRendering) {
	          sap.m.Table.onAfterRendering.apply(this, arguments);
	        }
	        var items = this.getItems();
	        for (i = 0; i < items.length; i++) {
	          var item = items[i];
	          var obj = item.getBindingContext("iModel").getObject();
	          if (obj.col4 === 'NDY') {
	            $(item.$().find('td')[3]).addClass('GreenBack');
	          }
	        }
	      }
	    
	},
	doNumberFor:function(val){
		if(val!=null&&val!=""){
			var num=parseInt(val);
			return num.toLocaleString("en-US");
		}
	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Home
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Home
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Home
*/
//	onExit: function() {
//
//	}

});