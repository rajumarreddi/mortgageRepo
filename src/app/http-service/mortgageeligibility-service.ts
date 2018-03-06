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
import { DcoSignStatus } from "./../layout/mortgagedocuments/DocuSignStatus";
import { RatesModel } from "../layout/mortgagedocuments/rates.model";


@Injectable()
export class MortgageEligibilityService{
    purposeofLoan = ['Search Property', 
     'List Properties'];

    typesofEmployment=['Salaried',' Business'];

    recidencyStatus=['Resident of Canada','Non Resident of Canada','Holder of Premanent Residence'];

    documentsArr=['Perminent Residence Card','Citizenship Card','Driving Licence','Passport'];

    goalArr=['Buy my first home','Sell my home and buy the next property','Switch my mortgage to $Bank','Renew or Review my mortgage my $Bank Mortgage'];
    timeArr=['Before 6 Months','After 6 Months'];

    ratesArr:RatesModel[]=[new RatesModel('1','5 Year Fixed','3.540%','3.560%'),
    new RatesModel('2','7 Year Fixed','3.890%','3.910%'),
    new RatesModel('3','5 Year Variable','$Bank Prime Rate + 0.000%','3.470%'),
     new RatesModel('4','10 Year Fixed','6.400%','6.420%'),
      new RatesModel('5','25 Year Fixed','8.750%','8.760%')];
    mortgageEligibilityModel:MortgageEligibiltyModel;
    mortgageQuoatationModel:MortgageQuotationModel;
    mortgagePropertyModel:MortgagePropertyModel;
    salariedEmp:boolean;
    businessEmp:boolean;
     userInfo:UserInfo=null;
      fileSaved:boolean=false;
     private headers = new Headers({ 'Content-Type': 'application/json' });
    private uploadHeader = new Headers({  'Accept': 'application/json' });
     options:RequestOptions = new RequestOptions({ headers: this.uploadHeader });

constructor(private http: Http) {
  }


     uploadFileToDropBox(formData:FormData): Observable<boolean> {
    //  let headers = new Headers();//;content-type=multipart
    //     headers.append('Accept', 'application/json');
        //headers.append('Content-Type', 'multipart/form-data');
        //'http://localhost:8080/dorpBoxFileUpload'
        //https://DocuSignExample.cfapps.io
        console.log("Service uploadfiletodropbox");
        console.log("formData is >>>>>>>>>>>"+formData);
       return this.http.post('https://DocuSignExample.cfapps.io/dorpBoxFileUpload', formData,this.options)
            .map(this.extracDropBoxInfo)
            .catch((error: any) => Observable.throw(error.json().error || false));
            

    }

     private extracDropBoxInfo(response:Response) {
        this.fileSaved = response.json();
        console.log("After userinfo hitting the service ---> "+this.userInfo.dataSaved);
              return this.fileSaved || { };
    }


 onDocuSignServiceCall(event: any) : Observable<DcoSignStatus>{
 
    console.log("onChange =======");
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
               
        let formData:FormData = new FormData();
        formData.append('file', file, file.name);
       
         // console.log("IIIIIIIIIIIIIIII"+ dropDetail.inputFile);
        // let headers = new Headers();
        // headers.append('Accept', 'application/json');
        //headers.append('Content-Type', 'multipart/form-data');
        //'http://localhost:8080/dorpBoxFileUpload'
        //https://DocuSignExample.cfapps.io/docSignFileUpload
       return this.http.post('https://DocuSignExample.cfapps.io/docSignFileUpload', formData, this.options)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
        }
    }

}