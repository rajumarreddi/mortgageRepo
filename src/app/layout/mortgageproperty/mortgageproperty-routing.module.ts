import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MortgagepropertyComponent } from "./mortgageproperty.component";

const routes: Routes = [
    {
        path: '', component: MortgagepropertyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MortgagePropertyRoutingModule {
}
