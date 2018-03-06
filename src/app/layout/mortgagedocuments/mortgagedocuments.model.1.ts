import { RatesModel } from "./rates.model";

export class MortgageDocumentsModel {
    documentType:string;
    documentTitle:string;
    file : File;
    goal:string;
    purchaseprice:string;
    downpayment:string;
    timing:string;
    postalcode:string;
    ratesModel:RatesModel;
    ratesModelId:string;
    
}