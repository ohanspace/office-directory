import {Component} from '@angular/core';
import {AlertController, ModalController, NavController, NavParams} from 'ionic-angular';
import {Department} from "../../../core/models/department";
import {OfficeController} from "../../../core/controllers/office-controller";
import {DepartmentSaveModalPage} from "../department-save-modal/department-save-modal";
import {DepartmentDTO} from "../../../core/models/department.dto";
import {OfficeFactory} from "../../../core/factory/office-factory";

@Component({
    selector: 'page-department-list',
    templateUrl: 'department-list.html',
})
export class DepartmentListPage {
    departments: Department[];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private modalCtrl: ModalController,
                private alertCtrl: AlertController,
                private officeCtrl: OfficeController) {

        this.officeCtrl.getAllDepartments$().subscribe(depts => {
            this.departments = depts;
        });
    }


    addNewDepartment() {
        let departmentDTO = OfficeFactory.createEmptyDepartmentDTO();
        this.showDepartmentForm(departmentDTO);
    }

    editDepartment(department: Department) {
        let departmentDTO = <DepartmentDTO> department;
        this.showDepartmentForm(departmentDTO);
    }



    removeDepartmentAlert(departmentId: string) {
        const confirm = this.alertCtrl.create({
            title: 'Proceed To remove?',
            message: 'This item will be permanently lost',
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                    }
                },
                {
                    text: 'Agree',
                    handler: () => {
                        this.removeDepartment(departmentId);
                    }
                }
            ]
        });
        confirm.present();
    }

    private removeDepartment(departmentId: string) {
        this.officeCtrl.removeDepartment(departmentId).then(() => {
            //item deleted
        });
    }

    private showDepartmentForm(departmentDTO: DepartmentDTO) {
        let deptForm = this.modalCtrl.create(DepartmentSaveModalPage, {departmentDTO: departmentDTO});
        deptForm.onDidDismiss((data, role) => {
            if (role == 'saved') {

            }
        });
        deptForm.present();
    }


}
