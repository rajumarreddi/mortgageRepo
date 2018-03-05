import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../router.animations";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from "../../http-service/login-service";
import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";
import { MortgagePropertyModel } from "./mortgageproperty.model";

@Component({
  selector: 'app-mortgageproperty',
  templateUrl: './mortgageproperty.component.html',
  styleUrls: ['./mortgageproperty.component.scss'],
   animations: [routerTransition()]
})
export class MortgagepropertyComponent implements OnInit {
  mortgagePropertyModel:FormGroup;
propertyselected: boolean;
propertynotselected:boolean;
purposeofLoanArr:string[];

  constructor(private fb:FormBuilder,private mortgageEligibilityService:MortgageEligibilityService,public router: Router) { 
     this.purposeofLoanArr=this.mortgageEligibilityService.purposeofLoan;
  }

  ngOnInit() {
    this.createForm();
    if(this.mortgageEligibilityService.mortgagePropertyModel){
      this.mortgagePropertyModel.patchValue({
        purposeofloan:this.mortgageEligibilityService.mortgagePropertyModel.purposeofloan
      });
    }
  }
  

  onSubmitBack({ value, valid }: { value: MortgagePropertyModel, valid: boolean }) {

        console.log(">>>>>>>>>>>full name in ocmoponent" + value.typeOfProperty);
        this.router.navigate(["/mortgagequotation"]);
        
       
       
    }


    onSubmitNext({ value, valid }: { value: MortgagePropertyModel, valid: boolean }) {

        console.log(">>>>>>>>>>>full name in ocmoponent" + value.typeOfProperty);
        this.mortgageEligibilityService.mortgagePropertyModel=value;

      //this.router.navigate(["/mortgageeligibility"]);
        
       
       
    }


    onTypeofPropertyChange(typeofProperty: string) {
      console.log("Type of employment change event fired"+typeofProperty)
      if(typeofProperty=='Purchase or construct on identified property'){
        this.propertyselected=true;
        this.propertynotselected=false;
      }else{
        this.propertyselected=true;
        this.propertynotselected=false;
      }
    }

     createForm(){
       this.mortgagePropertyModel = this.fb.group({
         typeOfProperty: new FormControl('', [Validators.required]),
          purposeofloan: new FormControl('', [Validators.required])
        

       });
     }
}
