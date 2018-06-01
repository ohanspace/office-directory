import {Office} from "../../models/office";
import {OfficeType} from "../../models/office-type";
import {OfficeFb} from "../../models/office.fb";

export class OfficeTransformer {
    static officeTypesMap = new Map([
        ['corporate', new OfficeType('corporate', 'Corporate Office')],
        ['plant', new OfficeType('plant', 'Power Plant')],
        ['project', new OfficeType('project', 'Project')],
    ]);


    static toDomainModelArray(data: any[]): Office[] {
        let offices = [];
        for(let i = 0; i < data.length; i++){
            let office = this.toDomainModel(data[i]);
            offices.push(office);
        }

        return offices;
    }

    static toDomainModel(data: any): Office {
        return  new Office(
            data.id,
            data.name,
            this.officeTypesMap.get(data.typeId)
        );
    }

    static toFbModelArray(offices: Office[]): OfficeFb[]{
        let result = [];
        offices.map(office =>
            result.push( this.toFbModel(office))
        );

        return result;
    }

    static toFbModel(office: Office): OfficeFb {
        return {
            id: office.id,
            name: office.name,
            typeId: office.type.id
        };
    }


}