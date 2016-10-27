import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators} from 'angular2/common';
import {AuxiliaryValidators} from '../auxiliaryValidators.ts'; 

@Component({
    selector: 'create-auxiliary-account',
    templateUrl: 'app/auxiliary/create-auxiliary-account.component.html',
    styleUrls: ['app/auxiliary/create-auxiliary-account.component.css',
     'app/student/student-application.component.css']
})

export class CreateAuxiliaryAccountComponent{
    form = new ControlGroup({
        username : new Control('', Validators.compose([Validators.required, AuxiliaryValidators.isAllNumbers])),
        password: new Control('', Validators.required),
        confirm_password : new Control('', Validators.required) 
    });

    signup(){
        console.log(this.form.value);
    }
}