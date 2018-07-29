import {Department} from "./department";
import {Designation} from "./designation";
import {Office} from "./office";

export class Post {
    office: Office;
    designation: Designation;
    department?: Department;
}