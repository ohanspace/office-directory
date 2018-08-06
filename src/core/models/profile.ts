import {Post} from "./post";

export class Profile {
    id: string;
    uid: string;
    officialId: string;
    name: string;
    mobile: string;
    bloodGroup: string;
    birthday: string;
    inCharge: Post;
    additionalCharge?: Post;
    address?: { present: string, permanent: string };
}