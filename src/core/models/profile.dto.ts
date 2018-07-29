import {PostDTO} from "./post.dto";

export class ProfileDTO {
    id: string;
    name: string;
    mobile: string;
    post: PostDTO;
    additionalPost?: PostDTO
}