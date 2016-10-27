import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators} from 'angular2/common';
@Component({
    selector: 'create-auxiliary-account',
    templateUrl: 'app/auxiliary/create-auxiliary-account.component.html',
    styleUrls: ['app/auxiliary/create-auxiliary-account.component.css',
     'app/student/student-application.component.css']
})

export class CreateAuxiliaryAccountComponent{
    form = new ControlGroup({
        username : new Control('', Validators.required),
        password: new Control('', Validators.required),
        confirm_password : new Control('', Validators.required) 
    });
}