import {Office} from "../../models/office";
import {OfficeType} from "../../models/office-type";
import {OfficeFb} from "../../models/office.fb";
import {Transformer} from "../transformer";

export class OfficeTransformer extends Transformer<Office, OfficeFb>{
    static officeTypesMap = new Map([
        ['corporate', new OfficeType('corporate', 'Corporate Office')],
        ['plant', new OfficeType('plant', 'Power Plant')],
        ['project', new OfficeType('project', 'Project')],
    ]);



    toDomainModel(data: OfficeFb): Office {
        return  new Office(
            data.id,
            data.name,
            OfficeTransformer.officeTypesMap.get(data.typeId)
        );
    }



    toFbModel(office: Office): OfficeFb {
        return {
            id: office.id,
            name: office.name,
            typeId: office.type.id
        };
    }


}