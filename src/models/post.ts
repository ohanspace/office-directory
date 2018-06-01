import {Office} from "./office";
import {Department} from "./department";
import {Designation} from "./designation";

export class Post {
    office: Office;
    designation: Designation;
    department?: Department;

    constructor(office: Office, designation: Designation, department?: Department) {
        this.office = office;
        this.designation = designation;
        this.department = department;
    }
}

export interface PostFb {
    officeId: string;
    designationId: string;
    departmentId: string;
}