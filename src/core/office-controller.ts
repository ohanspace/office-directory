import {DataRepository} from "./data-repository";
import {Office} from "./models/office";
import {PostDTO} from "./models/post.dto";
import {Post} from "./models/post";
import {Employee} from "./models/employee";
import {OfficeFactory} from "./office-factory";

export class OfficeController {
    repo: DataRepository;
    constructor(repo: DataRepository){
        this.repo = repo;
    }

    async getOffices(): Promise<Office[]> {
        let offices: Office[] = [];
        this.repo.getAllOffices().then(officeDtos => {
            officeDtos.forEach(async (officeDto) => {
                let officeTypeDto = await this.repo.getOfficeTypeById(officeDto.typeId);
                let officeType = OfficeFactory.officeTypeDTOtoOfficeType(officeTypeDto);
                let office =  OfficeFactory.officeDTOToOffice(officeDto, officeType);
                offices.push(office);
            })
        });

        return offices;
    }



    async getEmployees(officeId: string): Promise<Employee[]> {
        let employees: Employee[] = [];
        this.repo.getEmployeesByOfficeId(officeId).then(employeeDTOs =>
            employeeDTOs.forEach(async (employeeDTO) => {
                let post = await this.postDTOToPost(employeeDTO.post);
                let additionalPost = await this.postDTOToPost(employeeDTO.additionalPost);
                let employee = OfficeFactory.employeeFromDTO(employeeDTO, post, additionalPost);
                employees.push(employee);
            })
        );
        return employees;

    }

    async postDTOToPost(postDto: PostDTO): Promise<Post> {
        let officeDto = await this.repo.getOfficeById(postDto.officeId);
        let designationDto = await this.repo.getDesignationById(postDto.designationId);
        let departmentDto = await this.repo.getDepartmentById(postDto.departmentId);


        let officeTypeDto = await this.repo.getOfficeTypeById(officeDto.id);
        let officeType = OfficeFactory.officeTypeDTOtoOfficeType(officeTypeDto);

        let post = new Post();
        let office = OfficeFactory.officeDTOToOffice(officeDto, officeType);
        let designation = OfficeFactory.designationDTOToDesignation(designationDto);
        let department = OfficeFactory.departmentDTOToDepartment(departmentDto);

        post.office = office;
        post.designation = designation;
        post.department = department;
        return post;
    }
}