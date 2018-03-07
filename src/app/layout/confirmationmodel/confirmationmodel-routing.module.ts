import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ConfirmationmodelComponent } from "./confirmationmodel.component";

const routes: Routes = [
    {
        path: '', component:ConfirmationmodelComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConfirmationModelRoutingModule {
}
