import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { MortgageEligibiltyModel } from "./mortgageeligibilty.model";
import { LoginService } from "../../http-service/login-service";
import { Router } from '@angular/router';
import { routerTransition } from "../../router.animations";
import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";

@Component({
  selector: 'app-mortgageeligibility',
  templateUrl: './mortgageeligibility.component.html',
  styleUrls: ['./mortgageeligibility.component.scss'],
   animations: [routerTransition()]
})
export class MortgageeligibilityComponent implements OnInit {
    mortgageEligibiltyModel:FormGroup;
    
  constructor(private fb:FormBuilder,private loginService:LoginService,public router: Router,private mortgageEligibilityService:MortgageEligibilityService) { }

  ngOnInit() {
    this.createForm();
    if (this.mortgageEligibilityService.mortgageEligibilityModel) {
      this.mortgageEligibiltyModel.patchValue({
        name: this.mortgageEligibilityService.mortgageEligibilityModel.name,
        phone: this.mortgageEligibilityService.mortgageEligibilityModel.phone,
        email: this.mortgageEligibilityService.mortgageEligibilityModel.email,
        dateofbirth: this.mortgageEligibilityService.mortgageEligibilityModel.dateofbirth,
      
        gender: this.mortgageEligibilityService.mortgageEligibilityModel.gender,
        address: this.mortgageEligibilityService.mortgageEligibilityModel.address
      });
    }
  }  
    onSubmit({ value, valid }: { value: MortgageEligibiltyModel, valid: boolean }) {

        console.log(">>>>>>>>>>>full name in ocmoponent" + value.name);
        this.mortgageEligibilityService.mortgageEligibilityModel=value;
        this.router.navigate(["/mortgagequotation"]);
        
       
       
    }

     createForm(){
       this.mortgageEligibiltyModel = this.fb.group({
         name: new FormControl('', [Validators.required]),
         phone: new FormControl('', [Validators.required]),
        
         email: new FormControl('', [Validators.required]),
           dateofbirth: new FormControl('', [Validators.required]),     
         gender: new FormControl('', [Validators.required]),
           address : new FormControl('', [Validators.required])


       });

}

}