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
import "rxjs-compat/add/operator/first";
import "rxjs-compat/add/operator/take";
import {Profile} from "../models/profile";

@Injectable()
export class FirebaseDataRepository extends DataRepository {

    constructor(private afDb: AngularFirestore) {
        super();
    }


    /*
    *  PROFILE
    */

    private materializeProfile(data: any): Profile {
        let profile = new Profile();
        profile.id = data.id;
        profile.uid = data.uid || null;
        profile.name = data.name;
        profile.officialId = data.officialId;
        profile.mobile = data.mobile;
        profile.bloodGroup = data.bloodGroup;
        profile.birthday = data.birthday;
        profile.address = data.address;
        profile.inCharge = data.inCharge;
        profile.additionalCharge = data.additionalCharge;
        return profile;
    }

    getAllProfiles$(): Observable<Profile[]> {
        return this.afDb.collection('profiles').valueChanges().map(dataArray => {
            return dataArray.map(data => {
                return this.materializeProfile(data);
            })
        });
    }

    getProfilesByOfficeId$(officeId: string): Observable<Profile[]> {
        return this.afDb.collection('profiles', ref =>
            ref.where('inCharge.office.id', '==', officeId))
            .valueChanges().map(dataArray => {
                return dataArray.map(data => {
                    return this.materializeProfile(data);
                })
            });
    }

    getProfileById$(profileId: string): Observable<Profile> {
        return this.afDb.collection('profiles').doc(profileId).valueChanges().map(profileData => {
            return this.materializeProfile(profileData);
        });
    }

    getProfileByMobile$(mobile: string): Observable<Profile> {
        return undefined;
    }


    getProfilesByFilters$(filterOptions: any): Observable<Profile[]> {
        return this.afDb.collection('profiles', ref => {
            let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
            if (filterOptions.bloodGroup) query = query.where('bloodGroup','==',filterOptions.bloodGroup);
            if (filterOptions.officeId) query = query.where('inCharge.office.id','==', filterOptions.officeId);
            if (filterOptions.designationId) query = query.where('inCharge.designation.id','==', filterOptions.designationId);
            if (filterOptions.departmentId) query = query.where('inCharge.department.id','==', filterOptions.departmentId);
            return query;
        }).valueChanges().map(dataArray => {
            return dataArray.map(data => {
                return this.materializeProfile(data);
            });
        });
    }

    removeProfile(profileId: string): Promise<void> {
        return this.afDb.collection('profiles').doc(profileId).delete();
    }

    async saveProfile(profileDTO: ProfileDTO): Promise<void> {
        let id = profileDTO.id || this.afDb.createId();
        let officialId = profileDTO.officialId || null;
        let name = profileDTO.name || null;
        let mobile = profileDTO.mobile || null;
        let bloodGroup = profileDTO.bloodGroup || null;
        let birthday = profileDTO.birthday || null;
        let address = profileDTO.address || {present: null, permanent: null};
        let inCharge = await this.composePostData(profileDTO.inCharge);
        let additionalCharge = await this.composePostData(profileDTO.additionalCharge);
        let obj = {
            id,
            officialId,
            name,
            mobile,
            bloodGroup,
            birthday,
            address,
            inCharge,
            additionalCharge
        };
        return this.afDb.collection('profiles').doc(id)
            .set(obj, {merge: true});
    }

    private async composePostData(postData: { officeId: string, designationId: string, departmentId: string }) {
        let office = await this.getOfficeById$(postData.officeId).take(1).toPromise() || {id: null, name: null};
        let designation = await this.getDesignationById$(postData.designationId).take(1).toPromise() || {
            id: null,
            name: null
        };
        let department = await this.getDepartmentById$(postData.departmentId).take(1).toPromise() || {
            id: null,
            name: null
        };

        return {
            office: {
                id: office.id || null,
                name: office.name || null
            },

            designation: {
                id: designation.id || null,
                name: designation.name || null
            },

            department: {
                id: department.id || null,
                name: department.name || null
            }
        }
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
                    office.order = ofcData.order || null;
                    return office;
                })
            });
    }


    getOfficeById$(officeId: string): Observable<Office> {
        return this.afDb.doc('data/offices').valueChanges().map(officesData => {
            let officeData = officesData[officeId]
            if (officeData) {
                let ofc = new Office();
                ofc.id = officeData.id;
                ofc.name = officeData.name;
                return ofc;
            }
            return null;
        });
    }


    saveOffice(officeDTO: OfficeDTO): Promise<void> {
        if (!officeDTO.id) {
            officeDTO.id = this.afDb.createId();
        }

        console.log(officeDTO);
        return this.afDb.doc('data/offices').update({
            [officeDTO.id]: Object.assign({}, officeDTO)
        });
    }

    removeOffice(officeId: string): Promise<void> {
        return this.afDb.doc('data/offices').update({
            [officeId]: firebase.firestore.FieldValue.delete()
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

    getDepartmentById$(departmentId: string): Observable<Department> {
        return this.afDb.doc('data/departments').valueChanges().map(departmentsData => {
            return departmentsData[departmentId];
        });
    }

    saveDepartment(departmentDTO: DepartmentDTO): Promise<void> {
        if (!departmentDTO.id) {
            departmentDTO.id = this.afDb.createId();
        }

        console.log(departmentDTO);
        return this.afDb.doc('data/departments').update({
            [departmentDTO.id]: Object.assign({}, departmentDTO)
        });
    }

    removeDepartment(departmentId: string): Promise<void> {
        return this.afDb.doc('data/departments').update({
            [departmentId]: firebase.firestore.FieldValue.delete()
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


    getDesignationById$(designationId: string): Observable<DesignationDTO> {
        return this.afDb.doc('data/designations').valueChanges().map(designationsData => {
            return designationsData[designationId];
        });
    }

    saveDesignation(designationDTO: DesignationDTO): Promise<void> {
        if (!designationDTO.id) {
            designationDTO.id = this.afDb.createId();
        }

        console.log(designationDTO);
        return this.afDb.doc('data/designations').update({
            [designationDTO.id]: Object.assign({}, designationDTO)
        });
    }

    removeDesignation(designationId: string) {
        return this.afDb.doc('data/designations').update({
            [designationId]: firebase.firestore.FieldValue.delete()
        });
    }





}