import { Injectable } from '@angular/core';
import { MortgageModel } from "../layout/mortgage/mortgage.model";

@Injectable()
export class LoginDataService{
    userName:string;
    userLoggedIn:boolean;
    image:string;
    finalMortgageModel:MortgageModel=null;
}