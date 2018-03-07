import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { StatModule } from '../../shared';
import { FileSelectDirective, FileUploadModule } from "ng2-file-upload";
import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MortgagesuccessComponent } from "./mortgagesuccess.component";
import { MortgageSuccessRoutingModule } from "./mortgagesuccess-routing.module";

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        MortgageSuccessRoutingModule,
        StatModule,
        FormsModule,
        ReactiveFormsModule,
       FileUploadModule,

    ],
    declarations: [
        MortgagesuccessComponent,
        
    ],
        providers: [MortgageEligibilityService]
})
export class MortgageSuccessModule {}
