import { Injectable } from '@angular/core';


import { Http, Response, Headers, BaseRequestOptions, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { LoginModel } from "../login/login.model";
import { SignupModel } from "../signup/signup.model";
import { UserInfo } from "../layout/dashboard/userinfo";


@Injectable()
export class LoginService {
   private headers = new Headers({ 'Content-Type': 'application/json' });
   
   
   selectedUser: LoginModel;
   loginObj:LoginModel=null;
   signupModelObj:SignupModel=null;
   userInfo:UserInfo=null
   fileSaved:boolean=false;
  public userLoggedIn:boolean=false;
  constructor(private http: Http) {
  }

  saveSelectedLoginModel(selectedUser: LoginModel) {
    this.selectedUser = selectedUser;
  }

//Login verification 
  createLoginModel(loginModel: LoginModel): Observable<LoginModel> {
    this.selectedUser = new LoginModel();
    this.selectedUser.emailId = loginModel.emailId;
    this.selectedUser.password = loginModel.password;
      console.log(this.selectedUser);
    let addUrl = `https://mortgage-app.cfapps.io/login`;
      return this.http
      .post(addUrl, this.selectedUser, { headers: this.headers })
     .map(this.extractLoginData)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


  //Save Registration 
saveRegistrationDetails(signupModel: SignupModel): Observable<SignupModel> {
    console.log("signupmodel values are"+signupModel);
    console.log("full Name >>>>>>>>>"+signupModel.fullName);
    let registrationURL = `https://mortgage-app.cfapps.io/registration`;
    
      return this.http
      .post(registrationURL, signupModel, { headers: this.headers })
     .map(this.extractRegistarationData)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

    private extractRegistarationData(response:Response) {
        this.signupModelObj = response.json();
        console.log("After hitting service ---> "+this.signupModelObj.fullName);
              return this.signupModelObj || { };
    }

  
   private extractLoginData(response:Response) {
        this.loginObj = response.json();
        console.log("After hitting service ---> "+this.loginObj.validUser+this.loginObj.name);
       // this.userLoggedIn=this.loginObj.validUser;
              return this.loginObj || { };
    }

  
  private handleError(error: any) {
    console.log("handleError");
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }


  savePersonalDetails(userInfo: UserInfo): Observable<UserInfo> {
    console.log("signupmodel values are"+userInfo);
    console.log("full Name >>>>>>>>>"+userInfo.name);
    let registrationURL = `https://mortgage-app.cfapps.io/savePersonalDetails`;
    
      return this.http
      .post(registrationURL, userInfo, { headers: this.headers })
     .map(this.extractPersonalData)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


   private extractPersonalData(response:Response) {
        this.userInfo = response.json();
        console.log("After userinfo hitting the service ---> "+this.userInfo.dataSaved);
              return this.signupModelObj || { };
    }



  uploadFileToDropBox(formData:FormData): Observable<boolean> {
   
        let uploadHeader = new Headers();//;content-type=multipart
        uploadHeader.append('Accept', 'application/json');
        
        //'http://localhost:8080/dorpBoxFileUpload'
        //https://DocuSignExample.cfapps.io
        console.log("Service uploadfiletodropbox");
        console.log("formData is >>>>>>>>>>>"+formData.has("file"));
       return this.http.post('https://DocuSignExample.cfapps.io/dorpBoxFileUpload', formData,uploadHeader)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || false));
            

    }

     private extracDropBoxInfo(response:Response) {
        this.fileSaved = response.json();
        console.log(response.json());
        
        return this.fileSaved || { };
    }

}
