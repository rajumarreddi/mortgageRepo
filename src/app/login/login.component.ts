import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormGroup, FormBuilder, Validators, FormControl,  EmailValidator } from "@angular/forms";
import { LoginModel } from "./login.model";
import { LoginService } from "../http-service/login-service";
import { LoginDataService } from "./logindataservice";
import { Http, Response, Headers, BaseRequestOptions, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import {AuthService} from 'angular2-social-login';
import { google } from "@agm/core/services/google-maps-types";
import {} from '@types/googlemaps';
import { MapsAPILoader } from '@agm/core';
import { GoogleLoginModel } from "./googlelogin.model";
import { SignupModel } from "../signup/signup.model";
declare const gapi: any;
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]//,
   //  providers: [ MapsAPILoader ]
})
    
export class LoginComponent implements OnInit {
    returnData : LoginModel =  new LoginModel();
    loginModel:FormGroup;
    loginModelObj=new LoginModel();
    alertFlag:boolean=false;
     errorMsg:String;
     googleLoginModel:GoogleLoginModel=new GoogleLoginModel();
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}";
     sub : any;
     signupModel:SignupModel;

  public auth2: any;
      @ViewChild('search') public searchElement: ElementRef;
    // private headers = new Headers({ 'Content-Type': 'application/json' });
   
    constructor(public _auth : AuthService,public router: Router,private fb:FormBuilder,private loginService:LoginService,
    private loginModelPojo:LoginModel,private loginDataService: LoginDataService,private mapsAPILoader: MapsAPILoader, 
   private ngZone: NgZone) { //,private http: Http
        this.createForm();
        
    }
   

    ngOnInit() {
        //this.returnData = new LoginModel();
        this.mapsAPILoader.load().then(
      () => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types:["address"] });

        autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if(place.geometry === undefined || place.geometry === null ){
          return;
          }
          console.log(place);
        });
        });
      }
    );
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }


    onSubmit({ value, valid }: { value: LoginModel, valid: boolean }) {
        console.log(value.emailId);
        // .getRecipeintsWithObserable().subscribe(recipientsList => this.recipientsList = recipientsList);
        this.loginService.createLoginModel(value).subscribe(returnData => this.returnData = returnData);
      //  console.log("return Data :: " + this.returnData.emailId + "::::::" + this.returnData.name+">>>>"+this.returnData.validUser);
        if ('' != this.returnData.name && this.returnData.validUser) {

            console.log("inside valid user....");
            //recipientsList => this.recipientsList = recipientsList
            console.log("login srvice obj------->"+this.loginService);
            this.loginService.userLoggedIn = true;
            this.router.navigate(["/dashboard"]);
            this.alertFlag = false;
            this.loginDataService.userLoggedIn=true;
            this.loginDataService.userName=this.returnData.name;
            this.loginDataService.image=null;
        } else {
            this.loginService.userLoggedIn = false;
            this.router.navigate(["/login"]);
            this.alertFlag = true;
             this.loginDataService.userLoggedIn=false;
             this.loginDataService.image=null;
        }
    }



   /*  onSubmit1({ value, valid }: { value: LoginModel, valid: boolean }) {
     
      return this.http.post('https://mortgage-app.cfapps.io/login',value,{ headers: this.headers })
      .map(this.extractData)
      .catch(this._errorHandler).subscribe(resLoginBean=>{
          this.loginModelObj=resLoginBean;
         
         this.alertFlag = !this.loginModelObj.validUser;
         if(this.alertFlag){
            this.router.navigate(["login"]);
         }else{
          
            this.router.navigate(["/dashboard"]);
         }
      },resLoginError=>this.errorMsg=resLoginError);
    }

     private extractData(response:Response) {
        this.loginModelObj = response.json();
        console.log("After hitting service ---> "+this.loginModelObj.validUser);
        this.alertFlag=this.loginModelObj.validUser;
        console.log("alertFlag in extractData-------->"+this.alertFlag);
        return this.loginModelObj || { };
    }

    _errorHandler(error:Response){
        console.error(error);
        return Observable.throw(error || "Login Service Error...!!");
    } */


createForm(){
    this.loginModel=this.fb.group({
     
      //emailId:['',Validators.required],
      //password:['',Validators.required,Validators.minLength(8)]
       emailId :new FormControl(null,[Validators.required, Validators.pattern(this.emailPattern)]),
      password :new FormControl(null,[Validators.required,Validators.minLength(8)])
        });
  }

    googleLogin(){
    this.sub = this._auth.login("google").subscribe(
      (data) => {
                 console.log("After google stringify=============> "+JSON.stringify(data) );
                // let obj:any = JSON.stringify(data);
                //  for (let arr in obj) {
                //     console.log ('key: ' +  arr + ',  value: ' + obj[arr]);
                // }

                let myObj = JSON.parse(JSON.stringify(data));              
               if(myObj.name != null || myObj.name != undefined){
                   console.log("this.loginDataService >>>>>"+this.loginDataService);
                   console.log("this.loginDataService.userLoggedIn"+this.loginDataService.userLoggedIn);
                  this.loginDataService.userLoggedIn=true;
                 this.loginDataService.userName=myObj.name;
                 this.loginDataService.image=myObj.image;
                   this.router.navigate(["/dashboard"]);
               }

                  
                }
    )
}

}
