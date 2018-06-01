import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {Profile} from "../../models/profile";

@Injectable()
export class ProfileRepositoryFb {
    data$ = new BehaviorSubject([
        {id: '1', employeeId: '101', name: 'borhan chowdhury', mobile: '01922503521', bloodGroup: 'A+',
            telephone: '8865235445', email: 'borhan.chittagong@gmail.com', presentAddress: 'chittagong',
            post: {designationId: '1', departmentId: '1', officeId: '2'},
            additionalPost: {designationId: '1', departmentId: '2', officeId: '2'}
        }
    ]);


    constructor() {

    }


}