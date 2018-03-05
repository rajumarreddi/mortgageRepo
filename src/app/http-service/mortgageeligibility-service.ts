import { Injectable } from '@angular/core';


import { Http, Response, Headers, BaseRequestOptions, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { LoginModel } from "../login/login.model";
import { SignupModel } from "../signup/signup.model";
import { UserInfo } from "../layout/dashboard/userinfo";
import { MortgageEligibiltyModel } from "../layout/mortgageeligibility/mortgageeligibilty.model";
import { MortgagePropertyModel } from "../layout/mortgageproperty/mortgageproperty.model";
import { MortgageQuotationModel } from "../layout/mortgagequotation/mortgagequotation.model";



@Injectable()
export class MortgageEligibilityService{
    purposeofLoan = ['Purchase or construct on identified property', 
    'Transfer my existing home loan', 'Purchase not yet identified property'];

    typesofEmployment=['Salaried','Self Employed Business','Self Employed Personal','Retired','Others'];

    recidencyStatus=['Resident of Canada','Non Resident of Canada','Holder of Premanent Residence'];
    mortgageEligibilityModel:MortgageEligibiltyModel;
    mortgageQuoatationModel:MortgageQuotationModel;
    mortgagePropertyModel:MortgagePropertyModel;
    salariedEmp:boolean;
    businessEmp:boolean;
}