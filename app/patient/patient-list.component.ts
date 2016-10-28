import { Component } from 'angular2/core';

@Component({
    selector: 'pm-patients',
    templateUrl: 'app/patient/patient-list.component.html'

})
export class PatientListComponent {
    pageTitle: string = 'Patient List';
    patients: any[] = [
        {
            "id":2,
            "firstname":"Lance",
            "lastname":"Armstrong",
            "age":40,
            "phone":"-",
            "created_at":"2016-10-02T11:39:03.151Z",
            "updated_at":"2016-10-02T11:39:03.151Z",
            "url":"https://uvt-hci-lab.herokuapp.com/patients/2.json"
        },
        {
            "id":3,
            "firstname":"James",
            "lastname":"Bond","age":50,
            "phone":"007","created_at":"2016-10-02T12:00:24.538Z",
            "updated_at":"2016-10-02T12:00:24.538Z",
            "url":"https://uvt-hci-lab.herokuapp.com/patients/3.json" 
    }];
}