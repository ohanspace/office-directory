import { Component } from '@angular/core';

/**
 * Generated class for the ProfileListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-list',
  templateUrl: 'profile-list.html'
})
export class ProfileListComponent {

  text: string;

  constructor() {
    console.log('Hello ProfileListComponent Component');
    this.text = 'Hello World';
  }

}
