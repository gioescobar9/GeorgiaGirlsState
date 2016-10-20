import {Component} from 'angular2/core';
import {AuxiliaryRoleCreatorComponent} from './auxiliary/auxiliary-role-creator.component';
import {StudentApplicationComponent} from './student/student-application.component';
import {ParentConsentFormComponent} from './student/parent-consent-form.component';

@Component({
    selector: 'my-app',
    template: `<auxiliary-role-creator *ngIf = "role_creator"></auxiliary-role-creator>
                <auxiliary-admin-login *ngIf = "adminLogin"></auxiliary-admin-login>
                <student-application *ngIf = "student_app"></student-application>
                <parent-consent-form  *ngIf = "parent_consent"></parent-consent-form>
    `,
    directives: [AuxiliaryRoleCreatorComponent,StudentApplicationComponent, ParentConsentFormComponent]
})
export class AppComponent {
    role_creator = false;
    student_app = false;
    parent_consent = true;

 }