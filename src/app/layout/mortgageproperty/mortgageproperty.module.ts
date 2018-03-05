import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { StatModule } from '../../shared';
import { FileSelectDirective, FileUploadModule } from "ng2-file-upload";
import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MortgagepropertyComponent } from "./mortgageproperty.component";
import { MortgagePropertyRoutingModule } from "./mortgageproperty-routing.module";
import { MortgagePropertyModel } from "./mortgageproperty.model";

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        MortgagePropertyRoutingModule,
        StatModule,
        FormsModule,
        ReactiveFormsModule,
       FileUploadModule,

    ],
    declarations: [
        MortgagepropertyComponent,
        
    ],
        providers: [MortgagePropertyModel, MortgageEligibilityService]
})
export class MortgagePropertyModule {}
