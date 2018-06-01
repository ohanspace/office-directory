import {OfficeFb} from "../../models/office.fb";
import {Profile} from "../../models/profile";
import {ProfileFb} from "../../models/profile";

export class ProfileTransformer {

    constructor() {

    }

    toDomainModelArray(data: ProfileFb[]): Profile[] {
        let profiles = [];
        for(let i = 0; i < data.length; i++){
            let profile = this.toDomainModel(data[i]);
            profiles.push(profile);
        }

        return profiles;
    }

    toDomainModel(data: ProfileFb): Profile {

    }

    toFbModelArray(profiles: Profile[]): ProfileFb[]{
        let result = [];
        profiles.map(office =>
            result.push( this.toFbModel(office))
        );

        return result;
    }

    toFbModel(profile: Profile): OfficeFb {
        return {

        };
    }
}