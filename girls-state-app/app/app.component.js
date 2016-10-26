System.register(['angular2/core', './auxiliary/auxiliary-role-creator.component', './student/student-application.component', './student/parent-consent-form.component', './shared/student-school-login.component', './auxiliary/create-auxiliary-account.component', './auxiliary/auxiliary-login.component', './school/school-application.component', './auxiliary/auxiliary-application.component'], function(exports_1, context_1) {
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
    var core_1, auxiliary_role_creator_component_1, student_application_component_1, parent_consent_form_component_1, student_school_login_component_1, create_auxiliary_account_component_1, auxiliary_login_component_1, school_application_component_1, auxiliary_application_component_1;
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
            },
            function (student_school_login_component_1_1) {
                student_school_login_component_1 = student_school_login_component_1_1;
            },
            function (create_auxiliary_account_component_1_1) {
                create_auxiliary_account_component_1 = create_auxiliary_account_component_1_1;
            },
            function (auxiliary_login_component_1_1) {
                auxiliary_login_component_1 = auxiliary_login_component_1_1;
            },
            function (school_application_component_1_1) {
                school_application_component_1 = school_application_component_1_1;
            },
            function (auxiliary_application_component_1_1) {
                auxiliary_application_component_1 = auxiliary_application_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.viewMode = "create_auxiliary";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n                 <ul class = \"nav nav-pills\">\n                    <li [class.active] = \"viewMode == 'create_auxiliary'\"><a (click) = \"viewMode = 'create_auxiliary'\" >Create Auxiliary</a></li>\n                    <li [class.active] = \"viewMode == 'auxiliary_login'\"><a (click) = \"viewMode = 'auxiliary_login'\"> Auxiliary Login </a></li>\n                    <li [class.active] = \"viewMode == 'role_creator'\"><a (click) = \"viewMode = 'role_creator'\"> Aux Role Creator</a></li>\n                    <li [class.active] = \"viewMode == 'student_login'\"><a (click) = \"viewMode = 'student_login'\">Student Login</a></li>\n                    <li [class.active] = \"viewMode == 'student_app'\"><a (click) = \"viewMode = 'student_app'\"> Student Application</a></li>\n                    <li [class.active] = \"viewMode == 'parent_consent'\"><a (click) = \"viewMode = 'parent_consent'\"> Parent Consent</a></li>\n                    <li [class.active] = \"viewMode == 'school_application'\"><a (click) = \"viewMode = 'school_application'\">School Application</a></li>\n                    <li [class.active] = \"viewMode == 'auxiliary_application'\"><a (click) = \"viewMode = 'auxiliary_application'\">Auxiliary Application</a></li>\n                </ul>\n\n                 <div [ngSwitch] = \"viewMode\">\n                    <template  [ngSwitchWhen] = \"'create_auxiliary'\" ngSwitchDefault><create-auxiliary-account></create-auxiliary-account></template>\n                    <template  [ngSwitchWhen] = \"'auxiliary_login'\"><auxiliary-login></auxiliary-login></template>\n                    <template  [ngSwitchWhen] = \"'role_creator'\" ngSwitchDefault><auxiliary-role-creator></auxiliary-role-creator></template>\n                    <template  [ngSwitchWhen] = \"'student_login'\" ngSwitchDefault><student-school-login></student-school-login></template>\n                    <template  [ngSwitchWhen] = \"'student_app'\" ngSwitchDefault><student-application></student-application></template>\n                    <template  [ngSwitchWhen] = \"'parent_consent'\" ngSwitchDefault><parent-consent-form></parent-consent-form></template>\n                    <template  [ngSwitchWhen] = \"'school_application'\" ngSwitchDefault><school-application></school-application></template>\n                    <template  [ngSwitchWhen] = \"'auxiliary_application'\" ngSwitchDefault><auxiliary-application></auxiliary-application></template>\n                </div>\n    ",
                        directives: [auxiliary_role_creator_component_1.AuxiliaryRoleCreatorComponent, student_application_component_1.StudentApplicationComponent, parent_consent_form_component_1.ParentConsentFormComponent,
                            student_school_login_component_1.StudentSchoolLoginComponent, create_auxiliary_account_component_1.CreateAuxiliaryAccountComponent, auxiliary_login_component_1.AuxiliaryLoginComponent, school_application_component_1.SchoolApplicationComponent, auxiliary_application_component_1.AuxiliaryApplicationComponent]
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