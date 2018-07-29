import {Post} from "./post";

export class Profile {
    id: string;
    officialId: string;
    name: string;
    mobile: string;
    post: Post;
    additionalPost?: Post;
    address: { present: string, permanent: string };
}