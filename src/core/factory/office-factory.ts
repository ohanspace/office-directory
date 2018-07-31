import {OfficeDTO} from "../models/office.dto";
import {Office} from "../models/office";
import {DesignationDTO} from "../models/designation.dto";
import {Designation} from "../models/designation";
import {DepartmentDTO} from "../models/department.dto";
import {Department} from "../models/department";
import {PostDTO} from "../models/post.dto";
import {Post} from "../models/post";

export class OfficeFactory {

    static createEmptyPostDTO() {
        let postDTO = new PostDTO();
        postDTO.office = {id: null, name: null};
        postDTO.designation = {id: null, name: null};
        postDTO.department = {id: null, name: null};
        return postDTO;
    }

    static createEmptyOfficeDTO() {
        let officeDTO = new OfficeDTO();
        officeDTO.id = null;
        officeDTO.name = null;
        officeDTO.type = null;
        return officeDTO;
    }

    static createEmptyDesignationDTO() {
        let designationDTO = new DesignationDTO();
        designationDTO.id = null;
        designationDTO.name = null;
        return designationDTO;
    }

    static createEmptyDepartmentDTO() {
        let departmentDTO = new DepartmentDTO();
        departmentDTO.id = null;
        departmentDTO.name = null;
        return departmentDTO;
    }

    static postDTOtoPost(postDTO: PostDTO): Post {
        let office = OfficeFactory.officeDTOToOffice(postDTO.office);
        let designation = OfficeFactory.designationDTOToDesignation(postDTO.designation);
        let department = OfficeFactory.designationDTOToDesignation(postDTO.department);

        let post = new Post();
        post.office = office;
        post.designation = designation;
        post.department = department;
        return post;

    }

    static officeDTOToOffice(officeDto: OfficeDTO): Office {
        let office = new Office();
        office.id = officeDto.id;
        office.name = officeDto.name;
        office.type = officeDto.type || null; //optional

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