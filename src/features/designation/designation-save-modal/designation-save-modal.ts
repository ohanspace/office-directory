import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {DesignationDTO} from "../../../core/models/designation.dto";
import {OfficeController} from "../../../core/controllers/office-controller";


@Component({
    selector: 'page-designation-save-modal',
    templateUrl: 'designation-save-modal.html',
})
export class DesignationSaveModalPage {

    designationDTO: DesignationDTO;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private officeCtrl: OfficeController,
                private viewCtrl: ViewController) {
        this.designationDTO = this.navParams.get('designationDTO');
    }

    save() {
        this.officeCtrl.saveDesignation(this.designationDTO).then(() =>{
            this.viewCtrl.dismiss(null, 'saved');
        });

    }

    close() {
        this.viewCtrl.dismiss();
    }

}
