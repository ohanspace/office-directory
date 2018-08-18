import {UserDTO} from "../models/user.dto";
import {Profile} from "../models/profile";
import {User} from "../models/user";

export class UserFactory {
    static UserFromUserDTOandProfile(userDTO: UserDTO, profile: Profile): User {
        profile.uid = userDTO.uid;

        let user = new User();
        user.id = userDTO.uid;
        user.profile = profile;
        return user;
    }
}