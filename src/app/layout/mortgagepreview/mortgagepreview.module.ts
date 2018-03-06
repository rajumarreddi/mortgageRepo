import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';



import { StatModule } from '../../shared';
import { FileSelectDirective, FileUploadModule } from "ng2-file-upload";

import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AgmCoreModule } from "@agm/core";
import { MortgagePreviewModel } from "./mortgagepreview.model";
import { MortgagepreviewComponent } from "./mortgagepreview.component";
import { MortgagePreviewRoutingModule } from "./mortgagepreview-routing.module";

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        MortgagePreviewRoutingModule,
        StatModule,
        FormsModule,
        ReactiveFormsModule,
       FileUploadModule,
       AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA8PKTAnHwjDREcwGSqlqJTDxirZfn7zhQ',
      libraries: ["places"]}),

    ],
    declarations: [
        MortgagepreviewComponent,
        
    ],
        providers: [MortgagePreviewModel, MortgageEligibilityService]
})
export class MortgagePreviewModule {}
