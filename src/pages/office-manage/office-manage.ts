import { Component } from '@angular/core';
import {NavController, NavParams, reorderArray} from 'ionic-angular';
import {OfficeServiceProvider} from "../../providers/office-service/office-service";
import {Office} from "../../models/office";


@Component({
  selector: 'page-office-manage',
  templateUrl: 'office-manage.html',
})
export class OfficeManagePage {
  offices: Office[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public officeService: OfficeServiceProvider) {

  }

  ionViewDidLoad() {
      this.officeService.getAll().subscribe(offices =>
          this.offices = offices
      );
  }

  reorderItems(indexes) {
    this.offices = reorderArray(this.offices, indexes);
    this.officeService.saveAll(this.offices);
  }

}
