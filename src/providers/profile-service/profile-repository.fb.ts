import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {Profile} from "../../models/profile";
import {ProfileTransformer} from "./profile-transformer";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/switchMap";

@Injectable()
export class ProfileRepositoryFb {
    data$ = new BehaviorSubject([
        {id: '1', employeeId: '101', name: 'borhan chowdhury', mobile: '01922503521', bloodGroup: 'A+',
            telephone: '8865235445', email: 'borhan.chittagong@gmail.com', presentAddress: 'chittagong',
            post: {designationId: '1', departmentId: '1', officeId: '2'},
            additionalPost: {designationId: '1', departmentId: '2', officeId: '2'}
        },
        {id: '2', employeeId: '101', name: 'borhan chowdhury', mobile: '01922503521', bloodGroup: 'A+',
            telephone: '8865235445', email: 'borhan.chittagong@gmail.com', presentAddress: 'chittagong',
            post: {designationId: '1', departmentId: '1', officeId: '2'},
            additionalPost: {designationId: '1', departmentId: '2', officeId: '2'}
        }
    ]);

    profiles$: Observable<Profile>;

    constructor(private profileTransformer: ProfileTransformer) {

    }

    getAll(): Observable<Profile[]> {
        return this.data$.switchMap(values =>
            Observable.fromPromise(this.profileTransformer.toDomainModelArray(values))
        )
    }


}