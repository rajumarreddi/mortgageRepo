import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MortgageadjucationComponent } from "./mortgageadjucation.component";

const routes: Routes = [
    {
        path: '', component: MortgageadjucationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MortgageAdjucationRoutingModule {
}
