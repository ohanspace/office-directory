import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProfilePage} from "../../features/profile/profile/profile";
import {Profile} from "../../core/models/profile";


@Component({
  selector: 'page-profile-list',
  templateUrl: 'profile-list.html',
})
export class ProfileListPage {
  profiles: Profile[] = [];

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {

  }

  onClickProfile(profile: Profile) {
    this.navCtrl.push(ProfilePage, {
      profile: profile
    });

  }

}
