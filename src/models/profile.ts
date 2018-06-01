import {Post, PostFb} from "./post";

export interface ProfileFb {
    id: string;
    employeeId: string;
    name: string;
    mobile: string;
    bloodGroup: string,
    telephone: string,
    email: string;
    presentAddress: string,
    post: PostFb,
    additionalPost?: PostFb
}

export class Profile {
    id: string;
    employeeId?: string;
    name: string;
    mobile: string;

    post: Post;
    additionalPost?: Post;

    bloodGroup?: string;

    telephone?: string;
    email: string;

    presentAddress: string;
}

