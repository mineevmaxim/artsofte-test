import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyYandexMapComponent } from './company-yandex-map.component';
import { CompanyYandexMapRoutingModule } from "./company-yandex-map-routing.module";



@NgModule({
  declarations: [
    CompanyYandexMapComponent
  ],
  imports: [
    CompanyYandexMapRoutingModule,
    CommonModule
  ]
})
export class CompanyYandexMapModule { }
