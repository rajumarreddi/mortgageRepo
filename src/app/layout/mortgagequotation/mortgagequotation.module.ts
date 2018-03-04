import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { StatModule } from '../../shared';
import { FileSelectDirective, FileUploadModule } from "ng2-file-upload";
import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MortgagequotationComponent } from "./mortgagequotation.component";
import { MortgageQuotationRoutingModule } from "./mortgagequotation-routing.module";
import { MortgageQuotationModel } from "./mortgagequotation.model";

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        MortgageQuotationRoutingModule,
        StatModule,
        FormsModule,
        ReactiveFormsModule,
       FileUploadModule,

    ],
    declarations: [
        MortgagequotationComponent,
        
    ],
        providers: [MortgageQuotationModel, MortgageEligibilityService]
})
export class MortgageQuotationModule {}
