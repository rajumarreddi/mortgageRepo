import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MortgagedocumentsComponent } from "./mortgagedocuments.component";

const routes: Routes = [
    {
        path: '', component: MortgagedocumentsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MortgageDocumentsRoutingModule {
}
