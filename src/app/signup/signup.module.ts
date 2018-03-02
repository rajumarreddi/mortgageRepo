import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SignupModel } from "./signup.model";
import { LoginService } from "../http-service/login-service";
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,FormsModule,HttpModule,
        ReactiveFormsModule
  ],
  declarations: [SignupComponent],
    providers: [SignupModel, LoginService]
})
export class SignupModule { }
