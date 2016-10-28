System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AuxValidators;
    return {
        setters:[],
        execute: function() {
            AuxValidators = (function () {
                function AuxValidators() {
                }
                AuxValidators.containsAllNumbers = function (control) {
                    if (/^\d+$/.test(control.value) == false)
                        return { containsAllNumbers: true };
                    return null;
                };
                return AuxValidators;
            }());
            exports_1("AuxValidators", AuxValidators);
        }
    }
});
//# sourceMappingURL=auxValidators.js.map