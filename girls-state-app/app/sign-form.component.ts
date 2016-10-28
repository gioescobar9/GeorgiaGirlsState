import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators} from 'angular2/common';
import {UsernameValidators} from './usernameValidators';

@Component({
    selector: 'sign-form',
    templateUrl: 'app/sign-form.component.html'
})


export class SignFormComponent{
    form = new ControlGroup({
        username : new Control('', Validators.compose([
            Validators.required, 
            UsernameValidators.cannotContainSpace
            ])),
        password : new Control('',Validators.required )
    });

    signup(){
        console.log(this.form.value);
        console.log(this.form.hasError);
    }
}