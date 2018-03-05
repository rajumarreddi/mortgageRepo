import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';



import { StatModule } from '../../shared';
import { FileSelectDirective, FileUploadModule } from "ng2-file-upload";
import { MortgageEligibilityRoutingModule } from "./mortgageeligibility-routing.module";
import { MortgageeligibilityComponent } from "./mortgageeligibility.component";
import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";
import { MortgageEligibiltyModel } from "./mortgageeligibilty.model";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AgmCoreModule } from "@agm/core";

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        MortgageEligibilityRoutingModule,
        StatModule,
        FormsModule,
        ReactiveFormsModule,
       FileUploadModule,
       AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA8PKTAnHwjDREcwGSqlqJTDxirZfn7zhQ',
      libraries: ["places"]}),

    ],
    declarations: [
        MortgageeligibilityComponent,
        
    ],
        providers: [MortgageEligibiltyModel, MortgageEligibilityService]
})
export class MortgageEligibilityModule {}
