import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {Designation} from "../../models/designation";
import {DesignationTransformer} from "./designation-transformer";
import "rxjs/add/operator/share";
import "rxjs/add/operator/map";

@Injectable()
export class DesignationRepositoryFb {
    data$ = new BehaviorSubject([
        {id: '1', name: 'Manager'},
        {id: '2', name: 'Assistant Manager'}
    ]);

    designations$ : Observable<Designation[]>;
    constructor() {
        //Eager load
        this.designations$ = this.getAll().share();

    }

    getAll(): Observable<Designation[]> {
        return this.data$.map(values =>
            (new DesignationTransformer()).toDomainModelArray(values)
        )
    }

    getById(id: string): Observable<Designation> {

        return this.designations$.map(values =>
            values.filter(value => value.id === id)[0]
        );
    }


}