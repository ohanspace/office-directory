import {Component} from '@angular/core';
import {AlertController, ModalController, NavController, NavParams} from 'ionic-angular';
import {Designation} from "../../../core/models/designation";
import {OfficeController} from "../../../core/controllers/office-controller";
import {DesignationSaveModalPage} from "../designation-save-modal/designation-save-modal";
import {DesignationDTO} from "../../../core/models/designation.dto";
import {OfficeFactory} from "../../../core/factory/office-factory";

@Component({
    selector: 'page-designation-list',
    templateUrl: 'designation-list.html',
})
export class DesignationListPage {
    designations: Designation[];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private modalCtrl: ModalController,
                private alertCtrl: AlertController,
                private officeCtrl: OfficeController) {

        this.officeCtrl.getAllDesignations$().subscribe(desgs => {
            this.designations = desgs;
        });
    }


    addNewDesignation() {
        let designationDTO = OfficeFactory.createEmptyDesignationDTO();
        this.showDesignationForm(designationDTO);
    }

    editDesignation(designation: Designation) {
        let designationDTO = <DesignationDTO> designation;
        this.showDesignationForm(designationDTO);
    }



    removeDesignationAlert(designationId: string) {
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
                        this.removeDesignation(designationId);
                    }
                }
            ]
        });
        confirm.present();
    }

    private removeDesignation(designationId: string) {
        this.officeCtrl.removeDesignation(designationId).then(() => {
            //item deleted
        });
    }

    private showDesignationForm(designationDTO: DesignationDTO) {
        let deptForm = this.modalCtrl.create(DesignationSaveModalPage, {designationDTO: designationDTO});
        deptForm.onDidDismiss((data, role) => {
            if (role == 'saved') {

            }
        });
        deptForm.present();
    }


}
