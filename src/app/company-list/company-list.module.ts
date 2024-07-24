import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list.component';
import { CompanyListRoutingModule } from "./company-list-routing.module";



@NgModule({
  declarations: [
    CompanyListComponent
  ],
  imports: [
    CompanyListRoutingModule,
    CommonModule
  ]
})
export class CompanyListModule { }
