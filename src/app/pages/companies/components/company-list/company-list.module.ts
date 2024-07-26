import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list.component';
import { CompaniesPageRoutingModule } from "../../companies.page-routing.module";
import { CompanyItemComponent } from './components/company-item/company-item.component';
import { CompanyListService } from "../../services/company-list.service";


@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyItemComponent,
  ],
  imports: [
    CompaniesPageRoutingModule,
    CommonModule
  ],
  providers: [CompanyListService],
  exports: [
    CompanyListComponent
  ]
})
export class CompanyListModule { }