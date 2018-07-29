import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Office} from "../../core/models/office";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  offices: Office[];
  constructor(public navCtrl: NavController) {

  }



}
