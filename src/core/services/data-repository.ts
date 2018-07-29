import {OfficeDTO} from "../models/office.dto";
import {ProfileDTO} from "../models/profile.dto";
import {DepartmentDTO} from "../models/department.dto";
import {DesignationDTO} from "../models/designation.dto";
import {OfficeType} from "../models/office-type";
import {Observable} from "rxjs/Observable";

export abstract class DataRepository {
    abstract getAllOfficeTypes(): OfficeType[];
    abstract getOfficeTypeById(typeId: string): OfficeType;

    abstract getAllOffices$(): Observable<OfficeDTO[]>;
    abstract getOfficeById$(officeId: string): Observable<OfficeDTO>;
    abstract saveOffice(officeDTO: OfficeDTO): Promise<void>;

    abstract getAllDepartments$(): Observable<DepartmentDTO[]>;
    abstract getDepartmentById$(departmentId: string): Observable<DepartmentDTO>;
    abstract saveDepartment(departmentDTO: DepartmentDTO): Promise<void>;

    abstract getAllDesignations$(): Observable<DesignationDTO[]>;
    abstract getDesignationById$(designationId: string): Observable<DesignationDTO>;
    abstract saveDesignation(designationDTO: DesignationDTO): Promise<void>;

    abstract getAllProfiles$(): Observable<ProfileDTO[]>;
    abstract getAllProfilesByFilter$(officeId?: string, departmentId?: string, designationId?: string ): Observable<ProfileDTO[]>;
    abstract getProfileById$(profileId: string): Observable<ProfileDTO>;
    abstract getProfileByMobile$(mobile: string): Observable<ProfileDTO>;
    abstract saveProfile(profileDTO: ProfileDTO): Promise<void>;
}