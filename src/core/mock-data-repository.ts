import {DataRepository} from "./data-repository";
import {OfficeTypeDTO} from "./models/office-type.dto";
import {OfficeDTO} from "./models/office.dto";
import {EmployeeDTO} from "./models/employee.dto";
import {DepartmentDTO} from "./models/department.dto";
import {DesignationDTO} from "./models/designation.dto";

export class MockDataRepository implements DataRepository{
    departments = [
        {id: '1', name: 'department 1'},
        {id: '2', name: 'department 2'},
        {id: '3', name: 'department 3'},
    ];

    designations = [
        {id: '1', name: 'designation 1'},
        {id: '2', name: 'designation 2'},
        {id: '3', name: 'designation 3'},
    ];

    officeTypes = [
        {id: '1', name: 'office type 1'},
        {id: '2', name: 'office type 2'},
        {id: '3', name: 'office type 3'},
    ];

    offices = [
        {id: '1', name: 'office 1', typeId: '1'},
        {id: '2', name: 'office 2', typeId: '2'},
        {id: '3', name: 'office 3', typeId: '2'},
    ];

    employees = [
        {id: '1', name: 'employee 1', mobile: '01922503512',
            post: {officeId: '2', designationId: '1', departmentId: '1'},
            additionalPost: {officeId: '2', designationId: '2', departmentId: '1'},
        },
        {id: '2', name: 'employee 2', mobile: '01922503512',
            post: {officeId: '1', designationId: '1', departmentId: '1'},
            additionalPost: {officeId: '2', designationId: '2', departmentId: '1'},
        },
        {id: '3', name: 'employee 3', mobile: '01922503512',
            post: {officeId: '1', designationId: '1', departmentId: '1'},
            additionalPost: {officeId: '2', designationId: '2', departmentId: '1'},
        },
    ]



    getAllDepartments(): Promise<DepartmentDTO[]> {
        return Promise.resolve(this.departments);
    }

    getAllDesignations(): Promise<DesignationDTO[]> {
        return Promise.resolve(this.designations);
    }

    getAllEmployees(): Promise<EmployeeDTO[]> {
        return Promise.resolve(this.employees);
    }

    getAllOfficeTypes(): Promise<OfficeTypeDTO[]> {
        return Promise.resolve(this.officeTypes);
    }

    getAllOffices(): Promise<OfficeDTO[]> {
        return Promise.resolve(this.offices);
    }

    getDepartmentById(departmentId: string): Promise<DepartmentDTO> {
        let departmentDto = this.departments.
                    find(d => d.id === departmentId);
        return Promise.resolve(departmentDto);
    }

    getDesignationById(designationId: string): Promise<DesignationDTO> {
        let designationDto = this.designations.find(d => d.id === designationId);
        return Promise.resolve(designationDto);
    }


    getOfficeById(officeId: string): Promise<OfficeDTO> {
        let officeDto = this.offices.find(o => o.id === officeId);
        return Promise.resolve(officeDto);
    }

    getOfficeTypeById(typeId: string): Promise<OfficeTypeDTO> {
        let officeTypeDto = this.officeTypes.find(ot => ot.id === typeId);
        return Promise.resolve(officeTypeDto);
    }

    getOfficesByTypeId(typeId: string): Promise<OfficeDTO[]> {
        let offices = this.offices.filter(o => o.typeId === typeId);
        return Promise.resolve(offices);
    }

    getEmployeesByOfficeId(officeId: string): Promise<EmployeeDTO[]> {
        let employees = this.employees.filter(em =>
            (em.post? em.post.officeId === officeId : false) ||
            (em.additionalPost? em.additionalPost.officeId === officeId : false)
        );

        return Promise.resolve(employees);
    }

    saveEmployee(employeeDTO: EmployeeDTO): Promise<boolean> {
        return undefined;
    }

}