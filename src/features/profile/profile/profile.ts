import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Profile} from "../../../core/models/profile";
import {ProfileController} from "../../../core/controllers/profile-controller";


@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
})
export class ProfilePage {

    profile: Profile;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private profileCtrl: ProfileController) {
        let profileId = this.navParams.get('profileId');
        this.profileCtrl.getProfileById$(profileId).subscribe(profile => {
            this.profile = profile;
        })
    }

}
