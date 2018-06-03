import {Component, Input} from '@angular/core';
import {Profile} from "../../models/profile";

@Component({
  selector: 'profile-card',
  templateUrl: 'profile-card.html'
})
export class ProfileCardComponent {
  @Input() profile: Profile;

  constructor() {
  }

}
