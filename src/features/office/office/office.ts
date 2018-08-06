import {Component} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {Office} from "../../../core/models/office";
import {OfficeController} from "../../../core/controllers/office-controller";
import {ProfileController} from "../../../core/controllers/profile-controller";
import {ProfileFormModalPage} from "../../profile/profile-form-modal/profile-form-modal";
import {ProfileFactory} from "../../../core/factory/profile-factory";

@Component({
    selector: 'page-office',
    templateUrl: 'office.html',
})
export class OfficePage {
    office: Office;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private officeCtrl: OfficeController,
                private modalCtrl: ModalController,
                private profileCtrl: ProfileController) {

        const officeId = this.navParams.get('officeId');
        if (!officeId) {
            console.log('no office with the id');
        }

        this.officeCtrl.getOfficeWithProfiles$(officeId).subscribe(ofc => {
            this.office = ofc;
            console.log(ofc);
        });
    }


    addNewProfile() {
        let newProfileDTO = ProfileFactory.createEmptyProfileDTO();
        newProfileDTO.inCharge.officeId = this.office.id;
        let profileForm = this.modalCtrl.create(ProfileFormModalPage, {profileDTO: newProfileDTO});
        profileForm.onDidDismiss((data, role) => {

        });

        profileForm.present();
    }



}
