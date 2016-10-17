import {Component} from 'angular2/core';
import {AuxiliaryRoleCreatorComponent} from './auxiliary/auxiliary-role-creator.component';
import {StudentApplicationComponent} from './student/student-application.component';

@Component({
    selector: 'my-app',
    template: `<auxiliary-role-creator *ngIf = "role_creator"></auxiliary-role-creator>
                <auxiliary-admin-login *ngIf = "adminLogin"></auxiliary-admin-login>
                <student-application *ngIf = "student_app"></student-application>
    `,
    directives: [AuxiliaryRoleCreatorComponent,StudentApplicationComponent]
})
export class AppComponent {
    role_creator = false;
    student_app = true;

 }