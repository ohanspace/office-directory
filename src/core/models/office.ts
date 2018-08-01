import {Profile} from "./profile";

export class Office {
    id: string;
    name: string;
    type?: string;
    order?: number;

    profiles?: Profile[];
    setProfiles(profiles: Profile[]){
        this.profiles = profiles;
    }
}

