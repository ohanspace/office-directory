import {DataRepository} from "../services/data-repository";
import {Observable} from "rxjs";
import {Office} from "../models/office";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {of} from "rxjs/internal/observable/of";
import {Designation} from "../models/designation";
import {Department} from "../models/department";
import {Injectable} from "@angular/core";
import {OfficeFactory} from "../factory/office-factory";
import {ProfileController} from "./profile-controller";
import {DepartmentDTO} from "../models/department.dto";
import {DesignationDTO} from "../models/designation.dto";
import {OfficeDTO} from "../models/office.dto";

@Injectable()
export class OfficeController {
    repo: DataRepository;
    constructor(repo: DataRepository,
                private profileCtrl: ProfileController){
        this.repo = repo;
    }

    getOfficeTypes(): string[] {
        return this.repo.getAllOfficeTypes();
    }

    getAllOffices$(): Observable<Office[]> {
        return this.repo.getAllOffices$().map(offices => {
            return offices.sort((obj1,obj2) => {
                return obj1.order - obj2.order;
            })
        });
    }

    saveOffice(officeDTO: OfficeDTO): Promise<void> {
        return this.repo.saveOffice(officeDTO);
    }

    removeOffice(officeId: string): Promise<void> {
        return this.repo.removeOffice(officeId);
    }

    reorderOffices(offices: Office[], from: number, to: number) {
        let lowerIndex, higherIndex;
        if (from < to) {
            lowerIndex = from;
            higherIndex = to;
        }else {
            lowerIndex = to;
            higherIndex = from;
        }

        for(let i = lowerIndex; i <= higherIndex; i++){
            offices[i].order = i;
            this.saveOffice(offices[i]);
        }

    }



    getOfficeById$(officeId: string): Observable<Office> {
        return this.repo.getOfficeById$(officeId);
    }

    getOfficeWithProfiles$(officeId: string): Observable<Office> {
        return this.repo.getOfficeById$(officeId).switchMap(ofc => {
            return this.profileCtrl.getProfilesByOfficeId$(ofc.id).map(profiles => {
                ofc.setProfiles(profiles);
                return ofc;
            });
        })
    }





    getAllDepartments$(): Observable<Department[]> {
        return this.repo.getAllDepartments$();
    }

    saveDepartment(departmentDTO: DepartmentDTO): Promise<void> {
        return this.repo.saveDepartment(departmentDTO);
    }

    removeDepartment(departmentId: string): Promise<void> {
        return this.repo.removeDepartment(departmentId);
    }




    getAllDesignations$(): Observable<Designation[]> {
        return this.repo.getAllDesignations$();
    }

    saveDesignation(designationDTO: DesignationDTO): Promise<void>{
        return this.repo.saveDesignation(designationDTO);
    }

    removeDesignation(designationId: string): Promise<void> {
        return this.repo.removeDesignation(designationId);
    }
}