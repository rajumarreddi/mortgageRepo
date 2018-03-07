import { Component, OnInit } from '@angular/core';
import { LoginDataService } from "../../login/logindataservice";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { MortgageEligibiltyModel } from "../mortgageeligibility/mortgageeligibilty.model";
import { routerTransition } from "../../router.animations";
import { MortgageDocumentsModel } from "../mortgagedocuments/mortgagedocuments.model";
import { MortgagePropertyModel } from "../mortgageproperty/mortgageproperty.model";
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
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

   onSubmitNext(){
 this.router.navigate(["/mortgagesubmission"]);
  }

downloadPdf(){
var doc = new jsPDF(); 
var specialElementHandlers = { 
    '#editor': function (element, renderer) { 
        return true; 
    } 
};
$('#submit').click(function () { 
    doc.fromHTML($('#previewId').html(), 15, 15, { 
        'width': 190, 
            'elementHandlers': specialElementHandlers 
    }); 
    doc.save('MortigageInfo.pdf'); 
});
}




}
