import {Profile} from "./profile";

export class Office {
    id: string;
    name: string;
    type?: string;

    profiles?: Profile[];
    setProfiles(profiles: Profile[]){
        this.profiles = profiles;
    }
}

