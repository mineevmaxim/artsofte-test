import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CompanyYandexMapComponent } from "./company-yandex-map.component";

const routes: Routes = [
  {
    path: '',
    component: CompanyYandexMapComponent,
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CompanyYandexMapRoutingModule { }
