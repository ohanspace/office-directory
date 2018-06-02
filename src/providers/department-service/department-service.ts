import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Department} from "../../models/department";
import {DepartmentRepositoryFb} from "./department-repository.fb";

@Injectable()
export class DepartmentServiceProvider {

    constructor(private departmentRepo: DepartmentRepositoryFb) {
    }

    getAll() {
        return this.departmentRepo.getAll();
    }

    getById(id: string): Observable<Department> {
        return this.departmentRepo.getById(id);
    }

}
