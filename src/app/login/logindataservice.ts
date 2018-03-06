import { Injectable } from '@angular/core';
import { MortgageModel } from "../layout/mortgage/mortgage.model";
import { MortgageEligibiltyModel } from "../layout/mortgageeligibility/mortgageeligibilty.model";
import { MortgagePropertyModel } from "../layout/mortgageproperty/mortgageproperty.model";
import { MortgageDocumentsModel } from "../layout/mortgagedocuments/mortgagedocuments.model";
import { LoginModel } from "./login.model";

@Injectable()
export class LoginDataService{
    userName:string;
    userLoggedIn:boolean;
    image:string;
    finalMortgageModel:MortgageModel=null;
    mortgageEligibiltyModel:MortgageEligibiltyModel;
    mortgagePropertyModel:MortgagePropertyModel;
    mortgageDocumentsModel:MortgageDocumentsModel;
    loginModel:LoginModel;
}