import {OfficeDTO} from "../models/office.dto";
import {ProfileDTO} from "../models/profile.dto";
import {DepartmentDTO} from "../models/department.dto";
import {DesignationDTO} from "../models/designation.dto";
import {Observable} from "rxjs/Observable";
import {Office} from "../models/office";
import {Department} from "../models/department";
import {Designation} from "../models/designation";

export abstract class DataRepository {
    readonly officeTypes = ['Corporate', 'Power Plant', 'Project'];
    getAllOfficeTypes(): string[] {
        return this.officeTypes;
    }

    abstract getAllOffices$(): Observable<Office[]>;
    abstract getOfficeById$(officeId: string): Observable<OfficeDTO>;
    abstract saveOffice(officeDTO: OfficeDTO): Promise<void>;
    abstract removeOffice(officeId: string): Promise<void>;

    abstract getAllDepartments$(): Observable<Department[]>;
    abstract getDepartmentById$(departmentId: string): Observable<DepartmentDTO>;
    abstract saveDepartment(departmentDTO: DepartmentDTO): Promise<void>;
    abstract removeDepartment(departmentId: string): Promise<void>;

    abstract getAllDesignations$(): Observable<Designation[]>;
    abstract getDesignationById$(designationId: string): Observable<DesignationDTO>;
    abstract saveDesignation(designationDTO: DesignationDTO): Promise<void>;
    abstract removeDesignation(designationId: string): Promise<void>;

    abstract getAllProfiles$(): Observable<ProfileDTO[]>;
    abstract getAllProfilesByFilter$(officeId?: string, departmentId?: string, designationId?: string ): Observable<ProfileDTO[]>;
    abstract getProfileById$(profileId: string): Observable<ProfileDTO>;
    abstract getProfileByMobile$(mobile: string): Observable<ProfileDTO>;
    abstract getProfilesByOfficeId$(officeId: string): Observable<ProfileDTO[]>;
    abstract saveProfile(profileDTO: ProfileDTO): Promise<void>;
}