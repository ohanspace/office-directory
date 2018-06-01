export interface DesignationFb {
    id: string;
    name: string;
}

export class Designation {
    id: string;
    name: string;

    constructor(id:string, name: string){
        this.id = id;
        this.name = name;
    }
}