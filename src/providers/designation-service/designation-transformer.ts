import {Transformer} from "../transformer";
import {Designation, DesignationFb} from "../../models/designation";

export class DesignationTransformer extends Transformer<Designation, DesignationFb>{
    toDomainModel(data: DesignationFb): Designation {
        return new Designation(data.id, data.name);
    }

    toFbModel(data: Designation): DesignationFb {
        return {
            id: data.id,
            name: data.name
        };
    }

}