import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {OfficeDTO} from "../../../core/models/office.dto";
import {OfficeController} from "../../../core/controllers/office-controller";


@Component({
    selector: 'page-office-save-modal',
    templateUrl: 'office-save-modal.html',
})
export class OfficeSaveModalPage {

    officeDTO: OfficeDTO;
    officeTypes: string[];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private officeCtrl: OfficeController,
                private viewCtrl: ViewController) {
        this.officeDTO = this.navParams.get('officeDTO');
        this.officeTypes = this.officeCtrl.getOfficeTypes();
    }

    save() {
        this.officeCtrl.saveOffice(this.officeDTO).then(() =>{
            this.viewCtrl.dismiss(null, 'saved');
        });

    }

    close() {
        this.viewCtrl.dismiss();
    }

}
