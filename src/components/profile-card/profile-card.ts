import {Component, Input} from '@angular/core';
import {Profile} from "../../core/models/profile";
import {CallNumber} from "@ionic-native/call-number";
import {Contacts, Contact, ContactName, ContactField} from '@ionic-native/contacts';
import {ToastController} from "ionic-angular";
import {FavoriteController} from "../../core/controllers/favorite-controller";

@Component({
    selector: 'profile-card',
    templateUrl: 'profile-card.html'
})
export class ProfileCardComponent {
    @Input() profile: Profile;
    @Input() isFavorite = false;

    constructor(private callNumber: CallNumber,
                private contacts: Contacts,
                private favCtrl: FavoriteController,
                private toastCtrl: ToastController) {

    }


    changeFavorite() {
        this.isFavorite = !this.isFavorite;
        this.favCtrl.changeFavoriteProfile(this.profile, this.isFavorite);
    }

    callToNumber(number: string) {
        if (this.callNumber.isCallSupported()) {
            this.callNumber.callNumber(number, true);
        }
    }

    saveContact() {

        let contact: Contact = this.contacts.create();
        contact.name = new ContactName(null, null, this.profile.name);
        contact.phoneNumbers = [new ContactField('mobile', this.profile.mobile)];
        contact.save().then(
            () => this.showToast("contact saved!"),
            (error: any) => {
                this.showToast('failed to save');
                console.log(error);
            }
        );
    }

    private showToast(message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    }

}
