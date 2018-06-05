import {EmployeeDTO} from "./models/employee.dto";
import {Post} from "./models/post";
import {OfficeDTO} from "./models/office.dto";
import {Office} from "./models/office";
import {OfficeType} from "./models/office-type";
import {DesignationDTO} from "./models/designation.dto";
import {Designation} from "./models/designation";
import {DepartmentDTO} from "./models/department.dto";
import {Department} from "./models/department";
import {Employee} from "./models/employee";
import {OfficeTypeDTO} from "./models/office-type.dto";

export class OfficeFactory {
    static officeWithEmployeesFromDTOs() {

    }

    static employeeFromDTO(employeeDTO: EmployeeDTO,
                           post: Post,
                           additionalPost?: Post): Employee {
        let employee = new Employee();
        employee.id = employeeDTO.id;
        employee.name = employeeDTO.name;
        employee.mobile = employeeDTO.mobile;
        employee.post = post;
        employee.additionalPost = additionalPost;
        return employee;
    }


    static officeTypeDTOtoOfficeType(officeTypeDTO: OfficeTypeDTO): OfficeType {
        let officeType = new OfficeType();
        officeType.id = officeTypeDTO.id;
        officeType.name = officeTypeDTO.name;
        return officeType;
    }

    static officeDTOToOffice(officeDto: OfficeDTO, officeType: OfficeType): Office {
        let office = new Office();
        office.id = officeDto.id;
        office.name = officeDto.name;
        office.type = officeType;

        return office;
    }

    static designationDTOToDesignation(designationDto: DesignationDTO): Designation {
        let designation = new Designation();
        designation.id = designationDto.id;
        designation.name = designationDto.name;
        return designation;
    }

    static departmentDTOToDepartment(departmentDto: DepartmentDTO): Department {
        let department = new Department();
        department.id = departmentDto.id;
        department.name = departmentDto.name;
        return department;
    }
}