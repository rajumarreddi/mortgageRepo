import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';



import { StatModule } from '../../shared';
import { FileSelectDirective, FileUploadModule } from "ng2-file-upload";

import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MortgageDocumentsModel } from "./mortgagedocuments.model";
import { MortgagedocumentsComponent } from "./mortgagedocuments.component";
import { MortgageDocumentsRoutingModule } from "./mortgagedocuments-routing.module";

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        MortgageDocumentsRoutingModule,
        StatModule,
        FormsModule,
        ReactiveFormsModule,
       FileUploadModule,

    ],
    declarations: [
        MortgagedocumentsComponent,
        
    ],
        providers: [MortgageDocumentsModel, MortgageEligibilityService]
})
export class MortgageDocumentsModule {}
