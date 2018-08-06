import {Component, Input} from '@angular/core';
import {Profile} from "../../core/models/profile";
import {AlertController, ModalController, NavController} from "ionic-angular";
import {ProfilePage} from "../../features/profile/profile/profile";
import {ProfileFormModalPage} from "../../features/profile/profile-form-modal/profile-form-modal";
import {ProfileFactory} from "../../core/factory/profile-factory";
import {ProfileController} from "../../core/controllers/profile-controller";

@Component({
  selector: 'profile-list',
  templateUrl: 'profile-list.html'
})
export class ProfileListComponent {
    @Input() profiles: Profile[];

    constructor(private navCtrl: NavController,
                private modalCtrl: ModalController,
                private alertCtrl: AlertController,
                private profileCtrl: ProfileController) {

    }

    openProfile(profileId: string){
        this.navCtrl.push(ProfilePage, {
            profileId: profileId
        });
    }

    editProfile(profile: Profile){
        let profileDTO = ProfileFactory.profileToProfileDTO(profile);
        let profileFormModal = this.modalCtrl.create(ProfileFormModalPage, {profileDTO: profileDTO});
        profileFormModal.onDidDismiss((data, role) => {
           if (role == 'saved'){

           }
        });
        profileFormModal.present();
    }

    removeProfileAlert(profileId: string) {
        const confirm = this.alertCtrl.create({
            title: 'Proceed To remove?',
            message: 'This item will be permanently lost',
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                    }
                },
                {
                    text: 'Agree',
                    handler: () => {
                        this.removeProfile(profileId);
                    }
                }
            ]
        });
        confirm.present();
    }

    private removeProfile(profileId: string) {
        this.profileCtrl.removeProfile(profileId).then(() => {
            //item deleted
        });
    }
}
