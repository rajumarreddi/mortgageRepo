import { Component, OnInit } from '@angular/core';
import { LoginDataService } from "../../login/logindataservice";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { MortgageEligibiltyModel } from "../mortgageeligibility/mortgageeligibilty.model";
import { routerTransition } from "../../router.animations";
import { MortgageDocumentsModel } from "../mortgagedocuments/mortgagedocuments.model";
import { MortgagePropertyModel } from "../mortgageproperty/mortgageproperty.model";
import { Router } from '@angular/router';
@Component({
  selector: 'app-mortgagepreview',
  templateUrl: './mortgagepreview.component.html',
  styleUrls: ['./mortgagepreview.component.scss'],
   animations: [routerTransition()]
})
export class MortgagepreviewComponent implements OnInit {

mortgagePreviewModel:FormGroup;
mortgageEligibilityModel:MortgageEligibiltyModel;
mortgagePropertyModel:MortgagePropertyModel;
  constructor(private loginService:LoginDataService,public router: Router) {
    console.log("Consttttttttttttttttt postal code  -->"+this.loginService.mortgageDocumentsModel.postalcode);
    this.mortgageEligibilityModel=this.loginService.mortgageEligibiltyModel;
    this.mortgagePropertyModel=this.loginService.mortgagePropertyModel;
    console.log(this.mortgageEligibilityModel.address);
   }

  ngOnInit() {
  }


  onSubmitBack(){
 this.router.navigate(["/mortgagedocuments"]);
  }

}
