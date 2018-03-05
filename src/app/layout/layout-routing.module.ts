import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'mortagageSearch', loadChildren: './mortgage/mortgage.module#MortgageModule' },
            { path: 'propertiesList', loadChildren: './mortgage/mortgage.module#MortgageModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'mortgageeligibility', loadChildren: './mortgageeligibility/mortgageeligibility.module#MortgageEligibilityModule' },
             { path: 'mortgagequotation', loadChildren: './mortgagequotation/mortgagequotation.module#MortgageQuotationModule' },
              { path: 'mortgageproperty', loadChildren: './mortgageproperty/mortgageproperty.module#MortgagePropertyModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
