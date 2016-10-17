import {Component} from 'angular2/core'


@Component({
    selector: 'auxiliary-role-creator',
    templateUrl: 'app/auxiliary/auxiliary-role-creator.component.html',
    styleUrls: ['app/auxiliary/auxiliary-role-creator.component.css']
})

export class AuxiliaryRoleCreatorComponent{
    onSubmit(formData){
        console.log(formData);
    }
}