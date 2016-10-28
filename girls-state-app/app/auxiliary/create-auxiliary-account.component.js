System.register(['angular2/core', 'angular2/common', './auxValidators'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, auxValidators_1;
    var CreateAuxiliaryAccountComponent;
    function equalValidator(_a) {
        var value = _a.value;
        var _b = Object.keys(value || {}), first = _b[0], rest = _b.slice(1);
        var valid = rest.every(function (v) { return value[v] === value[first]; });
        return valid ? null : { equal: true };
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (auxValidators_1_1) {
                auxValidators_1 = auxValidators_1_1;
            }],
        execute: function() {
            CreateAuxiliaryAccountComponent = (function () {
                function CreateAuxiliaryAccountComponent() {
                    this.form = new common_1.ControlGroup({
                        username: new common_1.Control('', common_1.Validators.compose([
                            common_1.Validators.required,
                            auxValidators_1.AuxValidators.containsAllNumbers
                        ])),
                        passwordGroup: new common_1.ControlGroup({
                            password: new common_1.Control('', common_1.Validators.required),
                            confirm_password: new common_1.Control('', common_1.Validators.required)
                        }, {}, equalValidator)
                    });
                }
                CreateAuxiliaryAccountComponent.prototype.signup = function () {
                    console.log(this.form.value);
                };
                CreateAuxiliaryAccountComponent = __decorate([
                    core_1.Component({
                        selector: 'create-auxiliary-account',
                        templateUrl: 'app/auxiliary/create-auxiliary-account.component.html',
                        styleUrls: ['app/auxiliary/create-auxiliary-account.component.css',
                            'app/student/student-application.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], CreateAuxiliaryAccountComponent);
                return CreateAuxiliaryAccountComponent;
            }());
            exports_1("CreateAuxiliaryAccountComponent", CreateAuxiliaryAccountComponent);
        }
    }
});
//# sourceMappingURL=create-auxiliary-account.component.js.map