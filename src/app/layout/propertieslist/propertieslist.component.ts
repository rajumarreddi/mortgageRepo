import { Component, OnInit, Injectable, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { MortgageService } from "../../http-service/mortgage-service";
import { MortgageModel } from "../mortgage/mortgage.model";
import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'app-propertieslist', 
  templateUrl: './propertieslist.component.html',
  styleUrls: ['./propertieslist.component.scss'],
  animations: [routerTransition()]
})
export class PropertieslistComponent implements OnInit {

       propertyData: Array<any>;
       showTable:boolean = false;
       propertyListModel:FormGroup;
       page: number = 1;
       totalRec : number;
     constructor(public router: Router,private fb:FormBuilder, private mortgageService:MortgageService) {
        this.propertyData = new Array<any>();
         this.showProperties();
    }

  ngOnInit() {
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
            this.propertyData = [];
        }

}
