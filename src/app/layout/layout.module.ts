import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MortgageeligibilityComponent } from './mortgageeligibility/mortgageeligibility.component';
import { MortgagequotationComponent } from './mortgagequotation/mortgagequotation.component';
import { MortgagedocumentsComponent } from './mortgagedocuments/mortgagedocuments.component';
import { MortgagesubmissionComponent } from './mortgagesubmission/mortgagesubmission.component';
import { MortgagepropertyComponent } from './mortgageproperty/mortgageproperty.component';
import { PropertieslistComponent } from './propertieslist/propertieslist.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent,    MortgagesubmissionComponent]
})
export class LayoutModule {}
