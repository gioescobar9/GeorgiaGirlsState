import {Component} from 'angular2/core';
import {AuxiliaryNavBarComponent} from './auxiliary-nav-bar.component';


@Component({
    selector: 'auxiliary-role-creator',
    templateUrl: 'app/auxiliary/auxiliary-role-creator.component.html',
    styleUrls: [ 'app/student/student-application.component.css'],
    directives: [AuxiliaryNavBarComponent]
})

export class AuxiliaryRoleCreatorComponent{
    onSubmit(formData){
        console.log(formData);
    }
}