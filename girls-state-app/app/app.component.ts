import {Component} from 'angular2/core'
import {AuxiliaryRoleCreatorComponent} from './auxiliary-role-creator.component';

@Component({
    selector: 'app',
    directives: [AuxiliaryRoleCreatorComponent],
    template: ` <auxiliary-role-creator></auxiliary-role-creator>`
})

export class AppComponent{

}