import {Component, Input} from '@angular/core';
import {Profile} from "../../core/models/profile";

@Component({
  selector: 'profile-card-mini',
  templateUrl: 'profile-card-mini.html'
})
export class ProfileCardMiniComponent {
  @Input() profile: Profile;

  constructor() {

  }

  onCardClick() {

  }

}
