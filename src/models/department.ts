export interface DepartmentFb {
    id: string;
    name: string;
}


export class Department {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}