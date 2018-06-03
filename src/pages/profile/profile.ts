import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Profile} from "../../models/profile";


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile: Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.profile = this.navParams.get('profile');
  }

  ionViewDidLoad() {


  }

}
