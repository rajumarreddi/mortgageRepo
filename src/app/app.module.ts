import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
//import { MapsAPILoader } from "@agm/core";
// import {MapsAPILoader} from "@angular2-google-maps/core";
import { MortgageModel } from "./layout/mortgage/mortgage.model";
import { LoginModel } from "./login/login.model";
import { LoginService } from "./http-service/login-service";
import { HttpModule } from '@angular/http';
import { LoginDataService } from "./login/logindataservice";
import { AuthService } from "angular2-social-login/dist";
import { MapsAPILoader, AgmCoreModule } from "@agm/core";
import * as $ from 'jquery';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmationmodelComponent } from "./layout/confirmationmodel/confirmationmodel.component";


// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        // AgmCoreModule.forRoot({
        // libraries: ["places"]
        //  }),
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,HttpModule,
        ReactiveFormsModule,
          BootstrapModalModule,  
          BootstrapModalModule.forRoot({container:document.body}), 
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    
    declarations: [AppComponent,ConfirmationmodelComponent],
    providers: [AuthGuard,LoginService,LoginModel,LoginDataService,AuthService, MortgageModel],
    bootstrap: [AppComponent]
})
export class AppModule {}
