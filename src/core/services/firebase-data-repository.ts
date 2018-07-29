import {DataRepository} from "./data-repository";
import {Observable} from "rxjs/Observable";
import {DepartmentDTO} from "../models/department.dto";
import {DesignationDTO} from "../models/designation.dto";
import {OfficeType} from "../models/office-type";
import {OfficeDTO} from "../models/office.dto";
import {ProfileDTO} from "../models/profile.dto";
import {AngularFirestore} from "angularfire2/firestore";
import {Injectable} from "@angular/core";

@Injectable()
export class FirebaseDataRepository extends DataRepository{
    readonly officeTypes = [
        {id: 'corporate', name: 'Corporate'},
        {id: 'power-plant', name: 'Power Plant'},
        {id: 'project', name: 'Project'},
    ];

    constructor(private afDb: AngularFirestore) {
        super();
    }

    getAllOfficeTypes(): OfficeType[] {
        return this.officeTypes;
    }

    getAllOffices$(): Observable<OfficeDTO[]> {
        return this.afDb.collection<OfficeDTO>('offices').valueChanges();
    }


    getOfficeTypeById(typeId: string): OfficeType {
        return this.officeTypes.find(ofc => ofc.id === typeId);
    }


    getAllDepartments$(): Observable<DepartmentDTO[]> {
        return undefined;
    }

    getAllDesignations$(): Observable<DesignationDTO[]> {
        return undefined;
    }





    getAllProfiles$(): Observable<ProfileDTO[]> {
        return undefined;
    }

    getAllProfilesByFilter$(officeId?: string, departmentId?: string, designationId?: string): Observable<ProfileDTO[]> {
        return undefined;
    }

    getDepartmentById$(departmentId: string): Observable<DepartmentDTO> {
        return undefined;
    }

    getDesignationById$(designationId: string): Observable<DesignationDTO> {
        return undefined;
    }

    getOfficeById$(officeId: string): Observable<OfficeDTO> {
        return undefined;
    }


    getProfileById$(profileId: string): Observable<ProfileDTO> {
        return undefined;
    }

    getProfileByMobile$(mobile: string): Observable<ProfileDTO> {
        return undefined;
    }

    saveDepartment(departmentDTO: DepartmentDTO): Promise<void> {
        return undefined;
    }

    saveDesignation(designationDTO: DesignationDTO): Promise<void> {
        return undefined;
    }

    saveOffice(officeDTO: OfficeDTO): Promise<void> {
        return undefined;
    }

    saveProfile(profileDTO: ProfileDTO): Promise<void> {
        return undefined;
    }

}