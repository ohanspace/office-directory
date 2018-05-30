import { Injectable } from '@angular/core';
import {Office} from "../../models/office";
import {OfficeType} from "../../models/office-type";
import _ from 'lodash';

@Injectable()
export class OfficeServiceProvider {
  public officeTypesMap= new Map<string, OfficeType>();
  public officesMap= new Map<string, Office>();


  constructor() {
    this.initOfficeTypes();
    this.initOffices();
    console.log("office service constructed");
  }



  private initOfficeTypes() {
    this.officeTypesMap = new Map([
        ['corporate', new OfficeType('corporate', 'Corporate Office')],
        ['plant', new OfficeType('plant', 'Power Plant')],
        ['project', new OfficeType('project', 'Project')],
    ]);

  }

  private initOffices() {
    const officesData = [
        {id: 'corporateoffice', name:"Corporate Office", typeId: "corporate"},
        {id: 'bheramara', name:"Bheramara Power Plant", typeId: "plant"},
        {id: 'bheramara-project', name:"Bheramara CCPP Project", typeId: "project"},
    ];
    for(let i = 0; i < officesData.length; i++){

      let office = new Office(
          officesData[i].id,
          officesData[i].name,
          this.officeTypesMap.get(officesData[i].typeId)
      );
      this.officesMap.set(office.id, office);

    }
  }

}
