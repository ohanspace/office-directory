import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {Department} from "../../models/department";
import {DepartmentTransformer} from "./department-transformer";
import "rxjs/add/operator/share";
import "rxjs/add/operator/map";

@Injectable()
export class DepartmentRepositoryFb {
    data$ = new BehaviorSubject([
        {id: '1', name: 'HR dept'},
        {id: '2', name: 'Engineering Dept'}
    ]);

    departments$ : Observable<Department[]>;
    constructor() {
        //Eager load
        this.departments$ = this.getAll().share();

    }

    getAll(): Observable<Department[]> {
        return this.data$.map(values =>
            (new DepartmentTransformer()).toDomainModelArray(values)
        )
    }

    getById(id: string): Observable<Department> {

        return this.departments$.map(values =>
            values.filter(value => value.id === id)[0]
        );
    }


}