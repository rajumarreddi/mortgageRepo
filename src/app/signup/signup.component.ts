import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SignupModel } from "./signup.model";
import { LoginService } from "../http-service/login-service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()],
       providers: [ LoginService ],
})
export class SignupComponent implements OnInit {
    signupModel:FormGroup;
    returnData : SignupModel =  new SignupModel();
    constructor(private fb:FormBuilder,private loginService:LoginService) {
        this.createForm();
    }

    ngOnInit() {}


    createForm(){
        this.signupModel = this.fb.group({
            fullName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            repeatPassword: ['', Validators.required],
            registered: ['', Validators.required],
            userExists: ['', Validators.required]

    });
  }


   onSubmit({ value, valid }: { value: SignupModel, valid: boolean }){
    console.log(">>>>>>>>>>>full name in ocmoponent"+value.fullName);
     this.loginService.saveRegistrationDetails(value).subscribe(returnData=>this.returnData= returnData);
    console.log("return Data :: "+this.returnData.fullName + "::::::"+ this.returnData.registered );
    

   

}
}
