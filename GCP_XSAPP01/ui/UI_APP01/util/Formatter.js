jQuery.sap.declare("com.amol.northwind.util.Formatter");

jQuery.sap.require("sap.ui.core.format.DateFormat");

com.amol.northwind.util.Formatter = {
	
	_statusStateMap : {
		"P" : "Success",
		"N" : "Warning"
	},

	statusText :  function (value) {
		var bundle = this.getModel("i18n").getResourceBundle();
		return bundle.getText("StatusText" + value, "?");
	},
	
	statusState :  function (value) {
		var map = sap.ui.demo.myFiori.util.Formatter._statusStateMap;
		return (value && map[value]) ? map[value] : "None";
	},
	
	date : function (value) {
		if (value) {       
		    var date = new Date(value);
		    var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "yyyy-MM-dd"}); 
		    var value = oDateFormat.format(new Date(date));
		    return value;
		    
		} else {
			return 0;
		}
	},
	
	quantity :  function (value) {
		try {
			return (value) ? parseFloat(value).toFixed(0) : value;
		} catch (err) {
			return "Not-A-Number";
		}
	},
	
	upperCase:function(value) {
	    return value.toUpperCase();
	}
};