import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {OfficeServiceProvider} from "../../providers/office-service/office-service";
import {Office} from "../../models/office";

/**
 * Generated class for the OfficeManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-office-manage',
  templateUrl: 'office-manage.html',
})
export class OfficeManagePage {
  officesMap: Map<string, Office>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public officeService: OfficeServiceProvider) {

    this.officesMap = this.officeService.officesMap;
  }

  ionViewDidLoad() {

  }

}
