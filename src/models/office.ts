import {OfficeType} from "./office-type";

export class Office {
    id: string;
    name: string;
    type: OfficeType;
    constructor(id: string, name:string, type:OfficeType){
        this.id = id;
        this.name = name;
        this.type = type;
    }
}
