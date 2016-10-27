import {Control} from 'angular2/common';

export class AuxiliaryValidators {

    
    static isAllNumbers(control: Control){
        if(/^[0-9]*$)/.test(control.value) == false)
            return {isAllNumbers: true};

        return null;
    }
}