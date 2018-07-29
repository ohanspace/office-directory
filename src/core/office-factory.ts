import {ProfileDTO} from "./models/profile.dto";
import {Post} from "./models/post";
import {OfficeDTO} from "./models/office.dto";
import {Office} from "./models/office";
import {OfficeType} from "./models/office-type";
import {DesignationDTO} from "./models/designation.dto";
import {Designation} from "./models/designation";
import {DepartmentDTO} from "./models/department.dto";
import {Department} from "./models/department";
import {Profile} from "./models/profile";

export class OfficeFactory {
    static officeWithEmployeesFromDTOs() {

    }

    static employeeFromDTO(employeeDTO: ProfileDTO,
                           post: Post,
                           additionalPost?: Post): Profile {
        let employee = new Profile();
        employee.id = employeeDTO.id;
        employee.name = employeeDTO.name;
        employee.mobile = employeeDTO.mobile;
        employee.post = post;
        employee.additionalPost = additionalPost;
        return employee;
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