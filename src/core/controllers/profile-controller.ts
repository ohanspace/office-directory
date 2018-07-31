import {Observable} from "rxjs/Observable";
import {Profile} from "../models/profile";
import {DataRepository} from "../services/data-repository";
import {Injectable} from "@angular/core";
import {ProfileFactory} from "../factory/profile-factory";

@Injectable()
export class ProfileController {

    constructor(private repo: DataRepository){}


    getProfilesByOfficeId$(officeId: string): Observable<Profile[]> {
        return this.repo.getProfilesByOfficeId$(officeId).map(profileDTOs => {
            return profileDTOs.map(profileDTO => ProfileFactory.profileDTOtoProfile(profileDTO));
        })
    }
}