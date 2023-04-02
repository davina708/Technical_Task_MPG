sap.ui.define([
    "sap/ui/core/mvc/Controller"
    ], function(Controller) {
    "use strict";
    
    return Controller.extend("project1.controller.View1", {
    uploadFile: function(e) {
        var fU = this.getView().byId("idfileUploader");
        var domRef = fU.getFocusDomRef();
        var file = domRef.files[0];
        var reader = new FileReader();
        reader.onload = function(oEvent) {
          var strCSV = oEvent.target.result;
          var arrCSV = strCSV.match(/[\w .]+(?=,?)/g);
          var noOfCols = 6;
          var headerRow = arrCSV.splice(0, noOfCols);
          var data = [];
          while (arrCSV.length > 0) {
            var obj = {};
            var row = arrCSV.splice(0, noOfCols);
            for (var i = 0; i < row.length; i++) {
              obj[headerRow[i]] = row[i].trim();
            }
            data.push(obj);
          }
        };
        reader.readAsBinaryString(file);
      }
    });
    });