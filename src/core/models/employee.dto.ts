import {PostDTO} from "./post.dto";

export class EmployeeDTO {
    id: string;
    name: string;
    mobile: string;
    post: PostDTO;
    additionalPost?: PostDTO
}