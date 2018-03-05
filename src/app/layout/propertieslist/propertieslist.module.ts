import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MortgageService } from "../../http-service/mortgage-service";

import { PropertieslistComponent } from "./propertieslist.component";
import { PropertiesListModel } from "./propertieslist.model";
import { PropertiesListRoutingModule } from "./propertieslist-routing.module";

@NgModule({
    imports: [CommonModule, 
   PropertiesListRoutingModule,
    FormsModule,
    ReactiveFormsModule],
    declarations: [PropertieslistComponent],
    providers: [MortgageService, PropertiesListModel]
})
export class PropertiesListModule {}
