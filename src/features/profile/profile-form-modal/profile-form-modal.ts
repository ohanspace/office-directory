import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {ProfileDTO} from "../../../core/models/profile.dto";
import {OfficeController} from "../../../core/controllers/office-controller";
import {ProfileController} from "../../../core/controllers/profile-controller";
import {Designation} from "../../../core/models/designation";
import {Department} from "../../../core/models/department";

@Component({
    selector: 'page-profile-form-modal',
    templateUrl: 'profile-form-modal.html',
})
export class ProfileFormModalPage {
    profileDTO: ProfileDTO;
    bloodGroups = this.profileCtrl.getBloodGroups();
    offices = this.officeCtrl.getAllOffices$();
    designations = this.officeCtrl.getAllDesignations$();
    departments = this.officeCtrl.getAllDepartments$();

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private officeCtrl: OfficeController,
                private profileCtrl: ProfileController,
                private viewCtrl: ViewController) {
        this.profileDTO = this.navParams.get('profileDTO');

    }


    save() {
        console.log(this.profileDTO);
        this.profileCtrl.saveProfile(this.profileDTO).then(() => {
            this.viewCtrl.dismiss(null, 'saved');
        }).catch(err => {
            console.log(err);
        });
    }

    close() {
        this.viewCtrl.dismiss();
    }


}
