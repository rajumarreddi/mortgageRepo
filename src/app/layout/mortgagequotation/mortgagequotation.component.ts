import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../router.animations";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from "../../http-service/login-service";
import { MortgageQuotationModel } from "./mortgagequotation.model";
import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";
@Component({
  selector: 'app-mortgagequotation',
  templateUrl: './mortgagequotation.component.html',
  styleUrls: ['./mortgagequotation.component.scss'],
   animations: [routerTransition()]
})
export class MortgagequotationComponent implements OnInit {
mortgageQuotationModel:FormGroup;
typeofEmploymentArr:string[];
salariedEmp:boolean;
businessEmp:boolean;
  constructor(private fb:FormBuilder,private mortgageEligibilityService:MortgageEligibilityService,public router: Router) {
    this.typeofEmploymentArr=this.mortgageEligibilityService.typesofEmployment;
   }

  ngOnInit() {
    this.createForm();
  }

  onSubmitBack({ value, valid }: { value: MortgageQuotationModel, valid: boolean }) {

        console.log(">>>>>>>>>>>full name in ocmoponent" + value.typeOfEmployment);
        this.router.navigate(["/mortgageeligibility"]);
        
       
       
    }


    onSubmitNext({ value, valid }: { value: MortgageQuotationModel, valid: boolean }) {

        console.log(">>>>>>>>>>>full name in ocmoponent" + value.typeOfEmployment);
      //  this.router.navigate(["/mortgageeligibility"]);
        
       
       
    }


    onTypeofEmpChange(typeofEmp: string) {
      console.log("Type of employment change event fired"+typeofEmp)
      if(typeofEmp=='Salaried'){
        this.salariedEmp=true;
        this.businessEmp=false;
      }else{
        this.businessEmp=true;
        this.salariedEmp=false;
      }
    }

     createForm(){
       this.mortgageQuotationModel = this.fb.group({
         typeOfEmployment: new FormControl('', [Validators.required]),
        

       });

}
}
