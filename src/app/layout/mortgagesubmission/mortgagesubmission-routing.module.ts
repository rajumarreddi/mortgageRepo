import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MortgagesubmissionComponent } from "./mortgagesubmission.component";

const routes: Routes = [
    {
        path: '', component: MortgagesubmissionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MortgageSubmissionRoutingModule {
}
