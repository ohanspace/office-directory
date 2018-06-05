import {Department} from "../../models/department";
import {Designation} from "../../models/designation";
import {Office} from "../../models/office";

export class Post {
    office: Office;
    designation: Designation;
    department?: Department;
}