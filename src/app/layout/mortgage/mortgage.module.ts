import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MortgageComponent } from "./mortgage.component";
import { MortgageRoutingModule } from "./mortgage-routing.module";
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MortgageService } from "../../http-service/mortgage-service";
import { MortgageModel } from "./mortgage.model";

@NgModule({
    imports: [CommonModule, 
    MortgageRoutingModule,
    FormsModule,
    ReactiveFormsModule],
    declarations: [MortgageComponent],
    providers: [MortgageService, MortgageModel]
})
export class MortgageModule {}
