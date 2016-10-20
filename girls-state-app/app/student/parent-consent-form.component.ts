import {Component} from 'angular2/core';

@Component({
    selector: 'parent-consent-form',
    templateUrl: 'app/student/parent-consent-form.component.html',
    styleUrls: ['app/student/student-application.component.css']
})

export class ParentConsentFormComponent{
    textAreasHidden = {
        illnessInput: false,
        treatmentInput: false
    }
}