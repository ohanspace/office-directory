import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {DepartmentDTO} from "../../../core/models/department.dto";
import {OfficeController} from "../../../core/controllers/office-controller";


@Component({
    selector: 'page-department-save-modal',
    templateUrl: 'department-save-modal.html',
})
export class DepartmentSaveModalPage {

    departmentDTO: DepartmentDTO;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private officeCtrl: OfficeController,
                private viewCtrl: ViewController) {
        this.departmentDTO = this.navParams.get('departmentDTO');
    }

    save() {
        this.officeCtrl.saveDepartment(this.departmentDTO).then(() =>{
            this.viewCtrl.dismiss(null, 'saved');
        });

    }

    close() {
        this.viewCtrl.dismiss();
    }

}
