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
    
   
   }

  ngOnInit() {
    this.typeofEmploymentArr=this.mortgageEligibilityService.typesofEmployment;
    this.createForm();
    if(this.mortgageEligibilityService.mortgagePropertyModel){
       this.mortgageQuotationModel.patchValue({
        
        typeOfEmployment:this.mortgageEligibilityService.mortgageQuoatationModel.typeOfEmployment,
       
          company:this.mortgageEligibilityService.mortgageQuoatationModel.company,
          grosssalary:this.mortgageEligibilityService.mortgageQuoatationModel.grosssalary,
          emiamount:this.mortgageEligibilityService.mortgageQuoatationModel.emiamount,
          expences:this.mortgageEligibilityService.mortgageQuoatationModel.expences,
          previousyearprofit:this.mortgageEligibilityService.mortgageQuoatationModel.previousyearprofit,
          businessstartdate:this.mortgageEligibilityService.mortgageQuoatationModel.businessstartdate
           });

           this.typeofEmploymentArr=this.mortgageEligibilityService.typesofEmployment;
           this.businessEmp=this.mortgageEligibilityService.businessEmp;
           this.salariedEmp=this.mortgageEligibilityService.salariedEmp;
    }

  }

  onSubmitBack({ value, valid }: { value: MortgageQuotationModel, valid: boolean }) {

        console.log(">>>>>>>>>>>full name in ocmoponent" + value.typeOfEmployment);
        this.router.navigate(["/mortgageeligibility"]);
        
       
       
    }


    onSubmitNext({ value, valid }: { value: MortgageQuotationModel, valid: boolean }) {

        console.log(">>>>>>>>>>>full name in ocmoponent" + value.typeOfEmployment);
        this.mortgageEligibilityService.mortgageQuoatationModel=value;
        this.router.navigate(["/mortgageproperty"]);
        
       
       
    }


    onTypeofEmpChange(typeofEmp: string) {
      console.log("Type of employment change event fired"+typeofEmp)
      if(typeofEmp=='Salaried'){
        this.salariedEmp=true;
        this.businessEmp=false;
        this.mortgageEligibilityService.businessEmp=false;
        this.mortgageEligibilityService.salariedEmp=true;
      }else{
        this.businessEmp=true;
        this.salariedEmp=false;
        this.mortgageEligibilityService.salariedEmp=false;
        this.mortgageEligibilityService.businessEmp=true;
      }
    }


     createForm(){
       this.mortgageQuotationModel = this.fb.group({
        
         typeOfEmployment: new FormControl('', [Validators.required]),
         company: new FormControl('', [Validators.required]),
         grosssalary: new FormControl('', [Validators.required]),
         emiamount: new FormControl('', [Validators.required]),
         expences: new FormControl('', [Validators.required]),
         previousyearprofit: new FormControl('', [Validators.required]),
         businessstartdate: new FormControl('', [Validators.required]),
        

       });

}
}
