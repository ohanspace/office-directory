import {Component, Input} from '@angular/core';
import {Profile} from "../../core/models/profile";
import {CallNumber} from "@ionic-native/call-number";
import {Contacts, Contact, ContactName, ContactField} from '@ionic-native/contacts';
import {ToastController} from "ionic-angular";

@Component({
  selector: 'profile-card',
  templateUrl: 'profile-card.html'
})
export class ProfileCardComponent {
  @Input() profile: Profile;

  constructor(private callNumber: CallNumber,
              private contacts: Contacts,
              private toastCtrl: ToastController) {

  }

  callToNumber(number: string) {
    if (this.callNumber.isCallSupported()) {
      this.callNumber.callNumber(number, true);
    }
  }

  saveContact() {

      let contact: Contact = this.contacts.create();
      console.log(contact);

        contact.name = new ContactName(null, null, 'John');
        console.log(contact.name);
        contact.phoneNumbers = [new ContactField('mobile', '01922503521')];
        contact.save().then(
            () => this.showToast("contact saved!"),
            (error: any) => console.error('Error saving contact.', error)
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
