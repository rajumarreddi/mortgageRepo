import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginModel } from "./login.model";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginModel:FormGroup;
    constructor(public router: Router,private fb:FormBuilder) {
        this.createForm();
    }
    ngOnInit() {}
     onSubmit({ value, valid }: { value: LoginModel, valid: boolean }){
    console.log(value.email);
    

   

}

createForm(){
    this.loginModel=this.fb.group({
     
      email:['',Validators.required],
      password:['',Validators.required]
     
    });
  }


}
