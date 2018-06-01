import {Injectable} from '@angular/core';
import {Office} from "../../models/office";
import {Observable} from "rxjs/Observable";

import {OfficeTransformer} from "./office-transformer";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class OfficeRepositoryFb {
    data$ = new BehaviorSubject([
        {id: 'corporateoffice', name:"Corporate Office", typeId: "corporate"},
        {id: 'bheramara', name:"Bheramara 410 MW Combined Cycle Power Plant", typeId: "plant"},
        {id: 'sirajgonj-project', name:"Sirajganj 225 MW CCPP (2nd unit-Dual Fuel) Project", typeId: "project"},
    ]);
    offices: Observable<Office[]>;

    public getAll(): Observable<Office[]> {

        return this.data$.map(data =>
            OfficeTransformer.toDomainModelArray(data)
        )
    }

    public saveAll(offices: Office[]){
        let officesFb = OfficeTransformer.toFbModelArray(offices);
        this.data$.next(officesFb);
    }
}