import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { HttpModule } from '@angular/http';
import { LoginModel } from './login.model';
import { LoginService } from './../http-service/login-service';
import { MapsAPILoader, AgmCoreModule } from "@agm/core";
import { Angular2SocialLoginModule } from "angular2-social-login/dist";

let socialloginproviders = {
  "google": {
    "clientId": "1089972357857-1lcfjlqjq2labsngc2j8vusa7mhiviuu.apps.googleusercontent.com"
  }
};

@NgModule({ 
    imports: [CommonModule, LoginRoutingModule,FormsModule,HttpModule,Angular2SocialLoginModule,AgmCoreModule,
    FormsModule,ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZsbWTCdsczaA_J4ioF6PmeUu1T5W5bjw',
      libraries: ["places"]
    }),   
    ],
    declarations: [LoginComponent,],
    providers: [LoginModel, LoginService]
})
export class LoginModule {}

Angular2SocialLoginModule.loadProvidersScripts(socialloginproviders);
