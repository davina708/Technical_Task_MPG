import "@ui5/webcomponents/dist/Button.js";

document.querySelector('#app').innerHTML = `
  <ui5-button>Hello UI5 Web Components</ui5-button>
`

sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {

            }
        });
    });
