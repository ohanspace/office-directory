import {DataRepository} from "../services/data-repository";
import {Observable} from "rxjs";
import {Office} from "../models/office";
import 'rxjs/add/operator/map';
import {of} from "rxjs/internal/observable/of";
import {OfficeType} from "../models/office-type";
import {Designation} from "../models/designation";
import {Department} from "../models/department";
import {Injectable} from "@angular/core";

@Injectable()
export class OfficeController {
    repo: DataRepository;
    constructor(repo: DataRepository){
        this.repo = repo;
    }

    getOfficeTypes(): OfficeType[] {
        return this.repo.getAllOfficeTypes();
    }

    getAllOffices$(): Observable<Office[]> {
        return this.repo.getAllOffices$().map(offices => {
           return offices.map(officeDTO => <Office> officeDTO);
        });
    }

    getOfficeById$(officeId: string): Observable<Office> {
        return this.repo.getOfficeById$(officeId).map(officeDTO => {
            if (officeDTO) {
                return <Office> officeDTO;
            }else {
                of(null);
            }
        });
    }



    getAllDesignations$(): Observable<Designation[]> {
        return this.getAllDesignations$().map(designationDTOs => {
            return designationDTOs.map(dto => <Designation> dto);
        })
    }


    getAllDepartments$(): Observable<Department[]> {
        return this.repo.getAllDepartments$().map(departmentDTOs => {
            return departmentDTOs.map(dto => <Department> dto);
        })
    }
}