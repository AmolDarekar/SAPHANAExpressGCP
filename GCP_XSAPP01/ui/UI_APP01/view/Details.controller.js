sap.ui.controller("com.amol.northwind.view.Details", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Details
*/
	onInit: function() {
			try{
				this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    this._oRouter.attachRouteMatched(this.handleRouteMatched, this);
			}
			catch(ev){}
	},

	handleRouteMatched : function(oEvent){
		/*var CID = oEvent.getParameter("arguments").id;
		var Cname =oEvent.getParameter("arguments").cname;
		var sObjectPath = "/CustomerSet(CUSTOMERID='" +CID + "',COMPANYNAME='"+Cname+"')";
		this._bindView(sObjectPath);*/
		
		
	},
	
	_bindView: function(sObjectPath) {
		controller = this;
		var model = this.getView().getModel("ODataModel");
		var oModel = new sap.ui.model.json.JSONModel();
		model.read(sObjectPath,null,null,true,function(odata,oResponse){
			oModel.setData(odata);
			controller.getView().setModel(oModel,"zcustDetails");
		},function(error){});
		
		/*var orModel = new sap.ui.model.json.JSONModel();
		var orderTable = this.getView().byId("idOrderTable");
		model.read(sObjectPath+"/Orders",null,null,true,function(odata,oResponse){
			orModel.setData(odata);
			orderTable.setModel(orModel);
		},function(error){});*/
		
	},
	
	onNavBack: function(evt){
		this._oRouter.navTo("Master");
	},
	
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Details
*/
//	onBeforeRendering: function() {
//
//	},
	
/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Details
*/
	onAfterRendering: function() {
		var _ID= this.getView().byId("idFrame");
		
		/*new sap.m.Shell({
			app : new sap.ui.core.ComponentContainer({
				name : "com.amol.test",
				url:"/DAREKARA/XS/UI/ZTEST/WebContent",
				height : "100%"
			}),appWidthLimited : false
		}).placeAt("contentRight");*/
		
		
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Details
*/
//	onExit: function() {
//
//	}

});