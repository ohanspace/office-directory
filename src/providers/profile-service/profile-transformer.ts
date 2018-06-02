import {Injectable} from "@angular/core";
import {Profile, ProfileFb} from "../../models/profile";
import {PostTransformer} from "../post-service/post-transformer";

@Injectable()
export class ProfileTransformer {
    constructor(private postFactory: PostTransformer){

    }


    async toDomainModel(data: ProfileFb): Promise<Profile> {
        let profile = new Profile();

        let post = await this.postFactory.create(data.post);
        let additionalPost = await this.postFactory.create(data.additionalPost);

        profile.id = data.id;
        profile.employeeId = data.employeeId;
        profile.name = data.name;
        profile.mobile = data.mobile;
        profile.post = post;
        profile.additionalPost = additionalPost;
        profile.bloodGroup = data.bloodGroup;
        profile.telephone = data.telephone;
        profile.email = data.email;
        profile.presentAddress = data.presentAddress;

        return profile;

    }

    async toDomainModelArray(inArr: ProfileFb[]): Promise<Profile[]> {
        let outArr = [];
        for(let i = 0; i < inArr.length; i++){
            let d = await this.toDomainModel(inArr[i]);
            outArr.push(d);
        }

        return outArr;
    }
}