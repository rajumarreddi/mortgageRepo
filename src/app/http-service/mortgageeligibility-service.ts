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


@Injectable()
export class MortgageEligibilityService{
    purposeofLoan = ['Purchase or construct on identified property', 
    'Transfer my existing home loan', 'Purchase not yet identified property'];

    typesofEmployment=['Salaried','Self Employed Business','Self Employed Personal','Retired','Others'];

    recidencyStatus=['Resident of Canada','Non Resident of Canada','Holder of Premanent Residence'];

    documentsArr=['Pan card','Aadhar Card','Driving Licence','Passport'];
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