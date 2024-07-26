import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyYandexMapPage } from './company-yandex-map.page';
import { CompanyYandexMapRoutingModule } from "./company-yandex-map-routing.module";



@NgModule({
  declarations: [
    CompanyYandexMapPage
  ],
  imports: [
    CompanyYandexMapRoutingModule,
    CommonModule
  ]
})
export class CompanyYandexMapPageModule { }
