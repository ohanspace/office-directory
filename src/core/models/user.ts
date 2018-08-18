import {Profile} from "./profile";
export class FavoriteProfile {
    id: string;
    name: string;
}
export class User {
    id: string;
    profile: Profile;
}
