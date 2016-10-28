import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators,Validator} from 'angular2/common';
import {AuxValidators} from './auxValidators';

function equalValidator({value}: ControlGroup): {[key: string]: any} {
  const [first, ...rest] = Object.keys(value || {});
  const valid = rest.every(v => value[v] === value[first]);
  return valid ? null : {equal: true};
}

@Component({
    selector: 'create-auxiliary-account',
    templateUrl: 'app/auxiliary/create-auxiliary-account.component.html',
    styleUrls: ['app/auxiliary/create-auxiliary-account.component.css',
     'app/student/student-application.component.css']
})

export class CreateAuxiliaryAccountComponent{
  
    form = new ControlGroup({
       username : new Control('', Validators.compose([
           Validators.required,
           AuxValidators.containsAllNumbers
       ])),
       passwordGroup : new ControlGroup({
            password : new Control('', Validators.required),
            confirm_password: new Control('', Validators.required)
       }, {}, equalValidator)
       
    });

    
    signup(){
        console.log(this.form.value);
       
    }
}