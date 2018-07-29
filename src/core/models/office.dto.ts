import {OfficeType} from "./office-type";

export class OfficeDTO {
    id: string;
    name: string;
    type?: OfficeType;
}