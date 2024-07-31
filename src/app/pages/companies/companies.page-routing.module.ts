import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CompaniesPage } from "./companies.page";

const routes: Routes = [
    {
        path: '',
        component: CompaniesPage,
    },
];

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class CompaniesPageRoutingModule { }
