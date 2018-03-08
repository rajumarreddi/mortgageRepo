import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../router.animations";

@Component({
  selector: 'app-mortgagesuccess',
  templateUrl: './mortgagesuccess.component.html',
  styleUrls: ['./mortgagesuccess.component.scss'],
  animations: [routerTransition()]
})
export class MortgagesuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
