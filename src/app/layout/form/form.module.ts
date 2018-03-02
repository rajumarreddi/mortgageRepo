import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
//import { MapsAPILoader } from "@agm/core";

@NgModule({
    imports: [CommonModule, FormRoutingModule,
        FormsModule, ReactiveFormsModule, PageHeaderModule],
    declarations: [FormComponent],
    providers:[]
})
export class FormModule {}
