import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmployeeCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-employee-create',
  templateUrl: 'employee-create.html',
})
export class EmployeeCreatePage {

  hasAdditionalCharge = true;
  phones = [
      {value: '1'},
      {value: '2'}
  ]

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeCreatePage');
  }

  onChangePhone() {
    console.log(this.phones);
  }

}
