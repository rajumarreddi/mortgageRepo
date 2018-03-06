import { Component, OnInit } from '@angular/core';
import { LoginDataService } from "../../login/logindataservice";

@Component({
  selector: 'app-mortgagepreview',
  templateUrl: './mortgagepreview.component.html',
  styleUrls: ['./mortgagepreview.component.scss']
})
export class MortgagepreviewComponent implements OnInit {

  constructor(private loginService:LoginDataService) {
    console.log("Consttttttttttttttttt postal code  -->"+this.loginService.mortgageDocumentsModel.postalcode);
   }

  ngOnInit() {
  }

}
