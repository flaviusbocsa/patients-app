System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PatientListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PatientListComponent = (function () {
                function PatientListComponent() {
                    this.pageTitle = 'Patient List';
                    this.patients = [
                        {
                            "id": 2,
                            "firstname": "Lance",
                            "lastname": "Armstrong",
                            "age": 40,
                            "phone": "-",
                            "created_at": "2016-10-02T11:39:03.151Z",
                            "updated_at": "2016-10-02T11:39:03.151Z",
                            "url": "https://uvt-hci-lab.herokuapp.com/patients/2.json"
                        },
                        {
                            "id": 3,
                            "firstname": "James",
                            "lastname": "Bond", "age": 50,
                            "phone": "007", "created_at": "2016-10-02T12:00:24.538Z",
                            "updated_at": "2016-10-02T12:00:24.538Z",
                            "url": "https://uvt-hci-lab.herokuapp.com/patients/3.json"
                        }];
                }
                PatientListComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-patients',
                        templateUrl: 'app/patient/patient-list.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], PatientListComponent);
                return PatientListComponent;
            }());
            exports_1("PatientListComponent", PatientListComponent);
        }
    }
});
//# sourceMappingURL=patient-list.component.js.map