import { Component } from '@angular/core';

/**
 * Generated class for the ProfileCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-card',
  templateUrl: 'profile-card.html'
})
export class ProfileCardComponent {

  text: string;

  constructor() {
    console.log('Hello ProfileCardComponent Component');
    this.text = 'Hello World';
  }

}
