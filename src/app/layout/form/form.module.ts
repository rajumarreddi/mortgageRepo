import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import { AgmCoreModule } from "@agm/core";
//import { MapsAPILoader } from "@agm/core";

@NgModule({
    imports: [CommonModule, FormRoutingModule,
        FormsModule, ReactiveFormsModule, PageHeaderModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA8PKTAnHwjDREcwGSqlqJTDxirZfn7zhQ',
      libraries: ["places"]
    }),
        ],
    declarations: [FormComponent],
    providers:[]
})
export class FormModule {}
