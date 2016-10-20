import {Component} from 'angular2/core';
import {AuxiliaryRoleCreatorComponent} from './auxiliary/auxiliary-role-creator.component';
import {StudentApplicationComponent} from './student/student-application.component';
import {ParentConsentFormComponent} from './student/parent-consent-form.component';
import {StudentSchoolLoginComponent} from './shared/student-school-login.component';

@Component({
    selector: 'my-app',
    template: `<auxiliary-role-creator *ngIf = "role_creator"></auxiliary-role-creator>
                <auxiliary-admin-login *ngIf = "adminLogin"></auxiliary-admin-login>
                <student-application *ngIf = "student_app"></student-application>
                <parent-consent-form  *ngIf = "parent_consent"></parent-consent-form>
                <student-school-login *ngIf = "student_login"></student-school-login>
    `,
    directives: [AuxiliaryRoleCreatorComponent,StudentApplicationComponent, ParentConsentFormComponent, StudentSchoolLoginComponent]
})
export class AppComponent {
    role_creator = false;
    student_app = false;
    parent_consent = false;
    student_login = true;

 }