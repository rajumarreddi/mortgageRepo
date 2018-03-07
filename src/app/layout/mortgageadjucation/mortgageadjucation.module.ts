import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';



import { StatModule } from '../../shared';
import { FileSelectDirective, FileUploadModule } from "ng2-file-upload";

import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MortgageAdjucationModel } from "./mortgageadjucation.model";
import { MortgageAdjucationRoutingModule } from "./mortgageadjucation-routing.module";
import { MortgageadjucationComponent } from "./mortgageadjucation.component";
import { ConfirmationmodelComponent } from "../confirmationmodel/confirmationmodel.component";

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        MortgageAdjucationRoutingModule,
        StatModule,
        FormsModule,
        ReactiveFormsModule,
       FileUploadModule,

    ],
    
    declarations: [
        MortgageadjucationComponent,
        
    ],
        providers: [MortgageAdjucationModel, MortgageEligibilityService]
})
export class MortgageAdjucationModule {}
