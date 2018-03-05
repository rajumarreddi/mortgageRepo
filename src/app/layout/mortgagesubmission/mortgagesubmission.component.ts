import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../router.animations";
@Component({
  selector: 'app-mortgagesubmission',
  templateUrl: './mortgagesubmission.component.html',
  styleUrls: ['./mortgagesubmission.component.scss'],
    animations: [routerTransition()]
})
export class MortgagesubmissionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
