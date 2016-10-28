import { Component } from 'angular2/core';
import { PatientListComponent } from './patient/patient-list.component';

@Component({
    selector: 'pm-app',
    template:`
    <div><h1>{{pageTitle}}</h1>
        <pm-patients></pm-patients>
    </div>
    `,
    directives: [PatientListComponent] 
})
export class AppComponent {
    pageTitle: string = 'Patients Management App';
}