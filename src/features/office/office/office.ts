import {Component} from '@angular/core';
import {ModalController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {Office} from "../../../core/models/office";
import {OfficeController} from "../../../core/controllers/office-controller";
import {ProfileController} from "../../../core/controllers/profile-controller";
import {ProfileFormModalPage} from "../../profile/profile-form-modal/profile-form-modal";
import {ProfileFactory} from "../../../core/factory/profile-factory";
import {ProfileFilterSettings} from "../../popovers/profile-filter-settings";
import {Profile} from "../../../core/models/profile";

@Component({
    selector: 'page-office',
    templateUrl: 'office.html',
})
export class OfficePage {
    office: Office;
    profiles: Profile[];
    filterOptions: any = {
        bloodGroup: null,
        officeId: null,
        designationId: null,
        departmentId: null
    };

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private officeCtrl: OfficeController,
                private modalCtrl: ModalController,
                private popoverCtrl: PopoverController,
                private profileCtrl: ProfileController) {

        const officeId = this.navParams.get('officeId');
        if (!officeId) {
            console.log('no office with the id');
        }

        this.officeCtrl.getOfficeWithProfiles$(officeId).subscribe(ofc => {
            this.office = ofc;
            this.profiles = ofc.profiles;
            //console.log(ofc);
        });
    }

    showFilterSettings(event) {
        this.filterOptions.officeId = this.office.id;
        let popover = this.popoverCtrl.create(ProfileFilterSettings, {filterOptions: this.filterOptions});
        popover.onDidDismiss((data, role) => {
            if (role == 'apply'){
                this.applyFilter(data);
            }
        });
        popover.present({
            ev: event
        });
    }

    private applyFilter(filterOptions) {
        this.filterOptions = filterOptions;
        console.log(filterOptions);
        this.profileCtrl.getProfilesByFilters$(filterOptions).subscribe(profiles => {
            console.log(profiles);
            this.profiles = profiles;
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
