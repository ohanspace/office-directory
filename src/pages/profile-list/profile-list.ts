import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProfileServiceProvider} from "../../providers/profile-service/profile-service";
import {Profile} from "../../models/profile";

/**
 * Generated class for the ProfileListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile-list',
  templateUrl: 'profile-list.html',
})
export class ProfileListPage {
  profiles: Profile[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public profileService: ProfileServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileListPage');
    this.profileService.getAll().subscribe(profiles => this.profiles = profiles);
  }

}
