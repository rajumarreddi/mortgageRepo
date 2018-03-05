import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MortgagequotationComponent } from "./mortgagequotation.component";

const routes: Routes = [
    {
        path: '', component: MortgagequotationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MortgageQuotationRoutingModule {
}
