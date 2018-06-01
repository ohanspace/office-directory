import {PostFb} from "../../models/post";
import {Injectable} from "@angular/core";
import {DesignationServiceProvider} from "../designation-service/designation-service";
import {DepartmentServiceProvider} from "../department-service/department-service";
import {OfficeServiceProvider} from "../office-service/office-service";

@Injectable()
export class PostFactory {
    constructor(designationService: DesignationServiceProvider,
                departmentService: DepartmentServiceProvider,
                officeService: OfficeServiceProvider) {

    }

    create(postData: PostFb) {

    }
}