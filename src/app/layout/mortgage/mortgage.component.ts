import { Component, OnInit, Injectable, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { MortgageModule } from "./mortgage.module";
import { MortgageModel } from "./mortgage.model";
import { MortgageService } from "../../http-service/mortgage-service";

@Component({
    selector: 'mortagage-info',
    templateUrl: './mortgage.component.html',
    styleUrls: ['./mortgage.component.scss'],
    animations: [routerTransition()]
})

export class MortgageComponent implements OnInit {
    returnData: MortgageModel;
    mortgageModel: FormGroup;
    hideElement: boolean = false;
     propertyData: MortgageModel[];
  /*  constructor(public router: Router,private fb:FormBuilder) {
        this.createForm();
    }
    */

    constructor(public router: Router,private fb:FormBuilder, private mortgageService:MortgageService) {
        this.createForm();        
    }


    ngOnInit() {       
    }   
     
    createForm(){
             this.mortgageModel = this.fb.group({
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
        }

        reset(){
            this.propertyData = [];
        }
    
}
       

