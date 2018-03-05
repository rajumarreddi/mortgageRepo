import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertieslistComponent } from "./propertieslist.component";

const routes: Routes = [
    {
        path: '', component: PropertieslistComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PropertiesListRoutingModule {}
