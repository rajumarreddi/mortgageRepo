import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MortgageService } from "../../http-service/mortgage-service";
import { BrowserModule } from '@angular/platform-browser';
import { PropertieslistComponent } from "./propertieslist.component";
import { PropertiesListModel } from "./propertieslist.model";
import { PropertiesListRoutingModule } from "./propertieslist-routing.module";
import { NgxPaginationModule } from "ngx-pagination/dist/ngx-pagination";

@NgModule({
    imports: [CommonModule, 
   PropertiesListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule],
    declarations: [PropertieslistComponent],
    providers: [MortgageService, PropertiesListModel]
})
export class PropertiesListModule {}
