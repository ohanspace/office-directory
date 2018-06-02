import {Injectable} from '@angular/core';
import {ProfileRepositoryFb} from "./profile-repository.fb";
import {Observable} from "rxjs/Observable";
import {Profile} from "../../models/profile";

@Injectable()
export class ProfileServiceProvider {

  constructor(private profileRepo: ProfileRepositoryFb) {
  }

  getAll(): Observable<Profile[]> {
    return this.profileRepo.getAll();
  }

}
