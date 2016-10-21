import {Component} from 'angular2/core';
import {AuxiliaryRoleCreatorComponent} from './auxiliary/auxiliary-role-creator.component';
import {StudentApplicationComponent} from './student/student-application.component';
import {ParentConsentFormComponent} from './student/parent-consent-form.component';
import {StudentSchoolLoginComponent} from './shared/student-school-login.component';
import {CreateAuxiliaryAccountComponent} from './auxiliary/create-auxiliary-account.component';
import{AuxiliaryLoginComponent} from './auxiliary/auxiliary-login.component';

@Component({
    selector: 'my-app',
    template: `
                 <ul class = "nav nav-pills">
                    <li [class.active] = "viewMode == 'create_auxiliary'"><a (click) = "viewMode = 'create_auxiliary'" >Create Auxiliary</a></li>
                    <li [class.active] = "viewMode == 'auxiliary_login'"><a (click) = "viewMode = 'auxiliary_login'"> Auxiliary Login </a></li>
                    <li [class.active] = "viewMode == 'role_creator'"><a (click) = "viewMode = 'role_creator'"> Aux Role Creator</a></li>
                    <li [class.active] = "viewMode == 'student_login'"><a (click) = "viewMode = 'student_login'">Student Login</a></li>
                    <li [class.active] = "viewMode == 'student_app'"><a (click) = "viewMode = 'student_app'"> Student Application</a></li>
                    <li [class.active] = "viewMode == 'parent_consent'"><a (click) = "viewMode = 'parent_consent'"> Parent Consent</a></li>
                </ul>

                 <div [ngSwitch] = "viewMode">
                    <template [ngSwitchWhen] = "'create_auxiliary'" ngSwitchDefault><create-auxiliary-account></create-auxiliary-account></template>
                    <template [ngSwitchWhen] = "'auxiliary_login'"><auxiliary-login></auxiliary-login></template>
                    <template [ngSwitchWhen] = "'role_creator'" ngSwitchDefault><auxiliary-role-creator></auxiliary-role-creator></template>
                    <template [ngSwitchWhen] = "'student_login'" ngSwitchDefault><student-school-login></student-school-login></template>
                    <template [ngSwitchWhen] = "'student_app'" ngSwitchDefault><student-application></student-application></template>
                    <template [ngSwitchWhen] = "'parent_consent'" ngSwitchDefault><parent-consent-form></parent-consent-form></template>
                </div>
    `,
    directives: [AuxiliaryRoleCreatorComponent,StudentApplicationComponent, ParentConsentFormComponent,
     StudentSchoolLoginComponent, CreateAuxiliaryAccountComponent, AuxiliaryLoginComponent]
})
export class AppComponent {
    viewMode = "create_auxiliary";

 }