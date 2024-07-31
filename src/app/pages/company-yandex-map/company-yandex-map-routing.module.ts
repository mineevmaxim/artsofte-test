import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CompanyYandexMapPage } from "./company-yandex-map.page";

const routes: Routes = [
    {
        path: '',
        component: CompanyYandexMapPage,
    }
]

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class CompanyYandexMapRoutingModule { }
