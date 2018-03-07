import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';



import { StatModule } from '../../shared';
import { FileSelectDirective, FileUploadModule } from "ng2-file-upload";

import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { ConfirmationmodelComponent } from "../confirmationmodel/confirmationmodel.component";
import { ConfirmationModelRoutingModule } from "./confirmationmodel-routing.module";
import { ConfirmationModel } from "./confirmationmodel";

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ConfirmationModelRoutingModule,
        StatModule,
        FormsModule,
        ReactiveFormsModule,
       FileUploadModule,

    ],
    
    declarations: [
        ConfirmationmodelComponent,
        
    ],
        providers: [ConfirmationModel, MortgageEligibilityService]
})
export class ConfirmationmodelModule {}
