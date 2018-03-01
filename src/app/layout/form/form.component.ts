import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MortgageInfo } from "./mortgageInfo";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    mortgageInfo:FormGroup;

    constructor(private fb:FormBuilder) {
        
    }

    ngOnInit() {
        this.createForm();
    }

    createForm(){
        this.mortgageInfo=this.fb.group({
        address:['', Validators.required]
        });
    }

    onSubmit({ value, valid }: { value: MortgageInfo, valid: boolean }){
        console.log(value.address);
    }

}
