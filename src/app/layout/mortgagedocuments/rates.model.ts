export class RatesModel{
    id:string;
    term:string;
    specialoffers:string;
    APR:string;

    constructor(id,term,specialoffers,APR){
        this.id=id;
        this.term=term;
        this.specialoffers=specialoffers;
        this.APR=APR;
    }
}