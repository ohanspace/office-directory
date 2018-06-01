import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {Designation} from "../../models/designation";

@Injectable()
export class DesignationRepositoryFb {
    data$ = new BehaviorSubject([
        {id: '1', name: 'Manager'},
        {id: '2', name: 'Assistant Manager'}
    ]);

    constructor() {

    }


}