import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Office} from "../../core/models/office";
import {OfficeController} from "../../core/controllers/office-controller";
import {ProfileController} from "../../core/controllers/profile-controller";

@Component({
    selector: 'page-office',
    templateUrl: 'office.html',
})
export class OfficePage {
    office: Office;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private officeCtrl: OfficeController,
                private profileCtrl: ProfileController) {

        const officeId = this.navParams.get('officeId');
        if (!officeId) {
            alert('No office id');
        }

        this.officeCtrl.getOfficeById$(officeId).subscribe(ofc => {
            this.office = ofc;
        });
    }



}
