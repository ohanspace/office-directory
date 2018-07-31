import {ProfileDTO} from "../models/profile.dto";
import {Profile} from "../models/profile";

export class ProfileFactory {
    static profileDTOtoProfile(profileDTO: ProfileDTO) {
        return new Profile();
    }
}