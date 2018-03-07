import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MortgagesuccessComponent } from "./mortgagesuccess.component";

const routes: Routes = [
    {
        path: '', component: MortgagesuccessComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MortgageSuccessRoutingModule {
}
