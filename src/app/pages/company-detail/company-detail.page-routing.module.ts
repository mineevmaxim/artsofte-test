import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CompanyDetailPage} from "./company-detail.page";

const routes: Routes = [
    {
        path: '',
        component: CompanyDetailPage
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanyDetailPageRoutingModule { }
