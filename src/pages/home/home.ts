import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {OfficeController} from "../../core/office-controller";
import {MockDataRepository} from "../../core/mock-data-repository";
import {Office} from "../../core/models/office";
import {Employee} from "../../core/models/employee";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  offices: Office[];
  employees: Employee[];
  constructor(public navCtrl: NavController) {

      let officeController = new OfficeController(new MockDataRepository());
      officeController.getOffices().then(os => this.offices = os);

      officeController.getEmployees('1').then(ems => this.employees = ems);
  }



}
