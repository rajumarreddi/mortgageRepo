import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from "../../router.animations";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";
import { LoginDataService } from "../../login/logindataservice";
import { LoginService } from "../../http-service/login-service";
import { MortgageAdjucationModel } from "./mortgageadjucation.model";
import { DialogService } from "ng2-bootstrap-modal";
import { ConfirmationmodelComponent } from "../confirmationmodel/confirmationmodel.component";
import { MortgageEligibiltyModel } from "../mortgageeligibility/mortgageeligibilty.model";

@Component({
    selector: 'app-mortgageadjucation',
    templateUrl: './mortgageadjucation.component.html',
    styleUrls: ['./mortgageadjucation.component.css'],
    animations: [routerTransition()]
})
export class MortgageadjucationComponent implements OnInit {
    mortgageAdjucationModel: FormGroup;
    monthArr: string[];
    yearArr: string[];
    firstNameModel:string;
    dateofbirthval:string;
    mortgageEligibilityModel:MortgageEligibiltyModel;
    message:string='Congratulations! You are eligible for $500000 as Mortgage';
    checked:boolean=false;
    constructor(private fb: FormBuilder, private mortgageEligibilityService: MortgageEligibilityService, public router: Router, private loginService: LoginService,
        private loginDataService: LoginDataService, private dialogService: DialogService) {



    }

    ngOnInit() {
        this.monthArr = this.mortgageEligibilityService.monthArr;
        this.yearArr = this.mortgageEligibilityService.yearArr;
        this.mortgageEligibilityModel=this.loginDataService.mortgageEligibiltyModel;
        this.firstNameModel=this.mortgageEligibilityModel.name;
        console.log("the value is>>>>>>"+this.mortgageEligibilityModel.dateofbirth);
        this.dateofbirthval=this.mortgageEligibilityModel.dateofbirth;
        console.log("the first Name is>>>>>>>>>>>>>"+this.firstNameModel);
        this.createForm();
    }



    createForm() {
        this.mortgageAdjucationModel = this.fb.group({


            ccholdername: new FormControl('', [Validators.required]),
            ccnumber1: new FormControl('', [Validators.required]),
            ccnumber2: new FormControl('', [Validators.required]),
            ccnumber3: new FormControl('', [Validators.required]),
            ccnumber4: new FormControl('', [Validators.required]),
            month: new FormControl('', [Validators.required]),
            year: new FormControl('', [Validators.required]),
            cvvnum: new FormControl('', [Validators.required]),
            SINnum: new FormControl('', [Validators.required]),
            firstName: new FormControl(this.mortgageEligibilityModel.name, [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            expenses: new FormControl('', [Validators.required]),
dateofbirth:new FormControl('', [Validators.required]),
scotiabankempornot:new FormControl('', [Validators.required]),
coapplicant:new FormControl('', [Validators.required]),
backrupty:new FormControl('', [Validators.required]),
canadiancitizen:new FormControl('', [Validators.required]),
maritalstatus:new FormControl('', [Validators.required]),







        });
    }

    onSubmitNext(mortgageAdjucationModel: MortgageAdjucationModel) {

        this.router.navigate(["/mortgagedocuments"]);
    }

    onSubmitBack(mortgageAdjucationModel: MortgageAdjucationModel) {
        this.router.navigate(["/mortgageproperty"]);
    }


    onSubmit({ value, valid }: { value: MortgageAdjucationModel, valid: boolean }) {
        console.log(value.ccnumber1);
        console.log(value.SINnum);
        this.checked=true;

    }


    showConfirm() {
        let disposable = this.dialogService.addDialog(ConfirmationmodelComponent, {
            title: 'Confirm title',
            message: 'Confirm message'
        })
            .subscribe((isConfirmed) => {
                //We get dialog result
                if (isConfirmed) {
                    alert('accepted');
                }
                else {
                    alert('declined');
                }
            });
        //We can close dialog calling disposable.unsubscribe();
        //If dialog was not closed manually close it by timeout
        setTimeout(() => {
            disposable.unsubscribe();
        }, 10000);
    }

}
