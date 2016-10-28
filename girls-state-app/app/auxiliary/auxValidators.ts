import {Control} from 'angular2/common';

export class AuxValidators {
   static containsAllNumbers(control: Control){
        if(/^\d+$/.test(control.value) == false)
            return {containsAllNumbers: true};

        return null;
    }
}

