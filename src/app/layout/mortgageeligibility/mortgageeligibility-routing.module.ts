import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MortgageeligibilityComponent } from "./mortgageeligibility.component";

const routes: Routes = [
    {
        path: '', component: MortgageeligibilityComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MortgageEligibilityRoutingModule {
}
