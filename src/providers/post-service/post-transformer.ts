import {Post, PostFb} from "../../models/post";
import {Injectable} from "@angular/core";
import {DesignationServiceProvider} from "../designation-service/designation-service";
import {DepartmentServiceProvider} from "../department-service/department-service";
import {OfficeServiceProvider} from "../office-service/office-service";
import "rxjs/add/operator/first";

@Injectable()
export class PostTransformer{

    constructor(private designationService: DesignationServiceProvider,
                private departmentService: DepartmentServiceProvider,
                private officeService: OfficeServiceProvider) {
    }


    async create(fbModel: PostFb): Promise<Post> {
        let office = await this.officeService.getById(fbModel.officeId).first().toPromise();
        let designation = await this.designationService.getById(fbModel.designationId).first().toPromise();
        let department = await this.departmentService.getById(fbModel.departmentId).first().toPromise();
        return new Post(office, designation, department);
    }

    toFbModel(domainModel: Post): PostFb {
        return undefined;
    }
}