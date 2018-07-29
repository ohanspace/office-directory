import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Office} from "../../core/models/office";
import {OfficeController} from "../../core/controllers/office-controller";

@Component({
    selector: 'page-office-list',
    templateUrl: 'office-list.html',
})
export class OfficeListPage {

    offices: Office[];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                officeCtrl: OfficeController) {
        officeCtrl.getAllOffices$().subscribe(ofcs => {
            this.offices = ofcs;
        })
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad OfficeListPage');
    }

}
