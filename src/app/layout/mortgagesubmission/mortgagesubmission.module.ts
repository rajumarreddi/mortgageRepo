import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { StatModule } from '../../shared';
import { FileSelectDirective, FileUploadModule } from "ng2-file-upload";
import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MortgagesubmissionComponent } from "./mortgagesubmission.component";
import { MortgageSubmissionRoutingModule } from "./mortgagesubmission-routing.module";
import { MortgageSubmissionModel } from "./mortgagesubmission.model";

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        MortgageSubmissionRoutingModule,
        StatModule,
        FormsModule,
        ReactiveFormsModule,
       FileUploadModule,

    ],
    declarations: [
        MortgagesubmissionComponent,
        
    ],
        providers: [MortgageSubmissionModel, MortgageEligibilityService]
})
export class MortgageSubmissionModule {}
