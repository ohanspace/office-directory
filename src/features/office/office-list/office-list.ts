import {Component} from '@angular/core';
import {AlertController, ModalController, NavController, NavParams} from 'ionic-angular';
import {Office} from "../../../core/models/office";
import {OfficeController} from "../../../core/controllers/office-controller";
import {OfficeSaveModalPage} from "../office-save-modal/office-save-modal";
import {OfficeDTO} from "../../../core/models/office.dto";
import {OfficeFactory} from "../../../core/factory/office-factory";

@Component({
    selector: 'page-office-list',
    templateUrl: 'office-list.html',
})
export class OfficeListPage {
    offices: Office[];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private modalCtrl: ModalController,
                private alertCtrl: AlertController,
                private officeCtrl: OfficeController) {

        this.officeCtrl.getAllOffices$().subscribe(depts => {
            this.offices = depts;
        });
    }


    addNewOffice() {
        let officeDTO = OfficeFactory.createEmptyOfficeDTO();
        this.showOfficeForm(officeDTO);
    }

    editOffice(office: Office) {
        let officeDTO = <OfficeDTO> office;
        this.showOfficeForm(officeDTO);
    }



    removeOfficeAlert(officeId: string) {
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
                        this.removeOffice(officeId);
                    }
                }
            ]
        });
        confirm.present();
    }

    private removeOffice(officeId: string) {
        this.officeCtrl.removeOffice(officeId).then(() => {
            //item deleted
        });
    }

    private showOfficeForm(officeDTO: OfficeDTO) {
        let officeForm = this.modalCtrl.create(OfficeSaveModalPage, {officeDTO: officeDTO});
        officeForm.onDidDismiss((data, role) => {
            if (role == 'saved') {

            }
        });
        officeForm.present();
    }


}
