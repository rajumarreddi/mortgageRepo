import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SignupModel } from "./signup.model";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    signupModel:FormGroup;
    constructor(private fb:FormBuilder) {
        this.createForm();
    }

    ngOnInit() {}


    createForm(){
    this.signupModel=this.fb.group({
     fullName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      repeatPassword:['',Validators.required]
    });
  }


   onSubmit({ value, valid }: { value: SignupModel, valid: boolean }){
    console.log(value.fullName);
    

   

}
}
