import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
