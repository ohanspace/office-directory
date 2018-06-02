import {Injectable} from '@angular/core';
import {Office} from "../../models/office";
import {OfficeRepositoryFb} from "./office-repository.fb";
import {Observable} from "rxjs/Observable";

@Injectable()
export class OfficeServiceProvider {

  constructor(private officeRepoFb: OfficeRepositoryFb) {

    console.log("office service constructed");
  }

  public getAll() : Observable<Office[]> {
     return this.officeRepoFb.getAll();
  }

  public saveAll(offices: Office[]) {
      this.officeRepoFb.saveAll(offices);
  }

  public getById(id: string): Observable<Office> {
      return this.officeRepoFb.getById(id);
  }


}
