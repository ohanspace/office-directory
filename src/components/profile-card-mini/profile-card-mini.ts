import {Component, Input} from '@angular/core';
import {Profile} from "../../models/profile";

/**
 * Generated class for the ProfileCardMiniComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
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
