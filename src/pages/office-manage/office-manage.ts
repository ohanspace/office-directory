import { Component } from '@angular/core';
import {NavController, NavParams, reorderArray} from 'ionic-angular';
import {Office} from "../../core/models/office";


@Component({
  selector: 'page-office-manage',
  templateUrl: 'office-manage.html',
})
export class OfficeManagePage {
  offices: Office[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

  }

  ionViewDidLoad() {
      // this.officeService.getAll().subscribe(offices =>
      //     this.offices = offices
      // );
  }

  reorderItems(indexes) {
    // this.offices = reorderArray(this.offices, indexes);
    // this.officeService.saveAll(this.offices);
  }

}
