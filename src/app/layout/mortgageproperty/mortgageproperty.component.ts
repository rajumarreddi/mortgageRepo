import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../router.animations";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from "../../http-service/login-service";
import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";
import { MortgagePropertyModel } from "./mortgageproperty.model";
import { MortgageModel } from "../mortgage/mortgage.model";
import { MortgageService } from "../../http-service/mortgage-service";
import { MortgageEligibiltyModel } from "../mortgageeligibility/mortgageeligibilty.model";
import { LoginDataService } from "../../login/logindataservice";

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
       selectedPropertyDetails:MortgagePropertyModel[]=[];
        mortgageProp:MortgagePropertyModel=new MortgagePropertyModel();
//mortgageeligibilitymodel:MortgageEligibiltyModel;

  constructor(private fb:FormBuilder,private mortgageEligibilityService:MortgageEligibilityService,public router: Router,
  private mortgageService:MortgageService, private loginDataService:LoginDataService) { 
    this.propertyData = new Array<any>();
     this.purposeofLoanArr=this.mortgageEligibilityService.purposeofLoan;
      this.showProperties();
      // this.mortgageeligibilitymodel = this.mortgageEligibilityService.mortgageEligibilityModel;
       console.log("From constructor mortgageEligibiltyModel.name >>>>>>>>>>>"+this.loginDataService.mortgageEligibiltyModel.address);
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
        this.router.navigate(["/mortgageeligibility"]);
        
       
       
    }


    onSubmitNext({ value, valid }: { value: MortgagePropertyModel, valid: boolean }) {

        console.log(">>>>>>>>>>>full name in ocmoponent" + value.typeOfProperty);
        this.mortgageEligibilityService.mortgagePropertyModel=value;
        console.log("Radio button value======>"+value.selectedMLSId);
        this.loginDataService.mortgagePropertyModel=value;
      this.router.navigate(["/mortgageadjucation"]);
        
       
       
    }


    onTypeofPropertyChange(typeofProperty: string) {
      console.log("Type of employment change event fired"+typeofProperty);
      
      if(typeofProperty=='Search Property'){
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
          mlsId : new FormControl('', [Validators.required]),
          selectedMLSId:new FormControl('')

       });
     }

     onSubmit({ value, valid }: { value: MortgagePropertyModel, valid: boolean }) {
        console.log(value.mlsId);
        if(null != value.mlsId || undefined != value.mlsId){
            this.loginDataService.selectedMLSId = value.mlsId;
             this.selectedPropertyDetails=this.propertyData.filter(prop=>prop.mlsId == value.mlsId);
        }else if(null != value.selectedMLSId || undefined != value.selectedMLSId){
             this.loginDataService.selectedMLSId = value.selectedMLSId;
           this.selectedPropertyDetails=this.propertyData.filter(prop=>prop.mlsId == value.selectedMLSId);
       
        }else{
          this.loginDataService.selectedMLSId = "1005192";
              this.selectedPropertyDetails=this.propertyData.filter(prop=>prop.mlsId == '1005192');
        }
      this.populateModelObj(this.selectedPropertyDetails[0]);
       // this.loginDataService.mortgagePropertyModel=this.selectedPropertyDetails[0];

       
        console.log("AAAAAAAAAAAAAA");
         console.log(this.loginDataService.mortgagePropertyModel);
          console.log("AAAAAAAAAAAAAA");
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
          this.loginDataService.propertyData = this.propertyData;
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
        


        populateModelObj(arr:MortgagePropertyModel){
          this.mortgageProp.mlsId=arr.mlsId;
          console.log("Amenities values are"+arr.amenities);
          this.mortgageProp.amenities=arr.amenities;
          this.loginDataService.mortgagePropertyModel=this.mortgageProp;
          this.mortgageEligibilityService.mortgagePropertyModel=this.mortgageProp;
        }
}
