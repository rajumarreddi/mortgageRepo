import { Component, OnInit, Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { MortgageModule } from "./mortgage.module";
import { MortgageModel } from "./mortgage.model";

@Component({
    selector: 'mortagage-login',
    templateUrl: './mortgage.component.html',
    styleUrls: ['./mortgage.component.scss'],
    animations: [routerTransition()]
})
@Injectable()
export class MortgageComponent implements OnInit {
    mortagageModel:FormGroup;
    constructor(public router: Router,private fb:FormBuilder) {
        this.createForm();
    }
    ngOnInit() {}
    
     onSubmit({ value, valid }: { value: MortgageModel, valid: boolean }){
         console.log("HEllo==");
    }
    createForm(){
             this.mortagageModel = this.fb.group({
            mlsId : new FormControl('', [Validators.required]),
            });
        }
}
