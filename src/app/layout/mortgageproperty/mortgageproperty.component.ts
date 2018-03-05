import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../router.animations";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from "../../http-service/login-service";
import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";
import { MortgagePropertyModel } from "./mortgageproperty.model";
import { MortgageModel } from "../mortgage/mortgage.model";
import { MortgageService } from "../../http-service/mortgage-service";

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
  returnData: MortgageModel;
    mortgageModel: FormGroup;
    hideElement: boolean = false;
     propertyData: Array<any>;
        page: number = 1;
       totalRec : number;
       showTable:boolean = false;

  constructor(private fb:FormBuilder,private mortgageEligibilityService:MortgageEligibilityService,public router: Router,
  private mortgageService:MortgageService) { 
    this.propertyData = new Array<any>();
     this.purposeofLoanArr=this.mortgageEligibilityService.purposeofLoan;
      this.showProperties();
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

      this.router.navigate(["/mortgagedocuments"]);
        
       
       
    }


    onTypeofPropertyChange(typeofProperty: string) {
      console.log("Type of employment change event fired"+typeofProperty)
      if(typeofProperty=='Purchase or construct on identified property'){
        this.propertyselected=true;
        this.propertynotselected=false;
      }else{
        this.propertyselected=false;
        this.propertynotselected=true;
      }
    }

     createForm(){
       this.mortgagePropertyModel = this.fb.group({
         typeOfProperty: new FormControl('', [Validators.required]),
          purposeofloan: new FormControl('', [Validators.required]),
          mlsId : new FormControl('', [Validators.required])
       });
     }

     onSubmit({ value, valid }: { value: MortgageModel, valid: boolean }) {
        console.log(value.mlsId);
         this.mortgageService.getPropertyDetails(value.mlsId)
         .subscribe(returnData=>this.returnData = returnData); 
         console.log("below is return data"); 
         console.log(this.returnData); 
         console.log("Above is return data"); 

        if(null == this.returnData || this.returnData == undefined){
            this.hideElement = true;
            console.log("in if =======> "+this.hideElement)
        }
        else{
            this.hideElement = false;
            console.log("in else =======> "+this.hideElement)
        }

          console.log("4"); 
        }


        showProperties() {
        this.mortgageService.getAllProperties()
         .subscribe(returnData=>this.propertyData = returnData);
         console.log("below is showProperties data"); 
         console.log(this.propertyData); 
         console.log("Above is showProperties data"); 
         console.log("4"); 
          this.totalRec = this.propertyData.length;
          console.log("Total records -------> "+this.totalRec);
          console.log("Page number ------->"+this.page);
         if(null != this.propertyData || undefined != this.propertyData){
           console.log("inside showProperties if====="+this.showTable);
            this.showTable=true;
         }else{
           console.log("inside showProperties else====="+this.showTable);
            this.showTable=false;
         }
        }

        reset(){
            this.propertyData = new Array<any>();
        }
}
