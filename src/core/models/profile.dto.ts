import {PostDTO} from "./post.dto";

export class ProfileDTO {
    id: string;
    officialId: string;
    name: string;
    mobile: string;
    post: PostDTO;
    additionalPost?: PostDTO;
    address: { present: string, permanent: string };
}