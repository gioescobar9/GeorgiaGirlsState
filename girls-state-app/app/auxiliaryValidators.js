System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AuxiliaryValidators;
    return {
        setters:[],
        execute: function() {
            AuxiliaryValidators = (function () {
                function AuxiliaryValidators() {
                }
                AuxiliaryValidators.isAllNumbers = function (control) {
                    if (/^[0-9]*$)/.test(control.value) == false)
                        return { isAllNumbers: true };
                    return null;
                };
                return AuxiliaryValidators;
            }());
            exports_1("AuxiliaryValidators", AuxiliaryValidators);
        }
    }
});
//# sourceMappingURL=auxiliaryValidators.js.map