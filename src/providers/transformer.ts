export abstract class Transformer<D,F> {
    abstract toDomainModel(F):D ;

    abstract toFbModel(D): F;

    toDomainModelArray(inArr: F[]): D[] {
        let outArr = [];
        for(let i = 0; i < inArr.length; i++){
            let d = this.toDomainModel(inArr[i]);
            outArr.push(d);
        }

        return outArr;
    }

    toFbModelArray(inArr: D[]): F[] {
        let outArr = [];
        for(let i = 0; i < inArr.length; i++){
            let f = this.toFbModel(inArr[i]);
            outArr.push(f);
        }

        return outArr;
    }


}