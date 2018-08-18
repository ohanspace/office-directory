import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FavoriteProfile} from "../../core/models/user";
import {FavoriteController} from "../../core/controllers/favorite-controller";
import {ProfilePage} from "../profile/profile/profile";


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  favoriteProfiles: FavoriteProfile[];


  constructor(public navCtrl: NavController,
              private favCtrl: FavoriteController) {


  }


  ionViewDidLoad() {
      this.favCtrl.getUserFavoriteProfiles$().subscribe(favProfiles => {
          //console.log(favProfiles);
          this.favoriteProfiles = favProfiles;

      })
  }

  openProfile(profileId: string) {
      this.navCtrl.push(ProfilePage, {profileId: profileId});
  }

}
