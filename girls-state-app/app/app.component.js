System.register(['angular2/core', './auxiliary/auxiliary-role-creator.component', './student/student-application.component', './student/parent-consent-form.component'], function(exports_1, context_1) {
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
    var core_1, auxiliary_role_creator_component_1, student_application_component_1, parent_consent_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auxiliary_role_creator_component_1_1) {
                auxiliary_role_creator_component_1 = auxiliary_role_creator_component_1_1;
            },
            function (student_application_component_1_1) {
                student_application_component_1 = student_application_component_1_1;
            },
            function (parent_consent_form_component_1_1) {
                parent_consent_form_component_1 = parent_consent_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.role_creator = true;
                    this.student_app = false;
                    this.parent_consent = false;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<auxiliary-role-creator *ngIf = \"role_creator\"></auxiliary-role-creator>\n                <auxiliary-admin-login *ngIf = \"adminLogin\"></auxiliary-admin-login>\n                <student-application *ngIf = \"student_app\"></student-application>\n                <parent-consent-form  *ngIf = \"parent_consent\"></parent-consent-form>\n    ",
                        directives: [auxiliary_role_creator_component_1.AuxiliaryRoleCreatorComponent, student_application_component_1.StudentApplicationComponent, parent_consent_form_component_1.ParentConsentFormComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map