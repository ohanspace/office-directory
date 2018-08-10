import {Component} from "@angular/core";
import {OfficeController} from "../../core/controllers/office-controller";
import {ProfileController} from "../../core/controllers/profile-controller";
import {NavParams, ViewController} from "ionic-angular";

@Component({
    templateUrl: 'profile-filter-settings.html'
})
export class ProfileFilterSettings {
    filterOptions:any;
    bloodGroups = this.profileCtrl.getBloodGroups();
    offices = this.officeCtrl.getAllOffices$();
    designations = this.officeCtrl.getAllDesignations$();
    departments = this.officeCtrl.getAllDepartments$();

    constructor(private officeCtrl: OfficeController,
                private profileCtrl: ProfileController,
                private navParams: NavParams,
                private viewCtrl: ViewController) {
        this.filterOptions = this.navParams.get('filterOptions');
    }

    apply() {
        this.viewCtrl.dismiss(this.filterOptions, 'apply')
    }
}