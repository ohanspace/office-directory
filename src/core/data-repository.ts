import {OfficeTypeDTO} from "./models/office-type.dto";
import {OfficeDTO} from "./models/office.dto";
import {EmployeeDTO} from "./models/employee.dto";
import {DepartmentDTO} from "./models/department.dto";
import {DesignationDTO} from "./models/designation.dto";

export interface DataRepository {
    getAllOfficeTypes(): Promise<OfficeTypeDTO[]>;
    getOfficeTypeById(typeId: string): Promise<OfficeTypeDTO>;

    getAllOffices(): Promise<OfficeDTO[]>;
    getOfficesByTypeId(typeId: string): Promise<OfficeDTO[]>;
    getOfficeById(officeId: string): Promise<OfficeDTO>;

    getAllDepartments(): Promise<DepartmentDTO[]>;
    getDepartmentById(departmentId: string): Promise<DepartmentDTO>;

    getAllDesignations(): Promise<DesignationDTO[]>;
    getDesignationById(designationId: string): Promise<DesignationDTO>

    getAllEmployees(): Promise<EmployeeDTO[]>;
    getEmployeesByOfficeId(officeId: string): Promise<EmployeeDTO[]>;
    saveEmployee(employeeDTO: EmployeeDTO): Promise<boolean>;
}