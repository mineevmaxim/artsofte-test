import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailComponent } from './company-detail.component';
import { CompanyDetailRoutingModule } from "./company-detail-routing.module";



@NgModule({
  declarations: [
    CompanyDetailComponent
  ],
  imports: [
    CompanyDetailRoutingModule,
    CommonModule,
  ]
})
export class CompanyDetailModule { }
