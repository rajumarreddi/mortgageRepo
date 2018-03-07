import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../router.animations";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
//import { MortgageDocumentsModel } from "./mortgagedocuments.model";
import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";
import { LoginService } from "../../http-service/login-service";
import { NgModel } from '@angular/forms';
import { DcoSignStatus } from "../mortgagedocuments/DocuSignStatus";
//import { RatesModel } from "./rates.model";
import { LoginDataService } from "../../login/logindataservice";
import { Router } from '@angular/router';
@Component({
  selector: 'app-mortgagesubmission',
  templateUrl: './mortgagesubmission.component.html',
  styleUrls: ['./mortgagesubmission.component.scss'],
    animations: [routerTransition()]
})
export class MortgagesubmissionComponent implements OnInit {
  returnSignStatus : DcoSignStatus = null;

  constructor(private fb:FormBuilder,private mortgageEligibilityService:MortgageEligibilityService,public router: Router,private loginService:LoginService,
  private loginDataService:LoginDataService) { }

  ngOnInit() {
  }


  onDocuSignChange(event: any)  {
    console.log("onChange1 =======");
    this.mortgageEligibilityService.onDocuSignServiceCall(event).subscribe((returnData : DcoSignStatus) => {this.returnSignStatus = returnData});
    console.log(this.returnSignStatus);
}

onClickSignatureBtn(){
  
        console.log("After hitting service ---> " + this.returnSignStatus.docuSgingURL);
        window.open(this.returnSignStatus.docuSgingURL, "_blank");
}

}
