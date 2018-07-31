import {DataRepository} from "./data-repository";
import {Observable} from "rxjs/Observable";
import {DepartmentDTO} from "../models/department.dto";
import {DesignationDTO} from "../models/designation.dto";
import {OfficeDTO} from "../models/office.dto";
import {ProfileDTO} from "../models/profile.dto";
import {AngularFirestore} from "angularfire2/firestore";
import {Injectable} from "@angular/core";
import {Office} from "../models/office";
import {Department} from "../models/department";
import firebase from "firebase/app";
import {Designation} from "../models/designation";

@Injectable()
export class FirebaseDataRepository extends DataRepository {

    constructor(private afDb: AngularFirestore) {
        super();
    }


    getAllOffices$(): Observable<Office[]> {
        return this.afDb.collection('data').doc('offices')
            .valueChanges()
            .map(officesObj => {
                return Object.keys(officesObj).map(ofcId => {
                    let ofcData = officesObj[ofcId];
                    let office = new Office();
                    office.id = ofcData.id;
                    office.name = ofcData.name;
                    office.type = ofcData.type;
                    return office;
                })
            });
    }

    saveOffice(officeDTO: OfficeDTO): Promise<void> {
        if (!officeDTO.id) {
            officeDTO.id = this.afDb.createId();
        }

        console.log(officeDTO);
        return this.afDb.doc('data/offices').update({
            [officeDTO.id]: Object.assign({},officeDTO)
        });
    }

    removeOffice(officeId: string): Promise<void> {
        return this.afDb.doc('data/offices').update({
            [officeId] : firebase.firestore.FieldValue.delete()
        });
    }





    getAllDepartments$(): Observable<Department[]> {
        return this.afDb.collection('data').doc('departments')
            .valueChanges()
            .map(departmentObj => {
                return Object.keys(departmentObj).map(departmentId => {
                    let departmentData = departmentObj[departmentId];
                    let department = new Department();
                    department.id = departmentData.id;
                    department.name = departmentData.name;
                    return department;
                })
            });
    }

    saveDepartment(departmentDTO: DepartmentDTO): Promise<void> {
        if (!departmentDTO.id) {
            departmentDTO.id = this.afDb.createId();
        }

        console.log(departmentDTO);
        return this.afDb.doc('data/departments').update({
            [departmentDTO.id]: Object.assign({},departmentDTO)
        });
    }

    removeDepartment(departmentId: string): Promise<void> {
        return this.afDb.doc('data/departments').update({
            [departmentId] : firebase.firestore.FieldValue.delete()
        });
    }


    /*
    **  Designation
     */

    getAllDesignations$(): Observable<Designation[]> {
        return this.afDb.collection('data').doc('designations')
            .valueChanges()
            .map(designationsObj => {
                return Object.keys(designationsObj).map(designationId => {
                    let designationData = designationsObj[designationId];
                    let designation = new Designation();
                    designation.id = designationData.id;
                    designation.name = designationData.name;
                    return designation;
                })
            });
    }

    saveDesignation(designationDTO: DesignationDTO): Promise<void> {
        if (!designationDTO.id) {
            designationDTO.id = this.afDb.createId();
        }

        console.log(designationDTO);
        return this.afDb.doc('data/designations').update({
            [designationDTO.id]: Object.assign({},designationDTO)
        });
    }

    removeDesignation(designationId: string) {
        return this.afDb.doc('data/designations').update({
            [designationId] : firebase.firestore.FieldValue.delete()
        });
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

    saveProfile(profileDTO: ProfileDTO): Promise<void> {
        return undefined;
    }

    getProfilesByOfficeId$(officeId: string): Observable<ProfileDTO[]> {
        return undefined;
    }

}