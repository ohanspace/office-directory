import {Transformer} from "../transformer";
import {Designation, DesignationFb} from "../../models/designation";

export class DesignationTransformer extends Transformer<Designation, DesignationFb>{
    toDomainModel(F): Designation {
        return undefined;
    }

    toFbModel(D): DesignationFb {
        return undefined;
    }

}