import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MortgagepreviewComponent } from "./mortgagepreview.component";

const routes: Routes = [
    {
        path: '', component: MortgagepreviewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MortgagePreviewRoutingModule {
}
