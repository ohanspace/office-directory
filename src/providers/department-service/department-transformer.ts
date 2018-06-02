import {Transformer} from "../transformer";
import {Department, DepartmentFb} from "../../models/department";

export class DepartmentTransformer extends Transformer<Department, DepartmentFb>{
    toDomainModel(data: DepartmentFb): Department {
        return new Department(data.id, data.name);
    }

    toFbModel(data: Department): DepartmentFb {
        return {
            id: data.id,
            name: data.name
        };
    }

}