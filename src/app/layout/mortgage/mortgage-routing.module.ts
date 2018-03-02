import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MortgageComponent } from "./mortgage.component";

const routes: Routes = [
    {
        path: '', component: MortgageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MortgageRoutingModule {}
