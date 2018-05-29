import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello ProfileCardMiniComponent Component');
    this.text = 'Hello World';
  }

}
