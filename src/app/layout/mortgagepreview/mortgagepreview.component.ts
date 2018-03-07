import { Component, OnInit } from '@angular/core';
import { LoginDataService } from "../../login/logindataservice";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { MortgageEligibiltyModel } from "../mortgageeligibility/mortgageeligibilty.model";
import { routerTransition } from "../../router.animations";
import { MortgageDocumentsModel } from "../mortgagedocuments/mortgagedocuments.model";
import { MortgagePropertyModel } from "../mortgageproperty/mortgageproperty.model";
import { Router } from '@angular/router';
import * as autoTable from 'jspdf-autotable'
import 'jspdf-autotable'
declare var jsPDF: any;
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
mortgageDocumentsModel:MortgageDocumentsModel;
  constructor(private loginService:LoginDataService,public router: Router) {
    console.log("Consttttttttttttttttt postal code  -->"+this.loginService.mortgageDocumentsModel.postalcode);
    this.mortgageEligibilityModel=this.loginService.mortgageEligibiltyModel;
    this.mortgageDocumentsModel=this.loginService.mortgageDocumentsModel;
    this.mortgagePropertyModel=this.loginService.mortgagePropertyModel;
    console.log(this.mortgagePropertyModel);
    this.mortgagePropertyModel.amenities='House,Community Pool,Garden/ Greenbelt/ Trails,Playground,Recreation Room,Sauna/ Spa/ Hot Tub';
    this.mortgagePropertyModel.listPrice='20714261';
    this.mortgagePropertyModel.area='Spring/Klein';
    this.mortgagePropertyModel.state='Texas';
    this.mortgagePropertyModel.country='United States';
    this.mortgagePropertyModel.postalCode='77096';
    this.mortgagePropertyModel.streetName='East Sweet Bottom Br';
    this.mortgagePropertyModel.city='Houston';

    this.mortgageDocumentsModel.goal='Buy my first home';
    this.mortgageDocumentsModel.purchaseprice='7789989';
    this.mortgageDocumentsModel.downpayment='55639';
    this.mortgageDocumentsModel.postalcode='77096';
   console.log(this.mortgageDocumentsModel.ratesModelId);

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

// var doc = new jsPDF(); 
// var specialElementHandlers = { 
// '#editor': function (element, renderer) { 
// return true; 
// } 
// };
// $('#submit').click(function () { 
// doc.setFontSize(20);
// doc.setTextColor(255, 0, 0);
// doc.text(40, 10, "Mortigage Application Info");
// doc.setFont("times");
// doc.setFontType("italic");
// doc.fromHTML($('#previewId').html(), 15, 15, { 
// 'width': 190, 
// 'valign':'left', 
// 'elementHandlers': specialElementHandlers 
// }); 
// doc.save('MortigageInfo.pdf'); 
// });
// }


var doc = new jsPDF('p', 'pt');
var header = function(data) {
        doc.setFontSize(18);
        doc.setTextColor(40);
        doc.setFontStyle('normal');
        //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
        doc.text("Mortgage Application", data.settings.margin.left, 50);
};
var res = doc.autoTableHtmlToJson(document.getElementById("basic-tablebackUp1"));
doc.autoTable(res.columns, res.data, {margin: {top: 80}}); 
var res1= doc.autoTableHtmlToJson(document.getElementById("basic-PropertybackUp1"));
var options = {
    beforePageContent: header,
    margin: {
    top: 80
        },
        startY: doc.autoTableEndPosY() + 20
};
doc.autoTable(res1.columns, res1.data, options);
var res2= doc.autoTableHtmlToJson(document.getElementById("basic-PropertybackUp2"));
var options = {
    beforePageContent: header,
    margin: {
    top: 80
        },
        startY: doc.autoTableEndPosY() + 40
};
doc.autoTable(res2.columns, res2.data, options);
doc.save("MortigageDetails.pdf"); 

}



}



