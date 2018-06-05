import {Post} from "./post";

export class Employee {
    id: string;
    name: string;
    mobile: string;
    post: Post;
    additionalPost?: Post;
}