import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Designation} from "../../models/designation";
import {DesignationRepositoryFb} from "./designation-repository.fb";

@Injectable()
export class DesignationServiceProvider {

  constructor(private designationRepo: DesignationRepositoryFb) {
  }

  getAll() {
    return this.designationRepo.getAll();
  }

  getById(id: string): Observable<Designation> {
    return this.designationRepo.getById(id);
  }

}
