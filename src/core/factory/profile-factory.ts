import {ProfileDTO} from "../models/profile.dto";
import {Profile} from "../models/profile";

export class ProfileFactory {
    static createEmptyProfileDTO() {
        let profileDTO = new ProfileDTO();
        profileDTO.id = null;
        profileDTO.officialId = null;
        profileDTO.name = null;
        profileDTO.mobile = null;
        profileDTO.bloodGroup = null;
        profileDTO.birthday = null;
        profileDTO.hasAdditionalCharge = false;
        profileDTO.inCharge = {officeId: null, designationId: null, departmentId: null};
        profileDTO.additionalCharge = {officeId: null, designationId: null, departmentId: null};
        profileDTO.address = {present: null, permanent: null};

        return profileDTO;
    }

    static profileToProfileDTO(profile: Profile) {
        let profileDTO = new ProfileDTO();
        profileDTO.id = profile.id;
        profileDTO.officialId = profile.officialId;
        profileDTO.name = profile.name;
        profileDTO.mobile = profile.mobile;
        profileDTO.bloodGroup = profile.bloodGroup;
        profileDTO.birthday = profile.birthday;
        profileDTO.address = profile.address;
        profileDTO.hasAdditionalCharge = !!profile.additionalCharge.office.id;
        profileDTO.inCharge = {
            officeId: profile.inCharge.office.id,
            departmentId: profile.inCharge.department.id,
            designationId: profile.inCharge.designation.id
        };
        profileDTO.additionalCharge = {
            officeId: profile.additionalCharge.office.id,
            departmentId: profile.additionalCharge.department.id,
            designationId: profile.additionalCharge.designation.id
        };

        return profileDTO;
    }


    static profileDTOtoProfile(profileDTO: ProfileDTO) {
        return new Profile();
    }
}