import {Observable} from "rxjs/Observable";
import {Profile} from "../models/profile";
import {DataRepository} from "../services/data-repository";
import {Injectable} from "@angular/core";
import {ProfileDTO} from "../models/profile.dto";

@Injectable()
export class ProfileController {

    constructor(private repo: DataRepository){}

    getBloodGroups(): string[] {
        return ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    }

    getProfilesByOfficeId$(officeId: string): Observable<Profile[]> {
        return this.repo.getProfilesByOfficeId$(officeId);
    }

    getProfileById$(profileId: string): Observable<Profile>{
        return this.repo.getProfileById$(profileId);
    }

    getProfilesByFilters$(filterOptions: any): Observable<Profile[]> {
        return this.repo.getProfilesByFilters$(filterOptions);
    }

    saveProfile(profileDTO: ProfileDTO): Promise<void> {
        return this.repo.saveProfile(profileDTO);
    }

    removeProfile(profileId: string): Promise<void> {
        return this.repo.removeProfile(profileId);
    }





}